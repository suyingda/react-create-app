const express = require('express');
const app = express();
const path = require('path');
const DIST_DIR = path.join(__dirname, '../..', "dist"); // 设置静态访问文件路径

const webpack = require('webpack');

const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackHotMiddleware = require('webpack-hot-middleware');

import ClientConfig from './../../config/webpack.client';
import { renderToString } from 'react-dom/server'
import React from 'react';
// import { StaticRouter, Switch } from 'react-router-dom';
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
        // stats: {
        //     assets: true,
        //     children: false,
        //     modules: false,
        //     colors: true
        // }
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
        // var host = req.headers.host, ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        // console.log("client ip:" + ip + ", host:" + host);
    })
}
const { configHttpProxy } = require('./Api/config');
for (let proxyConfigkey in configHttpProxy) {
    try {
        if (configHttpProxy) {
            app.all(proxyConfigkey, configHttpProxy[proxyConfigkey]);
        }
    } catch (v) {
        console.log('代理bug')
    }
}
import httpProxy from "http-proxy";
const proxy = httpProxy.createProxyServer({});
proxy.on("error", () => {
    console.log("Could not connect to proxy, please try again...server");
});
// app.all('/admin/*', (req, res) => {
//     proxy.web(req, res, {
//         target: 'http://172.253.32.131:9192/',
//     })
// });

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = " 0 ";
app.listen(1000, function () {
    console.log("successful localhost:" + 1000)
})














/* const options = {
    // target: 'http://172.254.68.158:8081',
    target: proxyConfig.target,
    changeOrigin: true,
    //   pathRewrite: {
    //       "^/market": "/market"
    //   }

}
console.log(options.target,'切换了')
app.use('/project/*', proxy(options)); */
//这句话的意思就是说，凡是你的ajax请求里面带api的 就还会自动帮你向http://172.253.32.131:9106这里进行数据请求
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
