<?php

/* themes/contrib/radix/templates/view/views-view.html.twig */
class __TwigTemplate_1c1cffc2a0645f79fba697efbfa811fcabbdf248b76ccfadeaeb972d3127e48c extends Twig_Template
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
        $tags = array("set" => 8, "if" => 19);
        $filters = array("clean_class" => 10);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('set', 'if'),
                array('clean_class'),
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
        $context["classes"] = array(0 => "view", 1 => ("view--" . \Drupal\Component\Utility\Html::getClass(        // line 10
(isset($context["id"]) ? $context["id"] : null))), 2 => ((("view--" . \Drupal\Component\Utility\Html::getClass(        // line 11
(isset($context["id"]) ? $context["id"] : null))) . "--") . \Drupal\Component\Utility\Html::getClass((isset($context["display_id"]) ? $context["display_id"] : null))), 3 => ("view-id-" .         // line 12
(isset($context["id"]) ? $context["id"] : null)), 4 => ("view-display-id-" .         // line 13
(isset($context["display_id"]) ? $context["display_id"] : null)), 5 => ((        // line 14
(isset($context["dom_id"]) ? $context["dom_id"] : null)) ? (("js-view-dom-id-" . (isset($context["dom_id"]) ? $context["dom_id"] : null))) : ("")));
        // line 17
        echo "<div";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute((isset($context["attributes"]) ? $context["attributes"] : null), "addClass", array(0 => (isset($context["classes"]) ? $context["classes"] : null)), "method"), "html", null, true));
        echo ">
  ";
        // line 18
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["title_prefix"]) ? $context["title_prefix"] : null), "html", null, true));
        echo "
  ";
        // line 19
        if ((isset($context["title"]) ? $context["title"] : null)) {
            // line 20
            echo "    ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["title"]) ? $context["title"] : null), "html", null, true));
            echo "
  ";
        }
        // line 22
        echo "  ";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["title_suffix"]) ? $context["title_suffix"] : null), "html", null, true));
        echo "
  ";
        // line 23
        if ((isset($context["header"]) ? $context["header"] : null)) {
            // line 24
            echo "    <div class=\"view__header\">
      ";
            // line 25
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["header"]) ? $context["header"] : null), "html", null, true));
            echo "
    </div>
  ";
        }
        // line 28
        echo "  ";
        if ((isset($context["exposed"]) ? $context["exposed"] : null)) {
            // line 29
            echo "    <div class=\"view__filters view-filters\">
      ";
            // line 30
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["exposed"]) ? $context["exposed"] : null), "html", null, true));
            echo "
    </div>
  ";
        }
        // line 33
        echo "  ";
        if ((isset($context["attachment_before"]) ? $context["attachment_before"] : null)) {
            // line 34
            echo "    <div class=\"view__attachment view__attachment--before\">
      ";
            // line 35
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["attachment_before"]) ? $context["attachment_before"] : null), "html", null, true));
            echo "
    </div>
  ";
        }
        // line 38
        echo "
  ";
        // line 39
        if ((isset($context["rows"]) ? $context["rows"] : null)) {
            // line 40
            echo "    <div class=\"view__content\">
      ";
            // line 41
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["rows"]) ? $context["rows"] : null), "html", null, true));
            echo "
    </div>
  ";
        } elseif (        // line 43
(isset($context["empty"]) ? $context["empty"] : null)) {
            // line 44
            echo "    <div class=\"view__empty\">
      ";
            // line 45
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["empty"]) ? $context["empty"] : null), "html", null, true));
            echo "
    </div>
  ";
        }
        // line 48
        echo "
  ";
        // line 49
        if ((isset($context["pager"]) ? $context["pager"] : null)) {
            // line 50
            echo "    ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["pager"]) ? $context["pager"] : null), "html", null, true));
            echo "
  ";
        }
        // line 52
        echo "  ";
        if ((isset($context["attachment_after"]) ? $context["attachment_after"] : null)) {
            // line 53
            echo "    <div class=\"view__attachment view__attachment--after\">
      ";
            // line 54
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["attachment_after"]) ? $context["attachment_after"] : null), "html", null, true));
            echo "
    </div>
  ";
        }
        // line 57
        echo "  ";
        if ((isset($context["more"]) ? $context["more"] : null)) {
            // line 58
            echo "    ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["more"]) ? $context["more"] : null), "html", null, true));
            echo "
  ";
        }
        // line 60
        echo "  ";
        if ((isset($context["footer"]) ? $context["footer"] : null)) {
            // line 61
            echo "    <div class=\"view__footer\">
      ";
            // line 62
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["footer"]) ? $context["footer"] : null), "html", null, true));
            echo "
    </div>
  ";
        }
        // line 65
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "themes/contrib/radix/templates/view/views-view.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  175 => 65,  169 => 62,  166 => 61,  163 => 60,  157 => 58,  154 => 57,  148 => 54,  145 => 53,  142 => 52,  136 => 50,  134 => 49,  131 => 48,  125 => 45,  122 => 44,  120 => 43,  115 => 41,  112 => 40,  110 => 39,  107 => 38,  101 => 35,  98 => 34,  95 => 33,  89 => 30,  86 => 29,  83 => 28,  77 => 25,  74 => 24,  72 => 23,  67 => 22,  61 => 20,  59 => 19,  55 => 18,  50 => 17,  48 => 14,  47 => 13,  46 => 12,  45 => 11,  44 => 10,  43 => 8,);
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
 * Theme override for a main view template.
 */
#}
{%
  set classes = [
    'view',
    'view--' ~ id|clean_class,
    'view--' ~ id|clean_class ~ '--' ~ display_id|clean_class,
    'view-id-' ~ id,
    'view-display-id-' ~ display_id,
    dom_id ? 'js-view-dom-id-' ~ dom_id,
  ]
%}
<div{{ attributes.addClass(classes) }}>
  {{ title_prefix }}
  {% if title %}
    {{ title }}
  {% endif %}
  {{ title_suffix }}
  {% if header %}
    <div class=\"view__header\">
      {{ header }}
    </div>
  {% endif %}
  {% if exposed %}
    <div class=\"view__filters view-filters\">
      {{ exposed }}
    </div>
  {% endif %}
  {% if attachment_before %}
    <div class=\"view__attachment view__attachment--before\">
      {{ attachment_before }}
    </div>
  {% endif %}

  {% if rows %}
    <div class=\"view__content\">
      {{ rows }}
    </div>
  {% elseif empty %}
    <div class=\"view__empty\">
      {{ empty }}
    </div>
  {% endif %}

  {% if pager %}
    {{ pager }}
  {% endif %}
  {% if attachment_after %}
    <div class=\"view__attachment view__attachment--after\">
      {{ attachment_after }}
    </div>
  {% endif %}
  {% if more %}
    {{ more }}
  {% endif %}
  {% if footer %}
    <div class=\"view__footer\">
      {{ footer }}
    </div>
  {% endif %}
</div>
", "themes/contrib/radix/templates/view/views-view.html.twig", "/Users/luis.jimenez/Sites/seggroup/themes/contrib/radix/templates/view/views-view.html.twig");
    }
}
