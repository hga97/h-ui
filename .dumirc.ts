import { defineConfig } from 'dumi';

// 此处更换为自己的仓库名
let base: string | undefined = '/h-ui/';
let publicPath: string | undefined = '/h-ui/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}

export default defineConfig({
  title: 'H UI', // 站点名称
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  base, // 此处更换为自己的仓库名
  publicPath, // 此处更换为自己的仓库名
});
