const {
    resolvePath,
    entrys,
    webpackPlugins,
} = require('./config')

const {
    alias,
    rootDir,
    outputDir,
    dev
} = require('./setting')
const webpack = require('webpack');
const manifest = require('../static/vendor/vendor-manifest.json');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const {
    ExtractTextPlugin,
    modulePlugin
} = require('./module.config')

const {
    BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer');
// 并行打包
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// lodash 按需打包
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = function(env) {
    const Webpack_Plugins = [
        // dll
        new webpack.DllReferencePlugin({
            manifest
        }),
        // copy custom static assets
        new CopyWebpackPlugin([{
            from: resolvePath('static'),
            to: resolvePath(`${outputDir}/static`),
            ignore: ['.*']
        }]),
        // auto fouce the defined plugins
        // 当有未赋值的变量时，默认从对应的module里加载
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        // 模块热替换插件
        // new webpack.HotModuleReplacementPlugin(),
        // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        // css code-split
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            disable: false,
            allChunks: true,
        }),
        // new BundleAnalyzerPlugin({
        //     analyzerMode: 'server',
        //     analyzerPort: 1234,
        //     openAnalyzer: true
        // }),
        // new LodashModuleReplacementPlugin,
        // // webpack bundle analyzer

        ...webpackPlugins,
    ];
    if (!dev) {
        let proPlugins = [
            // 并行打包
            new UglifyJSPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false
                    }
                },
                parallel: true
            }),
        ]
        Webpack_Plugins.push(...proPlugins)
    }
    return {
        devtool: dev ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',
        entry: entrys,
        output: {
            filename: 'js/[name].js',
            path: resolvePath(outputDir),
            library: '[name]',
            // 默认路径是你文件的当前路径，所以需要配到根目录下
            publicPath: dev ? "../" : "/static/site/"
        },
        resolve: require('./resolve.config'),
        module: modulePlugin,
        plugins: Webpack_Plugins
    };
};
