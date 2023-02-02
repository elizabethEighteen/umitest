import { request } from 'umi';

interface LoginParams {
  userName: string;
  password: string;
}

/**
 * 登录接口
 */
export const fetchLogin = (params: LoginParams) => {
  return request('/api/User/SignIn', {
    method: 'POST',
    data: params,
  });
};

/**
 * 登出接口
 */
export const fetchLogOut = () => {
  return request('/api/User/SignOut', {
    method: 'POST',
  });
};
