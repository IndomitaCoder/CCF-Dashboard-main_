(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[25],{1410:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1401),s=a(26),r=a.n(s),i=a(92),o=a(73),l=a(551),d=a(516),u=a(517),m=a(1437),j=a(1433),p=(a(49),a(467)),f=a.n(p),b=a(489),h=a(3),x=(a(493),[{title:"ASSETS",dataIndex:"symbol",key:"symbol",render:function(e,t){return Object(h.jsxs)("div",{className:"d-flex align-items-center",children:[Object(h.jsx)(l.a,{size:25,className:"font-size-sm",src:t.logo_url}),Object(h.jsx)("span",{className:"ml-2",children:t.symbol})]})}},{title:"PRICE",dataIndex:"price",key:"price",render:function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)("span",{className:"ml-2",children:["$ ",Number(t.price.toFixed(4)).toLocaleString()]})})}},{title:"BALANCE",dataIndex:"balance",key:"balance",render:function(e,t){return Object(h.jsx)("div",{children:Object(h.jsx)("span",{className:"ml-2",children:(t.balance/Math.pow(10,t.decimals)).toFixed(4)})})}},{title:"VALUE",dataIndex:"value",key:"value",render:function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)("span",{className:"ml-2",children:["$ ",(t.price*t.balance/Math.pow(10,t.decimals)).toFixed(4)]})})}}]),O=[{title:"Pool",dataIndex:"symbol",key:"symbol",render:function(e,t){return Object(h.jsxs)("div",{className:"d-flex align-items-center",children:[Object(h.jsx)(l.a,{size:25,className:"font-size-sm",src:t.logo_url}),Object(h.jsx)("span",{className:"ml-2",children:t.symbol})]})}},{title:"Balance",dataIndex:"balance",key:"balance",render:function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)("span",{className:"ml-2",children:[Number(t.amount.toFixed(2)).toLocaleString()," ",t.symbol]})})}},{title:"Reward",dataIndex:"reward",key:"reward",render:function(e,t){return Object(h.jsx)("div",{children:Object(h.jsx)("span",{className:"ml-2",children:"0.065 TSHARE ($ 708)"})})}},{title:"USD Value",dataIndex:"value",key:"value",render:function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)("span",{className:"ml-2",children:["$ ",parseInt(t.price*t.amount).toLocaleString()]})})}}],g=[{title:"Pool",dataIndex:"symbol",key:"symbol",render:function(e,t){return Object(h.jsxs)("div",{className:"d-flex align-items-center",children:[Object(h.jsx)(l.a,{size:25,className:"font-size-sm",src:t.logo_url}),Object(h.jsx)("span",{className:"ml-2",children:t.symbol})]})}},{title:"Balance",dataIndex:"balance",key:"balance",render:function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)("span",{className:"ml-2",children:[t.amount.toFixed(2)," ",t.symbol]})})}},{title:"USD Value",dataIndex:"value",key:"value",render:function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)("span",{className:"ml-2",children:["$ ",parseInt(t.price*t.amount).toLocaleString()]})})}}],v=function(e){var t,a,c=Object(n.useState)([]),s=Object(o.a)(c,2),p=s[0],v=s[1],y=Object(n.useState)([]),_=Object(o.a)(y,2),N=_[0],S=_[1],w=Object(n.useState)([]),k=Object(o.a)(w,2),z=k[0],E=k[1],A=Object(n.useState)([]),C=Object(o.a)(A,2),F=C[0],I=C[1],P=Object(n.useState)([]),R=Object(o.a)(P,2),L=R[0],T=R[1],U=Object(n.useState)(),H=Object(o.a)(U,2),M=H[0],B=H[1],D=Object(n.useState)(),$=Object(o.a)(D,2),V=$[0],W=$[1],K=Object(n.useState)([{id:"ftm_spookyswap",chain:"ftm",name:"SpookySwap",site_url:"https://spookyswap.finance",logo_url:"https://static.debank.com/image/project/logo_url/ftm_spookyswap/d14381e7154b7cfecaa8ba7887e73b95.png",has_supported_portfolio:!0,tvl:890290819.1377127,net_usd_value:.00035826138894035444,asset_usd_value:.00035826138894035444,debt_usd_value:0}]),G=Object(o.a)(K,2),J=G[0],X=G[1],q=0,Q={user_addr:e.accountAddress,is_all:!1,chain:"ftm"},Y={user_addr:e.accountAddress,project_id:"ftm_tomb"},Z={user_addr:e.accountAddress,project_id:"ftm_spookyswap"},ee={id:e.accountAddress,chain_id:"ftm"},te={id:e.accountAddress,chain_id:"ftm"};function ae(){return(ae=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://api.debank.com/token/balance_list",{params:Q},{headers:{"Access-Control-Allow-Origin":"http://localhost:3000"}}).then((function(e){v(e.data.data)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(){return(ne=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://api.debank.com/portfolio/list",{params:Y},{headers:{"Access-Control-Allow-Origin":"http://localhost:3000"}}).then((function(e){t=e.data.data.portfolio_list[0].detail.supply_token_list,I({resdata1:e.data.data.portfolio_list[0].detail.supply_token_list,detailType1:e.data.data.portfolio_list[0].name,projectName1:e.data.data.project.name,projectLogoUrl1:e.data.data.project.logo_url,projectSiteUrl1:e.data.data.project.site_url}),S(t)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ce(){return(ce=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://api.debank.com/portfolio/list",{params:Z},{headers:{"Access-Control-Allow-Origin":"http://localhost:3000"}}).then((function(e){a=e.data.data.portfolio_list[0].detail.supply_token_list,T({resdata2:e.data.data.portfolio_list[0].detail.supply_token_list,detailType2:e.data.data.portfolio_list[0].name,projectName2:e.data.data.project.name,projectLogoUrl2:e.data.data.project.logo_url,projectSiteUrl2:e.data.data.project.site_url}),E(a)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(){return(se=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://openapi.debank.com/v1/user/chain_balance",{params:ee}).then((function(e){B(e.data.usd_value),console.log(e.data.usd_value+"----------------chainbalance--------")})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(){return(re=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://openapi.debank.com/v1/user/simple_protocol_list",{params:te},{headers:{"Access-Control-Allow-Origin":"http://localhost:3000"}}).then((function(e){X(e.data),console.log(e.data+"----------------chainbalance--------")})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){q=0,function(){ae.apply(this,arguments)}(),function(){ne.apply(this,arguments)}(),function(){ce.apply(this,arguments)}(),function(){se.apply(this,arguments)}(),function(){re.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){p.map((function(e,t){q+=e.price*e.balance/Math.pow(10,e.decimals)})),W(q)}),[p]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(d.a,{gutter:0,children:Object(h.jsxs)(u.a,{span:24,children:[Object(h.jsxs)(m.a,{children:[Object(h.jsxs)("div",{className:"d-flex align-items-center mb-4",children:[Object(h.jsx)(l.a,{size:40,className:"font-size-sm",src:"https://debank.com/static/media/fantom.d3c4549f.svg"}),Object(h.jsxs)("div",{className:"ml-2",children:[Object(h.jsx)("p",{className:"mb-0 mt-0",style:{fontSize:"13px"},children:"Assets on BSC"}),Object(h.jsxs)("h5",{className:"mb-0 ",style:{fontSize:"15px",marginTop:"-5px"},children:["$",void 0!==M?Number(M.toFixed(3)).toLocaleString():null]})]})]}),Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(h.jsx)(b.a,{name:"Wallet",icon:"https://debank.com/static/media/wallet.d67a695b.svg",balance:Number(V).toFixed(3).toLocaleString(),sizeAvatar:30}),J.map((function(e,t){return Object(h.jsx)(b.a,{name:e.name,icon:e.logo_url,balance:Number(e.net_usd_value.toFixed(3)).toLocaleString(),sizeAvatar:30})}))]})]}),Object(h.jsxs)(m.a,{children:[Object(h.jsxs)("div",{className:"d-flex text-center mb-2",children:[Object(h.jsx)(l.a,{size:30,className:"font-size-sm",src:"https://debank.com/static/media/wallet.d67a695b.svg"}),Object(h.jsx)("p",{className:"font-size-lg ml-2",children:"Wallet"})]}),Object(h.jsx)(j.a,{className:"no-border-last",columns:x,dataSource:void 0!==p?p:[],rowKey:"id",pagination:!1})]}),Object(h.jsxs)(m.a,{children:[Object(h.jsxs)("div",{className:"d-flex align-items-center mb-4",children:[Object(h.jsx)(l.a,{size:30,className:"font-size-sm",src:F.projectLogoUrl1}),Object(h.jsx)("a",{href:F.projectSiteUrl1,className:"font-size-lg ml-2",children:F.projectName1})]}),Object(h.jsx)("p",{className:"ml-10 text-center",style:{background:"#8b93a7",color:"white",width:"100px",borderRadius:"5px"},children:F.detailType1}),Object(h.jsx)(j.a,{className:"no-border-last",columns:O,dataSource:void 0!==N?N:[],rowKey:"id",pagination:!1})]}),Object(h.jsxs)(m.a,{children:[Object(h.jsxs)("div",{className:"d-flex align-items-center mb-4",children:[Object(h.jsx)(l.a,{size:30,className:"font-size-sm",src:L.projectLogoUrl2}),Object(h.jsx)("a",{href:L.projectSiteUrl2,className:"font-size-lg ml-2",children:L.projectName2})]}),Object(h.jsx)("p",{className:"ml-10 text-center",style:{background:"#8b93a7",color:"white",width:"100px",borderRadius:"5px"},children:L.detailType2}),Object(h.jsx)(j.a,{className:"no-border-last",columns:g,dataSource:void 0!==z?z:[],rowKey:"id",pagination:!1})]})]})})})},y=a(491),_=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(y.a,{chainId:"ftm",accountAddress:e.accountAddress})})},N=c.a.TabPane;t.default=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(c.a,{size:"large",children:[Object(h.jsx)(N,{tab:"Portfolio",children:Object(h.jsx)(v,{accountAddress:"0x4199ec8fe98c2b310e93eff56b9c5a03fec83300"})},"2"),Object(h.jsx)(N,{tab:"History",children:Object(h.jsx)(_,{accountAddress:"0x4199ec8fe98c2b310e93eff56b9c5a03fec83300"})},"3")]})})}},489:function(e,t,a){"use strict";a(0);var n=a(551),c=a(3);t.a=function(e){var t=e.name,a=e.icon,s=e.balance,r=e.sizeAvatar;e.className;return console.log("23232-------------"),Object(c.jsxs)("div",{className:"d-flex align-items-center mb-2 ml-5",children:[Object(c.jsx)(n.a,{size:r,className:"font-size-sm",src:a}),Object(c.jsxs)("div",{className:"ml-2",children:[Object(c.jsx)("p",{className:"mb-0 mt-0",style:{fontSize:"13px"},children:t}),Object(c.jsxs)("h5",{className:"mb-0 ",style:{fontSize:"15px",marginTop:"-5px"},children:["$",s]})]})]})}},491:function(e,t,a){"use strict";var n=a(14),c=a(73),s=a(0),r=a(516),i=a(517),o=a(1433),l=a(467),d=a.n(l),u=a(200),m=a(552),j=a(2),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm376 116c-119.3 0-216 96.7-216 216s96.7 216 216 216 216-96.7 216-216-96.7-216-216-216zm107.5 323.5C750.8 868.2 712.6 884 672 884s-78.8-15.8-107.5-44.5C535.8 810.8 520 772.6 520 732s15.8-78.8 44.5-107.5C593.2 595.8 631.4 580 672 580s78.8 15.8 107.5 44.5C808.2 653.2 824 691.4 824 732s-15.8 78.8-44.5 107.5zM761 656h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8-23.1-31.9a7.92 7.92 0 00-6.5-3.3H573c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.9-5.3.1-12.7-6.4-12.7zM440 852H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"file-done",theme:"outlined"},f=a(11),b=function(e,t){return s.createElement(f.a,Object(j.a)(Object(j.a)({},e),{},{ref:t,icon:p}))};b.displayName="FileDoneOutlined";var h=s.forwardRef(b),x=a(3);t.a=function(e){var t=e.accountAddress,a=e.chainId,l=Object(s.useState)([]),j=Object(c.a)(l,2),p=j[0],f=j[1],b=Object(s.useState)([]),O=Object(c.a)(b,2),g=O[0],v=O[1],y=Object(s.useState)([]),_=Object(c.a)(y,2),N=_[0],S=_[1],w=[{title:"tx_info",dataIndex:"id",key:"tx_info",render:function(e,t){var a=Number(t.time_at),n=new Date(1e3*a);return void 0===e||null===e||0===e.length?null:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("p",{children:[n.toLocaleDateString()," ",n.toLocaleTimeString()]}),Object(x.jsx)("p",{children:e.substr(0,6)+"...."+e.slice(-4)})]})}},{title:"Status",dataIndex:"cate_id",key:"cate_id",render:function(e,t){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(r.a,{gutter:18,children:[Object(x.jsx)(i.a,{xs:5,sm:5,md:5,lg:5,xxl:5,children:null!==t.project_id?Object(x.jsx)("img",{width:"40px",height:"40px",style:{marginRight:"10px",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},src:N[t.project_id].logo_url,alt:t.project_id}):"approve"===e?Object(x.jsx)(u.a,{style:{width:"fit-content",height:"fit-content",fontSize:"2.5em",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",marginRight:"10px"}}):"send"===e||"receive"===e?Object(x.jsx)(m.a,{style:{width:"fit-content",height:"fit-content",fontSize:"2.5em",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",marginRight:"10px"}}):Object(x.jsx)(h,{style:{width:"fit-content",height:"fit-content",fontSize:"2.5em",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",marginRight:"10px"}})}),Object(x.jsxs)(i.a,{xs:12,sm:12,md:12,lg:12,xxl:12,gutter:2,children:[null!==e?Object(x.jsx)("p",{children:e}):Object(x.jsx)("p",{children:t.tx.name}),Object(x.jsxs)("p",{children:[" ",void 0!==t.project_id&&null!==t.project_id?N[t.project_id].name:t.other_addr.substr(0,6)+"..."+t.other_addr.slice(-4)]})]})]})})}},{title:"info",dataIndex:"info",key:"info",render:function(e,t){var a=Object(x.jsx)(x.Fragment,{}),n=Object(x.jsx)(x.Fragment,{});return 0!==t.receives.length&&(a=Object(x.jsx)(x.Fragment,{children:t.receives.map((function(e){var t=g[e.token_id],a=void 0===t?null:t.symbol,n=void 0===t||null===t.logo_url?"/img/coin-default.b2295297.svg":t.logo_url;return Object(x.jsxs)("p",{children:[Object(x.jsx)("img",{src:n,alt:g.symbol,style:{width:"20px",height:"20px",marginRight:"10px"}}),"+",e.amount," ",a]})}))})),0!==t.sends.length&&(n=Object(x.jsx)(x.Fragment,{children:t.sends.map((function(e){var t=g[e.token_id],a=void 0===t?null:t.symbol,n=void 0===t||null===t.logo_url?"/img/coin-default.b2295297.svg":t.logo_url;return Object(x.jsxs)("p",{children:[Object(x.jsx)("img",{src:n,alt:g.symbol,style:{width:"20px",height:"20px",marginRight:"10px"}}),"-",e.amount," ",a]})}))})),Object(x.jsxs)("div",{children:[n,a]})}},{title:"Gas Fee",dataIndex:"gas fee",key:"gas fee",render:function(e,t){if(void 0!==t.tx&&null!==t.tx){var a=t.tx,n=a.eth_gas_fee,c=a.usd_gas_fee;return Object(x.jsxs)("p",{children:["Gas Fee : ",Number(n).toFixed(4)," BNB ($",Number(c).toFixed(4),")"]})}}}],k=function(e){d.a.get("https://api.debank.com/history/list",{params:{chain:a,page_count:100,start_time:e,token_id:"",user_addr:t}}).then((function(e){if(void 0!==e&&void 0!==e.data&&0!==e.data.length&&void 0!==e.data.data&&void 0!==e.data.data.history_list&&0!=e.data.data.history_list.length){var t=g;t=Object(n.a)(Object(n.a)({},t),e.data.data.token_dict),v(t);var a=N;a=Object(n.a)(Object(n.a)({},a),e.data.data.project_dict),S(a);var c=p;c=c.concat(e.data.data.history_list),f(c)}})).catch((function(e){return console.log(e)}))};return Object(s.useEffect)((function(){void 0!==p&&0!==p.length&&(console.log(p),k(p[p.length-1].time_at))}),[p]),Object(s.useEffect)((function(){void 0!==t&&"0"!==t&&k(0)}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h2",{children:e.accountAddress}),Object(x.jsx)(o.a,{sticky:!0,columns:w,dataSource:p,rowKey:"id"})]})}},494:function(e,t){},495:function(e,t){},496:function(e,t){},497:function(e,t){},499:function(e,t){},500:function(e,t){},502:function(e,t){},503:function(e,t){},507:function(e,t){},508:function(e,t){},511:function(e,t){},512:function(e,t){},551:function(e,t,a){"use strict";var n=a(4),c=a(5),s=a(29),r=a(7),i=a(0),o=a(6),l=a.n(o),d=a(83),u=a(40),m=a(70),j=a(39),p=a(162),f=a(191),b=i.createContext("default"),h=function(e){var t=e.children,a=e.size;return i.createElement(b.Consumer,null,(function(e){return i.createElement(b.Provider,{value:a||e},t)}))},x=b,O=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a},g=function(e,t){var a,o,b=i.useContext(x),h=i.useState(1),g=Object(r.a)(h,2),v=g[0],y=g[1],_=i.useState(!1),N=Object(r.a)(_,2),S=N[0],w=N[1],k=i.useState(!0),z=Object(r.a)(k,2),E=z[0],A=z[1],C=i.useRef(),F=i.useRef(),I=Object(u.a)(t,C),P=i.useContext(m.b).getPrefixCls,R=function(){if(F.current&&C.current){var t=F.current.offsetWidth,a=C.current.offsetWidth;if(0!==t&&0!==a){var n=e.gap,c=void 0===n?4:n;2*c<a&&y(a-2*c<t?(a-2*c)/t:1)}}};i.useEffect((function(){w(!0)}),[]),i.useEffect((function(){A(!0),y(1)}),[e.src]),i.useEffect((function(){R()}),[e.gap]);var L=e.prefixCls,T=e.shape,U=e.size,H=e.src,M=e.srcSet,B=e.icon,D=e.className,$=e.alt,V=e.draggable,W=e.children,K=O(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children"]),G="default"===U?b:U,J=Object(f.a)(),X=i.useMemo((function(){if("object"!==Object(s.a)(G))return{};var e=p.b.find((function(e){return J[e]})),t=G[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:B?t/2:18}:{}}),[J,G]);Object(j.a)(!("string"===typeof B&&B.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(B,"` at https://ant.design/components/icon"));var q,Q=P("avatar",L),Y=l()((a={},Object(c.a)(a,"".concat(Q,"-lg"),"large"===G),Object(c.a)(a,"".concat(Q,"-sm"),"small"===G),a)),Z=i.isValidElement(H),ee=l()(Q,Y,(o={},Object(c.a)(o,"".concat(Q,"-").concat(T),!!T),Object(c.a)(o,"".concat(Q,"-image"),Z||H&&E),Object(c.a)(o,"".concat(Q,"-icon"),!!B),o),D),te="number"===typeof G?{width:G,height:G,lineHeight:"".concat(G,"px"),fontSize:B?G/2:18}:{};if("string"===typeof H&&E)q=i.createElement("img",{src:H,draggable:V,srcSet:M,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&A(!1)},alt:$});else if(Z)q=H;else if(B)q=B;else if(S||1!==v){var ae="scale(".concat(v,") translateX(-50%)"),ne={msTransform:ae,WebkitTransform:ae,transform:ae},ce="number"===typeof G?{lineHeight:"".concat(G,"px")}:{};q=i.createElement(d.a,{onResize:R},i.createElement("span",{className:"".concat(Q,"-string"),ref:function(e){F.current=e},style:Object(n.a)(Object(n.a)({},ce),ne)},W))}else q=i.createElement("span",{className:"".concat(Q,"-string"),style:{opacity:0},ref:function(e){F.current=e}},W);return delete K.onError,delete K.gap,i.createElement("span",Object(n.a)({},K,{style:Object(n.a)(Object(n.a)(Object(n.a)({},te),X),K.style),className:ee,ref:I}),q)},v=i.forwardRef(g);v.displayName="Avatar",v.defaultProps={shape:"circle",size:"default"};var y=v,_=a(48),N=a(25),S=a(192),w=function(e){return e?"function"===typeof e?e():e:null},k=a(104),z=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a},E=i.forwardRef((function(e,t){var a=e.prefixCls,c=e.title,s=e.content,r=z(e,["prefixCls","title","content"]),o=i.useContext(m.b).getPrefixCls,l=o("popover",a),d=o();return i.createElement(S.a,Object(n.a)({},r,{prefixCls:l,ref:t,overlay:function(e){return i.createElement(i.Fragment,null,c&&i.createElement("div",{className:"".concat(e,"-title")},w(c)),i.createElement("div",{className:"".concat(e,"-inner-content")},w(s)))}(l),transitionName:Object(k.b)(d,"zoom-big",r.transitionName)}))}));E.displayName="Popover",E.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};var A=E,C=function(e){var t=i.useContext(m.b),a=t.getPrefixCls,n=t.direction,s=e.prefixCls,r=e.className,o=void 0===r?"":r,d=e.maxCount,u=e.maxStyle,j=e.size,p=a("avatar-group",s),f=l()(p,Object(c.a)({},"".concat(p,"-rtl"),"rtl"===n),o),b=e.children,x=e.maxPopoverPlacement,O=void 0===x?"top":x,g=Object(_.a)(b).map((function(e,t){return Object(N.a)(e,{key:"avatar-key-".concat(t)})})),v=g.length;if(d&&d<v){var S=g.slice(0,d),w=g.slice(d,v);return S.push(i.createElement(A,{key:"avatar-popover-key",content:w,trigger:"hover",placement:O,overlayClassName:"".concat(p,"-popover")},i.createElement(y,{style:u},"+".concat(v-d)))),i.createElement(h,{size:j},i.createElement("div",{className:f,style:e.style},S))}return i.createElement(h,{size:j},i.createElement("div",{className:f,style:e.style},g))},F=y;F.Group=C;t.a=F},552:function(e,t,a){"use strict";var n=a(2),c=a(0),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},r=a(11),i=function(e,t){return c.createElement(r.a,Object(n.a)(Object(n.a)({},e),{},{ref:t,icon:s}))};i.displayName="UserOutlined";t.a=c.forwardRef(i)}}]);
//# sourceMappingURL=25.371ba063.chunk.js.map 