import React, { Suspense } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  RouteProps,
  Redirect,
} from "react-router-dom";
import router from "./router";
import routerRender from "./util/index";

interface Access extends RouteProps {
  access?: boolean;
}

// 因为嵌套路由需要操作子组件，待更新
const AppRouter: React.FC<Access> = () => {
  const routers = routerRender(router);
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading</div>}>
        <Switch>
          {routers.map((route, index) => {
            if (!route.redirect) {
              return (
                <Route
                  path={route.path}
                  exact={true}
                  key={index}
                  render={props => {
                    return <route.component {...props} routes={route.routes} />;
                  }}
                />
              );
            }
            if (route.redirect) {
              return <Redirect from="/*" key={index} to={route.redirect} />;
            }
            return null;
          })}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
