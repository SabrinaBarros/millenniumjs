function isEventProp(e){return/^on/.test(e)}function extractEventName(e){return e.slice(2).toLowerCase()}function addEventListener(e,t,n){e.addEventListener(extractEventName(t),n)}function addProp(e,t,n){"className"===t?e.setAttribute("class",n):e.setAttribute(t,n)}function makeElements(e){if("string"==typeof e)return document.createTextNode(e);var t=document.createElement(e.type);if(e.props&&Object.keys(e.props).forEach(function(n){isEventProp(n)?addEventListener(t,n,e.props[n]):addProp(t,n,e.props[n])}),"string"==typeof e.children){var n=document.createTextNode(e);t.appendChild(n)}else if(e.children){var r=t.appendChild.bind(t);e.children.map(makeElements).forEach(r)}return t}function isDifferentNode(e,t){var n=(void 0===e?"undefined":_typeof(e))!==(void 0===t?"undefined":_typeof(t)),r=e.type!==t.type;return n||r}function removeProp(e,t){"className"===t?e.removeAttribute("class"):e.removeAttribute(t)}function removeEventListener(e,t,n){e.removeEventListener(extractEventName(t),n)}function diffEventProp(e,t,n,r){r?n?isDifferentFunction(n,r)&&(removeEventListener(e,t,r),addEventListener(e,t,n)):removeEventListener(e,t,r):addEventListener(e,t,n)}function diffProps(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=Object.assign({},t,n);Object.keys(r).forEach(function(r){isEventProp(r)?diffEventProp(e,r,t[r],n[r]):diffProp(e,r,t[r],n[r])})}function diffTextNodes(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(n)if(t){if(t!==n){var o=document.createTextNode(t),i=e.childNodes[r];e.replaceChild(o,i)}}else{var d=e.childNodes[r];e.removeChild(d)}else{var f=document.createTextNode(t);e.appendChild(f)}}function diffElement(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(n)if(t){if(isDifferentNode(t,n)){var o=makeElements(t),i=e.childNodes[r];e.replaceChild(o,i)}else if("string"==typeof t)diffTextNodes(e,t,n,r);else if(t.type&&(diffProps(e.childNodes[r],t.props,n.props),t.children))for(var d=t.children.length,f=n.children.length,l=0;l<d||l<f;l++)diffElement(e.childNodes[r],t.children[l],n.children[l],l)}else{var a=e.childNodes[r];e.removeChild(a)}else{var c=makeElements(t);e.appendChild(c)}}var vdom=function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return"string"!=typeof e?e(t):{type:e,props:t||{},children:r}},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),isDifferentFunction=function(e,t){return e.toString()!==t.toString()},diffProp=function(e,t,n,r){r?n?n!==r&&addProp(e,t,n):removeProp(e,t):addProp(e,t,n)},Millennium=function(){function e(){classCallCheck(this,e),this.oldVNode=null}return createClass(e,[{key:"component",value:function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return vdom.apply(void 0,[e,t].concat(r))}},{key:"render",value:function(e,t){diffElement(t,e,this.oldVNode),this.oldVNode=e}}]),e}(),millennium=new Millennium;export default millennium;
