(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{360:function(t,e,r){var content=r(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("1c6aa508",content,!0,{sourceMap:!1})},370:function(t,e,r){"use strict";r(360)},371:function(t,e,r){var n=r(18)(!1);n.push([t.i,".shop .spinner-wrapper[data-v-215ed5f0]{padding:40px 0;display:flex;align-items:center;justify-content:center;width:100%}.shop .heading[data-v-215ed5f0]{font-size:24px;color:#000}.shop .search-wrapper[data-v-215ed5f0]{width:50%}.shop_items[data-v-215ed5f0]{display:grid;grid-template-columns:repeat(5,1fr);grid-gap:20px;gap:20px}@media(max-width:900px){.shop_items[data-v-215ed5f0]{grid-template-columns:repeat(4,1fr)}}@media(max-width:730px){.shop_items[data-v-215ed5f0]{grid-template-columns:repeat(3,1fr)}}@media(max-width:570px){.shop_items[data-v-215ed5f0]{grid-template-columns:repeat(2,1fr)}}@media(max-width:420px){.shop_items[data-v-215ed5f0]{grid-template-columns:repeat(1,1fr)}}",""]),t.exports=n},390:function(t,e,r){"use strict";r.r(e);r(25),r(140);var n=r(9),c=(r(50),r(356)),o=r.n(c),d={name:"ShopPage",data:function(){return{search:"",client:null,products:null}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.client=o.a.buildClient({domain:"jivana-spices.myshopify.com",storefrontAccessToken:"a690ca678ddc3b84bbbf089ce89b81e3"}),e.next=3,t.client.product.fetchAll();case 3:t.products=e.sent;case 4:case"end":return e.stop()}}),e)})))()}},l=(r(370),r(5)),component=Object(l.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container container_spacing"},[e("div",{staticClass:"shop"},[e("div",{staticClass:"shop_search"},[e("div",{staticClass:"heading mb-8"},[t._v("Quick Search")]),t._v(" "),e("div",{staticClass:"search-wrapper"},[e("Input",{staticClass:"mb-24",attrs:{model:t.search,background:"transparent",border:"1px solid black","text-colour":"black",placeholder:"What are you looking for?"},on:{"update:model":function(e){t.search=e}}})],1)]),t._v(" "),t.products?e("div",{staticClass:"shop_items"},t._l(t.products,(function(t,r){return e("Product",{key:"product_".concat(r),attrs:{product:t}})})),1):e("div",{staticClass:"spinner-wrapper"},[e("Spinner",{attrs:{colour:"black"}})],1)])])}),[],!1,null,"215ed5f0",null);e.default=component.exports;installComponents(component,{Input:r(87).default,Product:r(234).default,Spinner:r(232).default})}}]);