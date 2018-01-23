const {
    resolvePath,
    entrys,
    webpackPlugins,
    alias,
    CommonChunkNames
} = require('./config')
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const {
    BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(env) {
    return {
        devtool: 'cheap-module-eval-source-map',
        entry: entrys,
        output: {
            filename: 'js/[name].js',
            path: resolvePath('build'),
            library: '[name]',
            publicPath: 'js/'
        },
        devServer: {
            contentBase: resolvePath('build'),
            compress: true,
            port: 9000
        },
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
                        gifsicle: {
                            interlaced: false,
                        },
                        optipng: {
                            optimizationLevel: 7,
                        },
                        pngquant: {
                            quality: '65-90',
                            speed: 4
                        },
                        mozjpeg: {
                            progressive: true,
                            quality: 65
                        },
                        // Specifying webp here will create a WEBP version of your JPG/PNG images
                        webp: {
                            quality: 75
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
            // DllReferencePlugin
            // new webpack.DllReferencePlugin({
            //     context: resolvePath('build'),
            //     manifest: resolvePath('build/manifest.json'),
            // }),

            new webpack.optimize.CommonsChunkPlugin({
                names: [...CommonChunkNames, "mainfest"],
            }),
            // webpack bundle analyzer
            new BundleAnalyzerPlugin({
                analyzerMode: 'server',
                analyzerPort: 1234,
                openAnalyzer: true
            }),
            // css code-split
            new ExtractTextPlugin({
                filename: 'css/[name].css',
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
            })
        ]
    };
};
