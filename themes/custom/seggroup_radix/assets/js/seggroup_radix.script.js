/**
 * @file
 * Custom scripts for theme.
 */
(function ($, Drupal) {

  // Hello World.
  Drupal.behaviors.helloWorld = {
    attach: function (context) {
      console.log('Hello World');
      $('.slider').slider();
      $(".button-collapse").sideNav();
      $('.tooltipped').tooltip({delay: 50});
    }
  };

  /**
   * Add new command for reading a message.
   */
  Drupal.AjaxCommands.prototype.displayMessage = function(ajax, response, status){
    console.log(response);
    //var message = response.subject;
    var $toastContent = $('<span>' + response.content + '</span>').add($('<button class="btn-flat toast-action">Undo</button>'));
    Materialize.toast($toastContent, 5000,'rounded');
    /* Place content in current-msg div.
    $('#current-msg h2').html(response.subject);
    $('#current-msg p').html(response.content);
    // Remove from unread list.
    $('#msg-' + response.mid).remove();
    // Add message to read list.
    $('#read-msgs').append('<li>' + response.subject + '</li>');
    */
  }

})(jQuery, Drupal);
