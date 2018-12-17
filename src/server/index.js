const express = require('express');
const app = express();
const path = require('path');
const DIST_DIR = path.join(__dirname, '../..', "dist"); // 设置静态访问文件路径

const webpack = require('webpack');

const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackHotMiddleware = require('webpack-hot-middleware');
import ServerConfig from '../../config/webpack.server';
import ClientConfig from './../../config/webpack.client';
import { renderToString } from 'react-dom/server'
import React from 'react';
import { StaticRouter, Switch } from 'react-router-dom';
// import Routers from './../router';
// import { RouteWithSubRoutes, routes } from "./../router/router";
// app.use(express.static(DIST_DIR))
app.use('/dist', express.static('dist'));//将文件设置成静态


if (false) {
    app.get('*', function (req, res) {
        const App = renderToString((
            <StaticRouter location={req.path} context={{}}>
                <Switch>
                    {routes.map((route, i) => <RouteWithSubRoutes key={i} excat={route.excat}   {...route} />)}
                </Switch>
            </StaticRouter>
        ));
        res.send(
            `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Server</title>
            </head>
            <body>
                <div id="root">${App}</div>
                <script src="/dist/client.js"></script>
            </body>
            </html>`
        );
    });
}
else {
    var complier = webpack(ClientConfig);
    let devMiddleware = webpackDevMiddleware(complier, {
        publicPath: ClientConfig.output.publicPath,
        quiet: true //向控制台显示任何内容 
    })
    let hotMiddleware = webpackHotMiddleware(complier, {
        // log: false,
        hot: true,
        heartbeat: 2000,
    })
    app.use(devMiddleware)
    app.use(hotMiddleware);
    app.get("*", (req, res, next) => {
        const filename = path.join(DIST_DIR, 'index.html');
        complier.outputFileSystem.readFile(filename, (err, result) => {
            if (err) {
                return (next(err))
            }
            res.set('content-type', 'text/html')
            res.send(result)
            res.end()
        })
    })
}
app.listen(1000, function () {
    console.log("successful localhost:" + 1000)
})