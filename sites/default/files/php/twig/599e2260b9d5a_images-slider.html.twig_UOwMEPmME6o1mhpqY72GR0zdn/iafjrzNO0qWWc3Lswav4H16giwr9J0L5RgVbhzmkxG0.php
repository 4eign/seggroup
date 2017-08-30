<?php

/* modules/custom/images_slider/templates/images-slider.html.twig */
class __TwigTemplate_4d80619453e53ae2024f6a159c5539be5eecbd37c32d073ea569e543e9cb4841 extends Twig_Template
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
        $tags = array("for" => 4);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('for'),
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

        // line 1
        echo "<div data-ng-slider ng-init=\"uuid='";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["uuid"]) ? $context["uuid"] : null), "html", null, true));
        echo "'\">
  <div class=\"slider\">
    <ul class=\"slides\">
      ";
        // line 4
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["images"]) ? $context["images"] : null));
        foreach ($context['_seq'] as $context["_key"] => $context["image"]) {
            // line 5
            echo "        <li>
          <img src=\"";
            // line 6
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["image"], "url", array()), "html", null, true));
            echo "\"> <!-- random image -->
          <div class=\"caption center-align\">
            <h3>This is our big Tagline!</h3>
            <h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>
          </div>
        </li>
      ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['image'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 13
        echo "      ";
        // line 43
        echo "    </ul>
  </div>
</div>
";
    }

    public function getTemplateName()
    {
        return "modules/custom/images_slider/templates/images-slider.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  72 => 43,  70 => 13,  57 => 6,  54 => 5,  50 => 4,  43 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("<div data-ng-slider ng-init=\"uuid='{{ uuid }}'\">
  <div class=\"slider\">
    <ul class=\"slides\">
      {% for image in images%}
        <li>
          <img src=\"{{ image.url }}\"> <!-- random image -->
          <div class=\"caption center-align\">
            <h3>This is our big Tagline!</h3>
            <h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>
          </div>
        </li>
      {% endfor %}
      {#
      <li>
        <img src=\"https://lorempixel.com/580/250/nature/1\"> <!-- random image -->
        <div class=\"caption center-align\">
          <h3>This is our big Tagline!</h3>
          <h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src=\"https://lorempixel.com/580/250/nature/2\"> <!-- random image -->
        <div class=\"caption left-align\">
          <h3>Left Aligned Caption</h3>
          <h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src=\"https://lorempixel.com/580/250/nature/3\"> <!-- random image -->
        <div class=\"caption right-align\">
          <h3>Right Aligned Caption</h3>
          <h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src=\"https://lorempixel.com/580/250/nature/4\"> <!-- random image -->
        <div class=\"caption center-align\">
          <h3>This is our big Tagline!</h3>
          <h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>
        </div>
      </li>
      #}
    </ul>
  </div>
</div>
", "modules/custom/images_slider/templates/images-slider.html.twig", "/Users/luis.jimenez/Sites/seggroup/modules/custom/images_slider/templates/images-slider.html.twig");
    }
}
