if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const a=e=>n(e,l),u={module:{uri:l},exports:o,require:a};s[l]=Promise.all(i.map((e=>u[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-74f2ef77"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"aluraIcone.png",revision:"f52d6a7785237b1c69ced7273247e209"},{url:"aluraIcone192.png",revision:"69ee2c09cea3219410f244b350264b2d"},{url:"aluraIcone512.png",revision:"5286e2201d4a944b5a5d2309ce533c4a"},{url:"assets/bannerAlura-CGN1WNRs.png",revision:null},{url:"assets/imgCards/backend.png",revision:null},{url:"assets/imgCards/backend2.png",revision:null},{url:"assets/imgCards/backend3.png",revision:null},{url:"assets/imgCards/frontend.png",revision:null},{url:"assets/imgCards/frontend2.png",revision:null},{url:"assets/imgCards/frontend3.png",revision:null},{url:"assets/imgCards/mobile.png",revision:null},{url:"assets/imgCards/mobile2.png",revision:null},{url:"assets/imgCards/mobile3.png",revision:null},{url:"assets/imgVideo-CgPV9mHl.png",revision:null},{url:"assets/index-BQGkt_bt.js",revision:null},{url:"assets/index-puCsLI53.css",revision:null},{url:"assets/logoAlura/logoAluraFlix.png",revision:null},{url:"assets/logoAluraFlix-C3pj7TTZ.png",revision:null},{url:"index.html",revision:"be50b284975443ea93b29d463c489378"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"aluraIcone192.png",revision:"69ee2c09cea3219410f244b350264b2d"},{url:"aluraIcone512.png",revision:"5286e2201d4a944b5a5d2309ce533c4a"},{url:"manifest.webmanifest",revision:"23d4c9572a64027859f4e0d1d120a41b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({request:e})=>"image"===e.destination),new e.CacheFirst({cacheName:"images-cache",plugins:[new e.ExpirationPlugin({maxEntries:20,maxAgeSeconds:604800})]}),"GET")}));
