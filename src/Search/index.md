---
title: Search 搜索框
nav:
  title: 组件
  order: 2
group:
  title: 反馈
  order: 1
---

# 搜索框

支持受控模式和非受控模式

## 代码演示

### 非受控模式

大部分场景试用，无需手动控制 value 值。由用户自己输入，配合 onSearch 事件来获取搜索关键字。组件只 render 一次。

<code src="./demo/noControlled.tsx"></code>

### 受控模式

少量场景，如需要动态设置 input 的值，使用受控模式。value 由代码控制，配合 onChange 事件 和 setValue 来设置。 组件频繁 render。

<code src="./demo/controlled.tsx"></code>

### 受控和非受控原理

```tsx | pure

import React, { useState, useEffect, useRef } from 'react';
import { isUndefined } from '../is';
import usePrevious from './usePrevious';

export default function useMergeValue(defaultStateValue，props) {
  const { defaultValue, value } = props || {};
  const firstRenderRef = useRef(true);
  const prevPropsValue = usePrevious(value);

  const [stateValue, setStateValue] = useState(
    !isUndefined(value) ? value : !isUndefined(defaultValue) ? defaultValue : defaultStateValue
  );

  useEffect(() => {
    // 第一次渲染时候，props.value 已经在useState里赋值给stateValue了，不需要再次赋值。
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    // 外部value等于undefined，也就是一开始有值，后来变成了undefined（
    // 可能是移除了value属性，或者直接传入的undefined），那么就更新下内部的值。
    // 如果value有值，在下一步逻辑中直接返回了value，不需要同步到stateValue
    /**
     *  prevPropsValue !== value: https://github.com/arco-design/arco-design/issues/1686
     *  react18 严格模式下 useEffect 执行两次，可能出现 defaultValue 不生效的问题。
     */
    if (value === undefined && prevPropsValue !== value) {
      setStateValue(value);
    }
  }, [value]);

  const mergedValue = isUndefined(value) ? stateValue : value;

  return [mergedValue, setStateValue, stateValue];
}

```

受控模式，useState 的初始值设置 props.value，然后渲染用 props.value。  
非受控模式，那渲染用内部 state 的 value，然后 changeValue 里 setValue。

### ref

- React.forwardRef, ref 传入父组件传递的 ref。
- ref 回调函数

```tsx | pure

<div ref={(node) => console.log(node)} /> // 当 <div> DOM 节点被添加到屏幕上时，React 将使用该节点作为参数调用 ref 回调函数。

```

<code src="./demo/ref.tsx"></code>
