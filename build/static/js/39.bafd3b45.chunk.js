(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[39],{1427:function(e,s,a){"use strict";a.r(s);var t=a(14),r=(a(0),a(555)),c=a(516),i=a(517),n=a(1437),o=a(36),l=a(3),m={backgroundImage:"url(/img/others/img-17.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"};s.default=function(e){var s=Object(o.c)((function(e){return e.theme.currentTheme}));return Object(l.jsx)("div",{className:"h-100",style:m,children:Object(l.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(l.jsx)(c.a,{justify:"center",children:Object(l.jsx)(i.a,{xs:20,sm:20,md:20,lg:7,children:Object(l.jsx)(n.a,{children:Object(l.jsxs)("div",{className:"my-2",children:[Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)("img",{className:"img-fluid",src:"/img/".concat("light"===s?"logo.png":"logo-white.png"),alt:""}),Object(l.jsx)("p",{className:"text-muted",children:"Create a new account:"})]}),Object(l.jsx)(c.a,{justify:"center",children:Object(l.jsx)(i.a,{xs:24,sm:24,md:20,lg:20,children:Object(l.jsx)(r.a,Object(t.a)({},e))})})]})})})})})})}},555:function(e,s,a){"use strict";var t=a(73),r=a(0),c=a(36),i=a(1439),n=a(1415),o=a(1434),l=a(1438),m=a(426),d=a(110),j=a(53),u=a(41),h=a(528),b=a(3),g={email:[{required:!0,message:"Please input your email address"},{type:"email",message:"Please enter a validate email!"}],password:[{required:!0,message:"Please input your password"}],confirm:[{required:!0,message:"Please confirm your password!"},function(e){var s=e.getFieldValue;return{validator:function(e,a){return a&&s("password")!==a?Promise.reject("Passwords do not match!"):Promise.resolve()}}}]},x={signUp:j.k,showAuthMessage:j.c,hideAuthMessage:j.b,showLoading:j.d};s.a=Object(c.b)((function(e){var s=e.auth;return{loading:s.loading,message:s.message,showMessage:s.showMessage,token:s.token,redirect:s.redirect}}),x)((function(e){var s=e.signUp,a=e.showLoading,c=e.token,j=e.loading,x=e.redirect,p=e.message,O=e.showMessage,f=e.hideAuthMessage,w=e.allowRedirect,y=o.a.useForm(),v=Object(t.a)(y,1)[0],k=Object(u.g)();return Object(r.useEffect)((function(){null!==c&&w&&k.push(x),O&&setTimeout((function(){f()}),3e3)})),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:O?1:0,marginBottom:O?20:0},children:Object(b.jsx)(l.a,{type:"error",showIcon:!0,message:p})}),Object(b.jsxs)(o.a,{form:v,layout:"vertical",name:"register-form",onFinish:function(){v.validateFields().then((function(e){a(),s(e)})).catch((function(e){console.log("Validate Failed:",e)}))},children:[Object(b.jsx)(o.a.Item,{name:"email",label:"Email",rules:g.email,hasFeedback:!0,children:Object(b.jsx)(m.a,{prefix:Object(b.jsx)(i.a,{className:"text-primary"})})}),Object(b.jsx)(o.a.Item,{name:"password",label:"Password",rules:g.password,hasFeedback:!0,children:Object(b.jsx)(m.a.Password,{prefix:Object(b.jsx)(n.a,{className:"text-primary"})})}),Object(b.jsx)(o.a.Item,{name:"confirm",label:"ConfirmPassword",rules:g.confirm,hasFeedback:!0,children:Object(b.jsx)(m.a.Password,{prefix:Object(b.jsx)(n.a,{className:"text-primary"})})}),Object(b.jsx)(o.a.Item,{children:Object(b.jsx)(d.a,{type:"primary",htmlType:"submit",block:!0,loading:j,children:"Sign Up"})})]})]})}))}}]);
//# sourceMappingURL=39.bafd3b45.chunk.js.map