(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{317:function(e,a,t){var i=t(419);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,t(160).default)("396dfab7",i,!0,{})},418:function(e,a,t){"use strict";t(317)},419:function(e,a,t){(a=t(159)(!0)).push([e.i,".mt-header--minimal .rating{align-items:center;border-bottom:1px solid #eee;display:flex;gap:15px;justify-content:space-between;margin-bottom:10px;padding-bottom:10px}.mt-header--minimal .average{color:#6c757d;font-size:26px}.mt-header--minimal .mt-rating__average__sort{width:100%}@media(max-width:580px){.mt-header--minimal .baseado{display:none}}","",{version:3,sources:["HeaderMinimal.vue"],names:[],mappings:"AAAA,4BAA4B,kBAAkB,CAAC,4BAA4B,CAAC,YAAY,CAAC,QAAQ,CAAC,6BAA6B,CAAC,kBAAkB,CAAC,mBAAmB,CAAC,6BAA6B,aAAa,CAAC,cAAc,CAAC,8CAA8C,UAAU,CAAC,wBAAwB,6BAA6B,YAAY,CAAC",file:"HeaderMinimal.vue",sourcesContent:[".mt-header--minimal .rating{align-items:center;border-bottom:1px solid #eee;display:flex;gap:15px;justify-content:space-between;margin-bottom:10px;padding-bottom:10px}.mt-header--minimal .average{color:#6c757d;font-size:26px}.mt-header--minimal .mt-rating__average__sort{width:100%}@media(max-width:580px){.mt-header--minimal .baseado{display:none}}"]}]),e.exports=a},453:function(e,a,t){"use strict";t.r(a);var i=t(245),s=t(330),o={props:{starColor:{type:String,default:"#212529"},reviews:{type:Object,default:{list:[],orderRating:null,total:0,average:{one:0,two:0,three:0,four:0,five:0},averageTotal:0}}},name:"header-minimal",components:{Rating:i.a,Sort:s.a},computed:{i19basedOn$1Reviews:()=>"Baseado em $1 avaliações",i19basedOn$1Review:()=>"Baseado em $1 avaliação",i19noReview:()=>"Nenhuma avaliação"},methods:{updateOrderBy:e=>{let{rating:a}=e;return(void 0).$emit("updateOrderByAverage",{rating:a})},onSort(e){this.$emit("onSort",e)}}},r=(t(418),t(46)),n=Object(r.a)(o,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"mt-header--minimal"},[t("div",{staticClass:"rating"},[t("div",{staticStyle:{display:"flex","align-items":"center",gap:"10px"}},[t("rating",{attrs:{color:e.starColor,rating:e.reviews.averageTotal}}),e.reviews.averageTotal>0?t("span",{staticClass:"average"},[e._v(" "+e._s(e.reviews.averageTotal)+" "),t("span",{staticClass:"baseado",staticStyle:{"font-size":"10px",opacity:"0.8"}},[e._v("("+e._s(e.reviews.total>1?e.i19basedOn$1Reviews.replace("$1",e.reviews.total):e.i19basedOn$1Review.replace("$1",e.reviews.total))+")")])]):t("span",{staticClass:"average"},[e._v(" "+e._s(e.reviews.averageTotal)+" "),t("span",{staticClass:"baseado",staticStyle:{"font-size":"10px",opacity:"0.8"}},[e._v("("+e._s(e.i19noReview)+")")])])],1),t("Sort",{on:{onSort:e.onSort}})],1)])}),[],!1,null,null,null);a.default=n.exports}}]);