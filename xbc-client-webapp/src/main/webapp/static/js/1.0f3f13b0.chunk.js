webpackJsonp([1],{135:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n.n(r),a=n(20),i=n(44),c=n.n(i),s=n(13),l=n(21),u=n(382),f=n(383),p=c()({loader:function(){return n.e(13).then(n.bind(null,387))},loading:l.a}),d=function(e){var t=e.sessionContext,n=e.location;return t.jwt1&&t.jwt2?o.a.createElement(a.c,{to:{pathname:"/authenticated/home",state:{from:n}}}):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{position:"absolute",display:"flex",justifyContent:"flex-end",width:"100%",padding:"20px"}},o.a.createElement(u.a,null)),o.a.createElement(a.e,null,o.a.createElement(a.d,{exact:!0,path:"/changepassword",component:p}),o.a.createElement(a.d,{component:f.a})))};t.default=Object(s.a)(d)},138:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var o=n(0),a=n.n(o),i=function(e){var t=e.children,n=e.className,o=void 0===n?"":n,i=r(e,["children","className"]);return a.a.createElement("label",Object.assign({},i,{className:"label"+(o?" "+o:"")}),t)};t.a=i},140:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e){var t=e.children,n=(e.type,e.className),o=e.dataTest,a=e.is,c=void 0===a?"5":a,s=e.as,l=void 0===s?"h5":s,u=r(e,["children","type","className","dataTest","is","as"]);return i.a.createElement(l,Object.assign({},u,{"data-test":o,className:"subtitle is-"+c+(n?" "+n:"")}),t)}var a=n(0),i=n.n(a);t.a=o},151:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(0),s=(n.n(c),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),l=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=r(e,["className"]);return c.createElement("div",Object.assign({},n,{className:"box"+(t?" "+t:"")}),this.props.children)}}]),t}(c.Component);t.a=l},152:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var o=n(0),a=n.n(o),i=function(e){var t=e.src,n=e.alt,o=void 0===n?"blank":n,i=r(e,["src","alt"]);return a.a.createElement("img",Object.assign({},i,{alt:o,src:t}))};t.a=i},153:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(0),s=n.n(c),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e){function t(){var e,n,r,i;o(this,t);for(var c=arguments.length,s=Array(c),l=0;l<c;l++)s[l]=arguments[l];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.onClick=function(e){r.props.onClick&&r.props.onClick(e)},i=n,a(r,i)}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,o=e.form,a=e.dataTest,i=r(e,["className","children","form","dataTest"]);return s.a.createElement("button",Object.assign({},i,{form:o,className:"button"+(t?" "+t:""),onClick:this.onClick,"data-test":a}),n)}}]),t}(s.a.Component);t.a=u},155:function(e,t,n){e.exports=n(156)},156:function(e,t,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,a=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n(157),o)r.regeneratorRuntime=a;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},157:function(e,t){!function(t){"use strict";function n(e,t,n,r){var a=t&&t.prototype instanceof o?t:o,i=Object.create(a.prototype),c=new d(r||[]);return i._invoke=l(e,n,c),i}function r(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function o(){}function a(){}function i(){}function c(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function s(e){function t(n,o,a,i){var c=r(e[n],e,o);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===typeof l&&v.call(l,"__await")?Promise.resolve(l.__await).then(function(e){t("next",e,a,i)},function(e){t("throw",e,a,i)}):Promise.resolve(l).then(function(e){s.value=e,a(s)},i)}i(c.arg)}function n(e,n){function r(){return new Promise(function(r,o){t(e,n,r,o)})}return o=o?o.then(r,r):r()}var o;this._invoke=n}function l(e,t,n){var o=O;return function(a,i){if(o===k)throw new Error("Generator is already running");if(o===N){if("throw"===a)throw i;return g()}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var s=u(c,n);if(s){if(s===P)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===O)throw o=N,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=k;var l=r(e,t,n);if("normal"===l.type){if(o=n.done?N:j,l.arg===P)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=N,n.method="throw",n.arg=l.arg)}}}function u(e,t){var n=e.iterator[t.method];if(n===m){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=m,u(e,t),"throw"===t.method))return P;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return P}var o=r(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,P;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=m),t.delegate=null,P):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,P)}function f(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function p(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function d(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(f,this),this.reset(!0)}function h(e){if(e){var t=e[A];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(v.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=m,t.done=!0,t};return r.next=r}}return{next:g}}function g(){return{value:m,done:!0}}var m,y=Object.prototype,v=y.hasOwnProperty,b="function"===typeof Symbol?Symbol:{},A=b.iterator||"@@iterator",w=b.asyncIterator||"@@asyncIterator",x=b.toStringTag||"@@toStringTag",E="object"===typeof e,C=t.regeneratorRuntime;if(C)return void(E&&(e.exports=C));C=t.regeneratorRuntime=E?e.exports:{},C.wrap=n;var O="suspendedStart",j="suspendedYield",k="executing",N="completed",P={},L={};L[A]=function(){return this};var S=Object.getPrototypeOf,_=S&&S(S(h([])));_&&_!==y&&v.call(_,A)&&(L=_);var R=i.prototype=o.prototype=Object.create(L);a.prototype=R.constructor=i,i.constructor=a,i[x]=a.displayName="GeneratorFunction",C.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===a||"GeneratorFunction"===(t.displayName||t.name))},C.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,i):(e.__proto__=i,x in e||(e[x]="GeneratorFunction")),e.prototype=Object.create(R),e},C.awrap=function(e){return{__await:e}},c(s.prototype),s.prototype[w]=function(){return this},C.AsyncIterator=s,C.async=function(e,t,r,o){var a=new s(n(e,t,r,o));return C.isGeneratorFunction(t)?a:a.next().then(function(e){return e.done?e.value:a.next()})},c(R),R[x]="Generator",R[A]=function(){return this},R.toString=function(){return"[object Generator]"},C.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},C.values=h,d.prototype={constructor:d,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=m,this.done=!1,this.delegate=null,this.method="next",this.arg=m,this.tryEntries.forEach(p),!e)for(var t in this)"t"===t.charAt(0)&&v.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=m)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,r){return a.type="throw",a.arg=e,n.next=t,r&&(n.method="next",n.arg=m),!!r}if(this.done)throw e;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var i=v.call(o,"catchLoc"),c=v.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&v.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,P):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),P},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),p(n),P}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;p(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:h(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=m),P}}}(function(){return this}()||Function("return this")())},158:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(0),s=n.n(c),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e){function t(){var e,n,r,i;o(this,t);for(var c=arguments.length,s=Array(c),l=0;l<c;l++)s[l]=arguments[l];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.state={value:""},r.onChange=function(e){var t=e.target;r.setState({value:t.value},function(){r.props.onChange&&r.props.onChange(t)})},r.setRef=function(e){r.el=e},i=n,a(r,i)}return i(t,e),l(t,[{key:"componentDidMount",value:function(){this.props.value&&this.props.value!==this.state.value&&this.setState({value:this.props.value})}},{key:"componentWillReceiveProps",value:function(e){var t=e.value;this.props.value!==t&&this.state.value!==t&&this.setState({value:t})}},{key:"render",value:function(){var e=this.props,t=e.errorStyle,n=void 0===t?"is-warning":t,o=e.errorSize,a=void 0===o?"15px":o,i=e.className,c=void 0===i?"":i,l=e.label,u=void 0===l?null:l,f=e.type,p=void 0===f?"text":f,d=(e.size,e.dataTest),h=e.errorMsg,g=void 0===h?null:h,m=r(e,["errorStyle","errorSize","className","label","type","size","dataTest","errorMsg"]);return s.a.createElement("div",{className:"field"},u&&"function"===typeof u?u():u,s.a.createElement("div",{className:"control"},s.a.createElement("input",Object.assign({},m,{className:"input "+c,type:p,value:this.state.value,onChange:this.onChange,ref:this.setRef,"data-test":d})),s.a.createElement("p",{className:"help "+n,style:{fontSize:a}},g&&g)))}}]),t}(s.a.PureComponent);t.a=u},161:function(e,t,n){"use strict";function r(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}t.a=r},162:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(0),s=(n.n(c),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),l=function(e){function t(){var e,n,r,i;o(this,t);for(var c=arguments.length,s=Array(c),l=0;l<c;l++)s[l]=arguments[l];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.state={isValid:!1},r.setRef=function(e){r.el=e},r.submit=function(e){e.preventDefault(),r.validate()&&r.props.onSubmit&&r.props.onSubmit()},r.validate=function(){var e=r.el.length,t=!1;if(!1===r.el.checkValidity()){for(var n=0;n<e;n++){var o=r.el[n],a=o.parentNode.querySelector(".help");a&&"input"===o.nodeName.toLowerCase()&&(o.validity.valid?a.textContent="":a.textContent=o.validationMessage)}t=!1}else{for(var i=0;i<e;i++){var c=r.el[i],s=c.parentNode.querySelector(".help");s&&"button"!==c.nodeName.toLowerCase()&&(s.textContent="")}t=!0}return t},i=n,a(r,i)}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.dataTest,o=r(e,["children","dataTest"]);return c.createElement("form",Object.assign({},o,{onSubmit:this.submit,noValidate:!0,ref:this.setRef,"data-test":n}),t)}}]),t}(c.Component);t.a=l},187:function(e,t,n){e.exports=n.p+"static/media/logo-main.63377afc.png"},188:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJtSURBVEiJ7ZRfS1NxHIefnW262ZxrujY3nUbOLRupeKHEArsqKISgqyCI3oSvoJt6A1F02UV0af8uIqiLiLzQJJ22xDrVpptu7o872znnt9OFCF00UwoF9bn9ffg+8OH7/cERBx3T8PiYsR9iC0A4FNlT6UJiHmlPjb9x+MSWeg/tLR4wgcvuRK/pJFa+MRCMkC0VaLBY8LV4sFsbWVeK/MguY2AgajVcTU6sZguKVkEXgu/Z1O7EHqebC+ERNtQyhrE51N3kwt/iJV1cw+tso6JVuRW7xp0X9xkMnkGvCVL5NLGeIXLlAprQePR+4o/z61bd3xGh0+2jzXGcvFIimUsjZ1MoWpWzHWE0odJgsfJ48jldrQFK1TKqrnLKEyRXLpBXilS0at2q64pfzb1jWo7zeXmJiO8kN2NX6fV1E/J2MSXHWdvIcyl6ntR6mv7O05glCVVoTMlxFK1Cq8MFmOqK61YNkCnmyJXzRAO9PJt5gxACVde4PnIFj8PNwsoS0UAvs8kEHoeb1VKOdGENgKqm4rQd2724zx8i3N6NLgTJ9TR2ayOXh0b5lExQUEpgbLZilSykS1kkkwlhCG6cG0MTgg9LH/G7vLsXT36dodnWhCo0Zn8maLY5kLMpVos5bj+9RzQQYjEjs1FVGI0MMyXHGQz28eDtE1Rdpa+9h5X8al2xaXh8zDj6MveCbbd6C7vVhiTVP40tJJOEzdpIppj9P2K/6wQDwQhmybxtziyZuRiNYRgGd18+ZC755d/EixmZxYz815xZkpiYfo0uBDVq22Z3JN4polajVC3vKHtIt3ohMb9f/iMOML8A7b0BmXURHFgAAAAASUVORK5CYII="},189:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADKSURBVEiJ7ZaxDoIwFEVvDYObv+JumMpgDOFbGFzs7gQx/IpJG9gbg258Cmxuz8GgI/hqICE9y+tye/t605cCnqUjEmWIIzw9Lk7GAQCE4e4nkbU3bOOYbdpoDSTKUFa2RESjala2lChDLtRS0qo/RV51OO43g/VfBP1ijGledR/hsyicjGfr2Ge8/IxFogxxBsj1fGCb3qPofdXW3tibcBG1lOQy/jg0Wn8znpoAANZpOq3r7B27vkkOPuPJmC1jUUvJ+ux5PEO8AIfGXlUdusRuAAAAAElFTkSuQmCC"},190:function(e,t,n){"use strict";function r(e,t){Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set.call(e,t);var n=new Event("input",{bubbles:!0});e.dispatchEvent(n)}t.a=r},382:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),s=n(19),l=n.n(s),u=n(13),f=n(152),p=n(189),d=n.n(p),h=n(188),g=n.n(h),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=function(e){function t(){var e,n,a,i;r(this,t);for(var c=arguments.length,s=Array(c),l=0;l<c;l++)s[l]=arguments[l];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.state={isLocaleDropdownActive:""},a.toggleVisibility=function(){a.setState(function(e){return{isLocaleDropdownActive:""===e.isLocaleDropdownActive?"is-active":""}})},a.toggleLocale=function(){a.props.sessionContext.changeLocale(),a.setState({isLocaleDropdownActive:""})},i=n,o(a,i)}return a(t,e),m(t,[{key:"render",value:function(){var e=this.props.sessionContext.locale,t=this.state.isLocaleDropdownActive,n="en"===e?" is-right":"",r=t?" is-active":"";return c.a.createElement("div",{className:"dropdown"+n+r},c.a.createElement("div",{className:"dropdown-trigger",onClick:this.toggleVisibility},c.a.createElement(f.a,{src:"en"===e?d.a:g.a,style:{cursor:"pointer"}})),c.a.createElement("div",{className:"dropdown-menu",role:"menu"},c.a.createElement("div",{className:"dropdown-content",style:{background:"linear-gradient(180deg, #5A6A74 4.97%, #3F525E 31.49%)"}},c.a.createElement("div",{className:"dropdown-item",style:{cursor:"pointer",display:"flex",alignItems:"center"},onClick:this.toggleLocale},c.a.createElement(f.a,{src:"en"===e?g.a:d.a})," \xa0\xa0",c.a.createElement("span",{style:{color:"white",fontWeight:"600"}},"en"===e?"Arabic":l.a.get("english"))))))}}]),t}(c.a.Component);t.a=Object(u.a)(y)},383:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),c=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(c).then(function(e){r("next",e)},function(e){r("throw",e)});e(c)}return r("next")})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(155),s=n.n(c),l=n(0),u=n.n(l),f=n(19),p=n.n(f),d=n(190),h=n(40),g=n(161),m=n(162),y=n(138),v=n(158),b=n(153),A=n(152),w=n(151),x=n(140),E=n(187),C=n.n(E),O=n(384),j=n.n(O),k=n(13),N=n(385),P=(n.n(N),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),L="eyJhbGciOiJIUzI1NiJ9.eyJVU0VSIjoie1wic3RhdHVzXCI6MCxcImdlbmRlclwiOjAsXCJsb2NhdGlvblwiOjAsXCJiYWRQYXNzd29yZENvdW50XCI6MCxcInVzZXJJRFwiOjAsXCJsYXN0TG9nb25UaW1lXCI6MCxcImJhZFBhc3N3b3JkVGltZVwiOjAsXCJyb2xlc1wiOltcIlJPTEVfMVwiLFwiUk9MRV8yXCIsXCJST0xFXzNcIl19In0.8jBqTJ5DppDzjvCpbEPEVy5HwfqamD5pQdWHdwPjofo",S="eyJhbGciOiJIUzI1NiJ9.eyJYQkNfU1RBVEUiOiJ7XCJ1c2VyXCI6e1wic3RhdHVzXCI6MCxcImdlbmRlclwiOjAsXCJsb2NhdGlvblwiOjAsXCJiYWRQYXNzd29yZENvdW50XCI6MCxcInVzZXJJRFwiOjAsXCJsYXN0TG9nb25UaW1lXCI6MCxcImJhZFBhc3N3b3JkVGltZVwiOjAsXCJyb2xlc1wiOltcIlJPTEVfMVwiLFwiUk9MRV8yXCIsXCJST0xFXzNcIl19fSJ9.0_kzRyyf85NSDXVFrtxInoyeYEtODuBA9QIVLccbSvM",_=function(e){function t(){var e,n,i,c,l=this;o(this,t);for(var f=arguments.length,p=Array(f),h=0;h<f;h++)p[h]=arguments[h];return n=i=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(p))),i.state={currentState:"idle",isChangePassword:!1},i._setState=i.setState,i.usernameEl=u.a.createRef(),i.passwordEl=u.a.createRef(),i.newPasswordEl=u.a.createRef(),i.confirmNewPasswordEl=u.a.createRef(),i.getXbcToken=function(){var e=i.props,t=e.apiService,n=(t.post,t.urls,t.parseJwt),r=e.sessionContext;return Promise.resolve().then(function(){return new Promise(function(e){return setTimeout(function(){return e(S)},250)})}).then(function(e){sessionStorage.setItem("jwt2",e);var t=JSON.parse(n(e).XBC_STATE);r._setState(Object.assign({},t,{jwt2:e}))})},i.getUserObject=function(){var e=i.props,t=e.apiService,n=(t.post,t.urls,t.parseJwt),r=e.sessionContext,o=i.usernameEl.current.el,a=i.passwordEl.current.el;o.value,a.value;return Promise.resolve().then(function(){return new Promise(function(e){return setTimeout(function(){return e(L)},250)})}).then(function(e){Object(d.a)(o,""),Object(d.a)(a,""),sessionStorage.setItem("jwt1",e);var t=JSON.parse(n(e).USER);r._setState(Object.assign({},t,{jwt1:e}))})},i.authenticate=r(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:i._setState&&i._setState(function(e){return{currentState:"loading"}},r(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.getUserObject();case 3:return e.next=5,i.getXbcToken();case 5:e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),i.props.sessionContext.addNotification({message:e.t0}),i._setState&&i._setState({currentState:"idle"});case 11:case"end":return e.stop()}},e,l,[[0,7]])})));case 1:case"end":return e.stop()}},e,l)})),i.toggleChangePasswordFields=function(){i.setState(function(e){return{isChangePassword:!e.isChangePassword}})},i.changePassword=r(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("changing password");case 1:case"end":return e.stop()}},e,l)})),c=n,a(i,c)}return i(t,e),P(t,[{key:"componentWillUnmount",value:function(){this._setState=null}},{key:"render",value:function(){var e=this.state,t=e.isChangePassword,n=e.currentState;return u.a.createElement("div",{id:"Login"},u.a.createElement("div",{className:"login-container"},u.a.createElement("div",{style:{textAlign:"center",paddingTop:"5em"}},u.a.createElement(A.a,{src:C.a}),u.a.createElement(A.a,{style:{width:"260px"},src:j.a})),u.a.createElement("br",null),u.a.createElement(w.a,{className:"login-box"},u.a.createElement(x.a,{style:{color:"white",textAlign:"center"},is:"4"},p.a.get("saudiArabia")),u.a.createElement(x.a,{style:{color:"white",textAlign:"center"},is:"4"},p.a.get("ministryNIC")),u.a.createElement(m.a,{style:{maxWidth:"350px",margin:"0 auto"}},u.a.createElement(v.a,{ref:this.usernameEl,disabled:"loading"===n,dataTest:"login-username-field",label:u.a.createElement(y.a,{style:{color:"white",fontWeight:"400"}},p.a.get("username"))}),u.a.createElement(v.a,{ref:this.passwordEl,type:"password",disabled:"loading"===n,dataTest:"login-password-field",label:u.a.createElement(y.a,{style:{color:"white",fontWeight:"400"}},p.a.get("password"))}),t&&u.a.createElement(u.a.Fragment,null,u.a.createElement(v.a,{ref:this.newPasswordEl,type:"password",dataTest:"login-new-password-field",disabled:"loading"===n,label:u.a.createElement(y.a,{style:{color:"white",fontWeight:"400"}},p.a.get("newPassword"))}),u.a.createElement(v.a,{ref:this.confirmNewPasswordEl,type:"password",disabled:"loading"===n,dataTest:"login-confirm-new-password-field",label:u.a.createElement(y.a,{style:{color:"white",fontWeight:"400"}},p.a.get("confirmNewPassword"))})),u.a.createElement("a",{style:{color:"white"},onClick:this.toggleChangePasswordFields},p.a.get("changePassword")),u.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},t?u.a.createElement(b.a,{className:"is-primary"+("loading"===n?" is-loading":""),onClick:this.changePassword,disabled:"loading"===n,dataTest:"change-password-btn"},p.a.get("changePassword")):u.a.createElement(b.a,{className:"is-primary"+("loading"===n?" is-loading":""),onClick:this.authenticate,disabled:"loading"===n,dataTest:"login-btn"},p.a.get("login")))))),u.a.createElement("div",{className:"page-code"},u.a.createElement("span",null,"LGOO")))}}]),t}(u.a.Component);t.a=Object(g.a)(h.a,k.a)(_)},384:function(e,t,n){e.exports=n.p+"static/media/logo-secondary.7ae5848a.png"},385:function(e,t,n){var r=n(386);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(133)(r,o);r.locals&&(e.exports=r.locals)},386:function(e,t,n){t=e.exports=n(132)(!0),t.push([e.i,"#Login{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;overflow:auto}#Login .login-container{-ms-flex-positive:1;flex-grow:1}#Login .login-container input.input{border-radius:1px}#Login .login-container .login-box{margin:0 auto;background:-webkit-gradient(linear,left top,left bottom,color-stop(4.97%,#5a6a74),color-stop(31.49%,#3f525e));background:-webkit-linear-gradient(top,#5a6a74 4.97%,#3f525e 31.49%);background:-o-linear-gradient(top,#5a6a74 4.97%,#3f525e 31.49%);background:linear-gradient(180deg,#5a6a74 4.97%,#3f525e 31.49%);-webkit-box-shadow:0 4px 4px rgba(0,0,0,.25);box-shadow:0 4px 4px rgba(0,0,0,.25);max-width:500px}#Login .page-code{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding:12px 12px 0}","",{version:3,sources:["C:/Users/tommy.tan/Documents/git/nic-xbc-client/src/containers/Login/Login.css"],names:[],mappings:"AAAA,OACE,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,YAAa,AACb,aAAe,CAAE,AACjB,wBACE,oBAAqB,AACjB,WAAa,CAAE,AACnB,oCACE,iBAAmB,CAAE,AACvB,mCACE,cAAe,AACf,8GAAqH,AACrH,qEAAwE,AACxE,gEAAmE,AACnE,gEAAmE,AACnE,6CAAoD,AAC5C,qCAA4C,AACpD,eAAiB,CAAE,AACvB,kBACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,kBAAmB,AACf,yBAA0B,AAC9B,mBAA4B,CAAE",file:"Login.css",sourcesContent:["#Login {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  height: 100%;\n  overflow: auto; }\n  #Login .login-container {\n    -ms-flex-positive: 1;\n        flex-grow: 1; }\n    #Login .login-container input.input {\n      border-radius: 1px; }\n    #Login .login-container .login-box {\n      margin: 0 auto;\n      background: -webkit-gradient(linear, left top, left bottom, color-stop(4.97%, #5a6a74), color-stop(31.49%, #3f525e));\n      background: -webkit-linear-gradient(top, #5a6a74 4.97%, #3f525e 31.49%);\n      background: -o-linear-gradient(top, #5a6a74 4.97%, #3f525e 31.49%);\n      background: linear-gradient(180deg, #5a6a74 4.97%, #3f525e 31.49%);\n      -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n      max-width: 500px; }\n  #Login .page-code {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n    padding: 12px 12px 0px 12px; }\n"],sourceRoot:""}])}});
//# sourceMappingURL=1.0f3f13b0.chunk.js.map