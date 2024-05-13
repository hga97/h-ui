import type { InputRef } from 'antd/es/input';
import Search from 'antd/es/input/Search';
import React, { useRef } from 'react';
import '../style';

export default ({ suffix }: { suffix?: React.ReactNode }) => {
  const sRef = useRef<InputRef>(null);

  const onSearch = (e: any) => {
    console.log(e, 'onSearch');
  };

  const suffixCmp = (
    <span
      className={'search-icon'}
      onClick={() => {
        console.log(sRef);
        if (sRef.current?.input) {
          onSearch(sRef.current?.input?.value);
        }
      }}
    >
      {suffix || '🔍'}
    </span>
  );

  console.log('只渲染一次');

  return (
    <Search
      ref={sRef}
      className="simple-search"
      placeholder="请输入想搜索的内容"
      allowClear
      suffix={suffixCmp}
      onSearch={onSearch}
    />
  );
};
