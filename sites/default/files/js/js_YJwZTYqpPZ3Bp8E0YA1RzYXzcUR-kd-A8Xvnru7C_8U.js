/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});
;
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);

(function(t){var e=typeof self=="object"&&self.self==self&&self||typeof global=="object"&&global.global==global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,n){e.Backbone=t(e,n,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore"),r;try{r=require("jquery")}catch(n){}t(e,exports,i,r)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,r){var n=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.2.3";e.$=r;e.noConflict=function(){t.Backbone=n;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=function(t,e,r){switch(t){case 1:return function(){return i[e](this[r])};case 2:return function(t){return i[e](this[r],t)};case 3:return function(t,n){return i[e](this[r],h(t,this),n)};case 4:return function(t,n,s){return i[e](this[r],h(t,this),n,s)};default:return function(){var t=s.call(arguments);t.unshift(this[r]);return i[e].apply(i,t)}}};var o=function(t,e,r){i.each(e,function(e,n){if(i[n])t.prototype[n]=a(e,n,r)})};var h=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return u(t);if(i.isString(t))return function(e){return e.get(t)};return t};var u=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var l=e.Events={};var c=/\s+/;var f=function(t,e,r,n,s){var a=0,o;if(r&&typeof r==="object"){if(n!==void 0&&"context"in s&&s.context===void 0)s.context=n;for(o=i.keys(r);a<o.length;a++){e=f(t,e,o[a],r[o[a]],s)}}else if(r&&c.test(r)){for(o=r.split(c);a<o.length;a++){e=t(e,o[a],n,s)}}else{e=t(e,r,n,s)}return e};l.on=function(t,e,i){return d(this,t,e,i)};var d=function(t,e,i,r,n){t._events=f(v,t._events||{},e,i,{context:r,ctx:t,listening:n});if(n){var s=t._listeners||(t._listeners={});s[n.id]=n}return t};l.listenTo=function(t,e,r){if(!t)return this;var n=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=s[n];if(!a){var o=this._listenId||(this._listenId=i.uniqueId("l"));a=s[n]={obj:t,objId:n,id:o,listeningTo:s,count:0}}d(t,e,r,this,a);return this};var v=function(t,e,i,r){if(i){var n=t[e]||(t[e]=[]);var s=r.context,a=r.ctx,o=r.listening;if(o)o.count++;n.push({callback:i,context:s,ctx:s||a,listening:o})}return t};l.off=function(t,e,i){if(!this._events)return this;this._events=f(g,this._events,t,e,{context:i,listeners:this._listeners});return this};l.stopListening=function(t,e,r){var n=this._listeningTo;if(!n)return this;var s=t?[t._listenId]:i.keys(n);for(var a=0;a<s.length;a++){var o=n[s[a]];if(!o)break;o.obj.off(e,r,this)}if(i.isEmpty(n))this._listeningTo=void 0;return this};var g=function(t,e,r,n){if(!t)return;var s=0,a;var o=n.context,h=n.listeners;if(!e&&!r&&!o){var u=i.keys(h);for(;s<u.length;s++){a=h[u[s]];delete h[a.id];delete a.listeningTo[a.objId]}return}var l=e?[e]:i.keys(t);for(;s<l.length;s++){e=l[s];var c=t[e];if(!c)break;var f=[];for(var d=0;d<c.length;d++){var v=c[d];if(r&&r!==v.callback&&r!==v.callback._callback||o&&o!==v.context){f.push(v)}else{a=v.listening;if(a&&--a.count===0){delete h[a.id];delete a.listeningTo[a.objId]}}}if(f.length){t[e]=f}else{delete t[e]}}if(i.size(t))return t};l.once=function(t,e,r){var n=f(p,{},t,e,i.bind(this.off,this));return this.on(n,void 0,r)};l.listenToOnce=function(t,e,r){var n=f(p,{},e,r,i.bind(this.stopListening,this,t));return this.listenTo(t,n)};var p=function(t,e,r,n){if(r){var s=t[e]=i.once(function(){n(e,s);r.apply(this,arguments)});s._callback=r}return t};l.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];f(m,this._events,t,void 0,i);return this};var m=function(t,e,i,r){if(t){var n=t[e];var s=t.all;if(n&&s)s=s.slice();if(n)_(n,r);if(s)_(s,[e].concat(r))}return t};var _=function(t,e){var i,r=-1,n=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<n)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<n)(i=t[r]).callback.call(i.ctx,s);return;case 2:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a);return;case 3:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a,o);return;default:while(++r<n)(i=t[r]).callback.apply(i.ctx,e);return}};l.bind=l.on;l.unbind=l.off;i.extend(e,l);var y=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};r=i.defaults({},r,i.result(this,"defaults"));this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(y.prototype,l,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,r){if(t==null)return this;var n;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;var s=r.unset;var a=r.silent;var o=[];var h=this._changing;this._changing=true;if(!h){this._previousAttributes=i.clone(this.attributes);this.changed={}}var u=this.attributes;var l=this.changed;var c=this._previousAttributes;for(var f in n){e=n[f];if(!i.isEqual(u[f],e))o.push(f);if(!i.isEqual(c[f],e)){l[f]=e}else{delete l[f]}s?delete u[f]:u[f]=e}this.id=this.get(this.idAttribute);if(!a){if(o.length)this._pending=r;for(var d=0;d<o.length;d++){this.trigger("change:"+o[d],this,u[o[d]],r)}}if(h)return this;if(!a){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var r={};for(var n in t){var s=t[n];if(i.isEqual(e[n],s))continue;r[n]=s}return i.size(r)?r:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var r=t.success;t.success=function(i){var n=t.parse?e.parse(i,t):i;if(!e.set(n,t))return false;if(r)r.call(t.context,e,i,t);e.trigger("sync",e,i,t)};z(this,t);return this.sync("read",this,t)},save:function(t,e,r){var n;if(t==null||typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r=i.extend({validate:true,parse:true},r);var s=r.wait;if(n&&!s){if(!this.set(n,r))return false}else{if(!this._validate(n,r))return false}var a=this;var o=r.success;var h=this.attributes;r.success=function(t){a.attributes=h;var e=r.parse?a.parse(t,r):t;if(s)e=i.extend({},n,e);if(e&&!a.set(e,r))return false;if(o)o.call(r.context,a,t,r);a.trigger("sync",a,t,r)};z(this,r);if(n&&s)this.attributes=i.extend({},h,n);var u=this.isNew()?"create":r.patch?"patch":"update";if(u==="patch"&&!r.attrs)r.attrs=n;var l=this.sync(u,this,r);this.attributes=h;return l},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var n=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(n)s();if(r)r.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{z(this,t);a=this.sync("delete",this,t)}if(!n)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||F();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.defaults({validate:true},t))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var b={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};o(y,b,"attributes");var x=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var w={add:true,remove:true,merge:true};var E={add:true,remove:false};var k=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var r=Array(t.length-i);var n=e.length;for(var s=0;s<r.length;s++)r[s]=t[s+i];for(s=0;s<n;s++)t[s+i]=e[s];for(s=0;s<r.length;s++)t[s+n+i]=r[s]};i.extend(x.prototype,l,{model:y,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,E))},remove:function(t,e){e=i.extend({},e);var r=!i.isArray(t);t=r?[t]:i.clone(t);var n=this._removeModels(t,e);if(!e.silent&&n)this.trigger("update",this,e);return r?n[0]:n},set:function(t,e){if(t==null)return;e=i.defaults({},e,w);if(e.parse&&!this._isModel(t))t=this.parse(t,e);var r=!i.isArray(t);t=r?[t]:t.slice();var n=e.at;if(n!=null)n=+n;if(n<0)n+=this.length+1;var s=[];var a=[];var o=[];var h={};var u=e.add;var l=e.merge;var c=e.remove;var f=false;var d=this.comparator&&n==null&&e.sort!==false;var v=i.isString(this.comparator)?this.comparator:null;var g;for(var p=0;p<t.length;p++){g=t[p];var m=this.get(g);if(m){if(l&&g!==m){var _=this._isModel(g)?g.attributes:g;if(e.parse)_=m.parse(_,e);m.set(_,e);if(d&&!f)f=m.hasChanged(v)}if(!h[m.cid]){h[m.cid]=true;s.push(m)}t[p]=m}else if(u){g=t[p]=this._prepareModel(g,e);if(g){a.push(g);this._addReference(g,e);h[g.cid]=true;s.push(g)}}}if(c){for(p=0;p<this.length;p++){g=this.models[p];if(!h[g.cid])o.push(g)}if(o.length)this._removeModels(o,e)}var y=false;var b=!d&&u&&c;if(s.length&&b){y=this.length!=s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;k(this.models,s,0);this.length=this.models.length}else if(a.length){if(d)f=true;k(this.models,a,n==null?this.length:n);this.length=this.models.length}if(f)this.sort({silent:true});if(!e.silent){for(p=0;p<a.length;p++){if(n!=null)e.index=n+p;g=a[p];g.trigger("add",g,this,e)}if(f||y)this.trigger("sort",this,e);if(a.length||o.length)this.trigger("update",this,e)}return r?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var r=0;r<this.models.length;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;var e=this.modelId(this._isModel(t)?t.attributes:t);return this._byId[t]||this._byId[e]||this._byId[t.cid]},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var r=e.length;if(i.isFunction(e))e=i.bind(e,this);if(r===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return i.invoke(this.models,"get",t)},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var r=this;t.success=function(i){var n=t.reset?"reset":"set";r[n](i,t);if(e)e.call(t.context,r,i,t);r.trigger("sync",r,i,t)};z(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var n=this;var s=e.success;e.success=function(t,e,i){if(r)n.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var n=this.get(t[r]);if(!n)continue;var s=this.indexOf(n);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}i.push(n);this._removeReference(n,e)}return i.length?i:false},_isModel:function(t){return t instanceof y},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="change"){var n=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(n!==s){if(n!=null)delete this._byId[n];if(s!=null)this._byId[s]=e}}this.trigger.apply(this,arguments)}});var S={forEach:3,each:3,map:3,collect:3,reduce:4,foldl:4,inject:4,reduceRight:4,foldr:4,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3};o(x,S,"models");var I=e.View=function(t){this.cid=i.uniqueId("view");i.extend(this,i.pick(t,P));this._ensureElement();this.initialize.apply(this,arguments)};var T=/^(\S+)\s*(.*)$/;var P=["model","collection","el","id","attributes","className","tagName","events"];i.extend(I.prototype,l,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[r];if(!r)continue;var n=e.match(T);this.delegate(n[1],n[2],i.bind(r,this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});e.sync=function(t,r,n){var s=H[t];i.defaults(n||(n={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!n.url){a.url=i.result(r,"url")||F()}if(n.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(n.attrs||r.toJSON(n))}if(n.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(n.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(n.emulateJSON)a.data._method=s;var o=n.beforeSend;n.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!n.emulateJSON){a.processData=false}var h=n.error;n.error=function(t,e,i){n.textStatus=e;n.errorThrown=i;if(h)h.call(n.context,t,e,i)};var u=n.xhr=e.ajax(i.extend(a,n));r.trigger("request",r,u,n);return u};var H={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var A=/\((.*?)\)/g;var C=/(\(\?)?:\w+/g;var R=/\*\w+/g;var j=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,l,{initialize:function(){},route:function(t,r,n){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){n=r;r=""}if(!n)n=this[r];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(n,a,r)!==false){s.trigger.apply(s,["route:"+r].concat(a));s.trigger("route",r,a);e.history.trigger("route",s,r,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(j,"\\$&").replace(A,"(?:$1)?").replace(C,function(t,e){return e?t:"([^/?]+)"}).replace(R,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var M=e.History=function(){this.handlers=[];this.checkUrl=i.bind(this.checkUrl,this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var U=/#.*$/;M.started=false;i.extend(M.prototype,l,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(M.started)throw new Error("Backbone.history has already been started");M.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(O,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var r=document.body;var n=r.insertBefore(this.iframe,r.firstChild).contentWindow;n.document.open();n.document.close();n.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);M.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!M.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var r=i+t;t=this.decodeFragment(t.replace(U,""));if(this.fragment===t)return;this.fragment=t;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var n=this.iframe.contentWindow;if(!e.replace){n.document.open();n.document.close()}this._updateHash(n.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new M;var q=function(t,e){var r=this;var n;if(t&&i.has(t,"constructor")){n=t.constructor}else{n=function(){return r.apply(this,arguments)}}i.extend(n,r,e);var s=function(){this.constructor=n};s.prototype=r.prototype;n.prototype=new s;if(t)i.extend(n.prototype,t);n.__super__=r.prototype;return n};y.extend=x.extend=$.extend=I.extend=M.extend=q;var F=function(){throw new Error('A "url" property or function must be specified')};var z=function(t,e){var i=e.error;e.error=function(r){if(i)i.call(e.context,t,r,e);t.trigger("error",t,r,e)}};return e});

/*!
 * jQuery Once v2.1.1 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){"use strict";var n=function(e){e=e||"once";if(typeof e!=="string"){throw new Error("The jQuery Once id parameter must be a string")}return e};e.fn.once=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)!==true}).data(r,true)};e.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+n(e))};e.fn.findOnce=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)===true})}});

/**
 * @file
 * Parse inline JSON and initialize the drupalSettings global object.
 */

(function () {

  'use strict';

  // Use direct child elements to harden against XSS exploits when CSP is on.
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');

  /**
   * Variable generated by Drupal with all the configuration created from PHP.
   *
   * @global
   *
   * @type {object}
   */
  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();
;
window.drupalTranslations = {"strings":{"":{"An AJAX HTTP error occurred.":"Hubo un error HTTP AJAX.","HTTP Result Code: !status":"C\u00f3digo de Resultado HTTP: !status","An AJAX HTTP request terminated abnormally.":"Una solicitud HTTP de AJAX termin\u00f3 de manera anormal.","Debugging information follows.":"A continuaci\u00f3n se detalla la informaci\u00f3n de depuraci\u00f3n.","Path: !uri":"Ruta: !uri","StatusText: !statusText":"StatusText: !statusText","ResponseText: !responseText":"ResponseText: !responseText","ReadyState: !readyState":"ReadyState: !readyState","CustomMessage: !customMessage":"CustomMessage: !customMessage","Please wait...":"Espere, por favor...","The response failed verification so will not be processed.":"La respuesta de verificaci\u00f3n fall\u00f3, por lo que no se procesar\u00e1.","The callback URL is not local and not trusted: !url":"La URL de llamada no es local y no es confiable: !url","Changed":"Cambiado","Home":"Inicio","Next":"Siguiente","closed":"cerrado","Cancel":"Cancelar","Edit":"Editar","Link":"Enlace","Image":"Imagen","Save":"Guardar","Open":"Abierta","Sunday":"Domingo","Monday":"Lunes","Tuesday":"Martes","Wednesday":"Mi\u00e9rcoles","Thursday":"Jueves","Friday":"Viernes","Saturday":"S\u00e1bado","Continue":"Continuar","Done":"Hecho","OK":"OK","Prev":"Previo","Mon":"Lun","Tue":"Mar","Wed":"Mi\u00e9","Thu":"Jue","Fri":"Vie","Sat":"S\u00e1b","Sun":"Dom","May":"Mayo","Close":"Cerrar","Show":"Mostrar","Today":"Hoy","Jan":"Ene","Feb":"Feb","Mar":"Mar","Apr":"Abr","Jun":"Jun","Jul":"Jul","Aug":"Ago","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dic","Extend":"Ampliar","Su":"Do","Mo":"Lu","Tu":"Ma","We":"Mi","Th":"Ju","Fr":"Vi","Sa":"Sa","Not published":"No publicado","Loading...":"Cargando...","Hide":"Ocultar","Unlink":"Desvincular","Not promoted":"No publicado en p\u00e1gina principal","mm\/dd\/yy":"mm\/dd\/yy","Quick edit":"Edici\u00f3n r\u00e1pida","Edit Link":"Editar enlace","By @name on @date":"Por @name en @date","By @name":"Por @name","Not in menu":"No est\u00e1 en un men\u00fa","Alias: @alias":"Alias: @alias","No alias":"Sin alias","@label":"@label","New revision":"Nueva revisi\u00f3n","Drag to re-order":"Arrastre para reordenar","Discard changes":"\u00bfDescartar cambios?","Saving":"Guardando","No revision":"Sin revisi\u00f3n","Requires a title":"Necesita un t\u00edtulo","Not restricted":"Sin restricci\u00f3n","(active tab)":"(solapa activa)","Restricted to certain pages":"Restringido a algunas p\u00e1ginas","The block cannot be placed in this region.":"El bloque no se puede colocar en esta regi\u00f3n.","Hide summary":"Ocultar resumen","Edit summary":"Editar resumen","Don\u0027t display post information":"No mostrar informaci\u00f3n del env\u00edo","Collapse":"Plegar","Re-order rows by numerical weight instead of dragging.":"Reordenar las filas por peso num\u00e9rico en lugar de arrastrar.","Show row weights":"Mostrar pesos de la fila","Hide row weights":"Ocultar pesos de la fila","You have unsaved changes":"Usted tiene cambios no guaradados","Needs to be updated":"Necesita ser actualizado","Does not need to be updated":"No necesita ser actualizado","Show all columns":"Mostrar todas las columnas","Show table cells that were hidden to make the table fit within a small screen.":"Mostrar celdas de tablas que estaban ocultas para que la tabla se ajuste a una pantalla peque\u00f1a.","List additional actions":"Lista adicional de acciones","Flag other translations as outdated":"Marcar las otras traducciones como desfasadas","Do not flag other translations as outdated":"No marcar las otras traducciones como desfasadas","opened":"abierto","Horizontal orientation":"Orientaci\u00f3n horizontal","Vertical orientation":"Orientaci\u00f3n vertical","Tray orientation changed to @orientation.":"La orientaci\u00f3n de la bandeja se ha cambiado a @orientation.","@action @title configuration options":"@action @title opciones de configuraci\u00f3n","Tabbing is no longer constrained by the Contextual module.":"Tabulando (Tabbing) ya no se ver\u00e1 limitado por el m\u00f3dulo Contextual (Contextual).","Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.":"La tabulaci\u00f3n est\u00e1 restringida a un conjunto de @contextualsCount y al cambio a modo de edici\u00f3n.","Press the esc key to exit.":"Presionar tecla esc para salir.","@count contextual link\u0003@count contextual links":"@count enlace contextual\u0003@count enlaces contextuales","!tour_item of !total":"!tour_item de !total","End tour":"Final del recorrido","Discard changes?":"\u00bfDescartar cambios?","The toolbar cannot be set to a horizontal orientation when it is locked.":"La barra de herramientas no puede ser puesta en orientaci\u00f3n horizontal cuando esta bloqueada.","Could not load the form for \u003Cq\u003E@field-label\u003C\/q\u003E, either due to a website problem or a network connection problem.\u003Cbr\u003EPlease try again.":"No se pudo cargar el formulario para \u003Cq\u003E@field-label\u003C\/q\u003E, ya sea debido a un problema en el sitio, ya por un problema de conexi\u00f3n de red.\u003Cbr\u003EPor favor, int\u00e9ntelo de nuevo.","Your changes to \u003Cq\u003E@entity-title\u003C\/q\u003E could not be saved, either due to a website problem or a network connection problem.\u003Cbr\u003EPlease try again.":"Los cambios en \u003Cq\u003E@entity-title\u003C\/q\u003E no podr\u00e1n salvarse, debido a un problema en el sitio web o un problema de conexi\u00f3n de red.\u003Cbr\u003EPor favor, int\u00e9ntelo de nuevo.","Changing the text format to %text_format will permanently remove content that is not allowed in that text format.\u003Cbr\u003E\u003Cbr\u003ESave your changes before switching the text format to avoid losing data.":"Cambiar el formato de texto a %text_format eliminar\u00e1 permanentemente el contenido que no est\u00e1 permitido en ese formato de texto.\u003Cbr\u003E\u003Cbr\u003EGuarde sus datos antes de cambiar el formato de texto para evitar perder datos.","Change text format?":"\u00bfCambiar el formato de texto?","Rich Text Editor, !label field":"Editor de texto con formato, campo !label","Tray \u0022@tray\u0022 @action.":"Bandeja \u0022@tray\u0022 @action","Tray @action.":"Bandeja @action.","Hide lower priority columns":"Ocultar columnas de menor prioridad","!modules modules are available in the modified list.":"!modules m\u00f3dulos est\u00e1n disponibles en la lista modificada.","Network problem!":"Problema de red!","Authored on @date":"Escrito el @date"},"Long month name":{"January":"Enero","February":"Febrero","March":"Marzo","April":"Abril","May":"Mayo","June":"Junio","July":"Julio","August":"Agosto","September":"Septiembre","October":"Octubre","November":"Noviembre","December":"Diciembre"}},"pluralFormula":{"1":0,"default":1}};;
/**
 * @file
 * Defines the Drupal JavaScript API.
 */

/**
 * A jQuery object, typically the return value from a `$(selector)` call.
 *
 * Holds an HTMLElement or a collection of HTMLElements.
 *
 * @typedef {object} jQuery
 *
 * @prop {number} length=0
 *   Number of elements contained in the jQuery object.
 */

/**
 * Variable generated by Drupal that holds all translated strings from PHP.
 *
 * Content of this variable is automatically created by Drupal when using the
 * Interface Translation module. It holds the translation of strings used on
 * the page.
 *
 * This variable is used to pass data from the backend to the frontend. Data
 * contained in `drupalSettings` is used during behavior initialization.
 *
 * @global
 *
 * @var {object} drupalTranslations
 */

/**
 * Global Drupal object.
 *
 * All Drupal JavaScript APIs are contained in this namespace.
 *
 * @global
 *
 * @namespace
 */
window.Drupal = {behaviors: {}, locale: {}};

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it in an anonymous closure.
(function (Drupal, drupalSettings, drupalTranslations) {

  'use strict';

  /**
   * Helper to rethrow errors asynchronously.
   *
   * This way Errors bubbles up outside of the original callstack, making it
   * easier to debug errors in the browser.
   *
   * @param {Error|string} error
   *   The error to be thrown.
   */
  Drupal.throwError = function (error) {
    setTimeout(function () { throw error; }, 0);
  };

  /**
   * Custom error thrown after attach/detach if one or more behaviors failed.
   * Initializes the JavaScript behaviors for page loads and Ajax requests.
   *
   * @callback Drupal~behaviorAttach
   *
   * @param {HTMLDocument|HTMLElement} context
   *   An element to detach behaviors from.
   * @param {?object} settings
   *   An object containing settings for the current context. It is rarely used.
   *
   * @see Drupal.attachBehaviors
   */

  /**
   * Reverts and cleans up JavaScript behavior initialization.
   *
   * @callback Drupal~behaviorDetach
   *
   * @param {HTMLDocument|HTMLElement} context
   *   An element to attach behaviors to.
   * @param {object} settings
   *   An object containing settings for the current context.
   * @param {string} trigger
   *   One of `'unload'`, `'move'`, or `'serialize'`.
   *
   * @see Drupal.detachBehaviors
   */

  /**
   * @typedef {object} Drupal~behavior
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Function run on page load and after an Ajax call.
   * @prop {Drupal~behaviorDetach} detach
   *   Function run when content is serialized or removed from the page.
   */

  /**
   * Holds all initialization methods.
   *
   * @namespace Drupal.behaviors
   *
   * @type {Object.<string, Drupal~behavior>}
   */

  /**
   * Defines a behavior to be run during attach and detach phases.
   *
   * Attaches all registered behaviors to a page element.
   *
   * Behaviors are event-triggered actions that attach to page elements,
   * enhancing default non-JavaScript UIs. Behaviors are registered in the
   * {@link Drupal.behaviors} object using the method 'attach' and optionally
   * also 'detach'.
   *
   * {@link Drupal.attachBehaviors} is added below to the `jQuery.ready` event
   * and therefore runs on initial page load. Developers implementing Ajax in
   * their solutions should also call this function after new page content has
   * been loaded, feeding in an element to be processed, in order to attach all
   * behaviors to the new content.
   *
   * Behaviors should use `var elements =
   * $(context).find(selector).once('behavior-name');` to ensure the behavior is
   * attached only once to a given element. (Doing so enables the reprocessing
   * of given elements, which may be needed on occasion despite the ability to
   * limit behavior attachment to a particular element.)
   *
   * @example
   * Drupal.behaviors.behaviorName = {
   *   attach: function (context, settings) {
   *     // ...
   *   },
   *   detach: function (context, settings, trigger) {
   *     // ...
   *   }
   * };
   *
   * @param {HTMLDocument|HTMLElement} [context=document]
   *   An element to attach behaviors to.
   * @param {object} [settings=drupalSettings]
   *   An object containing settings for the current context. If none is given,
   *   the global {@link drupalSettings} object is used.
   *
   * @see Drupal~behaviorAttach
   * @see Drupal.detachBehaviors
   *
   * @throws {Drupal~DrupalBehaviorError}
   */
  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;
    // Execute all of them.
    for (var i in behaviors) {
      if (behaviors.hasOwnProperty(i) && typeof behaviors[i].attach === 'function') {
        // Don't stop the execution of behaviors in case of an error.
        try {
          behaviors[i].attach(context, settings);
        }
        catch (e) {
          Drupal.throwError(e);
        }
      }
    }
  };

  /**
   * Detaches registered behaviors from a page element.
   *
   * Developers implementing Ajax in their solutions should call this function
   * before page content is about to be removed, feeding in an element to be
   * processed, in order to allow special behaviors to detach from the content.
   *
   * Such implementations should use `.findOnce()` and `.removeOnce()` to find
   * elements with their corresponding `Drupal.behaviors.behaviorName.attach`
   * implementation, i.e. `.removeOnce('behaviorName')`, to ensure the behavior
   * is detached only from previously processed elements.
   *
   * @param {HTMLDocument|HTMLElement} [context=document]
   *   An element to detach behaviors from.
   * @param {object} [settings=drupalSettings]
   *   An object containing settings for the current context. If none given,
   *   the global {@link drupalSettings} object is used.
   * @param {string} [trigger='unload']
   *   A string containing what's causing the behaviors to be detached. The
   *   possible triggers are:
   *   - `'unload'`: The context element is being removed from the DOM.
   *   - `'move'`: The element is about to be moved within the DOM (for example,
   *     during a tabledrag row swap). After the move is completed,
   *     {@link Drupal.attachBehaviors} is called, so that the behavior can undo
   *     whatever it did in response to the move. Many behaviors won't need to
   *     do anything simply in response to the element being moved, but because
   *     IFRAME elements reload their "src" when being moved within the DOM,
   *     behaviors bound to IFRAME elements (like WYSIWYG editors) may need to
   *     take some action.
   *   - `'serialize'`: When an Ajax form is submitted, this is called with the
   *     form as the context. This provides every behavior within the form an
   *     opportunity to ensure that the field elements have correct content
   *     in them before the form is serialized. The canonical use-case is so
   *     that WYSIWYG editors can update the hidden textarea to which they are
   *     bound.
   *
   * @throws {Drupal~DrupalBehaviorError}
   *
   * @see Drupal~behaviorDetach
   * @see Drupal.attachBehaviors
   */
  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;
    // Execute all of them.
    for (var i in behaviors) {
      if (behaviors.hasOwnProperty(i) && typeof behaviors[i].detach === 'function') {
        // Don't stop the execution of behaviors in case of an error.
        try {
          behaviors[i].detach(context, settings, trigger);
        }
        catch (e) {
          Drupal.throwError(e);
        }
      }
    }
  };

  /**
   * Encodes special characters in a plain-text string for display as HTML.
   *
   * @param {string} str
   *   The string to be encoded.
   *
   * @return {string}
   *   The encoded string.
   *
   * @ingroup sanitization
   */
  Drupal.checkPlain = function (str) {
    str = str.toString()
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return str;
  };

  /**
   * Replaces placeholders with sanitized values in a string.
   *
   * @param {string} str
   *   A string with placeholders.
   * @param {object} args
   *   An object of replacements pairs to make. Incidences of any key in this
   *   array are replaced with the corresponding value. Based on the first
   *   character of the key, the value is escaped and/or themed:
   *    - `'!variable'`: inserted as is.
   *    - `'@variable'`: escape plain text to HTML ({@link Drupal.checkPlain}).
   *    - `'%variable'`: escape text and theme as a placeholder for user-
   *      submitted content ({@link Drupal.checkPlain} +
   *      `{@link Drupal.theme}('placeholder')`).
   *
   * @return {string}
   *   The formatted string.
   *
   * @see Drupal.t
   */
  Drupal.formatString = function (str, args) {
    // Keep args intact.
    var processedArgs = {};
    // Transform arguments before inserting them.
    for (var key in args) {
      if (args.hasOwnProperty(key)) {
        switch (key.charAt(0)) {
          // Escaped only.
          case '@':
            processedArgs[key] = Drupal.checkPlain(args[key]);
            break;

          // Pass-through.
          case '!':
            processedArgs[key] = args[key];
            break;

          // Escaped and placeholder.
          default:
            processedArgs[key] = Drupal.theme('placeholder', args[key]);
            break;
        }
      }
    }

    return Drupal.stringReplace(str, processedArgs, null);
  };

  /**
   * Replaces substring.
   *
   * The longest keys will be tried first. Once a substring has been replaced,
   * its new value will not be searched again.
   *
   * @param {string} str
   *   A string with placeholders.
   * @param {object} args
   *   Key-value pairs.
   * @param {Array|null} keys
   *   Array of keys from `args`. Internal use only.
   *
   * @return {string}
   *   The replaced string.
   */
  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    // If the array of keys is not passed then collect the keys from the args.
    if (!Array.isArray(keys)) {
      keys = [];
      for (var k in args) {
        if (args.hasOwnProperty(k)) {
          keys.push(k);
        }
      }

      // Order the keys by the character length. The shortest one is the first.
      keys.sort(function (a, b) { return a.length - b.length; });
    }

    if (keys.length === 0) {
      return str;
    }

    // Take next longest one from the end.
    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        // Process each fragment with a copy of remaining keys.
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  /**
   * Translates strings to the page language, or a given language.
   *
   * See the documentation of the server-side t() function for further details.
   *
   * @param {string} str
   *   A string containing the English text to translate.
   * @param {Object.<string, string>} [args]
   *   An object of replacements pairs to make after translation. Incidences
   *   of any key in this array are replaced with the corresponding value.
   *   See {@link Drupal.formatString}.
   * @param {object} [options]
   *   Additional options for translation.
   * @param {string} [options.context='']
   *   The context the source string belongs to.
   *
   * @return {string}
   *   The formatted string.
   *   The translated string.
   */
  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    // Fetch the localized version of the string.
    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  /**
   * Returns the URL to a Drupal page.
   *
   * @param {string} path
   *   Drupal path to transform to URL.
   *
   * @return {string}
   *   The full URL.
   */
  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  /**
   * Returns the passed in URL as an absolute URL.
   *
   * @param {string} url
   *   The URL string to be normalized to an absolute URL.
   *
   * @return {string}
   *   The normalized, absolute URL.
   *
   * @see https://github.com/angular/angular.js/blob/v1.4.4/src/ng/urlUtils.js
   * @see https://grack.com/blog/2009/11/17/absolutizing-url-in-javascript
   * @see https://github.com/jquery/jquery-ui/blob/1.11.4/ui/tabs.js#L53
   */
  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    // Decode the URL first; this is required by IE <= 6. Decoding non-UTF-8
    // strings may throw an exception.
    try {
      url = decodeURIComponent(url);
    }
    catch (e) {
      // Empty.
    }

    urlParsingNode.setAttribute('href', url);

    // IE <= 7 normalizes the URL when assigned to the anchor node similar to
    // the other browsers.
    return urlParsingNode.cloneNode(false).href;
  };

  /**
   * Returns true if the URL is within Drupal's base path.
   *
   * @param {string} url
   *   The URL string to be tested.
   *
   * @return {bool}
   *   `true` if local.
   *
   * @see https://github.com/jquery/jquery-ui/blob/1.11.4/ui/tabs.js#L58
   */
  Drupal.url.isLocal = function (url) {
    // Always use browser-derived absolute URLs in the comparison, to avoid
    // attempts to break out of the base path using directory traversal.
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = location.protocol;

    // Consider URLs that match this site's base URL but use HTTPS instead of HTTP
    // as local as well.
    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = protocol + '//' + location.host + drupalSettings.path.baseUrl.slice(0, -1);

    // Decoding non-UTF-8 strings may throw an exception.
    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    }
    catch (e) {
      // Empty.
    }
    try {
      baseUrl = decodeURIComponent(baseUrl);
    }
    catch (e) {
      // Empty.
    }

    // The given URL matches the site's base URL, or has a path under the site's
    // base URL.
    return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
  };

  /**
   * Formats a string containing a count of items.
   *
   * This function ensures that the string is pluralized correctly. Since
   * {@link Drupal.t} is called by this function, make sure not to pass
   * already-localized strings to it.
   *
   * See the documentation of the server-side
   * \Drupal\Core\StringTranslation\TranslationInterface::formatPlural()
   * function for more details.
   *
   * @param {number} count
   *   The item count to display.
   * @param {string} singular
   *   The string for the singular case. Please make sure it is clear this is
   *   singular, to ease translation (e.g. use "1 new comment" instead of "1
   *   new"). Do not use @count in the singular string.
   * @param {string} plural
   *   The string for the plural case. Please make sure it is clear this is
   *   plural, to ease translation. Use @count in place of the item count, as in
   *   "@count new comments".
   * @param {object} [args]
   *   An object of replacements pairs to make after translation. Incidences
   *   of any key in this array are replaced with the corresponding value.
   *   See {@link Drupal.formatString}.
   *   Note that you do not need to include @count in this array.
   *   This replacement is done automatically for the plural case.
   * @param {object} [options]
   *   The options to pass to the {@link Drupal.t} function.
   *
   * @return {string}
   *   A translated string.
   */
  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    // Determine the index of the plural form.
    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula['default'];
    }
    else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  /**
   * Encodes a Drupal path for use in a URL.
   *
   * For aesthetic reasons slashes are not escaped.
   *
   * @param {string} item
   *   Unencoded path.
   *
   * @return {string}
   *   The encoded path.
   */
  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  /**
   * Generates the themed representation of a Drupal object.
   *
   * All requests for themed output must go through this function. It examines
   * the request and routes it to the appropriate theme function. If the current
   * theme does not provide an override function, the generic theme function is
   * called.
   *
   * @example
   * <caption>To retrieve the HTML for text that should be emphasized and
   * displayed as a placeholder inside a sentence.</caption>
   * Drupal.theme('placeholder', text);
   *
   * @namespace
   *
   * @param {function} func
   *   The name of the theme function to call.
   * @param {...args}
   *   Additional arguments to pass along to the theme function.
   *
   * @return {string|object|HTMLElement|jQuery}
   *   Any data the theme function returns. This could be a plain HTML string,
   *   but also a complex object.
   */
  Drupal.theme = function (func) {
    var args = Array.prototype.slice.apply(arguments, [1]);
    if (func in Drupal.theme) {
      return Drupal.theme[func].apply(this, args);
    }
  };

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param {string} str
   *   The text to format (plain-text).
   *
   * @return {string}
   *   The formatted text (html).
   */
  Drupal.theme.placeholder = function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  };

})(Drupal, window.drupalSettings, window.drupalTranslations);
;
// Allow other JavaScript libraries to use $.
if (window.jQuery) {
  jQuery.noConflict();
}

// Class indicating that JS is enabled; used for styling purpose.
document.documentElement.className += ' js';

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it in an anonymous closure.

(function (domready, Drupal, drupalSettings) {

  'use strict';

  // Attach all behaviors.
  domready(function () { Drupal.attachBehaviors(document, drupalSettings); });

})(domready, Drupal, window.drupalSettings);
;
/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */(function(e){typeof define=="function"&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,r){var i,s,o,u=t.nodeName.toLowerCase();return"area"===u?(i=t.parentNode,s=i.name,!t.href||!s||i.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap='#"+s+"']")[0],!!o&&n(o))):(/^(input|select|textarea|button|object)$/.test(u)?!t.disabled:"a"===u?t.href||r:r)&&n(t)}function n(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return e.css(this,"visibility")==="hidden"}).length}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var n=this.css("position"),r=n==="absolute",i=t?/(auto|scroll|hidden)/:/(auto|scroll)/,s=this.parents().filter(function(){var t=e(this);return r&&t.css("position")==="static"?!1:i.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return n==="fixed"||!s.length?e(this[0].ownerDocument||document):s},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(n){return t(n,!isNaN(e.attr(n,"tabindex")))},tabbable:function(n){var r=e.attr(n,"tabindex"),i=isNaN(r);return(i||r>=0)&&t(n,!i)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,n){function o(t,n,i,s){return e.each(r,function(){n-=parseFloat(e.css(t,"padding"+this))||0,i&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var r=n==="Width"?["Left","Right"]:["Top","Bottom"],i=n.toLowerCase(),s={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+n]=function(t){return t===undefined?s["inner"+n].call(this):this.each(function(){e(this).css(i,o(this,t)+"px")})},e.fn["outer"+n]=function(t,r){return typeof t!="number"?s["outer"+n].call(this,t):this.each(function(){e(this).css(i,o(this,t,!0,r)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(n,r){return typeof n=="number"?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),r&&r.call(t)},n)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(t!==undefined)return this.css("zIndex",t);if(this.length){var n=e(this[0]),r,i;while(n.length&&n[0]!==document){r=n.css("position");if(r==="absolute"||r==="relative"||r==="fixed"){i=parseInt(n.css("zIndex"),10);if(!isNaN(i)&&i!==0)return i}n=n.parent()}}return 0}}),e.ui.plugin={add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n,r){var i,s=e.plugins[t];if(!s)return;if(!r&&(!e.element[0].parentNode||e.element[0].parentNode.nodeType===11))return;for(i=0;i<s.length;i++)e.options[s[i][0]]&&s[i][1].apply(e.element,n)}}});;
/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */(function(e){typeof define=="function"&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){var t=0,n=Array.prototype.slice;return e.cleanData=function(t){return function(n){var r,i,s;for(s=0;(i=n[s])!=null;s++)try{r=e._data(i,"events"),r&&r.remove&&e(i).triggerHandler("remove")}catch(o){}t(n)}}(e.cleanData),e.widget=function(t,n,r){var i,s,o,u,a={},f=t.split(".")[0];return t=t.split(".")[1],i=f+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[f]=e[f]||{},s=e[f][t],o=e[f][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,r){if(!e.isFunction(r)){a[t]=r;return}a[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},i=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=i,s=r.apply(this,arguments),this._super=t,this._superApply=n,s}}()}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix||t:t},a,{constructor:o,namespace:f,widgetName:t,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){var r=n.call(arguments,1),i=0,s=r.length,o,u;for(;i<s;i++)for(o in r[i])u=r[i][o],r[i].hasOwnProperty(o)&&u!==undefined&&(e.isPlainObject(u)?t[o]=e.isPlainObject(t[o])?e.widget.extend({},t[o],u):e.widget.extend({},u):t[o]=u);return t},e.widget.bridge=function(t,r){var i=r.prototype.widgetFullName||t;e.fn[t]=function(s){var o=typeof s=="string",u=n.call(arguments,1),a=this;return o?this.each(function(){var n,r=e.data(this,i);if(s==="instance")return a=r,!1;if(!r)return e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+s+"'");if(!e.isFunction(r[s])||s.charAt(0)==="_")return e.error("no such method '"+s+"' for "+t+" widget instance");n=r[s].apply(r,u);if(n!==r&&n!==undefined)return a=n&&n.jquery?a.pushStack(n.get()):n,!1}):(u.length&&(s=e.widget.extend.apply(null,[s].concat(u))),this.each(function(){var t=e.data(this,i);t?(t.option(s||{}),t._init&&t._init()):e.data(this,i,new r(s,this))})),a}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(n,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=t++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),n),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,n){var r=t,i,s,o;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof t=="string"){r={},i=t.split("."),t=i.shift();if(i.length){s=r[t]=e.widget.extend({},this.options[t]);for(o=0;o<i.length-1;o++)s[i[o]]=s[i[o]]||{},s=s[i[o]];t=i.pop();if(arguments.length===1)return s[t]===undefined?null:s[t];s[t]=n}else{if(arguments.length===1)return this.options[t]===undefined?null:this.options[t];r[t]=n}}return this._setOptions(r),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,n,r){var i,s=this;typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;return(typeof o=="string"?s[o]:o).apply(s,arguments)}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);var a=r.match(/^([\w:-]*)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];l?i.delegate(l,f,u):n.bind(f,u)})},_off:function(t,n){n=(n||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(n).undelegate(n),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&e.effects.effect[u]?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}}),e.widget});;
/**
 * @file
 * Attaches behaviors for the Contextual module.
 */

(function ($, Drupal, drupalSettings, _, Backbone, JSON, storage) {

  'use strict';

  var options = $.extend(drupalSettings.contextual,
    // Merge strings on top of drupalSettings so that they are not mutable.
    {
      strings: {
        open: Drupal.t('Open'),
        close: Drupal.t('Close')
      }
    }
  );

  // Clear the cached contextual links whenever the current user's set of
  // permissions changes.
  var cachedPermissionsHash = storage.getItem('Drupal.contextual.permissionsHash');
  var permissionsHash = drupalSettings.user.permissionsHash;
  if (cachedPermissionsHash !== permissionsHash) {
    if (typeof permissionsHash === 'string') {
      _.chain(storage).keys().each(function (key) {
        if (key.substring(0, 18) === 'Drupal.contextual.') {
          storage.removeItem(key);
        }
      });
    }
    storage.setItem('Drupal.contextual.permissionsHash', permissionsHash);
  }

  /**
   * Initializes a contextual link: updates its DOM, sets up model and views.
   *
   * @param {jQuery} $contextual
   *   A contextual links placeholder DOM element, containing the actual
   *   contextual links as rendered by the server.
   * @param {string} html
   *   The server-side rendered HTML for this contextual link.
   */
  function initContextual($contextual, html) {
    var $region = $contextual.closest('.contextual-region');
    var contextual = Drupal.contextual;

    $contextual
      // Update the placeholder to contain its rendered contextual links.
      .html(html)
      // Use the placeholder as a wrapper with a specific class to provide
      // positioning and behavior attachment context.
      .addClass('contextual')
      // Ensure a trigger element exists before the actual contextual links.
      .prepend(Drupal.theme('contextualTrigger'));

    // Set the destination parameter on each of the contextual links.
    var destination = 'destination=' + Drupal.encodePath(drupalSettings.path.currentPath);
    $contextual.find('.contextual-links a').each(function () {
      var url = this.getAttribute('href');
      var glue = (url.indexOf('?') === -1) ? '?' : '&';
      this.setAttribute('href', url + glue + destination);
    });

    // Create a model and the appropriate views.
    var model = new contextual.StateModel({
      title: $region.find('h2').eq(0).text().trim()
    });
    var viewOptions = $.extend({el: $contextual, model: model}, options);
    contextual.views.push({
      visual: new contextual.VisualView(viewOptions),
      aural: new contextual.AuralView(viewOptions),
      keyboard: new contextual.KeyboardView(viewOptions)
    });
    contextual.regionViews.push(new contextual.RegionView(
      $.extend({el: $region, model: model}, options))
    );

    // Add the model to the collection. This must happen after the views have
    // been associated with it, otherwise collection change event handlers can't
    // trigger the model change event handler in its views.
    contextual.collection.add(model);

    // Let other JavaScript react to the adding of a new contextual link.
    $(document).trigger('drupalContextualLinkAdded', {
      $el: $contextual,
      $region: $region,
      model: model
    });

    // Fix visual collisions between contextual link triggers.
    adjustIfNestedAndOverlapping($contextual);
  }

  /**
   * Determines if a contextual link is nested & overlapping, if so: adjusts it.
   *
   * This only deals with two levels of nesting; deeper levels are not touched.
   *
   * @param {jQuery} $contextual
   *   A contextual links placeholder DOM element, containing the actual
   *   contextual links as rendered by the server.
   */
  function adjustIfNestedAndOverlapping($contextual) {
    var $contextuals = $contextual
      // @todo confirm that .closest() is not sufficient
      .parents('.contextual-region').eq(-1)
      .find('.contextual');

    // Early-return when there's no nesting.
    if ($contextuals.length === 1) {
      return;
    }

    // If the two contextual links overlap, then we move the second one.
    var firstTop = $contextuals.eq(0).offset().top;
    var secondTop = $contextuals.eq(1).offset().top;
    if (firstTop === secondTop) {
      var $nestedContextual = $contextuals.eq(1);

      // Retrieve height of nested contextual link.
      var height = 0;
      var $trigger = $nestedContextual.find('.trigger');
      // Elements with the .visually-hidden class have no dimensions, so this
      // class must be temporarily removed to the calculate the height.
      $trigger.removeClass('visually-hidden');
      height = $nestedContextual.height();
      $trigger.addClass('visually-hidden');

      // Adjust nested contextual link's position.
      $nestedContextual.css({top: $nestedContextual.position().top + height});
    }
  }

  /**
   * Attaches outline behavior for regions associated with contextual links.
   *
   * Events
   *   Contextual triggers an event that can be used by other scripts.
   *   - drupalContextualLinkAdded: Triggered when a contextual link is added.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *  Attaches the outline behavior to the right context.
   */
  Drupal.behaviors.contextual = {
    attach: function (context) {
      var $context = $(context);

      // Find all contextual links placeholders, if any.
      var $placeholders = $context.find('[data-contextual-id]').once('contextual-render');
      if ($placeholders.length === 0) {
        return;
      }

      // Collect the IDs for all contextual links placeholders.
      var ids = [];
      $placeholders.each(function () {
        ids.push($(this).attr('data-contextual-id'));
      });

      // Update all contextual links placeholders whose HTML is cached.
      var uncachedIDs = _.filter(ids, function initIfCached(contextualID) {
        var html = storage.getItem('Drupal.contextual.' + contextualID);
        if (html && html.length) {
          // Initialize after the current execution cycle, to make the AJAX
          // request for retrieving the uncached contextual links as soon as
          // possible, but also to ensure that other Drupal behaviors have had
          // the chance to set up an event listener on the Backbone collection
          // Drupal.contextual.collection.
          window.setTimeout(function () {
            initContextual($context.find('[data-contextual-id="' + contextualID + '"]'), html);
          });
          return false;
        }
        return true;
      });

      // Perform an AJAX request to let the server render the contextual links
      // for each of the placeholders.
      if (uncachedIDs.length > 0) {
        $.ajax({
          url: Drupal.url('contextual/render'),
          type: 'POST',
          data: {'ids[]': uncachedIDs},
          dataType: 'json',
          success: function (results) {
            _.each(results, function (html, contextualID) {
              // Store the metadata.
              storage.setItem('Drupal.contextual.' + contextualID, html);
              // If the rendered contextual links are empty, then the current
              // user does not have permission to access the associated links:
              // don't render anything.
              if (html.length > 0) {
                // Update the placeholders to contain its rendered contextual
                // links. Usually there will only be one placeholder, but it's
                // possible for multiple identical placeholders exist on the
                // page (probably because the same content appears more than
                // once).
                $placeholders = $context.find('[data-contextual-id="' + contextualID + '"]');

                // Initialize the contextual links.
                for (var i = 0; i < $placeholders.length; i++) {
                  initContextual($placeholders.eq(i), html);
                }
              }
            });
          }
        });
      }
    }
  };

  /**
   * Namespace for contextual related functionality.
   *
   * @namespace
   */
  Drupal.contextual = {

    /**
     * The {@link Drupal.contextual.View} instances associated with each list
     * element of contextual links.
     *
     * @type {Array}
     */
    views: [],

    /**
     * The {@link Drupal.contextual.RegionView} instances associated with each
     * contextual region element.
     *
     * @type {Array}
     */
    regionViews: []
  };

  /**
   * A Backbone.Collection of {@link Drupal.contextual.StateModel} instances.
   *
   * @type {Backbone.Collection}
   */
  Drupal.contextual.collection = new Backbone.Collection([], {model: Drupal.contextual.StateModel});

  /**
   * A trigger is an interactive element often bound to a click handler.
   *
   * @return {string}
   *   A string representing a DOM fragment.
   */
  Drupal.theme.contextualTrigger = function () {
    return '<button class="trigger visually-hidden focusable" type="button"></button>';
  };

})(jQuery, Drupal, drupalSettings, _, Backbone, window.JSON, window.sessionStorage);
;
/**
 * @file
 * A Backbone Model for the state of a contextual link's trigger, list & region.
 */

(function (Drupal, Backbone) {

  'use strict';

  /**
   * Models the state of a contextual link's trigger, list & region.
   *
   * @constructor
   *
   * @augments Backbone.Model
   */
  Drupal.contextual.StateModel = Backbone.Model.extend(/** @lends Drupal.contextual.StateModel# */{

    /**
     * @type {object}
     *
     * @prop {string} title
     * @prop {bool} regionIsHovered
     * @prop {bool} hasFocus
     * @prop {bool} isOpen
     * @prop {bool} isLocked
     */
    defaults: /** @lends Drupal.contextual.StateModel# */{

      /**
       * The title of the entity to which these contextual links apply.
       *
       * @type {string}
       */
      title: '',

      /**
       * Represents if the contextual region is being hovered.
       *
       * @type {bool}
       */
      regionIsHovered: false,

      /**
       * Represents if the contextual trigger or options have focus.
       *
       * @type {bool}
       */
      hasFocus: false,

      /**
       * Represents if the contextual options for an entity are available to
       * be selected (i.e. whether the list of options is visible).
       *
       * @type {bool}
       */
      isOpen: false,

      /**
       * When the model is locked, the trigger remains active.
       *
       * @type {bool}
       */
      isLocked: false
    },

    /**
     * Opens or closes the contextual link.
     *
     * If it is opened, then also give focus.
     *
     * @return {Drupal.contextual.StateModel}
     *   The current contextual state model.
     */
    toggleOpen: function () {
      var newIsOpen = !this.get('isOpen');
      this.set('isOpen', newIsOpen);
      if (newIsOpen) {
        this.focus();
      }
      return this;
    },

    /**
     * Closes this contextual link.
     *
     * Does not call blur() because we want to allow a contextual link to have
     * focus, yet be closed for example when hovering.
     *
     * @return {Drupal.contextual.StateModel}
     *   The current contextual state model.
     */
    close: function () {
      this.set('isOpen', false);
      return this;
    },

    /**
     * Gives focus to this contextual link.
     *
     * Also closes + removes focus from every other contextual link.
     *
     * @return {Drupal.contextual.StateModel}
     *   The current contextual state model.
     */
    focus: function () {
      this.set('hasFocus', true);
      var cid = this.cid;
      this.collection.each(function (model) {
        if (model.cid !== cid) {
          model.close().blur();
        }
      });
      return this;
    },

    /**
     * Removes focus from this contextual link, unless it is open.
     *
     * @return {Drupal.contextual.StateModel}
     *   The current contextual state model.
     */
    blur: function () {
      if (!this.get('isOpen')) {
        this.set('hasFocus', false);
      }
      return this;
    }

  });

})(Drupal, Backbone);
;
/**
 * @file
 * A Backbone View that provides the aural view of a contextual link.
 */

(function (Drupal, Backbone) {

  'use strict';

  Drupal.contextual.AuralView = Backbone.View.extend(/** @lends Drupal.contextual.AuralView# */{

    /**
     * Renders the aural view of a contextual link (i.e. screen reader support).
     *
     * @constructs
     *
     * @augments Backbone.View
     *
     * @param {object} options
     *   Options for the view.
     */
    initialize: function (options) {
      this.options = options;

      this.listenTo(this.model, 'change', this.render);

      // Use aria-role form so that the number of items in the list is spoken.
      this.$el.attr('role', 'form');

      // Initial render.
      this.render();
    },

    /**
     * @inheritdoc
     */
    render: function () {
      var isOpen = this.model.get('isOpen');

      // Set the hidden property of the links.
      this.$el.find('.contextual-links')
        .prop('hidden', !isOpen);

      // Update the view of the trigger.
      this.$el.find('.trigger')
        .text(Drupal.t('@action @title configuration options', {
          '@action': (!isOpen) ? this.options.strings.open : this.options.strings.close,
          '@title': this.model.get('title')
        }))
        .attr('aria-pressed', isOpen);
    }

  });

})(Drupal, Backbone);
;
/**
 * @file
 * A Backbone View that provides keyboard interaction for a contextual link.
 */

(function (Drupal, Backbone) {

  'use strict';

  Drupal.contextual.KeyboardView = Backbone.View.extend(/** @lends Drupal.contextual.KeyboardView# */{

    /**
     * @type {object}
     */
    events: {
      'focus .trigger': 'focus',
      'focus .contextual-links a': 'focus',
      'blur .trigger': function () { this.model.blur(); },
      'blur .contextual-links a': function () {
        // Set up a timeout to allow a user to tab between the trigger and the
        // contextual links without the menu dismissing.
        var that = this;
        this.timer = window.setTimeout(function () {
          that.model.close().blur();
        }, 150);
      }
    },

    /**
     * Provides keyboard interaction for a contextual link.
     *
     * @constructs
     *
     * @augments Backbone.View
     */
    initialize: function () {

      /**
       * The timer is used to create a delay before dismissing the contextual
       * links on blur. This is only necessary when keyboard users tab into
       * contextual links without edit mode (i.e. without TabbingManager).
       * That means that if we decide to disable tabbing of contextual links
       * without edit mode, all this timer logic can go away.
       *
       * @type {NaN|number}
       */
      this.timer = NaN;
    },

    /**
     * Sets focus on the model; Clears the timer that dismisses the links.
     */
    focus: function () {
      // Clear the timeout that might have been set by blurring a link.
      window.clearTimeout(this.timer);
      this.model.focus();
    }

  });

})(Drupal, Backbone);
;
/**
 * @file
 * A Backbone View that renders the visual view of a contextual region element.
 */

(function (Drupal, Backbone, Modernizr) {

  'use strict';

  Drupal.contextual.RegionView = Backbone.View.extend(/** @lends Drupal.contextual.RegionView# */{

    /**
     * Events for the Backbone view.
     *
     * @return {object}
     *   A mapping of events to be used in the view.
     */
    events: function () {
      var mapping = {
        mouseenter: function () { this.model.set('regionIsHovered', true); },
        mouseleave: function () {
          this.model.close().blur().set('regionIsHovered', false);
        }
      };
      // We don't want mouse hover events on touch.
      if (Modernizr.touchevents) {
        mapping = {};
      }
      return mapping;
    },

    /**
     * Renders the visual view of a contextual region element.
     *
     * @constructs
     *
     * @augments Backbone.View
     */
    initialize: function () {
      this.listenTo(this.model, 'change:hasFocus', this.render);
    },

    /**
     * @inheritdoc
     *
     * @return {Drupal.contextual.RegionView}
     *   The current contextual region view.
     */
    render: function () {
      this.$el.toggleClass('focus', this.model.get('hasFocus'));

      return this;
    }

  });

})(Drupal, Backbone, Modernizr);
;
/**
 * @file
 * A Backbone View that provides the visual view of a contextual link.
 */

(function (Drupal, Backbone, Modernizr) {

  'use strict';

  Drupal.contextual.VisualView = Backbone.View.extend(/** @lends Drupal.contextual.VisualView# */{

    /**
     * Events for the Backbone view.
     *
     * @return {object}
     *   A mapping of events to be used in the view.
     */
    events: function () {
      // Prevents delay and simulated mouse events.
      var touchEndToClick = function (event) {
        event.preventDefault();
        event.target.click();
      };
      var mapping = {
        'click .trigger': function () { this.model.toggleOpen(); },
        'touchend .trigger': touchEndToClick,
        'click .contextual-links a': function () { this.model.close().blur(); },
        'touchend .contextual-links a': touchEndToClick
      };
      // We only want mouse hover events on non-touch.
      if (!Modernizr.touchevents) {
        mapping.mouseenter = function () { this.model.focus(); };
      }
      return mapping;
    },

    /**
     * Renders the visual view of a contextual link. Listens to mouse & touch.
     *
     * @constructs
     *
     * @augments Backbone.View
     */
    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },

    /**
     * @inheritdoc
     *
     * @return {Drupal.contextual.VisualView}
     *   The current contextual visual view.
     */
    render: function () {
      var isOpen = this.model.get('isOpen');
      // The trigger should be visible when:
      //  - the mouse hovered over the region,
      //  - the trigger is locked,
      //  - and for as long as the contextual menu is open.
      var isVisible = this.model.get('isLocked') || this.model.get('regionIsHovered') || isOpen;

      this.$el
        // The open state determines if the links are visible.
        .toggleClass('open', isOpen)
        // Update the visibility of the trigger.
        .find('.trigger').toggleClass('visually-hidden', !isVisible);

      // Nested contextual region handling: hide any nested contextual triggers.
      if ('isOpen' in this.model.changed) {
        this.$el.closest('.contextual-region')
          .find('.contextual .trigger:not(:first)')
          .toggle(!isOpen);
      }

      return this;
    }

  });

})(Drupal, Backbone, Modernizr);
;
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(a){for(var n=new FormData,i=0;i<a.length;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;i<o.length;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),s.data=null;var c=s.beforeSend;return s.beforeSend=function(e,r){r.data=t.formData?t.formData:n,c&&c.call(this,e,r)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(k),j&&clearTimeout(j),j=void 0}}var r=f.attr2("target"),i=f.attr2("action"),o="multipart/form-data",c=f.attr("enctype")||f.attr("encoding")||o;w.setAttribute("target",p),(!u||/post/i.test(u))&&w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(D)},m.timeout));var l=[];try{if(m.extraData)for(var d in m.extraData)m.extraData.hasOwnProperty(d)&&l.push(e.isPlainObject(m.extraData[d])&&m.extraData[d].hasOwnProperty("name")&&m.extraData[d].hasOwnProperty("value")?e('<input type="hidden" name="'+m.extraData[d].name+'">').val(m.extraData[d].value).appendTo(w)[0]:e('<input type="hidden" name="'+d+'">').val(m.extraData[d]).appendTo(w)[0]);m.iframeTarget||v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(h){var x=document.createElement("form").submit;x.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",c),r?w.setAttribute("target",r):f.removeAttr("target"),e(l).remove()}}function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=k),t===D&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t==k&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(m.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(l){var p=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];p?x.responseText=p.textContent?p.textContent:p.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==c&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{E=_(x,c,m)}catch(y){i="parsererror",x.error=r=y||i}}catch(y){a("error caught: ",y),i="error",x.error=r=y||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,E,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,m,r])),d&&e.event.trigger("ajaxComplete",[x,m]),d&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget?v.attr("src",m.iframeSrc):v.remove(),x.responseXML=null},100)}}}var c,l,m,d,p,v,g,x,y,b,T,j,w=f[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(l=0;l<h.length;l++)c=e(h[l]),i?c.prop("disabled",!1):c.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,p="jqFormIO"+(new Date).getTime(),m.iframeTarget?(v=e(m.iframeTarget),b=v.attr2("name"),b?p=b:v.attr2("name",p)):(v=e('<iframe name="'+p+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(n){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),d&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},d=m.global,d&&0===e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;y=w.clk,y&&(b=y.name,b&&!y.disabled&&(m.extraData=m.extraData||{},m.extraData[b]=y.value,"image"==y.type&&(m.extraData[b+".x"]=w.clk_x,m.extraData[b+".y"]=w.clk_y)));var D=1,k=2,A=e("meta[name=csrf-token]").attr("content"),L=e("meta[name=csrf-param]").attr("content");L&&A&&(m.extraData=m.extraData||{},m.extraData[L]=A),m.forceSync?o():setTimeout(o,10);var E,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,c,l,f=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),c=t.url||this.attr2("action"),l="string"==typeof c?e.trim(c):"",l=l||window.location.href||"",l&&(l=(l.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:l,success:e.ajaxSettings.success,type:u||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var d=t.traditional;void 0===d&&(d=e.ajaxSettings.traditional);var p,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,p=e.param(t.data,d)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,d);p&&(g=g?g+"&"+p:p),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var y=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(y,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var b=t.error;t.error=function(e,r,a){var n=t.context||this;b.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}),w=j.length>0,S="multipart/form-data",D=f.attr("enctype")==S||f.attr("encoding")==S,k=n.fileapi&&n.formdata;a("fileAPI :"+k);var A,L=(w||D)&&!k;t.iframe!==!1&&(t.iframe||L)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v)}):A=s(v):A=(w||D)&&k?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var E=0;E<h.length;E++)h[E]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i,o=this[0],s=this.attr("id"),u=t?o.getElementsByTagName("*"):o.elements;if(u&&!/MSIE [678]/.test(navigator.userAgent)&&(u=e(u).get()),s&&(i=e(':input[form="'+s+'"]').get(),i.length&&(u=(u||[]).concat(i))),!u||!u.length)return a;var c,l,f,m,d,p,h;for(c=0,p=u.length;p>c;c++)if(d=u[c],f=d.name,f&&!d.disabled)if(t&&o.clk&&"image"==d.type)o.clk==d&&(a.push({name:f,value:e(d).val(),type:d.type}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}));else if(m=e.fieldValue(d,!0),m&&m.constructor==Array)for(r&&r.push(d),l=0,h=m.length;h>l;l++)a.push({name:f,value:m[l]});else if(n.fileapi&&"file"==d.type){r&&r.push(d);var v=d.files;if(v.length)for(l=0;l<v.length;l++)a.push({name:f,value:v[l],type:d.type});else a.push({name:f,value:"",type:d.type})}else null!==m&&"undefined"!=typeof m&&(r&&r.push(d),a.push({name:f,value:m,type:d.type,required:d.required}));if(!t&&o.clk){var g=e(o.clk),x=g[0];f=x.name,f&&!x.disabled&&"image"==x.type&&(a.push({name:f,value:g.val()}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&"undefined"!=typeof n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||"undefined"==typeof o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,c="select-one"==n,l=c?o+1:u.length,f=c?o:0;l>f;f++){var m=u[f];if(m.selected){var d=m.value;if(d||(d=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),c)return d;s.push(d)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});
;
/*!
 * jQuery UI Position 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */(function(e){typeof define=="function"&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){return function(){function h(e,t,n){return[parseFloat(e[0])*(l.test(e[0])?t/100:1),parseFloat(e[1])*(l.test(e[1])?n/100:1)]}function p(t,n){return parseInt(e.css(t,n),10)||0}function d(t){var n=t[0];return n.nodeType===9?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(n)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:n.preventDefault?{width:0,height:0,offset:{top:n.pageY,left:n.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var t,n,r=Math.max,i=Math.abs,s=Math.round,o=/left|center|right/,u=/top|center|bottom/,a=/[\+\-]\d+(\.[\d]+)?%?/,f=/^\w+/,l=/%$/,c=e.fn.position;e.position={scrollbarWidth:function(){if(t!==undefined)return t;var n,r,i=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),s=i.children()[0];return e("body").append(i),n=s.offsetWidth,i.css("overflow","scroll"),r=s.offsetWidth,n===r&&(r=i[0].clientWidth),i.remove(),t=n-r},getScrollInfo:function(t){var n=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),r=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),i=n==="scroll"||n==="auto"&&t.width<t.element[0].scrollWidth,s=r==="scroll"||r==="auto"&&t.height<t.element[0].scrollHeight;return{width:s?e.position.scrollbarWidth():0,height:i?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),r=e.isWindow(n[0]),i=!!n[0]&&n[0].nodeType===9;return{element:n,isWindow:r,isDocument:i,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:r||i?n.width():n.outerWidth(),height:r||i?n.height():n.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return c.apply(this,arguments);t=e.extend({},t);var l,v,m,g,y,b,w=e(t.of),E=e.position.getWithinInfo(t.within),S=e.position.getScrollInfo(E),x=(t.collision||"flip").split(" "),T={};return b=d(w),w[0].preventDefault&&(t.at="left top"),v=b.width,m=b.height,g=b.offset,y=e.extend({},g),e.each(["my","at"],function(){var e=(t[this]||"").split(" "),n,r;e.length===1&&(e=o.test(e[0])?e.concat(["center"]):u.test(e[0])?["center"].concat(e):["center","center"]),e[0]=o.test(e[0])?e[0]:"center",e[1]=u.test(e[1])?e[1]:"center",n=a.exec(e[0]),r=a.exec(e[1]),T[this]=[n?n[0]:0,r?r[0]:0],t[this]=[f.exec(e[0])[0],f.exec(e[1])[0]]}),x.length===1&&(x[1]=x[0]),t.at[0]==="right"?y.left+=v:t.at[0]==="center"&&(y.left+=v/2),t.at[1]==="bottom"?y.top+=m:t.at[1]==="center"&&(y.top+=m/2),l=h(T.at,v,m),y.left+=l[0],y.top+=l[1],this.each(function(){var o,u,a=e(this),f=a.outerWidth(),c=a.outerHeight(),d=p(this,"marginLeft"),b=p(this,"marginTop"),N=f+d+p(this,"marginRight")+S.width,C=c+b+p(this,"marginBottom")+S.height,k=e.extend({},y),L=h(T.my,a.outerWidth(),a.outerHeight());t.my[0]==="right"?k.left-=f:t.my[0]==="center"&&(k.left-=f/2),t.my[1]==="bottom"?k.top-=c:t.my[1]==="center"&&(k.top-=c/2),k.left+=L[0],k.top+=L[1],n||(k.left=s(k.left),k.top=s(k.top)),o={marginLeft:d,marginTop:b},e.each(["left","top"],function(n,r){e.ui.position[x[n]]&&e.ui.position[x[n]][r](k,{targetWidth:v,targetHeight:m,elemWidth:f,elemHeight:c,collisionPosition:o,collisionWidth:N,collisionHeight:C,offset:[l[0]+L[0],l[1]+L[1]],my:t.my,at:t.at,within:E,elem:a})}),t.using&&(u=function(e){var n=g.left-k.left,s=n+v-f,o=g.top-k.top,u=o+m-c,l={target:{element:w,left:g.left,top:g.top,width:v,height:m},element:{element:a,left:k.left,top:k.top,width:f,height:c},horizontal:s<0?"left":n>0?"right":"center",vertical:u<0?"top":o>0?"bottom":"middle"};v<f&&i(n+s)<v&&(l.horizontal="center"),m<c&&i(o+u)<m&&(l.vertical="middle"),r(i(n),i(s))>r(i(o),i(u))?l.important="horizontal":l.important="vertical",t.using.call(this,e,l)}),a.offset(e.extend(k,{using:u}))})},e.ui.position={fit:{left:function(e,t){var n=t.within,i=n.isWindow?n.scrollLeft:n.offset.left,s=n.width,o=e.left-t.collisionPosition.marginLeft,u=i-o,a=o+t.collisionWidth-s-i,f;t.collisionWidth>s?u>0&&a<=0?(f=e.left+u+t.collisionWidth-s-i,e.left+=u-f):a>0&&u<=0?e.left=i:u>a?e.left=i+s-t.collisionWidth:e.left=i:u>0?e.left+=u:a>0?e.left-=a:e.left=r(e.left-o,e.left)},top:function(e,t){var n=t.within,i=n.isWindow?n.scrollTop:n.offset.top,s=t.within.height,o=e.top-t.collisionPosition.marginTop,u=i-o,a=o+t.collisionHeight-s-i,f;t.collisionHeight>s?u>0&&a<=0?(f=e.top+u+t.collisionHeight-s-i,e.top+=u-f):a>0&&u<=0?e.top=i:u>a?e.top=i+s-t.collisionHeight:e.top=i:u>0?e.top+=u:a>0?e.top-=a:e.top=r(e.top-o,e.top)}},flip:{left:function(e,t){var n=t.within,r=n.offset.left+n.scrollLeft,s=n.width,o=n.isWindow?n.scrollLeft:n.offset.left,u=e.left-t.collisionPosition.marginLeft,a=u-o,f=u+t.collisionWidth-s-o,l=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0,c=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0,h=-2*t.offset[0],p,d;if(a<0){p=e.left+l+c+h+t.collisionWidth-s-r;if(p<0||p<i(a))e.left+=l+c+h}else if(f>0){d=e.left-t.collisionPosition.marginLeft+l+c+h-o;if(d>0||i(d)<f)e.left+=l+c+h}},top:function(e,t){var n=t.within,r=n.offset.top+n.scrollTop,s=n.height,o=n.isWindow?n.scrollTop:n.offset.top,u=e.top-t.collisionPosition.marginTop,a=u-o,f=u+t.collisionHeight-s-o,l=t.my[1]==="top",c=l?-t.elemHeight:t.my[1]==="bottom"?t.elemHeight:0,h=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight:0,p=-2*t.offset[1],d,v;if(a<0){v=e.top+c+h+p+t.collisionHeight-s-r;if(v<0||v<i(a))e.top+=c+h+p}else if(f>0){d=e.top-t.collisionPosition.marginTop+c+h+p-o;if(d>0||i(d)<f)e.top+=c+h+p}}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,r,i,s,o,u=document.getElementsByTagName("body")[0],a=document.createElement("div");t=document.createElement(u?"div":"body"),i={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},u&&e.extend(i,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in i)t.style[o]=i[o];t.appendChild(a),r=u||document.documentElement,r.insertBefore(t,r.firstChild),a.style.cssText="position: absolute; left: 10.7432222px;",s=e(a).offset().left,n=s>10&&s<11,t.innerHTML="",r.removeChild(t)}()}(),e.ui.position});;
/**
 * @file
 * Adapted from underscore.js with the addition Drupal namespace.
 */

/**
 * Limits the invocations of a function in a given time frame.
 *
 * The debounce function wrapper should be used sparingly. One clear use case
 * is limiting the invocation of a callback attached to the window resize event.
 *
 * Before using the debounce function wrapper, consider first whether the
 * callback could be attached to an event that fires less frequently or if the
 * function can be written in such a way that it is only invoked under specific
 * conditions.
 *
 * @param {function} func
 *   The function to be invoked.
 * @param {number} wait
 *   The time period within which the callback function should only be
 *   invoked once. For example if the wait period is 250ms, then the callback
 *   will only be called at most 4 times per second.
 * @param {bool} immediate
 *   Whether we wait at the beginning or end to execute the function.
 *
 * @return {function}
 *   The debounced function.
 */
Drupal.debounce = function (func, wait, immediate) {

  'use strict';

  var timeout;
  var result;
  return function () {
    var context = this;
    var args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
};
;
/**
 * @file
 * Manages elements that can offset the size of the viewport.
 *
 * Measures and reports viewport offset dimensions from elements like the
 * toolbar that can potentially displace the positioning of other elements.
 */

/**
 * @typedef {object} Drupal~displaceOffset
 *
 * @prop {number} top
 * @prop {number} left
 * @prop {number} right
 * @prop {number} bottom
 */

/**
 * Triggers when layout of the page changes.
 *
 * This is used to position fixed element on the page during page resize and
 * Toolbar toggling.
 *
 * @event drupalViewportOffsetChange
 */

(function ($, Drupal, debounce) {

  'use strict';

  /**
   * @name Drupal.displace.offsets
   *
   * @type {Drupal~displaceOffset}
   */
  var offsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

  /**
   * Registers a resize handler on the window.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.drupalDisplace = {
    attach: function () {
      // Mark this behavior as processed on the first pass.
      if (this.displaceProcessed) {
        return;
      }
      this.displaceProcessed = true;

      $(window).on('resize.drupalDisplace', debounce(displace, 200));
    }
  };

  /**
   * Informs listeners of the current offset dimensions.
   *
   * @function Drupal.displace
   *
   * @prop {Drupal~displaceOffset} offsets
   *
   * @param {bool} [broadcast]
   *   When true or undefined, causes the recalculated offsets values to be
   *   broadcast to listeners.
   *
   * @return {Drupal~displaceOffset}
   *   An object whose keys are the for sides an element -- top, right, bottom
   *   and left. The value of each key is the viewport displacement distance for
   *   that edge.
   *
   * @fires event:drupalViewportOffsetChange
   */
  function displace(broadcast) {
    offsets = Drupal.displace.offsets = calculateOffsets();
    if (typeof broadcast === 'undefined' || broadcast) {
      $(document).trigger('drupalViewportOffsetChange', offsets);
    }
    return offsets;
  }

  /**
   * Determines the viewport offsets.
   *
   * @return {Drupal~displaceOffset}
   *   An object whose keys are the for sides an element -- top, right, bottom
   *   and left. The value of each key is the viewport displacement distance for
   *   that edge.
   */
  function calculateOffsets() {
    return {
      top: calculateOffset('top'),
      right: calculateOffset('right'),
      bottom: calculateOffset('bottom'),
      left: calculateOffset('left')
    };
  }

  /**
   * Gets a specific edge's offset.
   *
   * Any element with the attribute data-offset-{edge} e.g. data-offset-top will
   * be considered in the viewport offset calculations. If the attribute has a
   * numeric value, that value will be used. If no value is provided, one will
   * be calculated using the element's dimensions and placement.
   *
   * @function Drupal.displace.calculateOffset
   *
   * @param {string} edge
   *   The name of the edge to calculate. Can be 'top', 'right',
   *   'bottom' or 'left'.
   *
   * @return {number}
   *   The viewport displacement distance for the requested edge.
   */
  function calculateOffset(edge) {
    var edgeOffset = 0;
    var displacingElements = document.querySelectorAll('[data-offset-' + edge + ']');
    var n = displacingElements.length;
    for (var i = 0; i < n; i++) {
      var el = displacingElements[i];
      // If the element is not visible, do consider its dimensions.
      if (el.style.display === 'none') {
        continue;
      }
      // If the offset data attribute contains a displacing value, use it.
      var displacement = parseInt(el.getAttribute('data-offset-' + edge), 10);
      // If the element's offset data attribute exits
      // but is not a valid number then get the displacement
      // dimensions directly from the element.
      if (isNaN(displacement)) {
        displacement = getRawOffset(el, edge);
      }
      // If the displacement value is larger than the current value for this
      // edge, use the displacement value.
      edgeOffset = Math.max(edgeOffset, displacement);
    }

    return edgeOffset;
  }

  /**
   * Calculates displacement for element based on its dimensions and placement.
   *
   * @param {HTMLElement} el
   *   The jQuery element whose dimensions and placement will be measured.
   *
   * @param {string} edge
   *   The name of the edge of the viewport that the element is associated
   *   with.
   *
   * @return {number}
   *   The viewport displacement distance for the requested edge.
   */
  function getRawOffset(el, edge) {
    var $el = $(el);
    var documentElement = document.documentElement;
    var displacement = 0;
    var horizontal = (edge === 'left' || edge === 'right');
    // Get the offset of the element itself.
    var placement = $el.offset()[horizontal ? 'left' : 'top'];
    // Subtract scroll distance from placement to get the distance
    // to the edge of the viewport.
    placement -= window['scroll' + (horizontal ? 'X' : 'Y')] || document.documentElement['scroll' + (horizontal ? 'Left' : 'Top')] || 0;
    // Find the displacement value according to the edge.
    switch (edge) {
      // Left and top elements displace as a sum of their own offset value
      // plus their size.
      case 'top':
        // Total displacement is the sum of the elements placement and size.
        displacement = placement + $el.outerHeight();
        break;

      case 'left':
        // Total displacement is the sum of the elements placement and size.
        displacement = placement + $el.outerWidth();
        break;

      // Right and bottom elements displace according to their left and
      // top offset. Their size isn't important.
      case 'bottom':
        displacement = documentElement.clientHeight - placement;
        break;

      case 'right':
        displacement = documentElement.clientWidth - placement;
        break;

      default:
        displacement = 0;
    }
    return displacement;
  }

  /**
   * Assign the displace function to a property of the Drupal global object.
   *
   * @ignore
   */
  Drupal.displace = displace;
  $.extend(Drupal.displace, {

    /**
     * Expose offsets to other scripts to avoid having to recalculate offsets.
     *
     * @ignore
     */
    offsets: offsets,

    /**
     * Expose method to compute a single edge offsets.
     *
     * @ignore
     */
    calculateOffset: calculateOffset
  });

})(jQuery, Drupal, Drupal.debounce);
;
/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});;
/**
 * @file
 * Form features.
 */

/**
 * Triggers when a value in the form changed.
 *
 * The event triggers when content is typed or pasted in a text field, before
 * the change event triggers.
 *
 * @event formUpdated
 */

(function ($, Drupal, debounce) {

  'use strict';

  /**
   * Retrieves the summary for the first element.
   *
   * @return {string}
   *   The text of the summary.
   */
  $.fn.drupalGetSummary = function () {
    var callback = this.data('summaryCallback');
    return (this[0] && callback) ? $.trim(callback(this[0])) : '';
  };

  /**
   * Sets the summary for all matched elements.
   *
   * @param {function} callback
   *   Either a function that will be called each time the summary is
   *   retrieved or a string (which is returned each time).
   *
   * @return {jQuery}
   *   jQuery collection of the current element.
   *
   * @fires event:summaryUpdated
   *
   * @listens event:formUpdated
   */
  $.fn.drupalSetSummary = function (callback) {
    var self = this;

    // To facilitate things, the callback should always be a function. If it's
    // not, we wrap it into an anonymous function which just returns the value.
    if (typeof callback !== 'function') {
      var val = callback;
      callback = function () { return val; };
    }

    return this
      .data('summaryCallback', callback)
      // To prevent duplicate events, the handlers are first removed and then
      // (re-)added.
      .off('formUpdated.summary')
      .on('formUpdated.summary', function () {
        self.trigger('summaryUpdated');
      })
      // The actual summaryUpdated handler doesn't fire when the callback is
      // changed, so we have to do this manually.
      .trigger('summaryUpdated');
  };

  /**
   * Prevents consecutive form submissions of identical form values.
   *
   * Repetitive form submissions that would submit the identical form values
   * are prevented, unless the form values are different to the previously
   * submitted values.
   *
   * This is a simplified re-implementation of a user-agent behavior that
   * should be natively supported by major web browsers, but at this time, only
   * Firefox has a built-in protection.
   *
   * A form value-based approach ensures that the constraint is triggered for
   * consecutive, identical form submissions only. Compared to that, a form
   * button-based approach would (1) rely on [visible] buttons to exist where
   * technically not required and (2) require more complex state management if
   * there are multiple buttons in a form.
   *
   * This implementation is based on form-level submit events only and relies
   * on jQuery's serialize() method to determine submitted form values. As such,
   * the following limitations exist:
   *
   * - Event handlers on form buttons that preventDefault() do not receive a
   *   double-submit protection. That is deemed to be fine, since such button
   *   events typically trigger reversible client-side or server-side
   *   operations that are local to the context of a form only.
   * - Changed values in advanced form controls, such as file inputs, are not
   *   part of the form values being compared between consecutive form submits
   *   (due to limitations of jQuery.serialize()). That is deemed to be
   *   acceptable, because if the user forgot to attach a file, then the size of
   *   HTTP payload will most likely be small enough to be fully passed to the
   *   server endpoint within (milli)seconds. If a user mistakenly attached a
   *   wrong file and is technically versed enough to cancel the form submission
   *   (and HTTP payload) in order to attach a different file, then that
   *   edge-case is not supported here.
   *
   * Lastly, all forms submitted via HTTP GET are idempotent by definition of
   * HTTP standards, so excluded in this implementation.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.formSingleSubmit = {
    attach: function () {
      function onFormSubmit(e) {
        var $form = $(e.currentTarget);
        var formValues = $form.serialize();
        var previousValues = $form.attr('data-drupal-form-submit-last');
        if (previousValues === formValues) {
          e.preventDefault();
        }
        else {
          $form.attr('data-drupal-form-submit-last', formValues);
        }
      }

      $('body').once('form-single-submit')
        .on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
    }
  };

  /**
   * Sends a 'formUpdated' event each time a form element is modified.
   *
   * @param {HTMLElement} element
   *   The element to trigger a form updated event on.
   *
   * @fires event:formUpdated
   */
  function triggerFormUpdated(element) {
    $(element).trigger('formUpdated');
  }

  /**
   * Collects the IDs of all form fields in the given form.
   *
   * @param {HTMLFormElement} form
   *   The form element to search.
   *
   * @return {Array}
   *   Array of IDs for form fields.
   */
  function fieldsList(form) {
    var $fieldList = $(form).find('[name]').map(function (index, element) {
      // We use id to avoid name duplicates on radio fields and filter out
      // elements with a name but no id.
      return element.getAttribute('id');
    });
    // Return a true array.
    return $.makeArray($fieldList);
  }

  /**
   * Triggers the 'formUpdated' event on form elements when they are modified.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches formUpdated behaviors.
   * @prop {Drupal~behaviorDetach} detach
   *   Detaches formUpdated behaviors.
   *
   * @fires event:formUpdated
   */
  Drupal.behaviors.formUpdated = {
    attach: function (context) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      var $forms = (contextIsForm ? $context : $context.find('form')).once('form-updated');
      var formFields;

      if ($forms.length) {
        // Initialize form behaviors, use $.makeArray to be able to use native
        // forEach array method and have the callback parameters in the right
        // order.
        $.makeArray($forms).forEach(function (form) {
          var events = 'change.formUpdated input.formUpdated ';
          var eventHandler = debounce(function (event) { triggerFormUpdated(event.target); }, 300);
          formFields = fieldsList(form).join(',');

          form.setAttribute('data-drupal-form-fields', formFields);
          $(form).on(events, eventHandler);
        });
      }
      // On ajax requests context is the form element.
      if (contextIsForm) {
        formFields = fieldsList(context).join(',');
        // @todo replace with form.getAttribute() when #1979468 is in.
        var currentFields = $(context).attr('data-drupal-form-fields');
        // If there has been a change in the fields or their order, trigger
        // formUpdated.
        if (formFields !== currentFields) {
          triggerFormUpdated(context);
        }
      }

    },
    detach: function (context, settings, trigger) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      if (trigger === 'unload') {
        var $forms = (contextIsForm ? $context : $context.find('form')).removeOnce('form-updated');
        if ($forms.length) {
          $.makeArray($forms).forEach(function (form) {
            form.removeAttribute('data-drupal-form-fields');
            $(form).off('.formUpdated');
          });
        }
      }
    }
  };

  /**
   * Prepopulate form fields with information from the visitor browser.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behavior for filling user info from browser.
   */
  Drupal.behaviors.fillUserInfoFromBrowser = {
    attach: function (context, settings) {
      var userInfo = ['name', 'mail', 'homepage'];
      var $forms = $('[data-user-info-from-browser]').once('user-info-from-browser');
      if ($forms.length) {
        userInfo.map(function (info) {
          var $element = $forms.find('[name=' + info + ']');
          var browserData = localStorage.getItem('Drupal.visitor.' + info);
          var emptyOrDefault = ($element.val() === '' || ($element.attr('data-drupal-default-value') === $element.val()));
          if ($element.length && emptyOrDefault && browserData) {
            $element.val(browserData);
          }
        });
      }
      $forms.on('submit', function () {
        userInfo.map(function (info) {
          var $element = $forms.find('[name=' + info + ']');
          if ($element.length) {
            localStorage.setItem('Drupal.visitor.' + info, $element.val());
          }
        });
      });
    }
  };

})(jQuery, Drupal, Drupal.debounce);
;
/**
 * @file
 * Progress bar.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Theme function for the progress bar.
   *
   * @param {string} id
   *   The id for the progress bar.
   *
   * @return {string}
   *   The HTML for the progress bar.
   */
  Drupal.theme.progressBar = function (id) {
    return '<div id="' + id + '" class="progress" aria-live="polite">' +
      '<div class="progress__label">&nbsp;</div>' +
      '<div class="progress__track"><div class="progress__bar"></div></div>' +
      '<div class="progress__percentage"></div>' +
      '<div class="progress__description">&nbsp;</div>' +
      '</div>';
  };

  /**
   * A progressbar object. Initialized with the given id. Must be inserted into
   * the DOM afterwards through progressBar.element.
   *
   * Method is the function which will perform the HTTP request to get the
   * progress bar state. Either "GET" or "POST".
   *
   * @example
   * pb = new Drupal.ProgressBar('myProgressBar');
   * some_element.appendChild(pb.element);
   *
   * @constructor
   *
   * @param {string} id
   *   The id for the progressbar.
   * @param {function} updateCallback
   *   Callback to run on update.
   * @param {string} method
   *   HTTP method to use.
   * @param {function} errorCallback
   *   Callback to call on error.
   */
  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;

    // The WAI-ARIA setting aria-live="polite" will announce changes after
    // users
    // have completed their current activity and not interrupt the screen
    // reader.
    this.element = $(Drupal.theme('progressBar', id));
  };

  $.extend(Drupal.ProgressBar.prototype, /** @lends Drupal.ProgressBar# */{

    /**
     * Set the percentage and status message for the progressbar.
     *
     * @param {number} percentage
     *   The progress percentage.
     * @param {string} message
     *   The message to show the user.
     * @param {string} label
     *   The text for the progressbar label.
     */
    setProgress: function (percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', percentage + '%');
        $(this.element).find('div.progress__percentage').html(percentage + '%');
      }
      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },

    /**
     * Start monitoring progress via Ajax.
     *
     * @param {string} uri
     *   The URI to use for monitoring.
     * @param {number} delay
     *   The delay for calling the monitoring URI.
     */
    startMonitoring: function (uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },

    /**
     * Stop monitoring progress via Ajax.
     */
    stopMonitoring: function () {
      clearTimeout(this.timer);
      // This allows monitoring to be stopped from within the callback.
      this.uri = null;
    },

    /**
     * Request progress data from server.
     */
    sendPing: function () {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.uri) {
        var pb = this;
        // When doing a post request, you need non-null data. Otherwise a
        // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
        var uri = this.uri;
        if (uri.indexOf('?') === -1) {
          uri += '?';
        }
        else {
          uri += '&';
        }
        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function (progress) {
            // Display errors.
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }
            // Update display.
            pb.setProgress(progress.percentage, progress.message, progress.label);
            // Schedule next timer.
            pb.timer = setTimeout(function () { pb.sendPing(); }, pb.delay);
          },
          error: function (xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError('<pre>' + e.message + '</pre>');
          }
        });
      }
    },

    /**
     * Display errors on the page.
     *
     * @param {string} string
     *   The error message to show the user.
     */
    displayError: function (string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });

})(jQuery, Drupal);
;
/**
 * @file
 * Provides Ajax page updating via jQuery $.ajax.
 *
 * Ajax is a method of making a request via JavaScript while viewing an HTML
 * page. The request returns an array of commands encoded in JSON, which is
 * then executed to make any changes that are necessary to the page.
 *
 * Drupal uses this file to enhance form elements with `#ajax['url']` and
 * `#ajax['wrapper']` properties. If set, this file will automatically be
 * included to provide Ajax capabilities.
 */

(function ($, window, Drupal, drupalSettings) {

  'use strict';

  /**
   * Attaches the Ajax behavior to each Ajax form element.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Initialize all {@link Drupal.Ajax} objects declared in
   *   `drupalSettings.ajax` or initialize {@link Drupal.Ajax} objects from
   *   DOM elements having the `use-ajax-submit` or `use-ajax` css class.
   * @prop {Drupal~behaviorDetach} detach
   *   During `unload` remove all {@link Drupal.Ajax} objects related to
   *   the removed content.
   */
  Drupal.behaviors.AJAX = {
    attach: function (context, settings) {

      function loadAjaxBehavior(base) {
        var element_settings = settings.ajax[base];
        if (typeof element_settings.selector === 'undefined') {
          element_settings.selector = '#' + base;
        }
        $(element_settings.selector).once('drupal-ajax').each(function () {
          element_settings.element = this;
          element_settings.base = base;
          Drupal.ajax(element_settings);
        });
      }

      // Load all Ajax behaviors specified in the settings.
      for (var base in settings.ajax) {
        if (settings.ajax.hasOwnProperty(base)) {
          loadAjaxBehavior(base);
        }
      }

      // Bind Ajax behaviors to all items showing the class.
      $('.use-ajax').once('ajax').each(function () {
        var element_settings = {};
        // Clicked links look better with the throbber than the progress bar.
        element_settings.progress = {type: 'throbber'};

        // For anchor tags, these will go to the target of the anchor rather
        // than the usual location.
        var href = $(this).attr('href');
        if (href) {
          element_settings.url = href;
          element_settings.event = 'click';
        }
        element_settings.dialogType = $(this).data('dialog-type');
        element_settings.dialog = $(this).data('dialog-options');
        element_settings.base = $(this).attr('id');
        element_settings.element = this;
        Drupal.ajax(element_settings);
      });

      // This class means to submit the form to the action using Ajax.
      $('.use-ajax-submit').once('ajax').each(function () {
        var element_settings = {};

        // Ajax submits specified in this manner automatically submit to the
        // normal form action.
        element_settings.url = $(this.form).attr('action');
        // Form submit button clicks need to tell the form what was clicked so
        // it gets passed in the POST request.
        element_settings.setClick = true;
        // Form buttons use the 'click' event rather than mousedown.
        element_settings.event = 'click';
        // Clicked form buttons look better with the throbber than the progress
        // bar.
        element_settings.progress = {type: 'throbber'};
        element_settings.base = $(this).attr('id');
        element_settings.element = this;

        Drupal.ajax(element_settings);
      });
    },

    detach: function (context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          // Set this to null and allow garbage collection to reclaim
          // the memory.
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };

  /**
   * Extends Error to provide handling for Errors in Ajax.
   *
   * @constructor
   *
   * @augments Error
   *
   * @param {XMLHttpRequest} xmlhttp
   *   XMLHttpRequest object used for the failed request.
   * @param {string} uri
   *   The URI where the error occurred.
   * @param {string} customMessage
   *   The custom message.
   */
  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {

    var statusCode;
    var statusText;
    var pathText;
    var responseText;
    var readyStateText;
    if (xmlhttp.status) {
      statusCode = '\n' + Drupal.t('An AJAX HTTP error occurred.') + '\n' + Drupal.t('HTTP Result Code: !status', {'!status': xmlhttp.status});
    }
    else {
      statusCode = '\n' + Drupal.t('An AJAX HTTP request terminated abnormally.');
    }
    statusCode += '\n' + Drupal.t('Debugging information follows.');
    pathText = '\n' + Drupal.t('Path: !uri', {'!uri': uri});
    statusText = '';
    // In some cases, when statusCode === 0, xmlhttp.statusText may not be
    // defined. Unfortunately, testing for it with typeof, etc, doesn't seem to
    // catch that and the test causes an exception. So we need to catch the
    // exception here.
    try {
      statusText = '\n' + Drupal.t('StatusText: !statusText', {'!statusText': $.trim(xmlhttp.statusText)});
    }
    catch (e) {
      // Empty.
    }

    responseText = '';
    // Again, we don't have a way to know for sure whether accessing
    // xmlhttp.responseText is going to throw an exception. So we'll catch it.
    try {
      responseText = '\n' + Drupal.t('ResponseText: !responseText', {'!responseText': $.trim(xmlhttp.responseText)});
    }
    catch (e) {
      // Empty.
    }

    // Make the responseText more readable by stripping HTML tags and newlines.
    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');

    // We don't need readyState except for status == 0.
    readyStateText = xmlhttp.status === 0 ? ('\n' + Drupal.t('ReadyState: !readyState', {'!readyState': xmlhttp.readyState})) : '';

    customMessage = customMessage ? ('\n' + Drupal.t('CustomMessage: !customMessage', {'!customMessage': customMessage})) : '';

    /**
     * Formatted and translated error message.
     *
     * @type {string}
     */
    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;

    /**
     * Used by some browsers to display a more accurate stack trace.
     *
     * @type {string}
     */
    this.name = 'AjaxError';
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  /**
   * Provides Ajax page updating via jQuery $.ajax.
   *
   * This function is designed to improve developer experience by wrapping the
   * initialization of {@link Drupal.Ajax} objects and storing all created
   * objects in the {@link Drupal.ajax.instances} array.
   *
   * @example
   * Drupal.behaviors.myCustomAJAXStuff = {
   *   attach: function (context, settings) {
   *
   *     var ajaxSettings = {
   *       url: 'my/url/path',
   *       // If the old version of Drupal.ajax() needs to be used those
   *       // properties can be added
   *       base: 'myBase',
   *       element: $(context).find('.someElement')
   *     };
   *
   *     var myAjaxObject = Drupal.ajax(ajaxSettings);
   *
   *     // Declare a new Ajax command specifically for this Ajax object.
   *     myAjaxObject.commands.insert = function (ajax, response, status) {
   *       $('#my-wrapper').append(response.data);
   *       alert('New content was appended to #my-wrapper');
   *     };
   *
   *     // This command will remove this Ajax object from the page.
   *     myAjaxObject.commands.destroyObject = function (ajax, response, status) {
   *       Drupal.ajax.instances[this.instanceIndex] = null;
   *     };
   *
   *     // Programmatically trigger the Ajax request.
   *     myAjaxObject.execute();
   *   }
   * };
   *
   * @param {object} settings
   *   The settings object passed to {@link Drupal.Ajax} constructor.
   * @param {string} [settings.base]
   *   Base is passed to {@link Drupal.Ajax} constructor as the 'base'
   *   parameter.
   * @param {HTMLElement} [settings.element]
   *   Element parameter of {@link Drupal.Ajax} constructor, element on which
   *   event listeners will be bound.
   *
   * @return {Drupal.Ajax}
   *   The created Ajax object.
   *
   * @see Drupal.AjaxCommands
   */
  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }
    // Map those config keys to variables for the old Drupal.ajax function.
    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;

    // By default do not display progress for ajax calls without an element.
    if (!settings.progress && !element) {
      settings.progress = false;
    }

    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);

    return ajax;
  };

  /**
   * Contains all created Ajax objects.
   *
   * @type {Array.<Drupal.Ajax|null>}
   */
  Drupal.ajax.instances = [];

  /**
   * List all objects where the associated element is not in the DOM
   *
   * This method ignores {@link Drupal.Ajax} objects not bound to DOM elements
   * when created with {@link Drupal.ajax}.
   *
   * @return {Array.<Drupal.Ajax>}
   *   The list of expired {@link Drupal.Ajax} objects.
   */
  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };

  /**
   * Settings for an Ajax object.
   *
   * @typedef {object} Drupal.Ajax~element_settings
   *
   * @prop {string} url
   *   Target of the Ajax request.
   * @prop {?string} [event]
   *   Event bound to settings.element which will trigger the Ajax request.
   * @prop {bool} [keypress=true]
   *   Triggers a request on keypress events.
   * @prop {?string} selector
   *   jQuery selector targeting the element to bind events to or used with
   *   {@link Drupal.AjaxCommands}.
   * @prop {string} [effect='none']
   *   Name of the jQuery method to use for displaying new Ajax content.
   * @prop {string|number} [speed='none']
   *   Speed with which to apply the effect.
   * @prop {string} [method]
   *   Name of the jQuery method used to insert new content in the targeted
   *   element.
   * @prop {object} [progress]
   *   Settings for the display of a user-friendly loader.
   * @prop {string} [progress.type='throbber']
   *   Type of progress element, core provides `'bar'`, `'throbber'` and
   *   `'fullscreen'`.
   * @prop {string} [progress.message=Drupal.t('Please wait...')]
   *   Custom message to be used with the bar indicator.
   * @prop {object} [submit]
   *   Extra data to be sent with the Ajax request.
   * @prop {bool} [submit.js=true]
   *   Allows the PHP side to know this comes from an Ajax request.
   * @prop {object} [dialog]
   *   Options for {@link Drupal.dialog}.
   * @prop {string} [dialogType]
   *   One of `'modal'` or `'dialog'`.
   * @prop {string} [prevent]
   *   List of events on which to stop default action and stop propagation.
   */

  /**
   * Ajax constructor.
   *
   * The Ajax request returns an array of commands encoded in JSON, which is
   * then executed to make any changes that are necessary to the page.
   *
   * Drupal uses this file to enhance form elements with `#ajax['url']` and
   * `#ajax['wrapper']` properties. If set, this file will automatically be
   * included to provide Ajax capabilities.
   *
   * @constructor
   *
   * @param {string} [base]
   *   Base parameter of {@link Drupal.Ajax} constructor
   * @param {HTMLElement} [element]
   *   Element parameter of {@link Drupal.Ajax} constructor, element on which
   *   event listeners will be bound.
   * @param {Drupal.Ajax~element_settings} element_settings
   *   Settings for this Ajax object.
   */
  Drupal.Ajax = function (base, element, element_settings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? '#' + base : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };

    $.extend(this, defaults, element_settings);

    /**
     * @type {Drupal.AjaxCommands}
     */
    this.commands = new Drupal.AjaxCommands();

    /**
     * @type {bool|number}
     */
    this.instanceIndex = false;

    // @todo Remove this after refactoring the PHP code to:
    //   - Call this 'selector'.
    //   - Include the '#' for ID-based selectors.
    //   - Support non-ID-based selectors.
    if (this.wrapper) {

      /**
       * @type {string}
       */
      this.wrapper = '#' + this.wrapper;
    }

    /**
     * @type {HTMLElement}
     */
    this.element = element;

    /**
     * @type {Drupal.Ajax~element_settings}
     */
    this.element_settings = element_settings;

    // If there isn't a form, jQuery.ajax() will be used instead, allowing us to
    // bind Ajax to links as well.
    if (this.element && this.element.form) {

      /**
       * @type {jQuery}
       */
      this.$form = $(this.element.form);
    }

    // If no Ajax callback URL was given, use the link href or form action.
    if (!this.url) {
      var $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      }
      else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }

    // Replacing 'nojs' with 'ajax' in the URL allows for an easy method to let
    // the server detect when it needs to degrade gracefully.
    // There are four scenarios to check for:
    // 1. /nojs/
    // 2. /nojs$ - The end of a URL string.
    // 3. /nojs? - Followed by a query (e.g. path/nojs?destination=foobar).
    // 4. /nojs# - Followed by a fragment (e.g.: path/nojs#myfragment).
    var originalUrl = this.url;

    /**
     * Processed Ajax URL.
     *
     * @type {string}
     */
    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/g, '/ajax$1');
    // If the 'nojs' version of the URL is trusted, also trust the 'ajax'
    // version.
    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    // Set the options for the ajaxSubmit function.
    // The 'this' variable will not persist inside of the options object.
    var ajax = this;

    /**
     * Options for the jQuery.ajax function.
     *
     * @name Drupal.Ajax#options
     *
     * @type {object}
     *
     * @prop {string} url
     *   Ajax URL to be called.
     * @prop {object} data
     *   Ajax payload.
     * @prop {function} beforeSerialize
     *   Implement jQuery beforeSerialize function to call
     *   {@link Drupal.Ajax#beforeSerialize}.
     * @prop {function} beforeSubmit
     *   Implement jQuery beforeSubmit function to call
     *   {@link Drupal.Ajax#beforeSubmit}.
     * @prop {function} beforeSend
     *   Implement jQuery beforeSend function to call
     *   {@link Drupal.Ajax#beforeSend}.
     * @prop {function} success
     *   Implement jQuery success function to call
     *   {@link Drupal.Ajax#success}.
     * @prop {function} complete
     *   Implement jQuery success function to clean up ajax state and trigger an
     *   error if needed.
     * @prop {string} dataType='json'
     *   Type of the response expected.
     * @prop {string} type='POST'
     *   HTTP method to use for the Ajax request.
     */
    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      beforeSerialize: function (element_settings, options) {
        return ajax.beforeSerialize(element_settings, options);
      },
      beforeSubmit: function (form_values, element_settings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(form_values, element_settings, options);
      },
      beforeSend: function (xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function (response, status, xmlhttprequest) {
        // Sanity check for browser support (object expected).
        // When using iFrame uploads, responses must be returned as a string.
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }

        // Prior to invoking the response's commands, verify that they can be
        // trusted by checking for a response header. See
        // \Drupal\Core\EventSubscriber\AjaxResponseSubscriber for details.
        // - Empty responses are harmless so can bypass verification. This
        //   avoids an alert message for server-generated no-op responses that
        //   skip Ajax rendering.
        // - Ajax objects with trusted URLs (e.g., ones defined server-side via
        //   #ajax) can bypass header verification. This is especially useful
        //   for Ajax with multipart forms. Because IFRAME transport is used,
        //   the response headers cannot be accessed for verification.
        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return ajax.success(response, status);
      },
      complete: function (xmlhttprequest, status) {
        ajax.ajaxing = false;
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },
      dataType: 'json',
      type: 'POST'
    };

    if (element_settings.dialog) {
      ajax.options.data.dialogOptions = element_settings.dialog;
    }

    // Ensure that we have a valid URL by adding ? when no query parameter is
    // yet available, otherwise append using &.
    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    }
    else {
      ajax.options.url += '&';
    }
    ajax.options.url += Drupal.ajax.WRAPPER_FORMAT + '=drupal_' + (element_settings.dialogType || 'ajax');

    // Bind the ajaxSubmit function to the element event.
    $(ajax.element).on(element_settings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {'!url': ajax.url}));
      }
      return ajax.eventResponse(this, event);
    });

    // If necessary, enable keyboard submission so that Ajax behaviors
    // can be triggered through keyboard input as well as e.g. a mousedown
    // action.
    if (element_settings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    // If necessary, prevent the browser default action of an additional event.
    // For example, prevent the browser default action of a click, even if the
    // Ajax behavior binds to mousedown.
    if (element_settings.prevent) {
      $(ajax.element).on(element_settings.prevent, false);
    }
  };

  /**
   * URL query attribute to indicate the wrapper used to render a request.
   *
   * The wrapper format determines how the HTML is wrapped, for example in a
   * modal dialog.
   *
   * @const {string}
   *
   * @default
   */
  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';

  /**
   * Request parameter to indicate that a request is a Drupal Ajax request.
   *
   * @const {string}
   *
   * @default
   */
  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

  /**
   * Execute the ajax request.
   *
   * Allows developers to execute an Ajax request manually without specifying
   * an event to respond to.
   *
   * @return {object}
   *   Returns the jQuery.Deferred object underlying the Ajax request. If
   *   pre-serialization fails, the Deferred will be returned in the rejected
   *   state.
   */
  Drupal.Ajax.prototype.execute = function () {
    // Do not perform another ajax command if one is already in progress.
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);
      // Return the jqXHR so that external code can hook into the Deferred API.
      return $.ajax(this.options);
    }
    catch (e) {
      // Unset the ajax.ajaxing flag here because it won't be unset during
      // the complete response.
      this.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + this.options.url + ': ' + e.message);
      // For consistency, return a rejected Deferred (i.e., jqXHR's superclass)
      // so that calling code can take appropriate action.
      return $.Deferred().reject();
    }
  };

  /**
   * Handle a key press.
   *
   * The Ajax object will, if instructed, bind to a key press response. This
   * will test to see if the key press is valid to trigger this event and
   * if it is, trigger it for us and prevent other keypresses from triggering.
   * In this case we're handling RETURN and SPACEBAR keypresses (event codes 13
   * and 32. RETURN is often used to submit a form when in a textfield, and
   * SPACE is often used to activate an element without submitting.
   *
   * @param {HTMLElement} element
   *   Element the event was triggered on.
   * @param {jQuery.Event} event
   *   Triggered event.
   */
  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    // Create a synonym for this to reduce code confusion.
    var ajax = this;

    // Detect enter key and space bar and allow the standard response for them,
    // except for form elements of type 'text', 'tel', 'number' and 'textarea',
    // where the spacebar activation causes inappropriate activation if
    // #ajax['keypress'] is TRUE. On a text-type widget a space should always
    // be a space.
    if (event.which === 13 || (event.which === 32 && element.type !== 'text' &&
      element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number')) {
      event.preventDefault();
      event.stopPropagation();
      $(ajax.element_settings.element).trigger(ajax.element_settings.event);
    }
  };

  /**
   * Handle an event that triggers an Ajax response.
   *
   * When an event that triggers an Ajax response happens, this method will
   * perform the actual Ajax call. It is bound to the event using
   * bind() in the constructor, and it uses the options specified on the
   * Ajax object.
   *
   * @param {HTMLElement} element
   *   Element the event was triggered on.
   * @param {jQuery.Event} event
   *   Triggered event.
   */
  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();

    // Create a synonym for this to reduce code confusion.
    var ajax = this;

    // Do not perform another Ajax command if one is already in progress.
    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        // If setClick is set, we must set this to ensure that the button's
        // value is passed.
        if (ajax.setClick) {
          // Mark the clicked button. 'form.clk' is a special variable for
          // ajaxSubmit that tells the system which element got clicked to
          // trigger the submit. Without it there would be no 'op' or
          // equivalent.
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      }
      else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    }
    catch (e) {
      // Unset the ajax.ajaxing flag here because it won't be unset during
      // the complete response.
      ajax.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + ajax.options.url + ': ' + e.message);
    }
  };

  /**
   * Handler for the form serialization.
   *
   * Runs before the beforeSend() handler (see below), and unlike that one, runs
   * before field data is collected.
   *
   * @param {object} [element]
   *   Ajax object's `element_settings`.
   * @param {object} options
   *   jQuery.ajax options.
   */
  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    // Allow detaching behaviors to update field values before collecting them.
    // This is only needed when field values are added to the POST data, so only
    // when there is a form such that this.$form.ajaxSubmit() is used instead of
    // $.ajax(). When there is no form and $.ajax() is used, beforeSerialize()
    // isn't called, but don't rely on that: explicitly check this.$form.
    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }

    // Inform Drupal that this is an AJAX request.
    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;

    // Allow Drupal to return new JavaScript and CSS files to load without
    // returning the ones already loaded.
    // @see \Drupal\Core\Theme\AjaxBasePageNegotiator
    // @see \Drupal\Core\Asset\LibraryDependencyResolverInterface::getMinimalRepresentativeSubset()
    // @see system_js_settings_alter()
    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };

  /**
   * Modify form values prior to form submission.
   *
   * @param {Array.<object>} form_values
   *   Processed form values.
   * @param {jQuery} element
   *   The form node as a jQuery object.
   * @param {object} options
   *   jQuery.ajax options.
   */
  Drupal.Ajax.prototype.beforeSubmit = function (form_values, element, options) {
    // This function is left empty to make it simple to override for modules
    // that wish to add functionality here.
  };

  /**
   * Prepare the Ajax request before it is sent.
   *
   * @param {XMLHttpRequest} xmlhttprequest
   *   Native Ajax object.
   * @param {object} options
   *   jQuery.ajax options.
   */
  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    // For forms without file inputs, the jQuery Form plugin serializes the
    // form values, and then calls jQuery's $.ajax() function, which invokes
    // this handler. In this circumstance, options.extraData is never used. For
    // forms with file inputs, the jQuery Form plugin uses the browser's normal
    // form submission mechanism, but captures the response in a hidden IFRAME.
    // In this circumstance, it calls this handler first, and then appends
    // hidden fields to the form to submit the values in options.extraData.
    // There is no simple way to know which submission mechanism will be used,
    // so we add to extraData regardless, and allow it to be ignored in the
    // former case.
    if (this.$form) {
      options.extraData = options.extraData || {};

      // Let the server know when the IFRAME submission mechanism is used. The
      // server can use this information to wrap the JSON response in a
      // TEXTAREA, as per http://jquery.malsup.com/form/#file-upload.
      options.extraData.ajax_iframe_upload = '1';

      // The triggering element is about to be disabled (see below), but if it
      // contains a value (e.g., a checkbox, textfield, select, etc.), ensure
      // that value is included in the submission. As per above, submissions
      // that use $.ajax() are already serialized prior to the element being
      // disabled, so this is only needed for IFRAME submissions.
      var v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    // Disable the element that received the change to prevent user interface
    // interaction while the Ajax request is in progress. ajax.ajaxing prevents
    // the element from triggering a new request, but does not prevent the user
    // from changing its value.
    $(this.element).prop('disabled', true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    // Insert progress indicator.
    var progressIndicatorMethod = 'setProgressIndicator' + this.progress.type.slice(0, 1).toUpperCase() + this.progress.type.slice(1).toLowerCase();
    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };

  /**
   * Sets the progress bar progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar('ajax-progress-' + this.element.id, $.noop, this.progress.method, $.noop);
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(progressBar.element).addClass('ajax-progress ajax-progress-bar');
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  /**
   * Sets the throbber progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>');
    if (this.progress.message) {
      this.progress.element.find('.throbber').after('<div class="message">' + this.progress.message + '</div>');
    }
    $(this.element).after(this.progress.element);
  };

  /**
   * Sets the fullscreen progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $('<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>');
    $('body').after(this.progress.element);
  };

  /**
   * Handler for the form redirection completion.
   *
   * @param {Array.<Drupal.AjaxCommands~commandDefinition>} response
   *   Drupal Ajax response.
   * @param {number} status
   *   XMLHttpRequest status.
   */
  Drupal.Ajax.prototype.success = function (response, status) {
    // Remove the progress element.
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);

    // Save element's ancestors tree so if the element is removed from the dom
    // we can try to refocus one of its parents. Using addBack reverse the
    // result array, meaning that index 0 is the highest parent in the hierarchy
    // in this situation it is usually a <form> element.
    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();

    // Track if any command is altering the focus so we can avoid changing the
    // focus set by the Ajax command.
    var focusChanged = false;
    for (var i in response) {
      if (response.hasOwnProperty(i) && response[i].command && this.commands[response[i].command]) {
        this.commands[response[i].command](this, response[i], status);
        if (response[i].command === 'invoke' && response[i].method === 'focus') {
          focusChanged = true;
        }
      }
    }

    // If the focus hasn't be changed by the ajax commands, try to refocus the
    // triggering element or one of its parents if that element does not exist
    // anymore.
    if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n > 0; n--) {
        target = document.querySelector('[data-drupal-selector="' + elementParents[n].getAttribute('data-drupal-selector') + '"]');
      }

      if (target) {
        $(target).trigger('focus');
      }
    }

    // Reattach behaviors, if they were detached in beforeSerialize(). The
    // attachBehaviors() called on the new content from processing the response
    // commands is not sufficient, because behaviors from the entire form need
    // to be reattached.
    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    // Remove any response-specific settings so they don't get used on the next
    // call by mistake.
    this.settings = null;
  };

  /**
   * Build an effect object to apply an effect when adding new HTML.
   *
   * @param {object} response
   *   Drupal Ajax response.
   * @param {string} [response.effect]
   *   Override the default value of {@link Drupal.Ajax#element_settings}.
   * @param {string|number} [response.speed]
   *   Override the default value of {@link Drupal.Ajax#element_settings}.
   *
   * @return {object}
   *   Returns an object with `showEffect`, `hideEffect` and `showSpeed`
   *   properties.
   */
  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;

    var effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    }
    else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    }
    else {
      effect.showEffect = type + 'Toggle';
      effect.hideEffect = type + 'Toggle';
      effect.showSpeed = speed;
    }

    return effect;
  };

  /**
   * Handler for the form redirection error.
   *
   * @param {object} xmlhttprequest
   *   Native XMLHttpRequest object.
   * @param {string} uri
   *   Ajax Request URI.
   * @param {string} [customMessage]
   *   Extra message to print with the Ajax error.
   */
  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    // Remove the progress element.
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    // Undo hide.
    $(this.wrapper).show();
    // Re-enable the element.
    $(this.element).prop('disabled', false);
    // Reattach behaviors, if they were detached in beforeSerialize().
    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  /**
   * @typedef {object} Drupal.AjaxCommands~commandDefinition
   *
   * @prop {string} command
   * @prop {string} [method]
   * @prop {string} [selector]
   * @prop {string} [data]
   * @prop {object} [settings]
   * @prop {bool} [asterisk]
   * @prop {string} [text]
   * @prop {string} [title]
   * @prop {string} [url]
   * @prop {object} [argument]
   * @prop {string} [name]
   * @prop {string} [value]
   * @prop {string} [old]
   * @prop {string} [new]
   * @prop {bool} [merge]
   * @prop {Array} [args]
   *
   * @see Drupal.AjaxCommands
   */

  /**
   * Provide a series of commands that the client will perform.
   *
   * @constructor
   */
  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {

    /**
     * Command to insert new content into the DOM.
     *
     * @param {Drupal.Ajax} ajax
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.data
     *   The data to use with the jQuery method.
     * @param {string} [response.method]
     *   The jQuery DOM manipulation method to be used.
     * @param {string} [response.selector]
     *   A optional jQuery selector string.
     * @param {object} [response.settings]
     *   An optional array of settings that will be used.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    insert: function (ajax, response, status) {
      // Get information from the response. If it is not there, default to
      // our presets.
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);
      var settings;

      // We don't know what response.data contains: it might be a string of text
      // without HTML, so don't rely on jQuery correctly interpreting
      // $(response.data) as new HTML rather than a CSS selector. Also, if
      // response.data contains top-level text nodes, they get lost with either
      // $(response.data) or $('<div></div>').replaceWith(response.data).
      var $new_content_wrapped = $('<div></div>').html(response.data);
      var $new_content = $new_content_wrapped.contents();

      // For legacy reasons, the effects processing code assumes that
      // $new_content consists of a single top-level element. Also, it has not
      // been sufficiently tested whether attachBehaviors() can be successfully
      // called with a context object that includes top-level text nodes.
      // However, to give developers full control of the HTML appearing in the
      // page, and to enable Ajax content to be inserted in places where <div>
      // elements are not allowed (e.g., within <table>, <tr>, and <span>
      // parents), we check if the new content satisfies the requirement
      // of a single top-level element, and only use the container <div> created
      // above when it doesn't. For more information, please see
      // https://www.drupal.org/node/736066.
      if ($new_content.length !== 1 || $new_content.get(0).nodeType !== 1) {
        $new_content = $new_content_wrapped;
      }

      // If removing content from the wrapper, detach behaviors first.
      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          settings = response.settings || ajax.settings || drupalSettings;
          Drupal.detachBehaviors($wrapper.get(0), settings);
      }

      // Add the new content to the page.
      $wrapper[method]($new_content);

      // Immediately hide the new content if we're using any effects.
      if (effect.showEffect !== 'show') {
        $new_content.hide();
      }

      // Determine which effect to use and what content will receive the
      // effect, then show the new content.
      if ($new_content.find('.ajax-new-content').length > 0) {
        $new_content.find('.ajax-new-content').hide();
        $new_content.show();
        $new_content.find('.ajax-new-content')[effect.showEffect](effect.showSpeed);
      }
      else if (effect.showEffect !== 'show') {
        $new_content[effect.showEffect](effect.showSpeed);
      }

      // Attach all JavaScript behaviors to the new content, if it was
      // successfully added to the page, this if statement allows
      // `#ajax['wrapper']` to be optional.
      if ($new_content.parents('html').length > 0) {
        // Apply any settings from the returned JSON if available.
        settings = response.settings || ajax.settings || drupalSettings;
        Drupal.attachBehaviors($new_content.get(0), settings);
      }
    },

    /**
     * Command to remove a chunk from the page.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {object} [response.settings]
     *   An optional array of settings that will be used.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    remove: function (ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      })
        .remove();
    },

    /**
     * Command to mark a chunk changed.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The JSON response object from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {bool} [response.asterisk]
     *   An optional CSS selector. If specified, an asterisk will be
     *   appended to the HTML inside the provided selector.
     * @param {number} [status]
     *   The request status.
     */
    changed: function (ajax, response, status) {
      var $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element.find(response.asterisk).append(' <abbr class="ajax-changed" title="' + Drupal.t('Changed') + '">*</abbr> ');
        }
      }
    },

    /**
     * Command to provide an alert.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The JSON response from the Ajax request.
     * @param {string} response.text
     *   The text that will be displayed in an alert dialog.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    alert: function (ajax, response, status) {
      window.alert(response.text, response.title);
    },

    /**
     * Command to set the window.location, redirecting the browser.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.url
     *   The URL to redirect to.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    redirect: function (ajax, response, status) {
      window.location = response.url;
    },

    /**
     * Command to provide the jQuery css() function.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {object} response.argument
     *   An array of key/value pairs to set in the CSS for the selector.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    css: function (ajax, response, status) {
      $(response.selector).css(response.argument);
    },

    /**
     * Command to set the settings used for other commands in this response.
     *
     * This method will also remove expired `drupalSettings.ajax` settings.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {bool} response.merge
     *   Determines whether the additional settings should be merged to the
     *   global settings.
     * @param {object} response.settings
     *   Contains additional settings to add to the global settings.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    settings: function (ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;

      // Clean up drupalSettings.ajax.
      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {
          // If the Ajax object has been created through drupalSettings.ajax
          // it will have a selector. When there is no selector the object
          // has been initialized with a special class name picked up by the
          // Ajax behavior.

          if (instance.selector) {
            var selector = instance.selector.replace('#', '');
            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      }
      else {
        ajax.settings = response.settings;
      }
    },

    /**
     * Command to attach data using jQuery's data API.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.name
     *   The name or key (in the key value pair) of the data attached to this
     *   selector.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {string|object} response.value
     *   The value of to be attached.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    data: function (ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },

    /**
     * Command to apply a jQuery method.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {Array} response.args
     *   An array of arguments to the jQuery method, if any.
     * @param {string} response.method
     *   The jQuery method to invoke.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    invoke: function (ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, response.args);
    },

    /**
     * Command to restripe a table.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    restripe: function (ajax, response, status) {
      // :even and :odd are reversed because jQuery counts from 0 and
      // we count from 1, so we're out of sync.
      // Match immediate children of the parent element to allow nesting.
      $(response.selector).find('> tbody > tr:visible, > tr:visible')
        .removeClass('odd even')
        .filter(':even').addClass('odd').end()
        .filter(':odd').addClass('even');
    },

    /**
     * Command to update a form's build ID.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.old
     *   The old form build ID.
     * @param {string} response.new
     *   The new form build ID.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    update_build_id: function (ajax, response, status) {
      $('input[name="form_build_id"][value="' + response.old + '"]').val(response.new);
    },

    /**
     * Command to add css.
     *
     * Uses the proprietary addImport method if available as browsers which
     * support that method ignore @import statements in dynamically added
     * stylesheets.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.data
     *   A string that contains the styles to be added.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    add_css: function (ajax, response, status) {
      // Add the styles in the normal way.
      $('head').prepend(response.data);
      // Add imports in the styles using the addImport method if available.
      var match;
      var importMatch = /^@import url\("(.*)"\);$/igm;
      if (document.styleSheets[0].addImport && importMatch.test(response.data)) {
        importMatch.lastIndex = 0;
        do {
          match = importMatch.exec(response.data);
          document.styleSheets[0].addImport(match[1]);
        } while (match);
      }
    }
  };

})(jQuery, window, Drupal, drupalSettings);
;
/*!
 * jQuery UI Button 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/button/
 */(function(e){typeof define=="function"&&define.amd?define(["jquery","./core","./widget"],e):e(jQuery)})(function(e){var t,n="ui-button ui-widget ui-state-default ui-corner-all",r="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",i=function(){var t=e(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)},s=function(t){var n=t.name,r=t.form,i=e([]);return n&&(n=n.replace(/'/g,"\\'"),r?i=e(r).find("[name='"+n+"'][type=radio]"):i=e("[name='"+n+"'][type=radio]",t.ownerDocument).filter(function(){return!this.form})),i};return e.widget("ui.button",{version:"1.11.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,i),typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var r=this,o=this.options,u=this.type==="checkbox"||this.type==="radio",a=u?"":"ui-state-active";o.label===null&&(o.label=this.type==="input"?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(n).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(o.disabled)return;this===t&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){if(o.disabled)return;e(this).removeClass(a)}).bind("click"+this.eventNamespace,function(e){o.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),u&&this.element.bind("change"+this.eventNamespace,function(){r.refresh()}),this.type==="checkbox"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(o.disabled)return!1}):this.type==="radio"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(o.disabled)return!1;e(this).addClass("ui-state-active"),r.buttonElement.attr("aria-pressed","true");var t=r.element[0];s(t).not(t).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(o.disabled)return!1;e(this).addClass("ui-state-active"),t=this,r.document.one("mouseup",function(){t=null})}).bind("mouseup"+this.eventNamespace,function(){if(o.disabled)return!1;e(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(t){if(o.disabled)return!1;(t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active")}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",o.disabled),this._resetButton()},_determineButtonType:function(){var e,t,n;this.element.is("[type=checkbox]")?this.type="checkbox":this.element.is("[type=radio]")?this.type="radio":this.element.is("input")?this.type="input":this.type="button",this.type==="checkbox"||this.type==="radio"?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),n=this.element.is(":checked"),n&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",n)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(n+" ui-state-active "+r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){this._super(e,t);if(e==="disabled"){this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),t&&(this.type==="checkbox"||this.type==="radio"?this.buttonElement.removeClass("ui-state-focus"):this.buttonElement.removeClass("ui-state-focus ui-state-active"));return}this._resetButton()},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),this.type==="radio"?s(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label);return}var t=this.buttonElement.removeClass(r),n=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),i=this.options.icons,s=i.primary&&i.secondary,o=[];i.primary||i.secondary?(this.options.text&&o.push("ui-button-text-icon"+(s?"s":i.primary?"-primary":"-secondary")),i.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+i.primary+"'></span>"),i.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+i.secondary+"'></span>"),this.options.text||(o.push(s?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(n)))):o.push("ui-button-text-only"),t.addClass(o.join(" "))}}),e.widget("ui.buttonset",{version:"1.11.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){e==="disabled"&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t=this.element.css("direction")==="rtl",n=this.element.find(this.options.items),r=n.filter(":ui-button");n.not(":ui-button").button(),r.button("refresh"),this.buttons=n.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}}),e.ui.button});;
/*!
 * jQuery UI Mouse 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */(function(e){typeof define=="function"&&define.amd?define(["jquery","./widget"],e):e(jQuery)})(function(e){var t=!1;return e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target,t.widgetName+".preventClickEvent"))return e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(n){if(t)return;this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(n),this._mouseDownEvent=n;var r=this,i=n.which===1,s=typeof this.options.cancel=="string"&&n.target.nodeName?e(n.target).closest(this.options.cancel).length:!1;if(!i||s||!this._mouseCapture(n))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(n)&&this._mouseDelayMet(n)){this._mouseStarted=this._mouseStart(n)!==!1;if(!this._mouseStarted)return n.preventDefault(),!0}return!0===e.data(n.target,this.widgetName+".preventClickEvent")&&e.removeData(n.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return r._mouseMove(e)},this._mouseUpDelegate=function(e){return r._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),n.preventDefault(),t=!0,!0},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}if(t.which||t.button)this._mouseMoved=!0;return this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(n){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,n.target===this._mouseDownEvent.target&&e.data(n.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(n)),t=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})});;
/*!
 * jQuery UI Draggable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/draggable/
 */(function(e){typeof define=="function"&&define.amd?define(["jquery","./core","./mouse","./widget"],e):e(jQuery)})(function(e){return e.widget("ui.draggable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){this.options.helper==="original"&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(e,t){this._super(e,t),e==="handle"&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){if((this.helper||this.element).is(".ui-draggable-dragging")){this.destroyOnClear=!0;return}this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy()},_mouseCapture:function(t){var n=this.options;return this._blurActiveElement(t),this.helper||n.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(this._blockFrames(n.iframeFix===!0?"iframe":n.iframeFix),!0):!1)},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=e(this);return e("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var n=this.document[0];if(!this.handleElement.is(t.target))return;try{n.activeElement&&n.activeElement.nodeName.toLowerCase()!=="body"&&e(n.activeElement).blur()}catch(r){}},_mouseStart:function(t){var n=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return e(this).css("position")==="fixed"}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._normalizeRightBottom(),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(e){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:e.pageX-this.offset.left,top:e.pageY-this.offset.top}},_mouseDrag:function(t,n){this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute");if(!n){var r=this._uiHash();if(this._trigger("drag",t,r)===!1)return this._mouseUp({}),!1;this.position=r.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var n=this,r=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(r=e.ui.ddmanager.drop(this,t)),this.dropped&&(r=this.dropped,this.dropped=!1),this.options.revert==="invalid"&&!r||this.options.revert==="valid"&&r||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,r)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){n._trigger("stop",t)!==!1&&n._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.focus(),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper),i=r?e(n.helper.apply(this.element[0],[t])):n.helper==="clone"?this.element.clone().removeAttr("id"):this.element;return i.parents("body").length||i.appendTo(n.appendTo==="parent"?this.element[0].parentNode:n.appendTo),r&&i[0]===this.element[0]&&this._setPositionRelative(),i[0]!==this.element[0]&&!/(fixed|absolute)/.test(i.css("position"))&&i.css("position","absolute"),i},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(e){return/(html|body)/i.test(e.tagName)||e===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),n=this.document[0];return this.cssPosition==="absolute"&&this.scrollParent[0]!==n&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition!=="relative")return{top:0,left:0};var e=this.element.position(),t=this._isRootNode(this.scrollParent[0]);return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+(t?0:this.scrollParent.scrollTop()),left:e.left-(parseInt(this.helper.css("left"),10)||0)+(t?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,n,r,i=this.options,s=this.document[0];this.relativeContainer=null;if(!i.containment){this.containment=null;return}if(i.containment==="window"){this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||s.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return}if(i.containment==="document"){this.containment=[0,0,e(s).width()-this.helperProportions.width-this.margins.left,(e(s).height()||s.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return}if(i.containment.constructor===Array){this.containment=i.containment;return}i.containment==="parent"&&(i.containment=this.helper[0].parentNode),n=e(i.containment),r=n[0];if(!r)return;t=/(scroll|auto)/.test(n.css("overflow")),this.containment=[(parseInt(n.css("borderLeftWidth"),10)||0)+(parseInt(n.css("paddingLeft"),10)||0),(parseInt(n.css("borderTopWidth"),10)||0)+(parseInt(n.css("paddingTop"),10)||0),(t?Math.max(r.scrollWidth,r.offsetWidth):r.offsetWidth)-(parseInt(n.css("borderRightWidth"),10)||0)-(parseInt(n.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(r.scrollHeight,r.offsetHeight):r.offsetHeight)-(parseInt(n.css("borderBottomWidth"),10)||0)-(parseInt(n.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=n},_convertPositionTo:function(e,t){t||(t=this.position);var n=e==="absolute"?1:-1,r=this._isRootNode(this.scrollParent[0]);return{top:t.top+this.offset.relative.top*n+this.offset.parent.top*n-(this.cssPosition==="fixed"?-this.offset.scroll.top:r?0:this.offset.scroll.top)*n,left:t.left+this.offset.relative.left*n+this.offset.parent.left*n-(this.cssPosition==="fixed"?-this.offset.scroll.left:r?0:this.offset.scroll.left)*n}},_generatePosition:function(e,t){var n,r,i,s,o=this.options,u=this._isRootNode(this.scrollParent[0]),a=e.pageX,f=e.pageY;if(!u||!this.offset.scroll)this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()};return t&&(this.containment&&(this.relativeContainer?(r=this.relativeContainer.offset(),n=[this.containment[0]+r.left,this.containment[1]+r.top,this.containment[2]+r.left,this.containment[3]+r.top]):n=this.containment,e.pageX-this.offset.click.left<n[0]&&(a=n[0]+this.offset.click.left),e.pageY-this.offset.click.top<n[1]&&(f=n[1]+this.offset.click.top),e.pageX-this.offset.click.left>n[2]&&(a=n[2]+this.offset.click.left),e.pageY-this.offset.click.top>n[3]&&(f=n[3]+this.offset.click.top)),o.grid&&(i=o.grid[1]?this.originalPageY+Math.round((f-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,f=n?i-this.offset.click.top>=n[1]||i-this.offset.click.top>n[3]?i:i-this.offset.click.top>=n[1]?i-o.grid[1]:i+o.grid[1]:i,s=o.grid[0]?this.originalPageX+Math.round((a-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,a=n?s-this.offset.click.left>=n[0]||s-this.offset.click.left>n[2]?s:s-this.offset.click.left>=n[0]?s-o.grid[0]:s+o.grid[0]:s),o.axis==="y"&&(a=this.originalPageX),o.axis==="x"&&(f=this.originalPageY)),{top:f-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.offset.scroll.top:u?0:this.offset.scroll.top),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.offset.scroll.left:u?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){this.options.axis!=="y"&&this.helper.css("right")!=="auto"&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),this.options.axis!=="x"&&this.helper.css("bottom")!=="auto"&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(t,n,r){return r=r||this._uiHash(),e.ui.plugin.call(this,t,[n,r,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),r.offset=this.positionAbs),e.Widget.prototype._trigger.call(this,t,n,r)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,n,r){var i=e.extend({},n,{item:r.element});r.sortables=[],e(r.options.connectToSortable).each(function(){var n=e(this).sortable("instance");n&&!n.options.disabled&&(r.sortables.push(n),n.refreshPositions(),n._trigger("activate",t,i))})},stop:function(t,n,r){var i=e.extend({},n,{item:r.element});r.cancelHelperRemoval=!1,e.each(r.sortables,function(){var e=this;e.isOver?(e.isOver=0,r.cancelHelperRemoval=!0,e.cancelHelperRemoval=!1,e._storedCSS={position:e.placeholder.css("position"),top:e.placeholder.css("top"),left:e.placeholder.css("left")},e._mouseStop(t),e.options.helper=e.options._helper):(e.cancelHelperRemoval=!0,e._trigger("deactivate",t,i))})},drag:function(t,n,r){e.each(r.sortables,function(){var i=!1,s=this;s.positionAbs=r.positionAbs,s.helperProportions=r.helperProportions,s.offset.click=r.offset.click,s._intersectsWith(s.containerCache)&&(i=!0,e.each(r.sortables,function(){return this.positionAbs=r.positionAbs,this.helperProportions=r.helperProportions,this.offset.click=r.offset.click,this!==s&&this._intersectsWith(this.containerCache)&&e.contains(s.element[0],this.element[0])&&(i=!1),i})),i?(s.isOver||(s.isOver=1,r._parent=n.helper.parent(),s.currentItem=n.helper.appendTo(s.element).data("ui-sortable-item",!0),s.options._helper=s.options.helper,s.options.helper=function(){return n.helper[0]},t.target=s.currentItem[0],s._mouseCapture(t,!0),s._mouseStart(t,!0,!0),s.offset.click.top=r.offset.click.top,s.offset.click.left=r.offset.click.left,s.offset.parent.left-=r.offset.parent.left-s.offset.parent.left,s.offset.parent.top-=r.offset.parent.top-s.offset.parent.top,r._trigger("toSortable",t),r.dropped=s.element,e.each(r.sortables,function(){this.refreshPositions()}),r.currentItem=r.element,s.fromOutside=r),s.currentItem&&(s._mouseDrag(t),n.position=s.position)):s.isOver&&(s.isOver=0,s.cancelHelperRemoval=!0,s.options._revert=s.options.revert,s.options.revert=!1,s._trigger("out",t,s._uiHash(s)),s._mouseStop(t,!0),s.options.revert=s.options._revert,s.options.helper=s.options._helper,s.placeholder&&s.placeholder.remove(),n.helper.appendTo(r._parent),r._refreshOffsets(t),n.position=r._generatePosition(t,!0),r._trigger("fromSortable",t),r.dropped=!1,e.each(r.sortables,function(){this.refreshPositions()}))})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,n,r){var i=e("body"),s=r.options;i.css("cursor")&&(s._cursor=i.css("cursor")),i.css("cursor",s.cursor)},stop:function(t,n,r){var i=r.options;i._cursor&&e("body").css("cursor",i._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,n,r){var i=e(n.helper),s=r.options;i.css("opacity")&&(s._opacity=i.css("opacity")),i.css("opacity",s.opacity)},stop:function(t,n,r){var i=r.options;i._opacity&&e(n.helper).css("opacity",i._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(e,t,n){n.scrollParentNotHidden||(n.scrollParentNotHidden=n.helper.scrollParent(!1)),n.scrollParentNotHidden[0]!==n.document[0]&&n.scrollParentNotHidden[0].tagName!=="HTML"&&(n.overflowOffset=n.scrollParentNotHidden.offset())},drag:function(t,n,r){var i=r.options,s=!1,o=r.scrollParentNotHidden[0],u=r.document[0];if(o!==u&&o.tagName!=="HTML"){if(!i.axis||i.axis!=="x")r.overflowOffset.top+o.offsetHeight-t.pageY<i.scrollSensitivity?o.scrollTop=s=o.scrollTop+i.scrollSpeed:t.pageY-r.overflowOffset.top<i.scrollSensitivity&&(o.scrollTop=s=o.scrollTop-i.scrollSpeed);if(!i.axis||i.axis!=="y")r.overflowOffset.left+o.offsetWidth-t.pageX<i.scrollSensitivity?o.scrollLeft=s=o.scrollLeft+i.scrollSpeed:t.pageX-r.overflowOffset.left<i.scrollSensitivity&&(o.scrollLeft=s=o.scrollLeft-i.scrollSpeed)}else{if(!i.axis||i.axis!=="x")t.pageY-e(u).scrollTop()<i.scrollSensitivity?s=e(u).scrollTop(e(u).scrollTop()-i.scrollSpeed):e(window).height()-(t.pageY-e(u).scrollTop())<i.scrollSensitivity&&(s=e(u).scrollTop(e(u).scrollTop()+i.scrollSpeed));if(!i.axis||i.axis!=="y")t.pageX-e(u).scrollLeft()<i.scrollSensitivity?s=e(u).scrollLeft(e(u).scrollLeft()-i.scrollSpeed):e(window).width()-(t.pageX-e(u).scrollLeft())<i.scrollSensitivity&&(s=e(u).scrollLeft(e(u).scrollLeft()+i.scrollSpeed))}s!==!1&&e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(r,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,n,r){var i=r.options;r.snapElements=[],e(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var t=e(this),n=t.offset();this!==r.element[0]&&r.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:n.top,left:n.left})})},drag:function(t,n,r){var i,s,o,u,a,f,l,c,h,p,d=r.options,v=d.snapTolerance,m=n.offset.left,g=m+r.helperProportions.width,y=n.offset.top,b=y+r.helperProportions.height;for(h=r.snapElements.length-1;h>=0;h--){a=r.snapElements[h].left-r.margins.left,f=a+r.snapElements[h].width,l=r.snapElements[h].top-r.margins.top,c=l+r.snapElements[h].height;if(g<a-v||m>f+v||b<l-v||y>c+v||!e.contains(r.snapElements[h].item.ownerDocument,r.snapElements[h].item)){r.snapElements[h].snapping&&r.options.snap.release&&r.options.snap.release.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[h].item})),r.snapElements[h].snapping=!1;continue}d.snapMode!=="inner"&&(i=Math.abs(l-b)<=v,s=Math.abs(c-y)<=v,o=Math.abs(a-g)<=v,u=Math.abs(f-m)<=v,i&&(n.position.top=r._convertPositionTo("relative",{top:l-r.helperProportions.height,left:0}).top),s&&(n.position.top=r._convertPositionTo("relative",{top:c,left:0}).top),o&&(n.position.left=r._convertPositionTo("relative",{top:0,left:a-r.helperProportions.width}).left),u&&(n.position.left=r._convertPositionTo("relative",{top:0,left:f}).left)),p=i||s||o||u,d.snapMode!=="outer"&&(i=Math.abs(l-y)<=v,s=Math.abs(c-b)<=v,o=Math.abs(a-m)<=v,u=Math.abs(f-g)<=v,i&&(n.position.top=r._convertPositionTo("relative",{top:l,left:0}).top),s&&(n.position.top=r._convertPositionTo("relative",{top:c-r.helperProportions.height,left:0}).top),o&&(n.position.left=r._convertPositionTo("relative",{top:0,left:a}).left),u&&(n.position.left=r._convertPositionTo("relative",{top:0,left:f-r.helperProportions.width}).left)),!r.snapElements[h].snapping&&(i||s||o||u||p)&&r.options.snap.snap&&r.options.snap.snap.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[h].item})),r.snapElements[h].snapping=i||s||o||u||p}}}),e.ui.plugin.add("draggable","stack",{start:function(t,n,r){var i,s=r.options,o=e.makeArray(e(s.stack)).sort(function(t,n){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(n).css("zIndex"),10)||0)});if(!o.length)return;i=parseInt(e(o[0]).css("zIndex"),10)||0,e(o).each(function(t){e(this).css("zIndex",i+t)}),this.css("zIndex",i+o.length)}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,n,r){var i=e(n.helper),s=r.options;i.css("zIndex")&&(s._zIndex=i.css("zIndex")),i.css("zIndex",s.zIndex)},stop:function(t,n,r){var i=r.options;i._zIndex&&e(n.helper).css("zIndex",i._zIndex)}}),e.ui.draggable});;
/*!
 * jQuery UI Resizable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/resizable/
 */(function(e){typeof define=="function"&&define.amd?define(["jquery","./core","./mouse","./widget"],e):e(jQuery)})(function(e){return e.widget("ui.resizable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(e){return parseInt(e,10)||0},_isNumber:function(e){return!isNaN(parseInt(e,10))},_hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)},_create:function(){var t,n,r,i,s,o=this,u=this.options;this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!u.aspectRatio,aspectRatio:u.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:u.helper||u.ghost||u.animate?u.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=u.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=e();if(this.handles.constructor===String){this.handles==="all"&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={};for(n=0;n<t.length;n++)r=e.trim(t[n]),s="ui-resizable-"+r,i=e("<div class='ui-resizable-handle "+s+"'></div>"),i.css({zIndex:u.zIndex}),"se"===r&&i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[r]=".ui-resizable-"+r,this.element.append(i)}this._renderAxis=function(t){var n,r,i,s;t=t||this.element;for(n in this.handles){if(this.handles[n].constructor===String)this.handles[n]=this.element.children(this.handles[n]).first().show();else if(this.handles[n].jquery||this.handles[n].nodeType)this.handles[n]=e(this.handles[n]),this._on(this.handles[n],{mousedown:o._mouseDown});this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(r=e(this.handles[n],this.element),s=/sw|ne|nw|se|n|s/.test(n)?r.outerHeight():r.outerWidth(),i=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join(""),t.css(i,s),this._proportionallyResize()),this._handles=this._handles.add(this.handles[n])}},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=i&&i[1]?i[1]:"se")}),u.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(u.disabled)return;e(this).removeClass("ui-resizable-autohide"),o._handles.show()}).mouseleave(function(){if(u.disabled)return;o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,n=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(n(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),n(this.originalElement),this},_mouseCapture:function(t){var n,r,i=!1;for(n in this.handles){r=e(this.handles[n])[0];if(r===t.target||e.contains(r,t.target))i=!0}return!this.options.disabled&&i},_mouseStart:function(t){var n,r,i,s=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),n=this._num(this.helper.css("left")),r=this._num(this.helper.css("top")),s.containment&&(n+=e(s.containment).scrollLeft()||0,r+=e(s.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:n,top:r},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:n,top:r},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio=typeof s.aspectRatio=="number"?s.aspectRatio:this.originalSize.width/this.originalSize.height||1,i=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor",i==="auto"?this.axis+"-resize":i),o.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var n,r,i=this.originalMousePosition,s=this.axis,o=t.pageX-i.left||0,u=t.pageY-i.top||0,a=this._change[s];this._updatePrevProperties();if(!a)return!1;n=a.apply(this,[t,o,u]),this._updateVirtualBoundaries(t.shiftKey);if(this._aspectRatio||t.shiftKey)n=this._updateRatio(n,t);return n=this._respectSize(n,t),this._updateCache(n),this._propagate("resize",t),r=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(r)||(this._updatePrevProperties(),this._trigger("resize",t,this.ui()),this._applyChanges()),!1},_mouseStop:function(t){this.resizing=!1;var n,r,i,s,o,u,a,f=this.options,l=this;return this._helper&&(n=this._proportionallyResizeElements,r=n.length&&/textarea/i.test(n[0].nodeName),i=r&&this._hasScroll(n[0],"left")?0:l.sizeDiff.height,s=r?0:l.sizeDiff.width,o={width:l.helper.width()-s,height:l.helper.height()-i},u=parseInt(l.element.css("left"),10)+(l.position.left-l.originalPosition.left)||null,a=parseInt(l.element.css("top"),10)+(l.position.top-l.originalPosition.top)||null,f.animate||this.element.css(e.extend(o,{top:a,left:u})),l.helper.height(l.size.height),l.helper.width(l.size.width),this._helper&&!f.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var e={};return this.position.top!==this.prevPosition.top&&(e.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(e.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(e.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(e.height=this.size.height+"px"),this.helper.css(e),e},_updateVirtualBoundaries:function(e){var t,n,r,i,s,o=this.options;s={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:Infinity,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:Infinity};if(this._aspectRatio||e)t=s.minHeight*this.aspectRatio,r=s.minWidth/this.aspectRatio,n=s.maxHeight*this.aspectRatio,i=s.maxWidth/this.aspectRatio,t>s.minWidth&&(s.minWidth=t),r>s.minHeight&&(s.minHeight=r),n<s.maxWidth&&(s.maxWidth=n),i<s.maxHeight&&(s.maxHeight=i);this._vBoundaries=s},_updateCache:function(e){this.offset=this.helper.offset(),this._isNumber(e.left)&&(this.position.left=e.left),this._isNumber(e.top)&&(this.position.top=e.top),this._isNumber(e.height)&&(this.size.height=e.height),this._isNumber(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,n=this.size,r=this.axis;return this._isNumber(e.height)?e.width=e.height*this.aspectRatio:this._isNumber(e.width)&&(e.height=e.width/this.aspectRatio),r==="sw"&&(e.left=t.left+(n.width-e.width),e.top=null),r==="nw"&&(e.top=t.top+(n.height-e.height),e.left=t.left+(n.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,n=this.axis,r=this._isNumber(e.width)&&t.maxWidth&&t.maxWidth<e.width,i=this._isNumber(e.height)&&t.maxHeight&&t.maxHeight<e.height,s=this._isNumber(e.width)&&t.minWidth&&t.minWidth>e.width,o=this._isNumber(e.height)&&t.minHeight&&t.minHeight>e.height,u=this.originalPosition.left+this.originalSize.width,a=this.position.top+this.size.height,f=/sw|nw|w/.test(n),l=/nw|ne|n/.test(n);return s&&(e.width=t.minWidth),o&&(e.height=t.minHeight),r&&(e.width=t.maxWidth),i&&(e.height=t.maxHeight),s&&f&&(e.left=u-t.minWidth),r&&f&&(e.left=u-t.maxWidth),o&&l&&(e.top=a-t.minHeight),i&&l&&(e.top=a-t.maxHeight),!e.width&&!e.height&&!e.left&&e.top?e.top=null:!e.width&&!e.height&&!e.top&&e.left&&(e.left=null),e},_getPaddingPlusBorderDimensions:function(e){var t=0,n=[],r=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],i=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];for(;t<4;t++)n[t]=parseInt(r[t],10)||0,n[t]+=parseInt(i[t],10)||0;return{height:n[0]+n[2],width:n[1]+n[3]}},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length)return;var e,t=0,n=this.helper||this.element;for(;t<this._proportionallyResizeElements.length;t++)e=this._proportionallyResizeElements[t],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(e)),e.css({height:n.height()-this.outerDimensions.height||0,width:n.width()-this.outerDimensions.width||0})},_renderProxy:function(){var t=this.element,n=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++n.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var n=this.originalSize,r=this.originalPosition;return{left:r.left+t,width:n.width-t}},n:function(e,t,n){var r=this.originalSize,i=this.originalPosition;return{top:i.top+n,height:r.height-n}},s:function(e,t,n){return{height:this.originalSize.height+n}},se:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},sw:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,n,r]))},ne:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},nw:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,n,r]))}},_propagate:function(t,n){e.ui.plugin.call(this,t,[n,this.ui()]),t!=="resize"&&this._trigger(t,n,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var n=e(this).resizable("instance"),r=n.options,i=n._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),o=s&&n._hasScroll(i[0],"left")?0:n.sizeDiff.height,u=s?0:n.sizeDiff.width,a={width:n.size.width-u,height:n.size.height-o},f=parseInt(n.element.css("left"),10)+(n.position.left-n.originalPosition.left)||null,l=parseInt(n.element.css("top"),10)+(n.position.top-n.originalPosition.top)||null;n.element.animate(e.extend(a,l&&f?{top:l,left:f}:{}),{duration:r.animateDuration,easing:r.animateEasing,step:function(){var r={width:parseInt(n.element.css("width"),10),height:parseInt(n.element.css("height"),10),top:parseInt(n.element.css("top"),10),left:parseInt(n.element.css("left"),10)};i&&i.length&&e(i[0]).css({width:r.width,height:r.height}),n._updateCache(r),n._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var t,n,r,i,s,o,u,a=e(this).resizable("instance"),f=a.options,l=a.element,c=f.containment,h=c instanceof e?c.get(0):/parent/.test(c)?l.parent().get(0):c;if(!h)return;a.containerElement=e(h),/document/.test(c)||c===document?(a.containerOffset={left:0,top:0},a.containerPosition={left:0,top:0},a.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(t=e(h),n=[],e(["Top","Right","Left","Bottom"]).each(function(e,r){n[e]=a._num(t.css("padding"+r))}),a.containerOffset=t.offset(),a.containerPosition=t.position(),a.containerSize={height:t.innerHeight()-n[3],width:t.innerWidth()-n[1]},r=a.containerOffset,i=a.containerSize.height,s=a.containerSize.width,o=a._hasScroll(h,"left")?h.scrollWidth:s,u=a._hasScroll(h)?h.scrollHeight:i,a.parentData={element:h,left:r.left,top:r.top,width:o,height:u})},resize:function(t){var n,r,i,s,o=e(this).resizable("instance"),u=o.options,a=o.containerOffset,f=o.position,l=o._aspectRatio||t.shiftKey,c={top:0,left:0},h=o.containerElement,p=!0;h[0]!==document&&/static/.test(h.css("position"))&&(c=a),f.left<(o._helper?a.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-a.left:o.position.left-c.left),l&&(o.size.height=o.size.width/o.aspectRatio,p=!1),o.position.left=u.helper?a.left:0),f.top<(o._helper?a.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-a.top:o.position.top),l&&(o.size.width=o.size.height*o.aspectRatio,p=!1),o.position.top=o._helper?a.top:0),i=o.containerElement.get(0)===o.element.parent().get(0),s=/relative|absolute/.test(o.containerElement.css("position")),i&&s?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),n=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-c.left:o.offset.left-a.left)),r=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-c.top:o.offset.top-a.top)),n+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-n,l&&(o.size.height=o.size.width/o.aspectRatio,p=!1)),r+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-r,l&&(o.size.width=o.size.height*o.aspectRatio,p=!1)),p||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var t=e(this).resizable("instance"),n=t.options,r=t.containerOffset,i=t.containerPosition,s=t.containerElement,o=e(t.helper),u=o.offset(),a=o.outerWidth()-t.sizeDiff.width,f=o.outerHeight()-t.sizeDiff.height;t._helper&&!n.animate&&/relative/.test(s.css("position"))&&e(this).css({left:u.left-i.left-r.left,width:a,height:f}),t._helper&&!n.animate&&/static/.test(s.css("position"))&&e(this).css({left:u.left-i.left-r.left,width:a,height:f})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).resizable("instance"),n=t.options;e(n.alsoResize).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})},resize:function(t,n){var r=e(this).resizable("instance"),i=r.options,s=r.originalSize,o=r.originalPosition,u={height:r.size.height-s.height||0,width:r.size.width-s.width||0,top:r.position.top-o.top||0,left:r.position.left-o.left||0};e(i.alsoResize).each(function(){var t=e(this),r=e(this).data("ui-resizable-alsoresize"),i={},s=t.parents(n.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(s,function(e,t){var n=(r[t]||0)+(u[t]||0);n&&n>=0&&(i[t]=n||null)}),t.css(i)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).resizable("instance"),n=t.options,r=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:r.height,width:r.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof n.ghost=="string"?n.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).resizable("instance");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).resizable("instance");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t,n=e(this).resizable("instance"),r=n.options,i=n.size,s=n.originalSize,o=n.originalPosition,u=n.axis,a=typeof r.grid=="number"?[r.grid,r.grid]:r.grid,f=a[0]||1,l=a[1]||1,c=Math.round((i.width-s.width)/f)*f,h=Math.round((i.height-s.height)/l)*l,p=s.width+c,d=s.height+h,v=r.maxWidth&&r.maxWidth<p,m=r.maxHeight&&r.maxHeight<d,g=r.minWidth&&r.minWidth>p,y=r.minHeight&&r.minHeight>d;r.grid=a,g&&(p+=f),y&&(d+=l),v&&(p-=f),m&&(d-=l);if(/^(se|s|e)$/.test(u))n.size.width=p,n.size.height=d;else if(/^(ne)$/.test(u))n.size.width=p,n.size.height=d,n.position.top=o.top-h;else if(/^(sw)$/.test(u))n.size.width=p,n.size.height=d,n.position.left=o.left-c;else{if(d-l<=0||p-f<=0)t=n._getPaddingPlusBorderDimensions(this);d-l>0?(n.size.height=d,n.position.top=o.top-h):(d=l-t.height,n.size.height=d,n.position.top=o.top+s.height-d),p-f>0?(n.size.width=p,n.position.left=o.left-c):(p=f-t.width,n.size.width=p,n.position.left=o.left+s.width-p)}}}),e.ui.resizable});;
/*!
 * jQuery UI Dialog 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/dialog/
 */(function(e){typeof define=="function"&&define.amd?define(["jquery","./core","./widget","./button","./draggable","./mouse","./position","./resizable"],e):e(jQuery)})(function(e){return e.widget("ui.dialog",{version:"1.11.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"Close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var n=e(this).css(t).offset().top;n<0&&e(this).css("top",t.top-n)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&e.fn.draggable&&this._makeDraggable(),this.options.resizable&&e.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?e(t):this.document.find(t||"body").eq(0)},_destroy:function(){var e,t=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:e.noop,enable:e.noop,close:function(t){var n,r=this;if(!this._isOpen||this._trigger("beforeClose",t)===!1)return;this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance();if(!this.opener.filter(":focusable").focus().length)try{n=this.document[0].activeElement,n&&n.nodeName.toLowerCase()!=="body"&&e(n).blur()}catch(i){}this._hide(this.uiDialog,this.options.hide,function(){r._trigger("close",t)})},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,n){var r=!1,i=this.uiDialog.siblings(".ui-front:visible").map(function(){return+e(this).css("z-index")}).get(),s=Math.max.apply(null,i);return s>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",s+1),r=!0),r&&!n&&this._trigger("focus",t),r},open:function(){var t=this;if(this._isOpen){this._moveToTop()&&this._focusTabbable();return}this._isOpen=!0,this.opener=e(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")}),this._makeFocusTarget(),this._trigger("open")},_focusTabbable:function(){var e=this._focusedElement;e||(e=this.element.find("[autofocus]")),e.length||(e=this.element.find(":tabbable")),e.length||(e=this.uiDialogButtonPane.find(":tabbable")),e.length||(e=this.uiDialogTitlebarClose.filter(":tabbable")),e.length||(e=this.uiDialog),e.eq(0).focus()},_keepFocus:function(t){function n(){var t=this.document[0].activeElement,n=this.uiDialog[0]===t||e.contains(this.uiDialog[0],t);n||this._focusTabbable()}t.preventDefault(),n.call(this),this._delay(n)},_createWrapper:function(){this.uiDialog=e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE){t.preventDefault(),this.close(t);return}if(t.keyCode!==e.ui.keyCode.TAB||t.isDefaultPrevented())return;var n=this.uiDialog.find(":tabbable"),r=n.filter(":first"),i=n.filter(":last");t.target!==i[0]&&t.target!==this.uiDialog[0]||!!t.shiftKey?(t.target===r[0]||t.target===this.uiDialog[0])&&t.shiftKey&&(this._delay(function(){i.focus()}),t.preventDefault()):(this._delay(function(){r.focus()}),t.preventDefault())},mousedown:function(e){this._moveToTop(e)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(t){e(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=e("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(e){e.preventDefault(),this.close(e)}}),t=e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(t),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(e){this.options.title||e.html("&#160;"),e.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var t=this,n=this.options.buttons;this.uiDialogButtonPane.remove(),this.uiButtonSet.empty();if(e.isEmptyObject(n)||e.isArray(n)&&!n.length){this.uiDialog.removeClass("ui-dialog-buttons");return}e.each(n,function(n,r){var i,s;r=e.isFunction(r)?{click:r,text:n}:r,r=e.extend({type:"button"},r),i=r.click,r.click=function(){i.apply(t.element[0],arguments)},s={icons:r.icons,text:r.showText},delete r.icons,delete r.showText,e("<button></button>",r).button(s).appendTo(t.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog)},_makeDraggable:function(){function r(e){return{position:e.position,offset:e.offset}}var t=this,n=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(n,i){e(this).addClass("ui-dialog-dragging"),t._blockFrames(),t._trigger("dragStart",n,r(i))},drag:function(e,n){t._trigger("drag",e,r(n))},stop:function(i,s){var o=s.offset.left-t.document.scrollLeft(),u=s.offset.top-t.document.scrollTop();n.position={my:"left top",at:"left"+(o>=0?"+":"")+o+" "+"top"+(u>=0?"+":"")+u,of:t.window},e(this).removeClass("ui-dialog-dragging"),t._unblockFrames(),t._trigger("dragStop",i,r(s))}})},_makeResizable:function(){function o(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}var t=this,n=this.options,r=n.resizable,i=this.uiDialog.css("position"),s=typeof r=="string"?r:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:n.maxWidth,maxHeight:n.maxHeight,minWidth:n.minWidth,minHeight:this._minHeight(),handles:s,start:function(n,r){e(this).addClass("ui-dialog-resizing"),t._blockFrames(),t._trigger("resizeStart",n,o(r))},resize:function(e,n){t._trigger("resize",e,o(n))},stop:function(r,i){var s=t.uiDialog.offset(),u=s.left-t.document.scrollLeft(),a=s.top-t.document.scrollTop();n.height=t.uiDialog.height(),n.width=t.uiDialog.width(),n.position={my:"left top",at:"left"+(u>=0?"+":"")+u+" "+"top"+(a>=0?"+":"")+a,of:t.window},e(this).removeClass("ui-dialog-resizing"),t._unblockFrames(),t._trigger("resizeStop",r,o(i))}}).css("position",i)},_trackFocus:function(){this._on(this.widget(),{focusin:function(t){this._makeFocusTarget(),this._focusedElement=e(t.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var t=this._trackingInstances(),n=e.inArray(this,t);n!==-1&&t.splice(n,1)},_trackingInstances:function(){var e=this.document.data("ui-dialog-instances");return e||(e=[],this.document.data("ui-dialog-instances",e)),e},_minHeight:function(){var e=this.options;return e.height==="auto"?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(){var e=this.uiDialog.is(":visible");e||this.uiDialog.show(),this.uiDialog.position(this.options.position),e||this.uiDialog.hide()},_setOptions:function(t){var n=this,r=!1,i={};e.each(t,function(e,t){n._setOption(e,t),e in n.sizeRelatedOptions&&(r=!0),e in n.resizableRelatedOptions&&(i[e]=t)}),r&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",i)},_setOption:function(e,t){var n,r,i=this.uiDialog;e==="dialogClass"&&i.removeClass(this.options.dialogClass).addClass(t);if(e==="disabled")return;this._super(e,t),e==="appendTo"&&this.uiDialog.appendTo(this._appendTo()),e==="buttons"&&this._createButtons(),e==="closeText"&&this.uiDialogTitlebarClose.button({label:""+t}),e==="draggable"&&(n=i.is(":data(ui-draggable)"),n&&!t&&i.draggable("destroy"),!n&&t&&this._makeDraggable()),e==="position"&&this._position(),e==="resizable"&&(r=i.is(":data(ui-resizable)"),r&&!t&&i.resizable("destroy"),r&&typeof t=="string"&&i.resizable("option","handles",t),!r&&t!==!1&&this._makeResizable()),e==="title"&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))},_size:function(){var e,t,n,r=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),r.minWidth>r.width&&(r.width=r.minWidth),e=this.uiDialog.css({height:"auto",width:r.width}).outerHeight(),t=Math.max(0,r.minHeight-e),n=typeof r.maxHeight=="number"?Math.max(0,r.maxHeight-e):"none",r.height==="auto"?this.element.css({minHeight:t,maxHeight:n,height:"auto"}):this.element.height(Math.max(0,r.height-e)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=e(this);return e("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return e(t.target).closest(".ui-dialog").length?!0:!!e(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(!this.options.modal)return;var t=!0;this._delay(function(){t=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(e){if(t)return;this._allowInteraction(e)||(e.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)},_destroyOverlay:function(){if(!this.options.modal)return;if(this.overlay){var e=this.document.data("ui-dialog-overlays")-1;e?this.document.data("ui-dialog-overlays",e):this.document.unbind("focusin").removeData("ui-dialog-overlays"),this.overlay.remove(),this.overlay=null}}})});;
/**
 * @file
 * Dialog API inspired by HTML5 dialog element.
 *
 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#the-dialog-element
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  /**
   * Default dialog options.
   *
   * @type {object}
   *
   * @prop {bool} [autoOpen=true]
   * @prop {string} [dialogClass='']
   * @prop {string} [buttonClass='button']
   * @prop {string} [buttonPrimaryClass='button--primary']
   * @prop {function} close
   */
  drupalSettings.dialog = {
    autoOpen: true,
    dialogClass: '',
    // Drupal-specific extensions: see dialog.jquery-ui.js.
    buttonClass: 'button',
    buttonPrimaryClass: 'button--primary',
    // When using this API directly (when generating dialogs on the client
    // side), you may want to override this method and do
    // `jQuery(event.target).remove()` as well, to remove the dialog on
    // closing.
    close: function (event) {
      Drupal.dialog(event.target).close();
      Drupal.detachBehaviors(event.target, null, 'unload');
    }
  };

  /**
   * @typedef {object} Drupal.dialog~dialogDefinition
   *
   * @prop {boolean} open
   *   Is the dialog open or not.
   * @prop {*} returnValue
   *   Return value of the dialog.
   * @prop {function} show
   *   Method to display the dialog on the page.
   * @prop {function} showModal
   *   Method to display the dialog as a modal on the page.
   * @prop {function} close
   *   Method to hide the dialog from the page.
   */

  /**
   * Polyfill HTML5 dialog element with jQueryUI.
   *
   * @param {HTMLElement} element
   *   The element that holds the dialog.
   * @param {object} options
   *   jQuery UI options to be passed to the dialog.
   *
   * @return {Drupal.dialog~dialogDefinition}
   *   The dialog instance.
   */
  Drupal.dialog = function (element, options) {
    var undef;
    var $element = $(element);
    var dialog = {
      open: false,
      returnValue: undef,
      show: function () {
        openDialog({modal: false});
      },
      showModal: function () {
        openDialog({modal: true});
      },
      close: closeDialog
    };

    function openDialog(settings) {
      settings = $.extend({}, drupalSettings.dialog, options, settings);
      // Trigger a global event to allow scripts to bind events to the dialog.
      $(window).trigger('dialog:beforecreate', [dialog, $element, settings]);
      $element.dialog(settings);
      dialog.open = true;
      $(window).trigger('dialog:aftercreate', [dialog, $element, settings]);
    }

    function closeDialog(value) {
      $(window).trigger('dialog:beforeclose', [dialog, $element]);
      $element.dialog('close');
      dialog.returnValue = value;
      dialog.open = false;
      $(window).trigger('dialog:afterclose', [dialog, $element]);
    }

    return dialog;
  };

})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * Positioning extensions for dialogs.
 */

/**
 * Triggers when content inside a dialog changes.
 *
 * @event dialogContentResize
 */

(function ($, Drupal, drupalSettings, debounce, displace) {

  'use strict';

  // autoResize option will turn off resizable and draggable.
  drupalSettings.dialog = $.extend({autoResize: true, maxHeight: '95%'}, drupalSettings.dialog);

  /**
   * Resets the current options for positioning.
   *
   * This is used as a window resize and scroll callback to reposition the
   * jQuery UI dialog. Although not a built-in jQuery UI option, this can
   * be disabled by setting autoResize: false in the options array when creating
   * a new {@link Drupal.dialog}.
   *
   * @function Drupal.dialog~resetSize
   *
   * @param {jQuery.Event} event
   *   The event triggered.
   *
   * @fires event:dialogContentResize
   */
  function resetSize(event) {
    var positionOptions = ['width', 'height', 'minWidth', 'minHeight', 'maxHeight', 'maxWidth', 'position'];
    var adjustedOptions = {};
    var windowHeight = $(window).height();
    var option;
    var optionValue;
    var adjustedValue;
    for (var n = 0; n < positionOptions.length; n++) {
      option = positionOptions[n];
      optionValue = event.data.settings[option];
      if (optionValue) {
        // jQuery UI does not support percentages on heights, convert to pixels.
        if (typeof optionValue === 'string' && /%$/.test(optionValue) && /height/i.test(option)) {
          // Take offsets in account.
          windowHeight -= displace.offsets.top + displace.offsets.bottom;
          adjustedValue = parseInt(0.01 * parseInt(optionValue, 10) * windowHeight, 10);
          // Don't force the dialog to be bigger vertically than needed.
          if (option === 'height' && event.data.$element.parent().outerHeight() < adjustedValue) {
            adjustedValue = 'auto';
          }
          adjustedOptions[option] = adjustedValue;
        }
      }
    }
    // Offset the dialog center to be at the center of Drupal.displace.offsets.
    if (!event.data.settings.modal) {
      adjustedOptions = resetPosition(adjustedOptions);
    }
    event.data.$element
      .dialog('option', adjustedOptions)
      .trigger('dialogContentResize');
  }

  /**
   * Position the dialog's center at the center of displace.offsets boundaries.
   *
   * @function Drupal.dialog~resetPosition
   *
   * @param {object} options
   *   Options object.
   *
   * @return {object}
   *   Altered options object.
   */
  function resetPosition(options) {
    var offsets = displace.offsets;
    var left = offsets.left - offsets.right;
    var top = offsets.top - offsets.bottom;

    var leftString = (left > 0 ? '+' : '-') + Math.abs(Math.round(left / 2)) + 'px';
    var topString = (top > 0 ? '+' : '-') + Math.abs(Math.round(top / 2)) + 'px';
    options.position = {
      my: 'center' + (left !== 0 ? leftString : '') + ' center' + (top !== 0 ? topString : ''),
      of: window
    };
    return options;
  }

  $(window).on({
    'dialog:aftercreate': function (event, dialog, $element, settings) {
      var autoResize = debounce(resetSize, 20);
      var eventData = {settings: settings, $element: $element};
      if (settings.autoResize === true || settings.autoResize === 'true') {
        $element
          .dialog('option', {resizable: false, draggable: false})
          .dialog('widget').css('position', 'fixed');
        $(window)
          .on('resize.dialogResize scroll.dialogResize', eventData, autoResize)
          .trigger('resize.dialogResize');
        $(document).on('drupalViewportOffsetChange.dialogResize', eventData, autoResize);
      }
    },
    'dialog:beforeclose': function (event, dialog, $element) {
      $(window).off('.dialogResize');
      $(document).off('.dialogResize');
    }
  });

})(jQuery, Drupal, drupalSettings, Drupal.debounce, Drupal.displace);
;
/**
 * @file
 * Adds default classes to buttons for styling purposes.
 */

(function ($) {

  'use strict';

  $.widget('ui.dialog', $.ui.dialog, {
    options: {
      buttonClass: 'button',
      buttonPrimaryClass: 'button--primary'
    },
    _createButtons: function () {
      var opts = this.options;
      var primaryIndex;
      var $buttons;
      var index;
      var il = opts.buttons.length;
      for (index = 0; index < il; index++) {
        if (opts.buttons[index].primary && opts.buttons[index].primary === true) {
          primaryIndex = index;
          delete opts.buttons[index].primary;
          break;
        }
      }
      this._super();
      $buttons = this.uiButtonSet.children().addClass(opts.buttonClass);
      if (typeof primaryIndex !== 'undefined') {
        $buttons.eq(index).addClass(opts.buttonPrimaryClass);
      }
    }
  });

})(jQuery);
;
/**
 * @file
 * Attaches behavior for the Quick Edit module.
 *
 * Everything happens asynchronously, to allow for:
 *   - dynamically rendered contextual links
 *   - asynchronously retrieved (and cached) per-field in-place editing metadata
 *   - asynchronous setup of in-place editable field and "Quick edit" link.
 *
 * To achieve this, there are several queues:
 *   - fieldsMetadataQueue: fields whose metadata still needs to be fetched.
 *   - fieldsAvailableQueue: queue of fields whose metadata is known, and for
 *     which it has been confirmed that the user has permission to edit them.
 *     However, FieldModels will only be created for them once there's a
 *     contextual link for their entity: when it's possible to initiate editing.
 *   - contextualLinksQueue: queue of contextual links on entities for which it
 *     is not yet known whether the user has permission to edit at >=1 of them.
 */

(function ($, _, Backbone, Drupal, drupalSettings, JSON, storage) {

  'use strict';

  var options = $.extend(drupalSettings.quickedit,
    // Merge strings on top of drupalSettings so that they are not mutable.
    {
      strings: {
        quickEdit: Drupal.t('Quick edit')
      }
    }
  );

  /**
   * Tracks fields without metadata. Contains objects with the following keys:
   *   - DOM el
   *   - String fieldID
   *   - String entityID
   */
  var fieldsMetadataQueue = [];

  /**
   * Tracks fields ready for use. Contains objects with the following keys:
   *   - DOM el
   *   - String fieldID
   *   - String entityID
   */
  var fieldsAvailableQueue = [];

  /**
   * Tracks contextual links on entities. Contains objects with the following
   * keys:
   *   - String entityID
   *   - DOM el
   *   - DOM region
   */
  var contextualLinksQueue = [];

  /**
   * Tracks how many instances exist for each unique entity. Contains key-value
   * pairs:
   * - String entityID
   * - Number count
   */
  var entityInstancesTracker = {};

  /**
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.quickedit = {
    attach: function (context) {
      // Initialize the Quick Edit app once per page load.
      $('body').once('quickedit-init').each(initQuickEdit);

      // Find all in-place editable fields, if any.
      var $fields = $(context).find('[data-quickedit-field-id]').once('quickedit');
      if ($fields.length === 0) {
        return;
      }

      // Process each entity element: identical entities that appear multiple
      // times will get a numeric identifier, starting at 0.
      $(context).find('[data-quickedit-entity-id]').once('quickedit').each(function (index, entityElement) {
        processEntity(entityElement);
      });

      // Process each field element: queue to be used or to fetch metadata.
      // When a field is being rerendered after editing, it will be processed
      // immediately. New fields will be unable to be processed immediately,
      // but will instead be queued to have their metadata fetched, which occurs
      // below in fetchMissingMetaData().
      $fields.each(function (index, fieldElement) {
        processField(fieldElement);
      });

      // Entities and fields on the page have been detected, try to set up the
      // contextual links for those entities that already have the necessary
      // meta- data in the client-side cache.
      contextualLinksQueue = _.filter(contextualLinksQueue, function (contextualLink) {
        return !initializeEntityContextualLink(contextualLink);
      });

      // Fetch metadata for any fields that are queued to retrieve it.
      fetchMissingMetadata(function (fieldElementsWithFreshMetadata) {
        // Metadata has been fetched, reprocess fields whose metadata was
        // missing.
        _.each(fieldElementsWithFreshMetadata, processField);

        // Metadata has been fetched, try to set up more contextual links now.
        contextualLinksQueue = _.filter(contextualLinksQueue, function (contextualLink) {
          return !initializeEntityContextualLink(contextualLink);
        });
      });
    },
    detach: function (context, settings, trigger) {
      if (trigger === 'unload') {
        deleteContainedModelsAndQueues($(context));
      }
    }
  };

  /**
   *
   * @namespace
   */
  Drupal.quickedit = {

    /**
     * A {@link Drupal.quickedit.AppView} instance.
     */
    app: null,

    /**
     * @type {object}
     *
     * @prop {Array.<Drupal.quickedit.EntityModel>} entities
     * @prop {Array.<Drupal.quickedit.FieldModel>} fields
     */
    collections: {
      // All in-place editable entities (Drupal.quickedit.EntityModel) on the
      // page.
      entities: null,
      // All in-place editable fields (Drupal.quickedit.FieldModel) on the page.
      fields: null
    },

    /**
     * In-place editors will register themselves in this object.
     *
     * @namespace
     */
    editors: {},

    /**
     * Per-field metadata that indicates whether in-place editing is allowed,
     * which in-place editor should be used, etc.
     *
     * @namespace
     */
    metadata: {

      /**
       * Check if a field exists in storage.
       *
       * @param {string} fieldID
       *   The field id to check.
       *
       * @return {bool}
       *   Whether it was found or not.
       */
      has: function (fieldID) {
        return storage.getItem(this._prefixFieldID(fieldID)) !== null;
      },

      /**
       * Add metadata to a field id.
       *
       * @param {string} fieldID
       *   The field ID to add data to.
       * @param {object} metadata
       *   Metadata to add.
       */
      add: function (fieldID, metadata) {
        storage.setItem(this._prefixFieldID(fieldID), JSON.stringify(metadata));
      },

      /**
       * Get a key from a field id.
       *
       * @param {string} fieldID
       *   The field ID to check.
       * @param {string} [key]
       *   The key to check. If empty, will return all metadata.
       *
       * @return {object|*}
       *   The value for the key, if defined. Otherwise will return all metadata
       *   for the specified field id.
       *
       */
      get: function (fieldID, key) {
        var metadata = JSON.parse(storage.getItem(this._prefixFieldID(fieldID)));
        return (typeof key === 'undefined') ? metadata : metadata[key];
      },

      /**
       * Prefix the field id.
       *
       * @param {string} fieldID
       *   The field id to prefix.
       *
       * @return {string}
       *   A prefixed field id.
       */
      _prefixFieldID: function (fieldID) {
        return 'Drupal.quickedit.metadata.' + fieldID;
      },

      /**
       * Unprefix the field id.
       *
       * @param {string} fieldID
       *   The field id to unprefix.
       *
       * @return {string}
       *   An unprefixed field id.
       */
      _unprefixFieldID: function (fieldID) {
        // Strip "Drupal.quickedit.metadata.", which is 26 characters long.
        return fieldID.substring(26);
      },

      /**
       * Intersection calculation.
       *
       * @param {Array} fieldIDs
       *   An array of field ids to compare to prefix field id.
       *
       * @return {Array}
       *   The intersection found.
       */
      intersection: function (fieldIDs) {
        var prefixedFieldIDs = _.map(fieldIDs, this._prefixFieldID);
        var intersection = _.intersection(prefixedFieldIDs, _.keys(sessionStorage));
        return _.map(intersection, this._unprefixFieldID);
      }
    }
  };

  // Clear the Quick Edit metadata cache whenever the current user's set of
  // permissions changes.
  var permissionsHashKey = Drupal.quickedit.metadata._prefixFieldID('permissionsHash');
  var permissionsHashValue = storage.getItem(permissionsHashKey);
  var permissionsHash = drupalSettings.user.permissionsHash;
  if (permissionsHashValue !== permissionsHash) {
    if (typeof permissionsHash === 'string') {
      _.chain(storage).keys().each(function (key) {
        if (key.substring(0, 26) === 'Drupal.quickedit.metadata.') {
          storage.removeItem(key);
        }
      });
    }
    storage.setItem(permissionsHashKey, permissionsHash);
  }

  /**
   * Detect contextual links on entities annotated by quickedit.
   *
   * Queue contextual links to be processed.
   *
   * @param {jQuery.Event} event
   *   The `drupalContextualLinkAdded` event.
   * @param {object} data
   *   An object containing the data relevant to the event.
   *
   * @listens event:drupalContextualLinkAdded
   */
  $(document).on('drupalContextualLinkAdded', function (event, data) {
    if (data.$region.is('[data-quickedit-entity-id]')) {
      // If the contextual link is cached on the client side, an entity instance
      // will not yet have been assigned. So assign one.
      if (!data.$region.is('[data-quickedit-entity-instance-id]')) {
        data.$region.once('quickedit');
        processEntity(data.$region.get(0));
      }
      var contextualLink = {
        entityID: data.$region.attr('data-quickedit-entity-id'),
        entityInstanceID: data.$region.attr('data-quickedit-entity-instance-id'),
        el: data.$el[0],
        region: data.$region[0]
      };
      // Set up contextual links for this, otherwise queue it to be set up
      // later.
      if (!initializeEntityContextualLink(contextualLink)) {
        contextualLinksQueue.push(contextualLink);
      }
    }
  });

  /**
   * Extracts the entity ID from a field ID.
   *
   * @param {string} fieldID
   *   A field ID: a string of the format
   *   `<entity type>/<id>/<field name>/<language>/<view mode>`.
   *
   * @return {string}
   *   An entity ID: a string of the format `<entity type>/<id>`.
   */
  function extractEntityID(fieldID) {
    return fieldID.split('/').slice(0, 2).join('/');
  }

  /**
   * Initialize the Quick Edit app.
   *
   * @param {HTMLElement} bodyElement
   *   This document's body element.
   */
  function initQuickEdit(bodyElement) {
    Drupal.quickedit.collections.entities = new Drupal.quickedit.EntityCollection();
    Drupal.quickedit.collections.fields = new Drupal.quickedit.FieldCollection();

    // Instantiate AppModel (application state) and AppView, which is the
    // controller of the whole in-place editing experience.
    Drupal.quickedit.app = new Drupal.quickedit.AppView({
      el: bodyElement,
      model: new Drupal.quickedit.AppModel(),
      entitiesCollection: Drupal.quickedit.collections.entities,
      fieldsCollection: Drupal.quickedit.collections.fields
    });
  }

  /**
   * Assigns the entity an instance ID.
   *
   * @param {HTMLElement} entityElement
   *   A Drupal Entity API entity's DOM element with a data-quickedit-entity-id
   *   attribute.
   */
  function processEntity(entityElement) {
    var entityID = entityElement.getAttribute('data-quickedit-entity-id');
    if (!entityInstancesTracker.hasOwnProperty(entityID)) {
      entityInstancesTracker[entityID] = 0;
    }
    else {
      entityInstancesTracker[entityID]++;
    }

    // Set the calculated entity instance ID for this element.
    var entityInstanceID = entityInstancesTracker[entityID];
    entityElement.setAttribute('data-quickedit-entity-instance-id', entityInstanceID);
  }

  /**
   * Fetch the field's metadata; queue or initialize it (if EntityModel exists).
   *
   * @param {HTMLElement} fieldElement
   *   A Drupal Field API field's DOM element with a data-quickedit-field-id
   *   attribute.
   */
  function processField(fieldElement) {
    var metadata = Drupal.quickedit.metadata;
    var fieldID = fieldElement.getAttribute('data-quickedit-field-id');
    var entityID = extractEntityID(fieldID);
    // Figure out the instance ID by looking at the ancestor
    // [data-quickedit-entity-id] element's data-quickedit-entity-instance-id
    // attribute.
    var entityElementSelector = '[data-quickedit-entity-id="' + entityID + '"]';
    var entityElement = $(fieldElement).closest(entityElementSelector);
    // In the case of a full entity view page, the entity title is rendered
    // outside of "the entity DOM node": it's rendered as the page title. So in
    // this case, we find the lowest common parent element (deepest in the tree)
    // and consider that the entity element.
    if (entityElement.length === 0) {
      var $lowestCommonParent = $(entityElementSelector).parents().has(fieldElement).first();
      entityElement = $lowestCommonParent.find(entityElementSelector);
    }
    var entityInstanceID = entityElement
      .get(0)
      .getAttribute('data-quickedit-entity-instance-id');

    // Early-return if metadata for this field is missing.
    if (!metadata.has(fieldID)) {
      fieldsMetadataQueue.push({
        el: fieldElement,
        fieldID: fieldID,
        entityID: entityID,
        entityInstanceID: entityInstanceID
      });
      return;
    }
    // Early-return if the user is not allowed to in-place edit this field.
    if (metadata.get(fieldID, 'access') !== true) {
      return;
    }

    // If an EntityModel for this field already exists (and hence also a "Quick
    // edit" contextual link), then initialize it immediately.
    if (Drupal.quickedit.collections.entities.findWhere({entityID: entityID, entityInstanceID: entityInstanceID})) {
      initializeField(fieldElement, fieldID, entityID, entityInstanceID);
    }
    // Otherwise: queue the field. It is now available to be set up when its
    // corresponding entity becomes in-place editable.
    else {
      fieldsAvailableQueue.push({el: fieldElement, fieldID: fieldID, entityID: entityID, entityInstanceID: entityInstanceID});
    }
  }

  /**
   * Initialize a field; create FieldModel.
   *
   * @param {HTMLElement} fieldElement
   *   The field's DOM element.
   * @param {string} fieldID
   *   The field's ID.
   * @param {string} entityID
   *   The field's entity's ID.
   * @param {string} entityInstanceID
   *   The field's entity's instance ID.
   */
  function initializeField(fieldElement, fieldID, entityID, entityInstanceID) {
    var entity = Drupal.quickedit.collections.entities.findWhere({
      entityID: entityID,
      entityInstanceID: entityInstanceID
    });

    $(fieldElement).addClass('quickedit-field');

    // The FieldModel stores the state of an in-place editable entity field.
    var field = new Drupal.quickedit.FieldModel({
      el: fieldElement,
      fieldID: fieldID,
      id: fieldID + '[' + entity.get('entityInstanceID') + ']',
      entity: entity,
      metadata: Drupal.quickedit.metadata.get(fieldID),
      acceptStateChange: _.bind(Drupal.quickedit.app.acceptEditorStateChange, Drupal.quickedit.app)
    });

    // Track all fields on the page.
    Drupal.quickedit.collections.fields.add(field);
  }

  /**
   * Fetches metadata for fields whose metadata is missing.
   *
   * Fields whose metadata is missing are tracked at fieldsMetadataQueue.
   *
   * @param {function} callback
   *   A callback function that receives field elements whose metadata will just
   *   have been fetched.
   */
  function fetchMissingMetadata(callback) {
    if (fieldsMetadataQueue.length) {
      var fieldIDs = _.pluck(fieldsMetadataQueue, 'fieldID');
      var fieldElementsWithoutMetadata = _.pluck(fieldsMetadataQueue, 'el');
      var entityIDs = _.uniq(_.pluck(fieldsMetadataQueue, 'entityID'), true);
      // Ensure we only request entityIDs for which we don't have metadata yet.
      entityIDs = _.difference(entityIDs, Drupal.quickedit.metadata.intersection(entityIDs));
      fieldsMetadataQueue = [];

      $.ajax({
        url: Drupal.url('quickedit/metadata'),
        type: 'POST',
        data: {
          'fields[]': fieldIDs,
          'entities[]': entityIDs
        },
        dataType: 'json',
        success: function (results) {
          // Store the metadata.
          _.each(results, function (fieldMetadata, fieldID) {
            Drupal.quickedit.metadata.add(fieldID, fieldMetadata);
          });

          callback(fieldElementsWithoutMetadata);
        }
      });
    }
  }

  /**
   * Loads missing in-place editor's attachments (JavaScript and CSS files).
   *
   * Missing in-place editors are those whose fields are actively being used on
   * the page but don't have.
   *
   * @param {function} callback
   *   Callback function to be called when the missing in-place editors (if any)
   *   have been inserted into the DOM. i.e. they may still be loading.
   */
  function loadMissingEditors(callback) {
    var loadedEditors = _.keys(Drupal.quickedit.editors);
    var missingEditors = [];
    Drupal.quickedit.collections.fields.each(function (fieldModel) {
      var metadata = Drupal.quickedit.metadata.get(fieldModel.get('fieldID'));
      if (metadata.access && _.indexOf(loadedEditors, metadata.editor) === -1) {
        missingEditors.push(metadata.editor);
        // Set a stub, to prevent subsequent calls to loadMissingEditors() from
        // loading the same in-place editor again. Loading an in-place editor
        // requires talking to a server, to download its JavaScript, then
        // executing its JavaScript, and only then its Drupal.quickedit.editors
        // entry will be set.
        Drupal.quickedit.editors[metadata.editor] = false;
      }
    });
    missingEditors = _.uniq(missingEditors);
    if (missingEditors.length === 0) {
      callback();
      return;
    }

    // @see https://www.drupal.org/node/2029999.
    // Create a Drupal.Ajax instance to load the form.
    var loadEditorsAjax = Drupal.ajax({
      url: Drupal.url('quickedit/attachments'),
      submit: {'editors[]': missingEditors}
    });
    // Implement a scoped insert AJAX command: calls the callback after all AJAX
    // command functions have been executed (hence the deferred calling).
    var realInsert = Drupal.AjaxCommands.prototype.insert;
    loadEditorsAjax.commands.insert = function (ajax, response, status) {
      _.defer(callback);
      realInsert(ajax, response, status);
    };
    // Trigger the AJAX request, which will should return AJAX commands to
    // insert any missing attachments.
    loadEditorsAjax.execute();
  }

  /**
   * Attempts to set up a "Quick edit" link and corresponding EntityModel.
   *
   * @param {object} contextualLink
   *   An object with the following properties:
   *     - String entityID: a Quick Edit entity identifier, e.g. "node/1" or
   *       "block_content/5".
   *     - String entityInstanceID: a Quick Edit entity instance identifier,
   *       e.g. 0, 1 or n (depending on whether it's the first, second, or n+1st
   *       instance of this entity).
   *     - DOM el: element pointing to the contextual links placeholder for this
   *       entity.
   *     - DOM region: element pointing to the contextual region of this entity.
   *
   * @return {bool}
   *   Returns true when a contextual the given contextual link metadata can be
   *   removed from the queue (either because the contextual link has been set
   *   up or because it is certain that in-place editing is not allowed for any
   *   of its fields). Returns false otherwise.
   */
  function initializeEntityContextualLink(contextualLink) {
    var metadata = Drupal.quickedit.metadata;
    // Check if the user has permission to edit at least one of them.
    function hasFieldWithPermission(fieldIDs) {
      for (var i = 0; i < fieldIDs.length; i++) {
        var fieldID = fieldIDs[i];
        if (metadata.get(fieldID, 'access') === true) {
          return true;
        }
      }
      return false;
    }

    // Checks if the metadata for all given field IDs exists.
    function allMetadataExists(fieldIDs) {
      return fieldIDs.length === metadata.intersection(fieldIDs).length;
    }

    // Find all fields for this entity instance and collect their field IDs.
    var fields = _.where(fieldsAvailableQueue, {
      entityID: contextualLink.entityID,
      entityInstanceID: contextualLink.entityInstanceID
    });
    var fieldIDs = _.pluck(fields, 'fieldID');

    // No fields found yet.
    if (fieldIDs.length === 0) {
      return false;
    }
    // The entity for the given contextual link contains at least one field that
    // the current user may edit in-place; instantiate EntityModel,
    // EntityDecorationView and ContextualLinkView.
    else if (hasFieldWithPermission(fieldIDs)) {
      var entityModel = new Drupal.quickedit.EntityModel({
        el: contextualLink.region,
        entityID: contextualLink.entityID,
        entityInstanceID: contextualLink.entityInstanceID,
        id: contextualLink.entityID + '[' + contextualLink.entityInstanceID + ']',
        label: Drupal.quickedit.metadata.get(contextualLink.entityID, 'label')
      });
      Drupal.quickedit.collections.entities.add(entityModel);
      // Create an EntityDecorationView associated with the root DOM node of the
      // entity.
      var entityDecorationView = new Drupal.quickedit.EntityDecorationView({
        el: contextualLink.region,
        model: entityModel
      });
      entityModel.set('entityDecorationView', entityDecorationView);

      // Initialize all queued fields within this entity (creates FieldModels).
      _.each(fields, function (field) {
        initializeField(field.el, field.fieldID, contextualLink.entityID, contextualLink.entityInstanceID);
      });
      fieldsAvailableQueue = _.difference(fieldsAvailableQueue, fields);

      // Initialization should only be called once. Use Underscore's once method
      // to get a one-time use version of the function.
      var initContextualLink = _.once(function () {
        var $links = $(contextualLink.el).find('.contextual-links');
        var contextualLinkView = new Drupal.quickedit.ContextualLinkView($.extend({
          el: $('<li class="quickedit"><a href="" role="button" aria-pressed="false"></a></li>').prependTo($links),
          model: entityModel,
          appModel: Drupal.quickedit.app.model
        }, options));
        entityModel.set('contextualLinkView', contextualLinkView);
      });

      // Set up ContextualLinkView after loading any missing in-place editors.
      loadMissingEditors(initContextualLink);

      return true;
    }
    // There was not at least one field that the current user may edit in-place,
    // even though the metadata for all fields within this entity is available.
    else if (allMetadataExists(fieldIDs)) {
      return true;
    }

    return false;
  }

  /**
   * Delete models and queue items that are contained within a given context.
   *
   * Deletes any contained EntityModels (plus their associated FieldModels and
   * ContextualLinkView) and FieldModels, as well as the corresponding queues.
   *
   * After EntityModels, FieldModels must also be deleted, because it is
   * possible in Drupal for a field DOM element to exist outside of the entity
   * DOM element, e.g. when viewing the full node, the title of the node is not
   * rendered within the node (the entity) but as the page title.
   *
   * Note: this will not delete an entity that is actively being in-place
   * edited.
   *
   * @param {jQuery} $context
   *   The context within which to delete.
   */
  function deleteContainedModelsAndQueues($context) {
    $context.find('[data-quickedit-entity-id]').addBack('[data-quickedit-entity-id]').each(function (index, entityElement) {
      // Delete entity model.
      var entityModel = Drupal.quickedit.collections.entities.findWhere({el: entityElement});
      if (entityModel) {
        var contextualLinkView = entityModel.get('contextualLinkView');
        contextualLinkView.undelegateEvents();
        contextualLinkView.remove();
        // Remove the EntityDecorationView.
        entityModel.get('entityDecorationView').remove();
        // Destroy the EntityModel; this will also destroy its FieldModels.
        entityModel.destroy();
      }

      // Filter queue.
      function hasOtherRegion(contextualLink) {
        return contextualLink.region !== entityElement;
      }

      contextualLinksQueue = _.filter(contextualLinksQueue, hasOtherRegion);
    });

    $context.find('[data-quickedit-field-id]').addBack('[data-quickedit-field-id]').each(function (index, fieldElement) {
      // Delete field models.
      Drupal.quickedit.collections.fields.chain()
        .filter(function (fieldModel) { return fieldModel.get('el') === fieldElement; })
        .invoke('destroy');

      // Filter queues.
      function hasOtherFieldElement(field) {
        return field.el !== fieldElement;
      }

      fieldsMetadataQueue = _.filter(fieldsMetadataQueue, hasOtherFieldElement);
      fieldsAvailableQueue = _.filter(fieldsAvailableQueue, hasOtherFieldElement);
    });
  }

})(jQuery, _, Backbone, Drupal, drupalSettings, window.JSON, window.sessionStorage);
;
/**
 * @file
 * Provides utility functions for Quick Edit.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * @namespace
   */
  Drupal.quickedit.util = Drupal.quickedit.util || {};

  /**
   * @namespace
   */
  Drupal.quickedit.util.constants = {};

  /**
   *
   * @type {string}
   */
  Drupal.quickedit.util.constants.transitionEnd = 'transitionEnd.quickedit webkitTransitionEnd.quickedit transitionend.quickedit msTransitionEnd.quickedit oTransitionEnd.quickedit';

  /**
   * Converts a field id into a formatted url path.
   *
   * @example
   * Drupal.quickedit.util.buildUrl(
   *   'node/1/body/und/full',
   *   '/quickedit/form/!entity_type/!id/!field_name/!langcode/!view_mode'
   * );
   *
   * @param {string} id
   *   The id of an editable field.
   * @param {string} urlFormat
   *   The Controller route for field processing.
   *
   * @return {string}
   *   The formatted URL.
   */
  Drupal.quickedit.util.buildUrl = function (id, urlFormat) {
    var parts = id.split('/');
    return Drupal.formatString(decodeURIComponent(urlFormat), {
      '!entity_type': parts[0],
      '!id': parts[1],
      '!field_name': parts[2],
      '!langcode': parts[3],
      '!view_mode': parts[4]
    });
  };

  /**
   * Shows a network error modal dialog.
   *
   * @param {string} title
   *   The title to use in the modal dialog.
   * @param {string} message
   *   The message to use in the modal dialog.
   */
  Drupal.quickedit.util.networkErrorModal = function (title, message) {
    var $message = $('<div>' + message + '</div>');
    var networkErrorModal = Drupal.dialog($message.get(0), {
      title: title,
      dialogClass: 'quickedit-network-error',
      buttons: [
        {
          text: Drupal.t('OK'),
          click: function () {
            networkErrorModal.close();
          },
          primary: true
        }
      ],
      create: function () {
        $(this).parent().find('.ui-dialog-titlebar-close').remove();
      },
      close: function (event) {
        // Automatically destroy the DOM element that was used for the dialog.
        $(event.target).remove();
      }
    });
    networkErrorModal.showModal();
  };

  /**
   * @namespace
   */
  Drupal.quickedit.util.form = {

    /**
     * Loads a form, calls a callback to insert.
     *
     * Leverages {@link Drupal.Ajax}' ability to have scoped (per-instance)
     * command implementations to be able to call a callback.
     *
     * @param {object} options
     *   An object with the following keys:
     * @param {string} options.fieldID
     *   The field ID that uniquely identifies the field for which this form
     *   will be loaded.
     * @param {bool} options.nocssjs
     *   Boolean indicating whether no CSS and JS should be returned (necessary
     *   when the form is invisible to the user).
     * @param {bool} options.reset
     *   Boolean indicating whether the data stored for this field's entity in
     *   PrivateTempStore should be used or reset.
     * @param {function} callback
     *   A callback function that will receive the form to be inserted, as well
     *   as the ajax object, necessary if the callback wants to perform other
     *   Ajax commands.
     */
    load: function (options, callback) {
      var fieldID = options.fieldID;

      // Create a Drupal.ajax instance to load the form.
      var formLoaderAjax = Drupal.ajax({
        url: Drupal.quickedit.util.buildUrl(fieldID, Drupal.url('quickedit/form/!entity_type/!id/!field_name/!langcode/!view_mode')),
        submit: {
          nocssjs: options.nocssjs,
          reset: options.reset
        },
        error: function (xhr, url) {
          // Show a modal to inform the user of the network error.
          var fieldLabel = Drupal.quickedit.metadata.get(fieldID, 'label');
          var message = Drupal.t('Could not load the form for <q>@field-label</q>, either due to a website problem or a network connection problem.<br>Please try again.', {'@field-label': fieldLabel});
          Drupal.quickedit.util.networkErrorModal(Drupal.t('Network problem!'), message);

          // Change the state back to "candidate", to allow the user to start
          // in-place editing of the field again.
          var fieldModel = Drupal.quickedit.app.model.get('activeField');
          fieldModel.set('state', 'candidate');
        }
      });
      // Implement a scoped quickeditFieldForm AJAX command: calls the callback.
      formLoaderAjax.commands.quickeditFieldForm = function (ajax, response, status) {
        callback(response.data, ajax);
        Drupal.ajax.instances[this.instanceIndex] = null;
      };
      // This will ensure our scoped quickeditFieldForm AJAX command gets
      // called.
      formLoaderAjax.execute();
    },

    /**
     * Creates a {@link Drupal.Ajax} instance that is used to save a form.
     *
     * @param {object} options
     *   Submit options to the form.
     * @param {bool} options.nocssjs
     *   Boolean indicating whether no CSS and JS should be returned (necessary
     *   when the form is invisible to the user).
     * @param {Array.<string>} options.other_view_modes
     *   Array containing view mode IDs (of other instances of this field on the
     *   page).
     * @param {jQuery} $submit
     *   The submit element.
     *
     * @return {Drupal.Ajax}
     *   A {@link Drupal.Ajax} instance.
     */
    ajaxifySaving: function (options, $submit) {
      // Re-wire the form to handle submit.
      var settings = {
        url: $submit.closest('form').attr('action'),
        setClick: true,
        event: 'click.quickedit',
        progress: false,
        submit: {
          nocssjs: options.nocssjs,
          other_view_modes: options.other_view_modes
        },

        /**
         * Reimplement the success handler.
         *
         * Ensure {@link Drupal.attachBehaviors} does not get called on the
         * form.
         *
         * @param {Drupal.AjaxCommands~commandDefinition} response
         *   The Drupal AJAX response.
         * @param {number} [status]
         *   The HTTP status code.
         */
        success: function (response, status) {
          for (var i in response) {
            if (response.hasOwnProperty(i) && response[i].command && this.commands[response[i].command]) {
              this.commands[response[i].command](this, response[i], status);
            }
          }
        },
        base: $submit.attr('id'),
        element: $submit[0]
      };

      return Drupal.ajax(settings);
    },

    /**
     * Cleans up the {@link Drupal.Ajax} instance that is used to save the form.
     *
     * @param {Drupal.Ajax} ajax
     *   A {@link Drupal.Ajax} instance that was returned by
     *   {@link Drupal.quickedit.form.ajaxifySaving}.
     */
    unajaxifySaving: function (ajax) {
      $(ajax.element).off('click.quickedit');
    }

  };

})(jQuery, Drupal);
;
/**
 * @file
 * A Backbone Model subclass that enforces validation when calling set().
 */

(function (Drupal, Backbone) {

  'use strict';

  Drupal.quickedit.BaseModel = Backbone.Model.extend(/** @lends Drupal.quickedit.BaseModel# */{

    /**
     * @constructs
     *
     * @augments Backbone.Model
     *
     * @param {object} options
     *   Options for the base model-
     *
     * @return {Drupal.quickedit.BaseModel}
     *   A quickedit base model.
     */
    initialize: function (options) {
      this.__initialized = true;
      return Backbone.Model.prototype.initialize.call(this, options);
    },

    /**
     * Set a value on the model
     *
     * @param {object|string} key
     *   The key to set a value for.
     * @param {*} val
     *   The value to set.
     * @param {object} [options]
     *   Options for the model.
     *
     * @return {*}
     *   The result of `Backbone.Model.prototype.set` with the specified
     *   parameters.
     */
    set: function (key, val, options) {
      if (this.__initialized) {
        // Deal with both the "key", value and {key:value}-style arguments.
        if (typeof key === 'object') {
          key.validate = true;
        }
        else {
          if (!options) {
            options = {};
          }
          options.validate = true;
        }
      }
      return Backbone.Model.prototype.set.call(this, key, val, options);
    }

  });

}(Drupal, Backbone));
;
/**
 * @file
 * A Backbone Model for the state of the in-place editing application.
 *
 * @see Drupal.quickedit.AppView
 */

(function (Backbone, Drupal) {

  'use strict';

  /**
   * @constructor
   *
   * @augments Backbone.Model
   */
  Drupal.quickedit.AppModel = Backbone.Model.extend(/** @lends Drupal.quickedit.AppModel# */{

    /**
     * @type {object}
     *
     * @prop {Drupal.quickedit.FieldModel} highlightedField
     * @prop {Drupal.quickedit.FieldModel} activeField
     * @prop {Drupal.dialog~dialogDefinition} activeModal
     */
    defaults: /** @lends Drupal.quickedit.AppModel# */{

      /**
       * The currently state='highlighted' Drupal.quickedit.FieldModel, if any.
       *
       * @type {Drupal.quickedit.FieldModel}
       *
       * @see Drupal.quickedit.FieldModel.states
       */
      highlightedField: null,

      /**
       * The currently state = 'active' Drupal.quickedit.FieldModel, if any.
       *
       * @type {Drupal.quickedit.FieldModel}
       *
       * @see Drupal.quickedit.FieldModel.states
       */
      activeField: null,

      /**
       * Reference to a {@link Drupal.dialog} instance if a state change
       * requires confirmation.
       *
       * @type {Drupal.dialog~dialogDefinition}
       */
      activeModal: null
    }

  });

}(Backbone, Drupal));
;
/**
 * @file
 * A Backbone Model for the state of an in-place editable entity in the DOM.
 */

(function (_, $, Backbone, Drupal) {

  'use strict';

  Drupal.quickedit.EntityModel = Drupal.quickedit.BaseModel.extend(/** @lends Drupal.quickedit.EntityModel# */{

    /**
     * @type {object}
     */
    defaults: /** @lends Drupal.quickedit.EntityModel# */{

      /**
       * The DOM element that represents this entity.
       *
       * It may seem bizarre to have a DOM element in a Backbone Model, but we
       * need to be able to map entities in the DOM to EntityModels in memory.
       *
       * @type {HTMLElement}
       */
      el: null,

      /**
       * An entity ID, of the form `<entity type>/<entity ID>`
       *
       * @example
       * "node/1"
       *
       * @type {string}
       */
      entityID: null,

      /**
       * An entity instance ID.
       *
       * The first instance of a specific entity (i.e. with a given entity ID)
       * is assigned 0, the second 1, and so on.
       *
       * @type {number}
       */
      entityInstanceID: null,

      /**
       * The unique ID of this entity instance on the page, of the form
       * `<entity type>/<entity ID>[entity instance ID]`
       *
       * @example
       * "node/1[0]"
       *
       * @type {string}
       */
      id: null,

      /**
       * The label of the entity.
       *
       * @type {string}
       */
      label: null,

      /**
       * A FieldCollection for all fields of the entity.
       *
       * @type {Drupal.quickedit.FieldCollection}
       *
       * @see Drupal.quickedit.FieldCollection
       */
      fields: null,

      // The attributes below are stateful. The ones above will never change
      // during the life of a EntityModel instance.

      /**
       * Indicates whether this entity is currently being edited in-place.
       *
       * @type {bool}
       */
      isActive: false,

      /**
       * Whether one or more fields are already been stored in PrivateTempStore.
       *
       * @type {bool}
       */
      inTempStore: false,

      /**
       * Indicates whether a "Save" button is necessary or not.
       *
       * Whether one or more fields have already been stored in PrivateTempStore
       * *or* the field that's currently being edited is in the 'changed' or a
       * later state.
       *
       * @type {bool}
       */
      isDirty: false,

      /**
       * Whether the request to the server has been made to commit this entity.
       *
       * Used to prevent multiple such requests.
       *
       * @type {bool}
       */
      isCommitting: false,

      /**
       * The current processing state of an entity.
       *
       * @type {string}
       */
      state: 'closed',

      /**
       * IDs of fields whose new values have been stored in PrivateTempStore.
       *
       * We must store this on the EntityModel as well (even though it already
       * is on the FieldModel) because when a field is rerendered, its
       * FieldModel is destroyed and this allows us to transition it back to
       * the proper state.
       *
       * @type {Array.<string>}
       */
      fieldsInTempStore: [],

      /**
       * A flag the tells the application that this EntityModel must be reloaded
       * in order to restore the original values to its fields in the client.
       *
       * @type {bool}
       */
      reload: false
    },

    /**
     * @constructs
     *
     * @augments Drupal.quickedit.BaseModel
     */
    initialize: function () {
      this.set('fields', new Drupal.quickedit.FieldCollection());

      // Respond to entity state changes.
      this.listenTo(this, 'change:state', this.stateChange);

      // The state of the entity is largely dependent on the state of its
      // fields.
      this.listenTo(this.get('fields'), 'change:state', this.fieldStateChange);

      // Call Drupal.quickedit.BaseModel's initialize() method.
      Drupal.quickedit.BaseModel.prototype.initialize.call(this);
    },

    /**
     * Updates FieldModels' states when an EntityModel change occurs.
     *
     * @param {Drupal.quickedit.EntityModel} entityModel
     *   The entity model
     * @param {string} state
     *   The state of the associated entity. One of
     *   {@link Drupal.quickedit.EntityModel.states}.
     * @param {object} options
     *   Options for the entity model.
     */
    stateChange: function (entityModel, state, options) {
      var to = state;
      switch (to) {
        case 'closed':
          this.set({
            isActive: false,
            inTempStore: false,
            isDirty: false
          });
          break;

        case 'launching':
          break;

        case 'opening':
          // Set the fields to candidate state.
          entityModel.get('fields').each(function (fieldModel) {
            fieldModel.set('state', 'candidate', options);
          });
          break;

        case 'opened':
          // The entity is now ready for editing!
          this.set('isActive', true);
          break;

        case 'committing':
          // The user indicated they want to save the entity.
          var fields = this.get('fields');
          // For fields that are in an active state, transition them to
          // candidate.
          fields.chain()
            .filter(function (fieldModel) {
              return _.intersection([fieldModel.get('state')], ['active']).length;
            })
            .each(function (fieldModel) {
              fieldModel.set('state', 'candidate');
            });
          // For fields that are in a changed state, field values must first be
          // stored in PrivateTempStore.
          fields.chain()
            .filter(function (fieldModel) {
              return _.intersection([fieldModel.get('state')], Drupal.quickedit.app.changedFieldStates).length;
            })
            .each(function (fieldModel) {
              fieldModel.set('state', 'saving');
            });
          break;

        case 'deactivating':
          var changedFields = this.get('fields')
            .filter(function (fieldModel) {
              return _.intersection([fieldModel.get('state')], ['changed', 'invalid']).length;
            });
          // If the entity contains unconfirmed or unsaved changes, return the
          // entity to an opened state and ask the user if they would like to
          // save the changes or discard the changes.
          //   1. One of the fields is in a changed state. The changed field
          //   might just be a change in the client or it might have been saved
          //   to tempstore.
          //   2. The saved flag is empty and the confirmed flag is empty. If
          //   the entity has been saved to the server, the fields changed in
          //   the client are irrelevant. If the changes are confirmed, then
          //   proceed to set the fields to candidate state.
          if ((changedFields.length || this.get('fieldsInTempStore').length) && (!options.saved && !options.confirmed)) {
            // Cancel deactivation until the user confirms save or discard.
            this.set('state', 'opened', {confirming: true});
            // An action in reaction to state change must be deferred.
            _.defer(function () {
              Drupal.quickedit.app.confirmEntityDeactivation(entityModel);
            });
          }
          else {
            var invalidFields = this.get('fields')
              .filter(function (fieldModel) {
                return _.intersection([fieldModel.get('state')], ['invalid']).length;
              });
            // Indicate if this EntityModel needs to be reloaded in order to
            // restore the original values of its fields.
            entityModel.set('reload', (this.get('fieldsInTempStore').length || invalidFields.length));
            // Set all fields to the 'candidate' state. A changed field may have
            // to go through confirmation first.
            entityModel.get('fields').each(function (fieldModel) {
              // If the field is already in the candidate state, trigger a
              // change event so that the entityModel can move to the next state
              // in deactivation.
              if (_.intersection([fieldModel.get('state')], ['candidate', 'highlighted']).length) {
                fieldModel.trigger('change:state', fieldModel, fieldModel.get('state'), options);
              }
              else {
                fieldModel.set('state', 'candidate', options);
              }
            });
          }
          break;

        case 'closing':
          // Set all fields to the 'inactive' state.
          options.reason = 'stop';
          this.get('fields').each(function (fieldModel) {
            fieldModel.set({
              inTempStore: false,
              state: 'inactive'
            }, options);
          });
          break;
      }
    },

    /**
     * Updates a Field and Entity model's "inTempStore" when appropriate.
     *
     * Helper function.
     *
     * @param {Drupal.quickedit.EntityModel} entityModel
     *   The model of the entity for which a field's state attribute has
     *   changed.
     * @param {Drupal.quickedit.FieldModel} fieldModel
     *   The model of the field whose state attribute has changed.
     *
     * @see Drupal.quickedit.EntityModel#fieldStateChange
     */
    _updateInTempStoreAttributes: function (entityModel, fieldModel) {
      var current = fieldModel.get('state');
      var previous = fieldModel.previous('state');
      var fieldsInTempStore = entityModel.get('fieldsInTempStore');
      // If the fieldModel changed to the 'saved' state: remember that this
      // field was saved to PrivateTempStore.
      if (current === 'saved') {
        // Mark the entity as saved in PrivateTempStore, so that we can pass the
        // proper "reset PrivateTempStore" boolean value when communicating with
        // the server.
        entityModel.set('inTempStore', true);
        // Mark the field as saved in PrivateTempStore, so that visual
        // indicators signifying just that may be rendered.
        fieldModel.set('inTempStore', true);
        // Remember that this field is in PrivateTempStore, restore when
        // rerendered.
        fieldsInTempStore.push(fieldModel.get('fieldID'));
        fieldsInTempStore = _.uniq(fieldsInTempStore);
        entityModel.set('fieldsInTempStore', fieldsInTempStore);
      }
      // If the fieldModel changed to the 'candidate' state from the
      // 'inactive' state, then this is a field for this entity that got
      // rerendered. Restore its previous 'inTempStore' attribute value.
      else if (current === 'candidate' && previous === 'inactive') {
        fieldModel.set('inTempStore', _.intersection([fieldModel.get('fieldID')], fieldsInTempStore).length > 0);
      }
    },

    /**
     * Reacts to state changes in this entity's fields.
     *
     * @param {Drupal.quickedit.FieldModel} fieldModel
     *   The model of the field whose state attribute changed.
     * @param {string} state
     *   The state of the associated field. One of
     *   {@link Drupal.quickedit.FieldModel.states}.
     */
    fieldStateChange: function (fieldModel, state) {
      var entityModel = this;
      var fieldState = state;
      // Switch on the entityModel state.
      // The EntityModel responds to FieldModel state changes as a function of
      // its state. For example, a field switching back to 'candidate' state
      // when its entity is in the 'opened' state has no effect on the entity.
      // But that same switch back to 'candidate' state of a field when the
      // entity is in the 'committing' state might allow the entity to proceed
      // with the commit flow.
      switch (this.get('state')) {
        case 'closed':
        case 'launching':
          // It should be impossible to reach these: fields can't change state
          // while the entity is closed or still launching.
          break;

        case 'opening':
          // We must change the entity to the 'opened' state, but it must first
          // be confirmed that all of its fieldModels have transitioned to the
          // 'candidate' state.
          // We do this here, because this is called every time a fieldModel
          // changes state, hence each time this is called, we get closer to the
          // goal of having all fieldModels in the 'candidate' state.
          // A state change in reaction to another state change must be
          // deferred.
          _.defer(function () {
            entityModel.set('state', 'opened', {
              'accept-field-states': Drupal.quickedit.app.readyFieldStates
            });
          });
          break;

        case 'opened':
          // Set the isDirty attribute when appropriate so that it is known when
          // to display the "Save" button in the entity toolbar.
          // Note that once a field has been changed, there's no way to discard
          // that change, hence it will have to be saved into PrivateTempStore,
          // or the in-place editing of this field will have to be stopped
          // completely. In other words: once any field enters the 'changed'
          // field, then for the remainder of the in-place editing session, the
          // entity is by definition dirty.
          if (fieldState === 'changed') {
            entityModel.set('isDirty', true);
          }
          else {
            this._updateInTempStoreAttributes(entityModel, fieldModel);
          }
          break;

        case 'committing':
          // If the field save returned a validation error, set the state of the
          // entity back to 'opened'.
          if (fieldState === 'invalid') {
            // A state change in reaction to another state change must be
            // deferred.
            _.defer(function () {
              entityModel.set('state', 'opened', {reason: 'invalid'});
            });
          }
          else {
            this._updateInTempStoreAttributes(entityModel, fieldModel);
          }

          // Attempt to save the entity. If the entity's fields are not yet all
          // in a ready state, the save will not be processed.
          var options = {
            'accept-field-states': Drupal.quickedit.app.readyFieldStates
          };
          if (entityModel.set('isCommitting', true, options)) {
            entityModel.save({
              success: function () {
                entityModel.set({
                  state: 'deactivating',
                  isCommitting: false
                }, {saved: true});
              },
              error: function () {
                // Reset the "isCommitting" mutex.
                entityModel.set('isCommitting', false);
                // Change the state back to "opened", to allow the user to hit
                // the "Save" button again.
                entityModel.set('state', 'opened', {reason: 'networkerror'});
                // Show a modal to inform the user of the network error.
                var message = Drupal.t('Your changes to <q>@entity-title</q> could not be saved, either due to a website problem or a network connection problem.<br>Please try again.', {'@entity-title': entityModel.get('label')});
                Drupal.quickedit.util.networkErrorModal(Drupal.t('Network problem!'), message);
              }
            });
          }
          break;

        case 'deactivating':
          // When setting the entity to 'closing', require that all fieldModels
          // are in either the 'candidate' or 'highlighted' state.
          // A state change in reaction to another state change must be
          // deferred.
          _.defer(function () {
            entityModel.set('state', 'closing', {
              'accept-field-states': Drupal.quickedit.app.readyFieldStates
            });
          });
          break;

        case 'closing':
          // When setting the entity to 'closed', require that all fieldModels
          // are in the 'inactive' state.
          // A state change in reaction to another state change must be
          // deferred.
          _.defer(function () {
            entityModel.set('state', 'closed', {
              'accept-field-states': ['inactive']
            });
          });
          break;
      }
    },

    /**
     * Fires an AJAX request to the REST save URL for an entity.
     *
     * @param {object} options
     *   An object of options that contains:
     * @param {function} [options.success]
     *   A function to invoke if the entity is successfully saved.
     */
    save: function (options) {
      var entityModel = this;

      // Create a Drupal.ajax instance to save the entity.
      var entitySaverAjax = Drupal.ajax({
        url: Drupal.url('quickedit/entity/' + entityModel.get('entityID')),
        error: function () {
          // Let the Drupal.quickedit.EntityModel Backbone model's error()
          // method handle errors.
          options.error.call(entityModel);
        }
      });
      // Entity saved successfully.
      entitySaverAjax.commands.quickeditEntitySaved = function (ajax, response, status) {
        // All fields have been moved from PrivateTempStore to permanent
        // storage, update the "inTempStore" attribute on FieldModels, on the
        // EntityModel and clear EntityModel's "fieldInTempStore" attribute.
        entityModel.get('fields').each(function (fieldModel) {
          fieldModel.set('inTempStore', false);
        });
        entityModel.set('inTempStore', false);
        entityModel.set('fieldsInTempStore', []);

        // Invoke the optional success callback.
        if (options.success) {
          options.success.call(entityModel);
        }
      };
      // Trigger the AJAX request, which will will return the
      // quickeditEntitySaved AJAX command to which we then react.
      entitySaverAjax.execute();
    },

    /**
     * Validate the entity model.
     *
     * @param {object} attrs
     *   The attributes changes in the save or set call.
     * @param {object} options
     *   An object with the following option:
     * @param {string} [options.reason]
     *   A string that conveys a particular reason to allow for an exceptional
     *   state change.
     * @param {Array} options.accept-field-states
     *   An array of strings that represent field states that the entities must
     *   be in to validate. For example, if `accept-field-states` is
     *   `['candidate', 'highlighted']`, then all the fields of the entity must
     *   be in either of these two states for the save or set call to
     *   validate and proceed.
     *
     * @return {string}
     *   A string to say something about the state of the entity model.
     */
    validate: function (attrs, options) {
      var acceptedFieldStates = options['accept-field-states'] || [];

      // Validate state change.
      var currentState = this.get('state');
      var nextState = attrs.state;
      if (currentState !== nextState) {
        // Ensure it's a valid state.
        if (_.indexOf(this.constructor.states, nextState) === -1) {
          return '"' + nextState + '" is an invalid state';
        }

        // Ensure it's a state change that is allowed.
        // Check if the acceptStateChange function accepts it.
        if (!this._acceptStateChange(currentState, nextState, options)) {
          return 'state change not accepted';
        }
        // If that function accepts it, then ensure all fields are also in an
        // acceptable state.
        else if (!this._fieldsHaveAcceptableStates(acceptedFieldStates)) {
          return 'state change not accepted because fields are not in acceptable state';
        }
      }

      // Validate setting isCommitting = true.
      var currentIsCommitting = this.get('isCommitting');
      var nextIsCommitting = attrs.isCommitting;
      if (currentIsCommitting === false && nextIsCommitting === true) {
        if (!this._fieldsHaveAcceptableStates(acceptedFieldStates)) {
          return 'isCommitting change not accepted because fields are not in acceptable state';
        }
      }
      else if (currentIsCommitting === true && nextIsCommitting === true) {
        return 'isCommitting is a mutex, hence only changes are allowed';
      }
    },

    /**
     * Checks if a state change can be accepted.
     *
     * @param {string} from
     *   From state.
     * @param {string} to
     *   To state.
     * @param {object} context
     *   Context for the check.
     * @param {string} context.reason
     *   The reason for the state change.
     * @param {bool} context.confirming
     *   Whether context is confirming or not.
     *
     * @return {bool}
     *   Whether the state change is accepted or not.
     *
     * @see Drupal.quickedit.AppView#acceptEditorStateChange
     */
    _acceptStateChange: function (from, to, context) {
      var accept = true;

      // In general, enforce the states sequence. Disallow going back from a
      // "later" state to an "earlier" state, except in explicitly allowed
      // cases.
      if (!this.constructor.followsStateSequence(from, to)) {
        accept = false;

        // Allow: closing -> closed.
        // Necessary to stop editing an entity.
        if (from === 'closing' && to === 'closed') {
          accept = true;
        }
        // Allow: committing -> opened.
        // Necessary to be able to correct an invalid field, or to hit the
        // "Save" button again after a server/network error.
        else if (from === 'committing' && to === 'opened' && context.reason && (context.reason === 'invalid' || context.reason === 'networkerror')) {
          accept = true;
        }
        // Allow: deactivating -> opened.
        // Necessary to be able to confirm changes with the user.
        else if (from === 'deactivating' && to === 'opened' && context.confirming) {
          accept = true;
        }
        // Allow: opened -> deactivating.
        // Necessary to be able to stop editing.
        else if (from === 'opened' && to === 'deactivating' && context.confirmed) {
          accept = true;
        }
      }

      return accept;
    },

    /**
     * Checks if fields have acceptable states.
     *
     * @param {Array} acceptedFieldStates
     *   An array of acceptable field states to check for.
     *
     * @return {bool}
     *   Whether the fields have an acceptable state.
     *
     * @see Drupal.quickedit.EntityModel#validate
     */
    _fieldsHaveAcceptableStates: function (acceptedFieldStates) {
      var accept = true;

      // If no acceptable field states are provided, assume all field states are
      // acceptable. We want to let validation pass as a default and only
      // check validity on calls to set that explicitly request it.
      if (acceptedFieldStates.length > 0) {
        var fieldStates = this.get('fields').pluck('state') || [];
        // If not all fields are in one of the accepted field states, then we
        // still can't allow this state change.
        if (_.difference(fieldStates, acceptedFieldStates).length) {
          accept = false;
        }
      }

      return accept;
    },

    /**
     * Destroys the entity model.
     *
     * @param {object} options
     *   Options for the entity model.
     */
    destroy: function (options) {
      Drupal.quickedit.BaseModel.prototype.destroy.call(this, options);

      this.stopListening();

      // Destroy all fields of this entity.
      this.get('fields').reset();
    },

    /**
     * @inheritdoc
     */
    sync: function () {
      // We don't use REST updates to sync.
      return;
    }

  }, /** @lends Drupal.quickedit.EntityModel */{

    /**
     * Sequence of all possible states an entity can be in during quickediting.
     *
     * @type {Array.<string>}
     */
    states: [
      // Initial state, like field's 'inactive' OR the user has just finished
      // in-place editing this entity.
      // - Trigger: none (initial) or EntityModel (finished).
      // - Expected behavior: (when not initial state): tear down
      //   EntityToolbarView, in-place editors and related views.
      'closed',
      // User has activated in-place editing of this entity.
      // - Trigger: user.
      // - Expected behavior: the EntityToolbarView is gets set up, in-place
      //   editors (EditorViews) and related views for this entity's fields are
      //   set up. Upon completion of those, the state is changed to 'opening'.
      'launching',
      // Launching has finished.
      // - Trigger: application.
      // - Guarantees: in-place editors ready for use, all entity and field
      //   views have been set up, all fields are in the 'inactive' state.
      // - Expected behavior: all fields are changed to the 'candidate' state
      //   and once this is completed, the entity state will be changed to
      //   'opened'.
      'opening',
      // Opening has finished.
      // - Trigger: EntityModel.
      // - Guarantees: see 'opening', all fields are in the 'candidate' state.
      // - Expected behavior: the user is able to actually use in-place editing.
      'opened',
      // User has clicked the 'Save' button (and has thus changed at least one
      // field).
      // - Trigger: user.
      // - Guarantees: see 'opened', plus: either a changed field is in
      //   PrivateTempStore, or the user has just modified a field without
      //   activating (switching to) another field.
      // - Expected behavior: 1) if any of the fields are not yet in
      //   PrivateTempStore, save them to PrivateTempStore, 2) if then any of
      //   the fields has the 'invalid' state, then change the entity state back
      //   to 'opened', otherwise: save the entity by committing it from
      //   PrivateTempStore into permanent storage.
      'committing',
      // User has clicked the 'Close' button, or has clicked the 'Save' button
      // and that was successfully completed.
      // - Trigger: user or EntityModel.
      // - Guarantees: when having clicked 'Close' hardly any: fields may be in
      //   a variety of states; when having clicked 'Save': all fields are in
      //   the 'candidate' state.
      // - Expected behavior: transition all fields to the 'candidate' state,
      //   possibly requiring confirmation in the case of having clicked
      //   'Close'.
      'deactivating',
      // Deactivation has been completed.
      // - Trigger: EntityModel.
      // - Guarantees: all fields are in the 'candidate' state.
      // - Expected behavior: change all fields to the 'inactive' state.
      'closing'
    ],

    /**
     * Indicates whether the 'from' state comes before the 'to' state.
     *
     * @param {string} from
     *   One of {@link Drupal.quickedit.EntityModel.states}.
     * @param {string} to
     *   One of {@link Drupal.quickedit.EntityModel.states}.
     *
     * @return {bool}
     *   Whether the 'from' state comes before the 'to' state.
     */
    followsStateSequence: function (from, to) {
      return _.indexOf(this.states, from) < _.indexOf(this.states, to);
    }

  });

  /**
   * @constructor
   *
   * @augments Backbone.Collection
   */
  Drupal.quickedit.EntityCollection = Backbone.Collection.extend(/** @lends Drupal.quickedit.EntityCollection# */{

    /**
     * @type {Drupal.quickedit.EntityModel}
     */
    model: Drupal.quickedit.EntityModel
  });

}(_, jQuery, Backbone, Drupal));
;
/**
 * @file
 * A Backbone Model for the state of an in-place editable field in the DOM.
 */

(function (_, Backbone, Drupal) {

  'use strict';

  Drupal.quickedit.FieldModel = Drupal.quickedit.BaseModel.extend(/** @lends Drupal.quickedit.FieldModel# */{

    /**
     * @type {object}
     */
    defaults: /** @lends Drupal.quickedit.FieldModel# */{

      /**
       * The DOM element that represents this field. It may seem bizarre to have
       * a DOM element in a Backbone Model, but we need to be able to map fields
       * in the DOM to FieldModels in memory.
       */
      el: null,

      /**
       * A field ID, of the form
       * `<entity type>/<id>/<field name>/<language>/<view mode>`
       *
       * @example
       * "node/1/field_tags/und/full"
       */
      fieldID: null,

      /**
       * The unique ID of this field within its entity instance on the page, of
       * the form `<entity type>/<id>/<field name>/<language>/<view
       * mode>[entity instance ID]`.
       *
       * @example
       * "node/1/field_tags/und/full[0]"
       */
      id: null,

      /**
       * A {@link Drupal.quickedit.EntityModel}. Its "fields" attribute, which
       * is a FieldCollection, is automatically updated to include this
       * FieldModel.
       */
      entity: null,

      /**
       * This field's metadata as returned by the
       * QuickEditController::metadata().
       */
      metadata: null,

      /**
       * Callback function for validating changes between states. Receives the
       * previous state, new state, context, and a callback.
       */
      acceptStateChange: null,

      /**
       * A logical field ID, of the form
       * `<entity type>/<id>/<field name>/<language>`, i.e. the fieldID without
       * the view mode, to be able to identify other instances of the same
       * field on the page but rendered in a different view mode.
       *
       * @example
       * "node/1/field_tags/und".
       */
      logicalFieldID: null,

      // The attributes below are stateful. The ones above will never change
      // during the life of a FieldModel instance.

      /**
       * In-place editing state of this field. Defaults to the initial state.
       * Possible values: {@link Drupal.quickedit.FieldModel.states}.
       */
      state: 'inactive',

      /**
       * The field is currently in the 'changed' state or one of the following
       * states in which the field is still changed.
       */
      isChanged: false,

      /**
       * Is tracked by the EntityModel, is mirrored here solely for decorative
       * purposes: so that FieldDecorationView.renderChanged() can react to it.
       */
      inTempStore: false,

      /**
       * The full HTML representation of this field (with the element that has
       * the data-quickedit-field-id as the outer element). Used to propagate
       * changes from this field to other instances of the same field storage.
       */
      html: null,

      /**
       * An object containing the full HTML representations (values) of other
       * view modes (keys) of this field, for other instances of this field
       * displayed in a different view mode.
       */
      htmlForOtherViewModes: null
    },

    /**
     * State of an in-place editable field in the DOM.
     *
     * @constructs
     *
     * @augments Drupal.quickedit.BaseModel
     *
     * @param {object} options
     *   Options for the field model.
     */
    initialize: function (options) {
      // Store the original full HTML representation of this field.
      this.set('html', options.el.outerHTML);

      // Enlist field automatically in the associated entity's field collection.
      this.get('entity').get('fields').add(this);

      // Automatically generate the logical field ID.
      this.set('logicalFieldID', this.get('fieldID').split('/').slice(0, 4).join('/'));

      // Call Drupal.quickedit.BaseModel's initialize() method.
      Drupal.quickedit.BaseModel.prototype.initialize.call(this, options);
    },

    /**
     * Destroys the field model.
     *
     * @param {object} options
     *   Options for the field model.
     */
    destroy: function (options) {
      if (this.get('state') !== 'inactive') {
        throw new Error('FieldModel cannot be destroyed if it is not inactive state.');
      }
      Drupal.quickedit.BaseModel.prototype.destroy.call(this, options);
    },

    /**
     * @inheritdoc
     */
    sync: function () {
      // We don't use REST updates to sync.
      return;
    },

    /**
     * Validate function for the field model.
     *
     * @param {object} attrs
     *   The attributes changes in the save or set call.
     * @param {object} options
     *   An object with the following option:
     * @param {string} [options.reason]
     *   A string that conveys a particular reason to allow for an exceptional
     *   state change.
     * @param {Array} options.accept-field-states
     *   An array of strings that represent field states that the entities must
     *   be in to validate. For example, if `accept-field-states` is
     *   `['candidate', 'highlighted']`, then all the fields of the entity must
     *   be in either of these two states for the save or set call to
     *   validate and proceed.
     *
     * @return {string}
     *   A string to say something about the state of the field model.
     */
    validate: function (attrs, options) {
      var current = this.get('state');
      var next = attrs.state;
      if (current !== next) {
        // Ensure it's a valid state.
        if (_.indexOf(this.constructor.states, next) === -1) {
          return '"' + next + '" is an invalid state';
        }
        // Check if the acceptStateChange callback accepts it.
        if (!this.get('acceptStateChange')(current, next, options, this)) {
          return 'state change not accepted';
        }
      }
    },

    /**
     * Extracts the entity ID from this field's ID.
     *
     * @return {string}
     *   An entity ID: a string of the format `<entity type>/<id>`.
     */
    getEntityID: function () {
      return this.get('fieldID').split('/').slice(0, 2).join('/');
    },

    /**
     * Extracts the view mode ID from this field's ID.
     *
     * @return {string}
     *   A view mode ID.
     */
    getViewMode: function () {
      return this.get('fieldID').split('/').pop();
    },

    /**
     * Find other instances of this field with different view modes.
     *
     * @return {Array}
     *   An array containing view mode IDs.
     */
    findOtherViewModes: function () {
      var currentField = this;
      var otherViewModes = [];
      Drupal.quickedit.collections.fields
        // Find all instances of fields that display the same logical field
        // (same entity, same field, just a different instance and maybe a
        // different view mode).
        .where({logicalFieldID: currentField.get('logicalFieldID')})
        .forEach(function (field) {
          // Ignore the current field.
          if (field === currentField) {
            return;
          }
          // Also ignore other fields with the same view mode.
          else if (field.get('fieldID') === currentField.get('fieldID')) {
            return;
          }
          else {
            otherViewModes.push(field.getViewMode());
          }
        });
      return otherViewModes;
    }

  }, /** @lends Drupal.quickedit.FieldModel */{

    /**
     * Sequence of all possible states a field can be in during quickediting.
     *
     * @type {Array.<string>}
     */
    states: [
      // The field associated with this FieldModel is linked to an EntityModel;
      // the user can choose to start in-place editing that entity (and
      // consequently this field). No in-place editor (EditorView) is associated
      // with this field, because this field is not being in-place edited.
      // This is both the initial (not yet in-place editing) and the end state
      // (finished in-place editing).
      'inactive',
      // The user is in-place editing this entity, and this field is a
      // candidate
      // for in-place editing. In-place editor should not
      // - Trigger: user.
      // - Guarantees: entity is ready, in-place editor (EditorView) is
      //   associated with the field.
      // - Expected behavior: visual indicators
      //   around the field indicate it is available for in-place editing, no
      //   in-place editor presented yet.
      'candidate',
      // User is highlighting this field.
      // - Trigger: user.
      // - Guarantees: see 'candidate'.
      // - Expected behavior: visual indicators to convey highlighting, in-place
      //   editing toolbar shows field's label.
      'highlighted',
      // User has activated the in-place editing of this field; in-place editor
      // is activating.
      // - Trigger: user.
      // - Guarantees: see 'candidate'.
      // - Expected behavior: loading indicator, in-place editor is loading
      //   remote data (e.g. retrieve form from back-end). Upon retrieval of
      //   remote data, the in-place editor transitions the field's state to
      //   'active'.
      'activating',
      // In-place editor has finished loading remote data; ready for use.
      // - Trigger: in-place editor.
      // - Guarantees: see 'candidate'.
      // - Expected behavior: in-place editor for the field is ready for use.
      'active',
      // User has modified values in the in-place editor.
      // - Trigger: user.
      // - Guarantees: see 'candidate', plus in-place editor is ready for use.
      // - Expected behavior: visual indicator of change.
      'changed',
      // User is saving changed field data in in-place editor to
      // PrivateTempStore. The save mechanism of the in-place editor is called.
      // - Trigger: user.
      // - Guarantees: see 'candidate' and 'active'.
      // - Expected behavior: saving indicator, in-place editor is saving field
      //   data into PrivateTempStore. Upon successful saving (without
      //   validation errors), the in-place editor transitions the field's state
      //   to 'saved', but to 'invalid' upon failed saving (with validation
      //   errors).
      'saving',
      // In-place editor has successfully saved the changed field.
      // - Trigger: in-place editor.
      // - Guarantees: see 'candidate' and 'active'.
      // - Expected behavior: transition back to 'candidate' state because the
      //   deed is done. Then: 1) transition to 'inactive' to allow the field
      //   to be rerendered, 2) destroy the FieldModel (which also destroys
      //   attached views like the EditorView), 3) replace the existing field
      //   HTML with the existing HTML and 4) attach behaviors again so that the
      //   field becomes available again for in-place editing.
      'saved',
      // In-place editor has failed to saved the changed field: there were
      // validation errors.
      // - Trigger: in-place editor.
      // - Guarantees: see 'candidate' and 'active'.
      // - Expected behavior: remain in 'invalid' state, let the user make more
      //   changes so that he can save it again, without validation errors.
      'invalid'
    ],

    /**
     * Indicates whether the 'from' state comes before the 'to' state.
     *
     * @param {string} from
     *   One of {@link Drupal.quickedit.FieldModel.states}.
     * @param {string} to
     *   One of {@link Drupal.quickedit.FieldModel.states}.
     *
     * @return {bool}
     *   Whether the 'from' state comes before the 'to' state.
     */
    followsStateSequence: function (from, to) {
      return _.indexOf(this.states, from) < _.indexOf(this.states, to);
    }

  });

  /**
   * @constructor
   *
   * @augments Backbone.Collection
   */
  Drupal.quickedit.FieldCollection = Backbone.Collection.extend(/** @lends Drupal.quickedit.FieldCollection */{

    /**
     * @type {Drupal.quickedit.FieldModel}
     */
    model: Drupal.quickedit.FieldModel
  });

}(_, Backbone, Drupal));
;
/**
 * @file
 * A Backbone Model for the state of an in-place editor.
 *
 * @see Drupal.quickedit.EditorView
 */

(function (Backbone, Drupal) {

  'use strict';

  /**
   * @constructor
   *
   * @augments Backbone.Model
   */
  Drupal.quickedit.EditorModel = Backbone.Model.extend(/** @lends Drupal.quickedit.EditorModel# */{

    /**
     * @type {object}
     *
     * @prop {string} originalValue
     * @prop {string} currentValue
     * @prop {Array} validationErrors
     */
    defaults: /** @lends Drupal.quickedit.EditorModel# */{

      /**
       * Not the full HTML representation of this field, but the "actual"
       * original value of the field, stored by the used in-place editor, and
       * in a representation that can be chosen by the in-place editor.
       *
       * @type {string}
       */
      originalValue: null,

      /**
       * Analogous to originalValue, but the current value.
       *
       * @type {string}
       */
      currentValue: null,

      /**
       * Stores any validation errors to be rendered.
       *
       * @type {Array}
       */
      validationErrors: null
    }

  });

}(Backbone, Drupal));
;
/**
 * @file
 * A Backbone View that controls the overall "in-place editing application".
 *
 * @see Drupal.quickedit.AppModel
 */

(function ($, _, Backbone, Drupal) {

  'use strict';

  // Indicates whether the page should be reloaded after in-place editing has
  // shut down. A page reload is necessary to re-instate the original HTML of
  // the edited fields if in-place editing has been canceled and one or more of
  // the entity's fields were saved to PrivateTempStore: one of them may have
  // been changed to the empty value and hence may have been rerendered as the
  // empty string, which makes it impossible for Quick Edit to know where to
  // restore the original HTML.
  var reload = false;

  Drupal.quickedit.AppView = Backbone.View.extend(/** @lends Drupal.quickedit.AppView# */{

    /**
     * @constructs
     *
     * @augments Backbone.View
     *
     * @param {object} options
     *   An object with the following keys:
     * @param {Drupal.quickedit.AppModel} options.model
     *   The application state model.
     * @param {Drupal.quickedit.EntityCollection} options.entitiesCollection
     *   All on-page entities.
     * @param {Drupal.quickedit.FieldCollection} options.fieldsCollection
     *   All on-page fields
     */
    initialize: function (options) {
      // AppView's configuration for handling states.
      // @see Drupal.quickedit.FieldModel.states
      this.activeFieldStates = ['activating', 'active'];
      this.singleFieldStates = ['highlighted', 'activating', 'active'];
      this.changedFieldStates = ['changed', 'saving', 'saved', 'invalid'];
      this.readyFieldStates = ['candidate', 'highlighted'];

      // Track app state.
      this.listenTo(options.entitiesCollection, 'change:state', this.appStateChange);
      this.listenTo(options.entitiesCollection, 'change:isActive', this.enforceSingleActiveEntity);

      // Track app state.
      this.listenTo(options.fieldsCollection, 'change:state', this.editorStateChange);
      // Respond to field model HTML representation change events.
      this.listenTo(options.fieldsCollection, 'change:html', this.renderUpdatedField);
      this.listenTo(options.fieldsCollection, 'change:html', this.propagateUpdatedField);
      // Respond to addition.
      this.listenTo(options.fieldsCollection, 'add', this.rerenderedFieldToCandidate);
      // Respond to destruction.
      this.listenTo(options.fieldsCollection, 'destroy', this.teardownEditor);
    },

    /**
     * Handles setup/teardown and state changes when the active entity changes.
     *
     * @param {Drupal.quickedit.EntityModel} entityModel
     *   An instance of the EntityModel class.
     * @param {string} state
     *   The state of the associated field. One of
     *   {@link Drupal.quickedit.EntityModel.states}.
     */
    appStateChange: function (entityModel, state) {
      var app = this;
      var entityToolbarView;
      switch (state) {
        case 'launching':
          reload = false;
          // First, create an entity toolbar view.
          entityToolbarView = new Drupal.quickedit.EntityToolbarView({
            model: entityModel,
            appModel: this.model
          });
          entityModel.toolbarView = entityToolbarView;
          // Second, set up in-place editors.
          // They must be notified of state changes, hence this must happen
          // while the associated fields are still in the 'inactive' state.
          entityModel.get('fields').each(function (fieldModel) {
            app.setupEditor(fieldModel);
          });
          // Third, transition the entity to the 'opening' state, which will
          // transition all fields from 'inactive' to 'candidate'.
          _.defer(function () {
            entityModel.set('state', 'opening');
          });
          break;

        case 'closed':
          entityToolbarView = entityModel.toolbarView;
          // First, tear down the in-place editors.
          entityModel.get('fields').each(function (fieldModel) {
            app.teardownEditor(fieldModel);
          });
          // Second, tear down the entity toolbar view.
          if (entityToolbarView) {
            entityToolbarView.remove();
            delete entityModel.toolbarView;
          }
          // A page reload may be necessary to re-instate the original HTML of
          // the edited fields.
          if (reload) {
            reload = false;
            location.reload();
          }
          break;
      }
    },

    /**
     * Accepts or reject editor (Editor) state changes.
     *
     * This is what ensures that the app is in control of what happens.
     *
     * @param {string} from
     *   The previous state.
     * @param {string} to
     *   The new state.
     * @param {null|object} context
     *   The context that is trying to trigger the state change.
     * @param {Drupal.quickedit.FieldModel} fieldModel
     *   The fieldModel to which this change applies.
     *
     * @return {bool}
     *   Whether the editor change was accepted or rejected.
     */
    acceptEditorStateChange: function (from, to, context, fieldModel) {
      var accept = true;

      // If the app is in view mode, then reject all state changes except for
      // those to 'inactive'.
      if (context && (context.reason === 'stop' || context.reason === 'rerender')) {
        if (from === 'candidate' && to === 'inactive') {
          accept = true;
        }
      }
      // Handling of edit mode state changes is more granular.
      else {
        // In general, enforce the states sequence. Disallow going back from a
        // "later" state to an "earlier" state, except in explicitly allowed
        // cases.
        if (!Drupal.quickedit.FieldModel.followsStateSequence(from, to)) {
          accept = false;
          // Allow: activating/active -> candidate.
          // Necessary to stop editing a field.
          if (_.indexOf(this.activeFieldStates, from) !== -1 && to === 'candidate') {
            accept = true;
          }
          // Allow: changed/invalid -> candidate.
          // Necessary to stop editing a field when it is changed or invalid.
          else if ((from === 'changed' || from === 'invalid') && to === 'candidate') {
            accept = true;
          }
          // Allow: highlighted -> candidate.
          // Necessary to stop highlighting a field.
          else if (from === 'highlighted' && to === 'candidate') {
            accept = true;
          }
          // Allow: saved -> candidate.
          // Necessary when successfully saved a field.
          else if (from === 'saved' && to === 'candidate') {
            accept = true;
          }
          // Allow: invalid -> saving.
          // Necessary to be able to save a corrected, invalid field.
          else if (from === 'invalid' && to === 'saving') {
            accept = true;
          }
          // Allow: invalid -> activating.
          // Necessary to be able to correct a field that turned out to be
          // invalid after the user already had moved on to the next field
          // (which we explicitly allow to have a fluent UX).
          else if (from === 'invalid' && to === 'activating') {
            accept = true;
          }
        }

        // If it's not against the general principle, then here are more
        // disallowed cases to check.
        if (accept) {
          var activeField;
          var activeFieldState;
          // Ensure only one field (editor) at a time is active … but allow a
          // user to hop from one field to the next, even if we still have to
          // start saving the field that is currently active: assume it will be
          // valid, to allow for a fluent UX. (If it turns out to be invalid,
          // this block of code also handles that.)
          if ((this.readyFieldStates.indexOf(from) !== -1 || from === 'invalid') && this.activeFieldStates.indexOf(to) !== -1) {
            activeField = this.model.get('activeField');
            if (activeField && activeField !== fieldModel) {
              activeFieldState = activeField.get('state');
              // Allow the state change. If the state of the active field is:
              // - 'activating' or 'active': change it to 'candidate'
              // - 'changed' or 'invalid': change it to 'saving'
              // - 'saving' or 'saved': don't do anything.
              if (this.activeFieldStates.indexOf(activeFieldState) !== -1) {
                activeField.set('state', 'candidate');
              }
              else if (activeFieldState === 'changed' || activeFieldState === 'invalid') {
                activeField.set('state', 'saving');
              }

              // If the field that's being activated is in fact already in the
              // invalid state (which can only happen because above we allowed
              // the user to move on to another field to allow for a fluent UX;
              // we assumed it would be saved successfully), then we shouldn't
              // allow the field to enter the 'activating' state, instead, we
              // simply change the active editor. All guarantees and
              // assumptions for this field still hold!
              if (from === 'invalid') {
                this.model.set('activeField', fieldModel);
                accept = false;
              }
              // Do not reject: the field is either in the 'candidate' or
              // 'highlighted' state and we allow it to enter the 'activating'
              // state!
            }
          }
          // Reject going from activating/active to candidate because of a
          // mouseleave.
          else if (_.indexOf(this.activeFieldStates, from) !== -1 && to === 'candidate') {
            if (context && context.reason === 'mouseleave') {
              accept = false;
            }
          }
          // When attempting to stop editing a changed/invalid property, ask for
          // confirmation.
          else if ((from === 'changed' || from === 'invalid') && to === 'candidate') {
            if (context && context.reason === 'mouseleave') {
              accept = false;
            }
            else {
              // Check whether the transition has been confirmed?
              if (context && context.confirmed) {
                accept = true;
              }
            }
          }
        }
      }

      return accept;
    },

    /**
     * Sets up the in-place editor for the given field.
     *
     * Must happen before the fieldModel's state is changed to 'candidate'.
     *
     * @param {Drupal.quickedit.FieldModel} fieldModel
     *   The field for which an in-place editor must be set up.
     */
    setupEditor: function (fieldModel) {
      // Get the corresponding entity toolbar.
      var entityModel = fieldModel.get('entity');
      var entityToolbarView = entityModel.toolbarView;
      // Get the field toolbar DOM root from the entity toolbar.
      var fieldToolbarRoot = entityToolbarView.getToolbarRoot();
      // Create in-place editor.
      var editorName = fieldModel.get('metadata').editor;
      var editorModel = new Drupal.quickedit.EditorModel();
      var editorView = new Drupal.quickedit.editors[editorName]({
        el: $(fieldModel.get('el')),
        model: editorModel,
        fieldModel: fieldModel
      });

      // Create in-place editor's toolbar for this field — stored inside the
      // entity toolbar, the entity toolbar will position itself appropriately
      // above (or below) the edited element.
      var toolbarView = new Drupal.quickedit.FieldToolbarView({
        el: fieldToolbarRoot,
        model: fieldModel,
        $editedElement: $(editorView.getEditedElement()),
        editorView: editorView,
        entityModel: entityModel
      });

      // Create decoration for edited element: padding if necessary, sets
      // classes on the element to style it according to the current state.
      var decorationView = new Drupal.quickedit.FieldDecorationView({
        el: $(editorView.getEditedElement()),
        model: fieldModel,
        editorView: editorView
      });

      // Track these three views in FieldModel so that we can tear them down
      // correctly.
      fieldModel.editorView = editorView;
      fieldModel.toolbarView = toolbarView;
      fieldModel.decorationView = decorationView;
    },

    /**
     * Tears down the in-place editor for the given field.
     *
     * Must happen after the fieldModel's state is changed to 'inactive'.
     *
     * @param {Drupal.quickedit.FieldModel} fieldModel
     *   The field for which an in-place editor must be torn down.
     */
    teardownEditor: function (fieldModel) {
      // Early-return if this field was not yet decorated.
      if (typeof fieldModel.editorView === 'undefined') {
        return;
      }

      // Unbind event handlers; remove toolbar element; delete toolbar view.
      fieldModel.toolbarView.remove();
      delete fieldModel.toolbarView;

      // Unbind event handlers; delete decoration view. Don't remove the element
      // because that would remove the field itself.
      fieldModel.decorationView.remove();
      delete fieldModel.decorationView;

      // Unbind event handlers; delete editor view. Don't remove the element
      // because that would remove the field itself.
      fieldModel.editorView.remove();
      delete fieldModel.editorView;
    },

    /**
     * Asks the user to confirm whether he wants to stop editing via a modal.
     *
     * @param {Drupal.quickedit.EntityModel} entityModel
     *   An instance of the EntityModel class.
     *
     * @see Drupal.quickedit.AppView#acceptEditorStateChange
     */
    confirmEntityDeactivation: function (entityModel) {
      var that = this;
      var discardDialog;

      function closeDiscardDialog(action) {
        discardDialog.close(action);
        // The active modal has been removed.
        that.model.set('activeModal', null);

        // If the targetState is saving, the field must be saved, then the
        // entity must be saved.
        if (action === 'save') {
          entityModel.set('state', 'committing', {confirmed: true});
        }
        else {
          entityModel.set('state', 'deactivating', {confirmed: true});
          // Editing has been canceled and the changes will not be saved. Mark
          // the page for reload if the entityModel declares that it requires
          // a reload.
          if (entityModel.get('reload')) {
            reload = true;
            entityModel.set('reload', false);
          }
        }
      }

      // Only instantiate if there isn't a modal instance visible yet.
      if (!this.model.get('activeModal')) {
        var $unsavedChanges = $('<div>' + Drupal.t('You have unsaved changes') + '</div>');
        discardDialog = Drupal.dialog($unsavedChanges.get(0), {
          title: Drupal.t('Discard changes?'),
          dialogClass: 'quickedit-discard-modal',
          resizable: false,
          buttons: [
            {
              text: Drupal.t('Save'),
              click: function () {
                closeDiscardDialog('save');
              },
              primary: true
            },
            {
              text: Drupal.t('Discard changes'),
              click: function () {
                closeDiscardDialog('discard');
              }
            }
          ],
          // Prevent this modal from being closed without the user making a
          // choice as per http://stackoverflow.com/a/5438771.
          closeOnEscape: false,
          create: function () {
            $(this).parent().find('.ui-dialog-titlebar-close').remove();
          },
          beforeClose: false,
          close: function (event) {
            // Automatically destroy the DOM element that was used for the
            // dialog.
            $(event.target).remove();
          }
        });
        this.model.set('activeModal', discardDialog);

        discardDialog.showModal();
      }
    },

    /**
     * Reacts to field state changes; tracks global state.
     *
     * @param {Drupal.quickedit.FieldModel} fieldModel
     *   The `fieldModel` holding the state.
     * @param {string} state
     *   The state of the associated field. One of
     *   {@link Drupal.quickedit.FieldModel.states}.
     */
    editorStateChange: function (fieldModel, state) {
      var from = fieldModel.previous('state');
      var to = state;

      // Keep track of the highlighted field in the global state.
      if (_.indexOf(this.singleFieldStates, to) !== -1 && this.model.get('highlightedField') !== fieldModel) {
        this.model.set('highlightedField', fieldModel);
      }
      else if (this.model.get('highlightedField') === fieldModel && to === 'candidate') {
        this.model.set('highlightedField', null);
      }

      // Keep track of the active field in the global state.
      if (_.indexOf(this.activeFieldStates, to) !== -1 && this.model.get('activeField') !== fieldModel) {
        this.model.set('activeField', fieldModel);
      }
      else if (this.model.get('activeField') === fieldModel && to === 'candidate') {
        // Discarded if it transitions from a changed state to 'candidate'.
        if (from === 'changed' || from === 'invalid') {
          fieldModel.editorView.revert();
        }
        this.model.set('activeField', null);
      }
    },

    /**
     * Render an updated field (a field whose 'html' attribute changed).
     *
     * @param {Drupal.quickedit.FieldModel} fieldModel
     *   The FieldModel whose 'html' attribute changed.
     * @param {string} html
     *   The updated 'html' attribute.
     * @param {object} options
     *   An object with the following keys:
     * @param {bool} options.propagation
     *   Whether this change to the 'html' attribute occurred because of the
     *   propagation of changes to another instance of this field.
     */
    renderUpdatedField: function (fieldModel, html, options) {
      // Get data necessary to rerender property before it is unavailable.
      var $fieldWrapper = $(fieldModel.get('el'));
      var $context = $fieldWrapper.parent();

      var renderField = function () {
        // Destroy the field model; this will cause all attached views to be
        // destroyed too, and removal from all collections in which it exists.
        fieldModel.destroy();

        // Replace the old content with the new content.
        $fieldWrapper.replaceWith(html);

        // Attach behaviors again to the modified piece of HTML; this will
        // create a new field model and call rerenderedFieldToCandidate() with
        // it.
        Drupal.attachBehaviors($context.get(0));
      };

      // When propagating the changes of another instance of this field, this
      // field is not being actively edited and hence no state changes are
      // necessary. So: only update the state of this field when the rerendering
      // of this field happens not because of propagation, but because it is
      // being edited itself.
      if (!options.propagation) {
        // Deferred because renderUpdatedField is reacting to a field model
        // change event, and we want to make sure that event fully propagates
        // before making another change to the same model.
        _.defer(function () {
          // First set the state to 'candidate', to allow all attached views to
          // clean up all their "active state"-related changes.
          fieldModel.set('state', 'candidate');

          // Similarly, the above .set() call's change event must fully
          // propagate before calling it again.
          _.defer(function () {
            // Set the field's state to 'inactive', to enable the updating of
            // its DOM value.
            fieldModel.set('state', 'inactive', {reason: 'rerender'});

            renderField();
          });
        });
      }
      else {
        renderField();
      }
    },

    /**
     * Propagates changes to an updated field to all instances of that field.
     *
     * @param {Drupal.quickedit.FieldModel} updatedField
     *   The FieldModel whose 'html' attribute changed.
     * @param {string} html
     *   The updated 'html' attribute.
     * @param {object} options
     *   An object with the following keys:
     * @param {bool} options.propagation
     *   Whether this change to the 'html' attribute occurred because of the
     *   propagation of changes to another instance of this field.
     *
     * @see Drupal.quickedit.AppView#renderUpdatedField
     */
    propagateUpdatedField: function (updatedField, html, options) {
      // Don't propagate field updates that themselves were caused by
      // propagation.
      if (options.propagation) {
        return;
      }

      var htmlForOtherViewModes = updatedField.get('htmlForOtherViewModes');
      Drupal.quickedit.collections.fields
        // Find all instances of fields that display the same logical field
        // (same entity, same field, just a different instance and maybe a
        // different view mode).
        .where({logicalFieldID: updatedField.get('logicalFieldID')})
        .forEach(function (field) {
          // Ignore the field that was already updated.
          if (field === updatedField) {
            return;
          }
          // If this other instance of the field has the same view mode, we can
          // update it easily.
          else if (field.getViewMode() === updatedField.getViewMode()) {
            field.set('html', updatedField.get('html'));
          }
          // If this other instance of the field has a different view mode, and
          // that is one of the view modes for which a re-rendered version is
          // available (and that should be the case unless this field was only
          // added to the page after editing of the updated field began), then
          // use that view mode's re-rendered version.
          else {
            if (field.getViewMode() in htmlForOtherViewModes) {
              field.set('html', htmlForOtherViewModes[field.getViewMode()], {propagation: true});
            }
          }
        });
    },

    /**
     * If the new in-place editable field is for the entity that's currently
     * being edited, then transition it to the 'candidate' state.
     *
     * This happens when a field was modified, saved and hence rerendered.
     *
     * @param {Drupal.quickedit.FieldModel} fieldModel
     *   A field that was just added to the collection of fields.
     */
    rerenderedFieldToCandidate: function (fieldModel) {
      var activeEntity = Drupal.quickedit.collections.entities.findWhere({isActive: true});

      // Early-return if there is no active entity.
      if (!activeEntity) {
        return;
      }

      // If the field's entity is the active entity, make it a candidate.
      if (fieldModel.get('entity') === activeEntity) {
        this.setupEditor(fieldModel);
        fieldModel.set('state', 'candidate');
      }
    },

    /**
     * EntityModel Collection change handler.
     *
     * Handler is called `change:isActive` and enforces a single active entity.
     *
     * @param {Drupal.quickedit.EntityModel} changedEntityModel
     *   The entityModel instance whose active state has changed.
     */
    enforceSingleActiveEntity: function (changedEntityModel) {
      // When an entity is deactivated, we don't need to enforce anything.
      if (changedEntityModel.get('isActive') === false) {
        return;
      }

      // This entity was activated; deactivate all other entities.
      changedEntityModel.collection.chain()
        .filter(function (entityModel) {
          return entityModel.get('isActive') === true && entityModel !== changedEntityModel;
        })
        .each(function (entityModel) {
          entityModel.set('state', 'deactivating');
        });
    }

  });

}(jQuery, _, Backbone, Drupal));
;
/**
 * @file
 * A Backbone View that decorates the in-place edited element.
 */

(function ($, Backbone, Drupal) {

  'use strict';

  Drupal.quickedit.FieldDecorationView = Backbone.View.extend(/** @lends Drupal.quickedit.FieldDecorationView# */{

    /**
     * @type {null}
     */
    _widthAttributeIsEmpty: null,

    /**
     * @type {object}
     */
    events: {
      'mouseenter.quickedit': 'onMouseEnter',
      'mouseleave.quickedit': 'onMouseLeave',
      'click': 'onClick',
      'tabIn.quickedit': 'onMouseEnter',
      'tabOut.quickedit': 'onMouseLeave'
    },

    /**
     * @constructs
     *
     * @augments Backbone.View
     *
     * @param {object} options
     *   An object with the following keys:
     * @param {Drupal.quickedit.EditorView} options.editorView
     *   The editor object view.
     */
    initialize: function (options) {
      this.editorView = options.editorView;

      this.listenTo(this.model, 'change:state', this.stateChange);
      this.listenTo(this.model, 'change:isChanged change:inTempStore', this.renderChanged);
    },

    /**
     * @inheritdoc
     */
    remove: function () {
      // The el property is the field, which should not be removed. Remove the
      // pointer to it, then call Backbone.View.prototype.remove().
      this.setElement();
      Backbone.View.prototype.remove.call(this);
    },

    /**
     * Determines the actions to take given a change of state.
     *
     * @param {Drupal.quickedit.FieldModel} model
     *   The `FieldModel` model.
     * @param {string} state
     *   The state of the associated field. One of
     *   {@link Drupal.quickedit.FieldModel.states}.
     */
    stateChange: function (model, state) {
      var from = model.previous('state');
      var to = state;
      switch (to) {
        case 'inactive':
          this.undecorate();
          break;

        case 'candidate':
          this.decorate();
          if (from !== 'inactive') {
            this.stopHighlight();
            if (from !== 'highlighted') {
              this.model.set('isChanged', false);
              this.stopEdit();
            }
          }
          this._unpad();
          break;

        case 'highlighted':
          this.startHighlight();
          break;

        case 'activating':
          // NOTE: this state is not used by every editor! It's only used by
          // those that need to interact with the server.
          this.prepareEdit();
          break;

        case 'active':
          if (from !== 'activating') {
            this.prepareEdit();
          }
          if (this.editorView.getQuickEditUISettings().padding) {
            this._pad();
          }
          break;

        case 'changed':
          this.model.set('isChanged', true);
          break;

        case 'saving':
          break;

        case 'saved':
          break;

        case 'invalid':
          break;
      }
    },

    /**
     * Adds a class to the edited element that indicates whether the field has
     * been changed by the user (i.e. locally) or the field has already been
     * changed and stored before by the user (i.e. remotely, stored in
     * PrivateTempStore).
     */
    renderChanged: function () {
      this.$el.toggleClass('quickedit-changed', this.model.get('isChanged') || this.model.get('inTempStore'));
    },

    /**
     * Starts hover; transitions to 'highlight' state.
     *
     * @param {jQuery.Event} event
     *   The mouse event.
     */
    onMouseEnter: function (event) {
      var that = this;
      that.model.set('state', 'highlighted');
      event.stopPropagation();
    },

    /**
     * Stops hover; transitions to 'candidate' state.
     *
     * @param {jQuery.Event} event
     *   The mouse event.
     */
    onMouseLeave: function (event) {
      var that = this;
      that.model.set('state', 'candidate', {reason: 'mouseleave'});
      event.stopPropagation();
    },

    /**
     * Transition to 'activating' stage.
     *
     * @param {jQuery.Event} event
     *   The click event.
     */
    onClick: function (event) {
      this.model.set('state', 'activating');
      event.preventDefault();
      event.stopPropagation();
    },

    /**
     * Adds classes used to indicate an elements editable state.
     */
    decorate: function () {
      this.$el.addClass('quickedit-candidate quickedit-editable');
    },

    /**
     * Removes classes used to indicate an elements editable state.
     */
    undecorate: function () {
      this.$el.removeClass('quickedit-candidate quickedit-editable quickedit-highlighted quickedit-editing');
    },

    /**
     * Adds that class that indicates that an element is highlighted.
     */
    startHighlight: function () {
      // Animations.
      var that = this;
      // Use a timeout to grab the next available animation frame.
      that.$el.addClass('quickedit-highlighted');
    },

    /**
     * Removes the class that indicates that an element is highlighted.
     */
    stopHighlight: function () {
      this.$el.removeClass('quickedit-highlighted');
    },

    /**
     * Removes the class that indicates that an element as editable.
     */
    prepareEdit: function () {
      this.$el.addClass('quickedit-editing');

      // Allow the field to be styled differently while editing in a pop-up
      // in-place editor.
      if (this.editorView.getQuickEditUISettings().popup) {
        this.$el.addClass('quickedit-editor-is-popup');
      }
    },

    /**
     * Removes the class that indicates that an element is being edited.
     *
     * Reapplies the class that indicates that a candidate editable element is
     * again available to be edited.
     */
    stopEdit: function () {
      this.$el.removeClass('quickedit-highlighted quickedit-editing');

      // Done editing in a pop-up in-place editor; remove the class.
      if (this.editorView.getQuickEditUISettings().popup) {
        this.$el.removeClass('quickedit-editor-is-popup');
      }

      // Make the other editors show up again.
      $('.quickedit-candidate').addClass('quickedit-editable');
    },

    /**
     * Adds padding around the editable element to make it pop visually.
     */
    _pad: function () {
      // Early return if the element has already been padded.
      if (this.$el.data('quickedit-padded')) {
        return;
      }
      var self = this;

      // Add 5px padding for readability. This means we'll freeze the current
      // width and *then* add 5px padding, hence ensuring the padding is added
      // "on the outside".
      // 1) Freeze the width (if it's not already set); don't use animations.
      if (this.$el[0].style.width === '') {
        this._widthAttributeIsEmpty = true;
        this.$el
          .addClass('quickedit-animate-disable-width')
          .css('width', this.$el.width());
      }

      // 2) Add padding; use animations.
      var posProp = this._getPositionProperties(this.$el);
      setTimeout(function () {
        // Re-enable width animations (padding changes affect width too!).
        self.$el.removeClass('quickedit-animate-disable-width');

        // Pad the editable.
        self.$el
          .css({
            'position': 'relative',
            'top': posProp.top - 5 + 'px',
            'left': posProp.left - 5 + 'px',
            'padding-top': posProp['padding-top'] + 5 + 'px',
            'padding-left': posProp['padding-left'] + 5 + 'px',
            'padding-right': posProp['padding-right'] + 5 + 'px',
            'padding-bottom': posProp['padding-bottom'] + 5 + 'px',
            'margin-bottom': posProp['margin-bottom'] - 10 + 'px'
          })
          .data('quickedit-padded', true);
      }, 0);
    },

    /**
     * Removes the padding around the element being edited when editing ceases.
     */
    _unpad: function () {
      // Early return if the element has not been padded.
      if (!this.$el.data('quickedit-padded')) {
        return;
      }
      var self = this;

      // 1) Set the empty width again.
      if (this._widthAttributeIsEmpty) {
        this.$el
          .addClass('quickedit-animate-disable-width')
          .css('width', '');
      }

      // 2) Remove padding; use animations (these will run simultaneously with)
      // the fading out of the toolbar as its gets removed).
      var posProp = this._getPositionProperties(this.$el);
      setTimeout(function () {
        // Re-enable width animations (padding changes affect width too!).
        self.$el.removeClass('quickedit-animate-disable-width');

        // Unpad the editable.
        self.$el
          .css({
            'position': 'relative',
            'top': posProp.top + 5 + 'px',
            'left': posProp.left + 5 + 'px',
            'padding-top': posProp['padding-top'] - 5 + 'px',
            'padding-left': posProp['padding-left'] - 5 + 'px',
            'padding-right': posProp['padding-right'] - 5 + 'px',
            'padding-bottom': posProp['padding-bottom'] - 5 + 'px',
            'margin-bottom': posProp['margin-bottom'] + 10 + 'px'
          });
      }, 0);
      // Remove the marker that indicates that this field has padding. This is
      // done outside the timed out function above so that we don't get numerous
      // queued functions that will remove padding before the data marker has
      // been removed.
      this.$el.removeData('quickedit-padded');
    },

    /**
     * Gets the top and left properties of an element.
     *
     * Convert extraneous values and information into numbers ready for
     * subtraction.
     *
     * @param {jQuery} $e
     *   The element to get position properties from.
     *
     * @return {object}
     *   An object containing css values for the needed properties.
     */
    _getPositionProperties: function ($e) {
      var p;
      var r = {};
      var props = [
        'top', 'left', 'bottom', 'right',
        'padding-top', 'padding-left', 'padding-right', 'padding-bottom',
        'margin-bottom'
      ];

      var propCount = props.length;
      for (var i = 0; i < propCount; i++) {
        p = props[i];
        r[p] = parseInt(this._replaceBlankPosition($e.css(p)), 10);
      }
      return r;
    },

    /**
     * Replaces blank or 'auto' CSS `position: <value>` values with "0px".
     *
     * @param {string} [pos]
     *   The value for a CSS position declaration.
     *
     * @return {string}
     *   A CSS value that is valid for `position`.
     */
    _replaceBlankPosition: function (pos) {
      if (pos === 'auto' || !pos) {
        pos = '0px';
      }
      return pos;
    }

  });

})(jQuery, Backbone, Drupal);
;
/**
 * @file
 * A Backbone view that decorates the in-place editable entity.
 */

(function (Drupal, $, Backbone) {

  'use strict';

  Drupal.quickedit.EntityDecorationView = Backbone.View.extend(/** @lends Drupal.quickedit.EntityDecorationView# */{

    /**
     * Associated with the DOM root node of an editable entity.
     *
     * @constructs
     *
     * @augments Backbone.View
     */
    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },

    /**
     * @inheritdoc
     */
    render: function () {
      this.$el.toggleClass('quickedit-entity-active', this.model.get('isActive'));
    },

    /**
     * @inheritdoc
     */
    remove: function () {
      this.setElement(null);
      Backbone.View.prototype.remove.call(this);
    }

  });

}(Drupal, jQuery, Backbone));
;
/**
 * @file
 * A Backbone View that provides an entity level toolbar.
 */

(function ($, _, Backbone, Drupal, debounce) {

  'use strict';

  Drupal.quickedit.EntityToolbarView = Backbone.View.extend(/** @lends Drupal.quickedit.EntityToolbarView# */{

    /**
     * @type {jQuery}
     */
    _fieldToolbarRoot: null,

    /**
     * @return {object}
     *   A map of events.
     */
    events: function () {
      var map = {
        'click button.action-save': 'onClickSave',
        'click button.action-cancel': 'onClickCancel',
        'mouseenter': 'onMouseenter'
      };
      return map;
    },

    /**
     * @constructs
     *
     * @augments Backbone.View
     *
     * @param {object} options
     *   Options to construct the view.
     * @param {Drupal.quickedit.AppModel} options.appModel
     *   A quickedit `AppModel` to use in the view.
     */
    initialize: function (options) {
      var that = this;
      this.appModel = options.appModel;
      this.$entity = $(this.model.get('el'));

      // Rerender whenever the entity state changes.
      this.listenTo(this.model, 'change:isActive change:isDirty change:state', this.render);
      // Also rerender whenever a different field is highlighted or activated.
      this.listenTo(this.appModel, 'change:highlightedField change:activeField', this.render);
      // Rerender when a field of the entity changes state.
      this.listenTo(this.model.get('fields'), 'change:state', this.fieldStateChange);

      // Reposition the entity toolbar as the viewport and the position within
      // the viewport changes.
      $(window).on('resize.quickedit scroll.quickedit drupalViewportOffsetChange.quickedit', debounce($.proxy(this.windowChangeHandler, this), 150));

      // Adjust the fence placement within which the entity toolbar may be
      // positioned.
      $(document).on('drupalViewportOffsetChange.quickedit', function (event, offsets) {
        if (that.$fence) {
          that.$fence.css(offsets);
        }
      });

      // Set the entity toolbar DOM element as the el for this view.
      var $toolbar = this.buildToolbarEl();
      this.setElement($toolbar);
      this._fieldToolbarRoot = $toolbar.find('.quickedit-toolbar-field').get(0);

      // Initial render.
      this.render();
    },

    /**
     * @inheritdoc
     *
     * @return {Drupal.quickedit.EntityToolbarView}
     *   The entity toolbar view.
     */
    render: function () {
      if (this.model.get('isActive')) {
        // If the toolbar container doesn't exist, create it.
        var $body = $('body');
        if ($body.children('#quickedit-entity-toolbar').length === 0) {
          $body.append(this.$el);
        }
        // The fence will define a area on the screen that the entity toolbar
        // will be position within.
        if ($body.children('#quickedit-toolbar-fence').length === 0) {
          this.$fence = $(Drupal.theme('quickeditEntityToolbarFence'))
            .css(Drupal.displace())
            .appendTo($body);
        }
        // Adds the entity title to the toolbar.
        this.label();

        // Show the save and cancel buttons.
        this.show('ops');
        // If render is being called and the toolbar is already visible, just
        // reposition it.
        this.position();
      }

      // The save button text and state varies with the state of the entity
      // model.
      var $button = this.$el.find('.quickedit-button.action-save');
      var isDirty = this.model.get('isDirty');
      // Adjust the save button according to the state of the model.
      switch (this.model.get('state')) {
        // Quick editing is active, but no field is being edited.
        case 'opened':
          // The saving throbber is not managed by AJAX system. The
          // EntityToolbarView manages this visual element.
          $button
            .removeClass('action-saving icon-throbber icon-end')
            .text(Drupal.t('Save'))
            .removeAttr('disabled')
            .attr('aria-hidden', !isDirty);
          break;

        // The changes to the fields of the entity are being committed.
        case 'committing':
          $button
            .addClass('action-saving icon-throbber icon-end')
            .text(Drupal.t('Saving'))
            .attr('disabled', 'disabled');
          break;

        default:
          $button.attr('aria-hidden', true);
          break;
      }

      return this;
    },

    /**
     * @inheritdoc
     */
    remove: function () {
      // Remove additional DOM elements controlled by this View.
      this.$fence.remove();

      // Stop listening to additional events.
      $(window).off('resize.quickedit scroll.quickedit drupalViewportOffsetChange.quickedit');
      $(document).off('drupalViewportOffsetChange.quickedit');

      Backbone.View.prototype.remove.call(this);
    },

    /**
     * Repositions the entity toolbar on window scroll and resize.
     *
     * @param {jQuery.Event} event
     *   The scroll or resize event.
     */
    windowChangeHandler: function (event) {
      this.position();
    },

    /**
     * Determines the actions to take given a change of state.
     *
     * @param {Drupal.quickedit.FieldModel} model
     *   The `FieldModel` model.
     * @param {string} state
     *   The state of the associated field. One of
     *   {@link Drupal.quickedit.FieldModel.states}.
     */
    fieldStateChange: function (model, state) {
      switch (state) {
        case 'active':
          this.render();
          break;

        case 'invalid':
          this.render();
          break;
      }
    },

    /**
     * Uses the jQuery.ui.position() method to position the entity toolbar.
     *
     * @param {HTMLElement} [element]
     *   The element against which the entity toolbar is positioned.
     */
    position: function (element) {
      clearTimeout(this.timer);

      var that = this;
      // Vary the edge of the positioning according to the direction of language
      // in the document.
      var edge = (document.documentElement.dir === 'rtl') ? 'right' : 'left';
      // A time unit to wait until the entity toolbar is repositioned.
      var delay = 0;
      // Determines what check in the series of checks below should be
      // evaluated.
      var check = 0;
      // When positioned against an active field that has padding, we should
      // ignore that padding when positioning the toolbar, to not unnecessarily
      // move the toolbar horizontally, which feels annoying.
      var horizontalPadding = 0;
      var of;
      var activeField;
      var highlightedField;
      // There are several elements in the page that the entity toolbar might be
      // positioned against. They are considered below in a priority order.
      do {
        switch (check) {
          case 0:
            // Position against a specific element.
            of = element;
            break;

          case 1:
            // Position against a form container.
            activeField = Drupal.quickedit.app.model.get('activeField');
            of = activeField && activeField.editorView && activeField.editorView.$formContainer && activeField.editorView.$formContainer.find('.quickedit-form');
            break;

          case 2:
            // Position against an active field.
            of = activeField && activeField.editorView && activeField.editorView.getEditedElement();
            if (activeField && activeField.editorView && activeField.editorView.getQuickEditUISettings().padding) {
              horizontalPadding = 5;
            }
            break;

          case 3:
            // Position against a highlighted field.
            highlightedField = Drupal.quickedit.app.model.get('highlightedField');
            of = highlightedField && highlightedField.editorView && highlightedField.editorView.getEditedElement();
            delay = 250;
            break;

          default:
            var fieldModels = this.model.get('fields').models;
            var topMostPosition = 1000000;
            var topMostField = null;
            // Position against the topmost field.
            for (var i = 0; i < fieldModels.length; i++) {
              var pos = fieldModels[i].get('el').getBoundingClientRect().top;
              if (pos < topMostPosition) {
                topMostPosition = pos;
                topMostField = fieldModels[i];
              }
            }
            of = topMostField.get('el');
            delay = 50;
            break;
        }
        // Prepare to check the next possible element to position against.
        check++;
      } while (!of);

      /**
       * Refines the positioning algorithm of jquery.ui.position().
       *
       * Invoked as the 'using' callback of jquery.ui.position() in
       * positionToolbar().
       *
       * @param {*} view
       *   The view the positions will be calculated from.
       * @param {object} suggested
       *   A hash of top and left values for the position that should be set. It
       *   can be forwarded to .css() or .animate().
       * @param {object} info
       *   The position and dimensions of both the 'my' element and the 'of'
       *   elements, as well as calculations to their relative position. This
       *   object contains the following properties:
       * @param {object} info.element
       *   A hash that contains information about the HTML element that will be
       *   positioned. Also known as the 'my' element.
       * @param {object} info.target
       *   A hash that contains information about the HTML element that the
       *   'my' element will be positioned against. Also known as the 'of'
       *   element.
       */
      function refinePosition(view, suggested, info) {
        // Determine if the pointer should be on the top or bottom.
        var isBelow = suggested.top > info.target.top;
        info.element.element.toggleClass('quickedit-toolbar-pointer-top', isBelow);
        // Don't position the toolbar past the first or last editable field if
        // the entity is the target.
        if (view.$entity[0] === info.target.element[0]) {
          // Get the first or last field according to whether the toolbar is
          // above or below the entity.
          var $field = view.$entity.find('.quickedit-editable').eq((isBelow) ? -1 : 0);
          if ($field.length > 0) {
            suggested.top = (isBelow) ? ($field.offset().top + $field.outerHeight(true)) : $field.offset().top - info.element.element.outerHeight(true);
          }
        }
        // Don't let the toolbar go outside the fence.
        var fenceTop = view.$fence.offset().top;
        var fenceHeight = view.$fence.height();
        var toolbarHeight = info.element.element.outerHeight(true);
        if (suggested.top < fenceTop) {
          suggested.top = fenceTop;
        }
        else if ((suggested.top + toolbarHeight) > (fenceTop + fenceHeight)) {
          suggested.top = fenceTop + fenceHeight - toolbarHeight;
        }
        // Position the toolbar.
        info.element.element.css({
          left: Math.floor(suggested.left),
          top: Math.floor(suggested.top)
        });
      }

      /**
       * Calls the jquery.ui.position() method on the $el of this view.
       */
      function positionToolbar() {
        that.$el
          .position({
            my: edge + ' bottom',
            // Move the toolbar 1px towards the start edge of the 'of' element,
            // plus any horizontal padding that may have been added to the
            // element that is being added, to prevent unwanted horizontal
            // movement.
            at: edge + '+' + (1 + horizontalPadding) + ' top',
            of: of,
            collision: 'flipfit',
            using: refinePosition.bind(null, that),
            within: that.$fence
          })
          // Resize the toolbar to match the dimensions of the field, up to a
          // maximum width that is equal to 90% of the field's width.
          .css({
            'max-width': (document.documentElement.clientWidth < 450) ? document.documentElement.clientWidth : 450,
            // Set a minimum width of 240px for the entity toolbar, or the width
            // of the client if it is less than 240px, so that the toolbar
            // never folds up into a squashed and jumbled mess.
            'min-width': (document.documentElement.clientWidth < 240) ? document.documentElement.clientWidth : 240,
            'width': '100%'
          });
      }

      // Uses the jQuery.ui.position() method. Use a timeout to move the toolbar
      // only after the user has focused on an editable for 250ms. This prevents
      // the toolbar from jumping around the screen.
      this.timer = setTimeout(function () {
        // Render the position in the next execution cycle, so that animations
        // on the field have time to process. This is not strictly speaking, a
        // guarantee that all animations will be finished, but it's a simple
        // way to get better positioning without too much additional code.
        _.defer(positionToolbar);
      }, delay);
    },

    /**
     * Set the model state to 'saving' when the save button is clicked.
     *
     * @param {jQuery.Event} event
     *   The click event.
     */
    onClickSave: function (event) {
      event.stopPropagation();
      event.preventDefault();
      // Save the model.
      this.model.set('state', 'committing');
    },

    /**
     * Sets the model state to candidate when the cancel button is clicked.
     *
     * @param {jQuery.Event} event
     *   The click event.
     */
    onClickCancel: function (event) {
      event.preventDefault();
      this.model.set('state', 'deactivating');
    },

    /**
     * Clears the timeout that will eventually reposition the entity toolbar.
     *
     * Without this, it may reposition itself, away from the user's cursor!
     *
     * @param {jQuery.Event} event
     *   The mouse event.
     */
    onMouseenter: function (event) {
      clearTimeout(this.timer);
    },

    /**
     * Builds the entity toolbar HTML; attaches to DOM; sets starting position.
     *
     * @return {jQuery}
     *   The toolbar element.
     */
    buildToolbarEl: function () {
      var $toolbar = $(Drupal.theme('quickeditEntityToolbar', {
        id: 'quickedit-entity-toolbar'
      }));

      $toolbar
        .find('.quickedit-toolbar-entity')
        // Append the "ops" toolgroup into the toolbar.
        .prepend(Drupal.theme('quickeditToolgroup', {
          classes: ['ops'],
          buttons: [
            {
              label: Drupal.t('Save'),
              type: 'submit',
              classes: 'action-save quickedit-button icon',
              attributes: {
                'aria-hidden': true
              }
            },
            {
              label: Drupal.t('Close'),
              classes: 'action-cancel quickedit-button icon icon-close icon-only'
            }
          ]
        }));

      // Give the toolbar a sensible starting position so that it doesn't
      // animate on to the screen from a far off corner.
      $toolbar
        .css({
          left: this.$entity.offset().left,
          top: this.$entity.offset().top
        });

      return $toolbar;
    },

    /**
     * Returns the DOM element that fields will attach their toolbars to.
     *
     * @return {jQuery}
     *   The DOM element that fields will attach their toolbars to.
     */
    getToolbarRoot: function () {
      return this._fieldToolbarRoot;
    },

    /**
     * Generates a state-dependent label for the entity toolbar.
     */
    label: function () {
      // The entity label.
      var label = '';
      var entityLabel = this.model.get('label');

      // Label of an active field, if it exists.
      var activeField = Drupal.quickedit.app.model.get('activeField');
      var activeFieldLabel = activeField && activeField.get('metadata').label;
      // Label of a highlighted field, if it exists.
      var highlightedField = Drupal.quickedit.app.model.get('highlightedField');
      var highlightedFieldLabel = highlightedField && highlightedField.get('metadata').label;
      // The label is constructed in a priority order.
      if (activeFieldLabel) {
        label = Drupal.theme('quickeditEntityToolbarLabel', {
          entityLabel: entityLabel,
          fieldLabel: activeFieldLabel
        });
      }
      else if (highlightedFieldLabel) {
        label = Drupal.theme('quickeditEntityToolbarLabel', {
          entityLabel: entityLabel,
          fieldLabel: highlightedFieldLabel
        });
      }
      else {
        // @todo Add XSS regression test coverage in https://www.drupal.org/node/2547437
        label = Drupal.checkPlain(entityLabel);
      }

      this.$el
        .find('.quickedit-toolbar-label')
        .html(label);
    },

    /**
     * Adds classes to a toolgroup.
     *
     * @param {string} toolgroup
     *   A toolgroup name.
     * @param {string} classes
     *   A string of space-delimited class names that will be applied to the
     *   wrapping element of the toolbar group.
     */
    addClass: function (toolgroup, classes) {
      this._find(toolgroup).addClass(classes);
    },

    /**
     * Removes classes from a toolgroup.
     *
     * @param {string} toolgroup
     *   A toolgroup name.
     * @param {string} classes
     *   A string of space-delimited class names that will be removed from the
     *   wrapping element of the toolbar group.
     */
    removeClass: function (toolgroup, classes) {
      this._find(toolgroup).removeClass(classes);
    },

    /**
     * Finds a toolgroup.
     *
     * @param {string} toolgroup
     *   A toolgroup name.
     *
     * @return {jQuery}
     *   The toolgroup DOM element.
     */
    _find: function (toolgroup) {
      return this.$el.find('.quickedit-toolbar .quickedit-toolgroup.' + toolgroup);
    },

    /**
     * Shows a toolgroup.
     *
     * @param {string} toolgroup
     *   A toolgroup name.
     */
    show: function (toolgroup) {
      this.$el.removeClass('quickedit-animate-invisible');
    }

  });

})(jQuery, _, Backbone, Drupal, Drupal.debounce);
;
/**
 * @file
 * A Backbone View that provides a dynamic contextual link.
 */

(function ($, Backbone, Drupal) {

  'use strict';

  Drupal.quickedit.ContextualLinkView = Backbone.View.extend(/** @lends Drupal.quickedit.ContextualLinkView# */{

    /**
     * Define all events to listen to.
     *
     * @return {object}
     *   A map of events.
     */
    events: function () {
      // Prevents delay and simulated mouse events.
      function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      }

      return {
        'click a': function (event) {
          event.preventDefault();
          this.model.set('state', 'launching');
        },
        'touchEnd a': touchEndToClick
      };
    },

    /**
     * Create a new contextual link view.
     *
     * @constructs
     *
     * @augments Backbone.View
     *
     * @param {object} options
     *   An object with the following keys:
     * @param {Drupal.quickedit.EntityModel} options.model
     *   The associated entity's model.
     * @param {Drupal.quickedit.AppModel} options.appModel
     *   The application state model.
     * @param {object} options.strings
     *   The strings for the "Quick edit" link.
     */
    initialize: function (options) {
      // Insert the text of the quick edit toggle.
      this.$el.find('a').text(options.strings.quickEdit);
      // Initial render.
      this.render();
      // Re-render whenever this entity's isActive attribute changes.
      this.listenTo(this.model, 'change:isActive', this.render);
    },

    /**
     * Render function for the contextual link view.
     *
     * @param {Drupal.quickedit.EntityModel} entityModel
     *   The associated `EntityModel`.
     * @param {bool} isActive
     *   Whether the in-place editor is active or not.
     *
     * @return {Drupal.quickedit.ContextualLinkView}
     *   The `ContextualLinkView` in question.
     */
    render: function (entityModel, isActive) {
      this.$el.find('a').attr('aria-pressed', isActive);

      // Hides the contextual links if an in-place editor is active.
      this.$el.closest('.contextual').toggle(!isActive);

      return this;
    }

  });

})(jQuery, Backbone, Drupal);
;
/**
 * @file
 * A Backbone View that provides an interactive toolbar (1 per in-place editor).
 */

(function ($, _, Backbone, Drupal) {

  'use strict';

  Drupal.quickedit.FieldToolbarView = Backbone.View.extend(/** @lends Drupal.quickedit.FieldToolbarView# */{

    /**
     * The edited element, as indicated by EditorView.getEditedElement.
     *
     * @type {jQuery}
     */
    $editedElement: null,

    /**
     * A reference to the in-place editor.
     *
     * @type {Drupal.quickedit.EditorView}
     */
    editorView: null,

    /**
     * @type {string}
     */
    _id: null,

    /**
     * @constructs
     *
     * @augments Backbone.View
     *
     * @param {object} options
     *   Options object to construct the field toolbar.
     * @param {jQuery} options.$editedElement
     *   The element being edited.
     * @param {Drupal.quickedit.EditorView} options.editorView
     *   The EditorView the toolbar belongs to.
     */
    initialize: function (options) {
      this.$editedElement = options.$editedElement;
      this.editorView = options.editorView;

      /**
       * @type {jQuery}
       */
      this.$root = this.$el;

      // Generate a DOM-compatible ID for the form container DOM element.
      this._id = 'quickedit-toolbar-for-' + this.model.id.replace(/[\/\[\]]/g, '_');

      this.listenTo(this.model, 'change:state', this.stateChange);
    },

    /**
     * @inheritdoc
     *
     * @return {Drupal.quickedit.FieldToolbarView}
     *   The current FieldToolbarView.
     */
    render: function () {
      // Render toolbar and set it as the view's element.
      this.setElement($(Drupal.theme('quickeditFieldToolbar', {
        id: this._id
      })));

      // Attach to the field toolbar $root element in the entity toolbar.
      this.$el.prependTo(this.$root);

      return this;
    },

    /**
     * Determines the actions to take given a change of state.
     *
     * @param {Drupal.quickedit.FieldModel} model
     *   The quickedit FieldModel
     * @param {string} state
     *   The state of the associated field. One of
     *   {@link Drupal.quickedit.FieldModel.states}.
     */
    stateChange: function (model, state) {
      var from = model.previous('state');
      var to = state;
      switch (to) {
        case 'inactive':
          break;

        case 'candidate':
          // Remove the view's existing element if we went to the 'activating'
          // state or later, because it will be recreated. Not doing this would
          // result in memory leaks.
          if (from !== 'inactive' && from !== 'highlighted') {
            this.$el.remove();
            this.setElement();
          }
          break;

        case 'highlighted':
          break;

        case 'activating':
          this.render();

          if (this.editorView.getQuickEditUISettings().fullWidthToolbar) {
            this.$el.addClass('quickedit-toolbar-fullwidth');
          }

          if (this.editorView.getQuickEditUISettings().unifiedToolbar) {
            this.insertWYSIWYGToolGroups();
          }
          break;

        case 'active':
          break;

        case 'changed':
          break;

        case 'saving':
          break;

        case 'saved':
          break;

        case 'invalid':
          break;
      }
    },

    /**
     * Insert WYSIWYG markup into the associated toolbar.
     */
    insertWYSIWYGToolGroups: function () {
      this.$el
        .append(Drupal.theme('quickeditToolgroup', {
          id: this.getFloatedWysiwygToolgroupId(),
          classes: ['wysiwyg-floated', 'quickedit-animate-slow', 'quickedit-animate-invisible', 'quickedit-animate-delay-veryfast'],
          buttons: []
        }))
        .append(Drupal.theme('quickeditToolgroup', {
          id: this.getMainWysiwygToolgroupId(),
          classes: ['wysiwyg-main', 'quickedit-animate-slow', 'quickedit-animate-invisible', 'quickedit-animate-delay-veryfast'],
          buttons: []
        }));

      // Animate the toolgroups into visibility.
      this.show('wysiwyg-floated');
      this.show('wysiwyg-main');
    },

    /**
     * Retrieves the ID for this toolbar's container.
     *
     * Only used to make sane hovering behavior possible.
     *
     * @return {string}
     *   A string that can be used as the ID for this toolbar's container.
     */
    getId: function () {
      return 'quickedit-toolbar-for-' + this._id;
    },

    /**
     * Retrieves the ID for this toolbar's floating WYSIWYG toolgroup.
     *
     * Used to provide an abstraction for any WYSIWYG editor to plug in.
     *
     * @return {string}
     *   A string that can be used as the ID.
     */
    getFloatedWysiwygToolgroupId: function () {
      return 'quickedit-wysiwyg-floated-toolgroup-for-' + this._id;
    },

    /**
     * Retrieves the ID for this toolbar's main WYSIWYG toolgroup.
     *
     * Used to provide an abstraction for any WYSIWYG editor to plug in.
     *
     * @return {string}
     *   A string that can be used as the ID.
     */
    getMainWysiwygToolgroupId: function () {
      return 'quickedit-wysiwyg-main-toolgroup-for-' + this._id;
    },

    /**
     * Finds a toolgroup.
     *
     * @param {string} toolgroup
     *   A toolgroup name.
     *
     * @return {jQuery}
     *   The toolgroup element.
     */
    _find: function (toolgroup) {
      return this.$el.find('.quickedit-toolgroup.' + toolgroup);
    },

    /**
     * Shows a toolgroup.
     *
     * @param {string} toolgroup
     *   A toolgroup name.
     */
    show: function (toolgroup) {
      var $group = this._find(toolgroup);
      // Attach a transitionEnd event handler to the toolbar group so that
      // update events can be triggered after the animations have ended.
      $group.on(Drupal.quickedit.util.constants.transitionEnd, function (event) {
        $group.off(Drupal.quickedit.util.constants.transitionEnd);
      });
      // The call to remove the class and start the animation must be started in
      // the next animation frame or the event handler attached above won't be
      // triggered.
      window.setTimeout(function () {
        $group.removeClass('quickedit-animate-invisible');
      }, 0);
    }

  });

})(jQuery, _, Backbone, Drupal);
;
/**
 * @file
 * An abstract Backbone View that controls an in-place editor.
 */

(function ($, Backbone, Drupal) {

  'use strict';

  Drupal.quickedit.EditorView = Backbone.View.extend(/** @lends Drupal.quickedit.EditorView# */{

    /**
     * A base implementation that outlines the structure for in-place editors.
     *
     * Specific in-place editor implementations should subclass (extend) this
     * View and override whichever method they deem necessary to override.
     *
     * Typically you would want to override this method to set the
     * originalValue attribute in the FieldModel to such a value that your
     * in-place editor can revert to the original value when necessary.
     *
     * @example
     * <caption>If you override this method, you should call this
     * method (the parent class' initialize()) first.</caption>
     * Drupal.quickedit.EditorView.prototype.initialize.call(this, options);
     *
     * @constructs
     *
     * @augments Backbone.View
     *
     * @param {object} options
     *   An object with the following keys:
     * @param {Drupal.quickedit.EditorModel} options.model
     *   The in-place editor state model.
     * @param {Drupal.quickedit.FieldModel} options.fieldModel
     *   The field model.
     *
     * @see Drupal.quickedit.EditorModel
     * @see Drupal.quickedit.editors.plain_text
     */
    initialize: function (options) {
      this.fieldModel = options.fieldModel;
      this.listenTo(this.fieldModel, 'change:state', this.stateChange);
    },

    /**
     * @inheritdoc
     */
    remove: function () {
      // The el property is the field, which should not be removed. Remove the
      // pointer to it, then call Backbone.View.prototype.remove().
      this.setElement();
      Backbone.View.prototype.remove.call(this);
    },

    /**
     * Returns the edited element.
     *
     * For some single cardinality fields, it may be necessary or useful to
     * not in-place edit (and hence decorate) the DOM element with the
     * data-quickedit-field-id attribute (which is the field's wrapper), but a
     * specific element within the field's wrapper.
     * e.g. using a WYSIWYG editor on a body field should happen on the DOM
     * element containing the text itself, not on the field wrapper.
     *
     * @return {jQuery}
     *   A jQuery-wrapped DOM element.
     *
     * @see Drupal.quickedit.editors.plain_text
     */
    getEditedElement: function () {
      return this.$el;
    },

    /**
     *
     * @return {object}
     * Returns 3 Quick Edit UI settings that depend on the in-place editor:
     *  - Boolean padding: indicates whether padding should be applied to the
     *    edited element, to guarantee legibility of text.
     *  - Boolean unifiedToolbar: provides the in-place editor with the ability
     *    to insert its own toolbar UI into Quick Edit's tightly integrated
     *    toolbar.
     *  - Boolean fullWidthToolbar: indicates whether Quick Edit's tightly
     *    integrated toolbar should consume the full width of the element,
     *    rather than being just long enough to accommodate a label.
     */
    getQuickEditUISettings: function () {
      return {padding: false, unifiedToolbar: false, fullWidthToolbar: false, popup: false};
    },

    /**
     * Determines the actions to take given a change of state.
     *
     * @param {Drupal.quickedit.FieldModel} fieldModel
     *   The quickedit `FieldModel` that holds the state.
     * @param {string} state
     *   The state of the associated field. One of
     *   {@link Drupal.quickedit.FieldModel.states}.
     */
    stateChange: function (fieldModel, state) {
      var from = fieldModel.previous('state');
      var to = state;
      switch (to) {
        case 'inactive':
          // An in-place editor view will not yet exist in this state, hence
          // this will never be reached. Listed for sake of completeness.
          break;

        case 'candidate':
          // Nothing to do for the typical in-place editor: it should not be
          // visible yet. Except when we come from the 'invalid' state, then we
          // clean up.
          if (from === 'invalid') {
            this.removeValidationErrors();
          }
          break;

        case 'highlighted':
          // Nothing to do for the typical in-place editor: it should not be
          // visible yet.
          break;

        case 'activating':
          // The user has indicated he wants to do in-place editing: if
          // something needs to be loaded (CSS/JavaScript/server data/…), then
          // do so at this stage, and once the in-place editor is ready,
          // set the 'active' state. A "loading" indicator will be shown in the
          // UI for as long as the field remains in this state.
          var loadDependencies = function (callback) {
            // Do the loading here.
            callback();
          };
          loadDependencies(function () {
            fieldModel.set('state', 'active');
          });
          break;

        case 'active':
          // The user can now actually use the in-place editor.
          break;

        case 'changed':
          // Nothing to do for the typical in-place editor. The UI will show an
          // indicator that the field has changed.
          break;

        case 'saving':
          // When the user has indicated he wants to save his changes to this
          // field, this state will be entered. If the previous saving attempt
          // resulted in validation errors, the previous state will be
          // 'invalid'. Clean up those validation errors while the user is
          // saving.
          if (from === 'invalid') {
            this.removeValidationErrors();
          }
          this.save();
          break;

        case 'saved':
          // Nothing to do for the typical in-place editor. Immediately after
          // being saved, a field will go to the 'candidate' state, where it
          // should no longer be visible (after all, the field will then again
          // just be a *candidate* to be in-place edited).
          break;

        case 'invalid':
          // The modified field value was attempted to be saved, but there were
          // validation errors.
          this.showValidationErrors();
          break;
      }
    },

    /**
     * Reverts the modified value to the original, before editing started.
     */
    revert: function () {
      // A no-op by default; each editor should implement reverting itself.
      // Note that if the in-place editor does not cause the FieldModel's
      // element to be modified, then nothing needs to happen.
    },

    /**
     * Saves the modified value in the in-place editor for this field.
     */
    save: function () {
      var fieldModel = this.fieldModel;
      var editorModel = this.model;
      var backstageId = 'quickedit_backstage-' + this.fieldModel.id.replace(/[\/\[\]\_\s]/g, '-');

      function fillAndSubmitForm(value) {
        var $form = $('#' + backstageId).find('form');
        // Fill in the value in any <input> that isn't hidden or a submit
        // button.
        $form.find(':input[type!="hidden"][type!="submit"]:not(select)')
          // Don't mess with the node summary.
          .not('[name$="\\[summary\\]"]').val(value);
        // Submit the form.
        $form.find('.quickedit-form-submit').trigger('click.quickedit');
      }

      var formOptions = {
        fieldID: this.fieldModel.get('fieldID'),
        $el: this.$el,
        nocssjs: true,
        other_view_modes: fieldModel.findOtherViewModes(),
        // Reset an existing entry for this entity in the PrivateTempStore (if
        // any) when saving the field. Logically speaking, this should happen in
        // a separate request because this is an entity-level operation, not a
        // field-level operation. But that would require an additional request,
        // that might not even be necessary: it is only when a user saves a
        // first changed field for an entity that this needs to happen:
        // precisely now!
        reset: !this.fieldModel.get('entity').get('inTempStore')
      };

      var self = this;
      Drupal.quickedit.util.form.load(formOptions, function (form, ajax) {
        // Create a backstage area for storing forms that are hidden from view
        // (hence "backstage" — since the editing doesn't happen in the form, it
        // happens "directly" in the content, the form is only used for saving).
        var $backstage = $(Drupal.theme('quickeditBackstage', {id: backstageId})).appendTo('body');
        // Hidden forms are stuffed into the backstage container for this field.
        var $form = $(form).appendTo($backstage);
        // Disable the browser's HTML5 validation; we only care about server-
        // side validation. (Not disabling this will actually cause problems
        // because browsers don't like to set HTML5 validation errors on hidden
        // forms.)
        $form.prop('novalidate', true);
        var $submit = $form.find('.quickedit-form-submit');
        self.formSaveAjax = Drupal.quickedit.util.form.ajaxifySaving(formOptions, $submit);

        function removeHiddenForm() {
          Drupal.quickedit.util.form.unajaxifySaving(self.formSaveAjax);
          delete self.formSaveAjax;
          $backstage.remove();
        }

        // Successfully saved.
        self.formSaveAjax.commands.quickeditFieldFormSaved = function (ajax, response, status) {
          removeHiddenForm();
          // First, transition the state to 'saved'.
          fieldModel.set('state', 'saved');
          // Second, set the 'htmlForOtherViewModes' attribute, so that when
          // this field is rerendered, the change can be propagated to other
          // instances of this field, which may be displayed in different view
          // modes.
          fieldModel.set('htmlForOtherViewModes', response.other_view_modes);
          // Finally, set the 'html' attribute on the field model. This will
          // cause the field to be rerendered.
          fieldModel.set('html', response.data);
        };

        // Unsuccessfully saved; validation errors.
        self.formSaveAjax.commands.quickeditFieldFormValidationErrors = function (ajax, response, status) {
          removeHiddenForm();
          editorModel.set('validationErrors', response.data);
          fieldModel.set('state', 'invalid');
        };

        // The quickeditFieldForm AJAX command is only called upon loading the
        // form for the first time, and when there are validation errors in the
        // form; Form API then marks which form items have errors. This is
        // useful for the form-based in-place editor, but pointless for any
        // other: the form itself won't be visible at all anyway! So, we just
        // ignore it.
        self.formSaveAjax.commands.quickeditFieldForm = function () {};

        fillAndSubmitForm(editorModel.get('currentValue'));
      });
    },

    /**
     * Shows validation error messages.
     *
     * Should be called when the state is changed to 'invalid'.
     */
    showValidationErrors: function () {
      var $errors = $('<div class="quickedit-validation-errors"></div>')
        .append(this.model.get('validationErrors'));
      this.getEditedElement()
        .addClass('quickedit-validation-error')
        .after($errors);
    },

    /**
     * Cleans up validation error messages.
     *
     * Should be called when the state is changed to 'candidate' or 'saving'. In
     * the case of the latter: the user has modified the value in the in-place
     * editor again to attempt to save again. In the case of the latter: the
     * invalid value was discarded.
     */
    removeValidationErrors: function () {
      this.getEditedElement()
        .removeClass('quickedit-validation-error')
        .next('.quickedit-validation-errors')
        .remove();
    }

  });

}(jQuery, Backbone, Drupal));
;
/**
 * @file
 * Provides theme functions for all of Quick Edit's client-side HTML.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Theme function for a "backstage" for the Quick Edit module.
   *
   * @param {object} settings
   *   Settings object used to construct the markup.
   * @param {string} settings.id
   *   The id to apply to the backstage.
   *
   * @return {string}
   *   The corresponding HTML.
   */
  Drupal.theme.quickeditBackstage = function (settings) {
    var html = '';
    html += '<div id="' + settings.id + '" />';
    return html;
  };

  /**
   * Theme function for a toolbar container of the Quick Edit module.
   *
   * @param {object} settings
   *   Settings object used to construct the markup.
   * @param {string} settings.id
   *   the id to apply to the backstage.
   *
   * @return {string}
   *   The corresponding HTML.
   */
  Drupal.theme.quickeditEntityToolbar = function (settings) {
    var html = '';
    html += '<div id="' + settings.id + '" class="quickedit quickedit-toolbar-container clearfix">';
    html += '<i class="quickedit-toolbar-pointer"></i>';
    html += '<div class="quickedit-toolbar-content">';
    html += '<div class="quickedit-toolbar quickedit-toolbar-entity clearfix icon icon-pencil">';
    html += '<div class="quickedit-toolbar-label" />';
    html += '</div>';
    html += '<div class="quickedit-toolbar quickedit-toolbar-field clearfix" />';
    html += '</div><div class="quickedit-toolbar-lining"></div></div>';
    return html;
  };

  /**
   * Theme function for a toolbar container of the Quick Edit module.
   *
   * @param {object} settings
   *   Settings object used to construct the markup.
   * @param {string} settings.entityLabel
   *   The title of the active entity.
   * @param {string} settings.fieldLabel
   *   The label of the highlighted or active field.
   *
   * @return {string}
   *   The corresponding HTML.
   */
  Drupal.theme.quickeditEntityToolbarLabel = function (settings) {
    // @todo Add XSS regression test coverage in https://www.drupal.org/node/2547437
    return '<span class="field">' + Drupal.checkPlain(settings.fieldLabel) + '</span>' + Drupal.checkPlain(settings.entityLabel);
  };

  /**
   * Element defining a containing box for the placement of the entity toolbar.
   *
   * @return {string}
   *   The corresponding HTML.
   */
  Drupal.theme.quickeditEntityToolbarFence = function () {
    return '<div id="quickedit-toolbar-fence" />';
  };

  /**
   * Theme function for a toolbar container of the Quick Edit module.
   *
   * @param {object} settings
   *   Settings object used to construct the markup.
   * @param {string} settings.id
   *   The id to apply to the toolbar container.
   *
   * @return {string}
   *   The corresponding HTML.
   */
  Drupal.theme.quickeditFieldToolbar = function (settings) {
    return '<div id="' + settings.id + '" />';
  };

  /**
   * Theme function for a toolbar toolgroup of the Quick Edit module.
   *
   * @param {object} settings
   *   Settings object used to construct the markup.
   * @param {string} [settings.id]
   *   The id of the toolgroup.
   * @param {string} settings.classes
   *   The class of the toolgroup.
   * @param {Array} settings.buttons
   *   See {@link Drupal.theme.quickeditButtons}.
   *
   * @return {string}
   *   The corresponding HTML.
   */
  Drupal.theme.quickeditToolgroup = function (settings) {
    // Classes.
    var classes = (settings.classes || []);
    classes.unshift('quickedit-toolgroup');
    var html = '';
    html += '<div class="' + classes.join(' ') + '"';
    if (settings.id) {
      html += ' id="' + settings.id + '"';
    }
    html += '>';
    html += Drupal.theme('quickeditButtons', {buttons: settings.buttons});
    html += '</div>';
    return html;
  };

  /**
   * Theme function for buttons of the Quick Edit module.
   *
   * Can be used for the buttons both in the toolbar toolgroups and in the
   * modal.
   *
   * @param {object} settings
   *   Settings object used to construct the markup.
   * @param {Array} settings.buttons
   * - String type: the type of the button (defaults to 'button')
   * - Array classes: the classes of the button.
   * - String label: the label of the button.
   *
   * @return {string}
   *   The corresponding HTML.
   */
  Drupal.theme.quickeditButtons = function (settings) {
    var html = '';
    for (var i = 0; i < settings.buttons.length; i++) {
      var button = settings.buttons[i];
      if (!button.hasOwnProperty('type')) {
        button.type = 'button';
      }
      // Attributes.
      var attributes = [];
      var attrMap = settings.buttons[i].attributes || {};
      for (var attr in attrMap) {
        if (attrMap.hasOwnProperty(attr)) {
          attributes.push(attr + ((attrMap[attr]) ? '="' + attrMap[attr] + '"' : ''));
        }
      }
      html += '<button type="' + button.type + '" class="' + button.classes + '"' + ' ' + attributes.join(' ') + '>';
      html += button.label;
      html += '</button>';
    }
    return html;
  };

  /**
   * Theme function for a form container of the Quick Edit module.
   *
   * @param {object} settings
   *   Settings object used to construct the markup.
   * @param {string} settings.id
   *   The id to apply to the toolbar container.
   * @param {string} settings.loadingMsg
   *   The message to show while loading.
   *
   * @return {string}
   *   The corresponding HTML.
   */
  Drupal.theme.quickeditFormContainer = function (settings) {
    var html = '';
    html += '<div id="' + settings.id + '" class="quickedit-form-container">';
    html += '  <div class="quickedit-form">';
    html += '    <div class="placeholder">';
    html += settings.loadingMsg;
    html += '    </div>';
    html += '  </div>';
    html += '</div>';
    return html;
  };

})(jQuery, Drupal);
;
/**
 * @file
 * JS for Radix.
 */
(function ($, Drupal, window, document, undefined) {
  // Allow dropdown links to be clickable by showing dropdowns on hover/focus.
  // Most of the work done here was implemented after an accessibility study.
  // @see https://www.drupal.org/node/2500635
  Drupal.behaviors.radix_dropdown = {
    attach: function(context) {
      var $context = $(context);

      $context.find('.dropdown').once('radix-dropdown').each(function () {
        var dropdown = this;

        // Helper function to show the dropdown.
        function show() {
          if (!$(dropdown).hasClass('open')) {
            $('>[data-toggle="dropdown"]', dropdown).trigger('click.bs.dropdown');
          }
        }

        // Helper function to hide the dropdown.
        function hide() {
          if ($(dropdown).hasClass('open')) {
            $('>[data-toggle="dropdown"]', dropdown).trigger('click.bs.dropdown');
          }
        }

        // Show dropdown on hover and focus.
        $(this).on('mouseenter.radix.dropdown', function(e) {
          show();
        });
        $(this).on('mouseleave.radix.dropdown', function() {
          hide();
        });

        $(this).on('keydown.radix.dropdown', function(e) {
          // Prevent up/down arrow from doing anything -- they conflict with
          // using focus to show the dropdown, and the default Bootstrap keydown
          // handler will trigger our click handler to visit the link.
          if (e.keyCode == 38 || e.keyCode == 40) {
            return false;
          }
          // Show/hide dropdown with spacebar.
          if (e.keyCode == 32) {
            $('>[data-toggle="dropdown"]', dropdown).trigger('click.bs.dropdown');
            return false;
          }
          // Hide the dropdown with the escape hey.
          if (e.keyCode == 27) {
            // Leave focus on the parent after it's hidden.
            $('>[data-toggle="dropdown"]', dropdown).focus();
            hide();
            return false;
          }
        });

        // Allow a.dropdown-toggle to be clickable.
        if ($(this).has('> a.dropdown-toggle')) {
          $(this).on('click.radix.dropdown', function(e) {
            var $target = $(e.target);
            if ($target.parent().get(0) == dropdown && $target.is('a.dropdown-toggle') && $target.attr('href')) {
              e.preventDefault();
              window.location.href = $target.attr('href');
            }
          });
        }
      });

      $context.find('body').once('radix-dropdown-focus').on('focusout.radix.dropdown', function(e) {
        var parent = $(e.target).closest('li.radix-dropdown-processed.open').get(0);
        if (parent) {
          // Defer to after all handlers so we can see where focus landed.
          setTimeout(function () {
            // Don't do anything if no element is focused - that can only
            // happen with the mouse and this is meant to close the menu
            // when the keyboard is used to change focus.
            if (!document.activeElement || document.activeElement === document.body) {
              return;
            }
            // Hide the parent if it doesn't contain the now focused element
            // and is still open.
            if (!parent.contains(document.activeElement) && $(parent).hasClass('open')) {
              $(parent).trigger('click.bs.dropdown');
            }
          }, 0);
        }
      });
    }
  };

  // Bootstrap tooltip.
  Drupal.behaviors.radix_tooltip = {
    attach: function(context, setting) {
      if ($.fn.tooltip) {
        $("[data-toggle='tooltip']").tooltip();
      }
    }
  };

  // Bootstrap popover.
  Drupal.behaviors.radix_popover = {
    attach: function(context, setting) {
      if ($.fn.popover) {
        $("[data-toggle='popover']").popover();
      }
    }
  };

  $(document).ready(function() {
    // Show first tab by default.
    // Ignore the "primary" tabs on the node edit page.
    if ($.fn.tab) {
      var tabs = $('.nav-tabs').not('.primary');
      tabs.children('li').first().find('a').tab('show');

      if (hash = window.location.hash) {
        $('.nav-tabs > li > a[href$="' + hash + '"]').tab('show');
      }
    }
  });
})(jQuery, Drupal, this, this.document);
;
/*!
 * Materialize v0.99.0 (http://materializecss.com)
 * Copyright 2014-2017 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
if(void 0===jQuery){var jQuery;jQuery="function"==typeof require?$=require("jquery"):$}!function(t){"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e)}):"object"==typeof module&&"object"==typeof module.exports?exports=t(require("jquery")):t(jQuery)}(function(t){function e(t){var e=7.5625,i=2.75;return t<1/i?e*t*t:t<2/i?e*(t-=1.5/i)*t+.75:t<2.5/i?e*(t-=2.25/i)*t+.9375:e*(t-=2.625/i)*t+.984375}t.easing.jswing=t.easing.swing;var i=Math.pow,n=Math.sqrt,o=Math.sin,a=Math.cos,r=Math.PI,s=1.70158,l=1.525*s,c=2*r/3,u=2*r/4.5;t.extend(t.easing,{def:"easeOutQuad",swing:function(e){return t.easing[t.easing.def](e)},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return 1-(1-t)*(1-t)},easeInOutQuad:function(t){return t<.5?2*t*t:1-i(-2*t+2,2)/2},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1-i(1-t,3)},easeInOutCubic:function(t){return t<.5?4*t*t*t:1-i(-2*t+2,3)/2},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1-i(1-t,4)},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-i(-2*t+2,4)/2},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1-i(1-t,5)},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1-i(-2*t+2,5)/2},easeInSine:function(t){return 1-a(t*r/2)},easeOutSine:function(t){return o(t*r/2)},easeInOutSine:function(t){return-(a(r*t)-1)/2},easeInExpo:function(t){return 0===t?0:i(2,10*t-10)},easeOutExpo:function(t){return 1===t?1:1-i(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:t<.5?i(2,20*t-10)/2:(2-i(2,-20*t+10))/2},easeInCirc:function(t){return 1-n(1-i(t,2))},easeOutCirc:function(t){return n(1-i(t-1,2))},easeInOutCirc:function(t){return t<.5?(1-n(1-i(2*t,2)))/2:(n(1-i(-2*t+2,2))+1)/2},easeInElastic:function(t){return 0===t?0:1===t?1:-i(2,10*t-10)*o((10*t-10.75)*c)},easeOutElastic:function(t){return 0===t?0:1===t?1:i(2,-10*t)*o((10*t-.75)*c)+1},easeInOutElastic:function(t){return 0===t?0:1===t?1:t<.5?-i(2,20*t-10)*o((20*t-11.125)*u)/2:i(2,-20*t+10)*o((20*t-11.125)*u)/2+1},easeInBack:function(t){return 2.70158*t*t*t-s*t*t},easeOutBack:function(t){return 1+2.70158*i(t-1,3)+s*i(t-1,2)},easeInOutBack:function(t){return t<.5?i(2*t,2)*(7.189819*t-l)/2:(i(2*t-2,2)*((l+1)*(2*t-2)+l)+2)/2},easeInBounce:function(t){return 1-e(1-t)},easeOutBounce:e,easeInOutBounce:function(t){return t<.5?(1-e(1-2*t))/2:(1+e(2*t-1))/2}})}),jQuery.extend(jQuery.easing,{easeInOutMaterial:function(t,e,i,n,o){return(e/=o/2)<1?n/2*e*e+i:n/4*((e-=2)*e*e+2)+i}}),jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(function(t){function e(t){var e=t.length,n=i.type(t);return"function"!==n&&!i.isWindow(t)&&(!(1!==t.nodeType||!e)||("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t))}if(!t.jQuery){var i=function(t,e){return new i.fn.init(t,e)};i.isWindow=function(t){return null!=t&&t==t.window},i.type=function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?o[r.call(t)]||"object":typeof t},i.isArray=Array.isArray||function(t){return"array"===i.type(t)},i.isPlainObject=function(t){var e;if(!t||"object"!==i.type(t)||t.nodeType||i.isWindow(t))return!1;try{if(t.constructor&&!a.call(t,"constructor")&&!a.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}for(e in t);return void 0===e||a.call(t,e)},i.each=function(t,i,n){var o=0,a=t.length,r=e(t);if(n){if(r)for(;a>o&&!1!==i.apply(t[o],n);o++);else for(o in t)if(!1===i.apply(t[o],n))break}else if(r)for(;a>o&&!1!==i.call(t[o],o,t[o]);o++);else for(o in t)if(!1===i.call(t[o],o,t[o]))break;return t},i.data=function(t,e,o){if(void 0===o){var a=(r=t[i.expando])&&n[r];if(void 0===e)return a;if(a&&e in a)return a[e]}else if(void 0!==e){var r=t[i.expando]||(t[i.expando]=++i.uuid);return n[r]=n[r]||{},n[r][e]=o,o}},i.removeData=function(t,e){var o=t[i.expando],a=o&&n[o];a&&i.each(e,function(t,e){delete a[e]})},i.extend=function(){var t,e,n,o,a,r,s=arguments[0]||{},l=1,c=arguments.length,u=!1;for("boolean"==typeof s&&(u=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==i.type(s)&&(s={}),l===c&&(s=this,l--);c>l;l++)if(null!=(a=arguments[l]))for(o in a)t=s[o],n=a[o],s!==n&&(u&&n&&(i.isPlainObject(n)||(e=i.isArray(n)))?(e?(e=!1,r=t&&i.isArray(t)?t:[]):r=t&&i.isPlainObject(t)?t:{},s[o]=i.extend(u,r,n)):void 0!==n&&(s[o]=n));return s},i.queue=function(t,n,o){if(t){n=(n||"fx")+"queue";var a=i.data(t,n);return o?(!a||i.isArray(o)?a=i.data(t,n,function(t,i){var n=i||[];return null!=t&&(e(Object(t))?function(t,e){for(var i=+e.length,n=0,o=t.length;i>n;)t[o++]=e[n++];if(i!==i)for(;void 0!==e[n];)t[o++]=e[n++];t.length=o}(n,"string"==typeof t?[t]:t):[].push.call(n,t)),n}(o)):a.push(o),a):a||[]}},i.dequeue=function(t,e){i.each(t.nodeType?[t]:t,function(t,n){e=e||"fx";var o=i.queue(n,e),a=o.shift();"inprogress"===a&&(a=o.shift()),a&&("fx"===e&&o.unshift("inprogress"),a.call(n,function(){i.dequeue(n,e)}))})},i.fn=i.prototype={init:function(t){if(t.nodeType)return this[0]=t,this;throw new Error("Not a DOM node.")},offset:function(){var e=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:e.top+(t.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:e.left+(t.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function t(){for(var t=this.offsetParent||document;t&&"html"===!t.nodeType.toLowerCase&&"static"===t.style.position;)t=t.offsetParent;return t||document}var e=this[0],t=t.apply(e),n=this.offset(),o=/^(?:body|html)$/i.test(t.nodeName)?{top:0,left:0}:i(t).offset();return n.top-=parseFloat(e.style.marginTop)||0,n.left-=parseFloat(e.style.marginLeft)||0,t.style&&(o.top+=parseFloat(t.style.borderTopWidth)||0,o.left+=parseFloat(t.style.borderLeftWidth)||0),{top:n.top-o.top,left:n.left-o.left}}};var n={};i.expando="velocity"+(new Date).getTime(),i.uuid=0;for(var o={},a=o.hasOwnProperty,r=o.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)o["[object "+s[l]+"]"]=s[l].toLowerCase();i.fn.init.prototype=i.fn,t.Velocity={Utilities:i}}}(window),function(t){"object"==typeof module&&"object"==typeof module.exports?module.exports=t():"function"==typeof define&&define.amd?define(t):t()}(function(){return function(t,e,i,n){function o(t){for(var e=-1,i=t?t.length:0,n=[];++e<i;){var o=t[e];o&&n.push(o)}return n}function a(t){return v.isWrapped(t)?t=[].slice.call(t):v.isNode(t)&&(t=[t]),t}function r(t){var e=p.data(t,"velocity");return null===e?n:e}function s(t){return function(e){return Math.round(e*t)*(1/t)}}function l(t,i,n,o){function a(t,e){return 1-3*e+3*t}function r(t,e){return 3*e-6*t}function s(t){return 3*t}function l(t,e,i){return((a(e,i)*t+r(e,i))*t+s(e))*t}function c(t,e,i){return 3*a(e,i)*t*t+2*r(e,i)*t+s(e)}function u(e,i){for(var o=0;v>o;++o){var a=c(i,t,n);if(0===a)return i;i-=(l(i,t,n)-e)/a}return i}function d(){for(var e=0;b>e;++e)C[e]=l(e*w,t,n)}function p(e,i,o){var a,r,s=0;do{r=i+(o-i)/2,a=l(r,t,n)-e,a>0?o=r:i=r}while(Math.abs(a)>m&&++s<y);return r}function h(e){for(var i=0,o=1,a=b-1;o!=a&&C[o]<=e;++o)i+=w;var r=i+(e-C[--o])/(C[o+1]-C[o])*w,s=c(r,t,n);return s>=g?u(e,r):0==s?r:p(e,i,i+w)}function f(){T=!0,(t!=i||n!=o)&&d()}var v=4,g=.001,m=1e-7,y=10,b=11,w=1/(b-1),x="Float32Array"in e;if(4!==arguments.length)return!1;for(var k=0;4>k;++k)if("number"!=typeof arguments[k]||isNaN(arguments[k])||!isFinite(arguments[k]))return!1;t=Math.min(t,1),n=Math.min(n,1),t=Math.max(t,0),n=Math.max(n,0);var C=x?new Float32Array(b):new Array(b),T=!1,S=function(e){return T||f(),t===i&&n===o?e:0===e?0:1===e?1:l(h(e),i,o)};S.getControlPoints=function(){return[{x:t,y:i},{x:n,y:o}]};var P="generateBezier("+[t,i,n,o]+")";return S.toString=function(){return P},S}function c(t,e){var i=t;return v.isString(t)?b.Easings[t]||(i=!1):i=v.isArray(t)&&1===t.length?s.apply(null,t):v.isArray(t)&&2===t.length?w.apply(null,t.concat([e])):!(!v.isArray(t)||4!==t.length)&&l.apply(null,t),!1===i&&(i=b.Easings[b.defaults.easing]?b.defaults.easing:y),i}function u(t){if(t){var e=(new Date).getTime(),i=b.State.calls.length;i>1e4&&(b.State.calls=o(b.State.calls));for(var a=0;i>a;a++)if(b.State.calls[a]){var s=b.State.calls[a],l=s[0],c=s[2],h=s[3],f=!!h,g=null;h||(h=b.State.calls[a][3]=e-16);for(var m=Math.min((e-h)/c.duration,1),y=0,w=l.length;w>y;y++){var k=l[y],T=k.element;if(r(T)){var S=!1;if(c.display!==n&&null!==c.display&&"none"!==c.display){if("flex"===c.display){var P=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];p.each(P,function(t,e){x.setPropertyValue(T,"display",e)})}x.setPropertyValue(T,"display",c.display)}c.visibility!==n&&"hidden"!==c.visibility&&x.setPropertyValue(T,"visibility",c.visibility);for(var A in k)if("element"!==A){var O,E=k[A],M=v.isString(E.easing)?b.Easings[E.easing]:E.easing;if(1===m)O=E.endValue;else{var I=E.endValue-E.startValue;if(O=E.startValue+I*M(m,c,I),!f&&O===E.currentValue)continue}if(E.currentValue=O,"tween"===A)g=O;else{if(x.Hooks.registered[A]){var q=x.Hooks.getRoot(A),_=r(T).rootPropertyValueCache[q];_&&(E.rootPropertyValue=_)}var V=x.setPropertyValue(T,A,E.currentValue+(0===parseFloat(O)?"":E.unitType),E.rootPropertyValue,E.scrollData);x.Hooks.registered[A]&&(r(T).rootPropertyValueCache[q]=x.Normalizations.registered[q]?x.Normalizations.registered[q]("extract",null,V[1]):V[1]),"transform"===V[0]&&(S=!0)}}c.mobileHA&&r(T).transformCache.translate3d===n&&(r(T).transformCache.translate3d="(0px, 0px, 0px)",S=!0),S&&x.flushTransformCache(T)}}c.display!==n&&"none"!==c.display&&(b.State.calls[a][2].display=!1),c.visibility!==n&&"hidden"!==c.visibility&&(b.State.calls[a][2].visibility=!1),c.progress&&c.progress.call(s[1],s[1],m,Math.max(0,h+c.duration-e),h,g),1===m&&d(a)}}b.State.isTicking&&C(u)}function d(t,e){if(!b.State.calls[t])return!1;for(var i=b.State.calls[t][0],o=b.State.calls[t][1],a=b.State.calls[t][2],s=b.State.calls[t][4],l=!1,c=0,u=i.length;u>c;c++){var d=i[c].element;if(e||a.loop||("none"===a.display&&x.setPropertyValue(d,"display",a.display),"hidden"===a.visibility&&x.setPropertyValue(d,"visibility",a.visibility)),!0!==a.loop&&(p.queue(d)[1]===n||!/\.velocityQueueEntryFlag/i.test(p.queue(d)[1]))&&r(d)){r(d).isAnimating=!1,r(d).rootPropertyValueCache={};var h=!1;p.each(x.Lists.transforms3D,function(t,e){var i=/^scale/.test(e)?1:0,o=r(d).transformCache[e];r(d).transformCache[e]!==n&&new RegExp("^\\("+i+"[^.]").test(o)&&(h=!0,delete r(d).transformCache[e])}),a.mobileHA&&(h=!0,delete r(d).transformCache.translate3d),h&&x.flushTransformCache(d),x.Values.removeClass(d,"velocity-animating")}if(!e&&a.complete&&!a.loop&&c===u-1)try{a.complete.call(o,o)}catch(t){setTimeout(function(){throw t},1)}s&&!0!==a.loop&&s(o),r(d)&&!0===a.loop&&!e&&(p.each(r(d).tweensContainer,function(t,e){/^rotate/.test(t)&&360===parseFloat(e.endValue)&&(e.endValue=0,e.startValue=360),/^backgroundPosition/.test(t)&&100===parseFloat(e.endValue)&&"%"===e.unitType&&(e.endValue=0,e.startValue=100)}),b(d,"reverse",{loop:!0,delay:a.delay})),!1!==a.queue&&p.dequeue(d,a.queue)}b.State.calls[t]=!1;for(var f=0,v=b.State.calls.length;v>f;f++)if(!1!==b.State.calls[f]){l=!0;break}!1===l&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var p,h=function(){if(i.documentMode)return i.documentMode;for(var t=7;t>4;t--){var e=i.createElement("div");if(e.innerHTML="\x3c!--[if IE "+t+"]><span></span><![endif]--\x3e",e.getElementsByTagName("span").length)return e=null,t}return n}(),f=function(){var t=0;return e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(e){var i,n=(new Date).getTime();return i=Math.max(0,16-(n-t)),t=n+i,setTimeout(function(){e(n+i)},i)}}(),v={isString:function(t){return"string"==typeof t},isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},isFunction:function(t){return"[object Function]"===Object.prototype.toString.call(t)},isNode:function(t){return t&&t.nodeType},isNodeList:function(t){return"object"==typeof t&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t))&&t.length!==n&&(0===t.length||"object"==typeof t[0]&&t[0].nodeType>0)},isWrapped:function(t){return t&&(t.jquery||e.Zepto&&e.Zepto.zepto.isZ(t))},isSVG:function(t){return e.SVGElement&&t instanceof e.SVGElement},isEmptyObject:function(t){for(var e in t)return!1;return!0}},g=!1;if(t.fn&&t.fn.jquery?(p=t,g=!0):p=e.Velocity.Utilities,8>=h&&!g)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");{if(!(7>=h)){var m=400,y="swing",b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:e.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:i.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:p,Redirects:{},Easings:{},Promise:e.Promise,defaults:{queue:"",duration:m,easing:y,begin:n,complete:n,progress:n,display:n,visibility:n,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(t){p.data(t,"velocity",{isSVG:v.isSVG(t),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};e.pageYOffset!==n?(b.State.scrollAnchor=e,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=i.documentElement||i.body.parentNode||i.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");var w=function(){function t(t){return-t.tension*t.x-t.friction*t.v}function e(e,i,n){var o={x:e.x+n.dx*i,v:e.v+n.dv*i,tension:e.tension,friction:e.friction};return{dx:o.v,dv:t(o)}}function i(i,n){var o={dx:i.v,dv:t(i)},a=e(i,.5*n,o),r=e(i,.5*n,a),s=e(i,n,r),l=1/6*(o.dx+2*(a.dx+r.dx)+s.dx),c=1/6*(o.dv+2*(a.dv+r.dv)+s.dv);return i.x=i.x+l*n,i.v=i.v+c*n,i}return function t(e,n,o){var a,r,s,l={x:-1,v:0,tension:null,friction:null},c=[0],u=0;for(e=parseFloat(e)||500,n=parseFloat(n)||20,o=o||null,l.tension=e,l.friction=n,(a=null!==o)?(u=t(e,n),r=u/o*.016):r=.016;s=i(s||l,r),c.push(1+s.x),u+=16,Math.abs(s.x)>1e-4&&Math.abs(s.v)>1e-4;);return a?function(t){return c[t*(c.length-1)|0]}:u}}();b.Easings={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},spring:function(t){return 1-Math.cos(4.5*t*Math.PI)*Math.exp(6*-t)}},p.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(t,e){b.Easings[e[0]]=l.apply(null,e[1])});var x=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(a=0;a<x.Lists.colors.length;a++){var t="color"===x.Lists.colors[a]?"0 0 0 1":"255 255 255 1";x.Hooks.templates[x.Lists.colors[a]]=["Red Green Blue Alpha",t]}var e,i,n;if(h)for(e in x.Hooks.templates){n=(i=x.Hooks.templates[e])[0].split(" ");var o=i[1].match(x.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),x.Hooks.templates[e]=[n.join(" "),o.join(" ")])}for(e in x.Hooks.templates){n=(i=x.Hooks.templates[e])[0].split(" ");for(var a in n){var r=e+n[a],s=a;x.Hooks.registered[r]=[e,s]}}},getRoot:function(t){var e=x.Hooks.registered[t];return e?e[0]:t},cleanRootPropertyValue:function(t,e){return x.RegEx.valueUnwrap.test(e)&&(e=e.match(x.RegEx.valueUnwrap)[1]),x.Values.isCSSNullValue(e)&&(e=x.Hooks.templates[t][1]),e},extractValue:function(t,e){var i=x.Hooks.registered[t];if(i){var n=i[0],o=i[1];return(e=x.Hooks.cleanRootPropertyValue(n,e)).toString().match(x.RegEx.valueSplit)[o]}return e},injectValue:function(t,e,i){var n=x.Hooks.registered[t];if(n){var o,a=n[0],r=n[1];return i=x.Hooks.cleanRootPropertyValue(a,i),o=i.toString().match(x.RegEx.valueSplit),o[r]=e,o.join(" ")}return i}},Normalizations:{registered:{clip:function(t,e,i){switch(t){case"name":return"clip";case"extract":var n;return x.RegEx.wrappedValueAlreadyExtracted.test(i)?n=i:(n=i.toString().match(x.RegEx.valueUnwrap),n=n?n[1].replace(/,(\s+)?/g," "):i),n;case"inject":return"rect("+i+")"}},blur:function(t,e,i){switch(t){case"name":return b.State.isFirefox?"filter":"-webkit-filter";case"extract":var n=parseFloat(i);if(!n&&0!==n){var o=i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);n=o?o[1]:0}return n;case"inject":return parseFloat(i)?"blur("+i+")":"none"}},opacity:function(t,e,i){if(8>=h)switch(t){case"name":return"filter";case"extract":var n=i.toString().match(/alpha\(opacity=(.*)\)/i);return i=n?n[1]/100:1;case"inject":return e.style.zoom=1,parseFloat(i)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(i),10)+")"}else switch(t){case"name":return"opacity";case"extract":case"inject":return i}}},register:function(){9>=h||b.State.isGingerbread||(x.Lists.transformsBase=x.Lists.transformsBase.concat(x.Lists.transforms3D));for(t=0;t<x.Lists.transformsBase.length;t++)!function(){var e=x.Lists.transformsBase[t];x.Normalizations.registered[e]=function(t,i,o){switch(t){case"name":return"transform";case"extract":return r(i)===n||r(i).transformCache[e]===n?/^scale/i.test(e)?1:0:r(i).transformCache[e].replace(/[()]/g,"");case"inject":var a=!1;switch(e.substr(0,e.length-1)){case"translate":a=!/(%|px|em|rem|vw|vh|\d)$/i.test(o);break;case"scal":case"scale":b.State.isAndroid&&r(i).transformCache[e]===n&&1>o&&(o=1),a=!/(\d)$/i.test(o);break;case"skew":a=!/(deg|\d)$/i.test(o);break;case"rotate":a=!/(deg|\d)$/i.test(o)}return a||(r(i).transformCache[e]="("+o+")"),r(i).transformCache[e]}}}();for(var t=0;t<x.Lists.colors.length;t++)!function(){var e=x.Lists.colors[t];x.Normalizations.registered[e]=function(t,i,o){switch(t){case"name":return e;case"extract":var a;if(x.RegEx.wrappedValueAlreadyExtracted.test(o))a=o;else{var r,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(o)?r=s[o]!==n?s[o]:s.black:x.RegEx.isHex.test(o)?r="rgb("+x.Values.hexToRgb(o).join(" ")+")":/^rgba?\(/i.test(o)||(r=s.black),a=(r||o).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=h||3!==a.split(" ").length||(a+=" 1"),a;case"inject":return 8>=h?4===o.split(" ").length&&(o=o.split(/\s+/).slice(0,3).join(" ")):3===o.split(" ").length&&(o+=" 1"),(8>=h?"rgb":"rgba")+"("+o.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})},SVGAttribute:function(t){var e="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(h||b.State.isAndroid&&!b.State.isChrome)&&(e+="|transform"),new RegExp("^("+e+")$","i").test(t)},prefixCheck:function(t){if(b.State.prefixMatches[t])return[b.State.prefixMatches[t],!0];for(var e=["","Webkit","Moz","ms","O"],i=0,n=e.length;n>i;i++){var o;if(o=0===i?t:e[i]+t.replace(/^\w/,function(t){return t.toUpperCase()}),v.isString(b.State.prefixElement.style[o]))return b.State.prefixMatches[t]=o,[o,!0]}return[t,!1]}},Values:{hexToRgb:function(t){var e,i=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return t=t.replace(i,function(t,e,i,n){return e+e+i+i+n+n}),e=n.exec(t),e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:[0,0,0]},isCSSNullValue:function(t){return 0==t||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)},getUnitType:function(t){return/^(rotate|skew)/i.test(t)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t)?"":"px"},getDisplayType:function(t){var e=t&&t.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e)?"inline":/^(li)$/i.test(e)?"list-item":/^(tr)$/i.test(e)?"table-row":/^(table)$/i.test(e)?"table":/^(tbody)$/i.test(e)?"table-row-group":"block"},addClass:function(t,e){t.classList?t.classList.add(e):t.className+=(t.className.length?" ":"")+e},removeClass:function(t,e){t.classList?t.classList.remove(e):t.className=t.className.toString().replace(new RegExp("(^|\\s)"+e.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(t,i,o,a){function s(t,i){function o(){c&&x.setPropertyValue(t,"display","none")}var l=0;if(8>=h)l=p.css(t,i);else{var c=!1;if(/^(width|height)$/.test(i)&&0===x.getPropertyValue(t,"display")&&(c=!0,x.setPropertyValue(t,"display",x.Values.getDisplayType(t))),!a){if("height"===i&&"border-box"!==x.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var u=t.offsetHeight-(parseFloat(x.getPropertyValue(t,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(t,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(t,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(t,"paddingBottom"))||0);return o(),u}if("width"===i&&"border-box"!==x.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var d=t.offsetWidth-(parseFloat(x.getPropertyValue(t,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(t,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(t,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(t,"paddingRight"))||0);return o(),d}}var f;f=r(t)===n?e.getComputedStyle(t,null):r(t).computedStyle?r(t).computedStyle:r(t).computedStyle=e.getComputedStyle(t,null),"borderColor"===i&&(i="borderTopColor"),(""===(l=9===h&&"filter"===i?f.getPropertyValue(i):f[i])||null===l)&&(l=t.style[i]),o()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(i)){var v=s(t,"position");("fixed"===v||"absolute"===v&&/top|left/i.test(i))&&(l=p(t).position()[i]+"px")}return l}var l;if(x.Hooks.registered[i]){var c=i,u=x.Hooks.getRoot(c);o===n&&(o=x.getPropertyValue(t,x.Names.prefixCheck(u)[0])),x.Normalizations.registered[u]&&(o=x.Normalizations.registered[u]("extract",t,o)),l=x.Hooks.extractValue(c,o)}else if(x.Normalizations.registered[i]){var d,f;"transform"!==(d=x.Normalizations.registered[i]("name",t))&&(f=s(t,x.Names.prefixCheck(d)[0]),x.Values.isCSSNullValue(f)&&x.Hooks.templates[i]&&(f=x.Hooks.templates[i][1])),l=x.Normalizations.registered[i]("extract",t,f)}if(!/^[\d-]/.test(l))if(r(t)&&r(t).isSVG&&x.Names.SVGAttribute(i))if(/^(height|width)$/i.test(i))try{l=t.getBBox()[i]}catch(t){l=0}else l=t.getAttribute(i);else l=s(t,x.Names.prefixCheck(i)[0]);return x.Values.isCSSNullValue(l)&&(l=0),b.debug>=2&&console.log("Get "+i+": "+l),l},setPropertyValue:function(t,i,n,o,a){var s=i;if("scroll"===i)a.container?a.container["scroll"+a.direction]=n:"Left"===a.direction?e.scrollTo(n,a.alternateValue):e.scrollTo(a.alternateValue,n);else if(x.Normalizations.registered[i]&&"transform"===x.Normalizations.registered[i]("name",t))x.Normalizations.registered[i]("inject",t,n),s="transform",n=r(t).transformCache[i];else{if(x.Hooks.registered[i]){var l=i,c=x.Hooks.getRoot(i);o=o||x.getPropertyValue(t,c),n=x.Hooks.injectValue(l,n,o),i=c}if(x.Normalizations.registered[i]&&(n=x.Normalizations.registered[i]("inject",t,n),i=x.Normalizations.registered[i]("name",t)),s=x.Names.prefixCheck(i)[0],8>=h)try{t.style[s]=n}catch(t){b.debug&&console.log("Browser does not support ["+n+"] for ["+s+"]")}else r(t)&&r(t).isSVG&&x.Names.SVGAttribute(i)?t.setAttribute(i,n):t.style[s]=n;b.debug>=2&&console.log("Set "+i+" ("+s+"): "+n)}return[s,n]},flushTransformCache:function(t){function e(e){return parseFloat(x.getPropertyValue(t,e))}var i="";if((h||b.State.isAndroid&&!b.State.isChrome)&&r(t).isSVG){var n={translate:[e("translateX"),e("translateY")],skewX:[e("skewX")],skewY:[e("skewY")],scale:1!==e("scale")?[e("scale"),e("scale")]:[e("scaleX"),e("scaleY")],rotate:[e("rotateZ"),0,0]};p.each(r(t).transformCache,function(t){/^translate/i.test(t)?t="translate":/^scale/i.test(t)?t="scale":/^rotate/i.test(t)&&(t="rotate"),n[t]&&(i+=t+"("+n[t].join(" ")+") ",delete n[t])})}else{var o,a;p.each(r(t).transformCache,function(e){return o=r(t).transformCache[e],"transformPerspective"===e?(a=o,!0):(9===h&&"rotateZ"===e&&(e="rotate"),void(i+=e+o+" "))}),a&&(i="perspective"+a+" "+i)}x.setPropertyValue(t,"transform",i)}};x.Hooks.register(),x.Normalizations.register(),b.hook=function(t,e,i){var o=n;return t=a(t),p.each(t,function(t,a){if(r(a)===n&&b.init(a),i===n)o===n&&(o=b.CSS.getPropertyValue(a,e));else{var s=b.CSS.setPropertyValue(a,e,i);"transform"===s[0]&&b.CSS.flushTransformCache(a),o=s}}),o};var k=function(){function t(){return s?P.promise||null:l}function o(){function t(t){function d(t,e){var i=n,o=n,r=n;return v.isArray(t)?(i=t[0],!v.isArray(t[1])&&/^[\d-]/.test(t[1])||v.isFunction(t[1])||x.RegEx.isHex.test(t[1])?r=t[1]:(v.isString(t[1])&&!x.RegEx.isHex.test(t[1])||v.isArray(t[1]))&&(o=e?t[1]:c(t[1],s.duration),t[2]!==n&&(r=t[2]))):i=t,e||(o=o||s.easing),v.isFunction(i)&&(i=i.call(a,T,C)),v.isFunction(r)&&(r=r.call(a,T,C)),[i||0,o,r]}function h(t,e){var i,n;return n=(e||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(t){return i=t,""}),i||(i=x.Values.getUnitType(t)),[n,i]}if(s.begin&&0===T)try{s.begin.call(f,f)}catch(t){setTimeout(function(){throw t},1)}if("scroll"===A){var m,w,k,S=/^x$/i.test(s.axis)?"Left":"Top",O=parseFloat(s.offset)||0;s.container?v.isWrapped(s.container)||v.isNode(s.container)?(s.container=s.container[0]||s.container,m=s.container["scroll"+S],k=m+p(a).position()[S.toLowerCase()]+O):s.container=null:(m=b.State.scrollAnchor[b.State["scrollProperty"+S]],w=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===S?"Top":"Left")]],k=p(a).offset()[S.toLowerCase()]+O),l={scroll:{rootPropertyValue:!1,startValue:m,currentValue:m,endValue:k,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:S,alternateValue:w}},element:a},b.debug&&console.log("tweensContainer (scroll): ",l.scroll,a)}else if("reverse"===A){if(!r(a).tweensContainer)return void p.dequeue(a,s.queue);"none"===r(a).opts.display&&(r(a).opts.display="auto"),"hidden"===r(a).opts.visibility&&(r(a).opts.visibility="visible"),r(a).opts.loop=!1,r(a).opts.begin=null,r(a).opts.complete=null,y.easing||delete s.easing,y.duration||delete s.duration,s=p.extend({},r(a).opts,s);I=p.extend(!0,{},r(a).tweensContainer);for(var E in I)if("element"!==E){var M=I[E].startValue;I[E].startValue=I[E].currentValue=I[E].endValue,I[E].endValue=M,v.isEmptyObject(y)||(I[E].easing=s.easing),b.debug&&console.log("reverse tweensContainer ("+E+"): "+JSON.stringify(I[E]),a)}l=I}else if("start"===A){var I;r(a).tweensContainer&&!0===r(a).isAnimating&&(I=r(a).tweensContainer),p.each(g,function(t,e){if(RegExp("^"+x.Lists.colors.join("$|^")+"$").test(t)){var i=d(e,!0),o=i[0],a=i[1],r=i[2];if(x.RegEx.isHex.test(o)){for(var s=["Red","Green","Blue"],l=x.Values.hexToRgb(o),c=r?x.Values.hexToRgb(r):n,u=0;u<s.length;u++){var p=[l[u]];a&&p.push(a),c!==n&&p.push(c[u]),g[t+s[u]]=p}delete g[t]}}});for(var V in g){var z=d(g[V]),D=z[0],j=z[1],H=z[2];V=x.Names.camelCase(V);var L=x.Hooks.getRoot(V),W=!1;if(r(a).isSVG||"tween"===L||!1!==x.Names.prefixCheck(L)[1]||x.Normalizations.registered[L]!==n){(s.display!==n&&null!==s.display&&"none"!==s.display||s.visibility!==n&&"hidden"!==s.visibility)&&/opacity|filter/.test(V)&&!H&&0!==D&&(H=0),s._cacheValues&&I&&I[V]?(H===n&&(H=I[V].endValue+I[V].unitType),W=r(a).rootPropertyValueCache[L]):x.Hooks.registered[V]?H===n?(W=x.getPropertyValue(a,L),H=x.getPropertyValue(a,V,W)):W=x.Hooks.templates[L][1]:H===n&&(H=x.getPropertyValue(a,V));var N,F,Q,$=!1;if(N=h(V,H),H=N[0],Q=N[1],N=h(V,D),D=N[0].replace(/^([+-\/*])=/,function(t,e){return $=e,""}),F=N[1],H=parseFloat(H)||0,D=parseFloat(D)||0,"%"===F&&(/^(fontSize|lineHeight)$/.test(V)?(D/=100,F="em"):/^scale/.test(V)?(D/=100,F=""):/(Red|Green|Blue)$/i.test(V)&&(D=D/100*255,F="")),/[\/*]/.test($))F=Q;else if(Q!==F&&0!==H)if(0===D)F=Q;else{o=o||function(){var t={myParent:a.parentNode||i.body,position:x.getPropertyValue(a,"position"),fontSize:x.getPropertyValue(a,"fontSize")},n=t.position===q.lastPosition&&t.myParent===q.lastParent,o=t.fontSize===q.lastFontSize;q.lastParent=t.myParent,q.lastPosition=t.position,q.lastFontSize=t.fontSize;var s=100,l={};if(o&&n)l.emToPx=q.lastEmToPx,l.percentToPxWidth=q.lastPercentToPxWidth,l.percentToPxHeight=q.lastPercentToPxHeight;else{var c=r(a).isSVG?i.createElementNS("http://www.w3.org/2000/svg","rect"):i.createElement("div");b.init(c),t.myParent.appendChild(c),p.each(["overflow","overflowX","overflowY"],function(t,e){b.CSS.setPropertyValue(c,e,"hidden")}),b.CSS.setPropertyValue(c,"position",t.position),b.CSS.setPropertyValue(c,"fontSize",t.fontSize),b.CSS.setPropertyValue(c,"boxSizing","content-box"),p.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(t,e){b.CSS.setPropertyValue(c,e,s+"%")}),b.CSS.setPropertyValue(c,"paddingLeft",s+"em"),l.percentToPxWidth=q.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(c,"width",null,!0))||1)/s,l.percentToPxHeight=q.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(c,"height",null,!0))||1)/s,l.emToPx=q.lastEmToPx=(parseFloat(x.getPropertyValue(c,"paddingLeft"))||1)/s,t.myParent.removeChild(c)}return null===q.remToPx&&(q.remToPx=parseFloat(x.getPropertyValue(i.body,"fontSize"))||16),null===q.vwToPx&&(q.vwToPx=parseFloat(e.innerWidth)/100,q.vhToPx=parseFloat(e.innerHeight)/100),l.remToPx=q.remToPx,l.vwToPx=q.vwToPx,l.vhToPx=q.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),a),l}();var X=/margin|padding|left|right|width|text|word|letter/i.test(V)||/X$/.test(V)||"x"===V?"x":"y";switch(Q){case"%":H*="x"===X?o.percentToPxWidth:o.percentToPxHeight;break;case"px":break;default:H*=o[Q+"ToPx"]}switch(F){case"%":H*=1/("x"===X?o.percentToPxWidth:o.percentToPxHeight);break;case"px":break;default:H*=1/o[F+"ToPx"]}}switch($){case"+":D=H+D;break;case"-":D=H-D;break;case"*":D*=H;break;case"/":D=H/D}l[V]={rootPropertyValue:W,startValue:H,currentValue:H,endValue:D,unitType:F,easing:j},b.debug&&console.log("tweensContainer ("+V+"): "+JSON.stringify(l[V]),a)}else b.debug&&console.log("Skipping ["+L+"] due to a lack of browser support.")}l.element=a}l.element&&(x.Values.addClass(a,"velocity-animating"),_.push(l),""===s.queue&&(r(a).tweensContainer=l,r(a).opts=s),r(a).isAnimating=!0,T===C-1?(b.State.calls.push([_,f,s,null,P.resolver]),!1===b.State.isTicking&&(b.State.isTicking=!0,u())):T++)}var o,a=this,s=p.extend({},b.defaults,y),l={};switch(r(a)===n&&b.init(a),parseFloat(s.delay)&&!1!==s.queue&&p.queue(a,s.queue,function(t){b.velocityQueueEntryFlag=!0,r(a).delayTimer={setTimeout:setTimeout(t,parseFloat(s.delay)),next:t}}),s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=m;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}!1!==b.mock&&(!0===b.mock?s.duration=s.delay=1:(s.duration*=parseFloat(b.mock)||1,s.delay*=parseFloat(b.mock)||1)),s.easing=c(s.easing,s.duration),s.begin&&!v.isFunction(s.begin)&&(s.begin=null),s.progress&&!v.isFunction(s.progress)&&(s.progress=null),s.complete&&!v.isFunction(s.complete)&&(s.complete=null),s.display!==n&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=b.CSS.Values.getDisplayType(a))),s.visibility!==n&&null!==s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,!1===s.queue?s.delay?setTimeout(t,s.delay):t():p.queue(a,s.queue,function(e,i){return!0===i?(P.promise&&P.resolver(f),!0):(b.velocityQueueEntryFlag=!0,void t(e))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===p.queue(a)[0]||p.dequeue(a)}var s,l,h,f,g,y,w=arguments[0]&&(arguments[0].p||p.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||v.isString(arguments[0].properties));if(v.isWrapped(this)?(s=!1,h=0,f=this,l=this):(s=!0,h=1,f=w?arguments[0].elements||arguments[0].e:arguments[0]),f=a(f)){w?(g=arguments[0].properties||arguments[0].p,y=arguments[0].options||arguments[0].o):(g=arguments[h],y=arguments[h+1]);var C=f.length,T=0;if(!/^(stop|finish)$/i.test(g)&&!p.isPlainObject(y)){y={};for(var S=h+1;S<arguments.length;S++)v.isArray(arguments[S])||!/^(fast|normal|slow)$/i.test(arguments[S])&&!/^\d/.test(arguments[S])?v.isString(arguments[S])||v.isArray(arguments[S])?y.easing=arguments[S]:v.isFunction(arguments[S])&&(y.complete=arguments[S]):y.duration=arguments[S]}var P={promise:null,resolver:null,rejecter:null};s&&b.Promise&&(P.promise=new b.Promise(function(t,e){P.resolver=t,P.rejecter=e}));var A;switch(g){case"scroll":A="scroll";break;case"reverse":A="reverse";break;case"finish":case"stop":p.each(f,function(t,e){r(e)&&r(e).delayTimer&&(clearTimeout(r(e).delayTimer.setTimeout),r(e).delayTimer.next&&r(e).delayTimer.next(),delete r(e).delayTimer)});var O=[];return p.each(b.State.calls,function(t,e){e&&p.each(e[1],function(i,o){var a=y===n?"":y;return!0!==a&&e[2].queue!==a&&(y!==n||!1!==e[2].queue)||void p.each(f,function(i,n){n===o&&((!0===y||v.isString(y))&&(p.each(p.queue(n,v.isString(y)?y:""),function(t,e){v.isFunction(e)&&e(null,!0)}),p.queue(n,v.isString(y)?y:"",[])),"stop"===g?(r(n)&&r(n).tweensContainer&&!1!==a&&p.each(r(n).tweensContainer,function(t,e){e.endValue=e.currentValue}),O.push(t)):"finish"===g&&(e[2].duration=1))})})}),"stop"===g&&(p.each(O,function(t,e){d(e,!0)}),P.promise&&P.resolver(f)),t();default:if(!p.isPlainObject(g)||v.isEmptyObject(g)){if(v.isString(g)&&b.Redirects[g]){var E=(z=p.extend({},y)).duration,M=z.delay||0;return!0===z.backwards&&(f=p.extend(!0,[],f).reverse()),p.each(f,function(t,e){parseFloat(z.stagger)?z.delay=M+parseFloat(z.stagger)*t:v.isFunction(z.stagger)&&(z.delay=M+z.stagger.call(e,t,C)),z.drag&&(z.duration=parseFloat(E)||(/^(callout|transition)/.test(g)?1e3:m),z.duration=Math.max(z.duration*(z.backwards?1-t/C:(t+1)/C),.75*z.duration,200)),b.Redirects[g].call(e,e,z||{},t,C,f,P.promise?P:n)}),t()}var I="Velocity: First argument ("+g+") was not a property map, a known action, or a registered redirect. Aborting.";return P.promise?P.rejecter(new Error(I)):console.log(I),t()}A="start"}var q={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},_=[];p.each(f,function(t,e){v.isNode(e)&&o.call(e)});var V,z=p.extend({},b.defaults,y);if(z.loop=parseInt(z.loop),V=2*z.loop-1,z.loop)for(var D=0;V>D;D++){var j={delay:z.delay,progress:z.progress};D===V-1&&(j.display=z.display,j.visibility=z.visibility,j.complete=z.complete),k(f,"reverse",j)}return t()}};(b=p.extend(k,b)).animate=k;var C=e.requestAnimationFrame||f;return b.State.isMobile||i.hidden===n||i.addEventListener("visibilitychange",function(){i.hidden?(C=function(t){return setTimeout(function(){t(!0)},16)},u()):C=e.requestAnimationFrame||f}),t.Velocity=b,t!==e&&(t.fn.velocity=k,t.fn.velocity.defaults=b.defaults),p.each(["Down","Up"],function(t,e){b.Redirects["slide"+e]=function(t,i,o,a,r,s){var l=p.extend({},i),c=l.begin,u=l.complete,d={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},h={};l.display===n&&(l.display="Down"===e?"inline"===b.CSS.Values.getDisplayType(t)?"inline-block":"block":"none"),l.begin=function(){c&&c.call(r,r);for(var i in d){h[i]=t.style[i];var n=b.CSS.getPropertyValue(t,i);d[i]="Down"===e?[n,0]:[0,n]}h.overflow=t.style.overflow,t.style.overflow="hidden"},l.complete=function(){for(var e in h)t.style[e]=h[e];u&&u.call(r,r),s&&s.resolver(r)},b(t,d,l)}}),p.each(["In","Out"],function(t,e){b.Redirects["fade"+e]=function(t,i,o,a,r,s){var l=p.extend({},i),c={opacity:"In"===e?1:0},u=l.complete;l.complete=o!==a-1?l.begin=null:function(){u&&u.call(r,r),s&&s.resolver(r)},l.display===n&&(l.display="In"===e?"auto":"none"),b(this,c,l)}}),b}jQuery.fn.velocity=jQuery.fn.animate}}(window.jQuery||window.Zepto||window,window,document)})),function(t,e,i,n){"use strict";function o(t,e,i){return setTimeout(u(t,i),e)}function a(t,e,i){return!!Array.isArray(t)&&(r(t,i[e],i),!0)}function r(t,e,i){var o;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==n)for(o=0;o<t.length;)e.call(i,t[o],o,t),o++;else for(o in t)t.hasOwnProperty(o)&&e.call(i,t[o],o,t)}function s(t,e,i){for(var o=Object.keys(e),a=0;a<o.length;)(!i||i&&t[o[a]]===n)&&(t[o[a]]=e[o[a]]),a++;return t}function l(t,e){return s(t,e,!0)}function c(t,e,i){var n,o=e.prototype;(n=t.prototype=Object.create(o)).constructor=t,n._super=o,i&&s(n,i)}function u(t,e){return function(){return t.apply(e,arguments)}}function d(t,e){return typeof t==ut?t.apply(e?e[0]||n:n,e):t}function p(t,e){return t===n?e:t}function h(t,e,i){r(m(e),function(e){t.addEventListener(e,i,!1)})}function f(t,e,i){r(m(e),function(e){t.removeEventListener(e,i,!1)})}function v(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function g(t,e){return t.indexOf(e)>-1}function m(t){return t.trim().split(/\s+/g)}function y(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function b(t){return Array.prototype.slice.call(t,0)}function w(t,e,i){for(var n=[],o=[],a=0;a<t.length;){var r=e?t[a][e]:t[a];y(o,r)<0&&n.push(t[a]),o[a]=r,a++}return i&&(n=e?n.sort(function(t,i){return t[e]>i[e]}):n.sort()),n}function x(t,e){for(var i,o,a=e[0].toUpperCase()+e.slice(1),r=0;r<lt.length;){if(i=lt[r],(o=i?i+a:e)in t)return o;r++}return n}function k(){return ft++}function C(t){var e=t.ownerDocument;return e.defaultView||e.parentWindow}function T(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){d(t.options.enable,[t])&&i.handler(e)},this.init()}function S(t){var e=t.options.inputClass;return new(e||(mt?L:yt?F:gt?$:H))(t,P)}function P(t,e,i){var n=i.pointers.length,o=i.changedPointers.length,a=e&kt&&0==n-o,r=e&(Tt|St)&&0==n-o;i.isFirst=!!a,i.isFinal=!!r,a&&(t.session={}),i.eventType=e,A(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function A(t,e){var i=t.session,n=e.pointers,o=n.length;i.firstInput||(i.firstInput=M(e)),o>1&&!i.firstMultiple?i.firstMultiple=M(e):1===o&&(i.firstMultiple=!1);var a=i.firstInput,r=i.firstMultiple,s=r?r.center:a.center,l=e.center=I(n);e.timeStamp=ht(),e.deltaTime=e.timeStamp-a.timeStamp,e.angle=z(s,l),e.distance=V(s,l),O(i,e),e.offsetDirection=_(e.deltaX,e.deltaY),e.scale=r?j(r.pointers,n):1,e.rotation=r?D(r.pointers,n):0,E(i,e);var c=t.element;v(e.srcEvent.target,c)&&(c=e.srcEvent.target),e.target=c}function O(t,e){var i=e.center,n=t.offsetDelta||{},o=t.prevDelta||{},a=t.prevInput||{};(e.eventType===kt||a.eventType===Tt)&&(o=t.prevDelta={x:a.deltaX||0,y:a.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=o.x+(i.x-n.x),e.deltaY=o.y+(i.y-n.y)}function E(t,e){var i,o,a,r,s=t.lastInterval||e,l=e.timeStamp-s.timeStamp;if(e.eventType!=St&&(l>xt||s.velocity===n)){var c=s.deltaX-e.deltaX,u=s.deltaY-e.deltaY,d=q(l,c,u);o=d.x,a=d.y,i=pt(d.x)>pt(d.y)?d.x:d.y,r=_(c,u),t.lastInterval=e}else i=s.velocity,o=s.velocityX,a=s.velocityY,r=s.direction;e.velocity=i,e.velocityX=o,e.velocityY=a,e.direction=r}function M(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:dt(t.pointers[i].clientX),clientY:dt(t.pointers[i].clientY)},i++;return{timeStamp:ht(),pointers:e,center:I(e),deltaX:t.deltaX,deltaY:t.deltaY}}function I(t){var e=t.length;if(1===e)return{x:dt(t[0].clientX),y:dt(t[0].clientY)};for(var i=0,n=0,o=0;e>o;)i+=t[o].clientX,n+=t[o].clientY,o++;return{x:dt(i/e),y:dt(n/e)}}function q(t,e,i){return{x:e/t||0,y:i/t||0}}function _(t,e){return t===e?Pt:pt(t)>=pt(e)?t>0?At:Ot:e>0?Et:Mt}function V(t,e,i){i||(i=Vt);var n=e[i[0]]-t[i[0]],o=e[i[1]]-t[i[1]];return Math.sqrt(n*n+o*o)}function z(t,e,i){i||(i=Vt);var n=e[i[0]]-t[i[0]],o=e[i[1]]-t[i[1]];return 180*Math.atan2(o,n)/Math.PI}function D(t,e){return z(e[1],e[0],zt)-z(t[1],t[0],zt)}function j(t,e){return V(e[0],e[1],zt)/V(t[0],t[1],zt)}function H(){this.evEl=jt,this.evWin=Ht,this.allow=!0,this.pressed=!1,T.apply(this,arguments)}function L(){this.evEl=Nt,this.evWin=Ft,T.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function W(){this.evTarget=$t,this.evWin=Xt,this.started=!1,T.apply(this,arguments)}function N(t,e){var i=b(t.touches),n=b(t.changedTouches);return e&(Tt|St)&&(i=w(i.concat(n),"identifier",!0)),[i,n]}function F(){this.evTarget=Yt,this.targetIds={},T.apply(this,arguments)}function Q(t,e){var i=b(t.touches),n=this.targetIds;if(e&(kt|Ct)&&1===i.length)return n[i[0].identifier]=!0,[i,i];var o,a,r=b(t.changedTouches),s=[],l=this.target;if(a=i.filter(function(t){return v(t.target,l)}),e===kt)for(o=0;o<a.length;)n[a[o].identifier]=!0,o++;for(o=0;o<r.length;)n[r[o].identifier]&&s.push(r[o]),e&(Tt|St)&&delete n[r[o].identifier],o++;return s.length?[w(a.concat(s),"identifier",!0),s]:void 0}function $(){T.apply(this,arguments);var t=u(this.handler,this);this.touch=new F(this.manager,t),this.mouse=new H(this.manager,t)}function X(t,e){this.manager=t,this.set(e)}function R(t){if(g(t,Kt))return Kt;var e=g(t,te),i=g(t,ee);return e&&i?te+" "+ee:e||i?e?te:ee:g(t,Jt)?Jt:Zt}function Y(t){this.id=k(),this.manager=null,this.options=l(t||{},this.defaults),this.options.enable=p(this.options.enable,!0),this.state=ie,this.simultaneous={},this.requireFail=[]}function B(t){return t&se?"cancel":t&ae?"end":t&oe?"move":t&ne?"start":""}function U(t){return t==Mt?"down":t==Et?"up":t==At?"left":t==Ot?"right":""}function G(t,e){var i=e.manager;return i?i.get(t):t}function Z(){Y.apply(this,arguments)}function J(){Z.apply(this,arguments),this.pX=null,this.pY=null}function K(){Z.apply(this,arguments)}function tt(){Y.apply(this,arguments),this._timer=null,this._input=null}function et(){Z.apply(this,arguments)}function it(){Z.apply(this,arguments)}function nt(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ot(t,e){return e=e||{},e.recognizers=p(e.recognizers,ot.defaults.preset),new at(t,e)}function at(t,e){e=e||{},this.options=l(e,ot.defaults),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.element=t,this.input=S(this),this.touchAction=new X(this,this.options.touchAction),rt(this,!0),r(e.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function rt(t,e){var i=t.element;r(t.options.cssProps,function(t,n){i.style[x(i.style,n)]=e?t:""})}function st(t,i){var n=e.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=i,i.target.dispatchEvent(n)}var lt=["","webkit","moz","MS","ms","o"],ct=e.createElement("div"),ut="function",dt=Math.round,pt=Math.abs,ht=Date.now,ft=1,vt=/mobile|tablet|ip(ad|hone|od)|android/i,gt="ontouchstart"in t,mt=x(t,"PointerEvent")!==n,yt=gt&&vt.test(navigator.userAgent),bt="touch",wt="mouse",xt=25,kt=1,Ct=2,Tt=4,St=8,Pt=1,At=2,Ot=4,Et=8,Mt=16,It=At|Ot,qt=Et|Mt,_t=It|qt,Vt=["x","y"],zt=["clientX","clientY"];T.prototype={handler:function(){},init:function(){this.evEl&&h(this.element,this.evEl,this.domHandler),this.evTarget&&h(this.target,this.evTarget,this.domHandler),this.evWin&&h(C(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&f(this.element,this.evEl,this.domHandler),this.evTarget&&f(this.target,this.evTarget,this.domHandler),this.evWin&&f(C(this.element),this.evWin,this.domHandler)}};var Dt={mousedown:kt,mousemove:Ct,mouseup:Tt},jt="mousedown",Ht="mousemove mouseup";c(H,T,{handler:function(t){var e=Dt[t.type];e&kt&&0===t.button&&(this.pressed=!0),e&Ct&&1!==t.which&&(e=Tt),this.pressed&&this.allow&&(e&Tt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:wt,srcEvent:t}))}});var Lt={pointerdown:kt,pointermove:Ct,pointerup:Tt,pointercancel:St,pointerout:St},Wt={2:bt,3:"pen",4:wt,5:"kinect"},Nt="pointerdown",Ft="pointermove pointerup pointercancel";t.MSPointerEvent&&(Nt="MSPointerDown",Ft="MSPointerMove MSPointerUp MSPointerCancel"),c(L,T,{handler:function(t){var e=this.store,i=!1,n=t.type.toLowerCase().replace("ms",""),o=Lt[n],a=Wt[t.pointerType]||t.pointerType,r=a==bt,s=y(e,t.pointerId,"pointerId");o&kt&&(0===t.button||r)?0>s&&(e.push(t),s=e.length-1):o&(Tt|St)&&(i=!0),0>s||(e[s]=t,this.callback(this.manager,o,{pointers:e,changedPointers:[t],pointerType:a,srcEvent:t}),i&&e.splice(s,1))}});var Qt={touchstart:kt,touchmove:Ct,touchend:Tt,touchcancel:St},$t="touchstart",Xt="touchstart touchmove touchend touchcancel";c(W,T,{handler:function(t){var e=Qt[t.type];if(e===kt&&(this.started=!0),this.started){var i=N.call(this,t,e);e&(Tt|St)&&0==i[0].length-i[1].length&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:bt,srcEvent:t})}}});var Rt={touchstart:kt,touchmove:Ct,touchend:Tt,touchcancel:St},Yt="touchstart touchmove touchend touchcancel";c(F,T,{handler:function(t){var e=Rt[t.type],i=Q.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:bt,srcEvent:t})}}),c($,T,{handler:function(t,e,i){var n=i.pointerType==bt,o=i.pointerType==wt;if(n)this.mouse.allow=!1;else if(o&&!this.mouse.allow)return;e&(Tt|St)&&(this.mouse.allow=!0),this.callback(t,e,i)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Bt=x(ct.style,"touchAction"),Ut=Bt!==n,Gt="compute",Zt="auto",Jt="manipulation",Kt="none",te="pan-x",ee="pan-y";X.prototype={set:function(t){t==Gt&&(t=this.compute()),Ut&&(this.manager.element.style[Bt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return r(this.manager.recognizers,function(e){d(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),R(t.join(" "))},preventDefaults:function(t){if(!Ut){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var n=this.actions,o=g(n,Kt),a=g(n,ee),r=g(n,te);return o||a&&i&It||r&&i&qt?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var ie=1,ne=2,oe=4,ae=8,re=ae,se=16;Y.prototype={defaults:{},set:function(t){return s(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(a(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=G(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return a(t,"dropRecognizeWith",this)?this:(t=G(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(a(t,"requireFailure",this))return this;var e=this.requireFail;return t=G(t,this),-1===y(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(a(t,"dropRequireFailure",this))return this;t=G(t,this);var e=y(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){i.manager.emit(i.options.event+(e?B(n):""),t)}var i=this,n=this.state;ae>n&&e(!0),e(),n>=ae&&e(!0)},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=32)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|ie)))return!1;t++}return!0},recognize:function(t){var e=s({},t);return d(this.options.enable,[this,e])?(this.state&(re|se|32)&&(this.state=ie),this.state=this.process(e),void(this.state&(ne|oe|ae|se)&&this.tryEmit(e))):(this.reset(),void(this.state=32))},process:function(){},getTouchAction:function(){},reset:function(){}},c(Z,Y,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=e&(ne|oe),o=this.attrTest(t);return n&&(i&St||!o)?e|se:n||o?i&Tt?e|ae:e&ne?e|oe:ne:32}}),c(J,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:_t},getTouchAction:function(){var t=this.options.direction,e=[];return t&It&&e.push(ee),t&qt&&e.push(te),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,o=t.direction,a=t.deltaX,r=t.deltaY;return o&e.direction||(e.direction&It?(o=0===a?Pt:0>a?At:Ot,i=a!=this.pX,n=Math.abs(t.deltaX)):(o=0===r?Pt:0>r?Et:Mt,i=r!=this.pY,n=Math.abs(t.deltaY))),t.direction=o,i&&n>e.threshold&&o&e.direction},attrTest:function(t){return Z.prototype.attrTest.call(this,t)&&(this.state&ne||!(this.state&ne)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=U(t.direction);e&&this.manager.emit(this.options.event+e,t),this._super.emit.call(this,t)}}),c(K,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Kt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&ne)},emit:function(t){if(this._super.emit.call(this,t),1!==t.scale){var e=t.scale<1?"in":"out";this.manager.emit(this.options.event+e,t)}}}),c(tt,Y,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Zt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,a=t.deltaTime>e.time;if(this._input=t,!n||!i||t.eventType&(Tt|St)&&!a)this.reset();else if(t.eventType&kt)this.reset(),this._timer=o(function(){this.state=re,this.tryEmit()},e.time,this);else if(t.eventType&Tt)return re;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===re&&(t&&t.eventType&Tt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=ht(),this.manager.emit(this.options.event,this._input)))}}),c(et,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Kt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&ne)}}),c(it,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:It|qt,pointers:1},getTouchAction:function(){return J.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return i&(It|qt)?e=t.velocity:i&It?e=t.velocityX:i&qt&&(e=t.velocityY),this._super.attrTest.call(this,t)&&i&t.direction&&t.distance>this.options.threshold&&pt(e)>this.options.velocity&&t.eventType&Tt},emit:function(t){var e=U(t.direction);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),c(nt,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[Jt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,a=t.deltaTime<e.time;if(this.reset(),t.eventType&kt&&0===this.count)return this.failTimeout();if(n&&a&&i){if(t.eventType!=Tt)return this.failTimeout();var r=!this.pTime||t.timeStamp-this.pTime<e.interval,s=!this.pCenter||V(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,s&&r?this.count+=1:this.count=1,this._input=t,0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=o(function(){this.state=re,this.tryEmit()},e.interval,this),ne):re}return 32},failTimeout:function(){return this._timer=o(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==re&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ot.VERSION="2.0.4",ot.defaults={domEvents:!1,touchAction:Gt,enable:!0,inputTarget:null,inputClass:null,preset:[[et,{enable:!1}],[K,{enable:!1},["rotate"]],[it,{direction:It}],[J,{direction:It},["swipe"]],[nt],[nt,{event:"doubletap",taps:2},["tap"]],[tt]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};at.prototype={set:function(t){return s(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,n=this.recognizers,o=e.curRecognizer;(!o||o&&o.state&re)&&(o=e.curRecognizer=null);for(var a=0;a<n.length;)i=n[a],2===e.stopped||o&&i!=o&&!i.canRecognizeWith(o)?i.reset():i.recognize(t),!o&&i.state&(ne|oe|ae)&&(o=e.curRecognizer=i),a++}},get:function(t){if(t instanceof Y)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(a(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(a(t,"remove",this))return this;var e=this.recognizers;return t=this.get(t),e.splice(y(e,t),1),this.touchAction.update(),this},on:function(t,e){var i=this.handlers;return r(m(t),function(t){i[t]=i[t]||[],i[t].push(e)}),this},off:function(t,e){var i=this.handlers;return r(m(t),function(t){e?i[t].splice(y(i[t],e),1):delete i[t]}),this},emit:function(t,e){this.options.domEvents&&st(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var n=0;n<i.length;)i[n](e),n++}},destroy:function(){this.element&&rt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},s(ot,{INPUT_START:kt,INPUT_MOVE:Ct,INPUT_END:Tt,INPUT_CANCEL:St,STATE_POSSIBLE:ie,STATE_BEGAN:ne,STATE_CHANGED:oe,STATE_ENDED:ae,STATE_RECOGNIZED:re,STATE_CANCELLED:se,STATE_FAILED:32,DIRECTION_NONE:Pt,DIRECTION_LEFT:At,DIRECTION_RIGHT:Ot,DIRECTION_UP:Et,DIRECTION_DOWN:Mt,DIRECTION_HORIZONTAL:It,DIRECTION_VERTICAL:qt,DIRECTION_ALL:_t,Manager:at,Input:T,TouchAction:X,TouchInput:F,MouseInput:H,PointerEventInput:L,TouchMouseInput:$,SingleTouchInput:W,Recognizer:Y,AttrRecognizer:Z,Tap:nt,Pan:J,Swipe:it,Pinch:K,Rotate:et,Press:tt,on:h,off:f,each:r,merge:l,extend:s,inherit:c,bindFn:u,prefixed:x}),typeof define==ut&&define.amd?define(function(){return ot}):"undefined"!=typeof module&&module.exports?module.exports=ot:t.Hammer=ot}(window,document),function(t){"function"==typeof define&&define.amd?define(["jquery","hammerjs"],t):"object"==typeof exports?t(require("jquery"),require("hammerjs")):t(jQuery,Hammer)}(function(t,e){function i(i,n){var o=t(i);o.data("hammer")||o.data("hammer",new e(o[0],n))}t.fn.hammer=function(t){return this.each(function(){i(this,t)})},e.Manager.prototype.emit=function(e){return function(i,n){e.call(this,i,n),t(this.element).trigger({type:i,gesture:n})}}(e.Manager.prototype.emit)}),function(t){t.Package?Materialize={}:t.Materialize={}}(window),function(t){for(var e=0,i=["webkit","moz"],n=t.requestAnimationFrame,o=t.cancelAnimationFrame,a=i.length;--a>=0&&!n;)n=t[i[a]+"RequestAnimationFrame"],o=t[i[a]+"CancelRequestAnimationFrame"];n&&o||(n=function(t){var i=+Date.now(),n=Math.max(e+16,i);return setTimeout(function(){t(e=n)},n-i)},o=clearTimeout),t.requestAnimationFrame=n,t.cancelAnimationFrame=o}(window),Materialize.objectSelectorString=function(t){return((t.prop("tagName")||"")+(t.attr("id")||"")+(t.attr("class")||"")).replace(/\s/g,"")},Materialize.guid=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}(),Materialize.escapeHash=function(t){return t.replace(/(:|\.|\[|\]|,|=)/g,"\\$1")},Materialize.elementOrParentIsFixed=function(t){var e=$(t),i=!1;return e.add(e.parents()).each(function(){if("fixed"===$(this).css("position"))return i=!0,!1}),i};var getTime=Date.now||function(){return(new Date).getTime()};Materialize.throttle=function(t,e,i){var n,o,a,r=null,s=0;i||(i={});var l=function(){s=!1===i.leading?0:getTime(),r=null,a=t.apply(n,o),n=o=null};return function(){var c=getTime();s||!1!==i.leading||(s=c);var u=e-(c-s);return n=this,o=arguments,u<=0?(clearTimeout(r),r=null,s=c,a=t.apply(n,o),n=o=null):r||!1===i.trailing||(r=setTimeout(l,u)),a}};var Vel;Vel=jQuery?jQuery.Velocity:$?$.Velocity:Velocity,function(t){t.fn.collapsible=function(e,i){var n={accordion:void 0,onOpen:void 0,onClose:void 0},o=e;return e=t.extend(n,e),this.each(function(){function n(e){p=d.find("> li > .collapsible-header"),e.hasClass("active")?e.parent().addClass("active"):e.parent().removeClass("active"),e.parent().hasClass("active")?e.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}):e.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}),p.not(e).removeClass("active").parent().removeClass("active"),p.not(e).parent().children(".collapsible-body").stop(!0,!1).each(function(){t(this).is(":visible")&&t(this).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height",""),s(t(this).siblings(".collapsible-header"))}})})}function a(e){e.hasClass("active")?e.parent().addClass("active"):e.parent().removeClass("active"),e.parent().hasClass("active")?e.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}):e.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}})}function r(t,i){i||t.toggleClass("active"),e.accordion||"accordion"===h||void 0===h?n(t):a(t),s(t)}function s(t){t.hasClass("active")?"function"==typeof e.onOpen&&e.onOpen.call(this,t.parent()):"function"==typeof e.onClose&&e.onClose.call(this,t.parent())}function l(t){return c(t).length>0}function c(t){return t.closest("li > .collapsible-header")}function u(){d.off("click.collapse","> li > .collapsible-header")}var d=t(this),p=t(this).find("> li > .collapsible-header"),h=d.data("collapsible");if("destroy"!==o)if(i>=0&&i<p.length){var f=p.eq(i);f.length&&("open"===o||"close"===o&&f.hasClass("active"))&&r(f)}else u(),d.on("click.collapse","> li > .collapsible-header",function(e){var i=t(e.target);l(i)&&(i=c(i)),r(i)}),e.accordion||"accordion"===h||void 0===h?r(p.filter(".active").first(),!0):p.filter(".active").each(function(){r(t(this),!0)});else u()})},t(document).ready(function(){t(".collapsible").collapsible()})}(jQuery),function(t){t.fn.scrollTo=function(e){return t(this).scrollTop(t(this).scrollTop()-t(this).offset().top+t(e).offset().top),this},t.fn.dropdown=function(e){var i={inDuration:300,outDuration:225,constrainWidth:!0,hover:!1,gutter:0,belowOrigin:!1,alignment:"left",stopPropagation:!1};return"open"===e?(this.each(function(){t(this).trigger("open")}),!1):"close"===e?(this.each(function(){t(this).trigger("close")}),!1):void this.each(function(){function n(){void 0!==r.data("induration")&&(s.inDuration=r.data("induration")),void 0!==r.data("outduration")&&(s.outDuration=r.data("outduration")),void 0!==r.data("constrainwidth")&&(s.constrainWidth=r.data("constrainwidth")),void 0!==r.data("hover")&&(s.hover=r.data("hover")),void 0!==r.data("gutter")&&(s.gutter=r.data("gutter")),void 0!==r.data("beloworigin")&&(s.belowOrigin=r.data("beloworigin")),void 0!==r.data("alignment")&&(s.alignment=r.data("alignment")),void 0!==r.data("stoppropagation")&&(s.stopPropagation=r.data("stoppropagation"))}function o(e){"focus"===e&&(l=!0),n(),c.addClass("active"),r.addClass("active"),!0===s.constrainWidth?c.css("width",r.outerWidth()):c.css("white-space","nowrap");var i=window.innerHeight,o=r.innerHeight(),u=r.offset().left,d=r.offset().top-t(window).scrollTop(),p=s.alignment,h=0,f=0,v=0;!0===s.belowOrigin&&(v=o);var g=0,m=0,y=r.parent();if(y.is("body")||(y[0].scrollHeight>y[0].clientHeight&&(g=y[0].scrollTop),y[0].scrollWidth>y[0].clientWidth&&(m=y[0].scrollLeft)),u+c.innerWidth()>t(window).width()?p="right":u-c.innerWidth()+r.innerWidth()<0&&(p="left"),d+c.innerHeight()>i)if(d+o-c.innerHeight()<0){var b=i-d-v;c.css("max-height",b)}else v||(v+=o),v-=c.innerHeight();"left"===p?(h=s.gutter,f=r.position().left+h):"right"===p&&(c.stop(!0,!0).css({opacity:0,left:0}),f=r.position().left+r.outerWidth()-c.outerWidth()+(h=-s.gutter)),c.css({position:"absolute",top:r.position().top+v+g,left:f+m}),c.slideDown({queue:!1,duration:s.inDuration,easing:"easeOutCubic",complete:function(){t(this).css("height","")}}).animate({opacity:1},{queue:!1,duration:s.inDuration,easing:"easeOutSine"}),setTimeout(function(){t(document).on("click."+c.attr("id"),function(e){a(),t(document).off("click."+c.attr("id"))})},0)}function a(){l=!1,c.fadeOut(s.outDuration),c.removeClass("active"),r.removeClass("active"),t(document).off("click."+c.attr("id")),setTimeout(function(){c.css("max-height","")},s.outDuration)}var r=t(this),s=t.extend({},i,e),l=!1,c=t("#"+r.attr("data-activates"));if(n(),r.after(c),s.hover){var u=!1;r.off("click."+r.attr("id")),r.on("mouseenter",function(t){!1===u&&(o(),u=!0)}),r.on("mouseleave",function(e){var i=e.toElement||e.relatedTarget;t(i).closest(".dropdown-content").is(c)||(c.stop(!0,!0),a(),u=!1)}),c.on("mouseleave",function(e){var i=e.toElement||e.relatedTarget;t(i).closest(".dropdown-button").is(r)||(c.stop(!0,!0),a(),u=!1)})}else r.off("click."+r.attr("id")),r.on("click."+r.attr("id"),function(e){l||(r[0]!=e.currentTarget||r.hasClass("active")||0!==t(e.target).closest(".dropdown-content").length?r.hasClass("active")&&(a(),t(document).off("click."+c.attr("id"))):(e.preventDefault(),s.stopPropagation&&e.stopPropagation(),o("click")))});r.on("open",function(t,e){o(e)}),r.on("close",a)})},t(document).ready(function(){t(".dropdown-button").dropdown()})}(jQuery),function(t){var e=0,i=0,n=function(){return"materialize-modal-overlay-"+ ++i},o={init:function(i){var o={opacity:.5,inDuration:350,outDuration:250,ready:void 0,complete:void 0,dismissible:!0,startingTop:"4%",endingTop:"10%"};return i=t.extend(o,i),this.each(function(){var o=t(this),a=t(this).attr("id")||"#"+t(this).data("target"),r=function(){var n=o.data("overlay-id"),a=t("#"+n);o.removeClass("open"),t("body").css({overflow:"",width:""}),o.find(".modal-close").off("click.close"),t(document).off("keyup.modal"+n),a.velocity({opacity:0},{duration:i.outDuration,queue:!1,ease:"easeOutQuart"});var r={duration:i.outDuration,queue:!1,ease:"easeOutCubic",complete:function(){t(this).css({display:"none"}),"function"==typeof i.complete&&i.complete.call(this,o),a.remove(),e--}};o.hasClass("bottom-sheet")?o.velocity({bottom:"-100%",opacity:0},r):o.velocity({top:i.startingTop,opacity:0,scaleX:.7},r)},s=function(a){var s=t("body"),l=s.innerWidth();if(s.css("overflow","hidden"),s.width(l),!o.hasClass("open")){var c=n(),u=t('<div class="modal-overlay"></div>'),d=++e;u.attr("id",c).css("z-index",1e3+2*d),o.data("overlay-id",c).css("z-index",1e3+2*d+1),o.addClass("open"),t("body").append(u),i.dismissible&&(u.click(function(){r()}),t(document).on("keyup.modal"+c,function(t){27===t.keyCode&&r()})),o.find(".modal-close").on("click.close",function(t){r()}),u.css({display:"block",opacity:0}),o.css({display:"block",opacity:0}),u.velocity({opacity:i.opacity},{duration:i.inDuration,queue:!1,ease:"easeOutCubic"}),o.data("associated-overlay",u[0]);var p={duration:i.inDuration,queue:!1,ease:"easeOutCubic",complete:function(){"function"==typeof i.ready&&i.ready.call(this,o,a)}};o.hasClass("bottom-sheet")?o.velocity({bottom:"0",opacity:1},p):(t.Velocity.hook(o,"scaleX",.7),o.css({top:i.startingTop}),o.velocity({top:i.endingTop,opacity:1,scaleX:"1"},p))}};t(document).off("click.modalTrigger",'a[href="#'+a+'"], [data-target="'+a+'"]'),t(this).off("openModal"),t(this).off("closeModal"),t(document).on("click.modalTrigger",'a[href="#'+a+'"], [data-target="'+a+'"]',function(e){i.startingTop=(t(this).offset().top-t(window).scrollTop())/1.15,s(t(this)),e.preventDefault()}),t(this).on("openModal",function(){t(this).attr("href")||t(this).data("target");s()}),t(this).on("closeModal",function(){r()})})},open:function(){o.init.apply(this,arguments),t(this).trigger("openModal")},close:function(){t(this).trigger("closeModal")}};t.fn.modal=function(e){return o[e]?o[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist on jQuery.modal"):o.init.apply(this,arguments)}}(jQuery),function(t){t.fn.materialbox=function(){return this.each(function(){function e(){a=!1;var e=s.parent(".material-placeholder"),n=(window.innerWidth,window.innerHeight,s.data("width")),l=s.data("height");s.velocity("stop",!0),t("#materialbox-overlay").velocity("stop",!0),t(".materialbox-caption").velocity("stop",!0),t(window).off("scroll.materialbox"),t(document).off("keyup.materialbox"),t(window).off("resize.materialbox"),t("#materialbox-overlay").velocity({opacity:0},{duration:r,queue:!1,easing:"easeOutQuad",complete:function(){o=!1,t(this).remove()}}),s.velocity({width:n,height:l,left:0,top:0},{duration:r,queue:!1,easing:"easeOutQuad",complete:function(){e.css({height:"",width:"",position:"",top:"",left:""}),s.removeAttr("style"),s.attr("style",c),s.removeClass("active"),a=!0,i&&i.css("overflow","")}}),t(".materialbox-caption").velocity({opacity:0},{duration:r,queue:!1,easing:"easeOutQuad",complete:function(){t(this).remove()}})}if(!t(this).hasClass("initialized")){t(this).addClass("initialized");var i,n,o=!1,a=!0,r=200,s=t(this),l=t("<div></div>").addClass("material-placeholder"),c=s.attr("style");s.wrap(l),s.on("click",function(){var r=s.parent(".material-placeholder"),l=window.innerWidth,c=window.innerHeight,u=s.width(),d=s.height();if(!1===a)return e(),!1;if(o&&!0===a)return e(),!1;a=!1,s.addClass("active"),o=!0,r.css({width:r[0].getBoundingClientRect().width,height:r[0].getBoundingClientRect().height,position:"relative",top:0,left:0}),i=void 0,n=r[0].parentNode;for(;null!==n&&!t(n).is(document);){var p=t(n);"visible"!==p.css("overflow")&&(p.css("overflow","visible"),i=void 0===i?p:i.add(p)),n=n.parentNode}s.css({position:"absolute","z-index":1e3,"will-change":"left, top, width, height"}).data("width",u).data("height",d);var h=t('<div id="materialbox-overlay"></div>').css({opacity:0}).click(function(){!0===a&&e()});s.before(h);var f=h[0].getBoundingClientRect();if(h.css({width:l,height:c,left:-1*f.left,top:-1*f.top}),h.velocity({opacity:1},{duration:275,queue:!1,easing:"easeOutQuad"}),""!==s.data("caption")){var v=t('<div class="materialbox-caption"></div>');v.text(s.data("caption")),t("body").append(v),v.css({display:"inline"}),v.velocity({opacity:1},{duration:275,queue:!1,easing:"easeOutQuad"})}var g=0,m=0;u/l>d/c?(g=.9*l,m=.9*l*(d/u)):(g=.9*c*(u/d),m=.9*c),s.hasClass("responsive-img")?s.velocity({"max-width":g,width:u},{duration:0,queue:!1,complete:function(){s.css({left:0,top:0}).velocity({height:m,width:g,left:t(document).scrollLeft()+l/2-s.parent(".material-placeholder").offset().left-g/2,top:t(document).scrollTop()+c/2-s.parent(".material-placeholder").offset().top-m/2},{duration:275,queue:!1,easing:"easeOutQuad",complete:function(){a=!0}})}}):s.css("left",0).css("top",0).velocity({height:m,width:g,left:t(document).scrollLeft()+l/2-s.parent(".material-placeholder").offset().left-g/2,top:t(document).scrollTop()+c/2-s.parent(".material-placeholder").offset().top-m/2},{duration:275,queue:!1,easing:"easeOutQuad",complete:function(){a=!0}}),t(window).on("scroll.materialbox",function(){o&&e()}),t(window).on("resize.materialbox",function(){o&&e()}),t(document).on("keyup.materialbox",function(t){27===t.keyCode&&!0===a&&o&&e()})})}})},t(document).ready(function(){t(".materialboxed").materialbox()})}(jQuery),function(t){t.fn.parallax=function(){var e=t(window).width();return this.each(function(i){function n(i){var n;n=e<601?o.height()>0?o.height():o.children("img").height():o.height()>0?o.height():500;var a=o.children("img").first(),r=a.height()-n,s=o.offset().top+n,l=o.offset().top,c=t(window).scrollTop(),u=window.innerHeight,d=(c+u-l)/(n+u),p=Math.round(r*d);i&&a.css("display","block"),s>c&&l<c+u&&a.css("transform","translate3D(-50%,"+p+"px, 0)")}var o=t(this);o.addClass("parallax"),o.children("img").one("load",function(){n(!0)}).each(function(){this.complete&&t(this).trigger("load")}),t(window).scroll(function(){e=t(window).width(),n(!1)}),t(window).resize(function(){e=t(window).width(),n(!1)})})}}(jQuery),function(t){var e={init:function(e){var i={onShow:null,swipeable:!1,responsiveThreshold:1/0};e=t.extend(i,e);var n=Materialize.objectSelectorString(t(this));return this.each(function(i){var o,a,r,s,l,c=n+i,u=t(this),d=t(window).width(),p=u.find("li.tab a"),h=u.width(),f=t(),v=Math.max(h,u[0].scrollWidth)/p.length,g=prev_index=0,m=!1,y=function(t){return Math.ceil(h-t.position().left-t.outerWidth()-u.scrollLeft())},b=function(t){return Math.floor(t.position().left+u.scrollLeft())},w=function(t){g-t>=0?(s.velocity({right:y(o)},{duration:300,queue:!1,easing:"easeOutQuad"}),s.velocity({left:b(o)},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})):(s.velocity({left:b(o)},{duration:300,queue:!1,easing:"easeOutQuad"}),s.velocity({right:y(o)},{duration:300,queue:!1,easing:"easeOutQuad",delay:90}))};e.swipeable&&d>e.responsiveThreshold&&(e.swipeable=!1),0===(o=t(p.filter('[href="'+location.hash+'"]'))).length&&(o=t(this).find("li.tab a.active").first()),0===o.length&&(o=t(this).find("li.tab a").first()),o.addClass("active"),(g=p.index(o))<0&&(g=0),void 0!==o[0]&&(a=t(o[0].hash)).addClass("active"),u.find(".indicator").length||u.append('<li class="indicator"></li>'),s=u.find(".indicator"),u.append(s),u.is(":visible")&&setTimeout(function(){s.css({right:y(o)}),s.css({left:b(o)})},0),t(window).off("resize.tabs-"+c).on("resize.tabs-"+c,function(){h=u.width(),v=Math.max(h,u[0].scrollWidth)/p.length,g<0&&(g=0),0!==v&&0!==h&&(s.css({right:y(o)}),s.css({left:b(o)}))}),e.swipeable?(p.each(function(){var e=t(Materialize.escapeHash(this.hash));e.addClass("carousel-item"),f=f.add(e)}),r=f.wrapAll('<div class="tabs-content carousel"></div>'),f.css("display",""),t(".tabs-content.carousel").carousel({fullWidth:!0,noWrap:!0,onCycleTo:function(t){if(!m){var i=g;g=r.index(t),o=p.eq(g),w(i),"function"==typeof e.onShow&&e.onShow.call(u[0],a)}}})):p.not(o).each(function(){t(Materialize.escapeHash(this.hash)).hide()}),u.off("click.tabs").on("click.tabs","a",function(i){if(t(this).parent().hasClass("disabled"))i.preventDefault();else if(!t(this).attr("target")){m=!0,h=u.width(),v=Math.max(h,u[0].scrollWidth)/p.length,o.removeClass("active");var n=a;o=t(this),a=t(Materialize.escapeHash(this.hash)),p=u.find("li.tab a");o.position();o.addClass("active"),prev_index=g,(g=p.index(t(this)))<0&&(g=0),e.swipeable?f.length&&f.carousel("set",g,function(){"function"==typeof e.onShow&&e.onShow.call(u[0],a)}):(void 0!==a&&(a.show(),a.addClass("active"),"function"==typeof e.onShow&&e.onShow.call(this,a)),void 0===n||n.is(a)||(n.hide(),n.removeClass("active"))),l=setTimeout(function(){m=!1},300),w(prev_index),i.preventDefault()}})})},select_tab:function(t){this.find('a[href="#'+t+'"]').trigger("click")}};t.fn.tabs=function(i){return e[i]?e[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.tabs"):e.init.apply(this,arguments)},t(document).ready(function(){t("ul.tabs").tabs()})}(jQuery),function(t){t.fn.tooltip=function(i){var n={delay:350,tooltip:"",position:"bottom",html:!1};return"remove"===i?(this.each(function(){t("#"+t(this).attr("data-tooltip-id")).remove(),t(this).off("mouseenter.tooltip mouseleave.tooltip")}),!1):(i=t.extend(n,i),this.each(function(){var n=Materialize.guid(),o=t(this);o.attr("data-tooltip-id")&&t("#"+o.attr("data-tooltip-id")).remove(),o.attr("data-tooltip-id",n);var a,r,s,l,c,u,d=function(){a=o.attr("data-html")?"true"===o.attr("data-html"):i.html,r=o.attr("data-delay"),r=void 0===r||""===r?i.delay:r,s=o.attr("data-position"),s=void 0===s||""===s?i.position:s,l=o.attr("data-tooltip"),l=void 0===l||""===l?i.tooltip:l};d();c=function(){var e=t('<div class="material-tooltip"></div>');return l=a?t("<span></span>").html(l):t("<span></span>").text(l),e.append(l).appendTo(t("body")).attr("id",n),(u=t('<div class="backdrop"></div>')).appendTo(e),e}(),o.off("mouseenter.tooltip mouseleave.tooltip");var p,h=!1;o.on({"mouseenter.tooltip":function(t){p=setTimeout(function(){d(),h=!0,c.velocity("stop"),u.velocity("stop"),c.css({visibility:"visible",left:"0px",top:"0px"});var t,i,n,a=o.outerWidth(),r=o.outerHeight(),l=c.outerHeight(),p=c.outerWidth(),f="0px",v="0px",g=u[0].offsetWidth,m=u[0].offsetHeight,y=8,b=8,w=0;"top"===s?(t=o.offset().top-l-5,i=o.offset().left+a/2-p/2,n=e(i,t,p,l),f="-10px",u.css({bottom:0,left:0,borderRadius:"14px 14px 0 0",transformOrigin:"50% 100%",marginTop:l,marginLeft:p/2-g/2})):"left"===s?(t=o.offset().top+r/2-l/2,i=o.offset().left-p-5,n=e(i,t,p,l),v="-10px",u.css({top:"-7px",right:0,width:"14px",height:"14px",borderRadius:"14px 0 0 14px",transformOrigin:"95% 50%",marginTop:l/2,marginLeft:p})):"right"===s?(t=o.offset().top+r/2-l/2,i=o.offset().left+a+5,n=e(i,t,p,l),v="+10px",u.css({top:"-7px",left:0,width:"14px",height:"14px",borderRadius:"0 14px 14px 0",transformOrigin:"5% 50%",marginTop:l/2,marginLeft:"0px"})):(t=o.offset().top+o.outerHeight()+5,i=o.offset().left+a/2-p/2,n=e(i,t,p,l),f="+10px",u.css({top:0,left:0,marginLeft:p/2-g/2})),c.css({top:n.y,left:n.x}),y=Math.SQRT2*p/parseInt(g),b=Math.SQRT2*l/parseInt(m),w=Math.max(y,b),c.velocity({translateY:f,translateX:v},{duration:350,queue:!1}).velocity({opacity:1},{duration:300,delay:50,queue:!1}),u.css({visibility:"visible"}).velocity({opacity:1},{duration:55,delay:0,queue:!1}).velocity({scaleX:w,scaleY:w},{duration:300,delay:0,queue:!1,easing:"easeInOutQuad"})},r)},"mouseleave.tooltip":function(){h=!1,clearTimeout(p),setTimeout(function(){!0!==h&&(c.velocity({opacity:0,translateY:0,translateX:0},{duration:225,queue:!1}),u.velocity({opacity:0,scaleX:1,scaleY:1},{duration:225,queue:!1,complete:function(){u.css({visibility:"hidden"}),c.css({visibility:"hidden"}),h=!1}}))},225)}})}))};var e=function(e,i,n,o){var a=e,r=i;return a<0?a=4:a+n>window.innerWidth&&(a-=a+n-window.innerWidth),r<0?r=4:r+o>window.innerHeight+t(window).scrollTop&&(r-=r+o-window.innerHeight),{x:a,y:r}};t(document).ready(function(){t(".tooltipped").tooltip()})}(jQuery),function(t){"use strict";function e(t){return null!==t&&t===t.window}function i(t){return e(t)?t:9===t.nodeType&&t.defaultView}function n(t){var e,n,o={top:0,left:0},a=t&&t.ownerDocument;return e=a.documentElement,void 0!==t.getBoundingClientRect&&(o=t.getBoundingClientRect()),n=i(a),{top:o.top+n.pageYOffset-e.clientTop,left:o.left+n.pageXOffset-e.clientLeft}}function o(t){var e="";for(var i in t)t.hasOwnProperty(i)&&(e+=i+":"+t[i]+";");return e}function a(t){if(!1===u.allowEvent(t))return null;for(var e=null,i=t.target||t.srcElement;null!==i.parentElement;){if(!(i instanceof SVGElement||-1===i.className.indexOf("waves-effect"))){e=i;break}if(-1!==i.className.indexOf("waves-effect")){e=i;break}i=i.parentElement}return e}function r(e){var i=a(e);null!==i&&(c.show(e,i),"ontouchstart"in t&&(i.addEventListener("touchend",c.hide,!1),i.addEventListener("touchcancel",c.hide,!1)),i.addEventListener("mouseup",c.hide,!1),i.addEventListener("mouseleave",c.hide,!1))}var s=s||{},l=document.querySelectorAll.bind(document),c={duration:750,show:function(t,e){if(2===t.button)return!1;var i=e||this,a=document.createElement("div");a.className="waves-ripple",i.appendChild(a);var r=n(i),s=t.pageY-r.top,l=t.pageX-r.left,u="scale("+i.clientWidth/100*10+")";"touches"in t&&(s=t.touches[0].pageY-r.top,l=t.touches[0].pageX-r.left),a.setAttribute("data-hold",Date.now()),a.setAttribute("data-scale",u),a.setAttribute("data-x",l),a.setAttribute("data-y",s);var d={top:s+"px",left:l+"px"};a.className=a.className+" waves-notransition",a.setAttribute("style",o(d)),a.className=a.className.replace("waves-notransition",""),d["-webkit-transform"]=u,d["-moz-transform"]=u,d["-ms-transform"]=u,d["-o-transform"]=u,d.transform=u,d.opacity="1",d["-webkit-transition-duration"]=c.duration+"ms",d["-moz-transition-duration"]=c.duration+"ms",d["-o-transition-duration"]=c.duration+"ms",d["transition-duration"]=c.duration+"ms",d["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",d["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",a.setAttribute("style",o(d))},hide:function(t){u.touchup(t);var e=this,i=(e.clientWidth,null),n=e.getElementsByClassName("waves-ripple");if(!(n.length>0))return!1;var a=(i=n[n.length-1]).getAttribute("data-x"),r=i.getAttribute("data-y"),s=i.getAttribute("data-scale"),l=350-(Date.now()-Number(i.getAttribute("data-hold")));l<0&&(l=0),setTimeout(function(){var t={top:r+"px",left:a+"px",opacity:"0","-webkit-transition-duration":c.duration+"ms","-moz-transition-duration":c.duration+"ms","-o-transition-duration":c.duration+"ms","transition-duration":c.duration+"ms","-webkit-transform":s,"-moz-transform":s,"-ms-transform":s,"-o-transform":s,transform:s};i.setAttribute("style",o(t)),setTimeout(function(){try{e.removeChild(i)}catch(t){return!1}},c.duration)},l)},wrapInput:function(t){for(var e=0;e<t.length;e++){var i=t[e];if("input"===i.tagName.toLowerCase()){var n=i.parentNode;if("i"===n.tagName.toLowerCase()&&-1!==n.className.indexOf("waves-effect"))continue;var o=document.createElement("i");o.className=i.className+" waves-input-wrapper";var a=i.getAttribute("style");a||(a=""),o.setAttribute("style",a),i.className="waves-button-input",i.removeAttribute("style"),n.replaceChild(o,i),o.appendChild(i)}}}},u={touches:0,allowEvent:function(t){var e=!0;return"touchstart"===t.type?u.touches+=1:"touchend"===t.type||"touchcancel"===t.type?setTimeout(function(){u.touches>0&&(u.touches-=1)},500):"mousedown"===t.type&&u.touches>0&&(e=!1),e},touchup:function(t){u.allowEvent(t)}};s.displayEffect=function(e){"duration"in(e=e||{})&&(c.duration=e.duration),c.wrapInput(l(".waves-effect")),"ontouchstart"in t&&document.body.addEventListener("touchstart",r,!1),document.body.addEventListener("mousedown",r,!1)},s.attach=function(e){"input"===e.tagName.toLowerCase()&&(c.wrapInput([e]),e=e.parentElement),"ontouchstart"in t&&e.addEventListener("touchstart",r,!1),e.addEventListener("mousedown",r,!1)},t.Waves=s,document.addEventListener("DOMContentLoaded",function(){s.displayEffect()},!1)}(window),Materialize.toast=function(t,e,i,n){i=i||"";var o=document.getElementById("toast-container");null===o&&((o=document.createElement("div")).id="toast-container",document.body.appendChild(o));var a=function(t){var e=document.createElement("div");if(e.classList.add("toast"),i)for(var o=i.split(" "),a=0,r=o.length;a<r;a++)e.classList.add(o[a]);("object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName)?e.appendChild(t):t instanceof jQuery?e.appendChild(t[0]):e.innerHTML=t;var s=new Hammer(e,{prevent_default:!1});return s.on("pan",function(t){var i=t.deltaX;e.classList.contains("panning")||e.classList.add("panning");var n=1-Math.abs(i/80);n<0&&(n=0),Vel(e,{left:i,opacity:n},{duration:50,queue:!1,easing:"easeOutQuad"})}),s.on("panend",function(t){var i=t.deltaX;Math.abs(i)>80?Vel(e,{marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof n&&n(),e.parentNode.removeChild(e)}}):(e.classList.remove("panning"),Vel(e,{left:0,opacity:1},{duration:300,easing:"easeOutExpo",queue:!1}))}),e}(t);t&&o.appendChild(a),a.style.opacity=0,Vel(a,{translateY:"-35px",opacity:1},{duration:300,easing:"easeOutCubic",queue:!1});var r,s=e;null!=s&&(r=setInterval(function(){null===a.parentNode&&window.clearInterval(r),a.classList.contains("panning")||(s-=20),s<=0&&(Vel(a,{opacity:0,marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof n&&n(),this[0].parentNode.removeChild(this[0])}}),window.clearInterval(r))},20))},function(t){var e={init:function(e){var i={menuWidth:300,edge:"left",closeOnClick:!1,draggable:!0,onOpen:null,onClose:null};e=t.extend(i,e),t(this).each(function(){var i=t(this),n=i.attr("data-activates"),o=t("#"+n);300!=e.menuWidth&&o.css("width",e.menuWidth);var a=t('.drag-target[data-sidenav="'+n+'"]');e.draggable?(a.length&&a.remove(),a=t('<div class="drag-target"></div>').attr("data-sidenav",n),t("body").append(a)):a=t(),"left"==e.edge?(o.css("transform","translateX(-100%)"),a.css({left:0})):(o.addClass("right-aligned").css("transform","translateX(100%)"),a.css({right:0})),o.hasClass("fixed")&&window.innerWidth>992&&o.css("transform","translateX(0)"),o.hasClass("fixed")&&t(window).resize(function(){window.innerWidth>992?0!==t("#sidenav-overlay").length&&l?r(!0):o.css("transform","translateX(0%)"):!1===l&&("left"===e.edge?o.css("transform","translateX(-100%)"):o.css("transform","translateX(100%)"))}),!0===e.closeOnClick&&o.on("click.itemclick","a:not(.collapsible-header)",function(){window.innerWidth>992&&o.hasClass("fixed")||r()});var r=function(i){s=!1,l=!1,t("body").css({overflow:"",width:""}),t("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){t(this).remove()}}),"left"===e.edge?(a.css({width:"",right:"",left:"0"}),o.velocity({translateX:"-100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){!0===i&&(o.removeAttr("style"),o.css("width",e.menuWidth))}})):(a.css({width:"",right:"0",left:""}),o.velocity({translateX:"100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){!0===i&&(o.removeAttr("style"),o.css("width",e.menuWidth))}})),"function"==typeof e.onClose&&e.onClose.call(this,o)},s=!1,l=!1;e.draggable&&(a.on("click",function(){l&&r()}),a.hammer({prevent_default:!1}).on("pan",function(i){if("touch"==i.gesture.pointerType){i.gesture.direction;var n=i.gesture.center.x,a=i.gesture.center.y;i.gesture.velocityX;if(0===n&&0===a)return;var s=t("body"),c=t("#sidenav-overlay"),u=s.innerWidth();if(s.css("overflow","hidden"),s.width(u),0===c.length&&((c=t('<div id="sidenav-overlay"></div>')).css("opacity",0).click(function(){r()}),"function"==typeof e.onOpen&&e.onOpen.call(this,o),t("body").append(c)),"left"===e.edge&&(n>e.menuWidth?n=e.menuWidth:n<0&&(n=0)),"left"===e.edge)n<e.menuWidth/2?l=!1:n>=e.menuWidth/2&&(l=!0),o.css("transform","translateX("+(n-e.menuWidth)+"px)");else{n<window.innerWidth-e.menuWidth/2?l=!0:n>=window.innerWidth-e.menuWidth/2&&(l=!1);var d=n-e.menuWidth/2;d<0&&(d=0),o.css("transform","translateX("+d+"px)")}var p;"left"===e.edge?(p=n/e.menuWidth,c.velocity({opacity:p},{duration:10,queue:!1,easing:"easeOutQuad"})):(p=Math.abs((n-window.innerWidth)/e.menuWidth),c.velocity({opacity:p},{duration:10,queue:!1,easing:"easeOutQuad"}))}}).on("panend",function(i){if("touch"==i.gesture.pointerType){var n=t("#sidenav-overlay"),r=i.gesture.velocityX,c=i.gesture.center.x,u=c-e.menuWidth,d=c-e.menuWidth/2;u>0&&(u=0),d<0&&(d=0),s=!1,"left"===e.edge?l&&r<=.3||r<-.5?(0!==u&&o.velocity({translateX:[0,u]},{duration:300,queue:!1,easing:"easeOutQuad"}),n.velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),a.css({width:"50%",right:0,left:""}),l=!0):(!l||r>.3)&&(t("body").css({overflow:"",width:""}),o.velocity({translateX:[-1*e.menuWidth-10,u]},{duration:200,queue:!1,easing:"easeOutQuad"}),n.velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){"function"==typeof e.onClose&&e.onClose.call(this,o),t(this).remove()}}),a.css({width:"10px",right:"",left:0})):l&&r>=-.3||r>.5?(0!==d&&o.velocity({translateX:[0,d]},{duration:300,queue:!1,easing:"easeOutQuad"}),n.velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),a.css({width:"50%",right:"",left:0}),l=!0):(!l||r<-.3)&&(t("body").css({overflow:"",width:""}),o.velocity({translateX:[e.menuWidth+10,d]},{duration:200,queue:!1,easing:"easeOutQuad"}),n.velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){t(this).remove()}}),a.css({width:"10px",right:0,left:""}))}})),i.off("click.sidenav").on("click.sidenav",function(){if(!0===l)l=!1,s=!1,r();else{var i=t("body"),n=t('<div id="sidenav-overlay"></div>'),c=i.innerWidth();i.css("overflow","hidden"),i.width(c),t("body").append(a),"left"===e.edge?(a.css({width:"50%",right:0,left:""}),o.velocity({translateX:[0,-1*e.menuWidth]},{duration:300,queue:!1,easing:"easeOutQuad"})):(a.css({width:"50%",right:"",left:0}),o.velocity({translateX:[0,e.menuWidth]},{duration:300,queue:!1,easing:"easeOutQuad"})),n.css("opacity",0).click(function(){l=!1,s=!1,r(),n.velocity({opacity:0},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){t(this).remove()}})}),t("body").append(n),n.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){l=!0,s=!1}}),"function"==typeof e.onOpen&&e.onOpen.call(this,o)}return!1})})},destroy:function(){var e=t("#sidenav-overlay"),i=t('.drag-target[data-sidenav="'+t(this).attr("data-activates")+'"]');e.trigger("click"),i.remove(),t(this).off("click"),e.remove()},show:function(){this.trigger("click")},hide:function(){t("#sidenav-overlay").trigger("click")}};t.fn.sideNav=function(i){return e[i]?e[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.sideNav"):e.init.apply(this,arguments)}}(jQuery),function(t){function e(e,i,n,o){var r=t();return t.each(a,function(t,a){if(a.height()>0){var s=a.offset().top,l=a.offset().left,c=l+a.width(),u=s+a.height();!(l>i||c<o||s>n||u<e)&&r.push(a)}}),r}function i(i){++l;var n=o.scrollTop(),a=o.scrollLeft(),s=a+o.width(),u=n+o.height(),d=e(n+c.top+i||200,s+c.right,u+c.bottom,a+c.left);t.each(d,function(t,e){"number"!=typeof e.data("scrollSpy:ticks")&&e.triggerHandler("scrollSpy:enter"),e.data("scrollSpy:ticks",l)}),t.each(r,function(t,e){var i=e.data("scrollSpy:ticks");"number"==typeof i&&i!==l&&(e.triggerHandler("scrollSpy:exit"),e.data("scrollSpy:ticks",null))}),r=d}function n(){o.trigger("scrollSpy:winSize")}var o=t(window),a=[],r=[],s=!1,l=0,c={top:0,right:0,bottom:0,left:0};t.scrollSpy=function(e,n){var r={throttle:100,scrollOffset:200,activeClass:"active",getActiveElement:function(t){return'a[href="#'+t+'"]'}};n=t.extend(r,n);var l=[];(e=t(e)).each(function(e,i){a.push(t(i)),t(i).data("scrollSpy:id",e),t('a[href="#'+t(i).attr("id")+'"]').click(function(e){e.preventDefault();var i=t(Materialize.escapeHash(this.hash)).offset().top+1;t("html, body").animate({scrollTop:i-n.scrollOffset},{duration:400,queue:!1,easing:"easeOutCubic"})})}),c.top=n.offsetTop||0,c.right=n.offsetRight||0,c.bottom=n.offsetBottom||0,c.left=n.offsetLeft||0;var u=Materialize.throttle(function(){i(n.scrollOffset)},n.throttle||100),d=function(){t(document).ready(u)};return s||(o.on("scroll",d),o.on("resize",d),s=!0),setTimeout(d,0),e.on("scrollSpy:enter",function(){l=t.grep(l,function(t){return 0!=t.height()});var e=t(this);l[0]?(t(n.getActiveElement(l[0].attr("id"))).removeClass(n.activeClass),e.data("scrollSpy:id")<l[0].data("scrollSpy:id")?l.unshift(t(this)):l.push(t(this))):l.push(t(this)),t(n.getActiveElement(l[0].attr("id"))).addClass(n.activeClass)}),e.on("scrollSpy:exit",function(){if((l=t.grep(l,function(t){return 0!=t.height()}))[0]){t(n.getActiveElement(l[0].attr("id"))).removeClass(n.activeClass);var e=t(this);(l=t.grep(l,function(t){return t.attr("id")!=e.attr("id")}))[0]&&t(n.getActiveElement(l[0].attr("id"))).addClass(n.activeClass)}}),e},t.winSizeSpy=function(e){return t.winSizeSpy=function(){return o},e=e||{throttle:100},o.on("resize",Materialize.throttle(n,e.throttle||100))},t.fn.scrollSpy=function(e){return t.scrollSpy(t(this),e)}}(jQuery),function(t){t(document).ready(function(){function e(e){var i=e.css("font-family"),o=e.css("font-size"),a=e.css("line-height");o&&n.css("font-size",o),i&&n.css("font-family",i),a&&n.css("line-height",a),e.data("original-height")||e.data("original-height",e.height()),"off"===e.attr("wrap")&&n.css("overflow-wrap","normal").css("white-space","pre"),n.text(e.val()+"\n");var r=n.html().replace(/\n/g,"<br>");n.html(r),e.is(":visible")?n.css("width",e.width()):n.css("width",t(window).width()/2),e.data("original-height")<=n.height()?e.css("height",n.height()):e.val().length<e.data("previous-length")&&e.css("height",e.data("original-height")),e.data("previous-length",e.val().length)}Materialize.updateTextFields=function(){t("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea").each(function(e,i){var n=t(this);t(i).val().length>0||t(i).is(":focus")||i.autofocus||void 0!==n.attr("placeholder")?n.siblings("label").addClass("active"):t(i)[0].validity?n.siblings("label").toggleClass("active",!0===t(i)[0].validity.badInput):n.siblings("label").removeClass("active")})};var i="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";t(document).on("change",i,function(){0===t(this).val().length&&void 0===t(this).attr("placeholder")||t(this).siblings("label").addClass("active"),validate_field(t(this))}),t(document).ready(function(){Materialize.updateTextFields()}),t(document).on("reset",function(e){var n=t(e.target);n.is("form")&&(n.find(i).removeClass("valid").removeClass("invalid"),n.find(i).each(function(){""===t(this).attr("value")&&t(this).siblings("label").removeClass("active")}),n.find("select.initialized").each(function(){var t=n.find("option[selected]").text();n.siblings("input.select-dropdown").val(t)}))}),t(document).on("focus",i,function(){t(this).siblings("label, .prefix").addClass("active")}),t(document).on("blur",i,function(){var e=t(this),i=".prefix";0===e.val().length&&!0!==e[0].validity.badInput&&void 0===e.attr("placeholder")&&(i+=", label"),e.siblings(i).removeClass("active"),validate_field(e)}),window.validate_field=function(t){var e=void 0!==t.attr("data-length"),i=parseInt(t.attr("data-length")),n=t.val().length;0===t.val().length&&!1===t[0].validity.badInput?t.hasClass("validate")&&(t.removeClass("valid"),t.removeClass("invalid")):t.hasClass("validate")&&(t.is(":valid")&&e&&n<=i||t.is(":valid")&&!e?(t.removeClass("invalid"),t.addClass("valid")):(t.removeClass("valid"),t.addClass("invalid")))};t(document).on("keyup.radio","input[type=radio], input[type=checkbox]",function(e){if(9===e.which)return t(this).addClass("tabbed"),void t(this).one("blur",function(e){t(this).removeClass("tabbed")})});var n=t(".hiddendiv").first();n.length||(n=t('<div class="hiddendiv common"></div>'),t("body").append(n));t(".materialize-textarea").each(function(){var e=t(this);e.data("original-height",e.height()),e.data("previous-length",e.val().length)}),t("body").on("keyup keydown autoresize",".materialize-textarea",function(){e(t(this))}),t(document).on("change",'.file-field input[type="file"]',function(){for(var e=t(this).closest(".file-field").find("input.file-path"),i=t(this)[0].files,n=[],o=0;o<i.length;o++)n.push(i[o].name);e.val(n.join(", ")),e.trigger("change")});var o="input[type=range]",a=!1;t(o).each(function(){var e=t('<span class="thumb"><span class="value"></span></span>');t(this).after(e)});var r=function(t){var e=-7+parseInt(t.parent().css("padding-left"))+"px";t.velocity({height:"30px",width:"30px",top:"-30px",marginLeft:e},{duration:300,easing:"easeOutExpo"})},s=function(t){var e=t.width()-15,i=parseFloat(t.attr("max")),n=parseFloat(t.attr("min"));return(parseFloat(t.val())-n)/(i-n)*e};t(document).on("change",o,function(e){var i=t(this).siblings(".thumb");i.find(".value").html(t(this).val()),i.hasClass("active")||r(i);var n=s(t(this));i.addClass("active").css("left",n)}),t(document).on("mousedown touchstart",o,function(e){var i=t(this).siblings(".thumb");if(i.length<=0&&(i=t('<span class="thumb"><span class="value"></span></span>'),t(this).after(i)),i.find(".value").html(t(this).val()),a=!0,t(this).addClass("active"),i.hasClass("active")||r(i),"input"!==e.type){var n=s(t(this));i.addClass("active").css("left",n)}}),t(document).on("mouseup touchend",".range-field",function(){a=!1,t(this).removeClass("active")}),t(document).on("input mousemove touchmove",".range-field",function(e){var i=t(this).children(".thumb"),n=t(this).find(o);if(a){i.hasClass("active")||r(i);var l=s(n);i.addClass("active").css("left",l),i.find(".value").html(i.siblings(o).val())}}),t(document).on("mouseout touchleave",".range-field",function(){if(!a){var e=t(this).children(".thumb"),i=7+parseInt(t(this).css("padding-left"))+"px";e.hasClass("active")&&e.velocity({height:"0",width:"0",top:"10px",marginLeft:i},{duration:100}),e.removeClass("active")}}),t.fn.autocomplete=function(e){var i={data:{},limit:1/0,onAutocomplete:null,minLength:1};return e=t.extend(i,e),this.each(function(){var i,n=t(this),o=e.data,a=0,r=-1,s=n.closest(".input-field");if(!t.isEmptyObject(o)){var l,c=t('<ul class="autocomplete-content dropdown-content"></ul>');s.length?(l=s.children(".autocomplete-content.dropdown-content").first()).length||s.append(c):(l=n.next(".autocomplete-content.dropdown-content")).length||n.after(c),l.length&&(c=l);var u=function(t,e){var i=e.find("img"),n=e.text().toLowerCase().indexOf(""+t.toLowerCase()),o=n+t.length-1,a=e.text().slice(0,n),r=e.text().slice(n,o+1),s=e.text().slice(o+1);e.html("<span>"+a+"<span class='highlight'>"+r+"</span>"+s+"</span>"),i.length&&e.prepend(i)},d=function(){r=-1,c.find(".active").removeClass("active")},p=function(){c.empty(),d(),i=void 0};n.off("blur.autocomplete").on("blur.autocomplete",function(){p()}),n.off("keyup.autocomplete focus.autocomplete").on("keyup.autocomplete focus.autocomplete",function(r){a=0;var s=n.val().toLowerCase();if(13!==r.which&&38!==r.which&&40!==r.which){if(i!==s&&(p(),s.length>=e.minLength))for(var l in o)if(o.hasOwnProperty(l)&&-1!==l.toLowerCase().indexOf(s)&&l.toLowerCase()!==s){if(a>=e.limit)break;var d=t("<li></li>");o[l]?d.append('<img src="'+o[l]+'" class="right circle"><span>'+l+"</span>"):d.append("<span>"+l+"</span>"),c.append(d),u(s,d),a++}i=s}}),n.off("keydown.autocomplete").on("keydown.autocomplete",function(t){var e,i=t.which,n=c.children("li").length,o=c.children(".active").first();13===i&&r>=0?(e=c.children("li").eq(r)).length&&(e.trigger("mousedown.autocomplete"),t.preventDefault()):38!==i&&40!==i||(t.preventDefault(),38===i&&r>0&&r--,40===i&&r<n-1&&r++,o.removeClass("active"),r>=0&&c.children("li").eq(r).addClass("active"))}),c.on("mousedown.autocomplete touchstart.autocomplete","li",function(){var i=t(this).text().trim();n.val(i),n.trigger("change"),p(),"function"==typeof e.onAutocomplete&&e.onAutocomplete.call(this,i)})}})}}),t.fn.material_select=function(e){function i(t,e,i){var o=t.indexOf(e),a=-1===o;return a?t.push(e):t.splice(o,1),i.siblings("ul.dropdown-content").find("li:not(.optgroup)").eq(e).toggleClass("active"),i.find("option").eq(e).prop("selected",a),n(t,i),a}function n(t,e){for(var i="",n=0,o=t.length;n<o;n++){var a=e.find("option").eq(t[n]).text();i+=0===n?a:", "+a}""===i&&(i=e.find("option:disabled").eq(0).text()),e.siblings("input.select-dropdown").val(i)}t(this).each(function(){var n=t(this);if(!n.hasClass("browser-default")){var o=!!n.attr("multiple"),a=n.data("select-id");if(a&&(n.parent().find("span.caret").remove(),n.parent().find("input").remove(),n.unwrap(),t("ul#select-options-"+a).remove()),"destroy"!==e){var r=Materialize.guid();n.data("select-id",r);var s=t('<div class="select-wrapper"></div>');s.addClass(n.attr("class"));var l=t('<ul id="select-options-'+r+'" class="dropdown-content select-dropdown '+(o?"multiple-select-dropdown":"")+'"></ul>'),c=n.children("option, optgroup"),u=[],d=!1,p=n.find("option:selected").html()||n.find("option:first").html()||"",h=function(e,i,n){var a=i.is(":disabled")?"disabled ":"",r="optgroup-option"===n?"optgroup-option ":"",s=o?'<input type="checkbox"'+a+"/><label></label>":"",c=i.data("icon"),u=i.attr("class");if(c){var d="";return u&&(d=' class="'+u+'"'),l.append(t('<li class="'+a+r+'"><img alt="" src="'+c+'"'+d+"><span>"+s+i.html()+"</span></li>")),!0}l.append(t('<li class="'+a+r+'"><span>'+s+i.html()+"</span></li>"))};c.length&&c.each(function(){if(t(this).is("option"))o?h(0,t(this),"multiple"):h(0,t(this));else if(t(this).is("optgroup")){var e=t(this).children("option");l.append(t('<li class="optgroup"><span>'+t(this).attr("label")+"</span></li>")),e.each(function(){h(0,t(this),"optgroup-option")})}}),l.find("li:not(.optgroup)").each(function(a){t(this).click(function(r){if(!t(this).hasClass("disabled")&&!t(this).hasClass("optgroup")){var s=!0;o?(t('input[type="checkbox"]',this).prop("checked",function(t,e){return!e}),s=i(u,a,n),g.trigger("focus")):(l.find("li").removeClass("active"),t(this).toggleClass("active"),g.val(t(this).text())),m(l,t(this)),n.find("option").eq(a).prop("selected",s),n.trigger("change"),void 0!==e&&e()}r.stopPropagation()})}),n.wrap(s);var f=t('<span class="caret">&#9660;</span>');n.is(":disabled")&&f.addClass("disabled");var v=p.replace(/"/g,"&quot;"),g=t('<input type="text" class="select-dropdown" readonly="true" '+(n.is(":disabled")?"disabled":"")+' data-activates="select-options-'+r+'" value="'+v+'"/>');n.before(g),g.before(f),g.after(l),n.is(":disabled")||g.dropdown({hover:!1}),n.attr("tabindex")&&t(g[0]).attr("tabindex",n.attr("tabindex")),n.addClass("initialized"),g.on({focus:function(){if(t("ul.select-dropdown").not(l[0]).is(":visible")&&t("input.select-dropdown").trigger("close"),!l.is(":visible")){t(this).trigger("open",["focus"]);var e=t(this).val();o&&e.indexOf(",")>=0&&(e=e.split(",")[0]);var i=l.find("li").filter(function(){return t(this).text().toLowerCase()===e.toLowerCase()})[0];m(l,i,!0)}},click:function(t){t.stopPropagation()}}),g.on("blur",function(){o||t(this).trigger("close"),l.find("li.selected").removeClass("selected")}),l.hover(function(){d=!0},function(){d=!1}),t(window).on({click:function(){o&&(d||g.trigger("close"))}}),o&&n.find("option:selected:not(:disabled)").each(function(){var e=t(this).index();i(u,e,n),l.find("li").eq(e).find(":checkbox").prop("checked",!0)});var m=function(e,i,n){if(i){e.find("li.selected").removeClass("selected");var a=t(i);a.addClass("selected"),o&&!n||l.scrollTo(a)}},y=[];g.on("keydown",function(e){if(9!=e.which)if(40!=e.which||l.is(":visible")){if(13!=e.which||l.is(":visible")){e.preventDefault();var i=String.fromCharCode(e.which).toLowerCase(),n=[9,13,27,38,40];if(i&&-1===n.indexOf(e.which)){y.push(i);var a=y.join(""),r=l.find("li").filter(function(){return 0===t(this).text().toLowerCase().indexOf(a)})[0];r&&m(l,r)}if(13==e.which){var s=l.find("li.selected:not(.disabled)")[0];s&&(t(s).trigger("click"),o||g.trigger("close"))}40==e.which&&(r=l.find("li.selected").length?l.find("li.selected").next("li:not(.disabled)")[0]:l.find("li:not(.disabled)")[0],m(l,r)),27==e.which&&g.trigger("close"),38==e.which&&(r=l.find("li.selected").prev("li:not(.disabled)")[0])&&m(l,r),setTimeout(function(){y=[]},1e3)}}else g.trigger("open");else g.trigger("close")})}else n.data("select-id",null).removeClass("initialized")}})}}(jQuery),function(t){var e={init:function(e){var i={indicators:!0,height:400,transition:500,interval:6e3};return e=t.extend(i,e),this.each(function(){function i(t,e){t.hasClass("center-align")?t.velocity({opacity:0,translateY:-100},{duration:e,queue:!1}):t.hasClass("right-align")?t.velocity({opacity:0,translateX:100},{duration:e,queue:!1}):t.hasClass("left-align")&&t.velocity({opacity:0,translateX:-100},{duration:e,queue:!1})}function n(t){t>=c.length?t=0:t<0&&(t=c.length-1),(u=l.find(".active").index())!=t&&(o=c.eq(u),$caption=o.find(".caption"),o.removeClass("active"),o.velocity({opacity:0},{duration:e.transition,queue:!1,easing:"easeOutQuad",complete:function(){c.not(".active").velocity({opacity:0,translateX:0,translateY:0},{duration:0,queue:!1})}}),i($caption,e.transition),e.indicators&&a.eq(u).removeClass("active"),c.eq(t).velocity({opacity:1},{duration:e.transition,queue:!1,easing:"easeOutQuad"}),c.eq(t).find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:e.transition,delay:e.transition,queue:!1,easing:"easeOutQuad"}),c.eq(t).addClass("active"),e.indicators&&a.eq(t).addClass("active"))}var o,a,r,s=t(this),l=s.find("ul.slides").first(),c=l.find("> li"),u=l.find(".active").index();-1!=u&&(o=c.eq(u)),s.hasClass("fullscreen")||(e.indicators?s.height(e.height+40):s.height(e.height),l.height(e.height)),c.find(".caption").each(function(){i(t(this),0)}),c.find("img").each(function(){var e="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";t(this).attr("src")!==e&&(t(this).css("background-image",'url("'+t(this).attr("src")+'")'),t(this).attr("src",e))}),e.indicators&&(a=t('<ul class="indicators"></ul>'),c.each(function(i){var o=t('<li class="indicator-item"></li>');o.click(function(){n(l.parent().find(t(this)).index()),clearInterval(r),r=setInterval(function(){u=l.find(".active").index(),c.length==u+1?u=0:u+=1,n(u)},e.transition+e.interval)}),a.append(o)}),s.append(a),a=s.find("ul.indicators").find("li.indicator-item")),o?o.show():(c.first().addClass("active").velocity({opacity:1},{duration:e.transition,queue:!1,easing:"easeOutQuad"}),u=0,o=c.eq(u),e.indicators&&a.eq(u).addClass("active")),o.find("img").each(function(){o.find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:e.transition,queue:!1,easing:"easeOutQuad"})}),r=setInterval(function(){n((u=l.find(".active").index())+1)},e.transition+e.interval);var d=!1,p=!1,h=!1;s.hammer({prevent_default:!1}).on("pan",function(t){if("touch"===t.gesture.pointerType){clearInterval(r);var e=t.gesture.direction,i=t.gesture.deltaX,n=t.gesture.velocityX,o=t.gesture.velocityY;$curr_slide=l.find(".active"),Math.abs(n)>Math.abs(o)&&$curr_slide.velocity({translateX:i},{duration:50,queue:!1,easing:"easeOutQuad"}),4===e&&(i>s.innerWidth()/2||n<-.65)?h=!0:2===e&&(i<-1*s.innerWidth()/2||n>.65)&&(p=!0);var a;p&&(0===(a=$curr_slide.next()).length&&(a=c.first()),a.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"})),h&&(0===(a=$curr_slide.prev()).length&&(a=c.last()),a.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"}))}}).on("panend",function(t){"touch"===t.gesture.pointerType&&($curr_slide=l.find(".active"),d=!1,curr_index=l.find(".active").index(),!h&&!p||c.length<=1?$curr_slide.velocity({translateX:0},{duration:300,queue:!1,easing:"easeOutQuad"}):p?(n(curr_index+1),$curr_slide.velocity({translateX:-1*s.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})):h&&(n(curr_index-1),$curr_slide.velocity({translateX:s.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})),p=!1,h=!1,clearInterval(r),r=setInterval(function(){u=l.find(".active").index(),c.length==u+1?u=0:u+=1,n(u)},e.transition+e.interval))}),s.on("sliderPause",function(){clearInterval(r)}),s.on("sliderStart",function(){clearInterval(r),r=setInterval(function(){u=l.find(".active").index(),c.length==u+1?u=0:u+=1,n(u)},e.transition+e.interval)}),s.on("sliderNext",function(){n((u=l.find(".active").index())+1)}),s.on("sliderPrev",function(){n((u=l.find(".active").index())-1)})})},pause:function(){t(this).trigger("sliderPause")},start:function(){t(this).trigger("sliderStart")},next:function(){t(this).trigger("sliderNext")},prev:function(){t(this).trigger("sliderPrev")}};t.fn.slider=function(i){return e[i]?e[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.tooltip"):e.init.apply(this,arguments)}}(jQuery),function(t){t(document).ready(function(){t(document).on("click.card",".card",function(e){if(t(this).find("> .card-reveal").length){var i=t(e.target).closest(".card");void 0===i.data("initialOverflow")&&i.data("initialOverflow",void 0===i.css("overflow")?"":i.css("overflow")),t(e.target).is(t(".card-reveal .card-title"))||t(e.target).is(t(".card-reveal .card-title i"))?t(this).find(".card-reveal").velocity({translateY:0},{duration:225,queue:!1,easing:"easeInOutQuad",complete:function(){t(this).css({display:"none"}),i.css("overflow",i.data("initialOverflow"))}}):(t(e.target).is(t(".card .activator"))||t(e.target).is(t(".card .activator i")))&&(i.css("overflow","hidden"),t(this).find(".card-reveal").css({display:"block"}).velocity("stop",!1).velocity({translateY:"-100%"},{duration:300,queue:!1,easing:"easeInOutQuad"}))}})})}(jQuery),function(t){var e={data:[],placeholder:"",secondaryPlaceholder:"",autocompleteOptions:{}};t(document).ready(function(){t(document).on("click",".chip .close",function(e){t(this).closest(".chips").attr("data-initialized")||t(this).closest(".chip").remove()})}),t.fn.material_chip=function(i){var n=this;if(this.$el=t(this),this.$document=t(document),this.SELS={CHIPS:".chips",CHIP:".chip",INPUT:"input",DELETE:".material-icons",SELECTED_CHIP:".selected"},"data"===i)return this.$el.data("chips");var o=t.extend({},e,i);n.hasAutocomplete=!t.isEmptyObject(o.autocompleteOptions.data),this.init=function(){var e=0;n.$el.each(function(){var i=t(this),a=Materialize.guid();n.chipId=a,o.data&&o.data instanceof Array||(o.data=[]),i.data("chips",o.data),i.attr("data-index",e),i.attr("data-initialized",!0),i.hasClass(n.SELS.CHIPS)||i.addClass("chips"),n.chips(i,a),e++})},this.handleEvents=function(){var e=n.SELS;n.$document.off("click.chips-focus",e.CHIPS).on("click.chips-focus",e.CHIPS,function(i){t(i.target).find(e.INPUT).focus()}),n.$document.off("click.chips-select",e.CHIP).on("click.chips-select",e.CHIP,function(i){var o=t(i.target);if(o.length){var a=o.hasClass("selected"),r=o.closest(e.CHIPS);t(e.CHIP).removeClass("selected"),a||n.selectChip(o.index(),r)}}),n.$document.off("keydown.chips").on("keydown.chips",function(i){if(!t(i.target).is("input, textarea")){var o,a=n.$document.find(e.CHIP+e.SELECTED_CHIP),r=a.closest(e.CHIPS),s=a.siblings(e.CHIP).length;if(a.length)if(8===i.which||46===i.which){i.preventDefault(),o=a.index(),n.deleteChip(o,r);var l=null;o+1<s?l=o:o!==s&&o+1!==s||(l=s-1),l<0&&(l=null),null!==l&&n.selectChip(l,r),s||r.find("input").focus()}else if(37===i.which){if((o=a.index()-1)<0)return;t(e.CHIP).removeClass("selected"),n.selectChip(o,r)}else if(39===i.which){if(o=a.index()+1,t(e.CHIP).removeClass("selected"),o>s)return void r.find("input").focus();n.selectChip(o,r)}}}),n.$document.off("focusin.chips",e.CHIPS+" "+e.INPUT).on("focusin.chips",e.CHIPS+" "+e.INPUT,function(i){var n=t(i.target).closest(e.CHIPS);n.addClass("focus"),n.siblings("label, .prefix").addClass("active"),t(e.CHIP).removeClass("selected")}),n.$document.off("focusout.chips",e.CHIPS+" "+e.INPUT).on("focusout.chips",e.CHIPS+" "+e.INPUT,function(i){var n=t(i.target).closest(e.CHIPS);n.removeClass("focus"),void 0!==n.data("chips")&&n.data("chips").length||n.siblings("label").removeClass("active"),n.siblings(".prefix").removeClass("active")}),n.$document.off("keydown.chips-add",e.CHIPS+" "+e.INPUT).on("keydown.chips-add",e.CHIPS+" "+e.INPUT,function(i){var o=t(i.target),a=o.closest(e.CHIPS),r=a.children(e.CHIP).length;if(13===i.which){if(n.hasAutocomplete&&a.find(".autocomplete-content.dropdown-content").length&&a.find(".autocomplete-content.dropdown-content").children().length)return;return i.preventDefault(),n.addChip({tag:o.val()},a),void o.val("")}if((8===i.keyCode||37===i.keyCode)&&""===o.val()&&r)return i.preventDefault(),n.selectChip(r-1,a),void o.blur()}),n.$document.off("click.chips-delete",e.CHIPS+" "+e.DELETE).on("click.chips-delete",e.CHIPS+" "+e.DELETE,function(i){var o=t(i.target),a=o.closest(e.CHIPS),r=o.closest(e.CHIP);i.stopPropagation(),n.deleteChip(r.index(),a),a.find("input").focus()})},this.chips=function(e,i){e.empty(),e.data("chips").forEach(function(t){e.append(n.renderChip(t))}),e.append(t('<input id="'+i+'" class="input" placeholder="">')),n.setPlaceholder(e);var a=e.next("label");a.length&&(a.attr("for",i),void 0!==e.data("chips")&&e.data("chips").length&&a.addClass("active"));var r=t("#"+i);n.hasAutocomplete&&(o.autocompleteOptions.onAutocomplete=function(t){n.addChip({tag:t},e),r.val(""),r.focus()},r.autocomplete(o.autocompleteOptions))},this.renderChip=function(e){if(e.tag){var i=t('<div class="chip"></div>');return i.text(e.tag),e.image&&i.prepend(t("<img />").attr("src",e.image)),i.append(t('<i class="material-icons close">close</i>')),i}},this.setPlaceholder=function(t){void 0!==t.data("chips")&&t.data("chips").length&&o.placeholder?t.find("input").prop("placeholder",o.placeholder):void 0!==t.data("chips")&&t.data("chips").length||!o.secondaryPlaceholder||t.find("input").prop("placeholder",o.secondaryPlaceholder)},this.isValid=function(t,e){for(var i=t.data("chips"),n=!1,o=0;o<i.length;o++)if(i[o].tag===e.tag)return void(n=!0);return""!==e.tag&&!n},this.addChip=function(t,e){if(n.isValid(e,t)){for(var i=n.renderChip(t),o=[],a=e.data("chips"),r=0;r<a.length;r++)o.push(a[r]);o.push(t),e.data("chips",o),i.insertBefore(e.find("input")),e.trigger("chip.add",t),n.setPlaceholder(e)}},this.deleteChip=function(t,e){var i=e.data("chips")[t];e.find(".chip").eq(t).remove();for(var o=[],a=e.data("chips"),r=0;r<a.length;r++)r!==t&&o.push(a[r]);e.data("chips",o),e.trigger("chip.delete",i),n.setPlaceholder(e)},this.selectChip=function(t,e){var i=e.find(".chip").eq(t);i&&!1===i.hasClass("selected")&&(i.addClass("selected"),e.trigger("chip.select",e.data("chips")[t]))},this.getChipsElement=function(t,e){return e.eq(t)},this.init(),this.handleEvents()}}(jQuery),function(t){t.fn.pushpin=function(e){var i={top:0,bottom:1/0,offset:0};return"remove"===e?(this.each(function(){(id=t(this).data("pushpin-id"))&&(t(window).off("scroll."+id),t(this).removeData("pushpin-id").removeClass("pin-top pinned pin-bottom").removeAttr("style"))}),!1):(e=t.extend(i,e),$index=0,this.each(function(){function i(t){t.removeClass("pin-top"),t.removeClass("pinned"),t.removeClass("pin-bottom")}function n(n,o){n.each(function(){e.top<=o&&e.bottom>=o&&!t(this).hasClass("pinned")&&(i(t(this)),t(this).css("top",e.offset),t(this).addClass("pinned")),o<e.top&&!t(this).hasClass("pin-top")&&(i(t(this)),t(this).css("top",0),t(this).addClass("pin-top")),o>e.bottom&&!t(this).hasClass("pin-bottom")&&(i(t(this)),t(this).addClass("pin-bottom"),t(this).css("top",e.bottom-r))})}var o=Materialize.guid(),a=t(this),r=t(this).offset().top;t(this).data("pushpin-id",o),n(a,t(window).scrollTop()),t(window).on("scroll."+o,function(){var i=t(window).scrollTop()+e.offset;n(a,i)})}))}}(jQuery),function(t){t(document).ready(function(){t.fn.reverse=[].reverse,t(document).on("mouseenter.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle):not(.toolbar)",function(i){var n=t(this);e(n)}),t(document).on("mouseleave.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle):not(.toolbar)",function(e){var n=t(this);i(n)}),t(document).on("click.fabClickToggle",".fixed-action-btn.click-to-toggle > a",function(n){var o=t(this).parent();o.hasClass("active")?i(o):e(o)}),t(document).on("click.fabToolbar",".fixed-action-btn.toolbar > a",function(e){var i=t(this).parent();n(i)})}),t.fn.extend({openFAB:function(){e(t(this))},closeFAB:function(){i(t(this))},openToolbar:function(){n(t(this))},closeToolbar:function(){o(t(this))}});var e=function(e){var i=e;if(!1===i.hasClass("active")){var n,o;!0===i.hasClass("horizontal")?o=40:n=40,i.addClass("active"),i.find("ul .btn-floating").velocity({scaleY:".4",scaleX:".4",translateY:n+"px",translateX:o+"px"},{duration:0});var a=0;i.find("ul .btn-floating").reverse().each(function(){t(this).velocity({opacity:"1",scaleX:"1",scaleY:"1",translateY:"0",translateX:"0"},{duration:80,delay:a}),a+=40})}},i=function(t){var e,i,n=t;!0===n.hasClass("horizontal")?i=40:e=40,n.removeClass("active");n.find("ul .btn-floating").velocity("stop",!0),n.find("ul .btn-floating").velocity({opacity:"0",scaleX:".4",scaleY:".4",translateY:e+"px",translateX:i+"px"},{duration:80})},n=function(e){if("true"!==e.attr("data-open")){var i,n,a,r=window.innerWidth,s=window.innerHeight,l=e[0].getBoundingClientRect(),c=e.find("> a").first(),u=e.find("> ul").first(),d=t('<div class="fab-backdrop"></div>'),p=c.css("background-color");c.append(d),i=l.left-r/2+l.width/2,n=s-l.bottom,a=r/d.width(),e.attr("data-origin-bottom",l.bottom),e.attr("data-origin-left",l.left),e.attr("data-origin-width",l.width),e.addClass("active"),e.attr("data-open",!0),e.css({"text-align":"center",width:"100%",bottom:0,left:0,transform:"translateX("+i+"px)",transition:"none"}),c.css({transform:"translateY("+-n+"px)",transition:"none"}),d.css({"background-color":p}),setTimeout(function(){e.css({transform:"",transition:"transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"}),c.css({overflow:"visible",transform:"",transition:"transform .2s"}),setTimeout(function(){e.css({overflow:"hidden","background-color":p}),d.css({transform:"scale("+a+")",transition:"transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"}),u.find("> li > a").css({opacity:1}),t(window).on("scroll.fabToolbarClose",function(){o(e),t(window).off("scroll.fabToolbarClose"),t(document).off("click.fabToolbarClose")}),t(document).on("click.fabToolbarClose",function(i){t(i.target).closest(u).length||(o(e),t(window).off("scroll.fabToolbarClose"),t(document).off("click.fabToolbarClose"))})},100)},0)}},o=function(t){if("true"===t.attr("data-open")){var e,i,n=window.innerWidth,o=window.innerHeight,a=t.attr("data-origin-width"),r=t.attr("data-origin-bottom"),s=t.attr("data-origin-left"),l=t.find("> .btn-floating").first(),c=t.find("> ul").first(),u=t.find(".fab-backdrop"),d=l.css("background-color");e=s-n/2+a/2,i=o-r,n/u.width(),t.removeClass("active"),t.attr("data-open",!1),t.css({"background-color":"transparent",transition:"none"}),l.css({transition:"none"}),u.css({transform:"scale(0)","background-color":d}),c.find("> li > a").css({opacity:""}),setTimeout(function(){u.remove(),t.css({"text-align":"",width:"",bottom:"",left:"",overflow:"","background-color":"",transform:"translate3d("+-e+"px,0,0)"}),l.css({overflow:"",transform:"translate3d(0,"+i+"px,0)"}),setTimeout(function(){t.css({transform:"translate3d(0,0,0)",transition:"transform .2s"}),l.css({transform:"translate3d(0,0,0)",transition:"transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"})},20)},200)}}}(jQuery),function(t){Materialize.fadeInImage=function(e){var i;if("string"==typeof e)i=t(e);else{if("object"!=typeof e)return;i=e}i.css({opacity:0}),t(i).velocity({opacity:1},{duration:650,queue:!1,easing:"easeOutSine"}),t(i).velocity({opacity:1},{duration:1300,queue:!1,easing:"swing",step:function(e,i){i.start=100;var n=e/100,o=150-(100-e)/1.75;o<100&&(o=100),e>=0&&t(this).css({"-webkit-filter":"grayscale("+n+")brightness("+o+"%)",filter:"grayscale("+n+")brightness("+o+"%)"})}})},Materialize.showStaggeredList=function(e){var i;if("string"==typeof e)i=t(e);else{if("object"!=typeof e)return;i=e}var n=0;i.find("li").velocity({translateX:"-100px"},{duration:0}),i.find("li").each(function(){t(this).velocity({opacity:"1",translateX:"0"},{duration:800,delay:n,easing:[60,10]}),n+=120})},t(document).ready(function(){var e=!1,i=!1;t(".dismissable").each(function(){t(this).hammer({prevent_default:!1}).on("pan",function(n){if("touch"===n.gesture.pointerType){var o=t(this),a=n.gesture.direction,r=n.gesture.deltaX,s=n.gesture.velocityX;o.velocity({translateX:r},{duration:50,queue:!1,easing:"easeOutQuad"}),4===a&&(r>o.innerWidth()/2||s<-.75)&&(e=!0),2===a&&(r<-1*o.innerWidth()/2||s>.75)&&(i=!0)}}).on("panend",function(n){if(Math.abs(n.gesture.deltaX)<t(this).innerWidth()/2&&(i=!1,e=!1),"touch"===n.gesture.pointerType){var o=t(this);if(e||i){var a;a=e?o.innerWidth():-1*o.innerWidth(),o.velocity({translateX:a},{duration:100,queue:!1,easing:"easeOutQuad",complete:function(){o.css("border","none"),o.velocity({height:0,padding:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){o.remove()}})}})}else o.velocity({translateX:0},{duration:100,queue:!1,easing:"easeOutQuad"});e=!1,i=!1}})})})}(jQuery),function(t){var e=!1;Materialize.scrollFire=function(t){var i=function(){for(var e=window.pageYOffset+window.innerHeight,i=0;i<t.length;i++){var n=t[i],o=n.selector,a=n.offset,r=n.callback,s=document.querySelector(o);null!==s&&e>s.getBoundingClientRect().top+window.pageYOffset+a&&!0!==n.done&&("function"==typeof r?r.call(this,s):"string"==typeof r&&new Function(r)(s),n.done=!0)}},n=Materialize.throttle(function(){i()},t.throttle||100);e||(window.addEventListener("scroll",n),window.addEventListener("resize",n),e=!0),setTimeout(n,0)}}(),function(t){"function"==typeof define&&define.amd?define("picker",["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):this.Picker=t(jQuery)}(function(t){function e(a,s,u,d){function p(){return e._.node("div",e._.node("div",e._.node("div",e._.node("div",T.component.nodes(b.open),x.box),x.wrap),x.frame),x.holder)}function h(){k.data(s,T).addClass(x.input).attr("tabindex",-1).val(k.data("value")?T.get("select",w.format):a.value),w.editable||k.on("focus."+b.id+" click."+b.id,function(t){t.preventDefault(),T.$root.eq(0).focus()}).on("keydown."+b.id,g),o(a,{haspopup:!0,expanded:!1,readonly:!1,owns:a.id+"_root"})}function f(){T.$root.on({keydown:g,focusin:function(t){T.$root.removeClass(x.focused),t.stopPropagation()},"mousedown click":function(e){var i=e.target;i!=T.$root.children()[0]&&(e.stopPropagation(),"mousedown"!=e.type||t(i).is("input, select, textarea, button, option")||(e.preventDefault(),T.$root.eq(0).focus()))}}).on({focus:function(){k.addClass(x.target)},blur:function(){k.removeClass(x.target)}}).on("focus.toOpen",m).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var e=t(this),i=e.data(),n=e.hasClass(x.navDisabled)||e.hasClass(x.disabled),o=r();o=o&&(o.type||o.href),(n||o&&!t.contains(T.$root[0],o))&&T.$root.eq(0).focus(),!n&&i.nav?T.set("highlight",T.component.item.highlight,{nav:i.nav}):!n&&"pick"in i?T.set("select",i.pick):i.clear?T.clear().close(!0):i.close&&T.close(!0)}),o(T.$root[0],"hidden",!0)}function v(){var e;!0===w.hiddenName?(e=a.name,a.name=""):e=(e=["string"==typeof w.hiddenPrefix?w.hiddenPrefix:"","string"==typeof w.hiddenSuffix?w.hiddenSuffix:"_submit"])[0]+a.name+e[1],T._hidden=t('<input type=hidden name="'+e+'"'+(k.data("value")||a.value?' value="'+T.get("select",w.formatSubmit)+'"':"")+">")[0],k.on("change."+b.id,function(){T._hidden.value=a.value?T.get("select",w.formatSubmit):""}),w.container?t(w.container).append(T._hidden):k.after(T._hidden)}function g(t){var e=t.keyCode,i=/^(8|46)$/.test(e);if(27==e)return T.close(),!1;(32==e||i||!b.open&&T.component.key[e])&&(t.preventDefault(),t.stopPropagation(),i?T.clear().close():T.open())}function m(t){t.stopPropagation(),"focus"==t.type&&T.$root.addClass(x.focused),T.open()}if(!a)return e;var y=!1,b={id:a.id||"P"+Math.abs(~~(Math.random()*new Date))},w=u?t.extend(!0,{},u.defaults,d):d||{},x=t.extend({},e.klasses(),w.klass),k=t(a),C=function(){return this.start()},T=C.prototype={constructor:C,$node:k,start:function(){return b&&b.start?T:(b.methods={},b.start=!0,b.open=!1,b.type=a.type,a.autofocus=a==r(),a.readOnly=!w.editable,a.id=a.id||b.id,"text"!=a.type&&(a.type="text"),T.component=new u(T,w),T.$root=t(e._.node("div",p(),x.picker,'id="'+a.id+'_root" tabindex="0"')),f(),w.formatSubmit&&v(),h(),w.container?t(w.container).append(T.$root):k.after(T.$root),T.on({start:T.component.onStart,render:T.component.onRender,stop:T.component.onStop,open:T.component.onOpen,close:T.component.onClose,set:T.component.onSet}).on({start:w.onStart,render:w.onRender,stop:w.onStop,open:w.onOpen,close:w.onClose,set:w.onSet}),y=i(T.$root.children()[0]),a.autofocus&&T.open(),T.trigger("start").trigger("render"))},render:function(t){return t?T.$root.html(p()):T.$root.find("."+x.box).html(T.component.nodes(b.open)),T.trigger("render")},stop:function(){return b.start?(T.close(),T._hidden&&T._hidden.parentNode.removeChild(T._hidden),T.$root.remove(),k.removeClass(x.input).removeData(s),setTimeout(function(){k.off("."+b.id)},0),a.type=b.type,a.readOnly=!1,T.trigger("stop"),b.methods={},b.start=!1,T):T},open:function(i){return b.open?T:(k.addClass(x.active),o(a,"expanded",!0),setTimeout(function(){T.$root.addClass(x.opened),o(T.$root[0],"hidden",!1)},0),!1!==i&&(b.open=!0,y&&c.css("overflow","hidden").css("padding-right","+="+n()),T.$root.eq(0).focus(),l.on("click."+b.id+" focusin."+b.id,function(t){var e=t.target;e!=a&&e!=document&&3!=t.which&&T.close(e===T.$root.children()[0])}).on("keydown."+b.id,function(i){var n=i.keyCode,o=T.component.key[n],a=i.target;27==n?T.close(!0):a!=T.$root[0]||!o&&13!=n?t.contains(T.$root[0],a)&&13==n&&(i.preventDefault(),a.click()):(i.preventDefault(),o?e._.trigger(T.component.key.go,T,[e._.trigger(o)]):T.$root.find("."+x.highlighted).hasClass(x.disabled)||T.set("select",T.component.item.highlight).close())})),T.trigger("open"))},close:function(t){return t&&(T.$root.off("focus.toOpen").eq(0).focus(),setTimeout(function(){T.$root.on("focus.toOpen",m)},0)),k.removeClass(x.active),o(a,"expanded",!1),setTimeout(function(){T.$root.removeClass(x.opened+" "+x.focused),o(T.$root[0],"hidden",!0)},0),b.open?(b.open=!1,y&&c.css("overflow","").css("padding-right","-="+n()),l.off("."+b.id),T.trigger("close")):T},clear:function(t){return T.set("clear",null,t)},set:function(e,i,n){var o,a,r=t.isPlainObject(e),s=r?e:{};if(n=r&&t.isPlainObject(i)?i:n||{},e){r||(s[e]=i);for(o in s)a=s[o],o in T.component.item&&(void 0===a&&(a=null),T.component.set(o,a,n)),"select"!=o&&"clear"!=o||k.val("clear"==o?"":T.get(o,w.format)).trigger("change");T.render()}return n.muted?T:T.trigger("set",s)},get:function(t,i){if(t=t||"value",null!=b[t])return b[t];if("valueSubmit"==t){if(T._hidden)return T._hidden.value;t="value"}if("value"==t)return a.value;if(t in T.component.item){if("string"==typeof i){var n=T.component.get(t);return n?e._.trigger(T.component.formats.toString,T.component,[i,n]):""}return T.component.get(t)}},on:function(e,i,n){var o,a,r=t.isPlainObject(e),s=r?e:{};if(e){r||(s[e]=i);for(o in s)a=s[o],n&&(o="_"+o),b.methods[o]=b.methods[o]||[],b.methods[o].push(a)}return T},off:function(){var t,e,i=arguments;for(t=0,namesCount=i.length;t<namesCount;t+=1)(e=i[t])in b.methods&&delete b.methods[e];return T},trigger:function(t,i){var n=function(t){var n=b.methods[t];n&&n.map(function(t){e._.trigger(t,T,[i])})};return n("_"+t),n(t),T}};return new C}function i(t){var e;return t.currentStyle?e=t.currentStyle.position:window.getComputedStyle&&(e=getComputedStyle(t).position),"fixed"==e}function n(){if(c.height()<=s.height())return 0;var e=t('<div style="visibility:hidden;width:100px" />').appendTo("body"),i=e[0].offsetWidth;e.css("overflow","scroll");var n=t('<div style="width:100%" />').appendTo(e)[0].offsetWidth;return e.remove(),i-n}function o(e,i,n){if(t.isPlainObject(i))for(var o in i)a(e,o,i[o]);else a(e,i,n)}function a(t,e,i){t.setAttribute(("role"==e?"":"aria-")+e,i)}function r(){try{return document.activeElement}catch(t){}}var s=t(window),l=t(document),c=t(document.documentElement);return e.klasses=function(t){return t=t||"picker",{picker:t,opened:t+"--opened",focused:t+"--focused",input:t+"__input",active:t+"__input--active",target:t+"__input--target",holder:t+"__holder",frame:t+"__frame",wrap:t+"__wrap",box:t+"__box"}},e._={group:function(t){for(var i,n="",o=e._.trigger(t.min,t);o<=e._.trigger(t.max,t,[o]);o+=t.i)i=e._.trigger(t.item,t,[o]),n+=e._.node(t.node,i[0],i[1],i[2]);return n},node:function(e,i,n,o){return i?(i=t.isArray(i)?i.join(""):i,n=n?' class="'+n+'"':"",o=o?" "+o:"","<"+e+n+o+">"+i+"</"+e+">"):""},lead:function(t){return(t<10?"0":"")+t},trigger:function(t,e,i){return"function"==typeof t?t.apply(e,i||[]):t},digits:function(t){return/\d/.test(t[1])?2:1},isDate:function(t){return{}.toString.call(t).indexOf("Date")>-1&&this.isInteger(t.getDate())},isInteger:function(t){return{}.toString.call(t).indexOf("Number")>-1&&t%1==0},ariaAttr:function(e,i){t.isPlainObject(e)||(e={attribute:i}),i="";for(var n in e){var o=("role"==n?"":"aria-")+n;i+=null==e[n]?"":o+'="'+e[n]+'"'}return i}},e.extend=function(i,n){t.fn[i]=function(o,a){var r=this.data(i);return"picker"==o?r:r&&"string"==typeof o?e._.trigger(r[o],r,[a]):this.each(function(){t(this).data(i)||new e(this,i,n,o)})},t.fn[i].defaults=n.defaults},e}),function(t){"function"==typeof define&&define.amd?define(["picker","jquery"],t):"object"==typeof exports?module.exports=t(require("./picker.js"),require("jquery")):t(Picker,jQuery)}(function(t,e){function i(t,e){var i=this,n=t.$node[0],o=n.value,a=t.$node.data("value"),r=a||o,s=a?e.formatSubmit:e.format,l=function(){return n.currentStyle?"rtl"==n.currentStyle.direction:"rtl"==getComputedStyle(t.$root[0]).direction};i.settings=e,i.$node=t.$node,i.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},i.item={},i.item.clear=null,i.item.disable=(e.disable||[]).slice(0),i.item.enable=-function(t){return!0===t[0]?t.shift():-1}(i.item.disable),i.set("min",e.min).set("max",e.max).set("now"),r?i.set("select",r,{format:s}):i.set("select",null).set("highlight",i.item.now),i.key={40:7,38:-7,39:function(){return l()?-1:1},37:function(){return l()?1:-1},go:function(t){var e=i.item.highlight,n=new Date(e.year,e.month,e.date+t);i.set("highlight",n,{interval:t}),this.render()}},t.on("render",function(){t.$root.find("."+e.klass.selectMonth).on("change",function(){var i=this.value;i&&(t.set("highlight",[t.get("view").year,i,t.get("highlight").date]),t.$root.find("."+e.klass.selectMonth).trigger("focus"))}),t.$root.find("."+e.klass.selectYear).on("change",function(){var i=this.value;i&&(t.set("highlight",[i,t.get("view").month,t.get("highlight").date]),t.$root.find("."+e.klass.selectYear).trigger("focus"))})},1).on("open",function(){var n="";i.disabled(i.get("now"))&&(n=":not(."+e.klass.buttonToday+")"),t.$root.find("button"+n+", select").attr("disabled",!1)},1).on("close",function(){t.$root.find("button, select").attr("disabled",!0)},1)}var n=t._;i.prototype.set=function(t,e,i){var n=this,o=n.item;return null===e?("clear"==t&&(t="select"),o[t]=e,n):(o["enable"==t?"disable":"flip"==t?"enable":t]=n.queue[t].split(" ").map(function(o){return e=n[o](t,e,i)}).pop(),"select"==t?n.set("highlight",o.select,i):"highlight"==t?n.set("view",o.highlight,i):t.match(/^(flip|min|max|disable|enable)$/)&&(o.select&&n.disabled(o.select)&&n.set("select",o.select,i),o.highlight&&n.disabled(o.highlight)&&n.set("highlight",o.highlight,i)),n)},i.prototype.get=function(t){return this.item[t]},i.prototype.create=function(t,i,o){var a,r=this;return i=void 0===i?t:i,i==-1/0||i==1/0?a=i:e.isPlainObject(i)&&n.isInteger(i.pick)?i=i.obj:e.isArray(i)?(i=new Date(i[0],i[1],i[2]),i=n.isDate(i)?i:r.create().obj):i=n.isInteger(i)||n.isDate(i)?r.normalize(new Date(i),o):r.now(t,i,o),{year:a||i.getFullYear(),month:a||i.getMonth(),date:a||i.getDate(),day:a||i.getDay(),obj:a||i,pick:a||i.getTime()}},i.prototype.createRange=function(t,i){var o=this,a=function(t){return!0===t||e.isArray(t)||n.isDate(t)?o.create(t):t};return n.isInteger(t)||(t=a(t)),n.isInteger(i)||(i=a(i)),n.isInteger(t)&&e.isPlainObject(i)?t=[i.year,i.month,i.date+t]:n.isInteger(i)&&e.isPlainObject(t)&&(i=[t.year,t.month,t.date+i]),{from:a(t),to:a(i)}},i.prototype.withinRange=function(t,e){return t=this.createRange(t.from,t.to),e.pick>=t.from.pick&&e.pick<=t.to.pick},i.prototype.overlapRanges=function(t,e){var i=this;return t=i.createRange(t.from,t.to),e=i.createRange(e.from,e.to),i.withinRange(t,e.from)||i.withinRange(t,e.to)||i.withinRange(e,t.from)||i.withinRange(e,t.to)},i.prototype.now=function(t,e,i){return e=new Date,i&&i.rel&&e.setDate(e.getDate()+i.rel),this.normalize(e,i)},i.prototype.navigate=function(t,i,n){var o,a,r,s,l=e.isArray(i),c=e.isPlainObject(i),u=this.item.view;if(l||c){for(c?(a=i.year,r=i.month,s=i.date):(a=+i[0],r=+i[1],s=+i[2]),n&&n.nav&&u&&u.month!==r&&(a=u.year,r=u.month),a=(o=new Date(a,r+(n&&n.nav?n.nav:0),1)).getFullYear(),r=o.getMonth();new Date(a,r,s).getMonth()!==r;)s-=1;i=[a,r,s]}return i},i.prototype.normalize=function(t){return t.setHours(0,0,0,0),t},i.prototype.measure=function(t,e){var i=this;return e?"string"==typeof e?e=i.parse(t,e):n.isInteger(e)&&(e=i.now(t,e,{rel:e})):e="min"==t?-1/0:1/0,e},i.prototype.viewset=function(t,e){return this.create([e.year,e.month,1])},i.prototype.validate=function(t,i,o){var a,r,s,l,c=this,u=i,d=o&&o.interval?o.interval:1,p=-1===c.item.enable,h=c.item.min,f=c.item.max,v=p&&c.item.disable.filter(function(t){if(e.isArray(t)){var o=c.create(t).pick;o<i.pick?a=!0:o>i.pick&&(r=!0)}return n.isInteger(t)}).length;if((!o||!o.nav)&&(!p&&c.disabled(i)||p&&c.disabled(i)&&(v||a||r)||!p&&(i.pick<=h.pick||i.pick>=f.pick)))for(p&&!v&&(!r&&d>0||!a&&d<0)&&(d*=-1);c.disabled(i)&&(Math.abs(d)>1&&(i.month<u.month||i.month>u.month)&&(i=u,d=d>0?1:-1),i.pick<=h.pick?(s=!0,d=1,i=c.create([h.year,h.month,h.date+(i.pick===h.pick?0:-1)])):i.pick>=f.pick&&(l=!0,d=-1,i=c.create([f.year,f.month,f.date+(i.pick===f.pick?0:1)])),!s||!l);)i=c.create([i.year,i.month,i.date+d]);return i},i.prototype.disabled=function(t){var i=this,o=i.item.disable.filter(function(o){return n.isInteger(o)?t.day===(i.settings.firstDay?o:o-1)%7:e.isArray(o)||n.isDate(o)?t.pick===i.create(o).pick:e.isPlainObject(o)?i.withinRange(o,t):void 0});return o=o.length&&!o.filter(function(t){return e.isArray(t)&&"inverted"==t[3]||e.isPlainObject(t)&&t.inverted}).length,-1===i.item.enable?!o:o||t.pick<i.item.min.pick||t.pick>i.item.max.pick},i.prototype.parse=function(t,e,i){var o=this,a={};return e&&"string"==typeof e?(i&&i.format||((i=i||{}).format=o.settings.format),o.formats.toArray(i.format).map(function(t){var i=o.formats[t],r=i?n.trigger(i,o,[e,a]):t.replace(/^!/,"").length;i&&(a[t]=e.substr(0,r)),e=e.substr(r)}),[a.yyyy||a.yy,+(a.mm||a.m)-1,a.dd||a.d]):e},i.prototype.formats=function(){function t(t,e,i){var n=t.match(/\w+/)[0];return i.mm||i.m||(i.m=e.indexOf(n)+1),n.length}function e(t){return t.match(/\w+/)[0].length}return{d:function(t,e){return t?n.digits(t):e.date},dd:function(t,e){return t?2:n.lead(e.date)},ddd:function(t,i){return t?e(t):this.settings.weekdaysShort[i.day]},dddd:function(t,i){return t?e(t):this.settings.weekdaysFull[i.day]},m:function(t,e){return t?n.digits(t):e.month+1},mm:function(t,e){return t?2:n.lead(e.month+1)},mmm:function(e,i){var n=this.settings.monthsShort;return e?t(e,n,i):n[i.month]},mmmm:function(e,i){var n=this.settings.monthsFull;return e?t(e,n,i):n[i.month]},yy:function(t,e){return t?2:(""+e.year).slice(2)},yyyy:function(t,e){return t?4:e.year},toArray:function(t){return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(t,e){var i=this;return i.formats.toArray(t).map(function(t){return n.trigger(i.formats[t],i,[0,e])||t.replace(/^!/,"")}).join("")}}}(),i.prototype.isDateExact=function(t,i){var o=this;return n.isInteger(t)&&n.isInteger(i)||"boolean"==typeof t&&"boolean"==typeof i?t===i:(n.isDate(t)||e.isArray(t))&&(n.isDate(i)||e.isArray(i))?o.create(t).pick===o.create(i).pick:!(!e.isPlainObject(t)||!e.isPlainObject(i))&&(o.isDateExact(t.from,i.from)&&o.isDateExact(t.to,i.to))},i.prototype.isDateOverlap=function(t,i){var o=this,a=o.settings.firstDay?1:0;return n.isInteger(t)&&(n.isDate(i)||e.isArray(i))?(t=t%7+a)===o.create(i).day+1:n.isInteger(i)&&(n.isDate(t)||e.isArray(t))?(i=i%7+a)===o.create(t).day+1:!(!e.isPlainObject(t)||!e.isPlainObject(i))&&o.overlapRanges(t,i)},i.prototype.flipEnable=function(t){var e=this.item;e.enable=t||(-1==e.enable?1:-1)},i.prototype.deactivate=function(t,i){var o=this,a=o.item.disable.slice(0);return"flip"==i?o.flipEnable():!1===i?(o.flipEnable(1),a=[]):!0===i?(o.flipEnable(-1),a=[]):i.map(function(t){for(var i,r=0;r<a.length;r+=1)if(o.isDateExact(t,a[r])){i=!0;break}i||(n.isInteger(t)||n.isDate(t)||e.isArray(t)||e.isPlainObject(t)&&t.from&&t.to)&&a.push(t)}),a},i.prototype.activate=function(t,i){var o=this,a=o.item.disable,r=a.length;return"flip"==i?o.flipEnable():!0===i?(o.flipEnable(1),a=[]):!1===i?(o.flipEnable(-1),a=[]):i.map(function(t){var i,s,l,c;for(l=0;l<r;l+=1){if(s=a[l],o.isDateExact(s,t)){i=a[l]=null,c=!0;break}if(o.isDateOverlap(s,t)){e.isPlainObject(t)?(t.inverted=!0,i=t):e.isArray(t)?(i=t)[3]||i.push("inverted"):n.isDate(t)&&(i=[t.getFullYear(),t.getMonth(),t.getDate(),"inverted"]);break}}if(i)for(l=0;l<r;l+=1)if(o.isDateExact(a[l],t)){a[l]=null;break}if(c)for(l=0;l<r;l+=1)if(o.isDateOverlap(a[l],t)){a[l]=null;break}i&&a.push(i)}),a.filter(function(t){return null!=t})},i.prototype.nodes=function(t){var e=this,i=e.settings,o=e.item,a=o.now,r=o.select,s=o.highlight,l=o.view,c=o.disable,u=o.min,d=o.max,p=function(t,e){return i.firstDay&&(t.push(t.shift()),e.push(e.shift())),n.node("thead",n.node("tr",n.group({min:0,max:6,i:1,node:"th",item:function(n){return[t[n],i.klass.weekdays,'scope=col title="'+e[n]+'"']}})))}((i.showWeekdaysFull?i.weekdaysFull:i.weekdaysLetter).slice(0),i.weekdaysFull.slice(0)),h=function(t){return n.node("div"," ",i.klass["nav"+(t?"Next":"Prev")]+(t&&l.year>=d.year&&l.month>=d.month||!t&&l.year<=u.year&&l.month<=u.month?" "+i.klass.navDisabled:""),"data-nav="+(t||-1)+" "+n.ariaAttr({role:"button",controls:e.$node[0].id+"_table"})+' title="'+(t?i.labelMonthNext:i.labelMonthPrev)+'"')},f=function(o){var a=i.showMonthsShort?i.monthsShort:i.monthsFull;return"short_months"==o&&(a=i.monthsShort),i.selectMonths&&void 0==o?n.node("select",n.group({min:0,max:11,i:1,node:"option",item:function(t){return[a[t],0,"value="+t+(l.month==t?" selected":"")+(l.year==u.year&&t<u.month||l.year==d.year&&t>d.month?" disabled":"")]}}),i.klass.selectMonth+" browser-default",(t?"":"disabled")+" "+n.ariaAttr({controls:e.$node[0].id+"_table"})+' title="'+i.labelMonthSelect+'"'):"short_months"==o?null!=r?a[r.month]:a[l.month]:n.node("div",a[l.month],i.klass.month)},v=function(o){var a=l.year,r=!0===i.selectYears?5:~~(i.selectYears/2);if(r){var s=u.year,c=d.year,p=a-r,h=a+r;if(s>p&&(h+=s-p,p=s),c<h){var f=p-s,v=h-c;p-=f>v?v:f,h=c}if(i.selectYears&&void 0==o)return n.node("select",n.group({min:p,max:h,i:1,node:"option",item:function(t){return[t,0,"value="+t+(a==t?" selected":"")]}}),i.klass.selectYear+" browser-default",(t?"":"disabled")+" "+n.ariaAttr({controls:e.$node[0].id+"_table"})+' title="'+i.labelYearSelect+'"')}return"raw"==o?n.node("div",a):n.node("div",a,i.klass.year)};return createDayLabel=function(){return null!=r?r.date:a.date},createWeekdayLabel=function(){var t;return t=null!=r?r.day:a.day,i.weekdaysShort[t]},n.node("div",n.node("div",v("raw"),i.klass.year_display)+n.node("span",createWeekdayLabel()+", ","picker__weekday-display")+n.node("span",f("short_months")+" ",i.klass.month_display)+n.node("span",createDayLabel(),i.klass.day_display),i.klass.date_display)+n.node("div",n.node("div",n.node("div",(i.selectYears,f()+v()+h()+h(1)),i.klass.header)+n.node("table",p+n.node("tbody",n.group({min:0,max:5,i:1,node:"tr",item:function(t){var o=i.firstDay&&0===e.create([l.year,l.month,1]).day?-7:0;return[n.group({min:7*t-l.day+o+1,max:function(){return this.min+7-1},i:1,node:"td",item:function(t){t=e.create([l.year,l.month,t+(i.firstDay?1:0)]);var o=r&&r.pick==t.pick,p=s&&s.pick==t.pick,h=c&&e.disabled(t)||t.pick<u.pick||t.pick>d.pick,f=n.trigger(e.formats.toString,e,[i.format,t]);return[n.node("div",t.date,function(e){return e.push(l.month==t.month?i.klass.infocus:i.klass.outfocus),a.pick==t.pick&&e.push(i.klass.now),o&&e.push(i.klass.selected),p&&e.push(i.klass.highlighted),h&&e.push(i.klass.disabled),e.join(" ")}([i.klass.day]),"data-pick="+t.pick+" "+n.ariaAttr({role:"gridcell",label:f,selected:!(!o||e.$node.val()!==f)||null,activedescendant:!!p||null,disabled:!!h||null})),"",n.ariaAttr({role:"presentation"})]}})]}})),i.klass.table,'id="'+e.$node[0].id+'_table" '+n.ariaAttr({role:"grid",controls:e.$node[0].id,readonly:!0})),i.klass.calendar_container)+n.node("div",n.node("button",i.today,"btn-flat picker__today waves-effect","type=button data-pick="+a.pick+(t&&!e.disabled(a)?"":" disabled")+" "+n.ariaAttr({controls:e.$node[0].id}))+n.node("button",i.clear,"btn-flat picker__clear waves-effect","type=button data-clear=1"+(t?"":" disabled")+" "+n.ariaAttr({controls:e.$node[0].id}))+n.node("button",i.close,"btn-flat picker__close waves-effect","type=button data-close=true "+(t?"":" disabled")+" "+n.ariaAttr({controls:e.$node[0].id})),i.klass.footer),"picker__container__wrapper")},i.defaults=function(t){return{labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysLetter:["S","M","T","W","T","F","S"],today:"Today",clear:"Clear",close:"Ok",format:"d mmmm, yyyy",klass:{table:t+"table",header:t+"header",date_display:t+"date-display",day_display:t+"day-display",month_display:t+"month-display",year_display:t+"year-display",calendar_container:t+"calendar-container",navPrev:t+"nav--prev",navNext:t+"nav--next",navDisabled:t+"nav--disabled",month:t+"month",year:t+"year",selectMonth:t+"select--month",selectYear:t+"select--year",weekdays:t+"weekday",day:t+"day",disabled:t+"day--disabled",selected:t+"day--selected",highlighted:t+"day--highlighted",now:t+"day--today",infocus:t+"day--infocus",outfocus:t+"day--outfocus",footer:t+"footer",buttonClear:t+"button--clear",buttonToday:t+"button--today",buttonClose:t+"button--close"}}}(t.klasses().picker+"__"),t.extend("pickadate",i)}),function(){function t(t){return document.createElementNS(l,t)}function e(t){return(t<10?"0":"")+t}function i(t){var e=++g+"";return t?t+e:e}function n(n,r){function l(t,e){var i=d.offset(),n=/^touch/.test(t.type),o=i.left+m,a=i.top+m,l=(n?t.originalEvent.touches[0]:t).pageX-o,c=(n?t.originalEvent.touches[0]:t).pageY-a,u=Math.sqrt(l*l+c*c),p=!1;if(!e||!(u<y-w||u>y+w)){t.preventDefault();var v=setTimeout(function(){E.popover.addClass("clockpicker-moving")},200);E.setHand(l,c,!e,!0),s.off(h).on(h,function(t){t.preventDefault();var e=/^touch/.test(t.type),i=(e?t.originalEvent.touches[0]:t).pageX-o,n=(e?t.originalEvent.touches[0]:t).pageY-a;(p||i!==l||n!==c)&&(p=!0,E.setHand(i,n,!1,!0))}),s.off(f).on(f,function(t){s.off(f),t.preventDefault();var i=/^touch/.test(t.type),n=(i?t.originalEvent.changedTouches[0]:t).pageX-o,u=(i?t.originalEvent.changedTouches[0]:t).pageY-a;(e||p)&&n===l&&u===c&&E.setHand(n,u),"hours"===E.currentView?E.toggleView("minutes",k/2):r.autoclose&&(E.minutesView.addClass("clockpicker-dial-out"),setTimeout(function(){E.done()},k/2)),d.prepend(z),clearTimeout(v),E.popover.removeClass("clockpicker-moving"),s.off(h)})}}var u=a(C),d=u.find(".clockpicker-plate"),v=u.find(".picker__holder"),g=u.find(".clockpicker-hours"),T=u.find(".clockpicker-minutes"),S=u.find(".clockpicker-am-pm-block"),P="INPUT"===n.prop("tagName"),A=P?n:n.find("input"),O=a("label[for="+A.attr("id")+"]"),E=this;this.id=i("cp"),this.element=n,this.holder=v,this.options=r,this.isAppended=!1,this.isShown=!1,this.currentView="hours",this.isInput=P,this.input=A,this.label=O,this.popover=u,this.plate=d,this.hoursView=g,this.minutesView=T,this.amPmBlock=S,this.spanHours=u.find(".clockpicker-span-hours"),this.spanMinutes=u.find(".clockpicker-span-minutes"),this.spanAmPm=u.find(".clockpicker-span-am-pm"),this.footer=u.find(".picker__footer"),this.amOrPm="PM",r.twelvehour&&(r.ampmclickable?(this.spanAmPm.empty(),a('<div id="click-am">AM</div>').on("click",function(){E.spanAmPm.children("#click-am").addClass("text-primary"),E.spanAmPm.children("#click-pm").removeClass("text-primary"),E.amOrPm="AM"}).appendTo(this.spanAmPm),a('<div id="click-pm">PM</div>').on("click",function(){E.spanAmPm.children("#click-pm").addClass("text-primary"),E.spanAmPm.children("#click-am").removeClass("text-primary"),E.amOrPm="PM"}).appendTo(this.spanAmPm)):(this.spanAmPm.empty(),a('<div id="click-am">AM</div>').appendTo(this.spanAmPm),a('<div id="click-pm">PM</div>').appendTo(this.spanAmPm))),a('<button type="button" class="btn-flat picker__clear" tabindex="'+(r.twelvehour?"3":"1")+'">'+r.cleartext+"</button>").click(a.proxy(this.clear,this)).appendTo(this.footer),a('<button type="button" class="btn-flat picker__close" tabindex="'+(r.twelvehour?"3":"1")+'">'+r.canceltext+"</button>").click(a.proxy(this.hide,this)).appendTo(this.footer),a('<button type="button" class="btn-flat picker__close" tabindex="'+(r.twelvehour?"3":"1")+'">'+r.donetext+"</button>").click(a.proxy(this.done,this)).appendTo(this.footer),this.spanHours.click(a.proxy(this.toggleView,this,"hours")),this.spanMinutes.click(a.proxy(this.toggleView,this,"minutes")),A.on("focus.clockpicker click.clockpicker",a.proxy(this.show,this));var M,I,q,_,V=a('<div class="clockpicker-tick"></div>');if(r.twelvehour)for(M=1;M<13;M+=1)I=V.clone(),q=M/6*Math.PI,_=y,I.css({left:m+Math.sin(q)*_-w,top:m-Math.cos(q)*_-w}),I.html(0===M?"00":M),g.append(I),I.on(p,l);else for(M=0;M<24;M+=1)I=V.clone(),q=M/6*Math.PI,_=M>0&&M<13?b:y,I.css({left:m+Math.sin(q)*_-w,top:m-Math.cos(q)*_-w}),I.html(0===M?"00":M),g.append(I),I.on(p,l);for(M=0;M<60;M+=5)I=V.clone(),q=M/30*Math.PI,I.css({left:m+Math.sin(q)*y-w,top:m-Math.cos(q)*y-w}),I.html(e(M)),T.append(I),I.on(p,l);if(d.on(p,function(t){0===a(t.target).closest(".clockpicker-tick").length&&l(t,!0)}),c){var z=u.find(".clockpicker-canvas"),D=t("svg");D.setAttribute("class","clockpicker-svg"),D.setAttribute("width",x),D.setAttribute("height",x);var j=t("g");j.setAttribute("transform","translate("+m+","+m+")");var H=t("circle");H.setAttribute("class","clockpicker-canvas-bearing"),H.setAttribute("cx",0),H.setAttribute("cy",0),H.setAttribute("r",4);var L=t("line");L.setAttribute("x1",0),L.setAttribute("y1",0);var W=t("circle");W.setAttribute("class","clockpicker-canvas-bg"),W.setAttribute("r",w),j.appendChild(L),j.appendChild(W),j.appendChild(H),D.appendChild(j),z.append(D),this.hand=L,this.bg=W,this.bearing=H,this.g=j,this.canvas=z}o(this.options.init)}function o(t){t&&"function"==typeof t&&t()}var a=window.jQuery,r=a(window),s=a(document),l="http://www.w3.org/2000/svg",c="SVGAngle"in window&&function(){var t,e=document.createElement("div");return e.innerHTML="<svg/>",t=(e.firstChild&&e.firstChild.namespaceURI)==l,e.innerHTML="",t}(),u=function(){var t=document.createElement("div").style;return"transition"in t||"WebkitTransition"in t||"MozTransition"in t||"msTransition"in t||"OTransition"in t}(),d="ontouchstart"in window,p="mousedown"+(d?" touchstart":""),h="mousemove.clockpicker"+(d?" touchmove.clockpicker":""),f="mouseup.clockpicker"+(d?" touchend.clockpicker":""),v=navigator.vibrate?"vibrate":navigator.webkitVibrate?"webkitVibrate":null,g=0,m=135,y=105,b=80,w=20,x=2*m,k=u?350:1,C=['<div class="clockpicker picker">','<div class="picker__holder">','<div class="picker__frame">','<div class="picker__wrap">','<div class="picker__box">','<div class="picker__date-display">','<div class="clockpicker-display">','<div class="clockpicker-display-column">','<span class="clockpicker-span-hours text-primary"></span>',":",'<span class="clockpicker-span-minutes"></span>',"</div>",'<div class="clockpicker-display-column clockpicker-display-am-pm">','<div class="clockpicker-span-am-pm"></div>',"</div>","</div>","</div>",'<div class="picker__container__wrapper">','<div class="picker__calendar-container">','<div class="clockpicker-plate">','<div class="clockpicker-canvas"></div>','<div class="clockpicker-dial clockpicker-hours"></div>','<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>',"</div>",'<div class="clockpicker-am-pm-block">',"</div>","</div>",'<div class="picker__footer">',"</div>","</div>","</div>","</div>","</div>","</div>","</div>"].join("");n.DEFAULTS={default:"",fromnow:0,donetext:"Ok",cleartext:"Clear",canceltext:"Cancel",autoclose:!1,ampmclickable:!0,darktheme:!1,twelvehour:!0,vibrate:!0},n.prototype.toggle=function(){this[this.isShown?"hide":"show"]()},n.prototype.locate=function(){var t=this.element,e=this.popover;t.offset(),t.outerWidth(),t.outerHeight(),this.options.align;e.show()},n.prototype.show=function(t){if(!this.isShown){o(this.options.beforeShow),a(":input").each(function(){a(this).attr("tabindex",-1)});var i=this;this.input.blur(),this.popover.addClass("picker--opened"),this.input.addClass("picker__input picker__input--active"),a(document.body).css("overflow","hidden");var n=((this.input.prop("value")||this.options.default||"")+"").split(":");if(this.options.twelvehour&&void 0!==n[1]&&(n[1].indexOf("AM")>0?this.amOrPm="AM":this.amOrPm="PM",n[1]=n[1].replace("AM","").replace("PM","")),"now"===n[0]){var l=new Date(+new Date+this.options.fromnow);n=[l.getHours(),l.getMinutes()]}this.hours=+n[0]||0,this.minutes=+n[1]||0,this.spanHours.html(this.hours),this.spanMinutes.html(e(this.minutes)),this.isAppended||(this.popover.insertAfter(this.input),this.options.twelvehour&&("PM"===this.amOrPm?(this.spanAmPm.children("#click-pm").addClass("text-primary"),this.spanAmPm.children("#click-am").removeClass("text-primary")):(this.spanAmPm.children("#click-am").addClass("text-primary"),this.spanAmPm.children("#click-pm").removeClass("text-primary"))),r.on("resize.clockpicker"+this.id,function(){i.isShown&&i.locate()}),this.isAppended=!0),this.toggleView("hours"),this.locate(),this.isShown=!0,s.on("click.clockpicker."+this.id+" focusin.clockpicker."+this.id,function(t){var e=a(t.target);0===e.closest(i.popover.find(".picker__wrap")).length&&0===e.closest(i.input).length&&i.hide()}),s.on("keyup.clockpicker."+this.id,function(t){27===t.keyCode&&i.hide()}),o(this.options.afterShow)}},n.prototype.hide=function(){o(this.options.beforeHide),this.input.removeClass("picker__input picker__input--active"),this.popover.removeClass("picker--opened"),a(document.body).css("overflow","visible"),this.isShown=!1,a(":input").each(function(t){a(this).attr("tabindex",t+1)}),s.off("click.clockpicker."+this.id+" focusin.clockpicker."+this.id),s.off("keyup.clockpicker."+this.id),this.popover.hide(),o(this.options.afterHide)},n.prototype.toggleView=function(t,e){var i=!1;"minutes"===t&&"visible"===a(this.hoursView).css("visibility")&&(o(this.options.beforeHourSelect),i=!0);var n="hours"===t,r=n?this.hoursView:this.minutesView,s=n?this.minutesView:this.hoursView;this.currentView=t,this.spanHours.toggleClass("text-primary",n),this.spanMinutes.toggleClass("text-primary",!n),s.addClass("clockpicker-dial-out"),r.css("visibility","visible").removeClass("clockpicker-dial-out"),this.resetClock(e),clearTimeout(this.toggleViewTimer),this.toggleViewTimer=setTimeout(function(){s.css("visibility","hidden")},k),i&&o(this.options.afterHourSelect)},n.prototype.resetClock=function(t){var e=this.currentView,i=this[e],n="hours"===e,o=i*(Math.PI/(n?6:30)),a=n&&i>0&&i<13?b:y,r=Math.sin(o)*a,s=-Math.cos(o)*a,l=this;c&&t?(l.canvas.addClass("clockpicker-canvas-out"),setTimeout(function(){l.canvas.removeClass("clockpicker-canvas-out"),l.setHand(r,s)},t)):this.setHand(r,s)},n.prototype.setHand=function(t,i,n,o){var r,s=Math.atan2(t,-i),l="hours"===this.currentView,u=Math.PI/(l||n?6:30),d=Math.sqrt(t*t+i*i),p=this.options,h=l&&d<(y+b)/2,f=h?b:y;if(p.twelvehour&&(f=y),s<0&&(s=2*Math.PI+s),r=Math.round(s/u),s=r*u,p.twelvehour?l?0===r&&(r=12):(n&&(r*=5),60===r&&(r=0)):l?(12===r&&(r=0),r=h?0===r?12:r:0===r?0:r+12):(n&&(r*=5),60===r&&(r=0)),this[this.currentView]!==r&&v&&this.options.vibrate&&(this.vibrateTimer||(navigator[v](10),this.vibrateTimer=setTimeout(a.proxy(function(){this.vibrateTimer=null},this),100))),this[this.currentView]=r,l?this.spanHours.html(r):this.spanMinutes.html(e(r)),c){var g=Math.sin(s)*(f-w),m=-Math.cos(s)*(f-w),x=Math.sin(s)*f,k=-Math.cos(s)*f;this.hand.setAttribute("x2",g),this.hand.setAttribute("y2",m),this.bg.setAttribute("cx",x),this.bg.setAttribute("cy",k)}else this[l?"hoursView":"minutesView"].find(".clockpicker-tick").each(function(){var t=a(this);t.toggleClass("active",r===+t.html())})},n.prototype.done=function(){o(this.options.beforeDone),this.hide(),this.label.addClass("active");var t=this.input.prop("value"),i=e(this.hours)+":"+e(this.minutes);this.options.twelvehour&&(i+=this.amOrPm),this.input.prop("value",i),i!==t&&(this.input.triggerHandler("change"),this.isInput||this.element.trigger("change")),this.options.autoclose&&this.input.trigger("blur"),o(this.options.afterDone)},n.prototype.clear=function(){this.hide(),this.label.removeClass("active");var t=this.input.prop("value");this.input.prop("value",""),""!==t&&(this.input.triggerHandler("change"),this.isInput||this.element.trigger("change")),this.options.autoclose&&this.input.trigger("blur")},n.prototype.remove=function(){this.element.removeData("clockpicker"),this.input.off("focus.clockpicker click.clockpicker"),this.isShown&&this.hide(),this.isAppended&&(r.off("resize.clockpicker"+this.id),this.popover.remove())},a.fn.pickatime=function(t){var e=Array.prototype.slice.call(arguments,1);return this.each(function(){var i=a(this),o=i.data("clockpicker");if(o)"function"==typeof o[t]&&o[t].apply(o,e);else{var r=a.extend({},n.DEFAULTS,i.data(),"object"==typeof t&&t);i.data("clockpicker",new n(i,r))}})}}(),function(t){function e(){var e=+t(this).attr("data-length"),i=+t(this).val().length,n=i<=e;t(this).parent().find('span[class="character-counter"]').html(i+"/"+e),o(n,t(this))}function i(e){var i=e.parent().find('span[class="character-counter"]');i.length||(i=t("<span/>").addClass("character-counter").css("float","right").css("font-size","12px").css("height",1),e.parent().append(i))}function n(){t(this).parent().find('span[class="character-counter"]').html("")}function o(t,e){var i=e.hasClass("invalid");t&&i?e.removeClass("invalid"):t||i||(e.removeClass("valid"),e.addClass("invalid"))}t.fn.characterCounter=function(){return this.each(function(){var o=t(this);o.parent().find('span[class="character-counter"]').length||void 0!==o.attr("data-length")&&(o.on("input",e),o.on("focus",e),o.on("blur",n),i(o))})},t(document).ready(function(){t("input, textarea").characterCounter()})}(jQuery),function(t){var e={init:function(e){var i={duration:200,dist:-100,shift:0,padding:0,fullWidth:!1,indicators:!1,noWrap:!1,onCycleTo:null};e=t.extend(i,e);var n=Materialize.objectSelectorString(t(this));return this.each(function(i){function o(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function a(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function r(t){return t>=C?t%C:t<0?r(C+t%C):t}function s(i){E=!0,W.hasClass("scrolling")||W.addClass("scrolling"),null!=H&&window.clearTimeout(H),H=window.setTimeout(function(){E=!1,W.removeClass("scrolling")},e.duration);var n,o,a,s,l,c,u,d=w;if(b="number"==typeof i?i:b,w=Math.floor((b+k/2)/k),a=b-w*k,s=a<0?1:-1,l=-s*a*2/k,o=C>>1,e.fullWidth?u="translateX(0)":(u="translateX("+(W[0].clientWidth-g)/2+"px) ",u+="translateY("+(W[0].clientHeight-m)/2+"px)"),N){var p=w%C,h=j.find(".indicator-item.active");h.index()!==p&&(h.removeClass("active"),j.find(".indicator-item").eq(p).addClass("active"))}for((!e.noWrap||w>=0&&w<C)&&(c=v[r(w)],t(c).hasClass("active")||(W.find(".carousel-item").removeClass("active"),t(c).addClass("active")),c.style[M]=u+" translateX("+-a/2+"px) translateX("+s*e.shift*l*n+"px) translateZ("+e.dist*l+"px)",c.style.zIndex=0,e.fullWidth?tweenedOpacity=1:tweenedOpacity=1-.2*l,c.style.opacity=tweenedOpacity,c.style.display="block"),n=1;n<=o;++n)e.fullWidth?(zTranslation=e.dist,tweenedOpacity=n===o&&a<0?1-l:1):(zTranslation=e.dist*(2*n+l*s),tweenedOpacity=1-.2*(2*n+l*s)),(!e.noWrap||w+n<C)&&((c=v[r(w+n)]).style[M]=u+" translateX("+(e.shift+(k*n-a)/2)+"px) translateZ("+zTranslation+"px)",c.style.zIndex=-n,c.style.opacity=tweenedOpacity,c.style.display="block"),e.fullWidth?(zTranslation=e.dist,tweenedOpacity=n===o&&a>0?1-l:1):(zTranslation=e.dist*(2*n-l*s),tweenedOpacity=1-.2*(2*n-l*s)),(!e.noWrap||w-n>=0)&&((c=v[r(w-n)]).style[M]=u+" translateX("+(-e.shift+(-k*n-a)/2)+"px) translateZ("+zTranslation+"px)",c.style.zIndex=-n,c.style.opacity=tweenedOpacity,c.style.display="block");if((!e.noWrap||w>=0&&w<C)&&((c=v[r(w)]).style[M]=u+" translateX("+-a/2+"px) translateX("+s*e.shift*l+"px) translateZ("+e.dist*l+"px)",c.style.zIndex=0,e.fullWidth?tweenedOpacity=1:tweenedOpacity=1-.2*l,c.style.opacity=tweenedOpacity,c.style.display="block"),d!==w&&"function"==typeof e.onCycleTo){var f=W.find(".carousel-item").eq(r(w));e.onCycleTo.call(this,f,V)}"function"==typeof L&&(L.call(this,f,V),L=null)}function l(){var t,e,i;e=(t=Date.now())-q,q=t,i=b-I,I=b,O=.8*(1e3*i/(1+e))+.2*O}function c(){var t,i;P&&(t=Date.now()-q,(i=P*Math.exp(-t/e.duration))>2||i<-2?(s(A-i),requestAnimationFrame(c)):s(A))}function u(i){if(V)return i.preventDefault(),i.stopPropagation(),!1;if(!e.fullWidth){var n=t(i.target).closest(".carousel-item").index();0!==r(w)-n&&(i.preventDefault(),i.stopPropagation()),d(n)}}function d(t){var i=w%C-t;e.noWrap||(i<0?Math.abs(i+C)<Math.abs(i)&&(i+=C):i>0&&Math.abs(i-C)<i&&(i-=C)),i<0?W.trigger("carouselNext",[Math.abs(i)]):i>0&&W.trigger("carouselPrev",[i])}function p(t){"mousedown"===t.type&&t.preventDefault(),x=!0,V=!1,z=!1,T=o(t),S=a(t),O=P=0,I=b,q=Date.now(),clearInterval(_),_=setInterval(l,100)}function h(t){var e,i;if(x)if(e=o(t),y=a(t),i=T-e,Math.abs(S-y)<30&&!z)(i>2||i<-2)&&(V=!0,T=e,s(b+i));else{if(V)return t.preventDefault(),t.stopPropagation(),!1;z=!0}if(V)return t.preventDefault(),t.stopPropagation(),!1}function f(t){if(x)return x=!1,clearInterval(_),A=b,(O>10||O<-10)&&(A=b+(P=.9*O)),A=Math.round(A/k)*k,e.noWrap&&(A>=k*(C-1)?A=k*(C-1):A<0&&(A=0)),P=A-b,q=Date.now(),requestAnimationFrame(c),V&&(t.preventDefault(),t.stopPropagation()),!1}var v,g,m,b,w,x,k,C,T,S,P,A,O,E,M,I,q,_,V,z,D=n+i,j=t('<ul class="indicators"></ul>'),H=null,L=null,W=t(this),N=W.attr("data-indicators")||e.indicators;if(e.fullWidth&&(e.dist=0,function(){var e=W.find(".carousel-item img").first();if(e.length)e.prop("complete")?W.css("height",e.height()):e.on("load",function(){W.css("height",t(this).height())});else{var i=W.find(".carousel-item").first().height();W.css("height",i)}}(),N&&W.find(".carousel-fixed-item").addClass("with-indicators")),W.hasClass("initialized"))return t(window).trigger("resize"),t(this).trigger("carouselNext",[1e-6]),!0;W.addClass("initialized"),x=!1,b=A=0,v=[],g=W.find(".carousel-item").first().innerWidth(),m=W.find(".carousel-item").first().innerHeight(),k=2*g+e.padding,W.find(".carousel-item").each(function(e){if(v.push(t(this)[0]),N){var i=t('<li class="indicator-item"></li>');0===e&&i.addClass("active"),i.click(function(e){e.stopPropagation(),d(t(this).index())}),j.append(i)}}),N&&W.append(j),C=v.length,M="transform",["webkit","Moz","O","ms"].every(function(t){var e=t+"Transform";return void 0===document.body.style[e]||(M=e,!1)}),t(window).off("resize.carousel-"+D).on("resize.carousel-"+D,function(){e.fullWidth?(g=W.find(".carousel-item").first().innerWidth(),m=W.find(".carousel-item").first().innerHeight(),k=2*g+e.padding,A=b=2*w*g):s()}),void 0!==window.ontouchstart&&(W[0].addEventListener("touchstart",p),W[0].addEventListener("touchmove",h),W[0].addEventListener("touchend",f)),W[0].addEventListener("mousedown",p),W[0].addEventListener("mousemove",h),W[0].addEventListener("mouseup",f),W[0].addEventListener("mouseleave",f),W[0].addEventListener("click",u),s(b),t(this).on("carouselNext",function(t,e,i){void 0===e&&(e=1),"function"==typeof i&&(L=i),A=k*Math.round(b/k)+k*e,b!==A&&(P=A-b,q=Date.now(),requestAnimationFrame(c))}),t(this).on("carouselPrev",function(t,e,i){void 0===e&&(e=1),"function"==typeof i&&(L=i),A=k*Math.round(b/k)-k*e,b!==A&&(P=A-b,q=Date.now(),requestAnimationFrame(c))}),t(this).on("carouselSet",function(t,e,i){void 0===e&&(e=0),"function"==typeof i&&(L=i),d(e)})})},next:function(e,i){t(this).trigger("carouselNext",[e,i])},prev:function(e,i){t(this).trigger("carouselPrev",[e,i])},set:function(e,i){t(this).trigger("carouselSet",[e,i])}};t.fn.carousel=function(i){return e[i]?e[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.carousel"):e.init.apply(this,arguments)}}(jQuery),function(t){var e={init:function(e){return this.each(function(){var i=t("#"+t(this).attr("data-activates")),n=(t("body"),t(this)),o=n.parent(".tap-target-wrapper"),a=o.find(".tap-target-wave"),r=o.find(".tap-target-origin"),s=n.find(".tap-target-content");o.length||(o=n.wrap(t('<div class="tap-target-wrapper"></div>')).parent()),s.length||(s=t('<div class="tap-target-content"></div>'),n.append(s)),a.length||(a=t('<div class="tap-target-wave"></div>'),r.length||((r=i.clone(!0,!0)).addClass("tap-target-origin"),r.removeAttr("id"),r.removeAttr("style"),a.append(r)),o.append(a));var l=function(){o.is(".open")&&(o.removeClass("open"),r.off("click.tapTarget"),t(document).off("click.tapTarget"),t(window).off("resize.tapTarget"))},c=function(){var e="fixed"===i.css("position");if(!e)for(var r=i.parents(),l=0;l<r.length&&!(e="fixed"==t(r[l]).css("position"));l++);var c=i.outerWidth(),u=i.outerHeight(),d=e?i.offset().top-t(document).scrollTop():i.offset().top,p=e?i.offset().left-t(document).scrollLeft():i.offset().left,h=t(window).width(),f=t(window).height(),v=h/2,g=f/2,m=p<=v,y=p>v,b=d<=g,w=d>g,x=p>=.25*h&&p<=.75*h,k=n.outerWidth(),C=n.outerHeight(),T=d+u/2-C/2,S=p+c/2-k/2,P=e?"fixed":"absolute",A=x?k:k/2+c,O=C/2,E=b?C/2:0,M=m&&!x?k/2-c:0,I=c,q=w?"bottom":"top",_=2*c,V=_,z=C/2-V/2,D=k/2-_/2,j={};j.top=b?T:"",j.right=y?h-S-k:"",j.bottom=w?f-T-C:"",j.left=m?S:"",j.position=P,o.css(j),s.css({width:A,height:O,top:E,right:0,bottom:0,left:M,padding:I,verticalAlign:q}),a.css({top:z,left:D,width:_,height:V})};"open"==e&&(c(),o.is(".open")||(o.addClass("open"),setTimeout(function(){r.off("click.tapTarget").on("click.tapTarget",function(t){l(),r.off("click.tapTarget")}),t(document).off("click.tapTarget").on("click.tapTarget",function(e){l(),t(document).off("click.tapTarget")});var e=Materialize.throttle(function(){c()},200);t(window).off("resize.tapTarget").on("resize.tapTarget",e)},0))),"close"==e&&l()})},open:function(){},close:function(){}};t.fn.tapTarget=function(i){if(e[i]||"object"==typeof i)return e.init.apply(this,arguments);t.error("Method "+i+" does not exist on jQuery.tap-target")}}(jQuery);;
/**
 * @file
 * Custom scripts for theme.
 */
(function ($) {

  // Hello World.
  Drupal.behaviors.helloWorld = {
    attach: function (context) {
      console.log('Hello World');
      $('.slider').slider();
      $(".button-collapse").sideNav();
    }
  }

})(jQuery);
;
/**
 * @file
 * Attaches behaviors for Drupal's active link marking.
 */

(function (Drupal, drupalSettings) {

  'use strict';

  /**
   * Append is-active class.
   *
   * The link is only active if its path corresponds to the current path, the
   * language of the linked path is equal to the current language, and if the
   * query parameters of the link equal those of the current request, since the
   * same request with different query parameters may yield a different page
   * (e.g. pagers, exposed View filters).
   *
   * Does not discriminate based on element type, so allows you to set the
   * is-active class on any element: a, li…
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.activeLinks = {
    attach: function (context) {
      // Start by finding all potentially active links.
      var path = drupalSettings.path;
      var queryString = JSON.stringify(path.currentQuery);
      var querySelector = path.currentQuery ? "[data-drupal-link-query='" + queryString + "']" : ':not([data-drupal-link-query])';
      var originalSelectors = ['[data-drupal-link-system-path="' + path.currentPath + '"]'];
      var selectors;

      // If this is the front page, we have to check for the <front> path as
      // well.
      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }

      // Add language filtering.
      selectors = [].concat(
        // Links without any hreflang attributes (most of them).
        originalSelectors.map(function (selector) { return selector + ':not([hreflang])'; }),
        // Links with hreflang equals to the current language.
        originalSelectors.map(function (selector) { return selector + '[hreflang="' + path.currentLanguage + '"]'; })
      );

      // Add query string selector for pagers, exposed filters.
      selectors = selectors.map(function (current) { return current + querySelector; });

      // Query the DOM.
      var activeLinks = context.querySelectorAll(selectors.join(','));
      var il = activeLinks.length;
      for (var i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach: function (context, settings, trigger) {
      if (trigger === 'unload') {
        var activeLinks = context.querySelectorAll('[data-drupal-link-system-path].is-active');
        var il = activeLinks.length;
        for (var i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    }
  };

})(Drupal, drupalSettings);
;
/**
 * @file
 * Adds an HTML element and method to trigger audio UAs to read system messages.
 *
 * Use {@link Drupal.announce} to indicate to screen reader users that an
 * element on the page has changed state. For instance, if clicking a link
 * loads 10 more items into a list, one might announce the change like this.
 *
 * @example
 * $('#search-list')
 *   .on('itemInsert', function (event, data) {
 *     // Insert the new items.
 *     $(data.container.el).append(data.items.el);
 *     // Announce the change to the page contents.
 *     Drupal.announce(Drupal.t('@count items added to @container',
 *       {'@count': data.items.length, '@container': data.container.title}
 *     ));
 *   });
 */

(function (Drupal, debounce) {

  'use strict';

  var liveElement;
  var announcements = [];

  /**
   * Builds a div element with the aria-live attribute and add it to the DOM.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behavior for drupalAnnouce.
   */
  Drupal.behaviors.drupalAnnounce = {
    attach: function (context) {
      // Create only one aria-live element.
      if (!liveElement) {
        liveElement = document.createElement('div');
        liveElement.id = 'drupal-live-announce';
        liveElement.className = 'visually-hidden';
        liveElement.setAttribute('aria-live', 'polite');
        liveElement.setAttribute('aria-busy', 'false');
        document.body.appendChild(liveElement);
      }
    }
  };

  /**
   * Concatenates announcements to a single string; appends to the live region.
   */
  function announce() {
    var text = [];
    var priority = 'polite';
    var announcement;

    // Create an array of announcement strings to be joined and appended to the
    // aria live region.
    var il = announcements.length;
    for (var i = 0; i < il; i++) {
      announcement = announcements.pop();
      text.unshift(announcement.text);
      // If any of the announcements has a priority of assertive then the group
      // of joined announcements will have this priority.
      if (announcement.priority === 'assertive') {
        priority = 'assertive';
      }
    }

    if (text.length) {
      // Clear the liveElement so that repeated strings will be read.
      liveElement.innerHTML = '';
      // Set the busy state to true until the node changes are complete.
      liveElement.setAttribute('aria-busy', 'true');
      // Set the priority to assertive, or default to polite.
      liveElement.setAttribute('aria-live', priority);
      // Print the text to the live region. Text should be run through
      // Drupal.t() before being passed to Drupal.announce().
      liveElement.innerHTML = text.join('\n');
      // The live text area is updated. Allow the AT to announce the text.
      liveElement.setAttribute('aria-busy', 'false');
    }
  }

  /**
   * Triggers audio UAs to read the supplied text.
   *
   * The aria-live region will only read the text that currently populates its
   * text node. Replacing text quickly in rapid calls to announce results in
   * only the text from the most recent call to {@link Drupal.announce} being
   * read. By wrapping the call to announce in a debounce function, we allow for
   * time for multiple calls to {@link Drupal.announce} to queue up their
   * messages. These messages are then joined and append to the aria-live region
   * as one text node.
   *
   * @param {string} text
   *   A string to be read by the UA.
   * @param {string} [priority='polite']
   *   A string to indicate the priority of the message. Can be either
   *   'polite' or 'assertive'.
   *
   * @return {function}
   *   The return of the call to debounce.
   *
   * @see http://www.w3.org/WAI/PF/aria-practices/#liveprops
   */
  Drupal.announce = function (text, priority) {
    // Save the text and priority into a closure variable. Multiple simultaneous
    // announcements will be concatenated and read in sequence.
    announcements.push({
      text: text,
      priority: priority
    });
    // Immediately invoke the function that debounce returns. 200 ms is right at
    // the cusp where humans notice a pause, so we will wait
    // at most this much time before the set of queued announcements is read.
    return (debounce(announce, 200)());
  };
}(Drupal, Drupal.debounce));
;
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;t.type="text/css";t.id="matchmediajs-test";i.parentNode.insertBefore(t,i);n="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle;e={matchMedium:function(e){var i="@media "+e+"{ #matchmediajs-test { width: 1px; } }";if(t.styleSheet){t.styleSheet.cssText=i}else{t.textContent=i}return n.width==="1px"}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}());
;
(function(){if(window.matchMedia&&window.matchMedia("all").addListener){return false}var e=window.matchMedia,i=e("only all").matches,n=false,t=0,a=[],r=function(i){clearTimeout(t);t=setTimeout(function(){for(var i=0,n=a.length;i<n;i++){var t=a[i].mql,r=a[i].listeners||[],o=e(t.media).matches;if(o!==t.matches){t.matches=o;for(var s=0,l=r.length;s<l;s++){r[s].call(window,t)}}}},30)};window.matchMedia=function(t){var o=e(t),s=[],l=0;o.addListener=function(e){if(!i){return}if(!n){n=true;window.addEventListener("resize",r,true)}if(l===0){l=a.push({mql:o,listeners:s})}s.push(e)};o.removeListener=function(e){for(var i=0,n=s.length;i<n;i++){if(s[i]===e){s.splice(i,1)}}};return o}})();
;
/**
 * @file
 * Builds a nested accordion widget.
 *
 * Invoke on an HTML list element with the jQuery plugin pattern.
 *
 * @example
 * $('.toolbar-menu').drupalToolbarMenu();
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  /**
   * Store the open menu tray.
   */
  var activeItem = Drupal.url(drupalSettings.path.currentPath);

  $.fn.drupalToolbarMenu = function () {

    var ui = {
      handleOpen: Drupal.t('Extend'),
      handleClose: Drupal.t('Collapse')
    };

    /**
     * Handle clicks from the disclosure button on an item with sub-items.
     *
     * @param {Object} event
     *   A jQuery Event object.
     */
    function toggleClickHandler(event) {
      var $toggle = $(event.target);
      var $item = $toggle.closest('li');
      // Toggle the list item.
      toggleList($item);
      // Close open sibling menus.
      var $openItems = $item.siblings().filter('.open');
      toggleList($openItems, false);
    }

    /**
     * Handle clicks from a menu item link.
     *
     * @param {Object} event
     *   A jQuery Event object.
     */
    function linkClickHandler(event) {
      // If the toolbar is positioned fixed (and therefore hiding content
      // underneath), then users expect clicks in the administration menu tray
      // to take them to that destination but for the menu tray to be closed
      // after clicking: otherwise the toolbar itself is obstructing the view
      // of the destination they chose.
      if (!Drupal.toolbar.models.toolbarModel.get('isFixed')) {
        Drupal.toolbar.models.toolbarModel.set('activeTab', null);
      }
      // Stopping propagation to make sure that once a toolbar-box is clicked
      // (the whitespace part), the page is not redirected anymore.
      event.stopPropagation();
    }

    /**
     * Toggle the open/close state of a list is a menu.
     *
     * @param {jQuery} $item
     *   The li item to be toggled.
     *
     * @param {Boolean} switcher
     *   A flag that forces toggleClass to add or a remove a class, rather than
     *   simply toggling its presence.
     */
    function toggleList($item, switcher) {
      var $toggle = $item.children('.toolbar-box').children('.toolbar-handle');
      switcher = (typeof switcher !== 'undefined') ? switcher : !$item.hasClass('open');
      // Toggle the item open state.
      $item.toggleClass('open', switcher);
      // Twist the toggle.
      $toggle.toggleClass('open', switcher);
      // Adjust the toggle text.
      $toggle
        .find('.action')
        // Expand Structure, Collapse Structure.
        .text((switcher) ? ui.handleClose : ui.handleOpen);
    }

    /**
     * Add markup to the menu elements.
     *
     * Items with sub-elements have a list toggle attached to them. Menu item
     * links and the corresponding list toggle are wrapped with in a div
     * classed with .toolbar-box. The .toolbar-box div provides a positioning
     * context for the item list toggle.
     *
     * @param {jQuery} $menu
     *   The root of the menu to be initialized.
     */
    function initItems($menu) {
      var options = {
        class: 'toolbar-icon toolbar-handle',
        action: ui.handleOpen,
        text: ''
      };
      // Initialize items and their links.
      $menu.find('li > a').wrap('<div class="toolbar-box">');
      // Add a handle to each list item if it has a menu.
      $menu.find('li').each(function (index, element) {
        var $item = $(element);
        if ($item.children('ul.toolbar-menu').length) {
          var $box = $item.children('.toolbar-box');
          options.text = Drupal.t('@label', {'@label': $box.find('a').text()});
          $item.children('.toolbar-box')
            .append(Drupal.theme('toolbarMenuItemToggle', options));
        }
      });
    }

    /**
     * Adds a level class to each list based on its depth in the menu.
     *
     * This function is called recursively on each sub level of lists elements
     * until the depth of the menu is exhausted.
     *
     * @param {jQuery} $lists
     *   A jQuery object of ul elements.
     *
     * @param {number} level
     *   The current level number to be assigned to the list elements.
     */
    function markListLevels($lists, level) {
      level = (!level) ? 1 : level;
      var $lis = $lists.children('li').addClass('level-' + level);
      $lists = $lis.children('ul');
      if ($lists.length) {
        markListLevels($lists, level + 1);
      }
    }

    /**
     * On page load, open the active menu item.
     *
     * Marks the trail of the active link in the menu back to the root of the
     * menu with .menu-item--active-trail.
     *
     * @param {jQuery} $menu
     *   The root of the menu.
     */
    function openActiveItem($menu) {
      var pathItem = $menu.find('a[href="' + location.pathname + '"]');
      if (pathItem.length && !activeItem) {
        activeItem = location.pathname;
      }
      if (activeItem) {
        var $activeItem = $menu.find('a[href="' + activeItem + '"]').addClass('menu-item--active');
        var $activeTrail = $activeItem.parentsUntil('.root', 'li').addClass('menu-item--active-trail');
        toggleList($activeTrail, true);
      }
    }

    // Return the jQuery object.
    return this.each(function (selector) {
      var $menu = $(this).once('toolbar-menu');
      if ($menu.length) {
        // Bind event handlers.
        $menu
          .on('click.toolbar', '.toolbar-box', toggleClickHandler)
          .on('click.toolbar', '.toolbar-box a', linkClickHandler);

        $menu.addClass('root');
        initItems($menu);
        markListLevels($menu);
        // Restore previous and active states.
        openActiveItem($menu);
      }
    });
  };

  /**
   * A toggle is an interactive element often bound to a click handler.
   *
   * @param {object} options
   *   Options for the button.
   * @param {string} options.class
   *   Class to set on the button.
   * @param {string} options.action
   *   Action for the button.
   * @param {string} options.text
   *   Used as label for the button.
   *
   * @return {string}
   *   A string representing a DOM fragment.
   */
  Drupal.theme.toolbarMenuItemToggle = function (options) {
    return '<button class="' + options['class'] + '"><span class="action">' + options.action + '</span><span class="label">' + options.text + '</span></button>';
  };

}(jQuery, Drupal, drupalSettings));
;
/**
 * @file
 * Defines the behavior of the Drupal administration toolbar.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  // Merge run-time settings with the defaults.
  var options = $.extend(
    {
      breakpoints: {
        'toolbar.narrow': '',
        'toolbar.standard': '',
        'toolbar.wide': ''
      }
    },
    drupalSettings.toolbar,
    // Merge strings on top of drupalSettings so that they are not mutable.
    {
      strings: {
        horizontal: Drupal.t('Horizontal orientation'),
        vertical: Drupal.t('Vertical orientation')
      }
    }
  );

  /**
   * Registers tabs with the toolbar.
   *
   * The Drupal toolbar allows modules to register top-level tabs. These may
   * point directly to a resource or toggle the visibility of a tray.
   *
   * Modules register tabs with hook_toolbar().
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the toolbar rendering functionality to the toolbar element.
   */
  Drupal.behaviors.toolbar = {
    attach: function (context) {
      // Verify that the user agent understands media queries. Complex admin
      // toolbar layouts require media query support.
      if (!window.matchMedia('only screen').matches) {
        return;
      }
      // Process the administrative toolbar.
      $(context).find('#toolbar-administration').once('toolbar').each(function () {

        // Establish the toolbar models and views.
        var model = Drupal.toolbar.models.toolbarModel = new Drupal.toolbar.ToolbarModel({
          locked: JSON.parse(localStorage.getItem('Drupal.toolbar.trayVerticalLocked')) || false,
          activeTab: document.getElementById(JSON.parse(localStorage.getItem('Drupal.toolbar.activeTabID')))
        });
        Drupal.toolbar.views.toolbarVisualView = new Drupal.toolbar.ToolbarVisualView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.toolbarAuralView = new Drupal.toolbar.ToolbarAuralView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.bodyVisualView = new Drupal.toolbar.BodyVisualView({
          el: this,
          model: model
        });

        // Render collapsible menus.
        var menuModel = Drupal.toolbar.models.menuModel = new Drupal.toolbar.MenuModel();
        Drupal.toolbar.views.menuVisualView = new Drupal.toolbar.MenuVisualView({
          el: $(this).find('.toolbar-menu-administration').get(0),
          model: menuModel,
          strings: options.strings
        });

        // Handle the resolution of Drupal.toolbar.setSubtrees.
        // This is handled with a deferred so that the function may be invoked
        // asynchronously.
        Drupal.toolbar.setSubtrees.done(function (subtrees) {
          menuModel.set('subtrees', subtrees);
          var theme = drupalSettings.ajaxPageState.theme;
          localStorage.setItem('Drupal.toolbar.subtrees.' + theme, JSON.stringify(subtrees));
          // Indicate on the toolbarModel that subtrees are now loaded.
          model.set('areSubtreesLoaded', true);
        });

        // Attach a listener to the configured media query breakpoints.
        for (var label in options.breakpoints) {
          if (options.breakpoints.hasOwnProperty(label)) {
            var mq = options.breakpoints[label];
            var mql = Drupal.toolbar.mql[label] = window.matchMedia(mq);
            // Curry the model and the label of the media query breakpoint to
            // the mediaQueryChangeHandler function.
            mql.addListener(Drupal.toolbar.mediaQueryChangeHandler.bind(null, model, label));
            // Fire the mediaQueryChangeHandler for each configured breakpoint
            // so that they process once.
            Drupal.toolbar.mediaQueryChangeHandler.call(null, model, label, mql);
          }
        }

        // Trigger an initial attempt to load menu subitems. This first attempt
        // is made after the media query handlers have had an opportunity to
        // process. The toolbar starts in the vertical orientation by default,
        // unless the viewport is wide enough to accommodate a horizontal
        // orientation. Thus we give the Toolbar a chance to determine if it
        // should be set to horizontal orientation before attempting to load
        // menu subtrees.
        Drupal.toolbar.views.toolbarVisualView.loadSubtrees();

        $(document)
          // Update the model when the viewport offset changes.
          .on('drupalViewportOffsetChange.toolbar', function (event, offsets) {
            model.set('offsets', offsets);
          });

        // Broadcast model changes to other modules.
        model
          .on('change:orientation', function (model, orientation) {
            $(document).trigger('drupalToolbarOrientationChange', orientation);
          })
          .on('change:activeTab', function (model, tab) {
            $(document).trigger('drupalToolbarTabChange', tab);
          })
          .on('change:activeTray', function (model, tray) {
            $(document).trigger('drupalToolbarTrayChange', tray);
          });

        // If the toolbar's orientation is horizontal and no active tab is
        // defined then show the tray of the first toolbar tab by default (but
        // not the first 'Home' toolbar tab).
        if (Drupal.toolbar.models.toolbarModel.get('orientation') === 'horizontal' && Drupal.toolbar.models.toolbarModel.get('activeTab') === null) {
          Drupal.toolbar.models.toolbarModel.set({
            activeTab: $('.toolbar-bar .toolbar-tab:not(.home-toolbar-tab) a').get(0)
          });
        }
      });
    }
  };

  /**
   * Toolbar methods of Backbone objects.
   *
   * @namespace
   */
  Drupal.toolbar = {

    /**
     * A hash of View instances.
     *
     * @type {object.<string, Backbone.View>}
     */
    views: {},

    /**
     * A hash of Model instances.
     *
     * @type {object.<string, Backbone.Model>}
     */
    models: {},

    /**
     * A hash of MediaQueryList objects tracked by the toolbar.
     *
     * @type {object.<string, object>}
     */
    mql: {},

    /**
     * Accepts a list of subtree menu elements.
     *
     * A deferred object that is resolved by an inlined JavaScript callback.
     *
     * @type {jQuery.Deferred}
     *
     * @see toolbar_subtrees_jsonp().
     */
    setSubtrees: new $.Deferred(),

    /**
     * Respond to configured narrow media query changes.
     *
     * @param {Drupal.toolbar.ToolbarModel} model
     *   A toolbar model
     * @param {string} label
     *   Media query label.
     * @param {object} mql
     *   A MediaQueryList object.
     */
    mediaQueryChangeHandler: function (model, label, mql) {
      switch (label) {
        case 'toolbar.narrow':
          model.set({
            isOriented: mql.matches,
            isTrayToggleVisible: false
          });
          // If the toolbar doesn't have an explicit orientation yet, or if the
          // narrow media query doesn't match then set the orientation to
          // vertical.
          if (!mql.matches || !model.get('orientation')) {
            model.set({orientation: 'vertical'}, {validate: true});
          }
          break;

        case 'toolbar.standard':
          model.set({
            isFixed: mql.matches
          });
          break;

        case 'toolbar.wide':
          model.set({
            orientation: ((mql.matches) ? 'horizontal' : 'vertical')
          }, {validate: true});
          // The tray orientation toggle visibility does not need to be
          // validated.
          model.set({
            isTrayToggleVisible: mql.matches
          });
          break;

        default:
          break;
      }
    }
  };

  /**
   * A toggle is an interactive element often bound to a click handler.
   *
   * @return {string}
   *   A string representing a DOM fragment.
   */
  Drupal.theme.toolbarOrientationToggle = function () {
    return '<div class="toolbar-toggle-orientation"><div class="toolbar-lining">' +
      '<button class="toolbar-icon" type="button"></button>' +
      '</div></div>';
  };

  /**
   * Ajax command to set the toolbar subtrees.
   *
   * @param {Drupal.Ajax} ajax
   *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
   * @param {object} response
   *   JSON response from the Ajax request.
   * @param {number} [status]
   *   XMLHttpRequest status.
   */
  Drupal.AjaxCommands.prototype.setToolbarSubtrees = function (ajax, response, status) {
    Drupal.toolbar.setSubtrees.resolve(response.subtrees);
  };

}(jQuery, Drupal, drupalSettings));
;
/**
 * @file
 * A Backbone Model for collapsible menus.
 */

(function (Backbone, Drupal) {

  'use strict';

  /**
   * Backbone Model for collapsible menus.
   *
   * @constructor
   *
   * @augments Backbone.Model
   */
  Drupal.toolbar.MenuModel = Backbone.Model.extend(/** @lends Drupal.toolbar.MenuModel# */{

    /**
     * @type {object}
     *
     * @prop {object} subtrees
     */
    defaults: /** @lends Drupal.toolbar.MenuModel# */{

      /**
       * @type {object}
       */
      subtrees: {}
    }
  });

}(Backbone, Drupal));
;
/**
 * @file
 * A Backbone Model for the toolbar.
 */

(function (Backbone, Drupal) {

  'use strict';

  /**
   * Backbone model for the toolbar.
   *
   * @constructor
   *
   * @augments Backbone.Model
   */
  Drupal.toolbar.ToolbarModel = Backbone.Model.extend(/** @lends Drupal.toolbar.ToolbarModel# */{

    /**
     * @type {object}
     *
     * @prop activeTab
     * @prop activeTray
     * @prop isOriented
     * @prop isFixed
     * @prop areSubtreesLoaded
     * @prop isViewportOverflowConstrained
     * @prop orientation
     * @prop locked
     * @prop isTrayToggleVisible
     * @prop height
     * @prop offsets
     */
    defaults: /** @lends Drupal.toolbar.ToolbarModel# */{

      /**
       * The active toolbar tab. All other tabs should be inactive under
       * normal circumstances. It will remain active across page loads. The
       * active item is stored as an ID selector e.g. '#toolbar-item--1'.
       *
       * @type {string}
       */
      activeTab: null,

      /**
       * Represents whether a tray is open or not. Stored as an ID selector e.g.
       * '#toolbar-item--1-tray'.
       *
       * @type {string}
       */
      activeTray: null,

      /**
       * Indicates whether the toolbar is displayed in an oriented fashion,
       * either horizontal or vertical.
       *
       * @type {bool}
       */
      isOriented: false,

      /**
       * Indicates whether the toolbar is positioned absolute (false) or fixed
       * (true).
       *
       * @type {bool}
       */
      isFixed: false,

      /**
       * Menu subtrees are loaded through an AJAX request only when the Toolbar
       * is set to a vertical orientation.
       *
       * @type {bool}
       */
      areSubtreesLoaded: false,

      /**
       * If the viewport overflow becomes constrained, isFixed must be true so
       * that elements in the trays aren't lost off-screen and impossible to
       * get to.
       *
       * @type {bool}
       */
      isViewportOverflowConstrained: false,

      /**
       * The orientation of the active tray.
       *
       * @type {string}
       */
      orientation: 'vertical',

      /**
       * A tray is locked if a user toggled it to vertical. Otherwise a tray
       * will switch between vertical and horizontal orientation based on the
       * configured breakpoints. The locked state will be maintained across page
       * loads.
       *
       * @type {bool}
       */
      locked: false,

      /**
       * Indicates whether the tray orientation toggle is visible.
       *
       * @type {bool}
       */
      isTrayToggleVisible: false,

      /**
       * The height of the toolbar.
       *
       * @type {number}
       */
      height: null,

      /**
       * The current viewport offsets determined by {@link Drupal.displace}. The
       * offsets suggest how a module might position is components relative to
       * the viewport.
       *
       * @type {object}
       *
       * @prop {number} top
       * @prop {number} right
       * @prop {number} bottom
       * @prop {number} left
       */
      offsets: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },

    /**
     * @inheritdoc
     *
     * @param {object} attributes
     *   Attributes for the toolbar.
     * @param {object} options
     *   Options for the toolbar.
     *
     * @return {string|undefined}
     *   Returns an error message if validation failed.
     */
    validate: function (attributes, options) {
      // Prevent the orientation being set to horizontal if it is locked, unless
      // override has not been passed as an option.
      if (attributes.orientation === 'horizontal' && this.get('locked') && !options.override) {
        return Drupal.t('The toolbar cannot be set to a horizontal orientation when it is locked.');
      }
    }
  });

}(Backbone, Drupal));
;
/**
 * @file
 * A Backbone view for the body element.
 */

(function ($, Drupal, Backbone) {

  'use strict';

  Drupal.toolbar.BodyVisualView = Backbone.View.extend(/** @lends Drupal.toolbar.BodyVisualView# */{

    /**
     * Adjusts the body element with the toolbar position and dimension changes.
     *
     * @constructs
     *
     * @augments Backbone.View
     */
    initialize: function () {
      this.listenTo(this.model, 'change:orientation change:offsets change:activeTray change:isOriented change:isFixed change:isViewportOverflowConstrained', this.render);
    },

    /**
     * @inheritdoc
     */
    render: function () {
      var $body = $('body');
      var orientation = this.model.get('orientation');
      var isOriented = this.model.get('isOriented');
      var isViewportOverflowConstrained = this.model.get('isViewportOverflowConstrained');

      $body
        // We are using JavaScript to control media-query handling for two
        // reasons: (1) Using JavaScript let's us leverage the breakpoint
        // configurations and (2) the CSS is really complex if we try to hide
        // some styling from browsers that don't understand CSS media queries.
        // If we drive the CSS from classes added through JavaScript,
        // then the CSS becomes simpler and more robust.
        .toggleClass('toolbar-vertical', (orientation === 'vertical'))
        .toggleClass('toolbar-horizontal', (isOriented && orientation === 'horizontal'))
        // When the toolbar is fixed, it will not scroll with page scrolling.
        .toggleClass('toolbar-fixed', (isViewportOverflowConstrained || this.model.get('isFixed')))
        // Toggle the toolbar-tray-open class on the body element. The class is
        // applied when a toolbar tray is active. Padding might be applied to
        // the body element to prevent the tray from overlapping content.
        .toggleClass('toolbar-tray-open', !!this.model.get('activeTray'))
        // Apply padding to the top of the body to offset the placement of the
        // toolbar bar element.
        .css('padding-top', this.model.get('offsets').top);
    }
  });

}(jQuery, Drupal, Backbone));
;
/**
 * @file
 * A Backbone view for the collapsible menus.
 */

(function ($, Backbone, Drupal) {

  'use strict';

  Drupal.toolbar.MenuVisualView = Backbone.View.extend(/** @lends Drupal.toolbar.MenuVisualView# */{

    /**
     * Backbone View for collapsible menus.
     *
     * @constructs
     *
     * @augments Backbone.View
     */
    initialize: function () {
      this.listenTo(this.model, 'change:subtrees', this.render);
    },

    /**
     * @inheritdoc
     */
    render: function () {
      var subtrees = this.model.get('subtrees');
      // Add subtrees.
      for (var id in subtrees) {
        if (subtrees.hasOwnProperty(id)) {
          this.$el
            .find('#toolbar-link-' + id)
            .once('toolbar-subtrees')
            .after(subtrees[id]);
        }
      }
      // Render the main menu as a nested, collapsible accordion.
      if ('drupalToolbarMenu' in $.fn) {
        this.$el
          .children('.toolbar-menu')
          .drupalToolbarMenu();
      }
    }
  });

}(jQuery, Backbone, Drupal));
;
/**
 * @file
 * A Backbone view for the aural feedback of the toolbar.
 */

(function (Backbone, Drupal) {

  'use strict';

  Drupal.toolbar.ToolbarAuralView = Backbone.View.extend(/** @lends Drupal.toolbar.ToolbarAuralView# */{

    /**
     * Backbone view for the aural feedback of the toolbar.
     *
     * @constructs
     *
     * @augments Backbone.View
     *
     * @param {object} options
     *   Options for the view.
     * @param {object} options.strings
     *   Various strings to use in the view.
     */
    initialize: function (options) {
      this.strings = options.strings;

      this.listenTo(this.model, 'change:orientation', this.onOrientationChange);
      this.listenTo(this.model, 'change:activeTray', this.onActiveTrayChange);
    },

    /**
     * Announces an orientation change.
     *
     * @param {Drupal.toolbar.ToolbarModel} model
     *   The toolbar model in question.
     * @param {string} orientation
     *   The new value of the orientation attribute in the model.
     */
    onOrientationChange: function (model, orientation) {
      Drupal.announce(Drupal.t('Tray orientation changed to @orientation.', {
        '@orientation': orientation
      }));
    },

    /**
     * Announces a changed active tray.
     *
     * @param {Drupal.toolbar.ToolbarModel} model
     *   The toolbar model in question.
     * @param {HTMLElement} tray
     *   The new value of the tray attribute in the model.
     */
    onActiveTrayChange: function (model, tray) {
      var relevantTray = (tray === null) ? model.previous('activeTray') : tray;
      var action = (tray === null) ? Drupal.t('closed') : Drupal.t('opened');
      var trayNameElement = relevantTray.querySelector('.toolbar-tray-name');
      var text;
      if (trayNameElement !== null) {
        text = Drupal.t('Tray "@tray" @action.', {
          '@tray': trayNameElement.textContent, '@action': action
        });
      }
      else {
        text = Drupal.t('Tray @action.', {'@action': action});
      }
      Drupal.announce(text);
    }
  });

}(Backbone, Drupal));
;
/**
 * @file
 * A Backbone view for the toolbar element. Listens to mouse & touch.
 */

(function ($, Drupal, drupalSettings, Backbone) {

  'use strict';

  Drupal.toolbar.ToolbarVisualView = Backbone.View.extend(/** @lends Drupal.toolbar.ToolbarVisualView# */{

    /**
     * Event map for the `ToolbarVisualView`.
     *
     * @return {object}
     *   A map of events.
     */
    events: function () {
      // Prevents delay and simulated mouse events.
      var touchEndToClick = function (event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        'click .toolbar-bar .toolbar-tab .trigger': 'onTabClick',
        'click .toolbar-toggle-orientation button': 'onOrientationToggleClick',
        'touchend .toolbar-bar .toolbar-tab .trigger': touchEndToClick,
        'touchend .toolbar-toggle-orientation button': touchEndToClick
      };
    },

    /**
     * Backbone view for the toolbar element. Listens to mouse & touch.
     *
     * @constructs
     *
     * @augments Backbone.View
     *
     * @param {object} options
     *   Options for the view object.
     * @param {object} options.strings
     *   Various strings to use in the view.
     */
    initialize: function (options) {
      this.strings = options.strings;

      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented change:isTrayToggleVisible', this.render);
      this.listenTo(this.model, 'change:mqMatches', this.onMediaQueryChange);
      this.listenTo(this.model, 'change:offsets', this.adjustPlacement);

      // Add the tray orientation toggles.
      this.$el
        .find('.toolbar-tray .toolbar-lining')
        .append(Drupal.theme('toolbarOrientationToggle'));

      // Trigger an activeTab change so that listening scripts can respond on
      // page load. This will call render.
      this.model.trigger('change:activeTab');
    },

    /**
     * @inheritdoc
     *
     * @return {Drupal.toolbar.ToolbarVisualView}
     *   The `ToolbarVisualView` instance.
     */
    render: function () {
      this.updateTabs();
      this.updateTrayOrientation();
      this.updateBarAttributes();
      // Load the subtrees if the orientation of the toolbar is changed to
      // vertical. This condition responds to the case that the toolbar switches
      // from horizontal to vertical orientation. The toolbar starts in a
      // vertical orientation by default and then switches to horizontal during
      // initialization if the media query conditions are met. Simply checking
      // that the orientation is vertical here would result in the subtrees
      // always being loaded, even when the toolbar initialization ultimately
      // results in a horizontal orientation.
      //
      // @see Drupal.behaviors.toolbar.attach() where admin menu subtrees
      // loading is invoked during initialization after media query conditions
      // have been processed.
      if (this.model.changed.orientation === 'vertical' || this.model.changed.activeTab) {
        this.loadSubtrees();
      }
      // Trigger a recalculation of viewport displacing elements. Use setTimeout
      // to ensure this recalculation happens after changes to visual elements
      // have processed.
      window.setTimeout(function () {
        Drupal.displace(true);
      }, 0);
      return this;
    },

    /**
     * Responds to a toolbar tab click.
     *
     * @param {jQuery.Event} event
     *   The event triggered.
     */
    onTabClick: function (event) {
      // If this tab has a tray associated with it, it is considered an
      // activatable tab.
      if (event.target.hasAttribute('data-toolbar-tray')) {
        var activeTab = this.model.get('activeTab');
        var clickedTab = event.target;

        // Set the event target as the active item if it is not already.
        this.model.set('activeTab', (!activeTab || clickedTab !== activeTab) ? clickedTab : null);

        event.preventDefault();
        event.stopPropagation();
      }
    },

    /**
     * Toggles the orientation of a toolbar tray.
     *
     * @param {jQuery.Event} event
     *   The event triggered.
     */
    onOrientationToggleClick: function (event) {
      var orientation = this.model.get('orientation');
      // Determine the toggle-to orientation.
      var antiOrientation = (orientation === 'vertical') ? 'horizontal' : 'vertical';
      var locked = antiOrientation === 'vertical';
      // Remember the locked state.
      if (locked) {
        localStorage.setItem('Drupal.toolbar.trayVerticalLocked', 'true');
      }
      else {
        localStorage.removeItem('Drupal.toolbar.trayVerticalLocked');
      }
      // Update the model.
      this.model.set({
        locked: locked,
        orientation: antiOrientation
      }, {
        validate: true,
        override: true
      });

      event.preventDefault();
      event.stopPropagation();
    },

    /**
     * Updates the display of the tabs: toggles a tab and the associated tray.
     */
    updateTabs: function () {
      var $tab = $(this.model.get('activeTab'));
      // Deactivate the previous tab.
      $(this.model.previous('activeTab'))
        .removeClass('is-active')
        .prop('aria-pressed', false);
      // Deactivate the previous tray.
      $(this.model.previous('activeTray'))
        .removeClass('is-active');

      // Activate the selected tab.
      if ($tab.length > 0) {
        $tab
          .addClass('is-active')
          // Mark the tab as pressed.
          .prop('aria-pressed', true);
        var name = $tab.attr('data-toolbar-tray');
        // Store the active tab name or remove the setting.
        var id = $tab.get(0).id;
        if (id) {
          localStorage.setItem('Drupal.toolbar.activeTabID', JSON.stringify(id));
        }
        // Activate the associated tray.
        var $tray = this.$el.find('[data-toolbar-tray="' + name + '"].toolbar-tray');
        if ($tray.length) {
          $tray.addClass('is-active');
          this.model.set('activeTray', $tray.get(0));
        }
        else {
          // There is no active tray.
          this.model.set('activeTray', null);
        }
      }
      else {
        // There is no active tray.
        this.model.set('activeTray', null);
        localStorage.removeItem('Drupal.toolbar.activeTabID');
      }
    },

    /**
     * Update the attributes of the toolbar bar element.
     */
    updateBarAttributes: function () {
      var isOriented = this.model.get('isOriented');
      if (isOriented) {
        this.$el.find('.toolbar-bar').attr('data-offset-top', '');
      }
      else {
        this.$el.find('.toolbar-bar').removeAttr('data-offset-top');
      }
      // Toggle between a basic vertical view and a more sophisticated
      // horizontal and vertical display of the toolbar bar and trays.
      this.$el.toggleClass('toolbar-oriented', isOriented);
    },

    /**
     * Updates the orientation of the active tray if necessary.
     */
    updateTrayOrientation: function () {
      var orientation = this.model.get('orientation');
      // The antiOrientation is used to render the view of action buttons like
      // the tray orientation toggle.
      var antiOrientation = (orientation === 'vertical') ? 'horizontal' : 'vertical';
      // Update the orientation of the trays.
      var $trays = this.$el.find('.toolbar-tray')
        .removeClass('toolbar-tray-horizontal toolbar-tray-vertical')
        .addClass('toolbar-tray-' + orientation);

      // Update the tray orientation toggle button.
      var iconClass = 'toolbar-icon-toggle-' + orientation;
      var iconAntiClass = 'toolbar-icon-toggle-' + antiOrientation;
      var $orientationToggle = this.$el.find('.toolbar-toggle-orientation')
        .toggle(this.model.get('isTrayToggleVisible'));
      $orientationToggle.find('button')
        .val(antiOrientation)
        .attr('title', this.strings[antiOrientation])
        .text(this.strings[antiOrientation])
        .removeClass(iconClass)
        .addClass(iconAntiClass);

      // Update data offset attributes for the trays.
      var dir = document.documentElement.dir;
      var edge = (dir === 'rtl') ? 'right' : 'left';
      // Remove data-offset attributes from the trays so they can be refreshed.
      $trays.removeAttr('data-offset-left data-offset-right data-offset-top');
      // If an active vertical tray exists, mark it as an offset element.
      $trays.filter('.toolbar-tray-vertical.is-active').attr('data-offset-' + edge, '');
      // If an active horizontal tray exists, mark it as an offset element.
      $trays.filter('.toolbar-tray-horizontal.is-active').attr('data-offset-top', '');
    },

    /**
     * Sets the tops of the trays so that they align with the bottom of the bar.
     */
    adjustPlacement: function () {
      var $trays = this.$el.find('.toolbar-tray');
      if (!this.model.get('isOriented')) {
        $trays.css('margin-top', 0);
        $trays.removeClass('toolbar-tray-horizontal').addClass('toolbar-tray-vertical');
      }
      else {
        // The toolbar container is invisible. Its placement is used to
        // determine the container for the trays.
        $trays.css('margin-top', this.$el.find('.toolbar-bar').outerHeight());
      }
    },

    /**
     * Calls the endpoint URI that builds an AJAX command with the rendered
     * subtrees.
     *
     * The rendered admin menu subtrees HTML is cached on the client in
     * localStorage until the cache of the admin menu subtrees on the server-
     * side is invalidated. The subtreesHash is stored in localStorage as well
     * and compared to the subtreesHash in drupalSettings to determine when the
     * admin menu subtrees cache has been invalidated.
     */
    loadSubtrees: function () {
      var $activeTab = $(this.model.get('activeTab'));
      var orientation = this.model.get('orientation');
      // Only load and render the admin menu subtrees if:
      //   (1) They have not been loaded yet.
      //   (2) The active tab is the administration menu tab, indicated by the
      //       presence of the data-drupal-subtrees attribute.
      //   (3) The orientation of the tray is vertical.
      if (!this.model.get('areSubtreesLoaded') && typeof $activeTab.data('drupal-subtrees') !== 'undefined' && orientation === 'vertical') {
        var subtreesHash = drupalSettings.toolbar.subtreesHash;
        var theme = drupalSettings.ajaxPageState.theme;
        var endpoint = Drupal.url('toolbar/subtrees/' + subtreesHash);
        var cachedSubtreesHash = localStorage.getItem('Drupal.toolbar.subtreesHash.' + theme);
        var cachedSubtrees = JSON.parse(localStorage.getItem('Drupal.toolbar.subtrees.' + theme));
        var isVertical = this.model.get('orientation') === 'vertical';
        // If we have the subtrees in localStorage and the subtree hash has not
        // changed, then use the cached data.
        if (isVertical && subtreesHash === cachedSubtreesHash && cachedSubtrees) {
          Drupal.toolbar.setSubtrees.resolve(cachedSubtrees);
        }
        // Only make the call to get the subtrees if the orientation of the
        // toolbar is vertical.
        else if (isVertical) {
          // Remove the cached menu information.
          localStorage.removeItem('Drupal.toolbar.subtreesHash.' + theme);
          localStorage.removeItem('Drupal.toolbar.subtrees.' + theme);
          // The AJAX response's command will trigger the resolve method of the
          // Drupal.toolbar.setSubtrees Promise.
          Drupal.ajax({url: endpoint}).execute();
          // Cache the hash for the subtrees locally.
          localStorage.setItem('Drupal.toolbar.subtreesHash.' + theme, subtreesHash);
        }
      }
    }
  });

}(jQuery, Drupal, drupalSettings, Backbone));
;
/**
 * @file
 * Manages page tabbing modifications made by modules.
 */

/**
 * Allow modules to respond to the constrain event.
 *
 * @event drupalTabbingConstrained
 */

/**
 * Allow modules to respond to the tabbingContext release event.
 *
 * @event drupalTabbingContextReleased
 */

/**
 * Allow modules to respond to the constrain event.
 *
 * @event drupalTabbingContextActivated
 */

/**
 * Allow modules to respond to the constrain event.
 *
 * @event drupalTabbingContextDeactivated
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Provides an API for managing page tabbing order modifications.
   *
   * @constructor Drupal~TabbingManager
   */
  function TabbingManager() {

    /**
     * Tabbing sets are stored as a stack. The active set is at the top of the
     * stack. We use a JavaScript array as if it were a stack; we consider the
     * first element to be the bottom and the last element to be the top. This
     * allows us to use JavaScript's built-in Array.push() and Array.pop()
     * methods.
     *
     * @type {Array.<Drupal~TabbingContext>}
     */
    this.stack = [];
  }

  /**
   * Add public methods to the TabbingManager class.
   */
  $.extend(TabbingManager.prototype, /** @lends Drupal~TabbingManager# */{

    /**
     * Constrain tabbing to the specified set of elements only.
     *
     * Makes elements outside of the specified set of elements unreachable via
     * the tab key.
     *
     * @param {jQuery} elements
     *   The set of elements to which tabbing should be constrained. Can also
     *   be a jQuery-compatible selector string.
     *
     * @return {Drupal~TabbingContext}
     *   The TabbingContext instance.
     *
     * @fires event:drupalTabbingConstrained
     */
    constrain: function (elements) {
      // Deactivate all tabbingContexts to prepare for the new constraint. A
      // tabbingContext instance will only be reactivated if the stack is
      // unwound to it in the _unwindStack() method.
      var il = this.stack.length;
      for (var i = 0; i < il; i++) {
        this.stack[i].deactivate();
      }

      // The "active tabbing set" are the elements tabbing should be constrained
      // to.
      var $elements = $(elements).find(':tabbable').addBack(':tabbable');

      var tabbingContext = new TabbingContext({
        // The level is the current height of the stack before this new
        // tabbingContext is pushed on top of the stack.
        level: this.stack.length,
        $tabbableElements: $elements
      });

      this.stack.push(tabbingContext);

      // Activates the tabbingContext; this will manipulate the DOM to constrain
      // tabbing.
      tabbingContext.activate();

      // Allow modules to respond to the constrain event.
      $(document).trigger('drupalTabbingConstrained', tabbingContext);

      return tabbingContext;
    },

    /**
     * Restores a former tabbingContext when an active one is released.
     *
     * The TabbingManager stack of tabbingContext instances will be unwound
     * from the top-most released tabbingContext down to the first non-released
     * tabbingContext instance. This non-released instance is then activated.
     */
    release: function () {
      // Unwind as far as possible: find the topmost non-released
      // tabbingContext.
      var toActivate = this.stack.length - 1;
      while (toActivate >= 0 && this.stack[toActivate].released) {
        toActivate--;
      }

      // Delete all tabbingContexts after the to be activated one. They have
      // already been deactivated, so their effect on the DOM has been reversed.
      this.stack.splice(toActivate + 1);

      // Get topmost tabbingContext, if one exists, and activate it.
      if (toActivate >= 0) {
        this.stack[toActivate].activate();
      }
    },

    /**
     * Makes all elements outside of the tabbingContext's set untabbable.
     *
     * Elements made untabbable have their original tabindex and autofocus
     * values stored so that they might be restored later when this
     * tabbingContext is deactivated.
     *
     * @param {Drupal~TabbingContext} tabbingContext
     *   The TabbingContext instance that has been activated.
     */
    activate: function (tabbingContext) {
      var $set = tabbingContext.$tabbableElements;
      var level = tabbingContext.level;
      // Determine which elements are reachable via tabbing by default.
      var $disabledSet = $(':tabbable')
        // Exclude elements of the active tabbing set.
        .not($set);
      // Set the disabled set on the tabbingContext.
      tabbingContext.$disabledElements = $disabledSet;
      // Record the tabindex for each element, so we can restore it later.
      var il = $disabledSet.length;
      for (var i = 0; i < il; i++) {
        this.recordTabindex($disabledSet.eq(i), level);
      }
      // Make all tabbable elements outside of the active tabbing set
      // unreachable.
      $disabledSet
        .prop('tabindex', -1)
        .prop('autofocus', false);

      // Set focus on an element in the tabbingContext's set of tabbable
      // elements. First, check if there is an element with an autofocus
      // attribute. Select the last one from the DOM order.
      var $hasFocus = $set.filter('[autofocus]').eq(-1);
      // If no element in the tabbable set has an autofocus attribute, select
      // the first element in the set.
      if ($hasFocus.length === 0) {
        $hasFocus = $set.eq(0);
      }
      $hasFocus.trigger('focus');
    },

    /**
     * Restores that tabbable state of a tabbingContext's disabled elements.
     *
     * Elements that were made untabbable have their original tabindex and
     * autofocus values restored.
     *
     * @param {Drupal~TabbingContext} tabbingContext
     *   The TabbingContext instance that has been deactivated.
     */
    deactivate: function (tabbingContext) {
      var $set = tabbingContext.$disabledElements;
      var level = tabbingContext.level;
      var il = $set.length;
      for (var i = 0; i < il; i++) {
        this.restoreTabindex($set.eq(i), level);
      }
    },

    /**
     * Records the tabindex and autofocus values of an untabbable element.
     *
     * @param {jQuery} $el
     *   The set of elements that have been disabled.
     * @param {number} level
     *   The stack level for which the tabindex attribute should be recorded.
     */
    recordTabindex: function ($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices') || {};
      tabInfo[level] = {
        tabindex: $el[0].getAttribute('tabindex'),
        autofocus: $el[0].hasAttribute('autofocus')
      };
      $el.data('drupalOriginalTabIndices', tabInfo);
    },

    /**
     * Restores the tabindex and autofocus values of a reactivated element.
     *
     * @param {jQuery} $el
     *   The element that is being reactivated.
     * @param {number} level
     *   The stack level for which the tabindex attribute should be restored.
     */
    restoreTabindex: function ($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices');
      if (tabInfo && tabInfo[level]) {
        var data = tabInfo[level];
        if (data.tabindex) {
          $el[0].setAttribute('tabindex', data.tabindex);
        }
        // If the element did not have a tabindex at this stack level then
        // remove it.
        else {
          $el[0].removeAttribute('tabindex');
        }
        if (data.autofocus) {
          $el[0].setAttribute('autofocus', 'autofocus');
        }

        // Clean up $.data.
        if (level === 0) {
          // Remove all data.
          $el.removeData('drupalOriginalTabIndices');
        }
        else {
          // Remove the data for this stack level and higher.
          var levelToDelete = level;
          while (tabInfo.hasOwnProperty(levelToDelete)) {
            delete tabInfo[levelToDelete];
            levelToDelete++;
          }
          $el.data('drupalOriginalTabIndices', tabInfo);
        }
      }
    }
  });

  /**
   * Stores a set of tabbable elements.
   *
   * This constraint can be removed with the release() method.
   *
   * @constructor Drupal~TabbingContext
   *
   * @param {object} options
   *   A set of initiating values
   * @param {number} options.level
   *   The level in the TabbingManager's stack of this tabbingContext.
   * @param {jQuery} options.$tabbableElements
   *   The DOM elements that should be reachable via the tab key when this
   *   tabbingContext is active.
   * @param {jQuery} options.$disabledElements
   *   The DOM elements that should not be reachable via the tab key when this
   *   tabbingContext is active.
   * @param {bool} options.released
   *   A released tabbingContext can never be activated again. It will be
   *   cleaned up when the TabbingManager unwinds its stack.
   * @param {bool} options.active
   *   When true, the tabbable elements of this tabbingContext will be reachable
   *   via the tab key and the disabled elements will not. Only one
   *   tabbingContext can be active at a time.
   */
  function TabbingContext(options) {

    $.extend(this, /** @lends Drupal~TabbingContext# */{

      /**
       * @type {?number}
       */
      level: null,

      /**
       * @type {jQuery}
       */
      $tabbableElements: $(),

      /**
       * @type {jQuery}
       */
      $disabledElements: $(),

      /**
       * @type {bool}
       */
      released: false,

      /**
       * @type {bool}
       */
      active: false
    }, options);
  }

  /**
   * Add public methods to the TabbingContext class.
   */
  $.extend(TabbingContext.prototype, /** @lends Drupal~TabbingContext# */{

    /**
     * Releases this TabbingContext.
     *
     * Once a TabbingContext object is released, it can never be activated
     * again.
     *
     * @fires event:drupalTabbingContextReleased
     */
    release: function () {
      if (!this.released) {
        this.deactivate();
        this.released = true;
        Drupal.tabbingManager.release(this);
        // Allow modules to respond to the tabbingContext release event.
        $(document).trigger('drupalTabbingContextReleased', this);
      }
    },

    /**
     * Activates this TabbingContext.
     *
     * @fires event:drupalTabbingContextActivated
     */
    activate: function () {
      // A released TabbingContext object can never be activated again.
      if (!this.active && !this.released) {
        this.active = true;
        Drupal.tabbingManager.activate(this);
        // Allow modules to respond to the constrain event.
        $(document).trigger('drupalTabbingContextActivated', this);
      }
    },

    /**
     * Deactivates this TabbingContext.
     *
     * @fires event:drupalTabbingContextDeactivated
     */
    deactivate: function () {
      if (this.active) {
        this.active = false;
        Drupal.tabbingManager.deactivate(this);
        // Allow modules to respond to the constrain event.
        $(document).trigger('drupalTabbingContextDeactivated', this);
      }
    }
  });

  // Mark this behavior as processed on the first pass and return if it is
  // already processed.
  if (Drupal.tabbingManager) {
    return;
  }

  /**
   * @type {Drupal~TabbingManager}
   */
  Drupal.tabbingManager = new TabbingManager();

}(jQuery, Drupal));
;
/**
 * @file
 * Attaches behaviors for the Contextual module's edit toolbar tab.
 */

(function ($, Drupal, Backbone) {

  'use strict';

  var strings = {
    tabbingReleased: Drupal.t('Tabbing is no longer constrained by the Contextual module.'),
    tabbingConstrained: Drupal.t('Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.'),
    pressEsc: Drupal.t('Press the esc key to exit.')
  };

  /**
   * Initializes a contextual link: updates its DOM, sets up model and views.
   *
   * @param {HTMLElement} context
   *   A contextual links DOM element as rendered by the server.
   */
  function initContextualToolbar(context) {
    if (!Drupal.contextual || !Drupal.contextual.collection) {
      return;
    }

    var contextualToolbar = Drupal.contextualToolbar;
    var model = contextualToolbar.model = new contextualToolbar.StateModel({
      // Checks whether localStorage indicates we should start in edit mode
      // rather than view mode.
      // @see Drupal.contextualToolbar.VisualView.persist
      isViewing: localStorage.getItem('Drupal.contextualToolbar.isViewing') !== 'false'
    }, {
      contextualCollection: Drupal.contextual.collection
    });

    var viewOptions = {
      el: $('.toolbar .toolbar-bar .contextual-toolbar-tab'),
      model: model,
      strings: strings
    };
    new contextualToolbar.VisualView(viewOptions);
    new contextualToolbar.AuralView(viewOptions);
  }

  /**
   * Attaches contextual's edit toolbar tab behavior.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches contextual toolbar behavior on a contextualToolbar-init event.
   */
  Drupal.behaviors.contextualToolbar = {
    attach: function (context) {
      if ($('body').once('contextualToolbar-init').length) {
        initContextualToolbar(context);
      }
    }
  };

  /**
   * Namespace for the contextual toolbar.
   *
   * @namespace
   */
  Drupal.contextualToolbar = {

    /**
     * The {@link Drupal.contextualToolbar.StateModel} instance.
     *
     * @type {?Drupal.contextualToolbar.StateModel}
     */
    model: null
  };

})(jQuery, Drupal, Backbone);
;
/**
 * @file
 * A Backbone Model for the state of Contextual module's edit toolbar tab.
 */

(function (Drupal, Backbone) {

  'use strict';

  Drupal.contextualToolbar.StateModel = Backbone.Model.extend(/** @lends Drupal.contextualToolbar.StateModel# */{

    /**
     * @type {object}
     *
     * @prop {bool} isViewing
     * @prop {bool} isVisible
     * @prop {number} contextualCount
     * @prop {Drupal~TabbingContext} tabbingContext
     */
    defaults: /** @lends Drupal.contextualToolbar.StateModel# */{

      /**
       * Indicates whether the toggle is currently in "view" or "edit" mode.
       *
       * @type {bool}
       */
      isViewing: true,

      /**
       * Indicates whether the toggle should be visible or hidden. Automatically
       * calculated, depends on contextualCount.
       *
       * @type {bool}
       */
      isVisible: false,

      /**
       * Tracks how many contextual links exist on the page.
       *
       * @type {number}
       */
      contextualCount: 0,

      /**
       * A TabbingContext object as returned by {@link Drupal~TabbingManager}:
       * the set of tabbable elements when edit mode is enabled.
       *
       * @type {?Drupal~TabbingContext}
       */
      tabbingContext: null
    },

    /**
     * Models the state of the edit mode toggle.
     *
     * @constructs
     *
     * @augments Backbone.Model
     *
     * @param {object} attrs
     *   Attributes for the backbone model.
     * @param {object} options
     *   An object with the following option:
     * @param {Backbone.collection} options.contextualCollection
     *   The collection of {@link Drupal.contextual.StateModel} models that
     *   represent the contextual links on the page.
     */
    initialize: function (attrs, options) {
      // Respond to new/removed contextual links.
      this.listenTo(options.contextualCollection, 'reset remove add', this.countContextualLinks);
      this.listenTo(options.contextualCollection, 'add', this.lockNewContextualLinks);

      // Automatically determine visibility.
      this.listenTo(this, 'change:contextualCount', this.updateVisibility);

      // Whenever edit mode is toggled, lock all contextual links.
      this.listenTo(this, 'change:isViewing', function (model, isViewing) {
        options.contextualCollection.each(function (contextualModel) {
          contextualModel.set('isLocked', !isViewing);
        });
      });
    },

    /**
     * Tracks the number of contextual link models in the collection.
     *
     * @param {Drupal.contextual.StateModel} contextualModel
     *   The contextual links model that was added or removed.
     * @param {Backbone.Collection} contextualCollection
     *    The collection of contextual link models.
     */
    countContextualLinks: function (contextualModel, contextualCollection) {
      this.set('contextualCount', contextualCollection.length);
    },

    /**
     * Lock newly added contextual links if edit mode is enabled.
     *
     * @param {Drupal.contextual.StateModel} contextualModel
     *   The contextual links model that was added.
     * @param {Backbone.Collection} [contextualCollection]
     *    The collection of contextual link models.
     */
    lockNewContextualLinks: function (contextualModel, contextualCollection) {
      if (!this.get('isViewing')) {
        contextualModel.set('isLocked', true);
      }
    },

    /**
     * Automatically updates visibility of the view/edit mode toggle.
     */
    updateVisibility: function () {
      this.set('isVisible', this.get('contextualCount') > 0);
    }

  });

})(Drupal, Backbone);
;
/**
 * @file
 * A Backbone View that provides the aural view of the edit mode toggle.
 */

(function ($, Drupal, Backbone, _) {

  'use strict';

  Drupal.contextualToolbar.AuralView = Backbone.View.extend(/** @lends Drupal.contextualToolbar.AuralView# */{

    /**
     * Tracks whether the tabbing constraint announcement has been read once.
     *
     * @type {bool}
     */
    announcedOnce: false,

    /**
     * Renders the aural view of the edit mode toggle (screen reader support).
     *
     * @constructs
     *
     * @augments Backbone.View
     *
     * @param {object} options
     *   Options for the view.
     */
    initialize: function (options) {
      this.options = options;

      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.manageTabbing);

      $(document).on('keyup', _.bind(this.onKeypress, this));
    },

    /**
     * @inheritdoc
     *
     * @return {Drupal.contextualToolbar.AuralView}
     *   The current contextual toolbar aural view.
     */
    render: function () {
      // Render the state.
      this.$el.find('button').attr('aria-pressed', !this.model.get('isViewing'));

      return this;
    },

    /**
     * Limits tabbing to the contextual links and edit mode toolbar tab.
     */
    manageTabbing: function () {
      var tabbingContext = this.model.get('tabbingContext');
      // Always release an existing tabbing context.
      if (tabbingContext) {
        tabbingContext.release();
        Drupal.announce(this.options.strings.tabbingReleased);
      }
      // Create a new tabbing context when edit mode is enabled.
      if (!this.model.get('isViewing')) {
        tabbingContext = Drupal.tabbingManager.constrain($('.contextual-toolbar-tab, .contextual'));
        this.model.set('tabbingContext', tabbingContext);
        this.announceTabbingConstraint();
        this.announcedOnce = true;
      }
    },

    /**
     * Announces the current tabbing constraint.
     */
    announceTabbingConstraint: function () {
      var strings = this.options.strings;
      Drupal.announce(Drupal.formatString(strings.tabbingConstrained, {
        '@contextualsCount': Drupal.formatPlural(Drupal.contextual.collection.length, '@count contextual link', '@count contextual links')
      }));
      Drupal.announce(strings.pressEsc);
    },

    /**
     * Responds to esc and tab key press events.
     *
     * @param {jQuery.Event} event
     *   The keypress event.
     */
    onKeypress: function (event) {
      // The first tab key press is tracked so that an annoucement about tabbing
      // constraints can be raised if edit mode is enabled when the page is
      // loaded.
      if (!this.announcedOnce && event.keyCode === 9 && !this.model.get('isViewing')) {
        this.announceTabbingConstraint();
        // Set announce to true so that this conditional block won't run again.
        this.announcedOnce = true;
      }
      // Respond to the ESC key. Exit out of edit mode.
      if (event.keyCode === 27) {
        this.model.set('isViewing', true);
      }
    }

  });

})(jQuery, Drupal, Backbone, _);
;
/**
 * @file
 * A Backbone View that provides the visual view of the edit mode toggle.
 */

(function (Drupal, Backbone) {

  'use strict';

  Drupal.contextualToolbar.VisualView = Backbone.View.extend(/** @lends Drupal.contextualToolbar.VisualView# */{

    /**
     * Events for the Backbone view.
     *
     * @return {object}
     *   A mapping of events to be used in the view.
     */
    events: function () {
      // Prevents delay and simulated mouse events.
      var touchEndToClick = function (event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        click: function () {
          this.model.set('isViewing', !this.model.get('isViewing'));
        },
        touchend: touchEndToClick
      };
    },

    /**
     * Renders the visual view of the edit mode toggle.
     *
     * Listens to mouse & touch and handles edit mode toggle interactions.
     *
     * @constructs
     *
     * @augments Backbone.View
     */
    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.persist);
    },

    /**
     * @inheritdoc
     *
     * @return {Drupal.contextualToolbar.VisualView}
     *   The current contextual toolbar visual view.
     */
    render: function () {
      // Render the visibility.
      this.$el.toggleClass('hidden', !this.model.get('isVisible'));
      // Render the state.
      this.$el.find('button').toggleClass('is-active', !this.model.get('isViewing'));

      return this;
    },

    /**
     * Model change handler; persists the isViewing value to localStorage.
     *
     * `isViewing === true` is the default, so only stores in localStorage when
     * it's not the default value (i.e. false).
     *
     * @param {Drupal.contextualToolbar.StateModel} model
     *   A {@link Drupal.contextualToolbar.StateModel} model.
     * @param {bool} isViewing
     *   The value of the isViewing attribute in the model.
     */
    persist: function (model, isViewing) {
      if (!isViewing) {
        localStorage.setItem('Drupal.contextualToolbar.isViewing', 'false');
      }
      else {
        localStorage.removeItem('Drupal.contextualToolbar.isViewing');
      }
    }

  });

})(Drupal, Backbone);
;
/* jQuery Foundation Joyride Plugin 2.1 | Copyright 2012, ZURB | www.opensource.org/licenses/mit-license.php */
(function(e,t,n){"use strict";var r={version:"2.0.3",tipLocation:"bottom",nubPosition:"auto",scroll:!0,scrollSpeed:300,timer:0,autoStart:!1,startTimerOnClick:!0,startOffset:0,nextButton:!0,tipAnimation:"fade",pauseAfter:[],tipAnimationFadeSpeed:300,cookieMonster:!1,cookieName:"joyride",cookieDomain:!1,cookiePath:!1,localStorage:!1,localStorageKey:"joyride",tipContainer:"body",modal:!1,expose:!1,postExposeCallback:e.noop,preRideCallback:e.noop,postRideCallback:e.noop,preStepCallback:e.noop,postStepCallback:e.noop,template:{link:'<a href="#close" class="joyride-close-tip">X</a>',timer:'<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',tip:'<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',wrapper:'<div class="joyride-content-wrapper" role="dialog"></div>',button:'<a href="#" class="joyride-next-tip"></a>',modal:'<div class="joyride-modal-bg"></div>',expose:'<div class="joyride-expose-wrapper"></div>',exposeCover:'<div class="joyride-expose-cover"></div>'}},i=i||!1,s={},o={init:function(n){return this.each(function(){e.isEmptyObject(s)?(s=e.extend(!0,r,n),s.document=t.document,s.$document=e(s.document),s.$window=e(t),s.$content_el=e(this),s.$body=e(s.tipContainer),s.body_offset=e(s.tipContainer).position(),s.$tip_content=e("> li",s.$content_el),s.paused=!1,s.attempts=0,s.tipLocationPatterns={top:["bottom"],bottom:[],left:["right","top","bottom"],right:["left","top","bottom"]},o.jquery_check(),e.isFunction(e.cookie)||(s.cookieMonster=!1),(!s.cookieMonster||!e.cookie(s.cookieName))&&(!s.localStorage||!o.support_localstorage()||!localStorage.getItem(s.localStorageKey))&&(s.$tip_content.each(function(t){o.create({$li:e(this),index:t})}),s.autoStart&&(!s.startTimerOnClick&&s.timer>0?(o.show("init"),o.startTimer()):o.show("init"))),s.$document.on("click.joyride",".joyride-next-tip, .joyride-modal-bg",function(e){e.preventDefault(),s.$li.next().length<1?o.end():s.timer>0?(clearTimeout(s.automate),o.hide(),o.show(),o.startTimer()):(o.hide(),o.show())}),s.$document.on("click.joyride",".joyride-close-tip",function(e){e.preventDefault(),o.end()}),s.$window.bind("resize.joyride",function(t){if(s.$li){if(s.exposed&&s.exposed.length>0){var n=e(s.exposed);n.each(function(){var t=e(this);o.un_expose(t),o.expose(t)})}o.is_phone()?o.pos_phone():o.pos_default()}})):o.restart()})},resume:function(){o.set_li(),o.show()},nextTip:function(){s.$li.next().length<1?o.end():s.timer>0?(clearTimeout(s.automate),o.hide(),o.show(),o.startTimer()):(o.hide(),o.show())},tip_template:function(t){var n,r,i;return t.tip_class=t.tip_class||"",n=e(s.template.tip).addClass(t.tip_class),r=e.trim(e(t.li).html())+o.button_text(t.button_text)+s.template.link+o.timer_instance(t.index),i=e(s.template.wrapper),t.li.attr("data-aria-labelledby")&&i.attr("aria-labelledby",t.li.attr("data-aria-labelledby")),t.li.attr("data-aria-describedby")&&i.attr("aria-describedby",t.li.attr("data-aria-describedby")),n.append(i),n.first().attr("data-index",t.index),e(".joyride-content-wrapper",n).append(r),n[0]},timer_instance:function(t){var n;return t===0&&s.startTimerOnClick&&s.timer>0||s.timer===0?n="":n=o.outerHTML(e(s.template.timer)[0]),n},button_text:function(t){return s.nextButton?(t=e.trim(t)||"Next",t=o.outerHTML(e(s.template.button).append(t)[0])):t="",t},create:function(t){var n=t.$li.attr("data-button")||t.$li.attr("data-text"),r=t.$li.attr("class"),i=e(o.tip_template({tip_class:r,index:t.index,button_text:n,li:t.$li}));e(s.tipContainer).append(i)},show:function(t){var r={},i,u=[],a=0,f,l=null;if(s.$li===n||e.inArray(s.$li.index(),s.pauseAfter)===-1){s.paused?s.paused=!1:o.set_li(t),s.attempts=0;if(s.$li.length&&s.$target.length>0){t&&(s.preRideCallback(s.$li.index(),s.$next_tip),s.modal&&o.show_modal()),s.preStepCallback(s.$li.index(),s.$next_tip),u=(s.$li.data("options")||":").split(";"),a=u.length;for(i=a-1;i>=0;i--)f=u[i].split(":"),f.length===2&&(r[e.trim(f[0])]=e.trim(f[1]));s.tipSettings=e.extend({},s,r),s.tipSettings.tipLocationPattern=s.tipLocationPatterns[s.tipSettings.tipLocation],s.modal&&s.expose&&o.expose(),!/body/i.test(s.$target.selector)&&s.scroll&&o.scroll_to(),o.is_phone()?o.pos_phone(!0):o.pos_default(!0),l=e(".joyride-timer-indicator",s.$next_tip),/pop/i.test(s.tipAnimation)?(l.outerWidth(0),s.timer>0?(s.$next_tip.show(),l.animate({width:e(".joyride-timer-indicator-wrap",s.$next_tip).outerWidth()},s.timer)):s.$next_tip.show()):/fade/i.test(s.tipAnimation)&&(l.outerWidth(0),s.timer>0?(s.$next_tip.fadeIn(s.tipAnimationFadeSpeed),s.$next_tip.show(),l.animate({width:e(".joyride-timer-indicator-wrap",s.$next_tip).outerWidth()},s.timer)):s.$next_tip.fadeIn(s.tipAnimationFadeSpeed)),s.$current_tip=s.$next_tip,e(".joyride-next-tip",s.$current_tip).focus(),o.tabbable(s.$current_tip)}else s.$li&&s.$target.length<1?o.show():o.end()}else s.paused=!0},is_phone:function(){return i?i.mq("only screen and (max-width: 767px)"):s.$window.width()<767?!0:!1},support_localstorage:function(){return i?i.localstorage:!!t.localStorage},hide:function(){s.modal&&s.expose&&o.un_expose(),s.modal||e(".joyride-modal-bg").hide(),s.$current_tip.hide(),s.postStepCallback(s.$li.index(),s.$current_tip)},set_li:function(e){e?(s.$li=s.$tip_content.eq(s.startOffset),o.set_next_tip(),s.$current_tip=s.$next_tip):(s.$li=s.$li.next(),o.set_next_tip()),o.set_target()},set_next_tip:function(){s.$next_tip=e(".joyride-tip-guide[data-index="+s.$li.index()+"]")},set_target:function(){var t=s.$li.attr("data-class"),n=s.$li.attr("data-id"),r=function(){return n?e(s.document.getElementById(n)):t?e("."+t).filter(":visible").first():e("body")};s.$target=r()},scroll_to:function(){var t,n;t=s.$window.height()/2,n=Math.ceil(s.$target.offset().top-t+s.$next_tip.outerHeight()),e("html, body").stop().animate({scrollTop:n},s.scrollSpeed)},paused:function(){return e.inArray(s.$li.index()+1,s.pauseAfter)===-1?!0:!1},destroy:function(){e.isEmptyObject(s)||s.$document.off(".joyride"),e(t).off(".joyride"),e(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"),e(".joyride-tip-guide, .joyride-modal-bg").remove(),clearTimeout(s.automate),s={}},restart:function(){s.autoStart?(o.hide(),s.$li=n,o.show("init")):(!s.startTimerOnClick&&s.timer>0?(o.show("init"),o.startTimer()):o.show("init"),s.autoStart=!0)},pos_default:function(t){var n=Math.ceil(s.$window.height()/2),r=s.$next_tip.offset(),i=e(".joyride-nub",s.$next_tip),u=Math.ceil(i.outerWidth()/2),a=Math.ceil(i.outerHeight()/2),f=t||!1;f&&(s.$next_tip.css("visibility","hidden"),s.$next_tip.show());if(!/body/i.test(s.$target.selector)){var l=s.tipSettings.tipAdjustmentY?parseInt(s.tipSettings.tipAdjustmentY):0,c=s.tipSettings.tipAdjustmentX?parseInt(s.tipSettings.tipAdjustmentX):0;o.bottom()?(s.$next_tip.css({top:s.$target.offset().top+a+s.$target.outerHeight()+l,left:s.$target.offset().left+c}),/right/i.test(s.tipSettings.nubPosition)&&s.$next_tip.css("left",s.$target.offset().left-s.$next_tip.outerWidth()+s.$target.outerWidth()),o.nub_position(i,s.tipSettings.nubPosition,"top")):o.top()?(s.$next_tip.css({top:s.$target.offset().top-s.$next_tip.outerHeight()-a+l,left:s.$target.offset().left+c}),o.nub_position(i,s.tipSettings.nubPosition,"bottom")):o.right()?(s.$next_tip.css({top:s.$target.offset().top+l,left:s.$target.outerWidth()+s.$target.offset().left+u+c}),o.nub_position(i,s.tipSettings.nubPosition,"left")):o.left()&&(s.$next_tip.css({top:s.$target.offset().top+l,left:s.$target.offset().left-s.$next_tip.outerWidth()-u+c}),o.nub_position(i,s.tipSettings.nubPosition,"right")),!o.visible(o.corners(s.$next_tip))&&s.attempts<s.tipSettings.tipLocationPattern.length&&(i.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),s.tipSettings.tipLocation=s.tipSettings.tipLocationPattern[s.attempts],s.attempts++,o.pos_default(!0))}else s.$li.length&&o.pos_modal(i);f&&(s.$next_tip.hide(),s.$next_tip.css("visibility","visible"))},pos_phone:function(t){var n=s.$next_tip.outerHeight(),r=s.$next_tip.offset(),i=s.$target.outerHeight(),u=e(".joyride-nub",s.$next_tip),a=Math.ceil(u.outerHeight()/2),f=t||!1;u.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),f&&(s.$next_tip.css("visibility","hidden"),s.$next_tip.show()),/body/i.test(s.$target.selector)?s.$li.length&&o.pos_modal(u):o.top()?(s.$next_tip.offset({top:s.$target.offset().top-n-a}),u.addClass("bottom")):(s.$next_tip.offset({top:s.$target.offset().top+i+a}),u.addClass("top")),f&&(s.$next_tip.hide(),s.$next_tip.css("visibility","visible"))},pos_modal:function(e){o.center(),e.hide(),o.show_modal()},show_modal:function(){e(".joyride-modal-bg").length<1&&e("body").append(s.template.modal).show(),/pop/i.test(s.tipAnimation)?e(".joyride-modal-bg").show():e(".joyride-modal-bg").fadeIn(s.tipAnimationFadeSpeed)},expose:function(){var n,r,i,u,a="expose-"+Math.floor(Math.random()*1e4);if(arguments.length>0&&arguments[0]instanceof e)i=arguments[0];else{if(!s.$target||!!/body/i.test(s.$target.selector))return!1;i=s.$target}if(i.length<1)return t.console&&console.error("element not valid",i),!1;n=e(s.template.expose),s.$body.append(n),n.css({top:i.offset().top,left:i.offset().left,width:i.outerWidth(!0),height:i.outerHeight(!0)}),r=e(s.template.exposeCover),u={zIndex:i.css("z-index"),position:i.css("position")},i.css("z-index",n.css("z-index")*1+1),u.position=="static"&&i.css("position","relative"),i.data("expose-css",u),r.css({top:i.offset().top,left:i.offset().left,width:i.outerWidth(!0),height:i.outerHeight(!0)}),s.$body.append(r),n.addClass(a),r.addClass(a),s.tipSettings.exposeClass&&(n.addClass(s.tipSettings.exposeClass),r.addClass(s.tipSettings.exposeClass)),i.data("expose",a),s.postExposeCallback(s.$li.index(),s.$next_tip,i),o.add_exposed(i)},un_expose:function(){var n,r,i,u,a=!1;if(arguments.length>0&&arguments[0]instanceof e)r=arguments[0];else{if(!s.$target||!!/body/i.test(s.$target.selector))return!1;r=s.$target}if(r.length<1)return t.console&&console.error("element not valid",r),!1;n=r.data("expose"),i=e("."+n),arguments.length>1&&(a=arguments[1]),a===!0?e(".joyride-expose-wrapper,.joyride-expose-cover").remove():i.remove(),u=r.data("expose-css"),u.zIndex=="auto"?r.css("z-index",""):r.css("z-index",u.zIndex),u.position!=r.css("position")&&(u.position=="static"?r.css("position",""):r.css("position",u.position)),r.removeData("expose"),r.removeData("expose-z-index"),o.remove_exposed(r)},add_exposed:function(t){s.exposed=s.exposed||[],t instanceof e?s.exposed.push(t[0]):typeof t=="string"&&s.exposed.push(t)},remove_exposed:function(t){var n;t instanceof e?n=t[0]:typeof t=="string"&&(n=t),s.exposed=s.exposed||[];for(var r=0;r<s.exposed.length;r++)if(s.exposed[r]==n){s.exposed.splice(r,1);return}},center:function(){var e=s.$window;return s.$next_tip.css({top:(e.height()-s.$next_tip.outerHeight())/2+e.scrollTop(),left:(e.width()-s.$next_tip.outerWidth())/2+e.scrollLeft()}),!0},bottom:function(){return/bottom/i.test(s.tipSettings.tipLocation)},top:function(){return/top/i.test(s.tipSettings.tipLocation)},right:function(){return/right/i.test(s.tipSettings.tipLocation)},left:function(){return/left/i.test(s.tipSettings.tipLocation)},corners:function(e){var t=s.$window,n=t.height()/2,r=Math.ceil(s.$target.offset().top-n+s.$next_tip.outerHeight()),i=t.width()+t.scrollLeft(),o=t.height()+r,u=t.height()+t.scrollTop(),a=t.scrollTop();return r<a&&(r<0?a=0:a=r),o>u&&(u=o),[e.offset().top<a,i<e.offset().left+e.outerWidth(),u<e.offset().top+e.outerHeight(),t.scrollLeft()>e.offset().left]},visible:function(e){var t=e.length;while(t--)if(e[t])return!1;return!0},nub_position:function(e,t,n){t==="auto"?e.addClass(n):e.addClass(t)},startTimer:function(){s.$li.length?s.automate=setTimeout(function(){o.hide(),o.show(),o.startTimer()},s.timer):clearTimeout(s.automate)},end:function(){s.cookieMonster&&e.cookie(s.cookieName,"ridden",{expires:365,domain:s.cookieDomain,path:s.cookiePath}),s.localStorage&&localStorage.setItem(s.localStorageKey,!0),s.timer>0&&clearTimeout(s.automate),s.modal&&s.expose&&o.un_expose(),s.$current_tip&&s.$current_tip.hide(),s.$li&&(s.postStepCallback(s.$li.index(),s.$current_tip),s.postRideCallback(s.$li.index(),s.$current_tip)),e(".joyride-modal-bg").hide()},jquery_check:function(){return e.isFunction(e.fn.on)?!0:(e.fn.on=function(e,t,n){return this.delegate(t,e,n)},e.fn.off=function(e,t,n){return this.undelegate(t,e,n)},!1)},outerHTML:function(e){return e.outerHTML||(new XMLSerializer).serializeToString(e)},version:function(){return s.version},tabbable:function(t){e(t).on("keydown",function(n){if(!n.isDefaultPrevented()&&n.keyCode&&n.keyCode===27){n.preventDefault(),o.end();return}if(n.keyCode!==9)return;var r=e(t).find(":tabbable"),i=r.filter(":first"),s=r.filter(":last");n.target===s[0]&&!n.shiftKey?(i.focus(1),n.preventDefault()):n.target===i[0]&&n.shiftKey&&(s.focus(1),n.preventDefault())})}};e.fn.joyride=function(t){if(o[t])return o[t].apply(this,Array.prototype.slice.call(arguments,1));if(typeof t=="object"||!t)return o.init.apply(this,arguments);e.error("Method "+t+" does not exist on jQuery.joyride")}})(jQuery,this);
;
/**
 * @file
 * Attaches behaviors for the Tour module's toolbar tab.
 */

(function ($, Backbone, Drupal, document) {

  'use strict';

  var queryString = decodeURI(window.location.search);

  /**
   * Attaches the tour's toolbar tab behavior.
   *
   * It uses the query string for:
   * - tour: When ?tour=1 is present, the tour will start automatically after
   *   the page has loaded.
   * - tips: Pass ?tips=class in the url to filter the available tips to the
   *   subset which match the given class.
   *
   * @example
   * http://example.com/foo?tour=1&tips=bar
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attach tour functionality on `tour` events.
   */
  Drupal.behaviors.tour = {
    attach: function (context) {
      $('body').once('tour').each(function () {
        var model = new Drupal.tour.models.StateModel();
        new Drupal.tour.views.ToggleTourView({
          el: $(context).find('#toolbar-tab-tour'),
          model: model
        });

        model
          // Allow other scripts to respond to tour events.
          .on('change:isActive', function (model, isActive) {
            $(document).trigger((isActive) ? 'drupalTourStarted' : 'drupalTourStopped');
          })
          // Initialization: check whether a tour is available on the current
          // page.
          .set('tour', $(context).find('ol#tour'));

        // Start the tour immediately if toggled via query string.
        if (/tour=?/i.test(queryString)) {
          model.set('isActive', true);
        }
      });
    }
  };

  /**
   * @namespace
   */
  Drupal.tour = Drupal.tour || {

    /**
     * @namespace Drupal.tour.models
     */
    models: {},

    /**
     * @namespace Drupal.tour.views
     */
    views: {}
  };

  /**
   * Backbone Model for tours.
   *
   * @constructor
   *
   * @augments Backbone.Model
   */
  Drupal.tour.models.StateModel = Backbone.Model.extend(/** @lends Drupal.tour.models.StateModel# */{

    /**
     * @type {object}
     */
    defaults: /** @lends Drupal.tour.models.StateModel# */{

      /**
       * Indicates whether the Drupal root window has a tour.
       *
       * @type {Array}
       */
      tour: [],

      /**
       * Indicates whether the tour is currently running.
       *
       * @type {bool}
       */
      isActive: false,

      /**
       * Indicates which tour is the active one (necessary to cleanly stop).
       *
       * @type {Array}
       */
      activeTour: []
    }
  });

  Drupal.tour.views.ToggleTourView = Backbone.View.extend(/** @lends Drupal.tour.views.ToggleTourView# */{

    /**
     * @type {object}
     */
    events: {click: 'onClick'},

    /**
     * Handles edit mode toggle interactions.
     *
     * @constructs
     *
     * @augments Backbone.View
     */
    initialize: function () {
      this.listenTo(this.model, 'change:tour change:isActive', this.render);
      this.listenTo(this.model, 'change:isActive', this.toggleTour);
    },

    /**
     * @inheritdoc
     *
     * @return {Drupal.tour.views.ToggleTourView}
     *   The `ToggleTourView` view.
     */
    render: function () {
      // Render the visibility.
      this.$el.toggleClass('hidden', this._getTour().length === 0);
      // Render the state.
      var isActive = this.model.get('isActive');
      this.$el.find('button')
        .toggleClass('is-active', isActive)
        .prop('aria-pressed', isActive);
      return this;
    },

    /**
     * Model change handler; starts or stops the tour.
     */
    toggleTour: function () {
      if (this.model.get('isActive')) {
        var $tour = this._getTour();
        this._removeIrrelevantTourItems($tour, this._getDocument());
        var that = this;
        if ($tour.find('li').length) {
          $tour.joyride({
            autoStart: true,
            postRideCallback: function () { that.model.set('isActive', false); },
            // HTML segments for tip layout.
            template: {
              link: '<a href=\"#close\" class=\"joyride-close-tip\">&times;</a>',
              button: '<a href=\"#\" class=\"button button--primary joyride-next-tip\"></a>'
            }
          });
          this.model.set({isActive: true, activeTour: $tour});
        }
      }
      else {
        this.model.get('activeTour').joyride('destroy');
        this.model.set({isActive: false, activeTour: []});
      }
    },

    /**
     * Toolbar tab click event handler; toggles isActive.
     *
     * @param {jQuery.Event} event
     *   The click event.
     */
    onClick: function (event) {
      this.model.set('isActive', !this.model.get('isActive'));
      event.preventDefault();
      event.stopPropagation();
    },

    /**
     * Gets the tour.
     *
     * @return {jQuery}
     *   A jQuery element pointing to a `<ol>` containing tour items.
     */
    _getTour: function () {
      return this.model.get('tour');
    },

    /**
     * Gets the relevant document as a jQuery element.
     *
     * @return {jQuery}
     *   A jQuery element pointing to the document within which a tour would be
     *   started given the current state.
     */
    _getDocument: function () {
      return $(document);
    },

    /**
     * Removes tour items for elements that don't have matching page elements.
     *
     * Or that are explicitly filtered out via the 'tips' query string.
     *
     * @example
     * <caption>This will filter out tips that do not have a matching
     * page element or don't have the "bar" class.</caption>
     * http://example.com/foo?tips=bar
     *
     * @param {jQuery} $tour
     *   A jQuery element pointing to a `<ol>` containing tour items.
     * @param {jQuery} $document
     *   A jQuery element pointing to the document within which the elements
     *   should be sought.
     *
     * @see Drupal.tour.views.ToggleTourView#_getDocument
     */
    _removeIrrelevantTourItems: function ($tour, $document) {
      var removals = false;
      var tips = /tips=([^&]+)/.exec(queryString);
      $tour
        .find('li')
        .each(function () {
          var $this = $(this);
          var itemId = $this.attr('data-id');
          var itemClass = $this.attr('data-class');
          // If the query parameter 'tips' is set, remove all tips that don't
          // have the matching class.
          if (tips && !$(this).hasClass(tips[1])) {
            removals = true;
            $this.remove();
            return;
          }
          // Remove tip from the DOM if there is no corresponding page element.
          if ((!itemId && !itemClass) ||
            (itemId && $document.find('#' + itemId).length) ||
            (itemClass && $document.find('.' + itemClass).length)) {
            return;
          }
          removals = true;
          $this.remove();
        });

      // If there were removals, we'll have to do some clean-up.
      if (removals) {
        var total = $tour.find('li').length;
        if (!total) {
          this.model.set({tour: []});
        }

        $tour
          .find('li')
          // Rebuild the progress data.
          .each(function (index) {
            var progress = Drupal.t('!tour_item of !total', {'!tour_item': index + 1, '!total': total});
            $(this).find('.tour-progress').text(progress);
          })
          // Update the last item to have "End tour" as the button.
          .eq(-1)
          .attr('data-text', Drupal.t('End tour'));
      }
    }

  });

})(jQuery, Backbone, Drupal, document);
;
(function($) {
  $(document).ready(function() {
    $('a.toolbar-icon').removeAttr('title');
  });
})(jQuery);
;
/**
 * @file
 * Replaces the home link in toolbar with a back to site link.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  var pathInfo = drupalSettings.path;
  var escapeAdminPath = sessionStorage.getItem('escapeAdminPath');
  var windowLocation = window.location;

  // Saves the last non-administrative page in the browser to be able to link
  // back to it when browsing administrative pages. If there is a destination
  // parameter there is not need to save the current path because the page is
  // loaded within an existing "workflow".
  if (!pathInfo.currentPathIsAdmin && !/destination=/.test(windowLocation.search)) {
    sessionStorage.setItem('escapeAdminPath', windowLocation);
  }

  /**
   * Replaces the "Home" link with "Back to site" link.
   *
   * Back to site link points to the last non-administrative page the user
   * visited within the same browser tab.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the replacement functionality to the toolbar-escape-admin element.
   */
  Drupal.behaviors.escapeAdmin = {
    attach: function () {
      var $toolbarEscape = $('[data-toolbar-escape-admin]').once('escapeAdmin');
      if ($toolbarEscape.length && pathInfo.currentPathIsAdmin) {
        if (escapeAdminPath !== null) {
          $toolbarEscape.attr('href', escapeAdminPath);
        }
        else {
          $toolbarEscape.text(Drupal.t('Home'));
        }
        $toolbarEscape.closest('.toolbar-tab').removeClass('hidden');
      }
    }
  };

})(jQuery, Drupal, drupalSettings);
;