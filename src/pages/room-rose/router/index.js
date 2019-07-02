import echarts from '../pages/echarts'
import comchat from '../pages/comchat'

export default [
  {
    path: '/rose',
    name: 'echarts',
    component: echarts,
    children: [
      {
        path: 'echarts',
        component: echarts
      },
      {
        path: 'comchat',
        component: comchat
      }
    ]
  }
]
