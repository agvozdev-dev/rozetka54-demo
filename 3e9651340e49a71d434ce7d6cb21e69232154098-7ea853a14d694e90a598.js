/*! For license information please see 3e9651340e49a71d434ce7d6cb21e69232154098-7ea853a14d694e90a598.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[209],{5900:function(e,t){var a;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)){if(a.length){var s=n.apply(null,a);s&&e.push(s)}}else if("object"===i)if(a.toString===Object.prototype.toString)for(var o in a)r.call(a,o)&&a[o]&&e.push(o);else e.push(a.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},7059:function(e,t,a){"use strict";a.d(t,{G:function(){return U},L:function(){return h},M:function(){return E},P:function(){return w},S:function(){return q},_:function(){return o},a:function(){return s},b:function(){return u},c:function(){return c},g:function(){return d},h:function(){return l}});var r=a(7294),n=(a(2369),a(5697)),i=a.n(n);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var c=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,o,l){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);var u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var p,m=["children"],g=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){var t=e.children,a=o(e,m);return r.createElement(r.Fragment,null,r.createElement(g,s({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,a=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,u=o(e,f);return r.createElement("img",s({},u,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},C=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,i=e.shouldLoad,l=void 0===i||i,c=o(e,y),u=c.sizes||(null==t?void 0:t.sizes),d=r.createElement(v,s({},c,t,{sizes:u,shouldLoad:l}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:u})})),d):d};v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},C.displayName="Picture",C.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var b=["fallback"],w=function(e){var t=e.fallback,a=o(e,b);return t?r.createElement(C,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(p=C.propTypes)?void 0:p.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var E=function(e){return r.createElement(r.Fragment,null,r.createElement(C,s({},e)),r.createElement("noscript",null,r.createElement(C,s({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=C.propTypes;var A,N,L=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:i().object.isRequired,alt:L},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],O=new Set,T=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,p=e.class,m=e.onStartLoad,g=e.onLoad,h=e.onError,f=o(e,k),y=i.width,v=i.height,C=i.layout,b=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(y,v,C),w=b.style,E=b.className,L=o(b,S),x=(0,r.useRef)(),T=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);p&&(d=p);var U=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(C,y,v);return(0,r.useEffect)((function(){A||(A=Promise.all([a.e(774),a.e(680)]).then(a.bind(a,8680)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return N=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=x.current.querySelector("[data-gatsby-image-ssr]");return r&&l()?(r.complete?(null==m||m({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==m||m({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)})),void O.add(T)):N&&O.has(T)?void 0:(A.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;x.current&&(x.current.innerHTML=r(s({isLoading:!0,isLoaded:O.has(T),image:i},f)),O.has(T)||(e=requestAnimationFrame((function(){x.current&&(t=n(x.current,T,O,c,m,g,h))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){O.has(T)&&N&&(x.current.innerHTML=N(s({isLoading:O.has(T),isLoaded:O.has(T),image:i},f)),null==m||m({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,r.createElement)(n,s({},L,{style:s({},w,c,{backgroundColor:u}),className:E+(d?" "+d:""),ref:x,dangerouslySetInnerHTML:{__html:U},suppressHydrationWarning:!0}))},U=(0,r.memo)((function(e){return e.image?(0,r.createElement)(T,e):null}));U.propTypes=x,U.displayName="GatsbyImage";var W,_=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],R=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},D=new Set(["fixed","fullWidth","constrained"]),I={src:i().string.isRequired,alt:L,width:R,height:R,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!D.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},q=(W=U,function(e){var t=e.src,a=e.__imageData,n=e.__error,i=o(e,_);return n&&console.warn(n),a?r.createElement(W,s({image:a},i)):(console.warn("Image not loaded",t),null)});q.displayName="StaticImage",q.propTypes=I},2369:function(e){"use strict";var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},9594:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var r=a(7294),n=a(5900),i=a.n(n),s=function(e){var t=e.extraClass,a=e.children,n=i()("container",t);return r.createElement("div",{className:n},a)}},7975:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var r=a(7294),n=a(7059),i=a(1597),s=a(9594),o=function(e){return r.createElement("li",{className:"menu__item"},r.createElement(i.rU,{className:"menu__link",to:e.to},e.pageName))},l=function(){var e=document.getElementById("header-wrapper");e&&e.classList.toggle("header__wrapper--active")},c="476612570",u=function(){var e=(0,i.K2)(c).contentJson.contacts.phone;return r.createElement("header",{className:"header"},r.createElement(s.Z,null,r.createElement("div",{className:"header__wrapper",id:"header-wrapper"},r.createElement(i.rU,{className:"logo",to:"#"},r.createElement(n.S,{className:"logo__img",loading:"eager",layout:"fixed",placeholder:"blurred",src:"../../../../static/images/logo/logo-51x60.png",alt:"Logo",__imageData:a(5707)})),r.createElement("nav",{className:"menu"},r.createElement("button",{className:"menu__btn",type:"button",onClick:l},r.createElement("span",{className:"menu__btn-item"})),r.createElement("ul",{className:"menu__list",id:"menu-list"},r.createElement(o,{pageName:"Главная",to:"/"}),r.createElement(o,{pageName:"О нас",to:"#"}),r.createElement(o,{pageName:"Услуги и цены",to:"#"}),r.createElement(o,{pageName:"Блог",to:"/blog"}),r.createElement(o,{pageName:"Партнеры",to:"#"}),r.createElement(o,{pageName:"Контакты",to:"#contact"}))),r.createElement("div",{className:"header__phone-wrapper"},r.createElement("a",{className:"header__phone-link",href:"tel:"+e},r.createElement("div",{className:"header__phone-number"},r.createElement("svg",{className:"header__phone-icon",width:"25",height:"24",viewBox:"0 0 25 24",fill:"#FFC962",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M20.218 13C19.9948 13 19.7615 12.93 19.5384 12.88C19.0865 12.7818 18.6424 12.6515 18.2097 12.49C17.7391 12.3212 17.2219 12.33 16.7575 12.5146C16.2931 12.6992 15.9144 13.0466 15.6942 13.49L15.4711 13.94C14.4831 13.3982 13.5753 12.7252 12.773 11.94C11.9765 11.149 11.294 10.254 10.7444 9.28L11.1704 9C11.6201 8.78292 11.9725 8.40953 12.1598 7.95169C12.347 7.49385 12.3559 6.98391 12.1847 6.52C12.0237 6.09242 11.8915 5.6548 11.7891 5.21C11.7384 4.99 11.6978 4.76 11.6674 4.53C11.5442 3.82562 11.17 3.18774 10.6122 2.73124C10.0543 2.27474 9.34943 2.02961 8.62451 2.04H5.58161C5.14448 2.03595 4.71159 2.12481 4.31242 2.30053C3.91325 2.47625 3.55717 2.7347 3.26842 3.05828C2.97967 3.38187 2.76503 3.76299 2.63911 4.17571C2.51318 4.58843 2.47894 5.02306 2.5387 5.45C3.07906 9.63938 5.01971 13.5319 8.05412 16.5126C11.0885 19.4934 15.0437 21.3925 19.295 21.91H19.6804C20.4284 21.9111 21.1505 21.6405 21.709 21.15C22.0299 20.867 22.2862 20.5202 22.4611 20.1323C22.6359 19.7445 22.7253 19.3244 22.7233 18.9V15.9C22.7109 15.2054 22.4543 14.5366 21.9974 14.0077C21.5405 13.4788 20.9116 13.1226 20.218 13ZM20.7251 19C20.725 19.142 20.6941 19.2823 20.6346 19.4116C20.5752 19.5409 20.4885 19.6563 20.3803 19.75C20.2673 19.847 20.1348 19.9194 19.9915 19.9625C19.8481 20.0056 19.6972 20.0184 19.5485 20C15.7499 19.5198 12.2215 17.8065 9.51985 15.1303C6.81824 12.4541 5.09719 8.96734 4.62816 5.22C4.61202 5.07352 4.62617 4.92533 4.66975 4.78439C4.71334 4.64345 4.78545 4.51269 4.88174 4.4C4.97679 4.29333 5.09379 4.20784 5.22496 4.14922C5.35612 4.09059 5.49845 4.06018 5.64247 4.06H8.68537C8.92124 4.05483 9.15157 4.13088 9.3367 4.27507C9.52183 4.41926 9.65019 4.62257 9.69967 4.85C9.74024 5.12333 9.79096 5.39333 9.85182 5.66C9.96899 6.18714 10.1249 6.70518 10.3184 7.21L8.89837 7.86C8.77696 7.91492 8.66775 7.99295 8.577 8.0896C8.48626 8.18624 8.41577 8.29961 8.36959 8.42319C8.32341 8.54677 8.30244 8.67813 8.3079 8.80972C8.31335 8.94131 8.34511 9.07054 8.40137 9.19C9.86115 12.2728 12.3746 14.7508 15.5015 16.19C15.7484 16.29 16.0254 16.29 16.2724 16.19C16.3988 16.1454 16.5151 16.0765 16.6143 15.9872C16.7136 15.8979 16.7939 15.7901 16.8505 15.67L17.4794 14.27C18.0037 14.4549 18.5389 14.6085 19.082 14.73C19.3524 14.79 19.6263 14.84 19.9035 14.88C20.1342 14.9288 20.3404 15.0553 20.4867 15.2379C20.633 15.4204 20.7101 15.6475 20.7048 15.88L20.7251 19Z"})),e),r.createElement("span",{className:"header__phone-subtitle"},"Новосибирск"))))))},d=function(e){var t=e.pageTitle,a=e.children,n=t+" | "+(0,i.K2)("1322234328").site.siteMetadata.title;return r.createElement(r.Fragment,null,r.createElement("title",null,n),r.createElement(u,null),r.createElement("main",null,a))}},5707:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAYAAAD6S912AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFEklEQVQ4y42Ua2wUVRTHz+4awYSiIWKaSCSYCkLZlr52252Zu7u0aWuhlJVQqNKWe3e30JaHJrwFwYZEoPCBhyaAUQyFBDUQMDXhUR6h7d5tS62BtpaoGIJ+EVAxsY/dmWPO7NBq4usmZ2f2zDm/+Z97zh3AqAAyQ3LAKLdjlNv0iABdCsB28ptWpksRIN9IW9D06Qm/zZDCbsWYNgaT3IYJKAy2hkCPiCRDigkUhFG+1pBinZU0QZciaWTsZcSwJTgCwCCFFsyQfLEhxRQrsCQe4Q3YH4ah1uUbB1v5W9gXhniEv0PPrBiKXWSMqQXADgIJKpWAYYyKy9gdhK6mpUl4I3gSYBYgNk5C3DMJbE4g340TFUkUY0jRYkgRsoB2I8IBHrSEAX9ZbMk3obvi7XxP064AXD26pKi8bO7b6VlKY6ZL3VcRyN/RcqS84OTuAMTa+W5D8ncTObTflTAsgwDfnKsBgDg584eu83E4UAOIO57RNLZ2htPTkeVSP55X7GtQNbYpJTXv/Ry3+rXPy95E3DmRYn+/zp+kXPw2A4Z7zJKX27F7OQHrYu28GXHdtKkv576hqtpA94mKPXi75hPsC7dhf/hz/LG2ZuWyQmeeR+uble5Zj7h+KuUYUtTTltGUEDDR5ZshQFyXvHdDadCjaHd+vVJ9HntCGGvnGI8kjO7xZujKuf2LpmW71YH9WxbUUA7lWmMHpOyQIfnh4Va+BmA6TJ2Re/BUY+AR9oaNkTaOGBUxQ3LdkDyOUTFo+u6sOJCW6anNdqtN457LAsolhiHFQSLP1iVfilGx+eFl/mz+XNb9Q/MyxBvBuC65YUiORuJqmi45Ynfw0XvbFrya6VKvDrXyZIyKTcQgVkJql4AHl6oBAOzziny3f7pQidgVjD+GYVSQ0sdQHbsEXvtgSW1GjnK1sMD71MOWapNBLPqxGZLX65KfwVvhCneueqH/0wrEL4NxPZJQ9Wcg7SX2hIYOby/bMcOZdxZ7w6/rkp82JK/DDm4D7DQ77L5/seqllcsK4fkU96oDm+cj3gqNmE0YU0b3cRPYH44UFXjPuHLVLRtXFMP9i1XTiUENps6YRwbv1QL2hEq3ripNLsxn31v7qOsJhabpEa5jdxDbjy05kjrH03FsZ+AF7AmW4t1a60yTwsSxKTakuDbcyg8AzIQp03NX79swj0YkRoqsvdRNdb3hjqICb3OuR9tqdfgg5RpSFKF5ljurCbjZkMKLPUHw+/1gm+yeuLDEd+/BxUrETmGq1GlsugT2ffbah85Mpa22snDyWl4ElEO5xCCWNdjWZ6hDOER5vmN2uhtcucrxyEfliF+FYrF2bowkhnpw38b5R9OzlOPJL7ogMN/voJzRfBPYWUV/HOYXBxvB52WOp6fkQEpqXsOxnWXUAAM7OJrWH/6uanHB2Wy3und2hgcYYw7KMb80Ue7ArioAXQZHDZ7QKMjuzFRhTo6WtrDE17utrvj+9lWv/NywpuS31dWFA4qitfn93gyNMTMWIBWG2mpG7S9LURTz6sxU7HOyFXDlafVpWUpzWpZ6xpmpns5yqee9jK3xMg1UVbOPHz9+NOdvl9frpbdCwVxmy/czKr/e72Mtfh87S+bzskuMsTpNo0o0G8X6fD7418USpdisawpj7BRjrMmyU5ZvNOY/F6mk0VEUxebxmBt/VNO0u2R0TyXSM1JGsf9rUSCVpaoqAWcyxr6wbCb56Nk/wf4Af3N/slDEBkQAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/rozetka54-demo/static/8356f4b50fe08a37f0a78542318292e8/f4772/logo-51x60.png","srcSet":"/rozetka54-demo/static/8356f4b50fe08a37f0a78542318292e8/f4772/logo-51x60.png 51w","sizes":"51px"},"sources":[{"srcSet":"/rozetka54-demo/static/8356f4b50fe08a37f0a78542318292e8/ab05b/logo-51x60.webp 51w","type":"image/webp","sizes":"51px"}]},"width":51,"height":60}')}}]);
//# sourceMappingURL=3e9651340e49a71d434ce7d6cb21e69232154098-7ea853a14d694e90a598.js.map