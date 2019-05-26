import Home from '../pages/home'
import YYScom from '../pages/yyscompute' // 关于阴阳师计算属性
import YYSRes from '../pages/yysresource' // 关于阴阳师网络资源
import YYSSounds from '../pages/yyssounds' // 关于阴阳师网络资源
import Unicode from '../pages/unicode' // 查看Unicode对应的符号
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
        path: 'yysres',
        name: 'YYSRes',
        component: YYSRes,
        meta: { title: `${baseRoomTitle}/阴阳师` }
      },
      {
        path: 'yyssounds',
        name: 'YYSSounds',
        component: YYSSounds,
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
