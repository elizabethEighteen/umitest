import { Dropdown, Avatar, Badge, Space } from 'antd';
import { UserOutlined, BellOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import styles from './index.less';
import { useModel, history } from 'umi';
import { fetchLogOut } from '@/services/login';
const LayoutRightContent = () => {
  const { setInitialState } = useModel('@@initialState');
  const [userInfo, setUserInfo] = useState<any>(null);
  const items: any = [
    {
      label: '退出登录',
      key: 'logout',
    },
  ];

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('CurrentUser') || '{}');
    setUserInfo(userInfo);
  }, []);

  const onClick = async ({ key }: any) => {
    if (key === 'logout') {
      await fetchLogOut();
      localStorage.setItem('Authorization', '');
      localStorage.setItem('CurrentUser', '');
      setInitialState((init: any) => ({
        ...init,
        currentUser: null,
      }));
      history.push('/login');
    }
  };
  return (
    <div className={styles.rightContent}>
      {/* 消息 */}
      <div className={styles.rightContent_news}>
        <Badge overflowCount={999}>
          <BellOutlined className={styles.rightContent_news_icon} />
        </Badge>
      </div>
      {/* 用户信息 */}
      <div className={styles.rightContent_userInfo}>
        <Dropdown menu={{ items, onClick }}>
          <Space>
            <Avatar
              style={{ background: '#1890ff', marginTop: '-4px' }}
              icon={<UserOutlined />}
            />
            <span>{userInfo?.userName || '超级管理员'}</span>
          </Space>
        </Dropdown>
      </div>
    </div>
  );
};

export default LayoutRightContent;
