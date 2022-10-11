"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[818],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(a),p=o,y=h["".concat(s,".").concat(p)]||h[p]||d[p]||i;return a?n.createElement(y,r(r({ref:t},c),{},{components:a})):n.createElement(y,r({ref:t},c))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6967:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(7462),o=(a(7294),a(3905));const i={title:"Beginners Guide",description:"TODO - Short description of this page."},r=void 0,l={unversionedId:"auto/Beginners_Guide",id:"auto/Beginners_Guide",title:"Beginners Guide",description:"TODO - Short description of this page.",source:"@site/docs/auto/Beginners_Guide.md",sourceDirName:"auto",slug:"/auto/Beginners_Guide",permalink:"/DeFiChainWiki/docs/auto/Beginners_Guide",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/docs/auto/Beginners_Guide.md",tags:[],version:"current",lastUpdatedAt:1665506222,formattedLastUpdatedAt:"Oct 11, 2022",frontMatter:{title:"Beginners Guide",description:"TODO - Short description of this page."},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/DeFiChainWiki/docs/category/guides"},next:{title:"DeFiChain Advanced Tutorial",permalink:"/DeFiChainWiki/docs/auto/DeFiChain_Advanced_Tutorial"}},s={},u=[{value:"Decision: Which wallet should you use?",id:"decision-which-wallet-should-you-use",level:2},{value:"DeFiChain Light Wallet",id:"defichain-light-wallet",level:3},{value:"DFX Light Wallet",id:"dfx-light-wallet",level:3},{value:"Jellywallet",id:"jellywallet",level:3},{value:"Full-Node-Wallet",id:"full-node-wallet",level:3},{value:"Getting your first DFI-Coins (&quot;On-ramp&quot;)",id:"getting-your-first-dfi-coins-on-ramp",level:2},{value:"Exchanges",id:"exchanges",level:3},{value:"DFX-Swiss",id:"dfx-swiss",level:3},{value:"Cake",id:"cake",level:3}],c={toc:u};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you speak german and prefer videos you can start ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=q4MUebLlLzM&list=PLc-FB8e3YKYtju2G0O7bcUB1FE2t2SD0j"},"here \ud83c\udfac"),". Please be aware that information in the videos might be outdated due to continous development of DeFiChain and the production date of the video."),(0,o.kt)("p",null,"You prefer written information? Here we go!"),(0,o.kt)("h2",{id:"decision-which-wallet-should-you-use"},"Decision: Which wallet should you use?"),(0,o.kt)("p",null,"With a wallet-app you will be able to access your DFI-Coins, which are on the blockchain."),(0,o.kt)("p",null,"You can use your wallet especially for"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"administration of your DFI-portfolio"),(0,o.kt)("li",{parentName:"ul"},"send and receive coins"),(0,o.kt)("li",{parentName:"ul"},"use the DEX for swapping coins"),(0,o.kt)("li",{parentName:"ul"},"use your coins for ",(0,o.kt)("a",{parentName:"li",href:"/DeFiChainWiki/docs/auto/Liquidity_Mining"},"Liquidity Mining")),(0,o.kt)("li",{parentName:"ul"},"create a vault and manage the collateral for your loans"),(0,o.kt)("li",{parentName:"ul"},"take and payback a loan"),(0,o.kt)("li",{parentName:"ul"},"join future-swaps")),(0,o.kt)("p",null,"Currently you can choose among the following wallets"),(0,o.kt)("h3",{id:"defichain-light-wallet"},"DeFiChain Light Wallet"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(9184).Z,width:"531",height:"528"})),(0,o.kt)("p",null,"The Light Wallet is available for your Android- and iOS-smartphone. This app doesn't syncronize the complet blockchain. So it needs less memory and is faster ready for use. Furthermore the User Interface makes it easier to enter the DeFiChain ecosystem."),(0,o.kt)("p",null,"The light wallet uses a 24-words-seed-phrase to grant access to your funds. Please be sure you follow the safety recommendations when using the app."),(0,o.kt)("p",null,"The following list is not a necessarily complete one. You are completely responsible for your seed. Losing your seed means losing your funds!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Store your 24 words safely (a word-document on any online-device like a Laptop, Smartphone is not safe)"),(0,o.kt)("li",{parentName:"ul"},"Don't tell them to anyone beside maybe a person of trust for emergency cases"),(0,o.kt)("li",{parentName:"ul"},"Watch out on Telegram. Scammers are very tricky when trying to get your 24 words. Don't tell them anyone who writes you a private message in a chat."),(0,o.kt)("li",{parentName:"ul"},"Don't put your 24 words in an app or bot which you can't verify as legit.")),(0,o.kt)("p",null,"For convenience you place a 6-digit-code for signing transactions, so you don't need your 24 words every time you use the wallet. After entering three times a wrong code the app will be reset and you need your 24 words to get access to your funds again."),(0,o.kt)("h3",{id:"dfx-light-wallet"},"DFX Light Wallet"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(5395).Z,width:"540",height:"517"})),(0,o.kt)("p",null,"The DFX Light Wallet is a modified version of the Light wallet with several added functionalities concerning DFX.Swiss services. Among others those functions are Staking and participating in votings."),(0,o.kt)("p",null,"Further information can be found here in the ",(0,o.kt)("a",{parentName:"p",href:"/DeFiChainWiki/docs/auto/DFX_FAQ"},"DFX-Wiki-chapters")),(0,o.kt)("h3",{id:"jellywallet"},"Jellywallet"),(0,o.kt)("p",null,"The Jellywallet is the youngest member of the DeFiChain-Wallet-family. It is a Chrome-extension. So it is great for users who prefer working with a PC or laptop instead of a smartphone."),(0,o.kt)("p",null,"Jellywallet also uses a 24-words-seed-phrase which is full compatible with the LightWallet-seed. So you can use your wallet with a laptop as well as with a smartphone."),(0,o.kt)("p",null,"Usage of Vaults and Loans is not possible as of today."),(0,o.kt)("p",null,"The wallet with further information can be downloaded ",(0,o.kt)("a",{parentName:"p",href:"https://jellywallet.io/"},"here"),"."),(0,o.kt)("h3",{id:"full-node-wallet"},"Full-Node-Wallet"),(0,o.kt)("p",null,"For a beginner the start into DeFiChain with the Full-Node-Wallet is not recommended as the usability is not really intuitively possible. For technical oriented users who want to use a command line additionaly however it is the only option. Also when you want to run your own masternode you need the Full-Node-Wallet."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Full-Node-Wallet is harder to use than the Wallet for the smartphone"),(0,o.kt)("li",{parentName:"ul"},"This wallet always syncronizes the whole blockchain. So it need more memory capacities and time."),(0,o.kt)("li",{parentName:"ul"},'You do not have a 24-word-seed-phrase. The Full-Node-Wallet uses a safety-file. The so called "wallet.dat" and the password always need to be kept safe to have acces to your funds.'),(0,o.kt)("li",{parentName:"ul"},"You can download it here: ",(0,o.kt)("a",{parentName:"li",href:"https://defichain.com/downloads"},"https://defichain.com/downloads")," for macOS, Windows and Linux")),(0,o.kt)("h2",{id:"getting-your-first-dfi-coins-on-ramp"},'Getting your first DFI-Coins ("On-ramp")'),(0,o.kt)("p",null,"Buying DFI-Coins, also called on-ramp, is possible on several ways as we show in the following paragraphs. As fees are subject of changes we do not note them here and ask you to check them live on the company's websites."),(0,o.kt)("p",null,"The off-ramp (changing coins into FIAT) works on the same ways except Cake."),(0,o.kt)("h3",{id:"exchanges"},"Exchanges"),(0,o.kt)("p",null,"Crypto-exchanges is the traditional way to change your FIAT-money into Crypto-currencies. At the beginning you open an account at an exchange of your choice. Usually this is done with a username/password-combination. Mostly there is also a KYC-process during which you have to identify with a idendity-document (e.g. passport). Afterwards your account will be usable and you can transfer Euros, Dollars oder Swiss Francs e.g. by credit card, bank-transfer or paypal to the exchange and buy DFI."),(0,o.kt)("p",null,"Currenty DeFiChain is listed on the following exchanges:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bittrex"),(0,o.kt)("li",{parentName:"ul"},"Kucoin"),(0,o.kt)("li",{parentName:"ul"},"Huobi"),(0,o.kt)("li",{parentName:"ul"},"bit.com"),(0,o.kt)("li",{parentName:"ul"},"bybit"),(0,o.kt)("li",{parentName:"ul"},"Deepcoin"),(0,o.kt)("li",{parentName:"ul"},"Hotbit"),(0,o.kt)("li",{parentName:"ul"},"Latoken"),(0,o.kt)("li",{parentName:"ul"},"bitrue"),(0,o.kt)("li",{parentName:"ul"},"Hoo"),(0,o.kt)("li",{parentName:"ul"},"Uniswap")),(0,o.kt)("p",null,"Detailed information can be found ",(0,o.kt)("a",{parentName:"p",href:"https://defichain-ecosystem.com/de/overview/exchanges/"},"here"),"."),(0,o.kt)("p",null,"After your purchase you can send them from your exchange-account to your wallet. You need your DeFiChain-address to proceed which you find in your wallet. This transaction is compareable to a bank-transfer from one to another account - just in crypto instead of a bank."),(0,o.kt)("p",null,"As soon as the coins have arrived in your wallet (usually less than 20 minutes) you have all possibilities of the wonderful DeFiChain world."),(0,o.kt)("h3",{id:"dfx-swiss"},"DFX-Swiss"),(0,o.kt)("p",null,"DFX-Swiss was founded by community members and offers a very easy on-ramp-service by a simple SEPA-money transfer, even in realtime. That means as soon as you transfer your funds from your bankaccount you can find your Coins a few minutes later in your wallet. Many detailed information can be found ",(0,o.kt)("a",{parentName:"p",href:"/DeFiChainWiki/docs/auto/DFX_FAQ"},"in the DFX-chapters of this Wiki"),"."),(0,o.kt)("h3",{id:"cake"},"Cake"),(0,o.kt)("p",null,"As a Cake-User you can buy DFI-Coins with a money transfer or you use other crypto-coins (e.g. BTC, ETH) on Cake to swap into DFI. Be aware that Cake is not an exchange and you can't swap back from DFI there. You can send your DFI-Coins from cake to the wallet."))}d.isMDXComponent=!0},9184:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/beginnersguide_EN_01-d1dd4bb7eae49f77b9bbb658ab9a3aad.jpg"},5395:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/beginnersguide_EN_02-9e2a0ecde4cc32a95eb608c1d5a59fb0.jpg"}}]);