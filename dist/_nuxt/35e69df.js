(window.webpackJsonp=window.webpackJsonp||[]).push([[16,2],{384:function(t,e,r){"use strict";r.r(e);r(5),r(4),r(2),r(1),r(6),r(3),r(7);var n=r(0),c=r(62);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var o={data:function(){return{appName:"AT-Tareeq"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["isAuthenticated","loggedInUser"]))},d=o,v=r(36),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",[t.isAuthenticated?e("footer",{staticClass:"content-footer"},[e("div",[t._v("\n      © 2022 "),e("a",{attrs:{href:"/",target:"_blank"}},[t._v(t._s(t.appName))])])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},398:function(t,e,r){"use strict";r.r(e);r(20);var n=r(181),c=r(384),l={components:{Header:n.default,Footer:c.default},data:function(){return{appLogo:"/assets/images/logo.png",appName:"AT-Tareeq"}},asyncData:function(t){var e=t.$axios;t.route;return e.$get("/users/me").then((function(t){return{user:t.data.data}}))}},o=r(36),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"layout-wrapper"},[e("Header"),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"mb-4"},[e("nav",{staticStyle:{"--bs-breadcrumb-divider":"'>'"},attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:"/"}},[e("i",{staticClass:"bi bi-globe2 small me-2"}),t._v(" Dashboard\n                    ")])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("User Profile")])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card mb-4"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-5"},[e("div",{staticClass:"slick-wrapper"},[e("div",{staticClass:"slider-for mb-3"},[e("div",{staticClass:"slick-slide-item"},[e("img",{staticClass:"w-100 rounded",staticStyle:{height:"250px",width:"100px"},attrs:{src:t.user.photo,alt:"image"}})])])])]),t._v(" "),e("div",{staticClass:"col-md-7"},[e("div",{staticClass:"d-flex justify-content-between align-items-start mt-4 mt-md-0"},[e("div",[e("div",{staticClass:"small text-muted mb-2"},[t._v(t._s(t.user.name))]),t._v(" "),e("h2",[t._v(t._s(t.user.email))]),t._v(" "),[t._m(0)],t._v(" "),t._m(1),t._v(" "),e("p",[t._v("Features:")]),t._v(" "),e("p")],2),t._v(" "),t._m(2)])])])])])])])]),t._v(" "),e("Footer")],1)}),[function(){var t=this._self._c;return t("p",[t("span",{staticClass:"badge bg-success"},[this._v("Online")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex gap-2 mb-3"},[e("i",{staticClass:"bi bi-star-fill text-warning"}),t._v(" "),e("i",{staticClass:"bi bi-star-fill text-warning"}),t._v(" "),e("i",{staticClass:"bi bi-star-fill text-warning"}),t._v(" "),e("i",{staticClass:"bi bi-star-fill text-warning"}),t._v(" "),e("i",{staticClass:"bi bi-star-fill text-muted"}),t._v(" "),e("span")])},function(){var t=this._self._c;return t("a",{staticClass:"btn btn-icon flex-shrink-0",attrs:{href:"#"}},[t("i",{staticClass:"bi bi-heart-fill text-danger"})])}],!1,null,null,null);e.default=component.exports}}]);