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

// console.log(module.hot,' module.hot module.hot module.hot module.hot')
const AppComponent = (CreateApp) => {
    // ReactDOM.hydrate(
    ReactDOM.render(
        <CreateApp />, document.getElementById('root')
    );
}
AppComponent(App);


