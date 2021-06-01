const router:Array<any> = [
      {
        path: '/',
        redirect: '/app',
      },
      {
        name: 'routes1',
        path: '/app',
        icon: 'UserOutlined',
        access: true,
        routes:[
          {
            path: '/routes2',
            redirect: '/demand/underway',
          },
          {
            name: 'demand',
            path: '/demand',
            icon: 'UserOutlined',
            component: './Demand/Undecided',
          },
          {
            name: 'test',
            path: '/test',
            icon: 'UserOutlined',
            routes:[
              {
                path: '/routes3',
                redirect: '/demand/test',
              },
              {
                name: 'routes3',
                path: '/test',
                icon: 'UserOutlined',
                component: './Demand/test',
              }
            ]
          }
        ]
      },
      {
        name: 'index',
        path: '/index',
        icon: 'UserOutlined',
        component: './Demand/index',
      },
]

export default router