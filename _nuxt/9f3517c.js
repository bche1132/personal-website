(window.webpackJsonp=window.webpackJsonp||[]).push([[13,2],{262:function(t,e,r){var content=r(266);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("f8e2e3a4",content,!0,{sourceMap:!1})},265:function(t,e,r){"use strict";r(262)},266:function(t,e,r){var o=r(40)(!1);o.push([t.i,".card-zoom[data-v-2b289c41]{position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);width:100%;border-radius:1rem;height:400px}.card-zoom-image[data-v-2b289c41]{width:100%;height:100%;background-position:50%;background-size:cover}.card-zoom-image[data-v-2b289c41],.card-zoom-text[data-v-2b289c41]{position:absolute;transition-property:all;transition-duration:.5s;transition-timing-function:cubic-bezier(.4,0,.2,1);--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))}.card-zoom-text[data-v-2b289c41]{font-size:3rem;font-weight:900;--transform-scale-x:1.5;--transform-scale-y:1.5;--text-opacity:1;color:#f7fafc;color:rgba(247,250,252,var(--text-opacity));opacity:0;padding-left:1rem;padding-right:1rem}.card-zoom:hover .card-zoom-image[data-v-2b289c41]{--transform-scale-x:1.5;--transform-scale-y:1.5;opacity:.25}.card-zoom:hover .card-zoom-text[data-v-2b289c41]{--transform-scale-x:1;--transform-scale-y:1;--bg-opacity:1;background-color:#000;background-color:rgba(0,0,0,var(--bg-opacity));opacity:1}",""]),t.exports=o},267:function(t,e,r){t.exports=r.p+"img/logos.fde7011.png"},268:function(t,e,r){"use strict";r.r(e);var o={props:{image:{type:Object}}},n=(r(265),r(17)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-zoom"},[r("div",{staticClass:"card-zoom-image",style:"background-image: url("+t.image.image+")"}),t._v(" "),r("h3",{staticClass:"card-zoom-text"},[t._v("\n    "+t._s(t.image.name)+"\n  ")])])}),[],!1,null,"2b289c41",null);e.default=component.exports},271:function(t,e,r){var content=r(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("40f36cc0",content,!0,{sourceMap:!1})},282:function(t,e,r){t.exports=r.p+"img/actpoc-home.40e8ad2.png"},283:function(t,e,r){t.exports=r.p+"img/ac-sct.32eb646.png"},284:function(t,e,r){t.exports=r.p+"img/c19hcc.65e8890.png"},285:function(t,e,r){t.exports=r.p+"img/dsd.b359bdb.png"},286:function(t,e,r){"use strict";r(271)},287:function(t,e,r){var o=r(40),n=r(103),c=r(288),l=o(!1),d=n(c);l.push([t.i,'.page-container[data-v-3d141747]{min-height:calc(100vh - 80px)}.page-container[data-v-3d141747]:after{content:"";background-image:url('+d+");background-size:cover;background-repeat:no-repeat;opacity:.1;top:-100px;left:0;bottom:0;right:0;position:fixed;z-index:0;max-width:1700px}",""]),t.exports=l},288:function(t,e,r){t.exports=r.p+"img/portfolio.984685b.svg"},305:function(t,e,r){"use strict";r.r(e);var o={components:{AppImageCard:r(268).default},data:function(){return{works:[{name:"ACT@POC",description:"Coalition for Advancing Clinical Trials at the Point of Care - Closing Evidence Gaps By Integrating Research and Care Delivery",image:r(282),relative:"portfolio/actpoc"},{name:"Astute Canary Syndromic Community Tracker",description:"",link:"",active:!0,public:!0,role:"Designer / Developer",image:r(283),relative:"portfolio/astute-canary-sct"},{name:"COVID-19 Healthcare Coalition",description:"The COVID-19 Healthcare Coalition is a private-sector led response that brings together healthcare organizations, technology firms, nonprofits, academia, and startups to preserve the healthcare delivery system and help protect U.S. populations.",link:"https://c19hcc.org/",active:!0,public:!0,role:"Designer / Developer",image:r(284),relative:"portfolio/c19hcc"},{name:"Decision Support Dashboard",description:"",link:"",active:!0,public:!0,role:"Designer / Developer",image:r(285),relative:"portfolio/dsd"},{name:"Logos",description:"",link:"",active:!0,public:!0,role:"Designer",image:r(267),relative:"portfolio/logos"}]}}},n=(r(286),r(17)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-container"},[r("div",{staticClass:"max-w-screen-xl flex flex-col z-50 mx-auto w-3/4 md:w-full h-full py-8 md:py-24"},[t._m(0),t._v(" "),r("div",{staticClass:"w-full grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-4 mt-8 z-50"},t._l(t.works,(function(t,e){return r("span",{key:e},[r("nuxt-link",{attrs:{to:t.relative}},[r("app-image-card",{attrs:{image:t}})],1)],1)})),0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",{staticClass:"text-5xl font-thin text-gray-800 tracking-wide z-50"},[r("span",{staticClass:"bg-white px-4 py-2 shadow-xl"},[t._v("Portfolio")])])}],!1,null,"3d141747",null);e.default=component.exports;installComponents(component,{AppImageCard:r(268).default})}}]);