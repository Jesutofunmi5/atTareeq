(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2],{384:function(t,e,r){"use strict";r.r(e);r(5),r(4),r(2),r(1),r(6),r(3),r(7);var n=r(0),c=r(62);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={data:function(){return{appName:"AT-Tareeq"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["isAuthenticated","loggedInUser"]))},d=l,v=r(36),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",[t.isAuthenticated?e("footer",{staticClass:"content-footer"},[e("div",[t._v("\n      © 2022 "),e("a",{attrs:{href:"/",target:"_blank"}},[t._v(t._s(t.appName))])])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},394:function(t,e,r){"use strict";r.r(e);r(17),r(20);var n=r(15),c=(r(49),r(181)),o=r(384),l={components:{Header:c.default,Footer:o.default},filters:{options:{hour:"numeric",dayPeriod:"short"},formatDate:function(t){return Intl.DateTimeFormat("us-EN").format(new Date(t))}},data:function(){return{t:!0,f:!1}},created:function(){this.$store.dispatch("getCategories")},computed:{Categories:function(){return this.$store.state.categories}},methods:{_category:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$axios.$delete("/categories/".concat(t),{credentials:!0}).then((function(r){window.location.reload(!0),e.$toast.success("".concat(t," Item Successfully deleted"))})).catch((function(t){e.$toast.error("Error Deleting ".concat(t))}));case 2:case"end":return r.stop()}}),r)})))()}}},d=r(36),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"layout-wrapper"},[e("Header"),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"mb-4"},[e("nav",{staticStyle:{"--bs-breadcrumb-divider":"'>'"},attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:"/"}},[e("i",{staticClass:"bi bi-globe2 small me-2"}),t._v(" Dashboard\n            ")])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("Categories")])])])]),t._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-custom table-lg mb-0",attrs:{id:"customers"}},[t._m(0),t._v(" "),e("tbody",t._l(t.Categories.slice(0,10),(function(r,n){return e("tr",{key:r._id},[t._m(1,!0),t._v(" "),e("td",[e("a",{attrs:{href:"#"}},[t._v(t._s(n+1))])]),t._v(" "),e("td",[t._v(t._s(r.name))]),t._v(" "),e("td",[t._v(t._s(t._f("formatDate")(r.createdAt)))]),t._v(" "),e("td",{staticClass:"text-end"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"dropdown ms-auto"},[t._m(2,!0),t._v(" "),e("div",{staticClass:"dropdown-menu dropdown-menu-end"},[e("nuxt-link",{staticClass:"dropdown-item",attrs:{to:"categories/".concat(r._id)}},[t._v("Show")]),t._v(" "),e("nuxt-link",{staticClass:"dropdown-item",attrs:{to:"categories/".concat(r._id)}},[t._v("Edit")]),t._v(" "),e("span",{staticClass:"dropdown-item",staticStyle:{cursor:"pointer"},on:{click:function(e){return t._category(r._id)}}},[t._v("Delete")])],1)])])])])})),0)])]),t._v(" "),t._m(3)]),t._v(" "),e("Footer")],1)}),[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[e("input",{staticClass:"form-check-input select-all",attrs:{type:"checkbox","data-select-all-target":"#customers",id:"defaultCheck1"}})]),t._v(" "),e("th",[t._v("ID")]),t._v(" "),e("th",[t._v("Category")]),t._v(" "),e("th",[t._v("Date")]),t._v(" "),e("th",{staticClass:"text-end"},[t._v("Actions")])])])},function(){var t=this._self._c;return t("td",[t("input",{staticClass:"form-check-input",attrs:{type:"checkbox"}})])},function(){var t=this._self._c;return t("a",{staticClass:"btn btn-floating",attrs:{href:"#","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t("i",{staticClass:"bi bi-three-dots"})])},function(){var t=this,e=t._self._c;return e("nav",{staticClass:"mt-4",attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination justify-content-center"},[e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._v(" "),e("li",{staticClass:"page-item active"},[e("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("1")])]),t._v(" "),e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("2")])]),t._v(" "),e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("3")])]),t._v(" "),e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])])])}],!1,null,null,null);e.default=component.exports}}]);