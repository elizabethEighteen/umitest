export default [
  {
    path: '/login',
    layout: false,
    hideInMenu: true,
    component: '@/pages/Login/index',
  },
  {
    path: '/',
    redirect: 'login',
  },
  {
    path: '/test',
    name: '设备管理',
    icon: 'Hdd',
    component: '@/pages/Test/index',
  },
];
