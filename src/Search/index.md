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
