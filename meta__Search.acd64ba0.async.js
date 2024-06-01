"use strict";(self.webpackChunk_hga_h_ui=self.webpackChunk_hga_h_ui||[]).push([[359],{72856:function(a,t,n){n.r(t),n.d(t,{demos:function(){return f}});var m=n(15009),o=n.n(m),c=n(99289),p=n.n(c),r=n(67294),f={"search-demo-nocontrolled":{component:r.memo(r.lazy(function(){return n.e(202).then(n.bind(n,4009))})),asset:{type:"BLOCK",id:"search-demo-nocontrolled",refAtomIds:["Search"],dependencies:{"index.tsx":{type:"FILE",value:n(18177).Z},"@hga/h-ui":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.1.0"},"../style.ts":{type:"FILE",value:n(78712).Z},"./index.less":{type:"FILE",value:n(1833).Z}},entry:"index.tsx"},context:{"@hga/h-ui":n(55193),react:n(67294),"../style.ts":n(41042),"./index.less":n(45186)},renderOpts:{compile:function(){var l=p()(o()().mark(function d(){var s,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(s=e.sent).default.apply(s,i));case 3:case"end":return e.stop()}},d)}));function u(){return l.apply(this,arguments)}return u}()}},"search-demo-controlled":{component:r.memo(r.lazy(function(){return n.e(202).then(n.bind(n,50940))})),asset:{type:"BLOCK",id:"search-demo-controlled",refAtomIds:["Search"],dependencies:{"index.tsx":{type:"FILE",value:n(3519).Z},"@hga/h-ui":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.1.0"},"../style.ts":{type:"FILE",value:n(78712).Z},"./index.less":{type:"FILE",value:n(1833).Z}},entry:"index.tsx"},context:{"@hga/h-ui":n(55193),react:n(67294),"../style.ts":n(41042),"./index.less":n(45186)},renderOpts:{compile:function(){var l=p()(o()().mark(function d(){var s,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(s=e.sent).default.apply(s,i));case 3:case"end":return e.stop()}},d)}));function u(){return l.apply(this,arguments)}return u}()}},"search-demo-ref":{component:r.memo(r.lazy(function(){return n.e(202).then(n.bind(n,11686))})),asset:{type:"BLOCK",id:"search-demo-ref",refAtomIds:["Search"],dependencies:{"index.tsx":{type:"FILE",value:n(93617).Z},"@hga/h-ui":{type:"NPM",value:"1.2.1"},react:{type:"NPM",value:"18.1.0"},"../style.ts":{type:"FILE",value:n(78712).Z},"./index.less":{type:"FILE",value:n(1833).Z}},entry:"index.tsx"},context:{"@hga/h-ui":n(55193),react:n(67294),"../style.ts":n(41042),"./index.less":n(45186)},renderOpts:{compile:function(){var l=p()(o()().mark(function d(){var s,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(s=e.sent).default.apply(s,i));case 3:case"end":return e.stop()}},d)}));function u(){return l.apply(this,arguments)}return u}()}}}},47047:function(a,t,n){n.r(t),n.d(t,{texts:function(){return m}});const m=[]},3519:function(a,t){t.Z=`import { Search } from '@hga/h-ui';
import React, { useState } from 'react';
import '../style';

export default () => {
  const [value, setValue] = useState('');
  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  const onSearch = (e: any) => {
    console.log(e, 'onSearch');
  };
  console.log('render...');
  return <Search value={value} onChange={onChange} suffix={'\u{1F608}'} onSearch={onSearch} />;
};
`},18177:function(a,t){t.Z=`import { Search } from '@hga/h-ui';
import React from 'react';
import '../style';

export default () => {
  const onSearch = (e: any) => {
    console.log(e, 'onSearch');
  };
  console.log('\u53EArender\u4E00\u6B21');
  return <Search onSearch={onSearch} />;
};
`},93617:function(a,t){t.Z=`import { Search } from '@hga/h-ui';
import React, { useEffect, useRef } from 'react';
import '../style';

export default () => {
  const sRef = useRef(null);
  useEffect(() => {
    console.log(sRef);
  }, []);
  return <Search className="search-small" ref={sRef} />;
};
`},1833:function(a,t){t.Z=`.search {
  .search-icon {
    padding: 0 3px;
    cursor: pointer;
  }

  .ant-input-affix-wrapper {
    width: 350px;
    height: 32px;
    font-size: 12px;
    background: #fff;
    border: 1px solid #567fe6;
    box-shadow: 0 11px 14px 4px #e2eaff;
    border-start-start-radius: 34px !important;
    border-end-start-radius: 34px !important;
    border-start-end-radius: 34px !important;
    border-end-end-radius: 34px !important;
  }

  .ant-input-group-addon {
    display: none;
  }
}

.search-small {
  .ant-input-affix-wrapper {
    width: 220px;
    height: 24px;
    font-size: 10px;
    background: #fff;
    border: 1px solid #567fe6;
    box-shadow: 0 11px 14px 4px #e2eaff;
    border-start-start-radius: 20px !important;
    border-end-start-radius: 20px !important;
    border-start-end-radius: 20px !important;
    border-end-end-radius: 20px !important;
  }
}
`},78712:function(a,t){t.Z=`import './index.less';
`}}]);
