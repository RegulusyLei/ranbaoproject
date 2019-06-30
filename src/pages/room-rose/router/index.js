import echarts from '../pages/echarts'

export default [
  {
    path: '/rose',
    name: 'echarts',
    component: echarts,
    children: [
      {
        path: 'echarts'
      }
    ]
  }
]
