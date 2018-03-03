const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    modulePlugin: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: {
                loader: 'babel-loader',
            },
            exclude: /node_moudles/
        }, {
            test: /\.vue$/,
            use: {
                loader: 'vue-loader',
            },
            exclude: /node_moudles/
        }, {
            test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
            use: {
                loader: 'url-loader',
            },
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 4096,
                    name: "assets/[name].[hash:5].[ext]"
                }
            }]
        }, {
            test: /\.(scss|css)$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                }, {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        config: {
                            path: 'postcss.config.js' // 这个得在项目根目录创建此文件
                        }
                    },
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    },
                }, ],
                fallback: 'style-loader',
            }),
        }]
    },
    ExtractTextPlugin: ExtractTextPlugin
}
