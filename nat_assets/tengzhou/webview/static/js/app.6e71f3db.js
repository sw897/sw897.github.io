(function(){var e={4258:function(e,t,a){"use strict";var n=a(1406),o=a(3648);const r=(0,o.Uk)(">");function i(e,t){const a=(0,o.up)("router-view"),n=(0,o.up)("van-number-keyboard");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(a,null,{default:(0,o.w5)((({Component:t})=>[((0,o.wg)(),(0,o.j4)(o.Ob,null,[e.$route.meta.keepAlive?((0,o.wg)(),(0,o.j4)((0,o.LL)(t),{key:e.$route.name})):(0,o.kq)("",!0)],1024)),e.$route.meta.keepAlive?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)((0,o.LL)(t),{key:e.$route.name},{default:(0,o.w5)((()=>[r])),_:2},1024))])),_:1}),(0,o.Wm)(n,{"safe-area-inset-bottom":""})],64)}var s=a(3744);const l={},u=(0,s.Z)(l,[["render",i]]);var h=u,p=a(2119);const c={class:"home"},d={action:"/"};function m(e,t,a,n,r,i){const s=(0,o.up)("van-field"),l=(0,o.up)("van-col"),u=(0,o.up)("van-search"),h=(0,o.up)("van-row"),p=(0,o.up)("van-cell-group"),m=(0,o.up)("van-picker"),f=(0,o.up)("van-popup"),g=(0,o.up)("MapVue");return(0,o.wg)(),(0,o.iD)("div",c,[(0,o.Wm)(p,{class:"cell",size:"large"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{align:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{span:"8"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{modelValue:r.result,"onUpdate:modelValue":t[0]||(t[0]=e=>r.result=e),"is-link":"",readonly:"",name:"picker",label:"",placeholder:"",onClick:t[1]||(t[1]=e=>r.showPicker=!0)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(l,{span:"16"},{default:(0,o.w5)((()=>[(0,o._)("form",d,[(0,o.Wm)(u,{modelValue:r.value,"onUpdate:modelValue":t[2]||(t[2]=e=>r.value=e),placeholder:"请输入搜索关键词",onSearch:i.onSearch,onCancel:i.onCancel},null,8,["modelValue","onSearch","onCancel"])])])),_:1})])),_:1})])),_:1}),(0,o.Wm)(f,{show:r.showPicker,"onUpdate:show":t[4]||(t[4]=e=>r.showPicker=e),position:"bottom"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{columns:r.columns,onConfirm:i.onConfirm,onCancel:t[3]||(t[3]=e=>r.showPicker=!1)},null,8,["columns","onConfirm"])])),_:1},8,["show"]),(0,o.Wm)(g)])}var f=a(7495);const g=e=>((0,o.dD)("data-v-53fda619"),e=e(),(0,o.Cn)(),e),v=g((()=>(0,o._)("div",{id:"map"},null,-1))),w=(0,o.Uk)("名称："),y=(0,o.Uk)("电话："),b={class:"tel"},k=(0,o.Uk)("去这里");function _(e,t,a,n,r,i){const s=(0,o.up)("van-button"),l=(0,o.up)("van-popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[v,(0,o.Wm)(l,{show:r.show,"onUpdate:show":t[0]||(t[0]=e=>r.show=e),overlay:!1,position:"bottom",style:{height:"180px"},round:"",class:"popup"},{default:(0,o.w5)((()=>[(0,o._)("ul",null,[(0,o._)("li",null,[w,(0,o._)("span",null,(0,f.zw)(r.popupName),1)]),(0,o._)("li",null,"地址："+(0,f.zw)(r.popupAddress),1),(0,o._)("li",null,[y,(0,o._)("label",b,(0,f.zw)(r.popupTel),1)]),(0,o.Wm)(s,{type:"primary",block:"",round:"",class:"button",onClick:e.gohere},{default:(0,o.w5)((()=>[k])),_:1},8,["onClick"])])])),_:1},8,["show"])],64)}var C=a(6158),S=a.n(C),x=a(9669),L=a.n(x),z=a(129),D=a.n(z),j=a(1595);L().defaults.baseURL="",L().defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",L().defaults.timeout=1e4,L().interceptors.request.use((e=>e),(e=>Promise.reject(e))),L().interceptors.response.use((e=>200==e.status?Promise.resolve(e):Promise.reject(e)),(e=>((0,j.g)({type:"danger",message:"网络请求失败，请刷新重试"}),Promise.reject(e))));var M={post(e,t){return new Promise(((a,n)=>{L()({method:"post",url:e,data:D().stringify(t)}).then((e=>{a(e.data)})).catch((e=>{n(e)}))}))},get(e,t){return new Promise(((a,n)=>{L()({method:"get",url:e,params:t}).then((e=>{a(e.data)})).catch((e=>{n(e)}))}))}};function P(){return M.get("https://highmap.cn/nat_assets/tengzhou/webview/admin2.geojson")}function B(){return M.get("https://highmap.cn/nat_assets/tengzhou/webview/admin4.geojson")}function W(){return M.get("https://highmap.cn/nat_assets/tengzhou/webview/config.json")}function F(){return M.get("https://highmap.cn//nat_assets/tengzhou/data/滕州核酸检测点.geojson")}var V=a(6412),I=a(3907),U=(0,I.MT)({state:{querykey:"",hesuanData:null},getters:{},mutations:{querykey:(e,t)=>{e.querykey=t},hesuanData:(e,t)=>{e.hesuanData=t}},actions:{},modules:{}}),O={data(){let e=null,t={type:"FeatureCollection",features:[]},a="",n=null,o=!1,r="",i="",s="";return{map:e,HighlightData:t,filterField:a,boundaryBbox:n,show:o,popupName:r,popupAddress:i,popupTel:s}},activated(){this.map&&"function"==typeof this.map.resize&&this.map.resize()},mounted(){this.eventBus=(0,o.FN)()?.appContext.config.globalProperties.$eventBus,W().then((e=>{this.filterField=e["filter"]["filed"],this.init(),this.eventBus.on("changeFiler",(e=>{this.changeFiler(e)}))})),this.eventBus.on("showSearch",(e=>{this.showSearch(e)}))},methods:{init(){let e=this;e.map=new(S().Map)({container:"map",center:[117.12,35],zoom:3,bearing:0,pitch:0,style:"/nat_assets/mapdb/styles/tx-map-default-3857/style.json"}),e.map.on("style.load",e.addMarker)},addMarker(){var e=[{url:"./marke1.png",name:"highlightMarker"},{url:"./marke2.png",name:"hesuanMarker"}],t=[];e.map((e=>{t.push(this.addMarkerStep1(e["url"],e["name"]))})),Promise.all(t).then((e=>{this.addBoundary()}))},addMarkerStep1(e,t){return new Promise(((a,n)=>{let o=this;this.map.loadImage(e,(function(e,r){if(e)return console.log(e),void n(e);o.map.addImage(t,r),a(!0)}))}))},addBoundary(){let e=this;F().then((t=>{e.addDataLayer(t),e.addHighLightMarker(),U.commit("hesuanData",t)})),P().then((t=>{e.addBoundaryLayer(t);var a=(0,V.Z)(t);e.boundaryBbox=a,e.map.fitBounds(a,{padding:{top:10,bottom:10,left:10,right:10}})})),B().then((t=>{e.addFilterLayer(t)}))},addBoundaryLayer(e){this.map.addSource("boundary",{type:"geojson",data:e}),this.map.addLayer({id:"boundary",source:"boundary",type:"line",maxzoom:14,minzoom:0,paint:{"line-color":"red","line-width":1}})},addDataLayer(e){this.map.addSource("hesuan",{cluster:!0,clusterMaxZoom:12,clusterRadius:50,type:"geojson",data:e}),this.map.addLayer({id:"hesuan",source:"hesuan",filter:["has","point_count"],maxzoom:22,minzoom:0,type:"circle",paint:{"circle-radius":["step",["get","point_count"],20,360,30,700,40],"circle-color":["step",["get","point_count"],"#f7fcb9",360,"#addd8e",700,"#31a354"]}}),this.map.addLayer({id:"hesuan_text",source:"hesuan",filter:["has","point_count"],maxzoom:22,minzoom:0,type:"symbol",layout:{"text-allow-overlap":!1,"text-field":"{point_count_abbreviated}","text-font":["Source Han Sans Normal"],"text-offset":[0,0],"text-size":12},paint:{"text-color":"#000000"}}),this.map.addLayer({id:"hesuan_marker",source:"hesuan",filter:["!",["has","point_count"]],type:"symbol",layout:{"icon-allow-overlap":!0,"icon-ignore-placement":!0,"icon-image":"hesuanMarker","icon-size":.5,"symbol-placement":"point"},paint:{"text-color":"#000000"}}),this.addQueryEvent()},addHighLightMarker(){this.map.addSource("highlight",{type:"geojson",data:this.HighlightData}),this.map.addLayer({id:"highlight_marker",source:"highlight",type:"symbol",layout:{"icon-allow-overlap":!0,"icon-ignore-placement":!0,"icon-image":"highlightMarker","icon-size":.3,"symbol-placement":"point"},paint:{"text-color":"#000000"}})},addFilterLayer(e){this.map.addSource("filter_boundary",{type:"geojson",data:e}),this.map.addLayer({id:"filter_boundary",source:"filter_boundary",filter:["match",["get",this.filterField],"",!0,!1],type:"line",maxzoom:14,minzoom:0,paint:{"line-color":"red","line-width":1}},"boundary")},changeFiler(e){if(this.map.getLayer("filter_boundary")){this.map.setFilter("filter_boundary",["==",["get",this.filterField],e]);let a=this.map.getSource("filter_boundary")._data["features"].filter((t=>{if(t["properties"][this.filterField]==e)return t}));var t;t=0==a.length?this.boundaryBbox:(0,V.Z)({type:"FeatureCollection",features:a}),this.map.fitBounds(t,{padding:{top:10,bottom:10,left:10,right:10}})}},addQueryEvent(){this.map.on("click","hesuan_marker",this.showInfo),this.map.on("click",this.hideInfo)},showInfo(e){let t=e.features[0];this.showInfoMap(t)},showInfoMap(e){let t=this;var a=setInterval((function(){if(t.map.getSource("highlight")){clearInterval(a),t.map.getSource("highlight").setData(e);let n=e["geometry"]["coordinates"];t.map.isMoving()&&t.map.stop(),t.map.flyTo({center:n,zoom:16}),t.showPanel(e)}}),10)},showPanel(e){this.show=!0,this.popupAddress=e["properties"]["地址"],this.popupName=e["properties"]["name"],this.popupTel=e["properties"]["联系电"],this.eventBus.emit("changeValue",this.popupName)},showSearch(e){let t=this;var a=setInterval((function(){t.map.getSource("hesuan")&&t.map.isSourceLoaded("hesuan")&&(clearInterval(a),t.showSearchStep1(e))}),10)},hideInfo(){this.show=!1,this.map.getSource("highlight").setData(this.HighlightData),this.eventBus.emit("changeValue","")},showSearchStep1(e){let t=this.hesuanData["features"],a=t.filter((t=>{if(t["properties"]["name"]==e)return!0}));this.showInfoMap(a[0])}},computed:{hesuanData(){return U.state.hesuanData}}};const T=(0,s.Z)(O,[["render",_],["__scopeId","data-v-53fda619"]]);var Z=T,q={data(){const e="",t="全部",a=!1,n=[""],o=(0,p.tv)();return{value:e,result:t,showPicker:a,columns:n,router:o}},activated(){let e=this.$route.query.id;e&&(this.value=e,this.showSearchVal(e))},mounted(){let e=this;e.eventBus=(0,o.FN)()?.appContext.config.globalProperties.$eventBus,this.eventBus.on("changeValue",(t=>{e.value=t})),e.getColums()},methods:{onConfirm(e){this.result=e,this.eventBus.emit("changeFiler",this.result),this.showPicker=!1},getColums(){W().then((e=>{this.columns=e["filter"]["data"]}))},onSearch(){U.commit("querykey",this.value),this.router.push({path:"about"})},onCancel(){},showSearchVal(e){this.eventBus.emit("showSearch",e)}},components:{MapVue:Z}};const H=(0,s.Z)(q,[["render",m],["__scopeId","data-v-6deb4043"]]);var $=H;function A(e,t,a,n,r,i){const s=(0,o.up)("list_comVue");return(0,o.wg)(),(0,o.j4)(s)}const N=e=>((0,o.dD)("data-v-57f3c60e"),e=e(),(0,o.Cn)(),e),Y=["src"],E=(0,o.Uk)("名称："),Q=["onClick"],R=(0,o.Uk)("电话："),K={class:"tel"},G=["src"],J=N((()=>(0,o._)("li",null,"去这里",-1)));function X(e,t,a,r,i,s){const l=(0,o.up)("van-nav-bar"),u=(0,o.up)("van-col"),h=(0,o.up)("van-row"),p=(0,o.up)("van-cell"),c=(0,o.up)("van-list");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l,{title:"采样点搜索结果","left-text":"返回","left-arrow":"",onClickLeft:s.onClickLeft},null,8,["onClickLeft"]),(0,o.Wm)(c,{loading:i.loading,"onUpdate:loading":t[0]||(t[0]=e=>i.loading=e),finished:i.finished,"finished-text":"没有更多了",onLoad:s.onLoad},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.result,(e=>((0,o.wg)(),(0,o.j4)(p,{key:e.name,onClick:t=>s.showMap(e)},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{align:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{span:"5"},{default:(0,o.w5)((()=>[(0,o._)("img",{src:i.imgsrc,class:"img"},null,8,Y)])),_:1}),(0,o.Wm)(u,{span:"15"},{default:(0,o.w5)((()=>[(0,o._)("li",null,[E,(0,o._)("span",null,(0,f.zw)(e.name),1)]),(0,o._)("li",null,"地址："+(0,f.zw)(e.地址),1),(0,o._)("li",{onClick:(0,n.iM)((t=>s.showTel(e.联系电)),["stop"])},[R,(0,o._)("label",K,(0,f.zw)(e.联系电),1)],8,Q)])),_:2},1024),(0,o.Wm)(u,{span:"4"},{default:(0,o.w5)((()=>[(0,o._)("img",{src:i.navSrc,class:"nav"},null,8,G),J])),_:1})])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1},8,["loading","finished","onLoad"])],64)}var ee=a(4221),te={data(){var e=[],t=!1,a=!1;return{result:e,loading:t,finished:a,imgsrc:"./title.png",navSrc:"./nav.png",router:(0,p.tv)()}},mounted(){},methods:{onClickLeft(){history.back()},getValue(){if(this.hesuanData){let e=this.hesuanData["features"];const t=new ee.Z(e,{keys:["properties.name"]});this.result=t.search(this.key).map((e=>e["item"]["properties"])),this.result=this.result.slice(0,30),this.finished=!0}},onLoad(){this.getValue()},showTel(e){console.log(e)},showMap(e){let t=e["name"];this.router.push({path:"/",query:{id:t}})}},computed:{key(){return U.state.querykey},hesuanData(){return U.state.hesuanData}}};const ae=(0,s.Z)(te,[["render",X],["__scopeId","data-v-57f3c60e"]]);var ne=ae,oe={components:{list_comVue:ne}};const re=(0,s.Z)(oe,[["render",A]]);var ie=re;const se=[{path:"/",name:"home",component:$,meta:{keepAlive:!0}},{path:"/about",name:"about",meta:{keepAlive:!1},component:ie}],le=(0,p.p7)({history:(0,p.r5)(),routes:se});var ue=le,he=a(9391),pe=a(4383);a(5110);let ce=(0,n.ri)(h);ce.config.globalProperties.$eventBus=(0,he.Z)(),ce.config.globalProperties.$hesuanData=null,ce.use(U).use(ue).use(pe.ZP).mount("#app")},4654:function(){}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,r){if(!n){var i=1/0;for(h=0;h<e.length;h++){n=e[h][0],o=e[h][1],r=e[h][2];for(var s=!0,l=0;l<n.length;l++)(!1&r||i>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(s=!1,r<i&&(i=r));if(s){e.splice(h--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var h=e.length;h>0&&e[h-1][2]>r;h--)e[h]=e[h-1];e[h]=[n,o,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,i=n[0],s=n[1],l=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(l)var h=l(a)}for(t&&t(n);u<i.length;u++)r=i[u],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(h)},n=self["webpackChunkwebview"]=self["webpackChunkwebview"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(4258)}));n=a.O(n)})();