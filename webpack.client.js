const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge');
const config = require('./config//webpack.base');
const nodeExternals = require('webpack-node-externals')
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');

const pathName = path.join(__dirname, '..');

const clientConfig = {
    mode: 'development',
    entry: ['webpack-hot-middleware/client?noInfo=true&reload=true', './src/client/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'client.js',
        //所有资源的基础路径，而且一定是/结尾
        publicPath: "/",
        // filename: '[name].indexindex.js',
        // chunkFilename: '[name].[chunkhash:5].chunk.js',    // 添加 chunkFilenamemodule
    },
    plugins: [
        //在build目录下自动生成index.html，指定其title
        new HtmlwebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '/public/index.html'),
        }), //创建html打包后
        //  new BaseHrefWebpackPlugin({baseHref: '/'}),
        // 实现刷新浏览器必写
        new webpack.HotModuleReplacementPlugin(),


    ],

    // externals: [nodeExternals()],
}


ccc = {
    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                /*   loader: 'babel-loader',
                  options: {
                      presets: ["react", ["env", {
                          tagets: {
                              browsers: ['last 2 versions']
                          }
                      }], "stage-1"],
                  }, */
                use: [
                    {
                        // loader: 'babel-loader',
                        loader: "babel-loader", // 使用cache提升编译速度
                        options: {
                            presets: ["react", ["env", {
                                tagets: {
                                    browsers: ['last 2 versions']
                                }
                            }], "stage-0"],



                            // plugins: ["transform-runtime", "add-module-exports"]
                            // plugins: ["transform-object-rest-spread"] // ...展开符号插件安装
                        }
                    },
                ],
                exclude: [path.resolve(__dirname, 'node_modules')],
                // exclude: /node_modules/,
            },
            // 这两行是处理 react 相关的内容

            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ["env"]
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?{ "stage": 0, "optional": ["runtime"] }'
            }
        ]
    }
}
module.exports = merge(ccc, clientConfig)