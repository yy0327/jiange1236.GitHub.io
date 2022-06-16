"use strict";(self.webpackChunkZeblog=self.webpackChunkZeblog||[]).push([[5039],{55039:(e,t,l)=>{l.r(t),l.d(t,{default:()=>Ne});var a=l(28912),n=l(56658),o=l(23520);"undefined"!=typeof document&&document;const[r,i]=(()=>{let e=Date.now,t=!1;if("undefined"!=typeof window){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const l=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(l&&Number(l[1])<=53)}return[e,t]})();"undefined"!=typeof HTMLElement&&HTMLElement;const s="transition",u="animation",c=(e,{slots:t})=>(0,a.h)(a.P$,function(e){const t={};for(const l in e)l in v||(t[l]=e[l]);if(!1===e.css)return t;const{name:l="v",type:a,duration:o,enterFromClass:r=`${l}-enter-from`,enterActiveClass:i=`${l}-enter-active`,enterToClass:s=`${l}-enter-to`,appearFromClass:u=r,appearActiveClass:c=i,appearToClass:b=s,leaveFromClass:k=`${l}-leave-from`,leaveActiveClass:S=`${l}-leave-active`,leaveToClass:y=`${l}-leave-to`}=e,_=function(e){if(null==e)return null;if((0,n.Kn)(e))return[m(e.enter),m(e.leave)];{const t=m(e);return[t,t]}}(o),U=_&&_[0],D=_&&_[1],{onBeforeEnter:C,onEnter:F,onEnterCancelled:W,onLeave:I,onLeaveCancelled:x,onBeforeAppear:$=C,onAppear:L=F,onAppearCancelled:H=W}=t,T=(e,t,l)=>{h(e,t?b:s),h(e,t?c:i),l&&l()},q=(e,t)=>{e._isLeaving=!1,h(e,k),h(e,y),h(e,S),t&&t()},j=e=>(t,l)=>{const n=e?L:F,o=()=>T(t,e,l);d(n,[t,o]),f((()=>{h(t,e?u:r),g(t,e?b:s),p(n)||w(t,a,U,o)}))};return(0,n.l7)(t,{onBeforeEnter(e){d(C,[e]),g(e,r),g(e,i)},onBeforeAppear(e){d($,[e]),g(e,u),g(e,c)},onEnter:j(!1),onAppear:j(!0),onLeave(e,t){e._isLeaving=!0;const l=()=>q(e,t);g(e,k),document.body.offsetHeight,g(e,S),f((()=>{e._isLeaving&&(h(e,k),g(e,y),p(I)||w(e,a,D,l))})),d(I,[e,l])},onEnterCancelled(e){T(e,!1),d(W,[e])},onAppearCancelled(e){T(e,!0),d(H,[e])},onLeaveCancelled(e){q(e),d(x,[e])}})}(e),t);c.displayName="Transition";const v={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},d=(c.props=(0,n.l7)({},a.P$.props,v),(e,t=[])=>{(0,n.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)}),p=e=>!!e&&((0,n.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function m(e){return(0,n.He)(e)}function g(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function h(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:l}=e;l&&(l.delete(t),l.size||(e._vtc=void 0))}function f(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let b=0;function w(e,t,l,a){const n=e._endId=++b,o=()=>{n===e._endId&&a()};if(l)return setTimeout(o,l);const{type:r,timeout:i,propCount:c}=function(e,t){const l=window.getComputedStyle(e),a=e=>(l[e]||"").split(", "),n=a("transitionDelay"),o=a("transitionDuration"),r=k(n,o),i=a("animationDelay"),c=a("animationDuration"),v=k(i,c);let d=null,p=0,m=0;return t===s?r>0&&(d=s,p=r,m=o.length):t===u?v>0&&(d=u,p=v,m=c.length):(p=Math.max(r,v),d=p>0?r>v?s:u:null,m=d?d===s?o.length:c.length:0),{type:d,timeout:p,propCount:m,hasTransform:d===s&&/\b(transform|all)(,|$)/.test(l.transitionProperty)}}(e,t);if(!r)return a();const v=r+"end";let d=0;const p=()=>{e.removeEventListener(v,m),o()},m=t=>{t.target===e&&++d>=c&&p()};setTimeout((()=>{d<c&&p()}),i+1),e.addEventListener(v,m)}function k(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map(((t,l)=>S(t)+S(e[l]))))}function S(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}new WeakMap,new WeakMap;const y={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},_={beforeMount(e,{value:t},{transition:l}){e._vod="none"===e.style.display?"":e.style.display,l&&t?l.beforeEnter(e):U(e,t)},mounted(e,{value:t},{transition:l}){l&&t&&l.enter(e)},updated(e,{value:t,oldValue:l},{transition:a}){!t!=!l&&(a?t?(a.beforeEnter(e),U(e,!0),a.enter(e)):a.leave(e,(()=>{U(e,!1)})):U(e,t))},beforeUnmount(e,{value:t}){U(e,t)}};function U(e,t){e.style.display=t?e._vod:"none"}const D={class:"theme-default-content"},C={},F=(0,l(83744).Z)(C,[["render",function(e,t){const l=(0,a.up)("Content");return(0,a.wg)(),(0,a.iD)("div",D,[(0,a.Wm)(l)])}]]);var W=l(74393),I=l(87171);const x={key:0,class:"features"},$=(0,a.aZ)({__name:"HomeFeatures",setup(e){const t=(0,W.I2)(),l=(0,a.Fl)((()=>(0,I.kJ)(t.value.features)?t.value.features:[]));return(e,t)=>(0,o.SU)(l).length?((0,a.wg)(),(0,a.iD)("div",x,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,o.SU)(l),(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.title,class:"feature"},[(0,a._)("h2",null,(0,n.zw)(e.title),1),(0,a._)("p",null,(0,n.zw)(e.details),1)])))),128))])):(0,a.kq)("v-if",!0)}}),L=["innerHTML"],H=["textContent"],T=(0,a.aZ)({__name:"HomeFooter",setup(e){const t=(0,W.I2)(),l=(0,a.Fl)((()=>t.value.footer)),r=(0,a.Fl)((()=>t.value.footerHtml));return(e,t)=>(0,o.SU)(l)?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a.kq)(" eslint-disable-next-line vue/no-v-html "),(0,o.SU)(r)?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"footer",innerHTML:(0,o.SU)(l)},null,8,L)):((0,a.wg)(),(0,a.iD)("div",{key:1,class:"footer",textContent:(0,n.zw)((0,o.SU)(l))},null,8,H))],64)):(0,a.kq)("v-if",!0)}});var q=l(44332);const j=["href","rel","target","aria-label"],E=(0,a.aZ)({inheritAttrs:!1}),M=(0,a.aZ)({...E,__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(e){const t=e,l=(0,q.yj)(),r=(0,W.WF)(),{item:i}=(0,o.BK)(t),s=(0,a.Fl)((()=>(0,I.ak)(i.value.link))),u=(0,a.Fl)((()=>(0,I.B2)(i.value.link)||(0,I.R5)(i.value.link))),c=(0,a.Fl)((()=>{if(!u.value)return i.value.target?i.value.target:s.value?"_blank":void 0})),v=(0,a.Fl)((()=>"_blank"===c.value)),d=(0,a.Fl)((()=>!s.value&&!u.value&&!v.value)),p=(0,a.Fl)((()=>{if(!u.value)return i.value.rel?i.value.rel:v.value?"noopener noreferrer":void 0})),m=(0,a.Fl)((()=>i.value.ariaLabel||i.value.text)),g=(0,a.Fl)((()=>{const e=Object.keys(r.value.locales);return e.length?!e.some((e=>e===i.value.link)):"/"!==i.value.link})),h=(0,a.Fl)((()=>!!g.value&&l.path.startsWith(i.value.link))),f=(0,a.Fl)((()=>!!d.value&&(i.value.activeMatch?new RegExp(i.value.activeMatch).test(l.path):h.value)));return(e,t)=>{const l=(0,a.up)("RouterLink"),r=(0,a.up)("AutoLinkExternalIcon");return(0,o.SU)(d)?((0,a.wg)(),(0,a.j4)(l,(0,a.dG)({key:0,class:{"router-link-active":(0,o.SU)(f)},to:(0,o.SU)(i).link,"aria-label":(0,o.SU)(m)},e.$attrs),{default:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"before"),(0,a.Uk)(" "+(0,n.zw)((0,o.SU)(i).text)+" ",1),(0,a.WI)(e.$slots,"after")])),_:3},16,["class","to","aria-label"])):((0,a.wg)(),(0,a.iD)("a",(0,a.dG)({key:1,class:"external-link",href:(0,o.SU)(i).link,rel:(0,o.SU)(p),target:(0,o.SU)(c),"aria-label":(0,o.SU)(m)},e.$attrs),[(0,a.WI)(e.$slots,"before"),(0,a.Uk)(" "+(0,n.zw)((0,o.SU)(i).text)+" ",1),(0,o.SU)(v)?((0,a.wg)(),(0,a.j4)(r,{key:0})):(0,a.kq)("v-if",!0),(0,a.WI)(e.$slots,"after")],16,j))}}});var z=l(55404);const B={class:"hero"},A={key:0,id:"main-title"},Z={key:1,class:"description"},P={key:2,class:"actions"},R=(0,a.aZ)({__name:"HomeHero",setup(e){const t=(0,W.I2)(),l=(0,W.I5)(),r=(0,z.vs)(),i=(0,a.Fl)((()=>r.value&&void 0!==t.value.heroImageDark?t.value.heroImageDark:t.value.heroImage)),s=(0,a.Fl)((()=>null===t.value.heroText?null:t.value.heroText||l.value.title||"Hello")),u=(0,a.Fl)((()=>t.value.heroAlt||s.value||"hero")),c=(0,a.Fl)((()=>null===t.value.tagline?null:t.value.tagline||l.value.description||"Welcome to your VuePress site")),v=(0,a.Fl)((()=>(0,I.kJ)(t.value.actions)?t.value.actions.map((({text:e,link:t,type:l="primary"})=>({text:e,link:t,type:l}))):[])),d=()=>{if(!i.value)return null;const e=(0,a.h)("img",{src:(0,W.pJ)(i.value),alt:u.value});return void 0===t.value.heroImageDark?e:(0,a.h)(W.qx,(()=>e))};return(e,t)=>((0,a.wg)(),(0,a.iD)("header",B,[(0,a.Wm)(d),(0,o.SU)(s)?((0,a.wg)(),(0,a.iD)("h1",A,(0,n.zw)((0,o.SU)(s)),1)):(0,a.kq)("v-if",!0),(0,o.SU)(c)?((0,a.wg)(),(0,a.iD)("p",Z,(0,n.zw)((0,o.SU)(c)),1)):(0,a.kq)("v-if",!0),(0,o.SU)(v).length?((0,a.wg)(),(0,a.iD)("p",P,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,o.SU)(v),(e=>((0,a.wg)(),(0,a.j4)(M,{key:e.text,class:(0,n.C_)(["action-button",[e.type]]),item:e},null,8,["class","item"])))),128))])):(0,a.kq)("v-if",!0)]))}}),Y={class:"home"},N=(0,a.aZ)({__name:"Home",setup:e=>(e,t)=>((0,a.wg)(),(0,a.iD)("main",Y,[(0,a.Wm)(R),(0,a.Wm)($),(0,a.Wm)(F),(0,a.Wm)(T)]))}),X=(0,a.aZ)({__name:"NavbarBrand",setup(e){const t=(0,W.I)(),l=(0,W.I5)(),r=(0,z.X6)(),i=(0,z.vs)(),s=(0,a.Fl)((()=>r.value.home||t.value)),u=(0,a.Fl)((()=>l.value.title)),c=(0,a.Fl)((()=>i.value&&void 0!==r.value.logoDark?r.value.logoDark:r.value.logo)),v=()=>{if(!c.value)return null;const e=(0,a.h)("img",{class:"logo",src:(0,W.pJ)(c.value),alt:u.value});return void 0===r.value.logoDark?e:(0,a.h)(W.qx,(()=>e))};return(e,t)=>{const l=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.j4)(l,{to:(0,o.SU)(s)},{default:(0,a.w5)((()=>[(0,a.Wm)(v),(0,o.SU)(u)?((0,a.wg)(),(0,a.iD)("span",{key:0,class:(0,n.C_)(["site-name",{"can-hide":(0,o.SU)(c)}])},(0,n.zw)((0,o.SU)(u)),3)):(0,a.kq)("v-if",!0)])),_:1},8,["to"])}}}),K=(0,a.aZ)({__name:"DropdownTransition",setup(e){const t=e=>{e.style.height=e.scrollHeight+"px"},l=e=>{e.style.height=""};return(e,n)=>((0,a.wg)(),(0,a.j4)(c,{name:"dropdown",onEnter:t,onAfterEnter:l,onBeforeLeave:t},{default:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"default")])),_:3}))}}),V=["aria-label"],O={class:"title"},G=(0,a._)("span",{class:"arrow down"},null,-1),J=["aria-label"],Q={class:"title"},ee={class:"navbar-dropdown"},te={class:"navbar-dropdown-subtitle"},le={key:1},ae={class:"navbar-dropdown-subitem-wrapper"},ne=(0,a.aZ)({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(e){const t=e,{item:l}=(0,o.BK)(t),r=(0,a.Fl)((()=>l.value.ariaLabel||l.value.text)),i=(0,o.iH)(!1),s=(0,q.yj)();(0,a.YP)((()=>s.path),(()=>{i.value=!1}));const u=e=>{const t=0===e.detail;i.value=!!t&&!i.value},c=(e,t)=>t[t.length-1]===e;return(e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,n.C_)(["navbar-dropdown-wrapper",{open:i.value}])},[(0,a._)("button",{class:"navbar-dropdown-title",type:"button","aria-label":(0,o.SU)(r),onClick:u},[(0,a._)("span",O,(0,n.zw)((0,o.SU)(l).text),1),G],8,V),(0,a._)("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":(0,o.SU)(r),onClick:t[0]||(t[0]=e=>i.value=!i.value)},[(0,a._)("span",Q,(0,n.zw)((0,o.SU)(l).text),1),(0,a._)("span",{class:(0,n.C_)(["arrow",i.value?"down":"right"])},null,2)],8,J),(0,a.Wm)(K,null,{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("ul",ee,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,o.SU)(l).children,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e.text,class:"navbar-dropdown-item"},[e.children?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a._)("h4",te,[e.link?((0,a.wg)(),(0,a.j4)(M,{key:0,item:e,onFocusout:t=>c(e,(0,o.SU)(l).children)&&0===e.children.length&&(i.value=!1)},null,8,["item","onFocusout"])):((0,a.wg)(),(0,a.iD)("span",le,(0,n.zw)(e.text),1))]),(0,a._)("ul",ae,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.children,(t=>((0,a.wg)(),(0,a.iD)("li",{key:t.link,class:"navbar-dropdown-subitem"},[(0,a.Wm)(M,{item:t,onFocusout:a=>c(t,e.children)&&c(e,(0,o.SU)(l).children)&&(i.value=!1)},null,8,["item","onFocusout"])])))),128))])],64)):((0,a.wg)(),(0,a.j4)(M,{key:1,item:e,onFocusout:t=>c(e,(0,o.SU)(l).children)&&(i.value=!1)},null,8,["item","onFocusout"]))])))),128))],512),[[_,i.value]])])),_:1})],2))}}),oe=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),re=(e,t)=>!(!e.link||!((e,t)=>t.hash===e||oe(t.path)===oe(e))(e.link,t))||!!e.children&&e.children.some((e=>re(e,t))),ie=e=>!(0,I.ak)(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,se={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},ue={key:0,class:"navbar-items"},ce=(0,a.aZ)({__name:"NavbarItems",setup(e){const t=e=>(0,I.HD)(e)?(0,z.sC)(e):e.children?{...e,children:e.children.map(t)}:e,l=(()=>{const e=(0,z.X6)();return(0,a.Fl)((()=>(e.value.navbar||[]).map(t)))})(),n=(()=>{const e=(0,q.tv)(),t=(0,W.I)(),l=(0,W.I5)(),n=(0,z.X6)();return(0,a.Fl)((()=>{var a,o;const r=Object.keys(l.value.locales);if(r.length<2)return[];const i=e.currentRoute.value.path,s=e.currentRoute.value.fullPath;return[{text:null!=(a=n.value.selectLanguageText)?a:"unknown language",ariaLabel:null!=(o=n.value.selectLanguageAriaLabel)?o:"unkown language",children:r.map((a=>{var o,r,u,c,v,d;const p=null!=(r=null==(o=l.value.locales)?void 0:o[a])?r:{},m=null!=(c=null==(u=n.value.locales)?void 0:u[a])?c:{},g=`${p.lang}`,h=null!=(v=m.selectLanguageName)?v:g;let f;if(g===l.value.lang)f=s;else{const l=i.replace(t.value,a);f=e.getRoutes().some((e=>e.path===l))?l:null!=(d=m.home)?d:a}return{text:h,link:f}}))}]}))})(),r=(()=>{const e=(0,z.X6)(),t=(0,a.Fl)((()=>e.value.repo)),l=(0,a.Fl)((()=>t.value?ie(t.value):null)),n=(0,a.Fl)((()=>t.value&&!(0,I.ak)(t.value)?`https://github.com/${t.value}`:t.value)),o=(0,a.Fl)((()=>n.value?e.value.repoLabel?e.value.repoLabel:null===l.value?"Source":l.value:null));return(0,a.Fl)((()=>n.value&&o.value?[{text:o.value,link:n.value}]:[]))})(),i=(0,a.Fl)((()=>[...l.value,...n.value,...r.value]));return(e,t)=>(0,o.SU)(i).length?((0,a.wg)(),(0,a.iD)("nav",ue,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,o.SU)(i),(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.text,class:"navbar-item"},[e.children?((0,a.wg)(),(0,a.j4)(ne,{key:0,item:e},null,8,["item"])):((0,a.wg)(),(0,a.j4)(M,{key:1,item:e},null,8,["item"]))])))),128))])):(0,a.kq)("v-if",!0)}}),ve=["title"],de={class:"icon",focusable:"false",viewBox:"0 0 32 32"},pe=[(0,a.uE)('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9)],me={class:"icon",focusable:"false",viewBox:"0 0 32 32"},ge=[(0,a._)("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1)],he=(0,a.aZ)({__name:"ToggleColorModeButton",setup(e){const t=(0,z.X6)(),l=(0,z.vs)(),n=()=>{l.value=!l.value};return(e,r)=>((0,a.wg)(),(0,a.iD)("button",{class:"toggle-color-mode-button",title:(0,o.SU)(t).toggleColorMode,onClick:n},[(0,a.wy)(((0,a.wg)(),(0,a.iD)("svg",de,pe,512)),[[_,!(0,o.SU)(l)]]),(0,a.wy)(((0,a.wg)(),(0,a.iD)("svg",me,ge,512)),[[_,(0,o.SU)(l)]])],8,ve))}}),fe=["title"],be=[(0,a._)("div",{class:"icon","aria-hidden":"true"},[(0,a._)("span"),(0,a._)("span"),(0,a._)("span")],-1)],we=(0,a.aZ)({__name:"ToggleSidebarButton",emits:["toggle"],setup(e){const t=(0,z.X6)();return(e,l)=>((0,a.wg)(),(0,a.iD)("div",{class:"toggle-sidebar-button",title:(0,o.SU)(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:l[0]||(l[0]=t=>e.$emit("toggle"))},be,8,fe))}}),ke=(0,a.aZ)({__name:"Navbar",emits:["toggle-sidebar"],setup(e){const t=(0,z.X6)(),l=(0,o.iH)(null),r=(0,o.iH)(null),i=(0,o.iH)(0),s=(0,a.Fl)((()=>i.value?{maxWidth:i.value+"px"}:{}));function u(e,t){var l,a,n;const o=null==(n=null==(a=null==(l=null==e?void 0:e.ownerDocument)?void 0:l.defaultView)?void 0:a.getComputedStyle(e,null))?void 0:n[t],r=Number.parseInt(o,10);return Number.isNaN(r)?0:r}return(0,a.bv)((()=>{const e=u(l.value,"paddingLeft")+u(l.value,"paddingRight"),t=()=>{var t;window.innerWidth<=719?i.value=0:i.value=l.value.offsetWidth-e-((null==(t=r.value)?void 0:t.offsetWidth)||0)};t(),window.addEventListener("resize",t,!1),window.addEventListener("orientationchange",t,!1)})),(e,i)=>{const u=(0,a.up)("NavbarSearch");return(0,a.wg)(),(0,a.iD)("header",{ref_key:"navbar",ref:l,class:"navbar"},[(0,a.Wm)(we,{onToggle:i[0]||(i[0]=t=>e.$emit("toggle-sidebar"))}),(0,a._)("span",{ref_key:"navbarBrand",ref:r},[(0,a.Wm)(X)],512),(0,a._)("div",{class:"navbar-items-wrapper",style:(0,n.j5)((0,o.SU)(s))},[(0,a.WI)(e.$slots,"before"),(0,a.Wm)(ce,{class:"can-hide"}),(0,a.WI)(e.$slots,"after"),(0,o.SU)(t).colorModeSwitch?((0,a.wg)(),(0,a.j4)(he,{key:0})):(0,a.kq)("v-if",!0),(0,a.Wm)(u)],4)],512)}}}),Se={class:"page-meta"},ye={key:0,class:"meta-item edit-link"},_e={key:1,class:"meta-item last-updated"},Ue={class:"meta-item-label"},De={class:"meta-item-info"},Ce={key:2,class:"meta-item contributors"},Fe={class:"meta-item-label"},We={class:"meta-item-info"},Ie=["title"],xe=(0,a.Uk)(", "),$e=(0,a.aZ)({__name:"PageMeta",setup(e){const t=(0,z.X6)(),l=(()=>{const e=(0,z.X6)(),t=(0,W.Vi)(),l=(0,W.I2)();return(0,a.Fl)((()=>{var a,n,o;if(null!=(n=null!=(a=l.value.editLink)?a:e.value.editLink)&&!n)return null;const{repo:r,docsRepo:i=r,docsBranch:s="main",docsDir:u="",editLinkText:c}=e.value;if(!i)return null;const v=(({docsRepo:e,docsBranch:t,docsDir:l,filePathRelative:a,editLinkPattern:n})=>{if(!a)return null;const o=(({docsRepo:e,editLinkPattern:t})=>{if(t)return t;const l=ie(e);return null!==l?se[l]:null})({docsRepo:e,editLinkPattern:n});return o?o.replace(/:repo/,(0,I.ak)(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,(0,I.FY)(`${(0,I.U1)(l)}/${a}`)):null})({docsRepo:i,docsBranch:s,docsDir:u,filePathRelative:t.value.filePathRelative,editLinkPattern:null!=(o=l.value.editLinkPattern)?o:e.value.editLinkPattern});return v?{text:null!=c?c:"Edit this page",link:v}:null}))})(),r=(()=>{const e=(0,z.X6)(),t=(0,W.Vi)(),l=(0,W.I2)();return(0,a.Fl)((()=>{var a,n,o,r;return(null==(n=null!=(a=l.value.lastUpdated)?a:e.value.lastUpdated)||n)&&(null==(o=t.value.git)?void 0:o.updatedTime)?new Date(null==(r=t.value.git)?void 0:r.updatedTime).toLocaleString():null}))})(),i=(()=>{const e=(0,z.X6)(),t=(0,W.Vi)(),l=(0,W.I2)();return(0,a.Fl)((()=>{var a,n,o,r;return null!=(n=null!=(a=l.value.contributors)?a:e.value.contributors)&&!n||null==(r=null==(o=t.value.git)?void 0:o.contributors)?null:r}))})();return(e,s)=>{const u=(0,a.up)("ClientOnly");return(0,a.wg)(),(0,a.iD)("footer",Se,[(0,o.SU)(l)?((0,a.wg)(),(0,a.iD)("div",ye,[(0,a.Wm)(M,{class:"meta-item-label",item:(0,o.SU)(l)},null,8,["item"])])):(0,a.kq)("v-if",!0),(0,o.SU)(r)?((0,a.wg)(),(0,a.iD)("div",_e,[(0,a._)("span",Ue,(0,n.zw)((0,o.SU)(t).lastUpdatedText)+": ",1),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a._)("span",De,(0,n.zw)((0,o.SU)(r)),1)])),_:1})])):(0,a.kq)("v-if",!0),(0,o.SU)(i)&&(0,o.SU)(i).length?((0,a.wg)(),(0,a.iD)("div",Ce,[(0,a._)("span",Fe,(0,n.zw)((0,o.SU)(t).contributorsText)+": ",1),(0,a._)("span",We,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,o.SU)(i),((e,t)=>((0,a.wg)(),(0,a.iD)(a.HY,{key:t},[(0,a._)("span",{class:"contributor",title:`email: ${e.email}`},(0,n.zw)(e.name),9,Ie),t!==(0,o.SU)(i).length-1?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[xe],64)):(0,a.kq)("v-if",!0)],64)))),128))])])):(0,a.kq)("v-if",!0)])}}}),Le={key:0,class:"page-nav"},He={class:"inner"},Te={key:0,class:"prev"},qe={key:1,class:"next"},je=(0,a.aZ)({__name:"PageNav",setup(e){const t=e=>!1===e?null:(0,I.HD)(e)?(0,z.sC)(e):!!(0,I.PO)(e)&&e,l=(e,t,a)=>{const n=e.findIndex((e=>e.link===t));if(-1!==n){const t=e[n+a];return(null==t?void 0:t.link)?t:null}for(const n of e)if(n.children){const e=l(n.children,t,a);if(e)return e}return null},n=(0,W.I2)(),r=(0,z.VU)(),i=(0,q.yj)(),s=(0,a.Fl)((()=>{const e=t(n.value.prev);return!1!==e?e:l(r.value,i.path,-1)})),u=(0,a.Fl)((()=>{const e=t(n.value.next);return!1!==e?e:l(r.value,i.path,1)}));return(e,t)=>(0,o.SU)(s)||(0,o.SU)(u)?((0,a.wg)(),(0,a.iD)("nav",Le,[(0,a._)("p",He,[(0,o.SU)(s)?((0,a.wg)(),(0,a.iD)("span",Te,[(0,a.Wm)(M,{item:(0,o.SU)(s)},null,8,["item"])])):(0,a.kq)("v-if",!0),(0,o.SU)(u)?((0,a.wg)(),(0,a.iD)("span",qe,[(0,a.Wm)(M,{item:(0,o.SU)(u)},null,8,["item"])])):(0,a.kq)("v-if",!0)])])):(0,a.kq)("v-if",!0)}}),Ee={class:"page"},Me={class:"theme-default-content"},ze=(0,a.aZ)({__name:"Page",setup:e=>(e,t)=>{const l=(0,a.up)("Content");return(0,a.wg)(),(0,a.iD)("main",Ee,[(0,a.WI)(e.$slots,"top"),(0,a._)("div",Me,[(0,a.WI)(e.$slots,"content-top"),(0,a.Wm)(l),(0,a.WI)(e.$slots,"content-bottom")]),(0,a.Wm)($e),(0,a.Wm)(je),(0,a.WI)(e.$slots,"bottom")])}}),Be={class:"sidebar-item-children"},Ae=(0,a.aZ)({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(e){const t=e,{item:l,depth:r}=(0,o.BK)(t),i=(0,q.yj)(),s=(0,q.tv)(),u=(0,a.Fl)((()=>re(l.value,i))),c=(0,a.Fl)((()=>({"sidebar-item":!0,"sidebar-heading":0===r.value,active:u.value,collapsible:l.value.collapsible}))),v=(0,o.iH)(!0),d=(0,o.iH)(void 0);return l.value.collapsible&&(v.value=u.value,d.value=()=>{v.value=!v.value},s.afterEach((()=>{v.value=u.value}))),(e,t)=>{var i;const s=(0,a.up)("SidebarItem",!0);return(0,a.wg)(),(0,a.iD)("li",null,[(0,o.SU)(l).link?((0,a.wg)(),(0,a.j4)(M,{key:0,class:(0,n.C_)((0,o.SU)(c)),item:(0,o.SU)(l)},null,8,["class","item"])):((0,a.wg)(),(0,a.iD)("p",{key:1,tabindex:"0",class:(0,n.C_)((0,o.SU)(c)),onClick:t[0]||(t[0]=(...e)=>d.value&&d.value(...e)),onKeydown:t[1]||(t[1]=(u=(...e)=>d.value&&d.value(...e),p=["enter"],e=>{if(!("key"in e))return;const t=(0,n.rs)(e.key);return p.some((e=>e===t||y[e]===t))?u(e):void 0}))},[(0,a.Uk)((0,n.zw)((0,o.SU)(l).text)+" ",1),(0,o.SU)(l).collapsible?((0,a.wg)(),(0,a.iD)("span",{key:0,class:(0,n.C_)(["arrow",v.value?"down":"right"])},null,2)):(0,a.kq)("v-if",!0)],34)),(null==(i=(0,o.SU)(l).children)?void 0:i.length)?((0,a.wg)(),(0,a.j4)(K,{key:2},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("ul",Be,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,o.SU)(l).children,(e=>((0,a.wg)(),(0,a.j4)(s,{key:`${(0,o.SU)(r)}${e.text}${e.link}`,item:e,depth:(0,o.SU)(r)+1},null,8,["item","depth"])))),128))],512),[[_,v.value]])])),_:1})):(0,a.kq)("v-if",!0)]);var u,p}}}),Ze={key:0,class:"sidebar-items"},Pe=(0,a.aZ)({__name:"SidebarItems",setup(e){const t=(0,q.yj)(),l=(0,z.VU)();return(0,a.bv)((()=>{(0,a.YP)((()=>t.hash),(e=>{const l=document.querySelector(".sidebar");if(!l)return;const a=document.querySelector(`.sidebar a.sidebar-item[href="${t.path}${e}"]`);if(!a)return;const{top:n,height:o}=l.getBoundingClientRect(),{top:r,height:i}=a.getBoundingClientRect();r<n?a.scrollIntoView(!0):r+i>n+o&&a.scrollIntoView(!1)}))})),(e,t)=>(0,o.SU)(l).length?((0,a.wg)(),(0,a.iD)("ul",Ze,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,o.SU)(l),(e=>((0,a.wg)(),(0,a.j4)(Ae,{key:e.link||e.text,item:e},null,8,["item"])))),128))])):(0,a.kq)("v-if",!0)}}),Re={class:"sidebar"},Ye=(0,a.aZ)({__name:"Sidebar",setup:e=>(e,t)=>((0,a.wg)(),(0,a.iD)("aside",Re,[(0,a.Wm)(ce),(0,a.WI)(e.$slots,"top"),(0,a.Wm)(Pe),(0,a.WI)(e.$slots,"bottom")]))}),Ne=(0,a.aZ)({__name:"Layout",setup(e){const t=(0,W.Vi)(),l=(0,W.I2)(),r=(0,z.X6)(),i=(0,a.Fl)((()=>!1!==l.value.navbar&&!1!==r.value.navbar)),s=(0,z.VU)(),u=(0,o.iH)(!1),v=e=>{u.value="boolean"==typeof e?e:!u.value},d={x:0,y:0},p=e=>{d.x=e.changedTouches[0].clientX,d.y=e.changedTouches[0].clientY},m=e=>{const t=e.changedTouches[0].clientX-d.x,l=e.changedTouches[0].clientY-d.y;Math.abs(t)>Math.abs(l)&&Math.abs(t)>40&&(t>0&&d.x<=80?v(!0):v(!1))},g=(0,a.Fl)((()=>[{"no-navbar":!i.value,"no-sidebar":!s.value.length,"sidebar-open":u.value},l.value.pageClass]));let h;(0,a.bv)((()=>{const e=(0,q.tv)();h=e.afterEach((()=>{v(!1)}))})),(0,a.Ah)((()=>{h()}));const f=(0,z.P$)(),b=f.resolve,w=f.pending;return(e,r)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,n.C_)(["theme-container",(0,o.SU)(g)]),onTouchstart:p,onTouchend:m},[(0,a.WI)(e.$slots,"navbar",{},(()=>[(0,o.SU)(i)?((0,a.wg)(),(0,a.j4)(ke,{key:0,onToggleSidebar:v},{before:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"navbar-before")])),after:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"navbar-after")])),_:3})):(0,a.kq)("v-if",!0)])),(0,a._)("div",{class:"sidebar-mask",onClick:r[0]||(r[0]=e=>v(!1))}),(0,a.WI)(e.$slots,"sidebar",{},(()=>[(0,a.Wm)(Ye,null,{top:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"sidebar-top")])),bottom:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"sidebar-bottom")])),_:3})])),(0,a.WI)(e.$slots,"page",{},(()=>[(0,o.SU)(l).home?((0,a.wg)(),(0,a.j4)(N,{key:0})):((0,a.wg)(),(0,a.j4)(c,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:(0,o.SU)(b),onBeforeLeave:(0,o.SU)(w)},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)(ze,{key:(0,o.SU)(t).path},{top:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"page-top")])),"content-top":(0,a.w5)((()=>[(0,a.WI)(e.$slots,"page-content-top")])),"content-bottom":(0,a.w5)((()=>[(0,a.WI)(e.$slots,"page-content-bottom")])),bottom:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"page-bottom")])),_:3}))])),_:3},8,["onBeforeEnter","onBeforeLeave"]))]))],34))}})},83744:(e,t)=>{t.Z=(e,t)=>{const l=e.__vccOpts||e;for(const[e,a]of t)l[e]=a;return l}}}]);