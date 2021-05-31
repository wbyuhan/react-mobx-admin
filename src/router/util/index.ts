import { lazy } from 'react'

let routesItem
let routeComponent

const deep = () => {
    const routes:any = []
    let component
    while (routesItem && routeComponent) {
        routesItem.forEach((item: { routes: any; component: string }) => {
            routes.push({
                ...item,
                component: item.component && lazy(() => import(`@/pages${item.component.replace(".","")}`))
            })
        })
        component = lazy(() => import(`@/pages${routeComponent.replace(".","")}`))
    }
    return {
        routes,
        component
    }
}

const routerRender = (router) => {

    const component  = router.map(item => {
        
        routesItem = item.routes
        routeComponent = item?.component
        return {
            ...item,
            exact:true,
            ...deep()
            // component: 
        }
    }).filter(item => !!item.component);
    console.log('%c 🍬 component: ', 'font-size:20px;background-color: #B03734;color:#fff;', component);
    return component
    
}


export default routerRender