webpackJsonp([9],{138:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}var r=n(0),o=n.n(r),i=function(e){var t=e.children,n=e.className,r=void 0===n?"":n,i=a(e,["children","className"]);return o.a.createElement("label",Object.assign({},i,{className:"label"+(r?" "+r:"")}),t)};t.a=i},140:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e){var t=e.children,n=(e.type,e.className),r=e.dataTest,o=e.is,l=void 0===o?"5":o,s=e.as,c=void 0===s?"h5":s,u=a(e,["children","type","className","dataTest","is","as"]);return i.a.createElement(c,Object.assign({},u,{"data-test":r,className:"subtitle is-"+l+(n?" "+n:"")}),t)}var o=n(0),i=n.n(o);t.a=r},141:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e){var t=e.className,n=e.children,r=a(e,["className","children"]);return i.a.createElement("div",Object.assign({},r,{className:"columns"+(t?" "+t:"")}),n)}t.a=r;var o=n(0),i=n.n(o)},142:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e){var t=e.className,n=e.children,r=a(e,["className","children"]);return i.a.createElement("div",Object.assign({},r,{className:"column"+(t?" "+t:"")}),n)}t.a=r;var o=n(0),i=n.n(o)},143:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),l=n.n(i),s=n(13),c=n(140),u=n(144),p=(n.n(u),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),d=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),p(t,[{key:"render",value:function(){var e=this.props.sessionContext.pageCode;return l.a.createElement("div",{id:"PageContainer"},l.a.createElement("div",{className:"header-container"},l.a.createElement("div",{className:"pageCode-container"},l.a.createElement(c.a,null,e)),l.a.createElement("div",{className:"title-container"},l.a.createElement(c.a,null,this.props.title),l.a.createElement("hr",null))),this.props.children)}}]),t}(l.a.Component);t.a=Object(s.a)(d)},144:function(e,t,n){var a=n(145);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!1};r.transform=void 0;n(133)(a,r);a.locals&&(e.exports=a.locals)},145:function(e,t,n){t=e.exports=n(132)(!0),t.push([e.i,"#PageContainer{height:100%;width:100%;background-color:#f9f9f9;overflow:auto}#PageContainer label{font-weight:500}#PageContainer .header-container{padding-top:30px;display:-ms-flexbox;display:flex}#PageContainer .header-container .pageCode-container{height:50px;padding:10px;border:.2px solid #dedede;background-color:#fff;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:125px;-webkit-box-shadow:3px 3px 4px hsla(0,0%,81%,.25);box-shadow:3px 3px 4px hsla(0,0%,81%,.25)}#PageContainer .header-container .pageCode-container .subtitle{font-size:20px;font-weight:700}#PageContainer .header-container .title-container{-ms-flex-positive:1;flex-grow:1;padding-left:20px;padding-right:0}#PageContainer .header-container .title-container .subtitle{font-weight:500}div[dir=rtl] #PageContainer .pageCode-container{border-top-left-radius:5px;border-bottom-left-radius:5px;border-top-right-radius:0;border-bottom-right-radius:0}div[dir=rtl] #PageContainer .title-container{padding-right:20px;padding-left:0}","",{version:3,sources:["C:/Users/tommy.tan/Documents/git/nic-xbc-client/src/components/PageContainer/PageContainer.css"],names:[],mappings:"AAAA,eACE,YAAa,AACb,WAAY,AACZ,yBAA0B,AAC1B,aAAe,CAAE,AACjB,qBACE,eAAiB,CAAE,AACrB,iCACE,iBAAkB,AAClB,oBAAqB,AACrB,YAAc,CAAE,AAChB,qDACE,YAAa,AACb,aAAc,AACd,0BAA4B,AAC5B,sBAA0B,AAC1B,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,YAAa,AACb,kDAA0D,AAClD,yCAAkD,CAAE,AAC5D,+DACE,eAAgB,AAChB,eAAkB,CAAE,AACxB,kDACE,oBAAqB,AACjB,YAAa,AACjB,kBAAmB,AACnB,eAAiB,CAAE,AACnB,4DACE,eAAiB,CAAE,AAE3B,gDACE,2BAA4B,AAC5B,8BAA+B,AAC/B,0BAA2B,AAC3B,4BAA8B,CAAE,AAElC,6CACE,mBAAoB,AACpB,cAAgB,CAAE",file:"PageContainer.css",sourcesContent:['#PageContainer {\n  height: 100%;\n  width: 100%;\n  background-color: #F9F9F9;\n  overflow: auto; }\n  #PageContainer label {\n    font-weight: 500; }\n  #PageContainer .header-container {\n    padding-top: 30px;\n    display: -ms-flexbox;\n    display: flex; }\n    #PageContainer .header-container .pageCode-container {\n      height: 50px;\n      padding: 10px;\n      border: 0.2px solid #DEDEDE;\n      background-color: #ffffff;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n          align-items: center;\n      width: 125px;\n      -webkit-box-shadow: 3px 3px 4px rgba(207, 207, 207, 0.25);\n              box-shadow: 3px 3px 4px rgba(207, 207, 207, 0.25); }\n      #PageContainer .header-container .pageCode-container .subtitle {\n        font-size: 20px;\n        font-weight: bold; }\n    #PageContainer .header-container .title-container {\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n      padding-left: 20px;\n      padding-right: 0; }\n      #PageContainer .header-container .title-container .subtitle {\n        font-weight: 500; }\n\ndiv[dir="rtl"] #PageContainer .pageCode-container {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\ndiv[dir="rtl"] #PageContainer .title-container {\n  padding-right: 20px;\n  padding-left: 0; }\n'],sourceRoot:""}])},151:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),s=(n.n(l),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=a(e,["className"]);return l.createElement("div",Object.assign({},n,{className:"box"+(t?" "+t:"")}),this.props.children)}}]),t}(l.Component);t.a=c},160:function(e,t,n){e.exports=n.p+"static/media/profile-img.4b508f06.png"},375:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),l=n.n(i),s=n(19),c=n.n(s),u=n(39),p=n(154),d=n(149),f=n(141),A=n(142),m=n(138),b=n(151),g=n(152),h=n(143),C=n(160),E=n.n(C),v=n(376),y=(n.n(v),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),x=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),y(t,[{key:"render",value:function(){return l.a.createElement(h.a,{title:c.a.get("afisDetailEnrollment")},l.a.createElement("div",{id:"afis-details-enrollment",className:"container",style:{fontSize:".75rem"}},l.a.createElement(b.a,null,l.a.createElement(m.a,null,c.a.get("verifyDetails")),l.a.createElement(f.a,null,l.a.createElement(A.a,{className:"is-narrow"},l.a.createElement(g.a,{src:E.a,style:{maxWidth:"250px"}})),l.a.createElement(A.a,null,l.a.createElement(f.a,null,l.a.createElement(A.a,{className:"detail-column"},l.a.createElement("div",null,l.a.createElement(m.a,{className:"is-small"},c.a.get("idType")),"abcd"),l.a.createElement("div",null,l.a.createElement(m.a,{className:"is-small"},c.a.get("fatherAndGrandfatherNames")),"abcd"),l.a.createElement("div",null,l.a.createElement(m.a,{className:"is-small"},c.a.get("birthPlace")),"abcd"),l.a.createElement("div",null,l.a.createElement(m.a,{className:"is-small"},c.a.get("birthDateG")),"abcd"),l.a.createElement("div",null,l.a.createElement(m.a,{className:"is-small"},c.a.get("sponsorAddressId")),"abcd"),l.a.createElement("div",null,l.a.createElement(m.a,{className:"is-small"},c.a.get("visaNumber")),"abcd")),l.a.createElement(A.a,{className:"detail-column"},l.a.createElement("div",null,l.a.createElement(m.a,{className:"is-small"},c.a.get("idNumber")),"abcd"),l.a.createElement("div",null,l.a.createElement(m.a,{className:"is-small"},c.a.get("firstAndFamilyNames")),"abcd"),l.a.createElement("div",null,l.a.createElement(m.a,{className:"is-small"},c.a.get("subtribeName")),"abcd"),l.a.createElement("div",null,l.a.createElement(m.a,{className:"is-small"},c.a.get("birthDateH")),"abcd"),l.a.createElement("div",null,l.a.createElement(m.a,{className:"is-small"},c.a.get("gender")),"abcd"),l.a.createElement("div",null,l.a.createElement(m.a,{className:"is-small"},c.a.get("passportNumber")),"abcd")))))),l.a.createElement("div",{className:"buttons"},l.a.createElement(p.a,{className:"button has-shadow",to:u.b.crossing.afisDetail},c.a.get("backBtn")))))}}]),t}(l.a.Component);t.default=Object(d.a)(x)},376:function(e,t,n){var a=n(377);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!1};r.transform=void 0;n(133)(a,r);a.locals&&(e.exports=a.locals)},377:function(e,t,n){t=e.exports=n(132)(!0),t.push([e.i,"#afis-details-enrollment .detail-column div:not(last-child){margin-bottom:10px}","",{version:3,sources:["C:/Users/tommy.tan/Documents/git/nic-xbc-client/src/containers/Crossing/HitReport/AfisDetail/AfisDetailEnrollment/AfisDetailEnrollment.css"],names:[],mappings:"AAAA,4DACE,kBAAoB,CAAE",file:"AfisDetailEnrollment.css",sourcesContent:["#afis-details-enrollment .detail-column div:not(last-child) {\n  margin-bottom: 10px; }\n"],sourceRoot:""}])}});
//# sourceMappingURL=9.39ce32ef.chunk.js.map