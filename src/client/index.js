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
const App = () => {
    return (
        <Provider store={store}>
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            {routes.map((route, i) => <RouteWithSubRoutes key={i} excat={route.excat}   {...route} />)}
                        </Switch>
                    </div>
                </BrowserRouter>

            </div>
        </Provider>
    )
}
const AppComponent = (CreateApp) => {
    ReactDOM.hydrate(
        <CreateApp suppressHydrationWarning={true} />, document.getElementById('root')
    );
}
AppComponent(App);




