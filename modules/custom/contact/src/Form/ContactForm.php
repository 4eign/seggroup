<?php

namespace Drupal\contact\Form;

use Drupal\Core\Ajax\AjaxResponse;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\contact\Ajax\DisplayMessageCommand;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Mail\MailManager;

/**
 * Class ContactForm.
 */
class ContactForm extends FormBase {

  /**
   * Drupal\Core\Mail\MailManager definition.
   *
   * @var \Drupal\Core\Mail\MailManager
   */
  protected $pluginManagerMail;
  
  /**
   * Constructs a new ContactForm object.
   * @param \Drupal\Core\Mail\MailManager $plugin_manager_mail
   */
  public function __construct(
    MailManager $plugin_manager_mail
  ) {
    $this->pluginManagerMail = $plugin_manager_mail;
  }

  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('plugin.manager.mail')
    );
  }


  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'contact_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    
    $form['message'] = array(
      '#type' => 'container',
      '#attributes' => [
        'id' => 'messages-container',
      ],
    );
    
    $form['name'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Nombre'),
      '#title_display' => 'after',
      '#maxlength' => 64,
      '#field_prefix' => '<i class="material-icons prefix">account_circle</i>',
    ];
    
    $form['phone_number'] = [
      '#type' => 'tel',
      '#title' => $this->t('Teléfono'),
      '#title_display' => 'after',
      '#maxlength' => 64,
      '#field_prefix' => '<i class="material-icons prefix">phone</i>',
    ];
    
    $form['email'] = [
      '#type' => 'email',
      '#title' => $this->t('Correo electrónico'),
      '#title_display' => 'after',
      '#maxlength' => 64,
      '#field_prefix' => '<i class="material-icons prefix">contact_mail</i>',
    ];
    
    $form['description'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Mensaje'),
      '#title_display' => 'after',
      '#maxlength' => 300,
      '#field_prefix' => '<i class="material-icons prefix">chat</i>',
    ];
  
    $form['actions']['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Enviar'),
      //'#submit' => array('::sTransferBalance'),
      '#ajax' => [
        'callback' => '::sendInformationCallback',
        //'wrapper' => 'messages-container',
        //'method' => 'replace'
      ],
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    parent::validateForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    \Drupal::logger('entro al submit handler');
    // Display result.
    foreach ($form_state->getValues() as $key => $value) {
      drupal_set_message($key . ': ' . $value);
    }

  }
  
  /**
   * @param array $form
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   */
  public function sendInformationCallback(array &$form, FormStateInterface $form_state) {
  
    try{
      $module = 'contact';
      $key = 'test';
      //$to ='somosgruposeg@gmail.com';
      $to = \Drupal::config('system.site')->get('mail');
      
      $langcode = \Drupal::languageManager()->getCurrentLanguage()->getId();
      
      $params['name'] = $form_state->getValue('name');
      $params['email'] = $form_state->getValue('email');
      $params['phone_number'] = $form_state->getValue('phone_number');
      $params['description'] = $form_state->getValue('description');
      
      $send = true;
      
      $result = $this->pluginManagerMail->mail($module, $key, $to, $langcode, $params, NULL, $send);
      if ($result['result'] !== true) {
        \Drupal::logger('luis')->error('error enviando mensaje', (array)$result);
        drupal_set_message(t('There was a problem sending your message and it was not sent.'), 'error');
      }
      else {
        \Drupal::logger('luis')->error('Mensaje enviado correctamente', (array)$result);
        drupal_set_message(t('Mensaje enviado correctamente.'),'status');
        /*
        $response = new AjaxResponse();
        $response->addCommand(new ReplaceCommand(
          '#messages-container',
          '<p>mensaje enviado correctamente</p>'));
        return $response;
        */
        $message = new \stdClass();
        $message->mid = 1;
        $message->subject = 'este es el subject';
        $message->content = 'Mensaje enviado correctamente.';
        $response = new AjaxResponse();
        $response->addCommand(new DisplayMessageCommand($message));
        return $response;
      }
    }catch(\Exception $e){
      watchdog_exception('luis-watch',$e);
      \Drupal::logger('luis')->error('error en callback', (array)$e);
      drupal_set_message('error');
    }
  
    //return $form;
    //echo "successMessage('hello');";
    //echo "<script> successMessage('hello2'); </script>";
    
  }

}
