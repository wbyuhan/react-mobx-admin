
const router: Array<any> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: 'home',
    path: '/home',
    component: './Home',
    // routes: [
    //   {
    //     name: 'app',
    //     path: '/home/app',
    //     component: './Home/App',
    //   },
    // ]
  },
  {
    name: 'demo',
    path: '/demo',
    component: './Demo',
  }
]

export default router