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









// httpProxy.on('error', function (err, req, res) {
//     res.writeHead(500, {
//         'Content-Type': 'text/plain'
//     });

//     res.end('Something went wrong. And we are reporting a custom error message.');
// });

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
       
       var proxy = require('http-proxy').createProxyServer({});

        var host = req.headers.host, ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log("client ip:" + ip + ", host:" + host);
        proxy.web(req, res, { target: 'http://172.253.32.131:9106' });
      /*   switch (host) {
            case 'www.111.cn':
                proxy.web(req, res, { target: 'http://localhost:3000' });
                break;
            case 'localhost:3000':
                proxy.web(req, res, { target: 'http://172.253.32.131:9106' });
              
                break;
            default:
            
                proxy.web(req, res, { target: 'http://172.253.32.131:9106' });
            // res.writeHead(200, {
            //     'Content-Type': 'text/plain'
            // });
    
            // res.end('Welcome to my server!');
        } */
    })
   
}
// app.listen(1000, function () {
//     console.log("successful localhost:" + 1000)
// })
// var http = require('http'), httpProxy = require('http-proxy');

// 新建一个代理 Proxy Server 对象  
// var proxy = httpProxy.createProxyServer({});

// // 捕获异常  
// proxy.on('error', function (err, req, res) {
//     res.writeHead(500, {
//         'Content-Type': 'text/plain'
//     });
//     res.end('Something went wrong. And we are reporting a custom error message.');
// });

// 在每次请求中，调用 proxy.web(req, res config) 方法进行请求分发  
// var server = require('http').createServer(function (req, res) {
// app.get("*", (req, res, next) => {
//     // 在这里可以自定义你的路由分发  
  
// });
// http://172.253.32.131:9106/project/projectApi/statusList
 
app.listen(3000, function () {
    console.log("successful localhost:" + 3000)
})