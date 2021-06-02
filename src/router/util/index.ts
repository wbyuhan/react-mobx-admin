import { lazy } from 'react'

let componentRoutes: any = []
const routerRender = (router) => {
    reseveRout(router)
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

function reseveRout (router) {
    const redirect = router.filter(item => item.redirect)[0];
    const delIndex = router.findIndex(item => item?.redirect && item?.redirect === redirect.redirect);
    const list =router.splice(delIndex,1)[0]
    router.push(list)
    if(router.routes){
        reseveRout(router.routes)
    }
}


export default routerRender