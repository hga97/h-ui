(self.webpackChunk_hga_h_ui=self.webpackChunk_hga_h_ui||[]).push([[819],{81818:function(r,d,t){"use strict";t.r(d),t.d(d,{default:function(){return u}});var l=t(40104),i=t(67294),e=t(85893),u=function(){return(0,e.jsx)(l.b,{kind:"warning",children:"\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u63D0\u793A"})}},40104:function(r,d,t){"use strict";t.d(d,{b:function(){return N},W:function(){return A}});var l=t(97857),i=t.n(l),e=t(13769),u=t.n(e),n=t(67294),o=t(85893),h=["children","kind"],x="h-alert",w={info:"#5352ED",positive:"#2ED573",negative:"#FF4757",warning:"#FFA502"},D=function(a){var C=a.children,c=a.kind,s=c===void 0?"info":c,f=u()(a,h);return(0,o.jsx)("div",i()(i()({className:x,style:{background:w[s]}},f),{},{children:C}))},N=D,O=t(5574),j=t.n(O),k=function(a){var C=(0,n.useState)(a),c=j()(C,2),s=c[0],f=c[1],P=(0,n.useState)(!1),b=j()(P,2),v=b[0],p=b[1],S=function(){p(!0)},g=(0,n.useCallback)(function(){p(!1),f(a)},[f,p,a]);return(0,n.useEffect)(function(){var m;return v&&s>0?m=setTimeout(function(){f(s-1)},1e3):s===0&&g(),function(){clearTimeout(m)}},[v,s,g]),[s,v,S,g]},A=function(y){var a=y.initialCountdown,C=(0,n.useState)(""),c=j()(C,2),s=c[0],f=c[1],P=function(E){f(E.target.value)},b=k(a),v=j()(b,3),p=v[0],S=v[1],g=v[2];return(0,o.jsxs)("div",{className:"count-down-timer",children:[(0,o.jsx)("input",{className:"phone-input",type:"text",value:s,onChange:P}),(0,o.jsx)("button",{className:"code-btn",onClick:g,disabled:S,children:S?"".concat(p,"\u79D2\u540E\u91CD\u65B0\u83B7\u53D6"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"})]})}},13769:function(r,d,t){var l=t(48541);function i(e,u){if(e==null)return{};var n=l(e,u),o,h;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(e);for(h=0;h<x.length;h++)o=x[h],!(u.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}r.exports=i,r.exports.__esModule=!0,r.exports.default=r.exports},48541:function(r){function d(t,l){if(t==null)return{};var i={},e=Object.keys(t),u,n;for(n=0;n<e.length;n++)u=e[n],!(l.indexOf(u)>=0)&&(i[u]=t[u]);return i}r.exports=d,r.exports.__esModule=!0,r.exports.default=r.exports}}]);
