import React,{ Suspense } from 'react'
import {BrowserRouter,Route, Switch, RouteProps, Redirect} from "react-router-dom";
import router from './router'
import routerRender from './util/index'

interface Access extends RouteProps {
    access?: boolean
}

const Router:React.FC<Access> = () => {
    const routers = routerRender(router)
    console.log('%c 🥪 routers: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', routers);
    return (
        <BrowserRouter basename="/">
             <Suspense fallback={<span>loading..........</span>}>
                <Switch>
                    {routers.map((r, index) => {
                        const {path, exact, component} = r;
                        const LazyCom: any = component;
                        return (
                            <Route
                                key={`${index}`}
                                exact={exact}
                                path={path}
                                render={(props) => {
                                        return <LazyCom {...props} />
                                    }
                                }
                            />
                        );
                        })
                    }
                    <Redirect from="/*" to="/" />
                    
                </Switch>
             </Suspense>
        </BrowserRouter>
    )
}

export default Router