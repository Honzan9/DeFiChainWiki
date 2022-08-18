"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5320],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(r),f=a,m=c["".concat(l,".").concat(f)]||c[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7780:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"Dual setup (App + Node)",permalink:"/Dual_setup_App_and_Node/"},i=void 0,p={unversionedId:"auto/Dual_setup_App_and_Node",id:"auto/Dual_setup_App_and_Node",title:"Dual setup (App + Node)",description:"Draft for Dual Setup",source:"@site/docs/auto/Dual_setup_App_and_Node.md",sourceDirName:"auto",slug:"/auto/Dual_setup_App_and_Node",permalink:"/DeFiChain-Wiki/docs/auto/Dual_setup_App_and_Node",draft:!1,editUrl:"https://github.com/0ptim/DeFiChain-Wiki/tree/main/docs/auto/Dual_setup_App_and_Node.md",tags:[],version:"current",frontMatter:{title:"Dual setup (App + Node)",permalink:"/Dual_setup_App_and_Node/"},sidebar:"tutorialSidebar",previous:{title:"Delete DeFi App",permalink:"/DeFiChain-Wiki/docs/auto/Delete_DeFi_App"},next:{title:"Ecosystem",permalink:"/DeFiChain-Wiki/docs/auto/Ecosystem"}},l={},u=[{value:"Draft for Dual Setup",id:"draft-for-dual-setup",level:2},{value:"Steps:",id:"steps",level:3}],s={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"draft-for-dual-setup"},"Draft for Dual Setup"),(0,a.kt)("h3",{id:"steps"},"Steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the latest App version and Ain version from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/DeFiCh/"},"github"),"."),(0,a.kt)("li",{parentName:"ol"},"Start the App and wait till the full sync has finished (You can speed up this process by downloading a blockchain snapshot: ...)"),(0,a.kt)("li",{parentName:"ol"},"Close the App after the synchronization has finished"),(0,a.kt)("li",{parentName:"ol"},"Create a copy of the ","`",".defi","`"," folder. Eg: ","`","cp -r .defi .defi-node","`"," (Note: This folder contains the whole blockchain and requires a lot of space!)"),(0,a.kt)("li",{parentName:"ol"},"Edit the ","`","defi.conf","`"," in the new .defi folder",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"change the rpcport to an unused port, eg: ","`","rpcport=8553","`"),(0,a.kt)("li",{parentName:"ol"},"add the bind command and use an unused port: eg: ","`","bind=0.0.0.0:8554","`"),(0,a.kt)("li",{parentName:"ol"},"update the walletdir, so that it points to the new directory: eg: ","`","walletdir=/home/user/.defi_node","`"))),(0,a.kt)("li",{parentName:"ol"},"Start the node with the ","`","datadir","`"," option. Eg: ","`","./defid -datadir=/home/user/.defi_node","`"),(0,a.kt)("li",{parentName:"ol"},"Start the app"),(0,a.kt)("li",{parentName:"ol"},"Congrats! The App (with an integrated node) and separate node are now running simultaneously",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"You can use this setup to run as many nodes as you like!"),(0,a.kt)("li",{parentName:"ol"},"This can be useful if u like to have separate nodes for anchors/masternodes/different wallets")))))}d.isMDXComponent=!0}}]);