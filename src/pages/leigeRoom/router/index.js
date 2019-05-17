import Home from '../pages/home'
import YYScom from '../pages/yyscompute' // 关于阴阳师计算属性
import Unicode from '../pages/unicode' // 关于阴阳师计算属性
import Page404 from '../pages/fourzerofour' // 404

const baseRoomTitle = '磊'

export default [
  {
    path: '/leige',
    name: 'Home',
    component: Home,
    meta: { title: baseRoomTitle },
    children: [
      {
        path: 'yyscom',
        name: 'YYScom',
        component: YYScom,
        meta: { title: `${baseRoomTitle}/阴阳师` }
      },
      {
        path: 'unicode',
        name: 'Unicode',
        component: Unicode,
        meta: { title: `${baseRoomTitle}/unicode` }
      },
      {
        path: 'coding',
        name: 'Page404',
        component: Page404,
        meta: { title: `${baseRoomTitle}/404` }
      },
      {
        path: '*',
        redirect: '/leige/coding'
      }
    ]
  }
]