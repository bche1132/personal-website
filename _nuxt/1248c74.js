(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{130:function(t,e,n){"use strict";var o=n(2),r=n(182);n(175);o.a.component(r.a)},171:function(t,e,n){var content=n(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("56b15182",content,!0,{sourceMap:!1})},172:function(t,e,n){t.exports=n.p+"img/home-image.abaf725.svg"},173:function(t,e,n){var content=n(237);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("46722c6d",content,!0,{sourceMap:!1})},183:function(t,e,n){"use strict";var o={components:{AppNavbar:n(55).default}},r=(n(234),n(16)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("app-navbar"),t._v(" "),n("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{AppNavbar:n(55).default})},184:function(t,e,n){"use strict";var o={components:{AppNavbar:n(55).default}},r=(n(236),n(16)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero bg-gradient-to-r from-white to-gray-200 min-h-screen"},[n("app-navbar"),t._v(" "),n("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{AppNavbar:n(55).default})},185:function(t,e,n){n(186),t.exports=n(187)},234:function(t,e,n){"use strict";n(171)},235:function(t,e,n){var o=n(39),r=n(101),l=n(172),c=o(!1),d=r(l);c.push([t.i,'.hero:after{content:"";background-image:url('+d+");background-size:cover;background-repeat:no-repeat;opacity:.3;top:-80px;left:0;bottom:0;right:0;position:fixed;z-index:0;max-width:1700px}",""]),t.exports=c},236:function(t,e,n){"use strict";n(173)},237:function(t,e,n){var o=n(39),r=n(101),l=n(172),c=o(!1),d=r(l);c.push([t.i,'.hero:after{content:"";background-image:url('+d+");background-size:cover;background-repeat:no-repeat;opacity:.3;top:-80px;left:0;bottom:0;right:0;position:fixed;z-index:0;max-width:1700px}",""]),t.exports=c},246:function(t,e){},247:function(t,e){},248:function(t,e){},249:function(t,e){},250:function(t,e){},55:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{menuOpen:!1}},computed:{currentPage:function(){return this.$route.path}}},r=n(16),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"flex z-50"},[n("div",{staticClass:"w-full bg-black p-4 z-50"},[n("div",{staticClass:"max-w-screen-xl mx-auto z-50 bg-black"},[n("div",{staticClass:"relative flex items-center justify-between"},[n("div",{staticClass:"absolute inset-y-0 right-0 flex items-center sm:hidden"},[n("button",{staticClass:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",attrs:{type:"button","aria-controls":"mobile-menu","aria-expanded":"false"},on:{click:function(e){t.menuOpen=!t.menuOpen}}},[n("span",{staticClass:"sr-only"},[t._v("Open main menu")]),t._v(" "),n("svg",{staticClass:"h-6 w-6",class:{block:!t.menuOpen,hidden:t.menuOpen},attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}})]),t._v(" "),n("svg",{staticClass:"h-6 w-6",class:{block:t.menuOpen,hidden:!t.menuOpen},attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]),t._v(" "),n("div",{staticClass:"flex-1 flex items-center justify-start sm:items-stretch sm:justify-start"},[n("div",{staticClass:"flex-shrink-0 flex items-center"},[n("nuxt-link",{staticClass:"transition duration-500 ease-in-out bg-white h-12 w-12 rounded-full text-black font-bold text-2xl tracking-wide flex items-center justify-center transform focus:scale-110 hover:scale-110 hover:bg-orange-300 focus:bg-orange-300",attrs:{to:"/","aria-label":"To Brianna Chen Site Home"}},[t._v("BC")])],1)]),t._v(" "),n("div",{staticClass:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},[n("div",{staticClass:"hidden sm:block sm:ml-6"},[n("div",[n("ul",{staticClass:"flex flex-row text-gray-200 text-lg tracking-wide font-thin"},[n("li",[n("nuxt-link",{staticClass:"mr-8 border-b-2 pb-2 border-black hover:text-custom-mint focus:text-custom-mint",class:{"text-custom-mint font-bold border-white":t.currentPage.includes("/about")},attrs:{to:"/about"}},[t._v("about")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"mr-8 border-b-2 pb-2 border-black hover:text-pink-200 focus:text-pink-200",class:{"text-pink-200 font-bold border-white":t.currentPage.includes("/portfolio")},attrs:{to:"/portfolio"}},[t._v("portfolio")])],1)])])])])])]),t._v(" "),t.menuOpen?n("div",{staticClass:"block z-50 sm:hidden",attrs:{id:"mobile-menu"}},[n("div",{staticClass:"pt-8 text-center pb-3 space-y-1 bg-black"},[n("nuxt-link",{staticClass:" text-gray-300 hover:bg-custom-mint hover:text-white block px-3 py-2 rounded-md text-base font-bold",class:{"bg-custom-mint font-bold pb-2 text-white":t.currentPage.includes("/about")},attrs:{to:"/about"}},[t._v("about")]),t._v(" "),n("nuxt-link",{staticClass:"text-gray-300 hover:bg-pink-200 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-bold",class:{"bg-pink-200 font-bold pb-2 text-blue-900":t.currentPage.includes("/portfolio")},attrs:{to:"/portfolio"}},[t._v("portfolio")])],1)]):t._e()])])}),[],!1,null,"53f4e595",null);e.default=component.exports}},[[185,16,2,17]]]);