(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[7],{267:function(e,t,c){"use strict";var n=c(5),r=c(4),a=c(29),o=c(0),s=c(6),i=c.n(s),l=c(460),u=c(70),d=function(e,t){var c={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(c[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(c[n[r]]=e[n[r]])}return c};var f=["xs","sm","md","lg","xl","xxl"],b=o.forwardRef((function(e,t){var c,s=o.useContext(u.b),b=s.getPrefixCls,p=s.direction,j=o.useContext(l.a),O=j.gutter,m=j.wrap,h=j.supportFlexGap,x=e.prefixCls,v=e.span,y=e.order,g=e.offset,w=e.push,C=e.pull,E=e.className,N=e.children,k=e.flex,P=e.style,S=d(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),A=b("col",x),R={};f.forEach((function(t){var c,o={},s=e[t];"number"===typeof s?o.span=s:"object"===Object(a.a)(s)&&(o=s||{}),delete S[t],R=Object(r.a)(Object(r.a)({},R),(c={},Object(n.a)(c,"".concat(A,"-").concat(t,"-").concat(o.span),void 0!==o.span),Object(n.a)(c,"".concat(A,"-").concat(t,"-order-").concat(o.order),o.order||0===o.order),Object(n.a)(c,"".concat(A,"-").concat(t,"-offset-").concat(o.offset),o.offset||0===o.offset),Object(n.a)(c,"".concat(A,"-").concat(t,"-push-").concat(o.push),o.push||0===o.push),Object(n.a)(c,"".concat(A,"-").concat(t,"-pull-").concat(o.pull),o.pull||0===o.pull),Object(n.a)(c,"".concat(A,"-rtl"),"rtl"===p),c))}));var B=i()(A,(c={},Object(n.a)(c,"".concat(A,"-").concat(v),void 0!==v),Object(n.a)(c,"".concat(A,"-order-").concat(y),y),Object(n.a)(c,"".concat(A,"-offset-").concat(g),g),Object(n.a)(c,"".concat(A,"-push-").concat(w),w),Object(n.a)(c,"".concat(A,"-pull-").concat(C),C),c),E,R),G={};if(O&&O[0]>0){var L=O[0]/2;G.paddingLeft=L,G.paddingRight=L}if(O&&O[1]>0&&!h){var q=O[1]/2;G.paddingTop=q,G.paddingBottom=q}return k&&(G.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(k),"auto"!==k||!1!==m||G.minWidth||(G.minWidth=0)),o.createElement("div",Object(r.a)({},S,{style:Object(r.a)(Object(r.a)({},G),P),className:B,ref:t}),N)}));b.displayName="Col",t.a=b},268:function(e,t,c){"use strict";var n=c(4),r=c(5),a=c(29),o=c(7),s=c(0),i=c(6),l=c.n(i),u=c(70),d=c(460),f=c(54),b=c(162),p=c(471),j=function(e,t){var c={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(c[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(c[n[r]]=e[n[r]])}return c},O=(Object(f.a)("top","middle","bottom","stretch"),Object(f.a)("start","end","center","space-around","space-between"),s.forwardRef((function(e,t){var c,i=e.prefixCls,f=e.justify,O=e.align,m=e.className,h=e.style,x=e.children,v=e.gutter,y=void 0===v?0:v,g=e.wrap,w=j(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),C=s.useContext(u.b),E=C.getPrefixCls,N=C.direction,k=s.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),P=Object(o.a)(k,2),S=P[0],A=P[1],R=function(){var e=s.useState(!1),t=Object(o.a)(e,2),c=t[0],n=t[1];return s.useEffect((function(){n(Object(p.b)())}),[]),c}(),B=s.useRef(y);s.useEffect((function(){var e=b.a.subscribe((function(e){var t=B.current||0;(!Array.isArray(t)&&"object"===Object(a.a)(t)||Array.isArray(t)&&("object"===Object(a.a)(t[0])||"object"===Object(a.a)(t[1])))&&A(e)}));return function(){return b.a.unsubscribe(e)}}),[]);var G=E("row",i),L=function(){var e=[0,0];return(Array.isArray(y)?y:[y,0]).forEach((function(t,c){if("object"===Object(a.a)(t))for(var n=0;n<b.b.length;n++){var r=b.b[n];if(S[r]&&void 0!==t[r]){e[c]=t[r];break}}else e[c]=t||0})),e}(),q=l()(G,(c={},Object(r.a)(c,"".concat(G,"-no-wrap"),!1===g),Object(r.a)(c,"".concat(G,"-").concat(f),f),Object(r.a)(c,"".concat(G,"-").concat(O),O),Object(r.a)(c,"".concat(G,"-rtl"),"rtl"===N),c),m),F={},T=L[0]>0?L[0]/-2:void 0,W=L[1]>0?L[1]/-2:void 0;if(T&&(F.marginLeft=T,F.marginRight=T),R){var I=Object(o.a)(L,2);F.rowGap=I[1]}else W&&(F.marginTop=W,F.marginBottom=W);var J=s.useMemo((function(){return{gutter:L,wrap:g,supportFlexGap:R}}),[L,g,R]);return s.createElement(d.a.Provider,{value:J},s.createElement("div",Object(n.a)({},w,{className:q,style:Object(n.a)(Object(n.a)({},F),h),ref:t}),x))})));O.displayName="Row";t.a=O},460:function(e,t,c){"use strict";var n=c(0),r=Object(n.createContext)({});t.a=r},471:function(e,t,c){"use strict";c.d(t,"a",(function(){return a})),c.d(t,"b",(function(){return o}));var n,r=c(66),a=function(){return Object(r.a)()&&window.document.documentElement},o=function(){if(!a())return!1;if(void 0!==n)return n;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),n=1===e.scrollHeight,document.body.removeChild(e),n}},516:function(e,t,c){"use strict";var n=c(268);t.a=n.a},517:function(e,t,c){"use strict";var n=c(267);t.a=n.a},740:function(e,t,c){"use strict";c.r(t);c(0);var n=c(516),r=c(517),a=c(3);t.default=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Why Trust Us?"}),Object(a.jsxs)(n.a,{gutter:16,children:[Object(a.jsx)(r.a,{xs:24,sm:24,md:24,lg:10,xxl:10,children:Object(a.jsx)("p",{className:"font-size-md",children:Object(a.jsxs)("ul",{children:[Object(a.jsxs)("p",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Fair launch: "}),"No private or public sales, no VCs, no team tokens."]}),"Everyone has an equal chance in a fair market."]}),Object(a.jsx)("p",{children:Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Locked liquidity: "}),"100% of liquidity tokens are locked until 2025 making the project \u201cun-ruggable\u201d"]})}),Object(a.jsx)("p",{children:Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Low fees: "}),"launched on Binance Smart Chain (BSC) for low fees so that everyone can join."]})})]})})}),Object(a.jsx)(r.a,{Col:!0,xs:24,sm:24,md:24,lg:14,xxl:14,children:Object(a.jsx)("img",{style:{width:"100%"},src:"/img/trust.png",alt:"trust"})})]})]})}}}]);
//# sourceMappingURL=7.6317924c.chunk.js.map 