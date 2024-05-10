// 创建一个search组件，支持受控和非受控
import { Input } from 'antd';
import type { InputProps, InputRef } from 'antd/es/input';

import React from 'react';

interface SearchProps extends InputProps {
  onSearch?: (
    value: string,
    event?:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement>
      | React.KeyboardEvent<HTMLInputElement>,
  ) => void;
}

const Search = (props: SearchProps) => {
  const { onSearch: customOnSearch, onChange: customOnChange, ...restProps } = props;
  const inputRef = React.useRef<InputRef>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e && e.target && e.type === 'click' && customOnSearch) {
      // 点击清除按钮触发
      // todo：理解其原理
      customOnSearch((e as React.ChangeEvent<HTMLInputElement>).target.value, e);
    }

    if (customOnChange) {
      customOnChange(e);
    }
  };

  const onSearch = (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>) => {
    if (customOnSearch) {
      if (inputRef.current?.input) {
        customOnSearch(inputRef.current?.input?.value, e);
      }
    }
  };

  const onPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onSearch(e);
  };

  // todo：icon组件自定义
  const suffixCmp = (
    <span
      className={'search-icon'}
      onClick={(e) => {
        // 阻止冒泡
        e.stopPropagation();
        onSearch(e);
        // todo: 直接触发onchange
      }}
    >
      🔍
    </span>
  );

  return (
    <Input
      ref={inputRef}
      onPressEnter={onPressEnter}
      className={'search'}
      placeholder="请输入想搜索的内容"
      allowClear
      {...restProps}
      suffix={suffixCmp}
      onChange={onChange}
    />
  );
};

export default Search;
