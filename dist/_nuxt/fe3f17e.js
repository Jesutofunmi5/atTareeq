(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2],{384:function(t,e,r){"use strict";r.r(e);r(5),r(4),r(2),r(1),r(6),r(3),r(7);var l=r(0),c=r(62);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var o={data:function(){return{appName:"AT-Tareeq"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["isAuthenticated","loggedInUser"]))},d=o,m=r(36),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",[t.isAuthenticated?e("footer",{staticClass:"content-footer"},[e("div",[t._v("\n      © 2022 "),e("a",{attrs:{href:"/",target:"_blank"}},[t._v(t._s(t.appName))])])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},406:function(t,e,r){"use strict";r.r(e);r(20);var l=r(181),c=r(384),n={components:{Header:l.default,Footer:c.default},asyncData:function(t){var e=t.$axios,r=t.route;return e.$get("/messages/".concat(r.params.message)).then((function(t){return{message:t.data.data}}))}},o=r(36),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"layout-wrapper"},[e("Header"),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"mb-4"},[e("nav",{staticStyle:{"--bs-breadcrumb-divider":"'>'"},attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:"/"}},[e("i",{staticClass:"bi bi-globe2 small me-2"}),t._v(" Dashboard\n                    ")])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("Message Detail")])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card mb-4"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-md-7"},[e("div",{staticClass:"d-flex justify-content-between align-items-start mt-4 mt-md-0"},[e("div",[e("div",{staticClass:"small text-muted mb-2"},[t._v(t._s(t.message.categoryId[0].name))]),t._v(" "),e("h2",[t._v(t._s(t.message.title))]),t._v(" "),[t.message.secretMessage?e("p",[e("span",{staticClass:"badge bg-success"},[t._v("Online")])]):e("p",[e("span",{staticClass:"badge bg-danger"},[t._v("Offline")])])],t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda\n                                        autem eaque error explicabo fugiat iusto necessitatibus, temporibus. Laudantium,\n                                        voluptate?")]),t._v(" "),e("div",{staticClass:"d-flex gap-2 mb-3"},[e("i",{staticClass:"bi bi-star-fill text-warning"}),t._v(" "),e("i",{staticClass:"bi bi-star-fill text-warning"}),t._v(" "),e("i",{staticClass:"bi bi-star-fill text-warning"}),t._v(" "),e("i",{staticClass:"bi bi-star-fill text-warning"}),t._v(" "),e("i",{staticClass:"bi bi-star-fill text-muted"}),t._v(" "),e("span",[t._v("("+t._s(t.message.ratingsAverage)+")")])]),t._v(" "),e("p",[t._v("Features:")]),t._v(" "),e("p",[t._v("It is a long established fact that a reader will be distracted.\n                                        Contrary to popular belief, Lorem Ipsum is not text.\n                                        There are many variations of passages of Lorem.")]),t._v(" "),t._m(1)],2),t._v(" "),e("a",{staticClass:"btn btn-icon flex-shrink-0",attrs:{href:"#"}},[e("i",{staticClass:"bi bi-heart-fill text-danger"}),t._v(" "+t._s(t.message.ratingsQuantity)+"\n                                ")])])])])])]),t._v(" "),e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("ul",{staticClass:"nav nav-pills",attrs:{role:"tablist"}},[t._m(2),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{id:"reviews-tab","data-bs-toggle":"tab",href:"#reviews",role:"tab","aria-controls":"reviews","aria-selected":"false"}},[t._v("Reviews ("+t._s(t.message.ratingsQuantity)+")")])])])]),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"tab-content"},[t._m(3),t._v(" "),e("div",{staticClass:"tab-pane fade",attrs:{id:"reviews",role:"tabpanel","aria-labelledby":"reviews-tab"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8"},[e("div",{staticClass:"mb-5"},[e("div",{staticClass:"display-6"},[t._v(t._s(t.message.ratingsAverage))]),t._v(" "),e("div",{staticClass:"d-flex gap-2 my-3"},[t._l(t.message.ratingsAverage,(function(t,r){return e("i",{key:r,staticClass:"bi bi-star-fill icon-lg text-warning"})})),t._v(" "),e("span",[t._v("("+t._s(t.message.ratingsQuantity)+")")])],2)]),t._v(" "),e("div",{staticClass:"list-group list-group-flush mb-4"},t._l(t.message.reviews,(function(r){return e("div",{key:r._id,staticClass:"list-group-item d-flex px-0"},[e("div",{staticClass:"avatar flex-shrink-0 me-3"},[e("img",{staticClass:"rounded-circle",attrs:{src:r.userId.photo,alt:"image"}})]),t._v(" "),e("div",[e("h5",{staticClass:"mb-1"},[t._v(t._s(r.userId.name))]),t._v(" "),e("div",{staticClass:"d-flex gap-2 mb-3"},t._l(r.rating,(function(t,r){return e("i",{key:r,staticClass:"bi bi-star-fill text-warning"})})),0),t._v(" "),e("div",[t._v(t._s(r.review)+"\n                                                ")])])])})),0),t._v(" "),t._m(4)])])])])])])])])]),t._v(" "),e("Footer")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-5"},[e("div",{staticClass:"slick-wrapper"},[e("div",{staticClass:"slider-for mb-3"},[e("div",{staticClass:"slick-slide-item"},[e("img",{staticClass:"w-100 rounded",attrs:{src:"assets/images/products/2.jpg",alt:"image"}})]),t._v(" "),e("div",{staticClass:"slick-slide-item"},[e("img",{staticClass:"w-100 rounded",attrs:{src:"/assets/images/products/1.jpg",alt:"image"}})]),t._v(" "),e("div",{staticClass:"slick-slide-item"},[e("img",{staticClass:"w-100 rounded",attrs:{src:"/assets/images/products/3.jpg",alt:"image"}})]),t._v(" "),e("div",{staticClass:"slick-slide-item"},[e("img",{staticClass:"w-100 rounded",attrs:{src:"/assets/images/products/4.jpg",alt:"image"}})]),t._v(" "),e("div",{staticClass:"slick-slide-item"},[e("img",{staticClass:"w-100 rounded",attrs:{src:"/assets/images/products/5.jpg",alt:"image"}})])]),t._v(" "),e("div",{staticClass:"slick-nav-wrapper"},[e("div",{staticClass:"slider-nav"},[e("div",{staticClass:"slick-slide-item m-2"},[e("img",{staticClass:"w-100 rounded",attrs:{src:"/assets/images/products/2.jpg",alt:"image"}})]),t._v(" "),e("div",{staticClass:"slick-slide-item m-2"},[e("img",{staticClass:"w-100 rounded",attrs:{src:"/assets/images/products/1.jpg",alt:"image"}})]),t._v(" "),e("div",{staticClass:"slick-slide-item m-2"},[e("img",{staticClass:"w-100 rounded",attrs:{src:"/assets/images/products/3.jpg",alt:"image"}})]),t._v(" "),e("div",{staticClass:"slick-slide-item m-2"},[e("img",{staticClass:"w-100 rounded",attrs:{src:"/assets/images/products/4.jpg",alt:"image"}})]),t._v(" "),e("div",{staticClass:"slick-slide-item m-2"},[e("img",{staticClass:"w-100 rounded",attrs:{src:"/assets/images/products/5.jpg",alt:"image"}})])])])])])},function(){var t=this._self._c;return t("form",{staticClass:"mt-4"},[t("div",{staticClass:"row row-cols-lg-auto"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"input-group"},[t("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[this._v("View")])])])])])},function(){var t=this._self._c;return t("li",{staticClass:"nav-item"},[t("a",{staticClass:"nav-link active",attrs:{id:"description-tab","data-bs-toggle":"tab",href:"#description",role:"tab","aria-controls":"description","aria-selected":"true"}},[this._v("Descriptions")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"tab-pane fade show active",attrs:{id:"description",role:"tabpanel","aria-labelledby":"description-tab"}},[e("p",{staticClass:"font-weight-bold"},[t._v("Where was he raised?")]),t._v(" "),e("p",[t._v("Vivamus ultricies augue vitae commodo condimentum. Nullamfaucibus eros eu mauris\n                                feugiat, eget consectetur tortor tempus. Sed volutpatmollis dui eget fringilla.\n                                Vestibulum blandit urna ut tellus lobortis tristique.Vestibulum ante ipsum\n                                primis in\n                                faucibus orci luctus et ultrices posuere cubiliaCurae; Pellentesque quis cursus\n                                mauris. Nam in ornare erat. Vestibulum convallisenim ac massa dapibus\n                                consectetur.\n                                Maecenas facilisis eros ac felis mattis, egetauctor sapien varius.")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores\n                                dolorum\n                                earum fugiat nostrum obcaecati, quis ratione rerum sapiente soluta!")]),t._v(" "),e("p",{staticClass:"font-weight-bold"},[t._v("Chemicals in")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,\n                                reiciendis!")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, animi, aperiam\n                                corporis, dolorum fugiat fugit maxime nisi optio quo similique sit sunt tempora.\n                                Commodi culpa debitis deleniti dolore maiores, maxime praesentium. Autem dicta\n                                dolore ipsum molestiae quae, quasi soluta tempora.")])])},function(){var t=this,e=t._self._c;return e("form",[e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label"},[t._v("Comment:")]),t._v(" "),e("textarea",{staticClass:"form-control",attrs:{rows:"3",placeholder:"Your opinion on the product"}})]),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label"},[t._v("Rate:")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"rating-example"}),t._v(" "),e("div",{staticClass:"live-rating ms-3"})])]),t._v(" "),e("button",{staticClass:"btn btn-primary mt-3",attrs:{type:"button",id:"button-addon2"}},[t._v("Send Review")])])}],!1,null,null,null);e.default=component.exports}}]);