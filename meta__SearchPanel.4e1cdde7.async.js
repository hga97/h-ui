"use strict";(self.webpackChunk_hga_h_ui=self.webpackChunk_hga_h_ui||[]).push([[293],{25712:function(a,e,n){n.r(e),n.d(e,{demos:function(){return d}});var o=n(15009),s=n.n(o),i=n(99289),l=n.n(i),r=n(67294),d={"searchpanel-demo-basic":{component:r.memo(r.lazy(function(){return n.e(898).then(n.bind(n,45564))})),asset:{type:"BLOCK",id:"searchpanel-demo-basic",refAtomIds:["SearchPanel"],dependencies:{"index.tsx":{type:"FILE",value:n(2051).Z},"@hga/h-ui":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.3.1"},"../style.ts":{type:"FILE",value:n(20441).Z},"./index.less":{type:"FILE",value:n(88086).Z}},entry:"index.tsx"},context:{"@hga/h-ui":n(55193),react:n(67294),"../style.ts":n(59004),"./index.less":n(7231)},renderOpts:{compile:function(){var m=l()(s()().mark(function c(){var u,h=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(335).then(n.bind(n,37335));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,h));case 3:case"end":return t.stop()}},c)}));function p(){return m.apply(this,arguments)}return p}()}}}},59004:function(a,e,n){n.r(e);var o=n(7231)},7231:function(a,e,n){n.r(e)},25618:function(a,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[{value:"\u663E\u793A\u52A8\u6548\u539F\u7406\uFF1A\u9ED8\u8BA4\u6DFB\u52A0\u663E\u793A\u52A8\u753B\uFF0C\u9762\u677F\u663E\u793A\u65F6\u5C55\u793A\u8BE5\u52A8\u6548\u3002",paraId:0,tocIndex:1},{value:`
\u9690\u85CF\u52A8\u6548\u539F\u7406\uFF1A\u52A8\u6001\u8BBE\u7F6E\u9690\u85CF\u52A8\u753B\u7684\u7C7B\u540D\uFF0C\u9690\u85CF\u52A8\u6548\u7ED3\u675F\u540E\uFF0C\u5173\u95ED\u9762\u677F\u3002`,paraId:0,tocIndex:1}]},2051:function(a,e){e.Z=`import { SearchPanel } from '@hga/h-ui';
import React from 'react';
import '../style';

export default () => {
  return <SearchPanel />;
};
`},88086:function(a,e){e.Z=`.search-panel {
  position: relative;
  width: 350px;

  .search-panel-drowpdown {
    position: absolute;
    z-index: 2;
    width: 100%;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 11px 14px 4px #e2eaff;
    transform-origin: 0 0;
    backdrop-filter: blur(10px);
    animation-duration: 0.3s;
    animation-play-state: running;
    animation-fill-mode: both;
    animation-name: SearchPanelDropdownSlideUpIn;

    &.sideUpOut {
      animation-name: SearchPanelDropdownSlideUpOut;
    }

    .panel-colse {
      cursor: pointer;
    }
  }
}

@keyframes SearchPanelDropdownSlideUpIn {
  0% {
    transform: scaleY(0);
    transform-origin: 0% 0%;
    opacity: 0;
  }
  100% {
    transform: scaleY(1);
    transform-origin: 0% 0%;
    opacity: 1;
  }
}

@keyframes SearchPanelDropdownSlideUpOut {
  0% {
    transform: scaleY(1);
    transform-origin: 0% 0%;
    opacity: 1;
  }
  100% {
    transform: scaleY(0);
    transform-origin: 0% 0%;
    opacity: 0;
  }
}
`},20441:function(a,e){e.Z=`import './index.less';
`}}]);
