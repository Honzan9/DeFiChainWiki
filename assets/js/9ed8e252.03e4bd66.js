"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3165],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var l=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,o=function(e,t){if(null==e)return{};var a,l,o={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=l.createContext({}),m=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=m(e.components);return l.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=m(a),k=o,u=c["".concat(s,".").concat(k)]||c[k]||p[k]||n;return a?l.createElement(u,r(r({ref:t},d),{},{components:a})):l.createElement(u,r({ref:t},d))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var m=2;m<n;m++)r[m]=a[m];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5054:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>m});var l=a(7462),o=(a(7294),a(3905));const n={title:"Cli commands",permalink:"/Cli_commands/"},r=void 0,i={unversionedId:"auto/Cli_commands",id:"auto/Cli_commands",title:"Cli commands",description:"Accounts",source:"@site/docs/auto/Cli_commands.md",sourceDirName:"auto",slug:"/auto/Cli_commands",permalink:"/DeFiChain-Wiki/docs/auto/Cli_commands",draft:!1,editUrl:"https://github.com/0ptim/DeFiChain-Wiki/tree/main/docs/auto/Cli_commands.md",tags:[],version:"current",frontMatter:{title:"Cli commands",permalink:"/Cli_commands/"},sidebar:"tutorialSidebar",previous:{title:"Blockchain folder",permalink:"/DeFiChain-Wiki/docs/auto/Blockchain_folder"},next:{title:"Collected questions for the developers",permalink:"/DeFiChain-Wiki/docs/auto/Collected_questions_for_the_developers"}},s={},m=[{value:"Accounts",id:"accounts",level:2},{value:"Blockchain",id:"blockchain",level:2},{value:"Control",id:"control",level:2},{value:"Generating",id:"generating",level:2},{value:"Icxorderbook",id:"icxorderbook",level:2},{value:"Loan",id:"loan",level:2},{value:"Masternodes",id:"masternodes",level:2},{value:"Mining",id:"mining",level:2},{value:"Network",id:"network",level:2},{value:"Oracles",id:"oracles",level:2},{value:"Poolpair",id:"poolpair",level:2},{value:"Rawtransactions",id:"rawtransactions",level:2},{value:"Spv",id:"spv",level:2},{value:"Tokens",id:"tokens",level:2},{value:"Util",id:"util",level:2},{value:"Vault",id:"vault",level:2},{value:"Wallet",id:"wallet",level:2},{value:"Zmq",id:"zmq",level:2}],d={toc:m};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,l.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"accounts"},"Accounts"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'accounthistorycount ( "owner" {"no_rewards":bool,"token":"str","txtype":"str"} )'),(0,o.kt)("li",{parentName:"ol"},'accounttoaccount "from" {"address":"str"} ( ',"[",'{"txid":"hex","vout":n},...',"]"," )",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Explanation: AccountToAccount sends from one account to many accounts. AnyAccountsToAccount can send from many to many accounts"))),(0,o.kt)("li",{parentName:"ol"},'accounttoutxos "from" {"address":"str"} ( ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'getaccount "owner" ( {"start":"str","including_start":bool,"limit":n} indexed_amounts )'),(0,o.kt)("li",{parentName:"ol"},"getburninfo"),(0,o.kt)("li",{parentName:"ol"},'gettokenbalances ( {"start":"str","including_start":bool,"limit":n} indexed_amounts symbol_lookup )'),(0,o.kt)("li",{parentName:"ol"},'listaccounthistory ( "owner" {"maxBlockHeight":n,"depth":n,"no_rewards":bool,"token":"str","txtype":"str","limit":n} )'),(0,o.kt)("li",{parentName:"ol"},'listaccounts ( {"start":"str","including_start":bool,"limit":n} verbose indexed_amounts is_mine_only )'),(0,o.kt)("li",{parentName:"ol"},'listburnhistory ( {"maxBlockHeight":n,"depth":n,"token":"str","txtype":"str","limit":n} )'),(0,o.kt)("li",{parentName:"ol"},"listcommunitybalances"),(0,o.kt)("li",{parentName:"ol"},'sendtokenstoaddress {"address":"str"} {"address":"str"} ( "selectionMode" )'),(0,o.kt)("li",{parentName:"ol"},'sendutxosfrom "from" "to" amount ( "change" )'),(0,o.kt)("li",{parentName:"ol"},'utxostoaccount {"address":"str"} ( ',"[",'{"txid":"hex","vout":n},...',"]"," )")),(0,o.kt)("h2",{id:"blockchain"},"Blockchain"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"clearmempool"),(0,o.kt)("li",{parentName:"ol"},"getbestblockhash"),(0,o.kt)("li",{parentName:"ol"},'getblock "blockhash" ( verbosity )'),(0,o.kt)("li",{parentName:"ol"},"getblockchaininfo"),(0,o.kt)("li",{parentName:"ol"},"getblockcount"),(0,o.kt)("li",{parentName:"ol"},'getblockfilter "blockhash" ( "filtertype" )'),(0,o.kt)("li",{parentName:"ol"},"getblockhash height"),(0,o.kt)("li",{parentName:"ol"},'getblockheader "blockhash" ( verbose )'),(0,o.kt)("li",{parentName:"ol"},"getblockstats hash_or_height ( stats )"),(0,o.kt)("li",{parentName:"ol"},"getchaintips"),(0,o.kt)("li",{parentName:"ol"},'getchaintxstats ( nblocks "blockhash" )'),(0,o.kt)("li",{parentName:"ol"},"getdifficulty"),(0,o.kt)("li",{parentName:"ol"},'getgov "name"'),(0,o.kt)("li",{parentName:"ol"},'getmempoolancestors "txid" ( verbose )'),(0,o.kt)("li",{parentName:"ol"},'getmempooldescendants "txid" ( verbose )'),(0,o.kt)("li",{parentName:"ol"},'getmempoolentry "txid"'),(0,o.kt)("li",{parentName:"ol"},"getmempoolinfo"),(0,o.kt)("li",{parentName:"ol"},"getrawmempool ( verbose )"),(0,o.kt)("li",{parentName:"ol"},'gettxout "txid" n ( include_mempool )'),(0,o.kt)("li",{parentName:"ol"},"gettxoutproof ","[",'"txid",...',"]",' ( "blockhash" )'),(0,o.kt)("li",{parentName:"ol"},"gettxoutsetinfo"),(0,o.kt)("li",{parentName:"ol"},'isappliedcustomtx ( "txid" blockHeight )'),(0,o.kt)("li",{parentName:"ol"},"listgovs"),(0,o.kt)("li",{parentName:"ol"},'preciousblock "blockhash"'),(0,o.kt)("li",{parentName:"ol"},"pruneblockchain height"),(0,o.kt)("li",{parentName:"ol"},"savemempool"),(0,o.kt)("li",{parentName:"ol"},'scantxoutset "action" ',"[","scanobjects,...","]"),(0,o.kt)("li",{parentName:"ol"},'setgov {"name":"str"} ( ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'setgovheight {"name":"str"} height ( ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},"verifychain ( checklevel nblocks )"),(0,o.kt)("li",{parentName:"ol"},'verifytxoutproof "proof"')),(0,o.kt)("h2",{id:"control"},"Control"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'getmemoryinfo ( "mode" )'),(0,o.kt)("li",{parentName:"ol"},"getrpcinfo"),(0,o.kt)("li",{parentName:"ol"},'help ( "command" )'),(0,o.kt)("li",{parentName:"ol"},"logging ( ","[",'"include_category",...',"]"," ","[",'"exclude_category",...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},"stop"),(0,o.kt)("li",{parentName:"ol"},"uptime")),(0,o.kt)("h2",{id:"generating"},"Generating"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'generatetoaddress nblocks "address" ( maxtries )')),(0,o.kt)("h2",{id:"icxorderbook"},"Icxorderbook"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'icx_claimdfchtlc ( {"dfchtlcTx":"str","seed":"str"} ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'icx_closeoffer "offerTx" ( ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'icx_closeorder "orderTx" ( ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'icx_createorder {"tokenFrom',"|",'chainFrom":"str","chainTo',"|",'tokenTo":"str","ownerAddress":"str","receivePubkey":"str","amountFrom":n,"orderPrice":n,"expiry":n} ( ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'icx_getorder "orderTx"'),(0,o.kt)("li",{parentName:"ol"},'icx_listhtlcs {"offerTx":"str","limit":n,"closed":bool}'),(0,o.kt)("li",{parentName:"ol"},'icx_listorders ( {"token":n,"chain":n,"orderTx":"str","limit":n,"closed":bool} )'),(0,o.kt)("li",{parentName:"ol"},'icx_makeoffer ( {"orderTx":"str","amount":n,"ownerAddress":"str","receivePubkey":"str","expiry":n} ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'icx_submitdfchtlc ( {"offerTx":"str","amount":n,"hash":"str","timeout":n} ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'icx_submitexthtlc ( {"offerTx":"str","amount":n,"htlcScriptAddress":"str","hash":"str","ownerPubkey":"str","timeout":n} ',"[",'{"txid":"hex","vout":n},...',"]"," )")),(0,o.kt)("h2",{id:"loan"},"Loan"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'createloanscheme mincolratio interestrate "id" ( ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'destroyloanscheme "id" ( ACTIVATE_AFTER_BLOCK ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'getcollateraltoken "token"'),(0,o.kt)("li",{parentName:"ol"},'getinterest "id" ( "token" )'),(0,o.kt)("li",{parentName:"ol"},"getloaninfo"),(0,o.kt)("li",{parentName:"ol"},'getloanscheme "id"'),(0,o.kt)("li",{parentName:"ol"},'getloantoken "token"'),(0,o.kt)("li",{parentName:"ol"},'listcollateraltokens ( {"height":n,"all":bool} )'),(0,o.kt)("li",{parentName:"ol"},"listloanschemes"),(0,o.kt)("li",{parentName:"ol"},"listloantokens"),(0,o.kt)("li",{parentName:"ol"},'paybackloan {"vaultId":"hex","from":"str","amounts":"str"} ( ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'setcollateraltoken {"token":"str","factor":n,"fixedIntervalPriceId":"hex","activateAfterBlock":n} ( ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'setdefaultloanscheme "id" ( ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'setloantoken {"symbol":"str","name":"str","fixedIntervalPriceId":"hex","mintable":bool,"interest":n} ( ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'takeloan {"vaultId":"hex","to":"str","amounts":"str"} ( ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'updateloanscheme mincolratio interestrate "id" ( ACTIVATE_AFTER_BLOCK ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'updateloantoken "token" ( {"symbol":"str","name":"str","fixedIntervalPriceId":"hex","mintable":bool,"interest":n} ',"[",'{"txid":"hex","vout":n},...',"]"," )")),(0,o.kt)("h2",{id:"masternodes"},"Masternodes"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'createmasternode "ownerAddress" ( "operatorAddress" ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},"getanchorteams ( blockHeight )"),(0,o.kt)("li",{parentName:"ol"},'getmasternode "mn_id"'),(0,o.kt)("li",{parentName:"ol"},'getmasternodeblocks ( {"id":"hex","ownerAddress":"str","operatorAddress":"str"} depth )'),(0,o.kt)("li",{parentName:"ol"},"listanchors"),(0,o.kt)("li",{parentName:"ol"},'listcriminalproofs ( {"start":"hex","including_start":bool,"limit":n} )'),(0,o.kt)("li",{parentName:"ol"},'listmasternodes ( {"start":"hex","including_start":bool,"limit":n} verbose )'),(0,o.kt)("li",{parentName:"ol"},'resignmasternode "mn_id" ( ',"[",'{"txid":"hex","vout":n},...',"]"," )")),(0,o.kt)("h2",{id:"mining"},"Mining"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'getblocktemplate ( "template_request" )'),(0,o.kt)("li",{parentName:"ol"},"getmininginfo"),(0,o.kt)("li",{parentName:"ol"},"getmintinginfo"),(0,o.kt)("li",{parentName:"ol"},"getnetworkhashps ( nblocks height )"),(0,o.kt)("li",{parentName:"ol"},'prioritisetransaction "txid" ( dummy ) fee_delta'),(0,o.kt)("li",{parentName:"ol"},'submitblock "hexdata" ( "dummy" )'),(0,o.kt)("li",{parentName:"ol"},'submitheader "hexdata"')),(0,o.kt)("h2",{id:"network"},"Network"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/DeFiChain-Wiki/docs/auto/Addnode"},"addnode"),' "node" "command"'),(0,o.kt)("li",{parentName:"ol"},"clearbanned"),(0,o.kt)("li",{parentName:"ol"},'disconnectnode ( "address" nodeid )'),(0,o.kt)("li",{parentName:"ol"},'getaddednodeinfo ( "node" )'),(0,o.kt)("li",{parentName:"ol"},"getconnectioncount"),(0,o.kt)("li",{parentName:"ol"},"getnettotals"),(0,o.kt)("li",{parentName:"ol"},"getnetworkinfo"),(0,o.kt)("li",{parentName:"ol"},"getnodeaddresses ( count )"),(0,o.kt)("li",{parentName:"ol"},"getpeerinfo"),(0,o.kt)("li",{parentName:"ol"},"listbanned"),(0,o.kt)("li",{parentName:"ol"},"ping"),(0,o.kt)("li",{parentName:"ol"},'setban "subnet" "command" ( bantime absolute )'),(0,o.kt)("li",{parentName:"ol"},"setnetworkactive state")),(0,o.kt)("h2",{id:"oracles"},"Oracles"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'appointoracle "address" ',"[",'{"currency":"str","token":"str"},...',"]"," weightage ( ","[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'getfixedintervalprice "fixedIntervalPriceId"'),(0,o.kt)("li",{parentName:"ol"},'getoracledata "oracleid"'),(0,o.kt)("li",{parentName:"ol"},'getprice {"currency":"str","token":"str"}'),(0,o.kt)("li",{parentName:"ol"},'listfixedintervalprices ( {"start":n,"limit":n} )'),(0,o.kt)("li",{parentName:"ol"},'listlatestrawprices ( {"currency":"str","token":"str"} {"start":"hex","including_start":bool,"limit":n} )'),(0,o.kt)("li",{parentName:"ol"},'listoracles ( {"start":"hex","including_start":bool,"limit":n} )'),(0,o.kt)("li",{parentName:"ol"},'listprices ( {"start":n,"including_start":bool,"limit":n} )'),(0,o.kt)("li",{parentName:"ol"},'removeoracle "oracleid" ( ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'setoracledata "oracleid" timestamp ',"[",'{"currency":"str","tokenAmount":"str"},...',"]"," ( ","[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'updateoracle "oracleid" "address" ',"[",'{"currency":"str","token":"str"},...',"]"," weightage ( ","[",'{"txid":"hex","vout":n},...',"]"," )")),(0,o.kt)("h2",{id:"poolpair"},"Poolpair"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'addpoolliquidity {"address":"str"} "shareAddress" ( ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'compositeswap {"from":"str","tokenFrom":"str","amountFrom":n,"to":"str","tokenTo":"str","maxPrice":n} ( ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'createpoolpair ( {"tokenA":"str","tokenB":"str","commission":n,"status":bool,"ownerAddress":"str","customRewards":"str","pairSymbol":"str"} ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'getpoolpair "key" ( verbose )'),(0,o.kt)("li",{parentName:"ol"},'listpoolpairs ( {"start":n,"including_start":bool,"limit":n} verbose )'),(0,o.kt)("li",{parentName:"ol"},'listpoolshares ( {"start":n,"including_start":bool,"limit":n} verbose is_mine_only )'),(0,o.kt)("li",{parentName:"ol"},'poolswap {"from":"str","tokenFrom":"str","amountFrom":n,"to":"str","tokenTo":"str","maxPrice":n} ( ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'removepoolliquidity "from" "amount" ( ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'testpoolswap ( {"from":"str","tokenFrom":"str","amountFrom":n,"to":"str","tokenTo":"str","maxPrice":n} )'),(0,o.kt)("li",{parentName:"ol"},'updatepoolpair ( {"pool":"str","status":bool,"commission":n,"ownerAddress":"str","customRewards":"str"} ',"[",'{"txid":"hex","vout":n},...',"]"," )")),(0,o.kt)("h2",{id:"rawtransactions"},"Rawtransactions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'analyzepsbt "psbt"'),(0,o.kt)("li",{parentName:"ol"},"combinepsbt ","[",'"psbt",...',"]"),(0,o.kt)("li",{parentName:"ol"},"combinerawtransaction ","[",'"hexstring",...',"]"),(0,o.kt)("li",{parentName:"ol"},'converttopsbt "hexstring" ( permitsigdata iswitness )'),(0,o.kt)("li",{parentName:"ol"},"createpsbt ","[",'{"txid":"hex","vout":n,"sequence":n},...',"]"," ","[",'{"address":amount},{"data":"hex"},...',"]"," ( locktime replaceable)"),(0,o.kt)("li",{parentName:"ol"},"createrawtransaction ","[",'{"txid":"hex","vout":n,"sequence":n},...',"]"," ","[",'{"address":amount},{"data":"hex"},...',"]"," ( locktime replaceable )"),(0,o.kt)("li",{parentName:"ol"},'decodepsbt "psbt"'),(0,o.kt)("li",{parentName:"ol"},'decoderawtransaction "hexstring" ( iswitness )'),(0,o.kt)("li",{parentName:"ol"},'decodescript "hexstring"'),(0,o.kt)("li",{parentName:"ol"},'finalizepsbt "psbt" ( extract )'),(0,o.kt)("li",{parentName:"ol"},'fundrawtransaction "hexstring" ( options iswitness )'),(0,o.kt)("li",{parentName:"ol"},'getrawtransaction "txid" ( verbose "blockhash" )'),(0,o.kt)("li",{parentName:"ol"},"joinpsbts ","[",'"psbt",...',"]"),(0,o.kt)("li",{parentName:"ol"},'sendrawtransaction "hexstring" ( maxfeerate )'),(0,o.kt)("li",{parentName:"ol"},'signrawtransactionwithkey "hexstring" ',"[",'"privatekey",...',"]"," ( ","[",'{"txid":"hex","vout":n,"scriptPubKey":"hex","redeemScript":"hex","witnessScript":"hex", amount":amount},...',"]",' "sighashtype" )'),(0,o.kt)("li",{parentName:"ol"},"testmempoolaccept ","[",'"rawtx",...',"]"," ( maxfeerate )"),(0,o.kt)("li",{parentName:"ol"},'utxoupdatepsbt "psbt" ( ',"[",'"",{"desc":"str","range":n or ',"[","n,n","]","},...","]"," )")),(0,o.kt)("h2",{id:"spv"},"Spv"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'spv_claimhtlc "scriptaddress" "destinationaddress" "seed" ( feerate )'),(0,o.kt)("li",{parentName:"ol"},"spv_createanchor ( ","[",'{"txid":"hex","vout":n,"amount":n,"privkey":"str"},...',"]",' ) "rewardAddress" ( send feerate )'),(0,o.kt)("li",{parentName:"ol"},'spv_createanchortemplate "rewardAddress"'),(0,o.kt)("li",{parentName:"ol"},'spv_createhtlc "receiverPubkey" "ownerPubkey" "timeout" ( "seed" )'),(0,o.kt)("li",{parentName:"ol"},'spv_decodehtlcscript "redeemscript"'),(0,o.kt)("li",{parentName:"ol"},'spv_dumpprivkey "address"'),(0,o.kt)("li",{parentName:"ol"},"spv_estimateanchorcost ( feerate )"),(0,o.kt)("li",{parentName:"ol"},'spv_getaddresspubkey "address"'),(0,o.kt)("li",{parentName:"ol"},"spv_getalladdresses"),(0,o.kt)("li",{parentName:"ol"},"spv_getbalance"),(0,o.kt)("li",{parentName:"ol"},"spv_getfeerate"),(0,o.kt)("li",{parentName:"ol"},'spv_gethtlcseed "address"'),(0,o.kt)("li",{parentName:"ol"},"spv_getnewaddress"),(0,o.kt)("li",{parentName:"ol"},"spv_getpeers"),(0,o.kt)("li",{parentName:"ol"},'spv_getrawtransaction "txid"'),(0,o.kt)("li",{parentName:"ol"},'spv_gettxconfirmations "txhash"'),(0,o.kt)("li",{parentName:"ol"},"spv_listanchorauths"),(0,o.kt)("li",{parentName:"ol"},"spv_listanchorrewardconfirms"),(0,o.kt)("li",{parentName:"ol"},"spv_listanchorrewards"),(0,o.kt)("li",{parentName:"ol"},"spv_listanchors ( minBtcHeight maxBtcHeight minConfs maxConfs )"),(0,o.kt)("li",{parentName:"ol"},"spv_listanchorspending"),(0,o.kt)("li",{parentName:"ol"},"spv_listanchorsunrewarded"),(0,o.kt)("li",{parentName:"ol"},'spv_listhtlcoutputs ( "address" )'),(0,o.kt)("li",{parentName:"ol"},'spv_listreceivedbyaddress ( minconf "address_filter" )'),(0,o.kt)("li",{parentName:"ol"},"spv_listtransactions"),(0,o.kt)("li",{parentName:"ol"},'spv_refundhtlc "scriptaddress" "destinationaddress" ( feerate )'),(0,o.kt)("li",{parentName:"ol"},'spv_refundhtlcall "destinationaddress" ( feerate )'),(0,o.kt)("li",{parentName:"ol"},"spv_rescan ( height )"),(0,o.kt)("li",{parentName:"ol"},'spv_sendrawtx "rawtx"'),(0,o.kt)("li",{parentName:"ol"},'spv_sendtoaddress "address" amount ( feerate )'),(0,o.kt)("li",{parentName:"ol"},"spv_syncstatus"),(0,o.kt)("li",{parentName:"ol"},'spv_validateaddress "address"')),(0,o.kt)("h2",{id:"tokens"},"Tokens"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'createtoken ( {"symbol":"str","name":"str","isDAT":bool,"decimal":n,"limit":n,"mintable":bool,"tradeable":bool,"collateralAddress":"str"} ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'decodecustomtx "hexstring" ( iswitness )'),(0,o.kt)("li",{parentName:"ol"},'getcustomtx "txid" ( "blockhash" )'),(0,o.kt)("li",{parentName:"ol"},'gettoken "key"'),(0,o.kt)("li",{parentName:"ol"},'listtokens ( {"start":n,"including_start":bool,"limit":n} verbose )'),(0,o.kt)("li",{parentName:"ol"},'minttokens "amounts" ( ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'updatetoken "token" ( {"symbol":"str","name":"str","isDAT":bool,"mintable":bool,"tradeable":bool,"finalize":bool} ',"[",'{"txid":"hex","vout":n},...',"]"," )")),(0,o.kt)("h2",{id:"util"},"Util"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"createmultisig nrequired ","[",'"key",...',"]",' ( "address_type" )'),(0,o.kt)("li",{parentName:"ol"},'deriveaddresses "descriptor" ( range )'),(0,o.kt)("li",{parentName:"ol"},'estimatesmartfee conf_target ( "estimate_mode" )'),(0,o.kt)("li",{parentName:"ol"},'getdescriptorinfo "descriptor"'),(0,o.kt)("li",{parentName:"ol"},'signmessagewithprivkey "privkey" "message"'),(0,o.kt)("li",{parentName:"ol"},'validateaddress "address"'),(0,o.kt)("li",{parentName:"ol"},'verifymessage "address" "signature" "message"')),(0,o.kt)("h2",{id:"vault"},"Vault"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'closevault "vaultId" "to" ( ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'createvault "ownerAddress" ( "loanSchemeId" ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'deposittovault "vaultId" "from" "amount" ( ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'getvault "vaultId"'),(0,o.kt)("li",{parentName:"ol"},'listauctionhistory ( "owner" {"maxBlockHeight":n,"vaultId":"hex","index":n,"limit":n} )'),(0,o.kt)("li",{parentName:"ol"},'listauctions ( {"start":obj,"including_start":bool,"limit":n} )'),(0,o.kt)("li",{parentName:"ol"},'listvaults ( {"ownerAddress":"str","loanSchemeId":"str","state":"str","verbose":bool} {"start":"hex","including_start":bool,"limit":n} )'),(0,o.kt)("li",{parentName:"ol"},'placeauctionbid "vaultId" index "from" "amount" ( ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'updatevault "vaultId" {"ownerAddress":"hex","loanSchemeId":"str"} ( ',"[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'withdrawfromvault "vaultId" "to" "amount" ( ',"[",'{"txid":"hex","vout":n},...',"]"," )")),(0,o.kt)("h2",{id:"wallet"},"Wallet"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'abandontransaction "txid"'),(0,o.kt)("li",{parentName:"ol"},"abortrescan"),(0,o.kt)("li",{parentName:"ol"},"addmultisigaddress nrequired ","[",'"key",...',"]",' ( "label" "address_type" )'),(0,o.kt)("li",{parentName:"ol"},'backupwallet "destination"'),(0,o.kt)("li",{parentName:"ol"},'bumpfee "txid" ( options )'),(0,o.kt)("li",{parentName:"ol"},'createwallet "wallet_name" ( disable_private_keys blank "passphrase" avoid_reuse )'),(0,o.kt)("li",{parentName:"ol"},'dumpprivkey "address"'),(0,o.kt)("li",{parentName:"ol"},'dumpwallet "filename"'),(0,o.kt)("li",{parentName:"ol"},'encryptwallet "passphrase"'),(0,o.kt)("li",{parentName:"ol"},'getaddressesbylabel "label"'),(0,o.kt)("li",{parentName:"ol"},'getaddressinfo "address"'),(0,o.kt)("li",{parentName:"ol"},'getbalance ( "dummy" minconf include_watchonly avoid_reuse with_tokens )'),(0,o.kt)("li",{parentName:"ol"},"getbalances ( with_tokens )"),(0,o.kt)("li",{parentName:"ol"},'getnewaddress ( "label" "address_type" )'),(0,o.kt)("li",{parentName:"ol"},'getrawchangeaddress ( "address_type" )'),(0,o.kt)("li",{parentName:"ol"},'getreceivedbyaddress "address" ( minconf )'),(0,o.kt)("li",{parentName:"ol"},'getreceivedbylabel "label" ( minconf )'),(0,o.kt)("li",{parentName:"ol"},'gettransaction "txid" ( include_watchonly )'),(0,o.kt)("li",{parentName:"ol"},"getunconfirmedbalance ( with_tokens )"),(0,o.kt)("li",{parentName:"ol"},"getwalletinfo ( with_tokens )"),(0,o.kt)("li",{parentName:"ol"},'importaddress "address" ( "label" rescan p2sh )'),(0,o.kt)("li",{parentName:"ol"},'importmulti "requests" ( "options" )'),(0,o.kt)("li",{parentName:"ol"},'importprivkey "privkey" ( "label" rescan )'),(0,o.kt)("li",{parentName:"ol"},'importprunedfunds "rawtransaction" "txoutproof"'),(0,o.kt)("li",{parentName:"ol"},'importpubkey "pubkey" ( "label" rescan )'),(0,o.kt)("li",{parentName:"ol"},'importwallet "filename"'),(0,o.kt)("li",{parentName:"ol"},"keypoolrefill ( newsize )"),(0,o.kt)("li",{parentName:"ol"},"listaddressgroupings"),(0,o.kt)("li",{parentName:"ol"},'listlabels ( "purpose" )'),(0,o.kt)("li",{parentName:"ol"},"listlockunspent"),(0,o.kt)("li",{parentName:"ol"},'listreceivedbyaddress ( minconf include_empty include_watchonly "address_filter" )'),(0,o.kt)("li",{parentName:"ol"},"listreceivedbylabel ( minconf include_empty include_watchonly )"),(0,o.kt)("li",{parentName:"ol"},'listsinceblock ( "blockhash" target_confirmations include_watchonly include_removed )'),(0,o.kt)("li",{parentName:"ol"},'listtransactions ( "label" count skip include_watchonly exclude_custom_tx )'),(0,o.kt)("li",{parentName:"ol"},"listunspent ( minconf maxconf ","[",'"address",...',"]"," include_unsafe query_options )"),(0,o.kt)("li",{parentName:"ol"},"listwalletdir"),(0,o.kt)("li",{parentName:"ol"},"listwallets"),(0,o.kt)("li",{parentName:"ol"},'loadwallet "filename"'),(0,o.kt)("li",{parentName:"ol"},"lockunspent unlock ( ","[",'{"txid":"hex","vout":n},...',"]"," )"),(0,o.kt)("li",{parentName:"ol"},'removeprunedfunds "txid"'),(0,o.kt)("li",{parentName:"ol"},"rescanblockchain ( start_height stop_height )"),(0,o.kt)("li",{parentName:"ol"},'sendmany "" {"address":amount} ( minconf "comment" ',"[",'"address",...',"]",' replaceable conf_target "estimate_mode" )'),(0,o.kt)("li",{parentName:"ol"},'sendtoaddress "address" amount ( "comment" "comment_to" subtractfeefromamount replaceable conf_target "estimate_mode"avoid_reuse )'),(0,o.kt)("li",{parentName:"ol"},'sethdseed ( newkeypool "seed" )'),(0,o.kt)("li",{parentName:"ol"},'setlabel "address" "label"'),(0,o.kt)("li",{parentName:"ol"},"settxfee amount"),(0,o.kt)("li",{parentName:"ol"},'setwalletflag "flag" ( value )'),(0,o.kt)("li",{parentName:"ol"},'signmessage "address" "message"'),(0,o.kt)("li",{parentName:"ol"},'signrawtransactionwithwallet "hexstring" ( ',"[",'{"txid":"hex","vout":n,"scriptPubKey":"hex","redeemScript":"hex","witnessScript":"hex","amount":amount},...',"]",' "sighashtype" )'),(0,o.kt)("li",{parentName:"ol"},'unloadwallet ( "wallet_name" )'),(0,o.kt)("li",{parentName:"ol"},"walletcreatefundedpsbt ","[",'{"txid":"hex","vout":n,"sequence":n},...',"]"," ","[",'{"address":amount},{"data":"hex"},...',"]"," ( locktime options bip32derivs )"),(0,o.kt)("li",{parentName:"ol"},"walletlock"),(0,o.kt)("li",{parentName:"ol"},'walletpassphrase "passphrase" timeout'),(0,o.kt)("li",{parentName:"ol"},'walletpassphrasechange "oldpassphrase" "newpassphrase"'),(0,o.kt)("li",{parentName:"ol"},'walletprocesspsbt "psbt" ( sign "sighashtype" bip32derivs )')),(0,o.kt)("h2",{id:"zmq"},"Zmq"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"getzmqnotifications")))}p.isMDXComponent=!0}}]);