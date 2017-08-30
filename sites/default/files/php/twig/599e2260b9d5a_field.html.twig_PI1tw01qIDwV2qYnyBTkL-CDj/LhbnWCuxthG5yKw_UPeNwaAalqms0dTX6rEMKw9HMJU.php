<?php

/* themes/contrib/radix/templates/field/field.html.twig */
class __TwigTemplate_f3e39066d9a59f585e2431856652b184fabe9be0ff475eddb1b6f682c6d5c093 extends Twig_Template
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
        $tags = array("set" => 8, "if" => 19, "for" => 22);
        $filters = array("clean_class" => 9);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('set', 'if', 'for'),
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
        $context["classes"] = array(0 => ((\Drupal\Component\Utility\Html::getClass(        // line 9
(isset($context["bundle"]) ? $context["bundle"] : null)) . "__") . \Drupal\Component\Utility\Html::getClass((isset($context["field_name_clean"]) ? $context["field_name_clean"] : null))));
        // line 13
        $context["title_classes"] = array(0 => "field__label", 1 => (((        // line 15
(isset($context["label_display"]) ? $context["label_display"] : null) == "visually_hidden")) ? ("visually-hidden") : ("")));
        // line 18
        echo "
";
        // line 19
        if ((isset($context["label_hidden"]) ? $context["label_hidden"] : null)) {
            // line 20
            echo "  ";
            if ((isset($context["multiple"]) ? $context["multiple"] : null)) {
                // line 21
                echo "    <div";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute((isset($context["attributes"]) ? $context["attributes"] : null), "addClass", array(0 => (isset($context["classes"]) ? $context["classes"] : null)), "method"), "html", null, true));
                echo ">
      ";
                // line 22
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable((isset($context["items"]) ? $context["items"] : null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 23
                    echo "        <div";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($context["item"], "attributes", array()), "addClass", array(0 => "field__item"), "method"), "html", null, true));
                    echo ">";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "content", array()), "html", null, true));
                    echo "</div>
      ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 25
                echo "    </div>
  ";
            } else {
                // line 27
                echo "    ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable((isset($context["items"]) ? $context["items"] : null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 28
                    echo "      <div";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute((isset($context["attributes"]) ? $context["attributes"] : null), "addClass", array(0 => (isset($context["classes"]) ? $context["classes"] : null)), "method"), "html", null, true));
                    echo ">";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "content", array()), "html", null, true));
                    echo "</div>
    ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 30
                echo "  ";
            }
        } else {
            // line 32
            echo "  <div";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute((isset($context["attributes"]) ? $context["attributes"] : null), "addClass", array(0 => (isset($context["classes"]) ? $context["classes"] : null)), "method"), "html", null, true));
            echo ">
    <strong";
            // line 33
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute((isset($context["title_attributes"]) ? $context["title_attributes"] : null), "addClass", array(0 => (isset($context["title_classes"]) ? $context["title_classes"] : null)), "method"), "html", null, true));
            echo ">";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["label"]) ? $context["label"] : null), "html", null, true));
            echo "</strong>
    ";
            // line 34
            if ((isset($context["multiple"]) ? $context["multiple"] : null)) {
                // line 35
                echo "      <div class=\"field__items\">
    ";
            }
            // line 37
            echo "    ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["items"]) ? $context["items"] : null));
            foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                // line 38
                echo "      <div";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($context["item"], "attributes", array()), "addClass", array(0 => "field__item"), "method"), "html", null, true));
                echo ">";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "content", array()), "html", null, true));
                echo "</div>
    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 40
            echo "    ";
            if ((isset($context["multiple"]) ? $context["multiple"] : null)) {
                // line 41
                echo "      </div>
    ";
            }
            // line 43
            echo "  </div>
";
        }
    }

    public function getTemplateName()
    {
        return "themes/contrib/radix/templates/field/field.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  141 => 43,  137 => 41,  134 => 40,  123 => 38,  118 => 37,  114 => 35,  112 => 34,  106 => 33,  101 => 32,  97 => 30,  86 => 28,  81 => 27,  77 => 25,  66 => 23,  62 => 22,  57 => 21,  54 => 20,  52 => 19,  49 => 18,  47 => 15,  46 => 13,  44 => 9,  43 => 8,);
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
 * Default template for a field.
 */
#}
{%
  set classes = [
    bundle|clean_class ~ '__' ~ field_name_clean|clean_class
  ]
%}
{%
  set title_classes = [
    'field__label',
    label_display == 'visually_hidden' ? 'visually-hidden',
  ]
%}

{% if label_hidden %}
  {% if multiple %}
    <div{{ attributes.addClass(classes) }}>
      {% for item in items %}
        <div{{ item.attributes.addClass('field__item') }}>{{ item.content }}</div>
      {% endfor %}
    </div>
  {% else %}
    {% for item in items %}
      <div{{ attributes.addClass(classes) }}>{{ item.content }}</div>
    {% endfor %}
  {% endif %}
{% else %}
  <div{{ attributes.addClass(classes) }}>
    <strong{{ title_attributes.addClass(title_classes) }}>{{ label }}</strong>
    {% if multiple %}
      <div class=\"field__items\">
    {% endif %}
    {% for item in items %}
      <div{{ item.attributes.addClass('field__item') }}>{{ item.content }}</div>
    {% endfor %}
    {% if multiple %}
      </div>
    {% endif %}
  </div>
{% endif %}
", "themes/contrib/radix/templates/field/field.html.twig", "/Users/luis.jimenez/Sites/seggroup/themes/contrib/radix/templates/field/field.html.twig");
    }
}
