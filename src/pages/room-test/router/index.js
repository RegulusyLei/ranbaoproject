import Home from '../pages/home'
import Test1 from '../pages/test1'
import Test2 from '../pages/test2'

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
      },
      {
        path: 'test2',
        name: 'Test2',
        component: Test2
      }
    ]
  }
]
