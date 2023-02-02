import { Button, Form, Input, message } from 'antd';

import styles from './index.less';
import ParticlesBg from 'particles-bg';
import { fetchLogin } from '@/services/login';
import { useModel, history } from 'umi';

const Login: React.FC = () => {
  const { setInitialState } = useModel('@@initialState');
  /** 登录 */
  const handleSubmit = async (values: any) => {
    const result = await fetchLogin(values);
    if (result.code === 200 && result.isSuccess) {
      const { content } = result;
      localStorage.setItem(
        'Authorization',
        JSON.stringify(content.tokenInfo.accessToken),
      );
      localStorage.setItem('CurrentUser', JSON.stringify(content.userInfo));
      setInitialState((init: any) => ({
        ...init,
        currentUser: content.userInfo,
      }));
      message.info('登录成功！！！');
      history.push('/test');
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>基础数据配置工具</div>
          <div className={styles.form}>
            <Form
              name="basic"
              autoComplete="off"
              size="large"
              initialValues={{ remember: true }}
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 19 }}
              onFinish={handleSubmit}
            >
              <Form.Item
                label="账号"
                name="userName"
                rules={[{ required: true, message: '请输入用户名' }]}
              >
                <Input placeholder="请输入用户名" />
              </Form.Item>
              <Form.Item
                label="密码"
                name="pwd"
                rules={[{ required: true, message: '请输入密码' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 4, span: 19 }}>
                <Button type="primary" htmlType="submit" block>
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      {/* @ts-ignore */}
      <ParticlesBg type="lines" bg={true} />
    </>
  );
};

export default Login;
