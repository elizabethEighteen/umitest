import { defineConfig } from '@umijs/max';
import proxy from './proxy';
import route from './route';
import theme from './theme';

export default defineConfig({
  antd: {
    theme,
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
    locale: {
      // 默认使用 src/locales/zh-CN.ts 作为多语言文件
      default: 'zh-CN',
    },
  },
  routes: route,
  proxy,
  npmClient: 'npm',
  // 配置leyout false 可以自定义布局
  // layout: false,
});
