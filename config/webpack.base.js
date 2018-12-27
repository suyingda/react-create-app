const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin')
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
                    },
                ],
                exclude: [path.resolve(path.join(__dirname, '..'), 'node_modules/')],
                // exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[path]-[name]-[local]-[hash:base64:6]',
                        }

                    }, {
                        loader: 'postcss-loader',
                        options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                            plugins: (loader) => [
                                require('postcss-import')({ root: loader.resourcePath }),
                                require('autoprefixer')(), //CSS浏览器兼容
                                // require('cssnano')()  //压缩css
                            ]
                        }
                    }]
                }),
                exclude: [path.resolve(path.join(__dirname, '..'), 'node_modules/')],
            },
        ],

    }
}