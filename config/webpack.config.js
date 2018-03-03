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


// 后台webpack
const {
    adminWebpackPlugins,
    adminEntrys
} = require('./admin.config')

module.exports = function(env) {
    const Webpack_Plugins = [
        // split vendor js into its own file
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     minChunks(module) {
        //         // any required modules inside node_modules are extracted to vendor
        //         return (
        //             module.resource &&
        //             /\.js$/.test(module.resource) &&
        //             module.resource.indexOf(
        //                 resolvePath('node_modules')
        //             ) === 0
        //         )
        //     }
        // }),
        // copy custom static assets
        new CopyWebpackPlugin([{
            from: resolvePath('src/assets'),
            to: resolvePath(`${outputDir}/assets`),
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
            filename: '[name].css',
            disable: false,
            allChunks: true,
        }),
        // webpack bundle analyzer
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerPort: 1234,
            openAnalyzer: true
        }),
        ...webpackPlugins,
        ...adminWebpackPlugins
    ];
    if (!dev) {
        let proPlugins = [
            // 并行打包
            new UglifyJSPlugin({
                parallel: true
            }),
        ]
        Webpack_Plugins.push(...proPlugins)
    }
    return {
        devtool: dev ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',
        entry: Object.assign(entrys, adminEntrys),
        output: {
            filename: 'js/[name].js',
            path: resolvePath(outputDir),
            library: '[name]',
        },
        resolve: require('./resolve.config'),
        module: modulePlugin,
        plugins: Webpack_Plugins
    };
};
