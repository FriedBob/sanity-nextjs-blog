"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[216],{89743:function(a,b,c){function d(a){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var e=function(a){if(a&&a.__esModule)return a;if(null===a||"object"!==d(a)&&"function"!=typeof a)return{default:a};var b=h();if(b&&b.has(a))return b.get(a);var c={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if(Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(c,f,g):c[f]=a[f]}return c.default=a,b&&b.set(a,c),c}(c(67294)),f=c(56281),g=c(99790);function h(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return h=function(){return a},a}function i(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function j(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function k(a,b){return(k=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}function l(a){if(void 0===a)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function m(a){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}function n(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var o=function(a){!function(a,b){if("function"!=typeof b&&null!==b)throw TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&k(a,b)}(r,a);var b,c,h,o,p,q=(b=r,c=function a(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(b){return!1}}(),function(){var a,e,f,g=m(b);if(c){var h=m(this).constructor;f=Reflect.construct(g,arguments,h)}else f=g.apply(this,arguments);return a=this,e=f,e&&("object"===d(e)||"function"==typeof e)?e:l(a)});function r(){var a;!function(a,b){if(!(a instanceof b))throw TypeError("Cannot call a class as a function")}(this,r);for(var b=arguments.length,c=Array(b),d=0;d<b;d++)c[d]=arguments[d];return a=q.call.apply(q,[this].concat(c)),n(l(a),"callPlayer",f.callPlayer),n(l(a),"playerID",a.props.config.playerId||"".concat("twitch-player-").concat((0,f.randomString)())),n(l(a),"mute",function(){a.callPlayer("setMuted",!0)}),n(l(a),"unmute",function(){a.callPlayer("setMuted",!1)}),a}return h=r,o=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(a,b){var c=this,d=this.props,e=d.playsinline,h=d.onError,j=d.config,k=d.controls,l=g.MATCH_URL_TWITCH_CHANNEL.test(a),m=l?a.match(g.MATCH_URL_TWITCH_CHANNEL)[1]:a.match(g.MATCH_URL_TWITCH_VIDEO)[1];if(b){l?this.player.setChannel(m):this.player.setVideo("v"+m);return}(0,f.getSDK)("https://player.twitch.tv/js/embed/v1.js","Twitch").then(function(b){c.player=new b.Player(c.playerID,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?i(Object(c),!0).forEach(function(b){n(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):i(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}({video:l?"":m,channel:l?m:"",height:"100%",width:"100%",playsinline:e,autoplay:c.props.playing,muted:c.props.muted,controls:!!l||k,time:(0,f.parseStartTime)(a)},j.options));var d=b.Player,g=d.READY,h=d.PLAYING,o=d.PAUSE,p=d.ENDED,q=d.ONLINE,r=d.OFFLINE,s=d.SEEK;c.player.addEventListener(g,c.props.onReady),c.player.addEventListener(h,c.props.onPlay),c.player.addEventListener(o,c.props.onPause),c.player.addEventListener(p,c.props.onEnded),c.player.addEventListener(s,c.props.onSeek),c.player.addEventListener(q,c.props.onLoaded),c.player.addEventListener(r,c.props.onLoaded)},h)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.callPlayer("pause")}},{key:"seekTo",value:function(a){this.callPlayer("seek",a)}},{key:"setVolume",value:function(a){this.callPlayer("setVolume",a)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentTime")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){return e.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID})}}],j(h.prototype,o),p&&j(h,p),r}(e.Component);b.default=o,n(o,"displayName","Twitch"),n(o,"canPlay",g.canPlay.twitch),n(o,"loopOnEnded",!0)}}])