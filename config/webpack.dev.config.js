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
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const {
    ExtractTextPlugin,
    modulePlugin
} = require('./module.config')

const {
    BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer');

module.exports = function(env) {
    return {
        // devtool: 'cheap-module-eval-source-map',
        entry: entrys,
        output: {
            filename: 'js/[name].js',
            path: resolvePath(outputDir),
            library: '[name]',
        },
        resolve: require('./resolve.config'),
        module: modulePlugin,
        plugins: [
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
        ]
    };
};
