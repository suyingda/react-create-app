const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge');
const config = require('./webpack.base');
const nodeExternals = require('webpack-node-externals')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const HtmlwebpackPlugin = require('html-webpack-plugin');
const pathName = path.join(__dirname, '..');
const clientConfig = {
    // target:'web',
    devtool: "source-map", // 生产环境也可以设置，有点儿影响性能，但方便调试"
    mode: 'development',
    // entry:'./src/client/index.js',
    /* entry: {
        app: ['webpack-hot-middleware/client?noInfo=true&reload=true', './src/client/index.js'],
        vendor: ['react', 'react-dom'] //提取react模块作为公共的js文件
    }, */
    entry: {
        app: ['webpack-hot-middleware/client?noInfo=true&reload=true', path.join(__dirname, '..', '/src/client/index.js')],
        vendor: ['react', 'react-router-dom'] //提取react模块作为公共的js文件
    },
    output: {
        path: path.resolve(pathName, 'dist'),
        filename: '[name].client.js',
        //所有资源的基础路径，而且一定是/结尾
        publicPath: "/",
        // filename: '[name].indexindex.js',
        chunkFilename: '[name].[chunkhash:5].chunk.js',    // 添加 chunkFilenamemodule
    },
    //下方为正确用法webpack4.0
    /*     optimization: {
            minimize: true,
            minimizer: [new UglifyJsPlugin({
                include: /\node_modules\$/
            })]
        }, */
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
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

    // externals: [nodeExternals()],
}
module.exports = merge(config, clientConfig);


/*
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')
// 订阅事件，当 event.action === 'reload' 时执行页面刷新
// 还记得 dev-server.js中 派发的reload事件吧
hotClient.subscribe(function (event) {
if (event.action === 'reload') {
window.location.reload()
}
}) */