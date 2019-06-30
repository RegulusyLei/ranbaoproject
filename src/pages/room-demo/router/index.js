import Resource from '../resource'
import Axios from '../axios'
import Route from '../route'
import RouteDtail from '../routeDtail'
import RouteDtail2 from '../routeDtail2'
import RouteRes from '../routeRes'
import RoutePush from '../routePush'
import RouteSon from '../routeSon'
import RouteSon1 from '../routeSon1'
import RouteSon2 from '../routeSon2'
import MintUI from '../mintUI'
import ElementUI from '../elementUI'
import Es6 from '../es6'
import DemoHome from '../home'
import Aaa from '../aaa'
import Style from '../style'
import Eventdom from '../eventdom'
import TodoList from '../todolist'
import Storage from '../storage'

const baseRoomTitle = '磊'

export default [
  {
    path: '/demo',
    name: 'DemoHome',
    component: DemoHome,
    meta: {
      title: baseRoomTitle
    },
    children: [
      {
        path: 'demo-home',
        name: 'demoHome',
        component: DemoHome,
        children: [
          {
            path: 'aaa',
            name: 'aaa',
            component: Aaa
          }
        ]
      },
      {
        path: 'style',
        name: 'style',
        component: Style
      },
      {
        path: 'eventdom',
        name: 'eventdom',
        component: Eventdom
      },
      {
        path: 'todolist',
        name: 'todolist',
        component: TodoList
      },
      {
        path: 'storage',
        name: 'storage',
        component: Storage
      },
      {
        path: 'resource',
        name: 'resource',
        component: Resource
      },
      {
        path: 'axios',
        name: 'axios',
        component: Axios
      },
      {
        path: 'route',
        name: 'route',
        component: Route
      },
      {
        path: 'routeDtail/:sb',
        name: 'routeDtail',
        component: RouteDtail
      },
      {
        path: 'routeDtail2',
        name: 'routeDtail2',
        component: RouteDtail2
      },
      {
        path: 'routeRes',
        name: 'routeRes',
        component: RouteRes
      },
      {
        path: 'routePush',
        name: 'routePush',
        component: RoutePush
      },
      {
        path: 'routeSon',
        name: 'routeSon',
        component: RouteSon,
        children: [
          {
            path: 'routeSon1',
            name: 'routeSon1',
            component: RouteSon1
          },
          {
            path: 'routeSon2',
            name: 'routeSon2',
            component: RouteSon2
          }
        ]
      },
      {
        path: 'mintUI',
        name: 'mintUI',
        component: MintUI
      },
      {
        path: 'elementUI',
        name: 'elementUI',
        component: ElementUI
      },
      {
        path: 'es6',
        name: 'es6',
        component: Es6
      }
    ]
  }
]
