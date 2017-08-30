<?php

/* themes/contrib/radix/templates/block/block.html.twig */
class __TwigTemplate_097f0a3f56f5051966b048ce902439ba9b529a83ef3530ffb716140c9b34f116 extends Twig_Template
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
        $tags = array("set" => 8, "block" => 15);
        $filters = array("clean_class" => 10, "without" => 14);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('set', 'block'),
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
        $this->displayBlock('content', $context, $blocks);
        // line 18
        echo "  </div>
</div>
";
    }

    // line 15
    public function block_content($context, array $blocks = array())
    {
        // line 16
        echo "      ";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["content"]) ? $context["content"] : null), "html", null, true));
        echo "
    ";
    }

    public function getTemplateName()
    {
        return "themes/contrib/radix/templates/block/block.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  64 => 16,  61 => 15,  55 => 18,  53 => 15,  48 => 14,  46 => 11,  45 => 10,  44 => 8,);
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
    {% block content %}
      {{ content }}
    {% endblock %}
  </div>
</div>
", "themes/contrib/radix/templates/block/block.html.twig", "/Users/luis.jimenez/Sites/seggroup/themes/contrib/radix/templates/block/block.html.twig");
    }
}
