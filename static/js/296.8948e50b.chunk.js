"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[296],{7296:function(n,e,r){r.r(e),r.d(e,{default:function(){return D}});var t=r(4270),a=r(9434),i=r(9273),o=r(2791),c=r(3044),s=r(4281),u=r(4708),p=r(381),l=r(5527),m=r(4554),d=r(3433),f=r(4942),v=r(3366),g=r(7462),h=r(8182),x=r(1184),w=r(8519),b=r(4419),k=r(6934),Z=r(1402),S=r(3967);var j=o.createContext(),y=r(5878),W=r(1217);function M(n){return(0,W.Z)("MuiGrid",n)}var N=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],z=(0,y.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,d.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,d.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,d.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,d.Z)(N.map((function(n){return"grid-xs-".concat(n)}))),(0,d.Z)(N.map((function(n){return"grid-sm-".concat(n)}))),(0,d.Z)(N.map((function(n){return"grid-md-".concat(n)}))),(0,d.Z)(N.map((function(n){return"grid-lg-".concat(n)}))),(0,d.Z)(N.map((function(n){return"grid-xl-".concat(n)}))))),P=r(184),C=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function E(n){var e=parseFloat(n);return"".concat(e).concat(String(n).replace(String(e),"")||"px")}function G(n){var e=n.breakpoints,r=n.values,t="";Object.keys(r).forEach((function(n){""===t&&0!==r[n]&&(t=n)}));var a=Object.keys(e).sort((function(n,r){return e[n]-e[r]}));return a.slice(0,a.indexOf(t))}var I=(0,k.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,e){var r=n.ownerState,t=r.container,a=r.direction,i=r.item,o=r.spacing,c=r.wrap,s=r.zeroMinWidth,u=r.breakpoints,p=[];t&&(p=function(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[r["spacing-xs-".concat(String(n))]];var t=[];return e.forEach((function(e){var a=n[e];Number(a)>0&&t.push(r["spacing-".concat(e,"-").concat(String(a))])})),t}(o,u,e));var l=[];return u.forEach((function(n){var t=r[n];t&&l.push(e["grid-".concat(n,"-").concat(String(t))])})),[e.root,t&&e.container,i&&e.item,s&&e.zeroMinWidth].concat((0,d.Z)(p),["row"!==a&&e["direction-xs-".concat(String(a))],"wrap"!==c&&e["wrap-xs-".concat(String(c))]],l)}})((function(n){var e=n.ownerState;return(0,g.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})}),(function(n){var e=n.theme,r=n.ownerState,t=(0,x.P$)({values:r.direction,breakpoints:e.breakpoints.values});return(0,x.k9)({theme:e},t,(function(n){var e={flexDirection:n};return 0===n.indexOf("column")&&(e["& > .".concat(z.item)]={maxWidth:"none"}),e}))}),(function(n){var e=n.theme,r=n.ownerState,t=r.container,a=r.rowSpacing,i={};if(t&&0!==a){var o,c=(0,x.P$)({values:a,breakpoints:e.breakpoints.values});"object"===typeof c&&(o=G({breakpoints:e.breakpoints.values,values:c})),i=(0,x.k9)({theme:e},c,(function(n,r){var t,a=e.spacing(n);return"0px"!==a?(0,f.Z)({marginTop:"-".concat(E(a))},"& > .".concat(z.item),{paddingTop:E(a)}):null!=(t=o)&&t.includes(r)?{}:(0,f.Z)({marginTop:0},"& > .".concat(z.item),{paddingTop:0})}))}return i}),(function(n){var e=n.theme,r=n.ownerState,t=r.container,a=r.columnSpacing,i={};if(t&&0!==a){var o,c=(0,x.P$)({values:a,breakpoints:e.breakpoints.values});"object"===typeof c&&(o=G({breakpoints:e.breakpoints.values,values:c})),i=(0,x.k9)({theme:e},c,(function(n,r){var t,a=e.spacing(n);return"0px"!==a?(0,f.Z)({width:"calc(100% + ".concat(E(a),")"),marginLeft:"-".concat(E(a))},"& > .".concat(z.item),{paddingLeft:E(a)}):null!=(t=o)&&t.includes(r)?{}:(0,f.Z)({width:"100%",marginLeft:0},"& > .".concat(z.item),{paddingLeft:0})}))}return i}),(function(n){var e,r=n.theme,t=n.ownerState;return r.breakpoints.keys.reduce((function(n,a){var i={};if(t[a]&&(e=t[a]),!e)return n;if(!0===e)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===e)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var o=(0,x.P$)({values:t.columns,breakpoints:r.breakpoints.values}),c="object"===typeof o?o[a]:o;if(void 0===c||null===c)return n;var s="".concat(Math.round(e/c*1e8)/1e6,"%"),u={};if(t.container&&t.item&&0!==t.columnSpacing){var p=r.spacing(t.columnSpacing);if("0px"!==p){var l="calc(".concat(s," + ").concat(E(p),")");u={flexBasis:l,maxWidth:l}}}i=(0,g.Z)({flexBasis:s,flexGrow:0,maxWidth:s},u)}return 0===r.breakpoints.values[a]?Object.assign(n,i):n[r.breakpoints.up(a)]=i,n}),{})}));var L=function(n){var e=n.classes,r=n.container,t=n.direction,a=n.item,i=n.spacing,o=n.wrap,c=n.zeroMinWidth,s=n.breakpoints,u=[];r&&(u=function(n,e){if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return["spacing-xs-".concat(String(n))];var r=[];return e.forEach((function(e){var t=n[e];if(Number(t)>0){var a="spacing-".concat(e,"-").concat(String(t));r.push(a)}})),r}(i,s));var p=[];s.forEach((function(e){var r=n[e];r&&p.push("grid-".concat(e,"-").concat(String(r)))}));var l={root:["root",r&&"container",a&&"item",c&&"zeroMinWidth"].concat((0,d.Z)(u),["row"!==t&&"direction-xs-".concat(String(t)),"wrap"!==o&&"wrap-xs-".concat(String(o))],p)};return(0,b.Z)(l,M,e)},O=o.forwardRef((function(n,e){var r=(0,Z.Z)({props:n,name:"MuiGrid"}),t=(0,S.Z)().breakpoints,a=(0,w.Z)(r),i=a.className,c=a.columns,s=a.columnSpacing,u=a.component,p=void 0===u?"div":u,l=a.container,m=void 0!==l&&l,d=a.direction,f=void 0===d?"row":d,x=a.item,b=void 0!==x&&x,k=a.rowSpacing,y=a.spacing,W=void 0===y?0:y,M=a.wrap,N=void 0===M?"wrap":M,z=a.zeroMinWidth,E=void 0!==z&&z,G=(0,v.Z)(a,C),O=k||W,T=s||W,q=o.useContext(j),B=m?c||12:q,R={},$=(0,g.Z)({},G);t.keys.forEach((function(n){null!=G[n]&&(R[n]=G[n],delete $[n])}));var _=(0,g.Z)({},a,{columns:B,container:m,direction:f,item:b,rowSpacing:O,columnSpacing:T,wrap:N,zeroMinWidth:E,spacing:W},R,{breakpoints:t.keys}),D=L(_);return(0,P.jsx)(j.Provider,{value:B,children:(0,P.jsx)(I,(0,g.Z)({ownerState:_,className:(0,h.Z)(D.root,i),as:p,ref:e},$))})})),T=O,q=r(890),B=r(7107),R=r(4507),$=(0,B.Z)(),_=function(){var n=(0,a.I0)();return(0,P.jsx)(R.Z,{theme:$,children:(0,P.jsxs)(T,{container:!0,component:"main",sx:{height:"100vh"},children:[(0,P.jsx)(u.ZP,{}),(0,P.jsx)(T,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(https://source.unsplash.com/random?wallpapers)",backgroundRepeat:"no-repeat",backgroundColor:function(n){return"light"===n.palette.mode?n.palette.grey[50]:n.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center"}}),(0,P.jsx)(T,{item:!0,xs:12,sm:8,md:5,component:l.Z,elevation:6,square:!0,children:(0,P.jsxs)(m.Z,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,P.jsx)(c.Z,{sx:{m:1,bgcolor:"secondary.main"}}),(0,P.jsx)(q.Z,{component:"h1",variant:"h5",children:"Sign in"}),(0,P.jsxs)(m.Z,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault();var r=e.currentTarget;n((0,i.Ib)({email:r.elements.email.value,password:r.elements.password.value})),r.reset()},sx:{mt:1},children:[(0,P.jsx)(p.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),(0,P.jsx)(p.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),(0,P.jsx)(s.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"})]})]})})]})})},D=function(){return(0,P.jsxs)("div",{children:[(0,P.jsx)(t.q,{children:(0,P.jsx)("title",{children:"Login"})}),(0,P.jsx)(_,{})]})}}}]);
//# sourceMappingURL=296.8948e50b.chunk.js.map