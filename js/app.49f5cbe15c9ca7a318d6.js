webpackJsonp([4],[,function(e,t){!function(e,t){function n(){var t=i.getBoundingClientRect().width;t/u>1080&&(t=1080*u);var n=t/30;i.style.fontSize=n+"px",l.rem=e.rem=n}var r,a=e.document,i=a.documentElement,o=a.querySelector('meta[name="viewport"]'),c=a.querySelector('meta[name="flexible"]'),u=0,p=0,l=t.flexible||(t.flexible={});if(o){console.warn("将根据已有的meta标签来设置缩放比例");var m=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);m&&(p=parseFloat(m[1]),u=parseInt(1/p))}else if(c){var s=c.getAttribute("content");if(s){var d=s.match(/initial\-dpr=([\d\.]+)/),f=s.match(/maximum\-dpr=([\d\.]+)/);d&&(u=parseFloat(d[1]),p=parseFloat((1/u).toFixed(2))),f&&(u=parseFloat(f[1]),p=parseFloat((1/u).toFixed(2)))}}if(!u&&!p){var h=(e.navigator.appVersion.match(/android/gi),e.navigator.appVersion.match(/iphone/gi)),w=e.devicePixelRatio;u=h?w>=3&&(!u||u>=3)?3:w>=2&&(!u||u>=2)?2:1:1,p=1/u}if(i.setAttribute("data-dpr",u),!o)if(o=a.createElement("meta"),o.setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+p+", maximum-scale="+p+", minimum-scale="+p+", user-scalable=no"),i.firstElementChild)i.firstElementChild.appendChild(o);else{var v=a.createElement("div");v.appendChild(o),a.write(v.innerHTML)}e.addEventListener("resize",function(){clearTimeout(r),r=setTimeout(n,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(r),r=setTimeout(n,300))},!1),"complete"===a.readyState?a.body.style.fontSize=12*u+"px":a.addEventListener("DOMContentLoaded",function(e){a.body.style.fontSize=12*u+"px"},!1),n(),l.dpr=e.dpr=u,l.refreshRem=n,l.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},l.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}))},function(e,t,n){"use strict";var r=n(0),a=n(14),i=function(e){return n.e(1).then(function(){return e(n(18))}.bind(null,n)).catch(n.oe)},o=function(e){return n.e(2).then(function(){return e(n(20))}.bind(null,n)).catch(n.oe)},c=function(e){return n.e(0).then(function(){return e(n(19))}.bind(null,n)).catch(n.oe)};r.a.use(a.a),t.a=new a.a({routes:[{path:"/",name:"myPrize",component:i},{path:"/newPeople",name:"newPeople",component:o},{path:"/home",name:"home",component:c}]})},function(e,t){},function(e,t){},,,function(e,t,n){n(12);var r=n(8)(n(10),n(13),null,null);e.exports=r.exports},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),a=(n.n(r),n(6)),i=n.n(a),o=n(3),c=(n.n(o),n(5)),u=n.n(c),p=n(1),l=(n.n(p),n(0)),m=n(7),s=n.n(m),d=n(2);l.a.component(u.a.name,u.a),l.a.component(i.a.name,i.a),l.a.config.productionTip=!1,l.a.prototype.hostUrl=function(){return"m.gxw520.com"==document.domain?"https://m.gxw520.com/":"http://192.168.1.10/gxw_mobile3/"}(),l.a.prototype.gxwloginUrl=function(){return"m.gxw520.com"==document.domain?"https://www.gxw520.com/":"http://192.168.1.10/gxw520/"}(),new l.a({el:"#app",router:d.a,template:"<App/>",components:{App:s.a}}),l.a.filter("int_f",function(e){return parseInt(e)}),l.a.filter("time_f",function(e){e=e.replace(/\-/g,"/");var t=new Date(e);return t.getFullYear()+"."+parseInt(t.getMonth()+1)+"."+t.getDate()})},function(e,t){},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}}],[11]);