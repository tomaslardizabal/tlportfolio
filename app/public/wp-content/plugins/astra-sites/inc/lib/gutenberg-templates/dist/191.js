"use strict";(globalThis.webpackChunkast_block_templates=globalThis.webpackChunkast_block_templates||[]).push([[191],{6191:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});var o=r(5711),s=r(5940),a=r(7363),n=r(7009),l=r(5806),c=r(5302),i=r(8096),u=r(10);const p=a.forwardRef((function({title:e,titleId:t,...r},o){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"}))}));var d=r(6486),g=r(2154),m=r(972);function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},y.apply(this,arguments)}const{site_url:f}=ast_block_template_vars,b=(0,o.Z)((0,s.Z)((e=>{const{getFilterBlocksByCategory:t,getFilterBlocksPagesByCategory:r}=e("ast-block-templates");return{filterBlocksByCategory:t(),filterBlocksPagesByCategory:r()}})),(0,i.Z)((e=>{const{setFavorites:t,setFilterBlocksByCategory:r,setFilterBlocksPagesByCategory:o}=e("ast-block-templates");return{setFavorites:t,setFilterBlocksByCategory:r,setFilterBlocksPagesByCategory:o}})))((({item:e,className:t,setFavorites:r,setFilterBlocksByCategory:o,filterBlocksByCategory:s,filterBlocksPagesByCategory:l,setFilterBlocksPagesByCategory:i,...b})=>{const{favorites:h,currentScreen:v}=(0,c.Z)((e=>{const{getFavorites:t,getCurrentScreen:r}=e("ast-block-templates");return{favorites:t(),currentScreen:r()}})),k="all-blocks-grid"===v?"block":"page",[w,E]=(0,a.useState)(h[k]?.includes(+e.ID));return React.createElement("button",y({className:(0,n.AK)("flex items-center justify-center rounded-full p-2 bg-white cursor-pointer border-0 focus:outline-none",w?"":"text-icon-secondary",t),onClick:async t=>{t?.preventDefault(),t?.stopPropagation();try{await(0,u.Z)({path:`${f}/wp-json/gutenberg-templates/v1/favorite`,data:{type:e.type,block_id:e.ID,status:!w},method:"POST",headers:{"X-WP-Nonce":ast_block_template_vars.rest_api_nonce,"content-type":"application/json"}})}catch(e){console.error(e)}let a={...h};a=w?{...h,[k]:h[k].filter((t=>t!==(0,d.parseInt)(e.ID)))}:{...h,[k]:[...new Set([...h[k],(0,d.parseInt)(e.ID)])]},E(!w),r(a),a[k].length||"favorite"!==s&&"favorite"!==l||("block"===k&&o(""),"page"===k&&i(""),g.Z.emit("reset-list-count"))}},b),React.createElement(m.Z,{content:!w&&"Add to favorites"},React.createElement(p,{className:(0,n.AK)("w-6 h-6 transition-colors ease-out duration-150",w?"fill-favorite text-favorite":"hover:fill-favorite hover:text-favorite")})))})),h=e=>{const t=["skip","logo","fav-icon"];for(const r of t)if(e.includes(r))return!0;return!1},v={linearTween:(e,t,r,o)=>r*e/o+t,easeInQuad:(e,t,r,o)=>r*(e/=o)*e+t,easeOutQuad:(e,t,r,o)=>-r*(e/=o)*(e-2)+t,easeInOutQuad:(e,t,r,o)=>(e/=o/2)<1?r/2*e*e+t:-r/2*(--e*(e-2)-1)+t,easeInCubic:(e,t,r,o)=>r*(e/=o)*e*e+t,easeOutCubic:(e,t,r,o)=>(e/=o,r*(--e*e*e+1)+t),easeInOutCubic:(e,t,r,o)=>(e/=o/2)<1?r/2*e*e*e+t:r/2*((e-=2)*e*e+2)+t};Object.seal(v);const k=v,{spectra_common_styles:w,is_rtl:E}=ast_block_template_vars,_="visible",C=(0,o.Z)((0,s.Z)((e=>{const{getDisableAi:t,getDisablePreview:r,getTogglePopup:o}=e("ast-block-templates");return{disableAi:t(),disablePreview:r(),togglePopup:o()}})))((0,a.memo)((({item:e,content:t,stylesheet:r,astraCustomizer:o,globalStylesheet:s,colorPalette:c,dynamicContent:i,selectedImages:u,disableAi:p,togglePopup:d,email:g,phone:m,address:y})=>{const f=(0,a.useRef)(null),v=(0,a.useRef)(null),C=e["thumbnail-image-url"]||"",x=e["featured-image-url"]||"";let B=0,P=0,R=0;const[O,I]=(0,a.useState)({importing:!1}),[$,N]=(0,a.useState)(`${ast_block_template_vars.uri}dist/placeholder_200_200.png`),[S,j]=(0,a.useState)(`${ast_block_template_vars.uri}dist/placeholder_200_200.png`);function A(){const e=f?.current,t=v?.current;if(!e||!t)return;const r=e.parentNode.offsetWidth/1200,o=r*t.offsetHeight;e.style.transform=`scale(${r})`,e.style.height=`${o}px`}(0,a.useLayoutEffect)((()=>{let a=!0;const n={landscape:[],portrait:[]};u?.forEach((e=>{"landscape"===e.orientation?n.landscape.push(e):n.portrait.push(e)}));const l=n,d=new Image;d.src=C;const f=new Image;f.src=x;const b=v.current;function k(e,t){a&&(e.onload=()=>{t(e.src)})}k(d,N),k(f,j);const E=document.getElementById("astra-wp-editor-styles-inline-css")?.textContent.replace(/:root/g,".block-container").replace(/body/g,".block-container"),O=document.getElementById("astra-block-editor-styles-inline-css")?.textContent.replace(/:root/g,".block-container").replace(/body/g,".block-container");let I="";var $,S,Z;if(r&&($=r,S=l?.landscape,r=p?$:0!==Object.keys(i).length&&i.hasOwnProperty(e.category)?S&&0===S.length?$:$.replace(/background-image\s*:\s*url\(['"]?([^'")]+)['"]?\)/g,(function(e,t){if(h(t))return e;if(!S[R]?.url)return"";const r=S[R]?.url;return R++,R%=S.length,'background-image: url("'+r+'")'})):$),I+=o?`<style type="text/css" id="gt-astra-customizer">${o}</style>`:"",I+=`<style type="text/css" id="gt-spectra-common-stylesheet">${w}</style>`,I=r?`${I} <style type="text/css" id="gt-common-stylesheet">${r}</style>`:I,s&&(I+=`<style type="text/css" id="gt-global-stylesheet"> ${s} </style>`),E&&(I+=`<style type="text/css" id="gt-wpeditor-css" > ${E} </style>`),O&&(I+=`<style type="text/css" id="gt-blockeditor-css"> ${O} </style>`),b&&t){let r=b.shadowRoot;if(null===r&&(r=b.attachShadow({mode:"open"})),null===r)return;let o=t;if(!p){const t=i?i[e.category]:[];t&&Object.keys(t)?.length>0&&Object.keys(t).forEach((e=>{o=null!==t[e]?o.replace(e,t[e]):o})),Object.keys(i).length>0&&i.hasOwnProperty(e.category)&&(Z=o,g&&(Z=Z.replace("contact@example.com",g)),m&&(Z=Z.replace("202-555-0188",m)),y&&(Z=Z.replace("2360 Hood Avenue, San Diego, CA, 92123",y)),o=Z,o=F(o))}r.innerHTML=I+'<div class="st-block-container">'+o+"</div>",c.forEach(((e,t)=>{r?.host.style.setProperty(`--ast-global-color-${t}`,e)}));const s=b.shadowRoot.querySelectorAll("img");r&&(s.forEach((t=>{h(t.src)||p||0===l.landscape.length||0===l.portrait.length||0===Object.keys(i).length||!i.hasOwnProperty(e.category)||T(t,"hidden")})),A(),((t,r)=>{if(p)return;if(0===Object.keys(i).length||!i.hasOwnProperty(e.category))return;const o=r.landscape?r.landscape:[],s=r.portrait?r.portrait:[];0!==o.length&&0!==s.length&&t?.forEach((function(e,t){h(e.src)||(e.onload=()=>{const r=e.getAttribute("src")||"";if(r.includes("unsplash")||r.includes("pexels")||r.includes("pixabay"))return void T(e,_);const a=(e=>{const t=new Image;return t.src=e,t.width>t.height?"landscape":"portrait"})(e.src);let n;if(B=t%o.length,P=t%s.length,n="landscape"===a?o[B]:s[P],void 0!==n)if(n.url.includes("unsplash")||n.url.includes("pexels")||n.url.includes("pixabay")){if("landscape"===a?(B++,B%=o.length):(P++,P%=s.length),"PICTURE"===e.parentNode.nodeName)e.parentNode.querySelectorAll("source").forEach((e=>{e.setAttribute("srcset",n.optimized_url)})),e.parentNode.querySelector("img").setAttribute("src",n.optimized_url);else{const t=document.createElement("img");t.src=n.optimized_url,e.parentNode.replaceChild(t,e)}T(e,_)}else T(e,_);else T(e,_)},e.onerror=()=>{T(e,_)})}))})(s,l))}return()=>{a=!1}}),[e,p,i,u]),(0,a.useEffect)((()=>{const e=new ResizeObserver(A);return e.observe(document.documentElement),()=>{e&&e.disconnect()}}),[]),(0,a.useEffect)((()=>{const e=document.querySelector("#ast-block-templates-modal-wrap");if(!e)return;const t=new MutationObserver(A);return t.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{t&&t.disconnect()}}),[]),(0,a.useEffect)((()=>{const e=v?.current;if(e){const t=e.shadowRoot;c.forEach(((e,r)=>{null!==t&&t.host.style.setProperty(`--ast-global-color-${r}`,e)}))}}),[c]);const T=(e,t)=>{e&&(e.style.visibility=t)},F=(e="")=>y?e.replace(/(<iframe[^>]+src="https:\/\/maps\.google\.com\/maps\?q=)([^&]+)(&z=\d+&hl=en&t=m&output=embed&iwloc=near"[^>]*><\/iframe>)/g,`$1${encodeURIComponent(y)}$3`):e;let Z=0,z=0;const D=(e,t,r)=>{const o=e.scrollTop,s=t-o;let a=0;const n=function(){a+=20;const t=k.linearTween(a,o,s,r);e.scrollTop=t,a<r&&(Z=setTimeout(n,20))};n()};(0,a.useEffect)((()=>{d||(B=0,P=0,R=0)}),[d]);const q=E?"origin-top-right":"origin-top-left";return React.createElement("div",{className:(0,n.AK)("w-full h-fit p-5",!0===O.importing?"importing":"")},React.createElement("div",{className:"cursor-pointer relative border border-solid border-border-primary hover:border-accent-spectra transition duration-150 ease-in-out overflow-hidden group"},React.createElement("div",{className:`thumbnail left-0 m-0 min-h-[auto] overflow-visible text-left top-0 ${q} relative pointer-events-none`,ref:f},React.createElement("div",{className:"absolute w-[1200px] pointer-events-none max-h-[1600px] overflow-hidden",ref:v},!t&&React.createElement("img",{srcSet:`${S}, ${$}`,src:$,alt:"Preview"}),React.createElement("div",{className:"preview"},React.createElement("span",{className:"ast-block-templates-icon ast-block-templates-icon-search"})))),React.createElement("div",{className:"absolute inset-0 grid grid-cols-1 grid-rows-1 place-items-end",onMouseEnter:()=>{if("page"!==e.type)return;const t=v.current;Z&&clearTimeout(Z),z=setTimeout((()=>{D(t,t.scrollHeight,4e3)}),1e3)},onMouseLeave:()=>{z&&clearTimeout(z);const e=v.current;Z&&clearTimeout(Z),D(e,0,1500)}},React.createElement("div",{className:(0,n.AK)("opacity-0 group-hover:opacity-100 w-full flex items-center justify-between px-[20px] py-[14px] backdrop-blur-sm bg-white/[0.85] shadow-action-buttons transition-all duration-150 ease-in-out",!0===O.importing?"opacity-100":"")},React.createElement(l.Z,{title:"Insert",liveRequest:!0,item:e,importing:O.importing,onClick:()=>{I({...O,importing:!0})},onBlockImport:()=>{I({...O,importing:!1})}}),React.createElement(b,{item:e})))))})))}}]);