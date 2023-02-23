<!-- # h-ui

### todo：

1、重新编译，还是报错

### why？

1、browserslistrc 会不会让打包的体积变大，还是运行时编译 （bable-preset-env）

会。

bable-preset-env 按需引入 polyfill。

- 这里的 targets 是 browserslist 的查询字符串，它可以解析查询字符串返回对应的浏览器版本：
- 根据目标浏览器的版本，过滤出哪些特性是支持的，哪些是不支持的。然后只对不支持的特性做语法转换和 polyfill。（@babel/compat-data）

2、为啥分 cjs esm，esm 可以 tree-shaking，cjs 是不是只能手动按需，tree-shaking 是不是就不用 babel-plugin-import

2.1 esm 可以 tree-shaking

tree-shaking：标记，没用到的直接 shaking 掉。

antd 默认支持基于 ES modules 的 tree shaking，直接引入 import { Button } from 'antd'; 就会有按需加载的效果。

Vant 默认支持 Tree Shaking，因此你不需要配置任何插件，通过 Tree Shaking 即可移除不需要的 JS 代码，但 CSS 样式无法通过这种方式优化，如果需要按需引入 CSS 样式，请参考下面的方法二。

2.2 babel-plugin-import

比如 antd 之前提供的 babel-plugin-import，插件通过引入固定路径的组件及组件样式，替代手动 shaking 的过程。由此也可以确定打包后的文件路径（组件要求 lib/xx，样式文件要求 lib/xx/style/xx）和文件模块**CommonJs**

2.3 module 和 main

如果使用 import 对该库进行导入，则首次寻找 module 字段引入，否则引入 main 字段。

module 字段作为 es module 入口
main 字段作为 commonjs 入口

2.4 为啥分 cjs 和 es

从现在的发展来看 cjs 版本的组件的确意义不大，但是考虑历史因素，比如对 es 模块兼容性较差的环境就有意义了，如服务端渲染

2.5 自然会使用@babel/preset-env + core-js + .browserslistrc 进行全局 polyfill，这套组合拳引入了最低目标浏览器不支持 API 的全部 polyfill。

3、webpack 为啥 esm 难打出来

4、babel 单独出一篇文章 -->

### h-ui 组件库

react + ts + gulp + dumi
