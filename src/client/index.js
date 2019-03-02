import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Link } from 'react-router-dom';
import { RouteWithSubRoutes, routes, newRouter } from "../router/router";
 
/**
 * redux
 */
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import reducers from "./../module/collect";
const store = createStore(reducers, applyMiddleware(thunk));
 
// import Routers from './../router'
const App = (val) => {
    return function(){
        return (
            <Provider store={store}>
                <div>   
                    <BrowserRouter>
                        <div>
                            <Switch>
                                {val.routes.map((route, i) => <val.RouteWithSubRoutes key={i} excat={route.excat}   {...route} />)}
                            </Switch>
                        </div>
                    </BrowserRouter>
                </div>
            </Provider>
        )
    }
   
}
 
const AppComponent = (CreateApp) => {
    // ReactDOM.hydrate(
    ReactDOM.render(
        <CreateApp />, document.getElementById('root')
    );
}
AppComponent(App({RouteWithSubRoutes, routes, newRouter}));

if (module.hot) {
    console.log('进入')
    module.hot.accept('../router/router', function () {
        console.log('更新了');
        AppComponent(App(require("../router/router")));
    })
} else {
    console.log('未更新')
}

