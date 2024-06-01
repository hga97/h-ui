"use strict";(self.webpackChunk_hga_h_ui=self.webpackChunk_hga_h_ui||[]).push([[765],{28297:function(t,e,n){n.r(e),n.d(e,{demos:function(){return l}});var o=n(15009),a=n.n(o),r=n(99289),m=n.n(r),u=n(67294),l={"messagesource-demo-basic":{component:u.memo(u.lazy(function(){return n.e(997).then(n.bind(n,14367))})),asset:{type:"BLOCK",id:"messagesource-demo-basic",refAtomIds:["MessageSource"],dependencies:{"index.tsx":{type:"FILE",value:n(49273).Z},"@hga/h-ui":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.1.0"},"../style.ts":{type:"FILE",value:n(59320).Z},"./index.less":{type:"FILE",value:n(75852).Z}},entry:"index.tsx"},context:{"@hga/h-ui":n(55193),react:n(67294),"../style.ts":n(79170),"./index.less":n(89464)},renderOpts:{compile:function(){var d=m()(a()().mark(function _(){var i,c=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.e(335).then(n.bind(n,37335));case 2:return s.abrupt("return",(i=s.sent).default.apply(i,c));case 3:case"end":return s.stop()}},_)}));function p(){return d.apply(this,arguments)}return p}()}}}},79170:function(t,e,n){n.r(e);var o=n(89464)},89464:function(t,e,n){n.r(e)},48192:function(t,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[{value:"\u5168\u5C40\u5C55\u793A\u64CD\u4F5C\u53CD\u9988\u4FE1\u606F\u3002",paraId:0,tocIndex:0}]},49273:function(t,e){e.Z=`import { MessageSource } from '@hga/h-ui';
import React from 'react';
import '../style';

export default () => (
  <button
    onClick={() => {
      MessageSource(Date.now().toString());
    }}
  >
    Show Notification
  </button>
);
`},75852:function(t,e){e.Z=`.notification {
  margin-bottom: 10px;
  padding: 10px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.message {
  position: relative;
  margin-top: -10px;
  opacity: 0;
  background-color: #fff;
}

.message-enter {
  margin-top: -10px;
  opacity: 0;
}

.message-enter-active {
  margin-top: 0;
  opacity: 1;
  transition: all 0.5s;
}

.message-enter-done {
  margin-top: 0;
  opacity: 1;
}

.message-exit {
  margin-top: 0;
  opacity: 1;
}

.message-exit-active {
  margin-top: -10px;
  opacity: 0;
  transition: all 0.5s;
}
`},59320:function(t,e){e.Z=`import './index.less';
`}}]);
