const router:Array<any> = [
      {
        path: '/',
        redirect: '/app',
      },
      {
        name: 'app',
        path: '/app',
        icon: 'UserOutlined',
        component: './App',
        access: true,
        routes:[
          {
            path: '/demand',
            redirect: '/demand/underway',
          },
        ]
      }
]

export default router