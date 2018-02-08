const ExtractTextPlugin = require('extract-text-webpack-plugin');
// {
//     test: /\.html$/,
//     use: {
//         loader: 'html-loader',
//     }
// },
module.exports = {
    modulePlugin: {
        rules: [{
            test: /\.(js|jsx)$/,
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
                    name: "assets/[name].[hash:5].[ext]"
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
