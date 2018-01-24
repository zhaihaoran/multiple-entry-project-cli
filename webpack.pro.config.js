const {
    resolvePath,
    entrys,
    webpackPlugins,
    CommonChunkNames
} = require('./config/config')
const {
    alias,
    rootDir,
    outputDir
} = require('./config/setting')
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 并行打包
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const {
    BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(env) {
    return {
        devtool: 'cheap-module-source-map',
        entry: entrys,
        output: {
            filename: 'js/[name].[chunkhash:5].js',
            path: resolvePath(outputDir),
            library: '[name]',
            publicPath: rootDir
            // 处理静态图片需要用 网站根目录 同时可以配置cdn路径
            // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
        },
        //将外部变量或者模块加载进来
        // externals: {
        //     'jquery': 'window.jQuery'
        // },
        // devServer: {
        //     contentBase: resolvePath('build'),
        //     compress: true,
        //     port: 9000
        // },
        resolve: require('./config/resolve.config'),
        module: require('./config/module.config'),
        plugins: [
            // build之前需要清除的目录
            new CleanWebpackPlugin([resolvePath(outputDir)]),
            new webpack.optimize.CommonsChunkPlugin({
                // 最后多出一个mainfest 是webpack包的js文件合集
                names: [...CommonChunkNames, 'mainfest'],
                minChunks: 2
            }),
            // 并行打包
            new UglifyJSPlugin({
                parallel: true
            }),
            // css code-split
            new ExtractTextPlugin({
                filename: '[name]_[chunkhash:5].css',
                disable: false,
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
