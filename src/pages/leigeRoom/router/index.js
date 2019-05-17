import Home from '../pages/home'
import YYScom from '../pages/yyscompute' // 关于阴阳师计算属性

export default [
  {
    path: '/leige',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'yyscom',
        name: 'YYScom',
        component: YYScom
      }
    ]
  }
]