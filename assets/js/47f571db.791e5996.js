"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2302],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=i,f=p["".concat(c,".").concat(m)]||p[m]||s[m]||o;return a?n.createElement(f,r(r({ref:t},h),{},{components:a})):n.createElement(f,r({ref:t},h))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},678:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const o={title:"Blockchain folder",permalink:"/Blockchain_folder/"},r=void 0,l={unversionedId:"auto/Blockchain_folder",id:"auto/Blockchain_folder",title:"Blockchain folder",description:"Instructions for changing the directory of the blockchain data/snapshot for the DeFiChain",source:"@site/docs/auto/Blockchain_folder.md",sourceDirName:"auto",slug:"/auto/Blockchain_folder",permalink:"/DeFiChain-Wiki/docs/auto/Blockchain_folder",draft:!1,editUrl:"https://github.com/0ptim/DeFiChain-Wiki/tree/main/docs/auto/Blockchain_folder.md",tags:[],version:"current",frontMatter:{title:"Blockchain folder",permalink:"/Blockchain_folder/"},sidebar:"tutorialSidebar",previous:{title:"Block Rewards",permalink:"/DeFiChain-Wiki/docs/auto/Block_Rewards"},next:{title:"Cli commands",permalink:"/DeFiChain-Wiki/docs/auto/Cli_commands"}},c={},d=[{value:"Instructions for changing the directory of the blockchain data/snapshot for the DeFiChain",id:"instructions-for-changing-the-directory-of-the-blockchain-datasnapshot-for-the-defichain",level:2},{value:"Windows",id:"windows",level:3},{value:"Mac",id:"mac",level:3}],h={toc:d};function s(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"instructions-for-changing-the-directory-of-the-blockchain-datasnapshot-for-the-defichain"},"Instructions for changing the directory of the blockchain data/snapshot for the DeFiChain"),(0,i.kt)("h3",{id:"windows"},"Windows"),(0,i.kt)("p",null,"Follow this procedure:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Make sure that the DeFiChain app is closed"),(0,i.kt)("li",{parentName:"ol"},"Using Explorer go to directory ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\Users\\<username>\\.defi")," (Make sure you ",(0,i.kt)("a",{parentName:"li",href:"/DeFiChain-Wiki/docs/auto/Show_hidden_folders"},"see hidden folders"),")"),(0,i.kt)("li",{parentName:"ol"},"Open the file ",(0,i.kt)("inlineCode",{parentName:"li"},"defi.conf")," in your favorite text editor (e.g. Notepad)"),(0,i.kt)("li",{parentName:"ol"},"Add the line: ",(0,i.kt)("inlineCode",{parentName:"li"},"datadir=<storage directory blockchain data>"),". ",(0,i.kt)("strong",{parentName:"li"},"Important"),": The line has to be added before the ",(0,i.kt)("inlineCode",{parentName:"li"},"[main]")," section! \u2192 Instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"<storage directory blockchain data>")," you have to enter the path where you want to move the blockchain folder"),(0,i.kt)("li",{parentName:"ol"},"If you move the default folder from ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\Users\\<username>\\AppData\\Roaming\\DeFi Blockchain")," to the new directory also change the wallet directory accordingly by adding ",(0,i.kt)("inlineCode",{parentName:"li"},"wallets")," to the data directory: ",(0,i.kt)("inlineCode",{parentName:"li"},"walletdir=<storage directory blockchain data>\\wallets"))),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"rpcauth=something\nrpcuser=something\nrpcpassword=something\nrpcpassword=something\nrpcpassword=something\ndatadir=D:\\defichain\n[main]\nwallet=Wallet.dat\nwalletdir=D:\\defichain\\wallets\n")),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Save the file and start the app"),(0,i.kt)("li",{parentName:"ol"},"The app now recreates the blockchain folders in the datadir and will start with a complete download of the whole blockchain. (16.3.2021: roughly 25 GB)"),(0,i.kt)("li",{parentName:"ol"},"If a blockchain folder already exists in the new path (e.g. because you moved it), then enter it in the path in ",(0,i.kt)("inlineCode",{parentName:"li"},"defi.conf"),". For example ",(0,i.kt)("inlineCode",{parentName:"li"},"datadir=D:\\defichain\\Defi Blockchain"),". This makes it possible to copy the blockchain into the new directory beforehand without having to start a new sync.")),(0,i.kt)("p",null,"App v2.3.3 works correctly with a moved directory."),(0,i.kt)("h3",{id:"mac"},"Mac"),(0,i.kt)("p",null,"Follow this procedure:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Make sure that the DeFiChain app is closed"),(0,i.kt)("li",{parentName:"ol"},"Go to directory ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.defi")," (Maybe you have to press ",(0,i.kt)("inlineCode",{parentName:"li"},"[CMD]")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"[SHIFT]")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"[.]")," to ",(0,i.kt)("a",{parentName:"li",href:"/DeFiChain-Wiki/docs/auto/Show_hidden_folders"},"see hidden folders")," or use ",(0,i.kt)("inlineCode",{parentName:"li"},"[CMD]")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"[SHIFT]")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"[G]")," in Finder in your home folder and enter .defi in the popup)."),(0,i.kt)("li",{parentName:"ol"},"Open the file ",(0,i.kt)("inlineCode",{parentName:"li"},"defi.conf")," in your favourite text editor"),(0,i.kt)("li",{parentName:"ol"},"Add the line: ",(0,i.kt)("inlineCode",{parentName:"li"},"datadir=<storage directory blockchain data>"),". Important: The line has to be added before the ",(0,i.kt)("inlineCode",{parentName:"li"},"[main]")," section! \u2192 Instead of this variable ",(0,i.kt)("inlineCode",{parentName:"li"},"<storage directory blockchain data>")," you have to add the path where you want to move the blockchain folder"),(0,i.kt)("li",{parentName:"ol"},"If you move the default folder from ",(0,i.kt)("inlineCode",{parentName:"li"},"~/Library/Application Support/DeFi")," to the new directory also change the wallet directory accordingly by adding ",(0,i.kt)("inlineCode",{parentName:"li"},"wallets")," to the data directory:",(0,i.kt)("inlineCode",{parentName:"li"},"walletdir=<storage directory blockchain data>/wallets"))),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"rpcauth=something\nrpcuser=something\nrpcpassword=something\nrpcpassword=something\nrpcpassword=something\ndatadir=/Users/me/defichain\n[main]\nwallet=wallet.dat\nwalletdir=/Users/me/defichain/wallets\n")),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Save the file and start the app"),(0,i.kt)("li",{parentName:"ol"},"The app now recreates the blockchain folders in the datadir and will start with a complete download of the whole blockchain. (16.3.2021: roughly 25 GB)"),(0,i.kt)("li",{parentName:"ol"},"If a blockchain folder already exists in the new path, then enter it in the path. For example ",(0,i.kt)("inlineCode",{parentName:"li"},"datadir=/User/me/Defi"),". This makes it possible to copy the blockchain into the new directory beforehand without having to start a new sync.")),(0,i.kt)("p",null,"App v2.3.3 works correctly with a moved directory."))}s.isMDXComponent=!0}}]);