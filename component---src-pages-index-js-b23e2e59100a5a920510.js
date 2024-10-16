/*! For license information please see component---src-pages-index-js-b23e2e59100a5a920510.js.LICENSE.txt */
"use strict";(self.webpackChunkpersonal_portfolio=self.webpackChunkpersonal_portfolio||[]).push([[293],{2729:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,i=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,r=new RegExp("^"+s.source),c=new RegExp(s.source+i.source,"gu"),l=new RegExp("\\d+"+i.source,"gu"),o=(e,i)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(i={pascalCase:!1,preserveConsecutiveUppercase:!1,...i},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===i.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(i.locale),o=!1===i.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(i.locale);if(1===e.length)return i.pascalCase?o(e):s(e);return e!==s(e)&&(e=((e,n,i)=>{let s=!1,r=!1,c=!1;for(let l=0;l<e.length;l++){const o=e[l];s&&t.test(o)?(e=e.slice(0,l)+"-"+e.slice(l),s=!1,c=r,r=!0,l++):r&&c&&a.test(o)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),c=r,r=!1,s=!0):(s=n(o)===o&&i(o)!==o,c=r,r=i(o)===o&&n(o)!==o)}return e})(e,s,o)),e=e.replace(r,""),e=i.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,s):s(e),i.pascalCase&&(e=o(e.charAt(0))+e.slice(1)),((e,t)=>(c.lastIndex=0,l.lastIndex=0,e.replace(c,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,o)};e.exports=o,e.exports.default=o},2532:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return k},P:function(){return v},S:function(){return F},_:function(){return c},a:function(){return r},b:function(){return d},g:function(){return m},h:function(){return l}});var n=a(6540),i=(a(2729),a(5556)),s=a.n(i);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t.indexOf(a=s[n])>=0||(i[a]=e[a]);return i}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function o(e,t,a){const n={};let i="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,a,n,i){return void 0===i&&(i={}),r({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:r({},i,{opacity:t?1:0})})}function m(e,t,a,n,i,s,c,l){const o={};s&&(o.backgroundColor=s,"fixed"===a?(o.width=n,o.height=i,o.backgroundColor=s,o.position="relative"):("constrained"===a||"fullWidth"===a)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),c&&(o.objectFit=c),l&&(o.objectPosition=l);const d=r({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:r({opacity:t?0:1,transition:"opacity 500ms linear"},o)});return d}const p=["children"],u=function(e){let{layout:t,width:a,height:i}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${i}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=c(e,p);return n.createElement(n.Fragment,null,n.createElement(u,r({},a)),t,null)},b=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:i,alt:s="",shouldLoad:l}=e,o=c(e,b);return n.createElement("img",r({},o,{decoding:"async",loading:i,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:s}))},w=function(e){let{fallback:t,sources:a=[],shouldLoad:i=!0}=e,s=c(e,h);const l=s.sizes||(null==t?void 0:t.sizes),o=n.createElement(f,r({},s,t,{sizes:l,shouldLoad:i}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return n.createElement("source",{key:`${t}-${s}-${a}`,type:s,media:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,sizes:l})})),o):o};var y;f.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},w.displayName="Picture",w.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const E=["fallback"],v=function(e){let{fallback:t}=e,a=c(e,E);return t?n.createElement(w,r({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",r({},a))};v.displayName="Placeholder",v.propTypes={fallback:i.string,sources:null==(y=w.propTypes)?void 0:y.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const k=function(e){return n.createElement(n.Fragment,null,n.createElement(w,r({},e)),n.createElement("noscript",null,n.createElement(w,r({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=w.propTypes;const x=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],N=e=>e.replace(/\n/g,""),L=function(e,t,a){for(var n=arguments.length,i=new Array(n>3?n-3:0),r=3;r<n;r++)i[r-3]=arguments[r];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(i)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},C={image:s().object.isRequired,alt:L},j=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],T=new Set;let O,M;const _=function(e){let{as:t="div",image:i,style:s,backgroundColor:d,className:m,class:p,onStartLoad:u,onLoad:g,onError:b}=e,h=c(e,j);const{width:f,height:w,layout:y}=i,E=o(f,w,y),{style:v,className:k}=E,x=c(E,I),S=(0,n.useRef)(),N=(0,n.useMemo)((()=>JSON.stringify(i.images)),[i.images]);p&&(m=p);const L=function(e,t,a){let n="";return"fullWidth"===e&&(n=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(n=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),n}(y,f,w);return(0,n.useEffect)((()=>{O||(O=a.e(108).then(a.bind(a,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return M=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==u||u({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==u||u({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(N);if(M&&T.has(N))return;let t,n;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:c}=e;S.current&&(S.current.innerHTML=a(r({isLoading:!0,isLoaded:T.has(N),image:i},h)),T.has(N)||(t=requestAnimationFrame((()=>{S.current&&(n=c(S.current,N,T,s,u,g,b))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[i]),(0,n.useLayoutEffect)((()=>{T.has(N)&&M&&(S.current.innerHTML=M(r({isLoading:T.has(N),isLoaded:T.has(N),image:i},h)),null==u||u({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,n.createElement)(t,r({},x,{style:r({},v,s,{backgroundColor:d}),className:`${k}${m?` ${m}`:""}`,ref:S,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},z=(0,n.memo)((function(e){return e.image?(0,n.createElement)(_,e):null}));z.propTypes=C,z.displayName="GatsbyImage";const A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function R(e){return function(t){let{src:a,__imageData:i,__error:s}=t,l=c(t,A);return s&&console.warn(s),i?n.createElement(e,r({image:i},l)):(console.warn("Image not loaded",a),null)}}const $=R((function(e){let{as:t="div",className:a,class:i,style:s,image:l,loading:p="lazy",imgClassName:u,imgStyle:b,backgroundColor:h,objectFit:f,objectPosition:w}=e,y=c(e,x);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;i&&(a=i),b=r({objectFit:f,objectPosition:w,backgroundColor:h},b);const{width:E,height:L,layout:C,images:j,placeholder:I,backgroundColor:T}=l,O=o(E,L,C),{style:M,className:_}=O,z=c(O,S),A={fallback:void 0,sources:[]};return j.fallback&&(A.fallback=r({},j.fallback,{srcSet:j.fallback.srcSet?N(j.fallback.srcSet):void 0})),j.sources&&(A.sources=j.sources.map((e=>r({},e,{srcSet:N(e.srcSet)})))),n.createElement(t,r({},z,{style:r({},M,s,{backgroundColor:h}),className:`${_}${a?` ${a}`:""}`}),n.createElement(g,{layout:C,width:E,height:L},n.createElement(v,r({},m(I,!1,C,E,L,T,f,w))),n.createElement(k,r({"data-gatsby-image-ssr":"",className:u},y,d("eager"===p,!1,A,p,b)))))})),D=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),i=2;i<a;i++)n[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(n)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},q=new Set(["fixed","fullWidth","constrained"]),J={src:s().string.isRequired,alt:L,width:D,height:D,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!q.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};$.displayName="StaticImage",$.propTypes=J;const F=R(z);F.displayName="StaticImage",F.propTypes=J},3992:function(e,t,a){a.r(t),a.d(t,{Head:function(){return f},default:function(){return w}});var n=a(6540),i=a(2532),s=a(4810);var r=()=>n.createElement("div",{className:"  personal-msg-wrapper  "},n.createElement("h1",{className:"text-5xl justify-center text-center  mt-5"},"Hello, I'm Jess"),n.createElement("h5",{className:" text-base  font-normal mb-4 text-gray-400"},"Graduate Front-end / Software Developer"),n.createElement("h5",{className:" text-base  font-normal mb-4 text-gray-400"},"Perth, Western Australia"),n.createElement("div",{className:"top-skills flex  justify-around gap-3 text-center"},n.createElement(i.S,{src:"../assets/icons/html.png",alt:"html logo",width:30,height:30,__imageData:a(4405)}),n.createElement(i.S,{src:"../assets/icons/javascript.png",alt:"javascript logo",width:30,height:30,__imageData:a(2665)}),n.createElement(i.S,{src:"../assets/icons/tailwind-css.png",alt:"tailwind css logo",width:30,height:30,__imageData:a(5914)}),n.createElement(i.S,{src:"../assets/icons/react.png",alt:"react logo",width:30,height:30,__imageData:a(7453)})),n.createElement("div",{className:"social-media-wrapper"},n.createElement("h6",null," Find me on "),n.createElement("a",{href:"https://github.com/Jschong122"},n.createElement(i.S,{src:"../assets/icons/github-mark-white.png",alt:"github logo",width:30,height:30,__imageData:a(9973)})),n.createElement("a",{href:"https://www.linkedin.com/in/wai-suen-chong-887907239/"},n.createElement(i.S,{src:"../assets/icons/LinkedIn-logo.png",alt:"LinkedIn logo",width:30,height:30,__imageData:a(214)}))));const c=(...e)=>e.filter(((e,t,a)=>Boolean(e)&&a.indexOf(e)===t)).join(" ");var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const o=(0,n.forwardRef)((({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:i,className:s="",children:r,iconNode:o,...d},m)=>(0,n.createElement)("svg",{ref:m,...l,width:t,height:t,stroke:e,strokeWidth:i?24*Number(a)/Number(t):a,className:c("lucide",s),...d},[...o.map((([e,t])=>(0,n.createElement)(e,t))),...Array.isArray(r)?r:[r]]))),d=((e,t)=>{const a=(0,n.forwardRef)((({className:a,...i},s)=>{return(0,n.createElement)(o,{ref:s,iconNode:t,className:c(`lucide-${r=e,r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,a),...i});var r}));return a.displayName=`${e}`,a})("MoveRight",[["path",{d:"M18 8L22 12L18 16",key:"1r0oui"}],["path",{d:"M2 12H22",key:"1m8cig"}]]);var m=e=>{let{title:t}=e;return n.createElement("h1",{className:"title-text"}," ",t," ")};var p=()=>n.createElement("div",null,n.createElement(m,{title:"INTRODUCTION"}),n.createElement("div",{className:"content-inside-div "},n.createElement("p",{className:""},"I am a graduate web developdfer who transitioned from animal science to software engineering. I completed a"," ",n.createElement("span",{className:"font-extrabold"}," ","six-month coding bootcamp, gaining skills in HTML, CSS, React, Next.js, Express.js"),", and more. My analytical skills from animal science have been invaluable in optimizing web projects. I build projects that make tasks more efficient, such as a leave management system for employees and managers, and a medical appointment system for real-time communication between patients and doctors. My experience includes front-end development with React, back-end development with Express.js, and creating responsive web designs."),n.createElement(s.N_,{to:"/about",id:"intro-link"},n.createElement(d,null),n.createElement("span",{className:"ml-2 "},"Learn more about me"))));var u=()=>n.createElement("div",null,n.createElement(m,{title:"SKILLS"}),n.createElement("div",{className:"content-inside-div xl:grid lg:grid-cols-4 lg:grid-rows-2 items-start gap-7 "},n.createElement("div",{className:"grid grid-cols-1    p-5"},n.createElement("h4",null,"Front-end"),n.createElement("ul",{className:" list-disc ml-5"},n.createElement("li",null,"HTML"),n.createElement("li",null,"CSS"),n.createElement("li",null,"JavaScript"),n.createElement("li",null,"Tailwind CSS (Styling)"),n.createElement("li",null,"Bootstrap (Styling)"),n.createElement("li",null,"Shadcn UI (Component Library)"))),n.createElement("div",{className:"grid grid-cols-1   p-5"},n.createElement("h4",null,"Back-end"),n.createElement("ul",{className:" list-disc flex flex-col ml-5"},n.createElement("li",null,"Node.js (Runtime)"),n.createElement("li",null,"Express (Framework)"),n.createElement("li",null,"MongoDB (Database)"),n.createElement("li",null,"Socket.io (Real-time Communication)"))),n.createElement("div",{className:"grid grid-cols-1   p-5"},n.createElement("h4",null,"Frameworks"),n.createElement("ul",{className:" list-disc flex flex-col ml-5"},n.createElement("li",null,"React (Front-end)"),n.createElement("li",null,"Next.js (Full-stack Framework)"),n.createElement("li",null,"Gatsby (Static Site Generator)"))),n.createElement("div",{className:"grid   p-5"},n.createElement("h4",null,"Tools"),n.createElement("ul",{className:" list-disc flex flex-col ml-5 "},n.createElement("li",null,"Mongoose (Database ODM)"),n.createElement("li",null,"Sequelize (Database ODM)"),n.createElement("li",null,"Cloudinary (Media Storage)"),n.createElement("li",null,"NextAuth (Authentication)")))));var g=e=>{let{title:t,caption:s,skills:r="",link:c,demo:l,children:o}=e;const d=r.split(",").map((e=>e.trim()));return n.createElement("div",null,n.createElement("div",{className:"bg-slate-600/40 rounded-lg max-h-200 p-5 my-5"},n.createElement("div",{className:"project-title text-xl font-bold "},t),n.createElement("ul",null,n.createElement("li",{className:"project-body text-gray-400 my-2 "},s),n.createElement("li",{className:"project-skills mt-3 flex flex-wrap gap-2"},d.map(((e,t)=>n.createElement("span",{key:t,className:" text-emerald-200 bg-emerald-400/40 px-2 rounded-lg"},e))))),n.createElement("div",{className:"div-link-demo mt-5 "},c&&c.includes("http")&&n.createElement("span",{className:" font-bold inline-block"},n.createElement("a",{href:c,className:"text-inherit "}," ",n.createElement(i.S,{src:"../assets/icons/github-mark-white.png",alt:"github logo",width:25,className:"mr-2",__imageData:a(6022)}),"View on GitHub"))||n.createElement("p",{style:{display:"block"}}," ",c," "),l&&n.createElement("span",{className:"inline-block outline outline-2 ml-5  px-3 outline-[#2c8a75] rounded-md"},n.createElement("a",{href:l,className:"demo-link"},"Demo"))||" ")))};var b=()=>n.createElement("div",null,n.createElement(m,{title:"PROJECTS"}),n.createElement("div",{className:"projects-wrapper "},n.createElement("ul",null,n.createElement("li",null,n.createElement(g,{title:"Personal Website",caption:"My personal portfolio",skills:"HTML, CSS, React, Gatsby, Tailwind CSS",link:"You are viewing right now"})),n.createElement("li",null,n.createElement(g,{title:"Dog Breeds Search Tool",caption:"A simple static website project to demonstrate foundational web development skills using HTML, CSS, and JavaScript.",skills:"HTML, CSS, JavaScript",link:"https://github.com/Jschong122/IOD-mini-project1/tree/main",demo:"https://dog-breed-search-tool.netlify.app/"})),n.createElement("li",null,n.createElement(g,{title:"Medical Appointment System with real time chat interface",caption:"The Capstone Project is a Medical Appointment System that enables real-time chat and note sharing between patients and doctors, using technologies like NextAuth and Socket.io.",skills:"Next.js, NextAuth, Tailwind CSS, Express.js, Socket.io, Mongodb",link:"https://github.com/Jschong122/capstone"})),n.createElement("li",null,n.createElement(g,{title:"Online Leave Form System",caption:"The online leave form system streamlines employee leave requests. Employees can submit, view, edit, or delete their requests before a manager decides. Managers can review and approve or reject requests, ensuring an efficient process.",skills:" Next.js, NextAuth, Express.js, Sequelize",link:"https://github.com/Jschong122/IOD-mini-project-2"})))));var h=()=>n.createElement("div",null,n.createElement(m,{title:"EDUCATION"}),n.createElement("h6",{className:"  text-gray-400 tracking-wider m-5"},"Curtin University - Institute of Data - Software Engineering Program"),n.createElement("h6",{className:"  text-gray-400 tracking-wider m-5"},"Murdoch University - Animal Science & Animal Health"));const f=()=>n.createElement("title",null,"Jess Chong's portfolio");var w=()=>n.createElement("div",{className:"m-5"},n.createElement("div",{className:"index-wrapper"},n.createElement("div",{className:"left-index"},n.createElement(r,null),n.createElement(h,null)),n.createElement("div",{className:"right-index"},n.createElement(p,null),n.createElement(b,null),n.createElement(u,null))),n.createElement("div",{className:"  "},n.createElement("p",null," Last updated on 10/10/2024")))},214:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#2868b8","images":{"fallback":{"src":"/static/1b18d461ce75c75fdb4d7b6ec08b3e65/53973/LinkedIn-logo.png","srcSet":"/static/1b18d461ce75c75fdb4d7b6ec08b3e65/22867/LinkedIn-logo.png 8w,\\n/static/1b18d461ce75c75fdb4d7b6ec08b3e65/7961d/LinkedIn-logo.png 15w,\\n/static/1b18d461ce75c75fdb4d7b6ec08b3e65/53973/LinkedIn-logo.png 30w,\\n/static/1b18d461ce75c75fdb4d7b6ec08b3e65/7ab40/LinkedIn-logo.png 60w","sizes":"(min-width: 30px) 30px, 100vw"},"sources":[{"srcSet":"/static/1b18d461ce75c75fdb4d7b6ec08b3e65/5d252/LinkedIn-logo.webp 8w,\\n/static/1b18d461ce75c75fdb4d7b6ec08b3e65/f57b3/LinkedIn-logo.webp 15w,\\n/static/1b18d461ce75c75fdb4d7b6ec08b3e65/bde72/LinkedIn-logo.webp 30w,\\n/static/1b18d461ce75c75fdb4d7b6ec08b3e65/927d1/LinkedIn-logo.webp 60w","type":"image/webp","sizes":"(min-width: 30px) 30px, 100vw"}]},"width":30,"height":30}')},5914:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/ee832049c505518ae9a0ccf76e5f706a/53973/tailwind-css.png","srcSet":"/static/ee832049c505518ae9a0ccf76e5f706a/22867/tailwind-css.png 8w,\\n/static/ee832049c505518ae9a0ccf76e5f706a/7961d/tailwind-css.png 15w,\\n/static/ee832049c505518ae9a0ccf76e5f706a/53973/tailwind-css.png 30w,\\n/static/ee832049c505518ae9a0ccf76e5f706a/7ab40/tailwind-css.png 60w","sizes":"(min-width: 30px) 30px, 100vw"},"sources":[{"srcSet":"/static/ee832049c505518ae9a0ccf76e5f706a/5d252/tailwind-css.webp 8w,\\n/static/ee832049c505518ae9a0ccf76e5f706a/f57b3/tailwind-css.webp 15w,\\n/static/ee832049c505518ae9a0ccf76e5f706a/bde72/tailwind-css.webp 30w,\\n/static/ee832049c505518ae9a0ccf76e5f706a/927d1/tailwind-css.webp 60w","type":"image/webp","sizes":"(min-width: 30px) 30px, 100vw"}]},"width":30,"height":30}')},9973:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/1dee40f2668d5c719eafa2c89296f5e7/53973/github-mark-white.png","srcSet":"/static/1dee40f2668d5c719eafa2c89296f5e7/22867/github-mark-white.png 8w,\\n/static/1dee40f2668d5c719eafa2c89296f5e7/7961d/github-mark-white.png 15w,\\n/static/1dee40f2668d5c719eafa2c89296f5e7/53973/github-mark-white.png 30w,\\n/static/1dee40f2668d5c719eafa2c89296f5e7/7ab40/github-mark-white.png 60w","sizes":"(min-width: 30px) 30px, 100vw"},"sources":[{"srcSet":"/static/1dee40f2668d5c719eafa2c89296f5e7/5d252/github-mark-white.webp 8w,\\n/static/1dee40f2668d5c719eafa2c89296f5e7/f57b3/github-mark-white.webp 15w,\\n/static/1dee40f2668d5c719eafa2c89296f5e7/bde72/github-mark-white.webp 30w,\\n/static/1dee40f2668d5c719eafa2c89296f5e7/927d1/github-mark-white.webp 60w","type":"image/webp","sizes":"(min-width: 30px) 30px, 100vw"}]},"width":30,"height":30}')},7453:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/2e1624700708bc39397574ba95bc37ec/53973/react.png","srcSet":"/static/2e1624700708bc39397574ba95bc37ec/22867/react.png 8w,\\n/static/2e1624700708bc39397574ba95bc37ec/7961d/react.png 15w,\\n/static/2e1624700708bc39397574ba95bc37ec/53973/react.png 30w,\\n/static/2e1624700708bc39397574ba95bc37ec/7ab40/react.png 60w","sizes":"(min-width: 30px) 30px, 100vw"},"sources":[{"srcSet":"/static/2e1624700708bc39397574ba95bc37ec/5d252/react.webp 8w,\\n/static/2e1624700708bc39397574ba95bc37ec/f57b3/react.webp 15w,\\n/static/2e1624700708bc39397574ba95bc37ec/bde72/react.webp 30w,\\n/static/2e1624700708bc39397574ba95bc37ec/927d1/react.webp 60w","type":"image/webp","sizes":"(min-width: 30px) 30px, 100vw"}]},"width":30,"height":30}')},4405:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/27b0afc8d7069fad77a6ece74eeb7e83/53973/html.png","srcSet":"/static/27b0afc8d7069fad77a6ece74eeb7e83/22867/html.png 8w,\\n/static/27b0afc8d7069fad77a6ece74eeb7e83/7961d/html.png 15w,\\n/static/27b0afc8d7069fad77a6ece74eeb7e83/53973/html.png 30w","sizes":"(min-width: 30px) 30px, 100vw"},"sources":[{"srcSet":"/static/27b0afc8d7069fad77a6ece74eeb7e83/5d252/html.webp 8w,\\n/static/27b0afc8d7069fad77a6ece74eeb7e83/f57b3/html.webp 15w,\\n/static/27b0afc8d7069fad77a6ece74eeb7e83/bde72/html.webp 30w","type":"image/webp","sizes":"(min-width: 30px) 30px, 100vw"}]},"width":30,"height":30}')},2665:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/d8b359bb45cbe32632e8fc7901b27615/53973/javascript.png","srcSet":"/static/d8b359bb45cbe32632e8fc7901b27615/22867/javascript.png 8w,\\n/static/d8b359bb45cbe32632e8fc7901b27615/7961d/javascript.png 15w,\\n/static/d8b359bb45cbe32632e8fc7901b27615/53973/javascript.png 30w","sizes":"(min-width: 30px) 30px, 100vw"},"sources":[{"srcSet":"/static/d8b359bb45cbe32632e8fc7901b27615/5d252/javascript.webp 8w,\\n/static/d8b359bb45cbe32632e8fc7901b27615/f57b3/javascript.webp 15w,\\n/static/d8b359bb45cbe32632e8fc7901b27615/bde72/javascript.webp 30w","type":"image/webp","sizes":"(min-width: 30px) 30px, 100vw"}]},"width":30,"height":30}')},6022:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/1dee40f2668d5c719eafa2c89296f5e7/9ab2f/github-mark-white.png","srcSet":"/static/1dee40f2668d5c719eafa2c89296f5e7/47ee7/github-mark-white.png 6w,\\n/static/1dee40f2668d5c719eafa2c89296f5e7/86ee2/github-mark-white.png 13w,\\n/static/1dee40f2668d5c719eafa2c89296f5e7/9ab2f/github-mark-white.png 25w,\\n/static/1dee40f2668d5c719eafa2c89296f5e7/68335/github-mark-white.png 50w","sizes":"(min-width: 25px) 25px, 100vw"},"sources":[{"srcSet":"/static/1dee40f2668d5c719eafa2c89296f5e7/eee53/github-mark-white.webp 6w,\\n/static/1dee40f2668d5c719eafa2c89296f5e7/68795/github-mark-white.webp 13w,\\n/static/1dee40f2668d5c719eafa2c89296f5e7/3cf3a/github-mark-white.webp 25w,\\n/static/1dee40f2668d5c719eafa2c89296f5e7/8b44f/github-mark-white.webp 50w","type":"image/webp","sizes":"(min-width: 25px) 25px, 100vw"}]},"width":25,"height":24}')}}]);
//# sourceMappingURL=component---src-pages-index-js-b23e2e59100a5a920510.js.map