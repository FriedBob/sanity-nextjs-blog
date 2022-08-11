"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[667],{99734:function(a,b,c){function d(a){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var e=function(a){if(a&&a.__esModule)return a;if(null===a||"object"!==d(a)&&"function"!=typeof a)return{default:a};var b=h();if(b&&b.has(a))return b.get(a);var c={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if(Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(c,f,g):c[f]=a[f]}return c.default=a,b&&b.set(a,c),c}(c(67294)),f=c(56281),g=c(99790);function h(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return h=function(){return a},a}function i(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function j(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?i(Object(c),!0).forEach(function(b){o(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):i(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function k(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function l(a,b){return(l=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}function m(a){if(void 0===a)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function n(a){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}function o(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var p=function(a){!function(a,b){if("function"!=typeof b&&null!==b)throw TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&l(a,b)}(r,a);var b,c,h,i,p,q=(b=r,c=function a(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(b){return!1}}(),function(){var a,e,f,g=n(b);if(c){var h=n(this).constructor;f=Reflect.construct(g,arguments,h)}else f=g.apply(this,arguments);return a=this,e=f,e&&("object"===d(e)||"function"==typeof e)?e:m(a)});function r(){var a;!function(a,b){if(!(a instanceof b))throw TypeError("Cannot call a class as a function")}(this,r);for(var b=arguments.length,c=Array(b),d=0;d<b;d++)c[d]=arguments[d];return a=q.call.apply(q,[this].concat(c)),o(m(a),"callPlayer",f.callPlayer),o(m(a),"duration",null),o(m(a),"currentTime",null),o(m(a),"secondsLoaded",null),o(m(a),"mute",function(){}),o(m(a),"unmute",function(){}),o(m(a),"ref",function(b){a.iframe=b}),a}return h=r,i=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(a){var b=this;(0,f.getSDK)("https://widget.mixcloud.com/media/js/widgetApi.js","Mixcloud").then(function(a){b.player=a.PlayerWidget(b.iframe),b.player.ready.then(function(){b.player.events.play.on(b.props.onPlay),b.player.events.pause.on(b.props.onPause),b.player.events.ended.on(b.props.onEnded),b.player.events.error.on(b.props.error),b.player.events.progress.on(function(a,c){b.currentTime=a,b.duration=c}),b.props.onReady()})},this.props.onError)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(a){this.callPlayer("seek",a)}},{key:"setVolume",value:function(a){}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){var a=this.props,b=a.url,c=a.config,d=b.match(g.MATCH_URL_MIXCLOUD)[1],h=(0,f.queryString)(j(j({},c.options),{},{feed:"/".concat(d,"/")}));return e.default.createElement("iframe",{key:d,ref:this.ref,style:{width:"100%",height:"100%"},src:"https://www.mixcloud.com/widget/iframe/?".concat(h),frameBorder:"0"})}}],k(h.prototype,i),p&&k(h,p),r}(e.Component);b.default=p,o(p,"displayName","Mixcloud"),o(p,"canPlay",g.canPlay.mixcloud),o(p,"loopOnEnded",!0)}}])