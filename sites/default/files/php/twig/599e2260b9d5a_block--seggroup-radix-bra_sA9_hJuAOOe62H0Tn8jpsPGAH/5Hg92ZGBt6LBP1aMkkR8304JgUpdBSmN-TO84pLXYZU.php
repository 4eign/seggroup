<?php

/* themes/custom/seggroup_radix/templates/block/block--seggroup-radix-branding.html.twig */
class __TwigTemplate_42c3dc307ade272788716eb3392a91d6468029cef5bb33292654fae270c32839 extends Twig_Template
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
        $tags = array("set" => 8, "if" => 16, "block" => 21);
        $filters = array("clean_class" => 10, "without" => 14);
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
        echo "<div";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_without($this->getAttribute((isset($context["attributes"]) ? $context["attributes"] : null), "addClass", array(0 => (isset($context["classes"]) ? $context["classes"] : null)), "method"), "id"), "html", null, true));
        echo ">
  ";
        // line 15
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["title_prefix"]) ? $context["title_prefix"] : null), "html", null, true));
        echo "
  ";
        // line 16
        if ((isset($context["label"]) ? $context["label"] : null)) {
            // line 17
            echo "    <h4";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute((isset($context["title_attributes"]) ? $context["title_attributes"] : null), "addClass", array(0 => "block__title"), "method"), "html", null, true));
            echo ">";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["label"]) ? $context["label"] : null), "html", null, true));
            echo "</h4>
  ";
        }
        // line 19
        echo "  ";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["title_suffix"]) ? $context["title_suffix"] : null), "html", null, true));
        echo "
  <div class=\"block__content\">
    ";
        // line 21
        $this->displayBlock('content', $context, $blocks);
        // line 24
        echo "  </div>
</div>";
    }

    // line 21
    public function block_content($context, array $blocks = array())
    {
        // line 22
        echo "      <a href=\"#\" class=\"brand-logo\">";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["content"]) ? $context["content"] : null), "html", null, true));
        echo "</a>
    ";
    }

    public function getTemplateName()
    {
        return "themes/custom/seggroup_radix/templates/block/block--seggroup-radix-branding.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  83 => 22,  80 => 21,  75 => 24,  73 => 21,  67 => 19,  59 => 17,  57 => 16,  53 => 15,  48 => 14,  46 => 11,  45 => 10,  44 => 8,);
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
    <h4{{ title_attributes.addClass('block__title') }}>{{ label }}</h4>
  {% endif %}
  {{ title_suffix }}
  <div class=\"block__content\">
    {% block content %}
      <a href=\"#\" class=\"brand-logo\">{{ content }}</a>
    {% endblock %}
  </div>
</div>", "themes/custom/seggroup_radix/templates/block/block--seggroup-radix-branding.html.twig", "/Users/luis.jimenez/Sites/seggroup/themes/custom/seggroup_radix/templates/block/block--seggroup-radix-branding.html.twig");
    }
}
