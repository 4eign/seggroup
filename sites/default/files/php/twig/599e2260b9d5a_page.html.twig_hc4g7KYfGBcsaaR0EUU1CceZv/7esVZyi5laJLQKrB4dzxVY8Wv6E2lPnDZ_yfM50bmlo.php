<?php

/* themes/custom/seggroup_radix/templates/page/page.html.twig */
class __TwigTemplate_2b6f1ec6609cfce07b76e150a396741b3e401e8f6bcd1d86799ed7ee2e09fe80 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("if" => 13);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if'),
                array(),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 7
        echo "
<header>
  <nav class=\"green darken-1\">
    <div class=\"nav-wrapper\">

      ";
        // line 13
        echo "        ";
        if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "logo", array())) {
            // line 14
            echo "            ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "logo", array()), "html", null, true));
            echo "
        ";
        }
        // line 16
        echo "      <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>
      <ul class=\"right hide-on-med-and-down\">
        <li><a href=\"#seccion1\">seccion1</a></li>
        <li><a href=\"#seccion2\">seccion2</a></li>
        <li><a href=\"#seccion3\">seccion3</a></li>
        <li><a href=\"#seccion4\">seccion4</a></li>
      </ul>
      <ul class=\"side-nav\" id=\"mobile-demo\">
        <li><a href=\"#seccion1\">seccion1</a></li>
        <li><a href=\"#seccion2\">seccion2</a></li>
        <li><a href=\"#seccion3\">seccion3</a></li>
        <li><a href=\"#seccion4\">seccion4</a></li>
      </ul>
    </div>
  </nav>
</header>
<main role=\"main\">
  <div class=\"container-fluid\">
    ";
        // line 34
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content", array()), "html", null, true));
        echo "
  </div>
  <div class=\"divider\"></div>
  <div class=\"row\">

    <h2 class=\"header center\">Contactenos</h2>
    <form class=\"col s12\">
      <div class=\"row\">
        <div class=\"input-field col s12 m6 l6\">
          <i class=\"material-icons prefix\">account_circle</i>
          <input id=\"first_name\" type=\"text\" class=\"validate\">
          <label for=\"first_name\">Nombre</label>
        </div>
        <div class=\"input-field col s12 m6 l6\">
          <i class=\"material-icons prefix\">phone</i>
          <input id=\"icon_telephone\" type=\"tel\" class=\"validate\">
          <label for=\"icon_telephone\">Teléfono</label>
        </div>
      </div>
      <div class=\"row\">
        <div class=\"input-field col s12\">
          <i class=\"material-icons prefix\">contact_mail</i>
          <input id=\"email\" type=\"email\" class=\"validate\">
          <label for=\"email\">Correo electrónico</label>
        </div>
      </div>
      <div class=\"row\">
        <div class=\"input-field col s12\">
          <i class=\"material-icons prefix\">chat</i>
          <textarea id=\"textarea1\" class=\"materialize-textarea\"></textarea>
          <label for=\"textarea1\">Mensaje</label>
        </div>
      </div>
      <button class=\"btn waves-effect waves-light right\" type=\"submit\" name=\"action\">Enviar
        <i class=\"material-icons right\">send</i>
      </button>
    </form>
  </div>
</main>
<main role=\"main\">
  <div class=\"container\">
    <div data-ng-services-list>
      ";
        // line 77
        echo "    </div>

  </div>
</main>

<footer class=\"page-footer teal accent-3\">
  <div class=\"container\">
    <div class=\"row\">
      <div class=\"col l4 m6 s12 center\">
        <i class=\"large material-icons\">settings_input_composite</i>
        <h5 class=\"white-text\">Quienes somós</h5>
        <p class=\"grey-text text-lighten-4\"><b>SEG GROUP</b>, es un grupo de profesionales cuyo objetivo es direccionar a diferentes tipos de organizaciones en el diseño e implementación de sistemas de gestión, estableciendo herramientas que permitan brindar soluciones en la búsqueda continua del éxito y el crecimiento empresarial.
        </p>
      </div>
      <div class=\"col l4 m6 s12 center\">
        <i class=\"large material-icons\">settings_input_composite</i>
        <h5 class=\"white-text\">Mision</h5>
        <p class=\"grey-text text-lighten-4\">Somos un grupo de consultores especializados que presta sus servicios a compañías que desean realizar diseño, implementación y mantenimiento de los diferentes tipos de Sistemas de Gestión, garantizando el cumplimiento de todos los requerimientos exigidos por la Ley y de otra índole. Así mismo, nos encargamos de apoyar la mejora continua de su empresa optimizando y mejorando procesos.
        </p>
      </div>
      <div class=\"col l4 m6 s12 center\">
        <i class=\"large material-icons\">settings_input_composite</i>
        <h5 class=\"white-text\">Visión</h5>
        <p class=\"grey-text text-lighten-4\"><b>SEG GROUP</b> será en el 2020 el mejor aliado estratégico para las diferentes empresas y colaboradores, garantizando calidad en sus servicios y logrando la confiabilidad y seguridad de sus clientes.
        </p>
        ";
        // line 111
        echo "      </div>
    </div>
  </div>
  <div class=\"footer-copyright\">
    <div class=\"container\">
      © 2017 4eign
      <a class=\"grey-text text-lighten-4 right\" href=\"#!\">More Links</a>
    </div>
  </div>
