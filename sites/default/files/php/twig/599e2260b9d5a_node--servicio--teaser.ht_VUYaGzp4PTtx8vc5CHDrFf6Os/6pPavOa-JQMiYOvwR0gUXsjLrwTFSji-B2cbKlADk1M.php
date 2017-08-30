<?php

/* themes/custom/seggroup_radix/templates/node/node--servicio--teaser.html.twig */
class __TwigTemplate_f94b16eaa666c6523b8b3e3a3f79b2f8989a1367b9df90e9d9680c890252d61e extends Twig_Template
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
        $tags = array("set" => 66);
        $filters = array("clean_class" => 66);
        $functions = array("attach_library" => 77);

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('set'),
                array('clean_class'),
                array('attach_library')
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

        // line 66
        $context["bundle"] = \Drupal\Component\Utility\Html::getClass($this->getAttribute((isset($context["node"]) ? $context["node"] : null), "bundle", array()));
        // line 68
        $context["classes"] = array(0 => "node", 1 =>         // line 70
(isset($context["bundle"]) ? $context["bundle"] : null), 2 => (($this->getAttribute(        // line 71
(isset($context["node"]) ? $context["node"] : null), "isPromoted", array(), "method")) ? (((isset($context["bundle"]) ? $context["bundle"] : null) . "--promoted")) : ("")), 3 => (($this->getAttribute(        // line 72
(isset($context["node"]) ? $context["node"] : null), "isSticky", array(), "method")) ? (((isset($context["bundle"]) ? $context["bundle"] : null) . "--sticky")) : ("")), 4 => (( !$this->getAttribute(        // line 73
(isset($context["node"]) ? $context["node"] : null), "isPublished", array(), "method")) ? (((isset($context["bundle"]) ? $context["bundle"] : null) . "--unpublished")) : ("")), 5 => ((        // line 74
(isset($context["view_mode"]) ? $context["view_mode"] : null)) ? ((((isset($context["bundle"]) ? $context["bundle"] : null) . "--") . \Drupal\Component\Utility\Html::getClass((isset($context["view_mode"]) ? $context["view_mode"] : null)))) : ("")));
        // line 77
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->attachLibrary("seggroup_service/service"), "html", null, true));
        echo "
<service";
        // line 78
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute((isset($context["attributes"]) ? $context["attributes"] : null), "addClass", array(0 => (isset($context["classes"]) ? $context["classes"] : null)), "method"), "html", null, true));
        echo ">
  <div";
        // line 79
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute((isset($context["content_attributes"]) ? $context["content_attributes"] : null), "addClass", array(0 => "node__content"), "method"), "html", null, true));
        echo ">
    <div class=\"row\">
      <div class=\"col s12 m12 l12\">
        <div class=\"card-panel teal hoverable modal-trigger\" ng-click=\"loadModal('";
        // line 82
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute((isset($context["node"]) ? $context["node"] : null), "id", array()), "html", null, true));
        echo "')\">
            <h4>";
        // line 83
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["label"]) ? $context["label"] : null), "html", null, true));
        echo "</h4>
            <span class=\"white-text\">
              ";
        // line 85
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "body", array()), "html", null, true));
        echo "
            </span>
        </div>
      </div>
    </div>
  </div>

  <div id=\"modal-node-";
        // line 92
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute((isset($context["node"]) ? $context["node"] : null), "id", array()), "html", null, true));
        echo "\" class=\"modal\">
    <div class=\"modal-content\">
      <h4>";
        // line 94
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["label"]) ? $context["label"] : null), "html", null, true));
        echo "</h4>
      <p>";
        // line 95
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute((isset($context["content"]) ? $context["content"] : null), "body", array()), "html", null, true));
        echo "</p>
    </div>
    <div class=\"modal-footer\">
      <a href=\"#!\" class=\"modal-action modal-close waves-effect waves-green btn-flat\">Cerrar</a>
    </div>
  </div>

