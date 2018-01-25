const {
    resolvePath,
    entrys,
    webpackPlugins,
    CommonChunkNames
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

module.exports = function(env) {
    const Webpack_Plugins = [
        // DllReferencePlugin
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: resolvePath('src/assets/vendor/vendor-manifest.json')
        }),
        // copy custom static assets
        new CopyWebpackPlugin([{
            from: resolvePath('src/assets'),
            to: resolvePath(`${outputDir}/assets`),
            ignore: ['.*']
        }]),
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
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
            moment: 'moment'
        })
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
        entry: entrys,
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