</footer>
";
    }

    public function getTemplateName()
    {
        return "themes/custom/seggroup_radix/templates/page/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  151 => 111,  124 => 77,  79 => 34,  59 => 16,  53 => 14,  50 => 13,  43 => 7,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{#
/**
 * @file
 * Template for the main page.
 */
#}

<header>
  <nav class=\"green darken-1\">
    <div class=\"nav-wrapper\">

      {# <a href=\"#!\" class=\"brand-logo\">Seggroup</a> #}
        {% if page.logo %}
            {{ page.logo }}
        {% endif %}
      <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>
      <ul class=\"right hide-on-med-and-down\">
        <li><a href=\"#seccion1\">seccion1</a></li>
        <li><a href=\"#seccion2\">seccion2</a></li>
        <li><a href=\"#seccion3\">seccion3</a></li>
        <li><a href=\"#seccion4\">seccion4</a></li>
      </ul>
      <ul class=\"side-nav\" id=\"mobile-demo\">
        <li><a href=\"#seccion1\">seccion1</a></li>
        <li><a href=\"#seccion2\">seccion2</a></li>
        <li><a href=\"#seccion3\">seccion3</a></li>
        <li><a href=\"#seccion4\">seccion4</a></li>
      </ul>
    </div>
  </nav>
</header>
<main role=\"main\">
  <div class=\"container-fluid\">
    {{ page.content }}
  </div>
  <div class=\"divider\"></div>
  <div class=\"row\">

    <h2 class=\"header center\">Contactenos</h2>
    <form class=\"col s12\">
      <div class=\"row\">
        <div class=\"input-field col s12 m6 l6\">
          <i class=\"material-icons prefix\">account_circle</i>
          <input id=\"first_name\" type=\"text\" class=\"validate\">
          <label for=\"first_name\">Nombre</label>
        </div>
        <div class=\"input-field col s12 m6 l6\">
          <i class=\"material-icons prefix\">phone</i>
          <input id=\"icon_telephone\" type=\"tel\" class=\"validate\">
          <label for=\"icon_telephone\">Teléfono</label>
        </div>
      </div>
      <div class=\"row\">
        <div class=\"input-field col s12\">
          <i class=\"material-icons prefix\">contact_mail</i>
          <input id=\"email\" type=\"email\" class=\"validate\">
          <label for=\"email\">Correo electrónico</label>
        </div>
      </div>
      <div class=\"row\">
        <div class=\"input-field col s12\">
          <i class=\"material-icons prefix\">chat</i>
          <textarea id=\"textarea1\" class=\"materialize-textarea\"></textarea>
          <label for=\"textarea1\">Mensaje</label>
        </div>
      </div>
      <button class=\"btn waves-effect waves-light right\" type=\"submit\" name=\"action\">Enviar
        <i class=\"material-icons right\">send</i>
      </button>
    </form>
  </div>
</main>
<main role=\"main\">
  <div class=\"container\">
    <div data-ng-services-list>
      {#here page content#}
    </div>

  </div>
</main>

<footer class=\"page-footer teal accent-3\">
  <div class=\"container\">
    <div class=\"row\">
      <div class=\"col l4 m6 s12 center\">
        <i class=\"large material-icons\">settings_input_composite</i>
        <h5 class=\"white-text\">Quienes somós</h5>
        <p class=\"grey-text text-lighten-4\"><b>SEG GROUP</b>, es un grupo de profesionales cuyo objetivo es direccionar a diferentes tipos de organizaciones en el diseño e implementación de sistemas de gestión, estableciendo herramientas que permitan brindar soluciones en la búsqueda continua del éxito y el crecimiento empresarial.
        </p>
      </div>
      <div class=\"col l4 m6 s12 center\">
        <i class=\"large material-icons\">settings_input_composite</i>
        <h5 class=\"white-text\">Mision</h5>
        <p class=\"grey-text text-lighten-4\">Somos un grupo de consultores especializados que presta sus servicios a compañías que desean realizar diseño, implementación y mantenimiento de los diferentes tipos de Sistemas de Gestión, garantizando el cumplimiento de todos los requerimientos exigidos por la Ley y de otra índole. Así mismo, nos encargamos de apoyar la mejora continua de su empresa optimizando y mejorando procesos.
        </p>
      </div>
      <div class=\"col l4 m6 s12 center\">
        <i class=\"large material-icons\">settings_input_composite</i>
        <h5 class=\"white-text\">Visión</h5>
        <p class=\"grey-text text-lighten-4\"><b>SEG GROUP</b> será en el 2020 el mejor aliado estratégico para las diferentes empresas y colaboradores, garantizando calidad en sus servicios y logrando la confiabilidad y seguridad de sus clientes.
        </p>
        {#
        {{ page.footer }}
        <ul>
          <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 1</a></li>
          <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 2</a></li>
          <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 3</a></li>
          <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 4</a></li>
        </ul>
        #}
      </div>
    </div>
  </div>
  <div class=\"footer-copyright\">
    <div class=\"container\">
      © 2017 4eign
      <a class=\"grey-text text-lighten-4 right\" href=\"#!\">More Links</a>
    </div>
  </div>
</footer>
", "themes/custom/seggroup_radix/templates/page/page.html.twig", "/Users/luis.jimenez/Sites/seggroup/themes/custom/seggroup_radix/templates/page/page.html.twig");
    }
}
