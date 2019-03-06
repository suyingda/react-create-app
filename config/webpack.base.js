const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin'); //抛弃 wb4
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = (process.env.NODE_ENV !== 'production');


// console.log(devMode,'devModedevModedevModedevMode')
// const extractLess = new ExtractTextPlugin({
//     filename: "[name].[contenthash].css",
//     disable: process.env.NODE_ENV === "development"
// });
module.exports = {
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: [
                    {
                        // loader: 'babel-loader',
                        loader: "babel-loader?cacheDirectory=true", // 使用cache提升编译速度
                        /*  options: {
                             presets: ["react", ["env", {
                                 tagets: {
                                     browsers: ['last 2 versions']
                                 }
                             }], "stage-0"],
                             // plugins: ["transform-runtime", "add-module-exports"]
                             // plugins: ["transform-object-rest-spread"] // ...展开符号插件安装
                         } */
                        /*    options:{
                               presets:[
                                   ['env',{modules:false}]
                               ]
                           }
   */
                    },

                ],
                // include: path.resolve('./../src'),
                exclude: /node_modules/
                // exclude: [path.resolve(path.join(__dirname, '..'), 'node_modules/')],
                // exclude: /node_modules/,
            },
            {
                test: /\.(sa|sc|c|le)ss$/,
                exclude: [path.resolve(path.join(__dirname, '..'), 'node_modules/')],
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[path]-[name]-[local]-[hash:base64:6]',
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                            plugins: (loader) => [
                                require('postcss-import')({ root: loader.resourcePath }),
                                require('autoprefixer')(), //CSS浏览器兼容
                                // require('cssnano')()  //压缩css
                            ]
                        }
                    },
                    'less-loader'
                ],
                // exclude: [path.resolve(path.join(__dirname, '..'), 'node_modules/')],
            }, 
           /*  {
                test: /\.(pan|jpg|gif|svg|bmp|eot|woff|woff2|ttf)/,
                loader: {
                    loader: 'url-loader',
                    options: {
                        limit: 5 * 1024,
                        //指定拷贝文件的输出目录
                        outputPath: 'images/'
                    }
                }
            } */


        ],

    }
}