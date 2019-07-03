import Home from '../pages/home'
import Test1 from '../pages/test1'

export default [
  {
    path: '/test',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'test1',
        name: 'Test1',
        component: Test1
      }
    ]
  }
]
