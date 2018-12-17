const path = require('path');
module.exports = {
    
    module: {
        rules: [
            {
                test: /\.js?$/,
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
                // exclude: [path.resolve(path.join(__dirname, '..'), 'node_modules')],
                // exclude: /node_modules/,
            },
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: "babel-loader", // 使用cache提升编译速度
                    },
                ],
                // exclude: [path.resolve(path.join(__dirname, '..'), 'node_modules')],
                // exclude: /node_modules/,

            },
            /*       {
                      test: /\.js\/*\.js$/,
                      use: {
                          loader: "babel-loader?cacheDirectory=true", // 使用cache提升编译速度
                          options: {
                              presets: ["env"],
                              plugins: ["transform-runtime"]// 避免重复引入
                          }
                      },
                      exclude: /node-modules/
                  },
                  {
                      test: /\.js$/,
                      exclude: /(node_modules)/,
                      use: [{
                        loader: 'babel-loader',
                        //如果有这个设置则不用在添加.babelrc
                        options: {
                          presets: [['es2015', {modules: false}]],
                          plugins: ['syntax-dynamic-import']
                        }
                      }]
                    } */
        ],

    }
}