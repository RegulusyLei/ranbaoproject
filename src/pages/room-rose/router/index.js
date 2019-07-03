import Home from '../pages/home'
import Echarts from '../pages/echarts'
import Comchat from '../pages/comchat'

export default [
  {
    path: '/rose',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'echarts',
        name: 'Echarts',
        component: Echarts
      },
      {
        path: 'comchat',
        name: 'Comchat',
        component: Comchat
      }
    ]
  }
]
