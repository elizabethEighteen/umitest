// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
import defaultSetting from '../config/defaultSetting';
import type { RequestConfig, RuntimeAntdConfig } from 'umi';
import { theme } from 'antd';
import {
  requestInterceptors,
  responseInterceptors,
} from './services/interceptor';

export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const antd: RuntimeAntdConfig = (memo) => {
  memo.theme ||= {};
  memo.theme.algorithm = theme.darkAlgorithm;
  return memo;
};

export const layout = () => {
  return {
    // logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    // menu: {
    //   locale: false,
    // },
    contentStyle: { padding: '10px' },
    ...defaultSetting,
  };
};

export const request: RequestConfig = {
  timeout: 10000,
  errorConfig: {
    errorThrower() {},
    errorHandler() {},
  },
  requestInterceptors: [requestInterceptors],
  responseInterceptors: [responseInterceptors],
};
