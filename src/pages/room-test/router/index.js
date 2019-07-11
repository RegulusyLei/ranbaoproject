import Home from '../pages/home'
import Test1 from '../pages/test1'
import Test2 from '../pages/test2'
import Test3 from '../pages/test3'
import View1 from '../pages/view/view1'
import View2 from '../pages/view/view2'
import View3 from '../pages/view/view3'

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
        component: Test2,
        children: [
          {
            path: 'view1',
            name: 'View1',
            component: View1
          },
          {
            path: 'view2',
            name: 'View2',
            component: View2
          },
          {
            path: 'view3',
            name: 'View3',
            component: View3
          }
        ]
      },
      {
        path: 'test3',
        name: 'Test3',
        component: Test3
      }
    ]
  }
]
