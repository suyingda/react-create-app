/* import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
const H = () => {
    return <div>123</div>
}
export default (
    <div>
        <Route path='/' exact component={Home}></Route>
        <Route path='/home' exact component={H}></Route>
    </div>
) */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Base64 } from 'js-base64';
// import { Redirect } from 'react-router'
// import { Base64 } from 'js-base64';

import { ModuleReduxThunk } from './../module/collect'

import App from '../page/App'

// import A from '../page/A'
// import _Head from '../page/Head'
// import _Head1 from '../page/Header/Head1';
// import _Head2 from '../page/Header/Header2/Head2';
// import _Head3 from '../page/Header/Header2/Header3/Head3';
// import _Head4 from '../page/Header/Header2/Header3/Head4';
 
import withLoadable from './Loadable'

const A = withLoadable(() => import('../page/A'));  
const Head = withLoadable(() => import('../page/Head'));
const Head1 = withLoadable(() => import('../page/Header/Head1'));
const Head2 = withLoadable(() => import('../page/Header/Header2/Head2'));
const Head3 = withLoadable(() => import('../page/Header/Header2/header3/Head3'));
const Head4 = withLoadable(() => import('../page/Header/Header2/header3/head4'));
// const ArrayComponent = { _Head, _Head1, _Head2, _Head3, _Head4 };

/* let objectComponent = {};
for (let i in ArrayComponent) {
    objectComponent[i] = withLoadable(ArrayComponent[i]);
} */


const Not = () => <h2>Not</h2>;
export const routes = [
    {
        path: '/',
        exact: true,
        component: App,
    },
    {
        path: '/home',
        component: A,
    },
    {
        path: "/head",
        component: Head,
        children: [
            {
                path: "/head1/:id",
                component: Head1,
                children: [
                    {
                        path: "/head2",
                        component: Head2,
                        children: [
                            {
                                path: "/head3",
                                component: Head3,
                                preload: true
                            },
                            {
                                path: "/head4",
                                component: Head4,
                            }
                        ]
                    },
                ]
            }

        ]
    },
].concat(
    [{
        path: '*',
        component: Not,
    }])
const routerGo = (t, path, value, _target = undefined) => {
    let childrenPath = "";
    let params = undefined;
    if (typeof value === "string") {
        params = '/' + value;
    } else {
        params = value ? "/" + Base64.encode(JSON.stringify(value)) : "";
    }

    for (let i in t.props.routes) {
        if (t.props.routes[i].path.split('/:')[0] === path) {
            console.log('children component');
            childrenPath = t.props.match.url;
        }
    }
    if (_target) {
        return window.open(childrenPath + path + params, _target)
    } else {
        return t.props.history.push(childrenPath + path + params)
    }
}
const routerGet = (value) => {
    return JSON.parse(Base64.decode(value));
}

export const RouteWithSubRoutes = route => {
    // console.log(route)
    return <Route
        path={route.matchpath !== undefined ? route.matchpath + route.path : route.path}
        exact={route.exact}
        // render={props =>  <route.component {...props} routes={route.children}/> }
        // withLoadable(() => import('../page/Header/Header2/Head2'))
        render={props => {
            // console.log(route.component, '123')
            return <route.component {...props}
                routerGo={routerGo}
                routerGet={routerGet}
                ModuleReduxThunk={ModuleReduxThunk.ModuleCount}
                routes={route.children} />
        }
        }
    />
};
// <Route path='/' exact component={App}></Route>
// <Route path='/home' component={App}></Route>
// <Route path='/head' component={Head}></Route>