</service>
";
    }

    public function getTemplateName()
    {
        return "themes/custom/seggroup_radix/templates/node/node--servicio--teaser.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  94 => 95,  90 => 94,  85 => 92,  75 => 85,  70 => 83,  66 => 82,  60 => 79,  56 => 78,  52 => 77,  50 => 74,  49 => 73,  48 => 72,  47 => 71,  46 => 70,  45 => 68,  43 => 66,);
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
 * Theme override to display a node.
 *
 * Available variables:
 * - node: The node entity with limited access to object properties and methods.
     Only \"getter\" methods (method names starting with \"get\", \"has\", or \"is\")
     and a few common methods such as \"id\" and \"label\" are available. Calling
     other methods (such as node.delete) will result in an exception.
 * - label: The title of the node.
 * - content: All node items. Use {{ content }} to print them all,
 *   or print a subset such as {{ content.field_example }}. Use
 *   {{ content|without('field_example') }} to temporarily suppress the printing
 *   of a given child element.
 * - author_picture: The node author user entity, rendered using the \"compact\"
 *   view mode.
 * - metadata: Metadata for this node.
 * - date: Themed creation date field.
 * - author_name: Themed author name field.
 * - url: Direct URL of the current node.
 * - display_submitted: Whether submission information should be displayed.
 * - attributes: HTML attributes for the containing element.
 *   The attributes.class element may contain one or more of the following
 *   classes:
 *   - node: The current template type (also known as a \"theming hook\").
 *   - node--type-[type]: The current node type. For example, if the node is an
 *     \"Article\" it would result in \"node--type-article\". Note that the machine
 *     name will often be in a short form of the human readable label.
 *   - node--view-mode-[view_mode]: The View Mode of the node; for example, a
 *     teaser would result in: \"node--view-mode-teaser\", and
 *     full: \"node--view-mode-full\".
 *   The following are controlled through the node publishing options.
 *   - node--promoted: Appears on nodes promoted to the front page.
 *   - node--sticky: Appears on nodes ordered above other non-sticky nodes in
 *     teaser listings.
 *   - node--unpublished: Appears on unpublished nodes visible only to site
 *     admins.
 * - title_attributes: Same as attributes, except applied to the main title
 *   tag that appears in the template.
 * - content_attributes: Same as attributes, except applied to the main
 *   content tag that appears in the template.
 * - author_attributes: Same as attributes, except applied to the author of
 *   the node tag that appears in the template.
 * - title_prefix: Additional output populated by modules, intended to be
 *   displayed in front of the main title tag that appears in the template.
 * - title_suffix: Additional output populated by modules, intended to be
 *   displayed after the main title tag that appears in the template.
 * - view_mode: View mode; for example, \"teaser\" or \"full\".
 * - teaser: Flag for the teaser state. Will be true if view_mode is 'teaser'.
 * - page: Flag for the full page state. Will be true if view_mode is 'full'.
 * - readmore: Flag for more state. Will be true if the teaser content of the
 *   node cannot hold the main body content.
 * - logged_in: Flag for authenticated user status. Will be true when the
 *   current user is a logged-in member.
 * - is_admin: Flag for admin user status. Will be true when the current user
 *   is an administrator.
 *
 * @see template_preprocess_node()
 *
 * @todo Remove the id attribute (or make it a class), because if that gets
 *   rendered twice on a page this is invalid CSS for example: two lists
 *   in different view modes.
 */
#}
{% set bundle = node.bundle|clean_class %}
{%
set classes = [
'node',
bundle,
node.isPromoted() ? bundle ~ '--promoted',
node.isSticky() ? bundle ~ '--sticky',
not node.isPublished() ? bundle ~ '--unpublished',
view_mode ? bundle ~ '--' ~ view_mode|clean_class,
]
%}
{{ attach_library('seggroup_service/service') }}
<service{{ attributes.addClass(classes) }}>
  <div{{ content_attributes.addClass('node__content') }}>
    <div class=\"row\">
      <div class=\"col s12 m12 l12\">
        <div class=\"card-panel teal hoverable modal-trigger\" ng-click=\"loadModal('{{ node.id }}')\">
            <h4>{{ label }}</h4>
            <span class=\"white-text\">
              {{ content.body }}
            </span>
        </div>
      </div>
    </div>
  </div>

  <div id=\"modal-node-{{ node.id }}\" class=\"modal\">
    <div class=\"modal-content\">
      <h4>{{ label }}</h4>
      <p>{{ content.body }}</p>
    </div>
    <div class=\"modal-footer\">
      <a href=\"#!\" class=\"modal-action modal-close waves-effect waves-green btn-flat\">Cerrar</a>
    </div>
  </div>

</service>
", "themes/custom/seggroup_radix/templates/node/node--servicio--teaser.html.twig", "/Users/luis.jimenez/Sites/seggroup/themes/custom/seggroup_radix/templates/node/node--servicio--teaser.html.twig");
    }
}
