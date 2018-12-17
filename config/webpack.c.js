const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const pathName = path.join(__dirname, '..');
const config = require('./webpack.base')
const merge = require('webpack-merge');
//定义了一些文件夹的路径
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, './src/client/index.js');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

const clientConfig = {
    // mode: 'development',
    mode: 'production',
    //实现刷新浏览器webpack-hot-middleware/client?noInfo=true&reload=true 是必填的
    entry: ['webpack-hot-middleware/client?noInfo=true&reload=true', './src/client/index.js'],
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: path.resolve(pathName, 'dist'),
        filename: 'bundle.js'//将app文件夹中的两个js文件合并成build目录下的bundle.js文件
    },
    //添加我们的插件 会自动生成一个html文件
    plugins: [
        //在build目录下自动生成index.html，指定其title
        new HtmlwebpackPlugin({
            filename: 'index.html',
            template: path.join(pathName, '/public/index.html'),
            // minify  : true,
            /*   minify: { //压缩HTML文件
                  removeComments: true,  //移除HTML中的注释
                  collapseWhitespace: true  //删除空白符与换行符
              }, */
            // chunksSortMode: 'none'
        }), //创建html打包后
        // 实现刷新浏览器必写
        new webpack.HotModuleReplacementPlugin(),
    ],

};
module.exports = merge(config, clientConfig)