import{S as w,N as h}from"./navigation.3ea54688.js";import{u as _}from"./ticker-primary.406ccb8d.js";import{u as g,b,a as y,C as o}from"./_general_scripts.4e20f1e4.js";import{u as S,D as k}from"./_discount-block.f6a3f92a.js";/* empty css                       */function T(){import("data:text/javascript,")}const E=()=>{(function(l,t,c){const n=t.createElement("script");n.async=!0,n.src=`${c}?${Date.now()/6e4||0}`;const i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i)})(window,document,"https://cifra.digital/upload/crm/tag/call.tracker.js")};document.addEventListener("DOMContentLoaded",()=>{const l=[{selector:"#promo-tel",mask:"+7 (999) 999-99-99"}],t=document.querySelector(".reviews__swiper");t&&new w(t,{slidesPerView:2,spaceBetween:12,allowTouchMove:!1,rewind:!0,speed:700,modules:[h],navigation:{nextEl:".reviews-swiper_next",prevEl:".reviews-swiper_prev"},breakpoints:{300:{slidesPerView:1,spaceBetween:20},990:{slidesPerView:2,spaceBetween:16}}});const c=e=>{e.forEach(r=>{const{isIntersecting:s}=r;s&&r.target.classList.add("standards-card_visible")})};(()=>{const e=document.querySelectorAll(".standards-card");if((e==null?void 0:e.length)>0){const r=new IntersectionObserver(c,{});e.forEach(s=>{r.observe(s)})}})();const i=e=>{e.forEach(r=>{if(r.isIntersecting){const{childNodes:s}=r.target;for(let a=0;a<s.length;a++)s[a].nodeType!==3&&!s[a].classList.contains("element-show")&&s[a].classList.add("element-show")}})},d={threshold:.3},p=new IntersectionObserver(i,d),u=document.querySelectorAll(".parent-animate");for(const e of u)p.observe(e);const{closePromoModal:f,showPromoModal:v}=g(),m=document.querySelector("#promo-close");m&&m.addEventListener("click",f),(()=>{Promise.allSettled([b(l),_(),E(),y(new o({types:[o.availTypes.email,o.availTypes.phone,o.availTypes.name],rules:{name:[],phone:[o.availRules.require,o.availRules.phone],email:[o.availRules.email],agree:[o.availRules.require]},selectors:{form:"#promo__form",info:".form-input__info"},classes:{info:"form-input__info",error:"form-input_dark-red"},url:"/local/php_interface/functions/sendPromoForm.php",callbackSuccess:v})).initializeYmItems(),S(k.green)])})()});export{T as __vite_legacy_guard};
