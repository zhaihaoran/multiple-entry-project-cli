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
            path: resolvePath('build'),
            library: '[name]',
            // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
        },
        //将外部变量或者模块加载进来
        // externals: {
        //     'jquery': 'window.jQuery'
        // },
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
            // dll ???
            new webpack.DllPlugin({
                // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与参数output.library保持一致
                name: '[name]',
                // 本Dll文件中各模块的索引，供DllReferencePlugin读取使用
                path: 'manifest.json',
                // 指定一个路径作为上下文环境，需要与DllReferencePlugin的context参数保持一致，建议统一设置为项目根目录
                context: resolvePath('build'),
            }),
            // DllReferencePlugin
            new webpack.DllReferencePlugin({
                context: resolvePath('build'),
                manifest: require('./manifest.json')
            }),
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
            // build之前需要清除的目录
            new CleanWebpackPlugin(["build"]),
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
