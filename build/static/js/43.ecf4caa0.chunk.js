(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[43],{1398:function(e,t,n){"use strict";n.r(t);var c=n(73),a=n(0),r=n(1433),o=n(3),i=n(467),s={"fetch-ai":"https://www.coingecko.com/coins/5681/sparkline","lto-network":"https://www.coingecko.com/coins/6068/sparkline","oasis-network":"https://www.coingecko.com/coins/13162/sparkline","ime-lab":"https://www.coingecko.com/coins/16243/sparkline",qredo:"https://www.coingecko.com/coins/17541/sparkline","numbers-protocol":"https://www.coingecko.com/coins/20495/sparkline"},l=[];t.default=function(e){var t=Object(a.useState)([]),n=Object(c.a)(t,2),p=n[0],d=n[1],u=Object(a.useState)(!0),m=Object(c.a)(u,2),g=m[0],h=m[1],k=function(e,t){return Object(o.jsxs)("div",{style:{color:Number(e)<0?"#e15241":"#4eaf0a"},children:[e," "," "," %"]})},_=[{title:"Name",dataIndex:"name",key:"name",render:function(e,t){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("img",{className:"",alt:t.name,src:t.iconURL,style:{marginRight:"10px",width:"20px",height:"20px"}}),e]})}},{title:"Symbol",dataIndex:"symbol",key:"symbol"},{title:"Price",dataIndex:"price",key:"price"},{title:"1h",dataIndex:"change_1",key:"change_1",render:k},{title:"24h",dataIndex:"change_24",key:"change_24",render:k},{title:"7d",dataIndex:"change_7d",key:"change_7d",render:k},{title:"24h Volume",dataIndex:"volume_24",key:"volume_24"},{title:"Mkt Cap",dataIndex:"marketCap",key:"marketCap"},{title:"Last 7 Days",dataIndex:"sparkline",key:"sparkline",render:function(e,t){return Object(o.jsx)("img",{className:"",alt:t.name,src:s[t.coinId],style:{}})}}],w=function(){i.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",{params:{ids:"fetch-ai,lto-network,oasis-network,ime-lab,qredo,numbers-protocol",vs_currency:"usd",include_market_cap:"true",per_page:"250",page:"1",sparkline:"true",price_change_percentage:"1h,24h,7d",order:"id_asc"}}).then((function(e){console.log(e.data),d(e.data)})).catch((function(e){return console.log(e)}))};return Object(a.useEffect)((function(){w(),setInterval((function(){w()}),3e4)}),[]),Object(a.useEffect)((function(){if(void 0!==p&&null!==p){var e=1;l=p.map((function(t){if(void 0!==t){var n={key:e,coinId:t.id,name:t.name,symbol:t.symbol.toUpperCase(),price:"$"+t.current_price,iconURL:t.image,change_1:t.price_change_percentage_1h_in_currency.toFixed(1),change_24:t.price_change_percentage_24h_in_currency.toFixed(1),change_7d:t.price_change_percentage_7d_in_currency.toFixed(1),volume_24:"$"+t.total_volume.toLocaleString(),marketCap:"$"+t.market_cap.toLocaleString(),sparkline:t.sparkline};return e++,n}e++})),console.log(l),console.log(l.length),h(!g)}}),[p]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(r.a,{dataSource:l,columns:_})})}}}]);
//# sourceMappingURL=43.ecf4caa0.chunk.js.map