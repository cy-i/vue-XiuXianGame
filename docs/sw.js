if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const t=e=>n(e,o),l={module:{uri:o},exports:c,require:t};s[o]=Promise.all(i.map((e=>l[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/index-Ck76GlzN.css",revision:null},{url:"assets/css/vendor-modules-YA_9tFYu.css",revision:null},{url:"assets/js/index-D3_TbpFn.js",revision:null},{url:"assets/js/vendor-modules-DW-TdQVe.js",revision:null},{url:"index.html",revision:"ca959402563fbc4d22f68f3b576c089d"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"icons/icon-192x192.png",revision:"2a6235fc8c99d6150811d9768d4f5d46"},{url:"icons/icon-512x512.png",revision:"0a2b3110fb6da7104f4e5b779d3ac3c2"},{url:"manifest.webmanifest",revision:"acf344c86cd9e7020fec44dfaf6fd2c2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));