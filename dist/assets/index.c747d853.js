import{r as e,o as t,c as l,a as s,n as a,p as o,b as i,d as r,e as n,A as c,f as d}from"./vendor.31510f87.js";function u(e){document.getElementById(e).scrollIntoView({behavior:"smooth"},!0)}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const l of e)if("childList"===l.type)for(const e of l.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var m="/poz-application/assets/podcast.bc2d07c7.png";const p={setup:()=>({scrolltoId:u,toggleNavbar:function(){this.showMenu=!this.showMenu},showMenu:e(!1)})},f={class:"relative flex flex-wrap items-center justify-between px-2 py-3 mb-3"},x={class:"container px-4 mx-auto flex flex-wrap items-center justify-between"},b={class:"w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start"},g=s("img",{src:m,width:"60",alt:"podcast logo"},null,-1),v=[s("i",{class:"fas fa-bars"},null,-1)],w={class:"flex flex-col lg:flex-row list-none ml-auto"},h=[s("a",{class:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"},[s("span",{class:"ml-2"},"Description")],-1)],k=[s("a",{class:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"},[s("span",{class:"ml-2"},"Idea")],-1)],y=[s("a",{class:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"},[s("span",{class:"ml-2"},"Contact")],-1)],q={class:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"};p.render=function(e,o,i,r,n,c){return t(),l("nav",f,[s("div",x,[s("div",b,[g,s("button",{class:"text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",type:"button",onClick:o[0]||(o[0]=e=>r.toggleNavbar())},v)]),s("div",{class:a([{hidden:!r.showMenu,flex:r.showMenu},"lg:flex lg:flex-grow items-center"])},[s("ul",w,[s("li",{onClick:o[1]||(o[1]=e=>r.scrolltoId("section1")),class:"nav-item cursor-pointer text-white nav-item"},h),s("li",{onClick:o[2]||(o[2]=e=>r.scrolltoId("section2")),class:"nav-item cursor-pointer text-white nav-item"},k),s("li",{onClick:o[3]||(o[3]=e=>r.scrolltoId("section3")),class:"nav-item cursor-pointer text-white nav-item"},y),s("li",null,[s("a",q,[s("button",{onClick:o[4]||(o[4]=e=>r.scrolltoId("price")),type:"button",class:"btn bg-yellow-300 hover:bg-bookmark-white hover:text-black text-black nav-item"},"Offer")])])])],2)])])};const j={},I={class:"relative"},L=[s("div",{class:"container flex flex-col-reverse lg:flex-row items-center pag-12 mt-5 lg:mt-10"},[s("div",{class:"flex flex-1 flex-col items-center lg:items-start"},[s("h2",{"data-aos":"fade-down",class:"text-white text-3xl md:text-4 leg:text-5xl text-center lg:text-left mb-6"},"POZ APP TITLE"),s("p",{class:"text-bookmark-grey text-lg text-center lg:text-left mb-6"}," Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum perferendis vel numquam facilis quia, placeat, rem ea ut veniam similique dolorem quasi doloribus quae et, quam voluptatibus illo. Dolor, aspernatur!"),s("div",{class:"flex justify-center felx-wrap gap-6"},[s("button",{type:"button",class:"btn bg-yellow-300 hover:bg-bookmark-white hover:text-black"},"More")])]),s("div",{"data-aos":"fade-left",class:"flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10"},[s("img",{src:"/poz-application/assets/hero.bfce043a.png",alt:"micro illustration",class:"w-5/6 h-5/6 sm:w-3/4 sm:3/4 md:w-full md:h-full rounded-md"})]),s("div",{class:"hidden md:block overflow-hidden bg-yellow-300 parallelogram absolute h-80 w-2/4 top-32  lg:-bottom-28 lg:-right-30"})],-1)];j.render=function(e,s){return t(),l("section",I,L)};const C={};o("data-v-27e32c70");const z={class:"bg-yellow-300 py-10 pb-60 lg:mt-60"},E=[s("div",{id:"section1",class:"relative mt-20 lg:mt-24"},[s("div",{class:"container flex flex-col lg:flex-row items-center justify-center gap-x-24"},[s("div",{class:"flex flex-1 justify-center z-10 mb-10 lg:mb-0"},[s("img",{src:"/poz-application/assets/description2.66fa6206.svg",alt:"",class:"w-5/6 h-5/6 sm:w-3/4 sm:3/4 md:w-full md:h-full rounded-md"})]),s("div",{class:"flex flex-1 flex-col items-center lg:items-start"},[s("h1",{"data-aos":"fade-down",class:"text-5xl text-bookmark-dark "},"Description"),s("p",{"data-aos":"fade-left",class:"text-bookmark-dark my-4 text-center lg:text-left sm:w-3/4 lg:w-full"},"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit animi repellat repellendus tempora quos vel nesciunt asperiores earum, explicabo hic laborum voluptas vitae in dolor dolorum similique quam quibusdam consequatur."),s("p",{"data-aos":"fade-left",class:"text-bookmark-dark my-4 text-center lg:text-left sm:w-3/4 lg:w-full"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem labore ullam quos, debitis fugiat recusandae laborum accusantium quis veniam optio ad pariatur cumque libero tenetur nobis. Eius temporibus pariatur nostrum."),s("button",{type:"button",class:"btn btn-red hover:bg-bookmark-white hover:text-black"},"More")])]),s("div",{class:"\r\n                    hidden \r\n                    lg:block \r\n                    overflow-hidden \r\n                    bg-bookmark-dark \r\n                    parallelogram\r\n                    absolute \r\n                    h-80 \r\n                    w-2/4 \r\n                    -bottom-24 \r\n                    -left-36\r\n                "})],-1),s("div",{id:"section2",class:"relative mt-20 lg:mt-52"},[s("div",{class:"container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24"},[s("div",{class:"flex flex-1 justify-center z-10 mb-10 lg:mb-0"},[s("img",{src:"/poz-application/assets/anal1.b66e8953.svg",alt:"",class:"w-5/6 h-5/6 sm:w-3/4 sm:3/4 md:w-full md:h-full rounded-md"})]),s("div",{class:"flex flex-1 flex-col items-center lg:items-start"},[s("h1",{"data-aos":"fade-down",class:"text-5xl text-bookmark-dark"},"How it works?"),s("p",{"data-aos":"fade-right",class:"text-bookmark-dark my-4 text-center lg:text-left sm:w-3/4 lg:w-full"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur illo reprehenderit libero dolore, ea praesentium suscipit temporibus ullam architecto nihil id excepturi! Nobis, sequi. At sapiente mollitia totam possimus commodi."),s("p",{"data-aos":"fade-right",class:"text-bookmark-dark my-4 text-center lg:text-left sm:w-3/4 lg:w-full"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt quaerat ad obcaecati repudiandae, animi dolorem at et quod, tempora, debitis magni temporibus ratione nobis cumque facilis inventore adipisci iste!"),s("button",{type:"button",class:"btn btn-red hover:bg-bookmark-white hover:text-black"},"More")])]),s("div",{class:"\r\n                    hidden \r\n                    lg:block \r\n                    overflow-hidden \r\n                    bg-bookmark-dark\r\n                    parallelogram\r\n                    absolute \r\n                    h-80 \r\n                    w-2/4 \r\n                    -bottom-24 \r\n                    -right-36\r\n                "})],-1),s("div",{id:"price",class:"relative mt-20 lg:mt-24"},[s("div",{class:"container flex flex-col lg:flex-row items-center justify-center gap-x-24"},[s("div",{class:"flex flex-1 justify-center z-10 mb-10 lg:mb-0"},[s("img",{src:"/poz-application/assets/offer.bcfdef2c.svg",alt:"",class:"w-5/6 h-5/6 sm:w-3/4 sm:3/4 md:w-full md:h-full rounded-md"})]),s("div",{class:"flex flex-1 flex-col items-center lg:items-start"},[s("h1",{"data-aos":"fade-down",class:"text-5xl text-bookmark-dark "},"Offer"),s("p",{"data-aos":"fade-left",class:"text-bookmark-dark my-4 text-center lg:text-left sm:w-3/4 lg:w-full"},"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit animi repellat repellendus tempora quos vel nesciunt asperiores earum, explicabo hic laborum voluptas vitae in dolor dolorum similique quam quibusdam consequatur."),s("p",{"data-aos":"fade-left",class:"text-bookmark-dark my-4 text-center lg:text-left sm:w-3/4 lg:w-full"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem labore ullam quos, debitis fugiat recusandae laborum accusantium quis veniam optio ad pariatur cumque libero tenetur nobis. Eius temporibus pariatur nostrum."),s("button",{type:"button",class:"btn btn-red hover:bg-bookmark-white hover:text-black"},"More")])]),s("div",{class:"\r\n                    hidden \r\n                    lg:block \r\n                    overflow-hidden \r\n                    bg-bookmark-dark \r\n                    parallelogram\r\n                    absolute \r\n                    h-80 \r\n                    w-2/4 \r\n                    -bottom-24 \r\n                    -left-36\r\n                "})],-1),s("div",{id:"section3",class:"relative mt-20 lg:mt-52"},[s("div",{class:"container flex flex-col lg:flex-row items-center justify-center gap-x-24"},[s("div",{class:"flex flex-1 justify-center z-10 mb-10 lg:mb-0"},[s("img",{src:"/poz-application/assets/contact.017386da.svg",alt:"",class:"w-5/6 h-5/6 sm:w-3/4 sm:3/4 md:w-full md:h-full rounded-md"})]),s("div",{class:"flex flex-1 flex-col items-center lg:items-start"},[s("h1",{"data-aos":"fade-down",class:"text-5xl text-bookmark-dark"},"Contact "),s("p",{"data-aos":"fade-left",class:"text-bookmark-dark my-4 text-center lg:text-left sm:w-3/4 lg:w-full"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo debitis voluptate alias rerum officia ex, sint ducimus eos repellendus. Explicabo accusamus magni aliquam animi numquam ratione deserunt neque corrupti illo."),s("p",{"data-aos":"fade-left",class:"text-bookmark-dark my-4 text-center lg:text-left sm:w-3/4 lg:w-full"},"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum consectetur illo nulla iste maiores! Ad maxime consequuntur similique doloribus cum cupiditate, assumenda quasi delectus nam accusantium animi magnam laboriosam ut."),s("button",{type:"button",class:"btn btn-red hover:bg-bookmark-white hover:text-black"},"More")])]),s("div",{class:"\r\n                    hidden \r\n                    lg:block \r\n                    overflow-hidden \r\n                    bg-bookmark-dark\r\n                    parallelogram\r\n                    absolute \r\n                    h-80 \r\n                    w-2/4 \r\n                    -bottom-24 \r\n                    -left-36\r\n                "})],-1)];i(),C.render=function(e,s){return t(),l("section",z,E)},C.__scopeId="data-v-27e32c70";const M={},A={class:"bg-bookmark-dark text-white py-20"},O=[r('<div class="container"><div class="sm:w-3/4 lg:w-2/4 mx-auto"><p data-aos="fade-left" class="font-light uppercase text-center mb-8">35,000 ALREADY JOINED</p><h1 class="text-2xl text-center">Join us</h1><div class="flex flex-col sm:flex-row gap-6 mt-8"><input type="text" placeholder="Enter your email adress" class="focus:outline-none flex-1 px-2 py-3 rounded-md text-black"><button type="button" class="btn bg-yellow-300 hover:bg-bookmark-white hover:text-black text-black">Contact us</button></div></div></div>',1)];M.render=function(e,s){return t(),l("section",A,O)};const N={setup:()=>({scrolltoId:u})},D={class:"bg-bookmark-dark py-8"},P={class:"container flex flex-col md:flex-row items-center"},V={class:"flex flex-1 flex-wrap items-center justidy-center md:justify-start gap-12"},H=s("img",{src:m,alt:"podcast icon",width:"40"},null,-1),J={class:"flex text-white uppercase gap-12 text-xs"},S=r('<div class="flex gap-10 mt-12 md:mt-0"><li class="list-none"><i class="text-white text-2xl fab fa-twitter"></i></li><li class="list-none"><i class="text-white text-2xl fab fa-facebook"></i></li></div>',1);N.render=function(e,a,o,i,r,n){return t(),l("footer",D,[s("div",P,[s("div",V,[H,s("ul",J,[s("li",{onClick:a[0]||(a[0]=e=>i.scrolltoId("section1")),class:"cursor-pointer"},"Description"),s("li",{onClick:a[1]||(a[1]=e=>i.scrolltoId("section2")),class:"cursor-pointer"},"Idea"),s("li",{onClick:a[2]||(a[2]=e=>i.scrolltoId("section3")),class:"cursor-pointer"},"Contact")])]),S])])};const T={class:"app-wrapper"},_={setup:e=>(e,s)=>(t(),l("div",T,[n(p),n(j),n(C),n(M),n(N)]))};app.AOS=new c.init({delay:80,duration:2200,easing:"ease",once:!1}),d(_).use(c).mount("#app");
