(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-center"],{1602:function(t,n,e){"use strict";var i=e("d452"),o=e.n(i);o.a},"8bbc":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,"\n.clear-img[data-v-737c8bf0]{width:%?48?%;height:%?48?%;margin-top:%?25?%\n}\n.clear-img[data-v-737c8bf0],.suffix[data-v-737c8bf0]{display:inline-block\n}\n.suffix[data-v-737c8bf0]{line-height:%?90?%;font-size:%?30?%;color:#555\n}\n.icon-share[data-v-737c8bf0]{display:inline-block;float:right;color:#fff;margin-left:-80px;margin-top:20px\n}",""])},d452:function(t,n,e){var i=e("8bbc");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("68d83cb6",i,!0,{sourceMap:!1,shadowMode:!1})},f919:function(t,n,i){"use strict";i.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"center"},[e("v-uni-view",{staticClass:"logo"},[e("v-uni-image",{staticClass:"logo-img",attrs:{src:"../../static/logo.png",mode:"aspectFill"}})],1),e("v-uni-view",{staticClass:"center-list"},[e("v-uni-view",{staticClass:"center-list-item border-bottom",attrs:{"hover-class":"center-list-item-hover"},on:{click:function(n){n=t.$handleEvent(n),t.goCollect(n)}}},[e("v-uni-text",{staticClass:"list-icon"},[t._v("")]),e("v-uni-text",{staticClass:"list-text"},[t._v("收藏图片")]),e("v-uni-text",{staticClass:"navigat-arrow"},[t._v("")])],1),e("v-uni-view",{staticClass:"center-list-item",attrs:{"hover-class":"center-list-item-hover"},on:{click:function(n){n=t.$handleEvent(n),t.goCollectGroup(n)}}},[e("v-uni-text",{staticClass:"list-icon"},[t._v("")]),e("v-uni-text",{staticClass:"list-text"},[t._v("收藏图集")]),e("v-uni-text",{staticClass:"navigat-arrow"},[t._v("")])],1)],1)],1)},c=[],r=i("a34a"),a=i.n(r);function s(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function u(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function l(t,n,e){return n&&u(t.prototype,n),e&&u(t,e),t}var f=function(){function t(){s(this,t)}return l(t,null,[{key:"getDirectorySize",value:function(t){return new Promise(function(n){plus.io.resolveLocalFileSystemURL(t,function(t){var i=0,o=t.createReader();function c(t,e){e>=t&&n(i)}o.readEntries(function(t){var o=t.length;o||n(0);for(var r=0,a=0;a<o;a++)t[a].isFile?t[a].file(function(t){i+=9766e-7*t.size,r++,c(o,r)},function(t){uni.showToast({icon:"none",title:t.message}),n(0)}):t[a].getMetadata(function(t){i+=9766e-7*t.size,r++,c(o,r)},function(){uni.showToast({icon:"none",title:e.message}),n(0)})},function(t){uni.showToast({icon:"none",title:"文件读取失败"}),n(0)})},function(t){uni.showToast({icon:"none",title:"文件路径读取失败"}),n(0)})})}},{key:"clearDirectory",value:function(t){return new Promise(function(n){plus.io.resolveLocalFileSystemURL(t,function(t){t.removeRecursively(function(t){uni.showToast({icon:"none",title:"缓存清理完成"}),n()},function(t){uni.showToast({icon:"none",title:t.message}),n()})},function(t){uni.showToast({icon:"none",title:"文件路径读取失败"}),n()})})}}]),t}(),v=i("2f62");function p(t,n,e,i,o,c,r){try{var a=t[c](r),s=a.value}catch(u){return void e(u)}a.done?n(s):Promise.resolve(s).then(i,o)}function h(t){return function(){var n=this,e=arguments;return new Promise(function(i,o){var c=t.apply(n,e);function r(t){p(c,i,o,r,a,"next",t)}function a(t){p(c,i,o,r,a,"throw",t)}r(void 0)})}}function d(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},i=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.forEach(function(n){w(t,n,e[n])})}return t}function w(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var g=i("3b09"),m=g.baseUrl,b={data:function(){return{cached:0}},onShow:function(){},methods:d({},Object(v["b"])(["getCollectGroup","getCollect"]),{showCache:function(){var t=h(a.a.mark(function t(){var n,e;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f.getDirectorySize("_doc/");case 2:n=t.sent,e="KB",n>1024&&(e="MB",n/=1024),this.cached=n.toFixed(2)+e;case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),clearCache:function(){var t=h(a.a.mark(function t(){var n=this;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:uni.showModal({content:"确认清除缓存?",confirmColor:"#FF80AB",cancelColor:"#CCCCCC",confirmText:"清除",success:function(){var t=h(a.a.mark(function t(){return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f.clearDirectory("_doc/");case 2:n.showCache();case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()});case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),goCollectGroup:function(){this.getCollectGroup(),uni.navigateTo({url:"/pages/list/list?collect=1"})},goCollect:function(){this.getCollect(),uni.navigateTo({url:"/pages/list/collect"})},checkVersion:function(){var t=m+"/app/update",n={appid:plus.runtime.appid,version:plus.runtime.version,os:plus.os.name};uni.showLoading({title:"检查新版本"}),uni.request({url:t,data:n,success:function(t){if(200==t.statusCode){var n=t.data&&t.data.data;1===n.status?uni.showModal({title:"更新提示",content:n.description||"",confirmText:"更新",success:function(t){t.confirm&&plus.runtime.openURL(n.url)}}):uni.showToast({icon:"none",title:"已是最新版本"})}},complete:function(){uni.hideLoading()}})}})},C=b,y=(i("1602"),i("2877")),x=Object(y["a"])(C,o,c,!1,null,"737c8bf0",null);x.options.__file="center.vue";n["default"]=x.exports}}]);