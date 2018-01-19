const {
    resolvePath,
    entrys,
    webpackPlugins,
    alias,
    CommonChunkNames
} = require('./config/config')
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const {
    BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(env) {
    return {
        // 开发环境下 cheap-module-eval-source-map
        // 生产环节 cheap-module-source-map
        devtool: 'cheap-module-source-map',
        entry: entrys,
        output: {
            filename: 'js/[name].[chunkhash:5].js',
            path: resolvePath('build')
        },
        devServer: {
            contentBase: resolvePath('build'),
            compress: true,
            port: 9000
        },
        resolve: {
            extensions: ['.js', '.css', '.scss', '.ts'],
            alias: alias,
            modules: [resolvePath('node_modules'), 'node_modules'],
        },
        module: {
            rules: [{
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader',
                },
                exclude: /node_moudles/
            }, {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_moudles/
            }, {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 4096
                    }
                }
            }, {
                test: /\.(scss|css)$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            // css module
                            modules: false,
                            importLoaders: 1,
                            localIdentName: '[local]_[hash:base64:5]',
                            sourceMap: true,
                        },
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
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                // 最后多出一个mainfest 是webpack包的js文件合集
                names: [...CommonChunkNames, "mainfest"],
            }),
            // webpack bundle analyzer
            new BundleAnalyzerPlugin({
                analyzerMode: 'server',
                analyzerPort: 1234,
                openAnalyzer: true
            }),
            new webpack.optimize.UglifyJsPlugin(),
            // css code-split
            new ExtractTextPlugin({
                filename: 'css/[name].css',
                disable: false,
                allChunks: true,
            }),
            ...webpackPlugins,
            new CleanWebpackPlugin(),
            // 定义标识符，当遇到指定标识符的时候，自动加载模块。
            new webpack.ProvidePlugin({
                $: 'jquery',
                moment: 'moment'
            })
        ]
    };
};
