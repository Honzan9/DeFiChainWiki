"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7151],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"Impermanent Loss",permalink:"/Impermanent_Loss/"},i=void 0,s={unversionedId:"auto/Impermanent_Loss",id:"auto/Impermanent_Loss",title:"Impermanent Loss",description:"Assets of a liquidity pool can have strong price fluctuations (in relation to each other). Arbitrageurs can arbitrage differences between exchanges, which is why liquidity pools stay balanced, but it comes at a cost to liquidity miners.",source:"@site/docs/auto/Impermanent_Loss.md",sourceDirName:"auto",slug:"/auto/Impermanent_Loss",permalink:"/DeFiChain-Wiki/docs/auto/Impermanent_Loss",draft:!1,editUrl:"https://github.com/0ptim/DeFiChain-Wiki/tree/main/docs/auto/Impermanent_Loss.md",tags:[],version:"current",frontMatter:{title:"Impermanent Loss",permalink:"/Impermanent_Loss/"},sidebar:"tutorialSidebar",previous:{title:'How to "rescue" stuck DFI',permalink:"/DeFiChain-Wiki/docs/auto/How_to_rescue_stuck_DFI"},next:{title:"Import BTC private key to Electrum",permalink:"/DeFiChain-Wiki/docs/auto/Import_BTC_private_key_to_Electrum"}},l={},p=[],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Assets of a liquidity pool can have strong price fluctuations (in relation to each other). Arbitrageurs can arbitrage differences between exchanges, which is why liquidity pools stay balanced, but it comes at a cost to liquidity miners."),(0,o.kt)("p",null,"Here is a demonstration:"),(0,o.kt)("p",null,"There is currently 9,000 DFI and 9 BTC in the BTC-DFI pool. The ratio of the pool is 1,000 DFI/BTC. When someone adds liquidity, they must add in that exact proportion. They add 1,000 DFI and 1 BTC to the pool (value 2,000 DFI), which means that the pool size is now 10,000 DFI and 10 BTC. So, their proportion of the pool is 10%, meaning that when they would like to withdraw, they can remove 10% of the liquidity pool. Suddenly, the price of BTC versus DFI goes up 4x. The pool must be rebalanced in order for the pool to have the new ratio, 4,000 DFI/BTC. However, it must maintain the the xy-constant of 100,000 (the two pools' liquidity amounts multiplied together), or 10,000 DFI ","*"," 10 BTC. To fulfill both conditions, the amount of BTC in the pool goes down to 5, while the amount of DFI increases to 20,000. This happens by arbitrageurs who add DFI to the pool and take BTC to sell for a profit (at the cost of providers). Now, if the investor takes out their 10% share, they will receive 0.5 BTC and 2,000 DFI. They sell their BTC, and receive another 2,000 DFI. They now have 4,000 DFI, a 100% increase from their original 2,000 DFI. However, if they had just held their 1 BTC and their 1,000 DFI, they would be able to swap their whole BTC to 4,000 DFI and have 5,000 DFI instead, resulting in an impermanent loss of 1,000 DFI or 20%."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Rule of thumb: The longer you wait, the lesser is the risk of a loss.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A detailed explanation of impermanent loss can be found here:")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://julianhosp.com/impermanent-loss-other-liquidity-mining-risks-explained/"},"https://julianhosp.com/impermanent-loss-other-liquidity-mining-risks-explained/")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A calculator to calculate the impermanent loss is here:")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://decentyields.com/impermanent-loss-calculator"},"https://decentyields.com/impermanent-loss-calculator")),(0,o.kt)("p",null,"and:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.krypto-magazin.de/impermanent-loss-rechner/"},"https://www.krypto-magazin.de/impermanent-loss-rechner/")," (in German)"),(0,o.kt)("p",null,"Example: You use the BTC-DFI liquidity pool (Asset 1: BTC; Asset 2: DFI). The price of DFI doubles, while BTC is not changing of all, or DFI has increased against BTC by 2x. You should key in into the calculator:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Asset 1: 0%")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Asset 2: 100%")),(0,o.kt)("p",null,'After hitting "Calculate" it will compute an impermanent loss of 5.72%.'))}c.isMDXComponent=!0}}]);