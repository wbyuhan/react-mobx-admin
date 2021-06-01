import { lazy } from 'react'

let componentRoutes: any = []
const routerRender = (router) => {
    componentRoutes = router.map(item => {
        if(item.routes && !item.component){
            return {
                ...item,
                routes:routerRender(item.routes)
            }
        }
        if(!item.routes && item.component){
            return {
                ...item,
                component: lazy(() => import(`@/pages${item.component.replace(".","")}`))
                
            }
        }
        if(item.routes && item.component){
            return {
                ...item,
                routes:routerRender(item.routes),
                component: lazy(() => import(`@/pages${item.component.replace(".","")}`))
            }
        }
        
        return {
            ...item
        }
        
    })
    return componentRoutes
}

export default routerRender