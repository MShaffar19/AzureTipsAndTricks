(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{319:function(t,e,r){},351:function(t,e,r){"use strict";var n=r(319);r.n(n).a},357:function(t,e,r){"use strict";r.r(e);r(64);var n={name:"BlogPostPreview",props:{publishDate:{type:String,required:!0},title:{type:String,required:!0},path:{type:String,required:!0},excerpt:{type:String,required:!1}},computed:{formatPublishDate:function(){return new Date(this._props.publishDate).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}}},i=(r(351),r(41)),a=Object(i.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("time",[t._v(t._s(t.formatPublishDate))]),t._v(" "),r("h3",{staticClass:"blog-post__title"},[t._v(t._s(t.title))]),t._v(" "),t.excerpt?r("p",[t._v(t._s(t.excerpt))]):t._e(),t._v(" "),r("a",{staticClass:"button blog-post__button ",attrs:{href:t.path}},[t._v("Read More >")])])}),[],!1,null,"13ba4845",null);e.default=a.exports}}]);