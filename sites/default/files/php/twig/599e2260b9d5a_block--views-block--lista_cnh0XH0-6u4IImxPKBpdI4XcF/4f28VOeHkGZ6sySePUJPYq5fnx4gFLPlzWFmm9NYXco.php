<?php

/* themes/custom/seggroup_radix/templates/block/block--views-block--lista-de-servicios-block-1.html.twig */
class __TwigTemplate_51aff85bc64b01704cd22af6582657bd1ee8f5dd4d99578d1ff9f3c2b1b47ad8 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'content' => array($this, 'block_content'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("set" => 8, "if" => 17, "block" => 23);
        $filters = array("clean_class" => 10, "without" => 15);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('set', 'if', 'block'),
                array('clean_class', 'without'),
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

        // line 8
        $context["classes"] = array(0 => "block", 1 => ((        // line 10
(isset($context["bundle"]) ? $context["bundle"] : null)) ? (("block--" . \Drupal\Component\Utility\Html::getClass((isset($context["bundle"]) ? $context["bundle"] : null)))) : ("")), 2 => ((        // line 11
(isset($context["id"]) ? $context["id"] : null)) ? (("block--" . \Drupal\Component\Utility\Html::getClass((isset($context["id"]) ? $context["id"] : null)))) : ("")));
        // line 14
        echo "
<div";
        // line 15
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_without($this->getAttribute((isset($context["attributes"]) ? $context["attributes"] : null), "addClass", array(0 => (isset($context["classes"]) ? $context["classes"] : null)), "method"), "id"), "html", null, true));
        echo ">
  ";
        // line 16
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["title_prefix"]) ? $context["title_prefix"] : null), "html", null, true));
        echo "
  ";
        // line 17
        if ((isset($context["label"]) ? $context["label"] : null)) {
            // line 18
            echo "    <h2 class=\"header center\">";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["label"]) ? $context["label"] : null), "html", null, true));
            echo "</h2>
  ";
        }
        // line 20
        echo "  ";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["title_suffix"]) ? $context["title_suffix"] : null), "html", null, true));
        echo "
  <div class=\"container\">
    <div class=\"block__content\">
      ";
        // line 23
        $this->displayBlock('content', $context, $blocks);
        // line 34
        echo "    </div>
  </div>
</div>
";
    }

    // line 23
    public function block_content($context, array $blocks = array())
    {
        // line 24
        echo "        <div class=\"row\">
          <div class=\"col s12 m12 l12\">
            <div class=\"card-panel teal hoverable\">
              <span class=\"white-text\">
                ";
        // line 28
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["content"]) ? $context["content"] : null), "html", null, true));
        echo "
              </span>
            </div>
          </div>
        </div>
      ";
    }

    public function getTemplateName()
    {
        return "themes/custom/seggroup_radix/templates/block/block--views-block--lista-de-servicios-block-1.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  92 => 28,  86 => 24,  83 => 23,  76 => 34,  74 => 23,  67 => 20,  61 => 18,  59 => 17,  55 => 16,  51 => 15,  48 => 14,  46 => 11,  45 => 10,  44 => 8,);
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
 * Default template for block.
 */
#}
{%
set classes = [
'block',
bundle ? 'block--' ~ bundle|clean_class,
id ? 'block--' ~ id|clean_class,
]
%}

<div{{ attributes.addClass(classes)|without('id') }}>
  {{ title_prefix }}
  {% if label %}
    <h2 class=\"header center\">{{ label }}</h2>
  {% endif %}
  {{ title_suffix }}
  <div class=\"container\">
    <div class=\"block__content\">
      {% block content %}
        <div class=\"row\">
          <div class=\"col s12 m12 l12\">
            <div class=\"card-panel teal hoverable\">
              <span class=\"white-text\">
                {{ content }}
              </span>
            </div>
          </div>
        </div>
      {% endblock %}
    </div>
  </div>
</div>
", "themes/custom/seggroup_radix/templates/block/block--views-block--lista-de-servicios-block-1.html.twig", "/Users/luis.jimenez/Sites/seggroup/themes/custom/seggroup_radix/templates/block/block--views-block--lista-de-servicios-block-1.html.twig");
    }
}
