import { history } from 'umi';
import { message } from 'antd';
// 请求拦截器
export const requestInterceptors = (url: any, options: any) => {
  const { headers } = options;
  const c_token = JSON.parse(localStorage.getItem('Authorization') || 'null');
  return {
    url,
    options: {
      ...options,
      headers: {
        ...headers,
        Authorization: c_token, // 请求头中添加token
        'Access-Control-Allow-Credentials': true,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'x-requested-with',
      },
    },
  };
};

// 错误处理

// 响应拦截器
/*** umi4 使用的是axios库， 注意返回需要有 data, success这两个属性 */
export const responseInterceptors = (response: any) => {
  if (response) {
    const { data } = response;
    if (data.code === 401) {
      history.push('/login');
    }
    if (data.code === 200) {
      return {
        ...response,
        success: true,
      };
    } else {
      message.error(data.message);
      return {
        ...response,
        success: true,
      };
    }
  }
};
