const {
    resolvePath,
    entrys,
    webpackPlugins,
    CommonChunkNames
} = require('./config')
const {
    alias,
    rootDir,
    outputDir
} = require('./setting')
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const {
    BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(env) {
    return {
        // devtool: 'cheap-module-eval-source-map',
        entry: entrys,
        output: {
            filename: 'js/[name].js',
            path: resolvePath('build'),
            library: '[name]',
        },
        // devServer: {
        //     contentBase: resolvePath('build'),
        //     compress: true,
        //     port: 9000
        // },
        resolve: {
            extensions: ['.js', '.css', '.scss', '.ts', '.ejs', '.html'],
            alias: alias,
            modules: [resolvePath('node_modules'), 'node_modules'],
        },
        module: {
            rules: [{
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                },
                exclude: /node_moudles/
            }, {
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
                        name: "img/[name].[hash:5].[ext]"
                    }
                }, {
                    // 图片压缩
                    loader: 'image-webpack-loader',
                    options: {
                        optipng: {
                            optimizationLevel: 7,
                        }
                    }
                }]
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
                                path: 'postcss.config.js'
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
                names: [...CommonChunkNames, "manifest"],
                // 重复多少次以上进行抽取
                minChunks: 2
            }),

            // // webpack bundle analyzer
            // new BundleAnalyzerPlugin({
            //     analyzerMode: 'server',
            //     analyzerPort: 1234,
            //     openAnalyzer: true
            // }),
            // css code-split
            new ExtractTextPlugin({
                filename: '[name].css',
                disable: true,
                allChunks: true,
            }),
            ...webpackPlugins,
            // 定义标识符，当遇到指定标识符的时候，自动加载模块。
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                'window.$': 'jquery',
                moment: 'moment'
            }),
            // analyze
            new BundleAnalyzerPlugin({
                analyzerMode: 'server',
                analyzerPort: 1234,
                openAnalyzer: true
            }),
            // DllReferencePlugin
            // new webpack.DllReferencePlugin({
            //     context: __dirname,
            //     manifest: resolvePath('build/manifest.json'),
            // })
        ]
    };
};
