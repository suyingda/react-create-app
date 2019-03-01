const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge');
const config = require('./webpack.base');
const nodeExternals = require('webpack-node-externals')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PurifyCSSPlugin = require('purifycss-webpack');
const devMode = process.env.NODE_ENV !== 'production'

const pathName = path.join(__dirname, '..');
const glob = require('glob');
const clientConfig = {
    // target:'web',
    // devtool: "source-map", // 生产环境也可以设置，有点儿影响性能，但方便调试"
    // mode: 'development',
    mode: 'production',
    // entry:'./src/client/index.js',
    /* entry: {
        app: ['webpack-hot-middleware/client?noInfo=true&reload=true', './src/client/index.js'],
        vendor: ['react', 'react-dom'] //提取react模块作为公共的js文件
    }, */
    entry: {
        // index: ['webpack-hot-middleware/client?noInfo=true&reload=true', path.resolve(__dirname, '../src/client/index.js')]
        app: [
            'webpack-hot-middleware/client?noInfo=true&reload=true',
            'babel-polyfill',
            path.join(__dirname, '..', '/src/client/index.js')
        ],
        // vendor: ['react', 'react-router-dom'] //提取react模块作为公共的js文件
    },
    output: {
        path: path.resolve(pathName, 'dist/'),
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
    /*   optimization: {
          splitChunks: {
              chunks: 'all'
          }
      }, */
    plugins: [
        //在build目录下自动生成index.html，指定其title
        new HtmlwebpackPlugin({
            filename: 'index.html',
            template: path.join(pathName, '/public/index.html'),
            chunksSortMode: 'none'   //无限递归子组件问题
        }), //创建html打包后
        //  new BaseHrefWebpackPlugin({baseHref: '/'}),
        // 实现刷新浏览器必写
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin([path.join(__dirname, '..', '/dist')], { allowExternal: true }),// delete dist,

        // new ExtractTextPlugin("index.css"),//默认其实目录问打包后的入口文件路径，所以需要..

        // new webpack.NoEmitOnErrorsPlugin()

        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? 'less.[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? 'less.[id].css' : '[id].[hash].css',
        }),
        // new PurifyCSSPlugin({
        //     // Give paths to parse for rules. These should be absolute!
        //     paths: glob.sync(path.join(__dirname, 'src/page/*.js')),
        //   })
    ],
 
    // externals: [nodeExternals()],
}
module.exports = merge(config, clientConfig);

