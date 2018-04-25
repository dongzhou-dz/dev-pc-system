const Index = () => import('@/pages/index/').then(m => m.default)// 首页
const Login = () => import('@/pages/login/').then(m => m.default)// 登录
const Setting = () => import('@/pages/setting/').then(m => m.default)// 通用配置
const usersList = () => import('@/pages/usersList/').then(m => m.default)// 用户管理
const lecList = () => import('@/pages/lecList/').then(m => m.default)// 讲师管理
const hostList = () => import('@/pages/hostList/').then(m => m.default)// 主持人管理
const mgmtList = () => import('@/pages/mgmtList/').then(m => m.default)// 管理员管理

export default [
  // {
  //   path: '/',
  //   name: 'Login',
  //   component: Login
  // },
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/setting',
    name: 'setting',
    component: Setting
  },
  {
    path: 'usersList',
    name: 'userslist',
    component: usersList
  }
]
