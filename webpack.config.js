const {
    resolvePath,
    entrys,
    webpackPlugins,
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
            alias: {
                "@scss": resolvePath('assets/scss'),
                "@image": resolvePath('assets/image'),
                "@json": resolvePath('assets/json'),
                "@js": resolvePath('js'),
            },
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
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
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
                analyzerPort: 8888,
                openAnalyzer: true
            }),
            // new webpack.optimize.UglifyJsPlugin(),
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
