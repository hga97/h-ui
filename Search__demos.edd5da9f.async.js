"use strict";(self.webpackChunk_hga_h_ui=self.webpackChunk_hga_h_ui||[]).push([[202],{86715:function(T,E,n){n.r(E);var P=n(5574),m=n.n(P),x=n(20926),g=n(67294),r=n(34921),c=n(85893);E.default=function(){var M=(0,g.useState)(""),A=m()(M,2),B=A[0],y=A[1],N=function(j){y(j.target.value)},I=function(j){console.log(j,"onSearch")};return console.log("render..."),(0,c.jsx)(x.ol,{value:B,onChange:N,suffix:"\u{1F608}",onSearch:I})}},92176:function(T,E,n){n.r(E);var P=n(20926),m=n(67294),x=n(34921),g=n(85893);E.default=function(){var r=function(M){console.log(M,"onSearch")};return console.log("\u53EArender\u4E00\u6B21"),(0,g.jsx)(P.ol,{onSearch:r})}},86672:function(T,E,n){n.r(E);var P=n(20926),m=n(67294),x=n(34921),g=n(85893);E.default=function(){var r=(0,m.useRef)(null);return(0,m.useEffect)(function(){console.log(r)},[]),(0,g.jsx)(P.ol,{className:"search-small",ref:r})}},34921:function(){},20926:function(T,E,n){n.d(E,{bZ:function(){return N},WH:function(){return K},v$:function(){return Q},ol:function(){return q},xH:function(){return un}});var P=n(97857),m=n.n(P),x=n(13769),g=n.n(x),r=n(67294),c=n(85893),M=["children","kind"],A="h-alert",B={info:"#5352ED",positive:"#2ED573",negative:"#FF4757",warning:"#FFA502"},y=function(e){var o=e.children,a=e.kind,s=a===void 0?"info":a,u=g()(e,M);return(0,c.jsx)("div",m()(m()({className:A,style:{background:B[s]}},u),{},{children:o}))},N=y,I=n(5574),S=n.n(I),j=function(e){var o=(0,r.useState)(e),a=S()(o,2),s=a[0],u=a[1],f=(0,r.useState)(!1),C=S()(f,2),i=C[0],d=C[1],h=function(){d(!0)},v=(0,r.useCallback)(function(){d(!1),u(e)},[u,d,e]);return(0,r.useEffect)(function(){var l;return i&&s>0?l=setTimeout(function(){u(s-1)},1e3):s===0&&v(),function(){clearTimeout(l)}},[i,s,v]),[s,i,h,v]},K=function(t){var e=t.initialCountdown,o=(0,r.useState)(""),a=S()(o,2),s=a[0],u=a[1],f=function(D){u(D.target.value)},C=j(e),i=S()(C,3),d=i[0],h=i[1],v=i[2];return(0,c.jsxs)("div",{className:"count-down-timer",children:[(0,c.jsx)("input",{className:"phone-input",type:"text",value:s,onChange:f}),(0,c.jsx)("button",{className:"code-btn",onClick:v,disabled:h,children:h?"".concat(d,"\u79D2\u540E\u91CD\u65B0\u83B7\u53D6"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"})]})},F=n(19632),_=n.n(F),H=n(20745),Z=n(5031),z=n(90844),O=document.createElement("div");document.body.append(O),O.style.position="fixed",O.style.top="10px",O.style.zIndex="999";var G=H.createRoot(O),V=function(e){var o=e.content,a=e.onRemove,s=(0,r.useState)(!1),u=S()(s,2),f=u[0],C=u[1];return(0,r.useEffect)(function(){var i;return f||(i=setTimeout(function(){a()},3e3)),function(){console.log(f,"ishover"),clearTimeout(i)}},[f,a]),(0,c.jsx)("div",{className:"notification",onMouseEnter:function(){return C(!0)},onMouseLeave:function(){return C(!1)},children:o})},J=(0,r.forwardRef)(function(t,e){var o=(0,r.useState)([]),a=S()(o,2),s=a[0],u=a[1],f=(0,r.useRef)(0);return(0,r.useImperativeHandle)(e,function(){return{notify:function(i){var d=f.current++;u(function(h){var v=(0,c.jsx)(Z.Z,{className:"message",timeout:500,classNames:"message",children:(0,c.jsx)(V,{onRemove:function(){u(function(D){return D.filter(function(R){return R.key!==d.toString()})})},content:i})},d);return[].concat(_()(h),[v])})}}},[]),(0,c.jsx)(z.Z,{children:s})}),W=(0,r.createRef)();G.render((0,c.jsx)(J,{ref:W}));function Q(t){W.current.notify(t)}var X=n(52677),U=n.n(X),Y=n(93016),b=n(93967),p=n.n(b),w=["suffix","className"];function $(t,e){typeof t=="function"?t(e):U()(t)==="object"&&t&&"current"in t&&(t.current=e)}function k(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];var a=e.filter(Boolean);return a.length<=1?a[0]:function(s){e.forEach(function(u){$(u,s)})}}var q=r.forwardRef(function(t,e){var o=t.suffix,a=t.className,s=g()(t,w),u=(0,r.useRef)(null),f=(0,c.jsx)("span",{className:"search-icon",onClick:function(){var i;if((i=u.current)!==null&&i!==void 0&&i.input){var d,h,v;(d=t.onSearch)===null||d===void 0||d.call(t,(h=u.current)===null||h===void 0||(v=h.input)===null||v===void 0?void 0:v.value)}},children:o||"\u{1F50D}"});return(0,c.jsx)(Y.Z,m()({ref:k(u,e),className:p()("search",a),placeholder:"\u8BF7\u8F93\u5165\u60F3\u641C\u7D22\u7684\u5185\u5BB9",allowClear:!0,suffix:f},s))}),nn=n(51336),tn=["onSearch","onChange","suffix"];function en(t,e){typeof t=="function"?t(e):U()(t)==="object"&&t&&"current"in t&&(t.current=e)}function on(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];var a=e.filter(Boolean);return a.length<=1?a[0]:function(s){e.forEach(function(u){en(u,s)})}}var an=r.forwardRef(function(t,e){var o=t.onSearch,a=t.onChange,s=t.suffix,u=g()(t,tn),f=r.useRef(null),C=function(l){l&&l.target&&l.type==="click"&&o&&o(l.target.value,l),a&&a(l)},i=function(l){if(o){var D;if((D=f.current)!==null&&D!==void 0&&D.input){var R,L;o((R=f.current)===null||R===void 0||(L=R.input)===null||L===void 0?void 0:L.value,l)}}},d=function(l){i(l)},h=(0,c.jsx)("span",{className:"search-icon",onClick:function(l){l.stopPropagation(),i(l)},children:s||"\u{1F50D}"});return(0,c.jsx)(nn.Z,m()(m()({ref:on(f,e),onPressEnter:d,className:"search",placeholder:"\u8BF7\u8F93\u5165\u60F3\u641C\u7D22\u7684\u5185\u5BB9",allowClear:!0},u),{},{suffix:h,onChange:C}))}),un=an}}]);