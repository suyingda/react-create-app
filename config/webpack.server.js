

const path = require('path');
const pathName = path.join(__dirname, '..');
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge');
const config = require('./webpack.base');
const webpack = require('webpack')
const HtmlwebpackPlugin = require('html-webpack-plugin');

const ServerConfig = {
    target: 'node',
    mode: 'development',
    entry: './src/server/index.js',
    output: {
        path: path.resolve(pathName, 'dist'),
        filename: 'server.js',
        publicPath: "/",
    },
    plugins: [
        //在build目录下自动生成index.html，指定其title
        new HtmlwebpackPlugin({
            filename: 'index.html',
            template: path.join(pathName, '/public/index.html'),
            chunksSortMode: 'none'
        }), //创建html打包后
        //  new BaseHrefWebpackPlugin({baseHref: '/'}),
        // 实现刷新浏览器必写
        new webpack.HotModuleReplacementPlugin(),
    ],

    externals: [nodeExternals()],
}
module.exports = merge(config, ServerConfig);