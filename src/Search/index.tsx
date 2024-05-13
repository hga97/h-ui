import type { InputRef } from 'antd/es/input';
import type { SearchProps } from 'antd/es/input/Search';
import Search from 'antd/es/input/Search';
import classNames from 'classnames';
import React, { useRef } from 'react';

function fillRef<T>(ref: React.Ref<T>, node: T) {
  if (typeof ref === 'function') {
    ref(node);
  } else if (typeof ref === 'object' && ref && 'current' in ref) {
    (ref as any).current = node;
  }
}

function composeRef<T>(...refs: React.Ref<T>[]): React.Ref<T> {
  const refList = refs.filter(Boolean);
  if (refList.length <= 1) {
    return refList[0];
  }
  return (node: T) => {
    refs.forEach((ref) => {
      fillRef(ref, node);
    });
  };
}

export default React.forwardRef<InputRef, SearchProps>((props, ref) => {
  const { suffix, className, ...restProps } = props;
  const searchRef = useRef<InputRef>(null);

  const suffixCmp = (
    <span
      className={'search-icon'}
      onClick={() => {
        if (searchRef.current?.input) {
          props.onSearch?.(searchRef.current?.input?.value);
        }
      }}
    >
      {suffix || '🔍'}
    </span>
  );

  return (
    <Search
      ref={composeRef(searchRef, ref)}
      className={classNames('search', className)}
      placeholder="请输入想搜索的内容"
      allowClear
      suffix={suffixCmp}
      {...restProps}
    />
  );
});
