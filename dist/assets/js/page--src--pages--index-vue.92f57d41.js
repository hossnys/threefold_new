(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/yty":function(a,e,t){},TbbF:function(a,e,t){"use strict";t("/yty")},a918:function(a,e,t){},cgkY:function(a,e,t){"use strict";t("a918")},iyQ6:function(a,e,t){"use strict";t.r(e);var n=t("MtIX"),s=t("IGkE"),r={props:["products","main"],methods:{img:function(a){return a?a.src?a.src:a:""}}},i=(t("cgkY"),t("KHd+")),o=Object(i.a)(r,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"py-12 mb-5"},[t("div",{staticClass:"w-full text-center"},[null!==a.main?t("p",{staticClass:"text-sm tracking-widest text-gray-700"},[a._v(a._s(a.main.subtitle))]):a._e(),null!==a.main?t("h2",{staticClass:"text-4xl mt-2 mb-6 font-semibold leading-tight font-heading"},[a._v("\n      "+a._s(a.main.title)+"\n    ")]):a._e()]),t("div",{staticClass:"grid grid-cols-1 gap-4 sm:grid-cols-2"},a._l(a.products,(function(e,n){return t("g-link",{key:n,staticClass:"m-auto rounded overflow-hidden transition duration-500",attrs:{to:e.url}},[t("div",{staticClass:"px-2 py-2"},[t("g-image",{staticClass:"py-4",attrs:{src:a.img(e.image)}}),t("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text-gray-700 text-base",domProps:{innerHTML:a._s(e.content)}})],1)])})),1)])}),[],!1,null,"465beda8",null).exports,g=t("qaXD"),l=t("akyF"),d=t("PIiv"),c=t("RRjm"),m=t("fuxi"),p={props:["news"],methods:{img:function(a){return a?a.src?a.src:a:""}}},u=Object(i.a)(p,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"bg-white"},[t("div",{staticClass:"max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8"},[t("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text-center text-base leading-6 font-semibold uppercase text-gray-600 tracking-wider",domProps:{innerHTML:a._s(a.news.content)}}),t("div",{staticClass:"mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8"},a._l(a.news.partners,(function(e){return t("g-link",{key:e.id,staticClass:"col-span-1 flex justify-center py-8 px-8 m-1 bg-gray-100",attrs:{to:e.path,target:"_blank"}},[t("img",{staticClass:"max-h-12",attrs:{src:a.img(e.logo)}})])})),1)])])}),[],!1,null,null,null).exports,w=t("phRe"),k={components:{Header:n.a,SolutionsHeader:s.a,ShowcaseProducts:o,Comparison:g.a,NewCard:l.a,BrandPanel:d.a,logoShowcase:m.a,CallToAction:c.a,InTheNews:u,SignUp:w.a},metaInfo:function(){return{title:this.$page.markdownPage.title}}},P=(t("TbbF"),null),h=Object(i.a)(k,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("Layout",{attrs:{hideHeader:!0,disableScroll:!0}},[t("div",{staticClass:"container-fluid sm:pxi-0 mx-auto overflow-x-hidden"},[a.$page.markdownPage.solution_image?t("g-image",{attrs:{src:a.$page.markdownPage.solution_image.src}}):a._e()],1),t("div",{staticClass:"container sm:pxi-0 mx-auto overflow-x-hidden py-5"},[a.$page.markdownPage.header?t("SolutionsHeader",{attrs:{header:a.$page.markdownPage.header}}):a._e(),a.$page.markdownPage.logos.length>0?t("logoShowcase",{attrs:{logos:a.$page.markdownPage.logos}}):a._e(),a.$page.markdownPage.productData&&a.$page.markdownPage.productData.length>0?t("ShowcaseProducts",{attrs:{main:a.$page.markdownPage.productsMain,products:a.$page.markdownPage.productData}}):a._e(),t("Header",{attrs:{title:a.$page.markdownPage.header_title,image:a.$page.markdownPage.header_image,altImg:a.$page.markdownPage.header_altImg,excerpt:a.$page.markdownPage.header_excerpt,button:a.$page.markdownPage.button,link:a.$page.markdownPage.link}}),a.$page.markdownPage.comparisonSecs&&a.$page.markdownPage.comparisonSecs.length>0?t("Comparison",{attrs:{main:a.$page.markdownPage.comparisonMain,sections:a.$page.markdownPage.comparisonSecs}}):a._e(),a.$page.markdownPage.brandPanel?t("BrandPanel",{attrs:{brand:a.$page.markdownPage.brandPanel}}):a._e(),a.$page.markdownPage.inTheNews?t("InTheNews",{attrs:{news:a.$page.markdownPage.inTheNews}}):a._e()],1),t("div",{staticClass:"container-fluid sm:pxi-0 mx-auto overflow-x-hidden"},[a.$page.markdownPage.solution_image2?t("g-image",{attrs:{src:a.$page.markdownPage.solution_image2.src}}):a._e(),a.$page.markdownPage.cta?t("CallToAction",{attrs:{cta:a.$page.markdownPage.cta}}):a._e()],1)])}),[],!1,null,"5d184914",null);"function"==typeof P&&P(h);e.default=h.exports}}]);