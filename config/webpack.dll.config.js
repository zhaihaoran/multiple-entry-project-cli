const webpack = require('webpack');
const {
    resolvePath,
    CommonChunks,
    outputDir
} = require('./setting');

const {
    ExtractTextPlugin,
    modulePlugin
} = require('./module.config')

module.exports = {
    output: {
        path: resolvePath('static/vendor'),
        filename: '[name].dll.js',
        library: "[name]"
    },
    entry: CommonChunks,
    resolve: require('./resolve.config'),
    plugins: [
        new webpack.DllPlugin({
            name: "vendor",
            path: resolvePath('static/vendor/[name]-manifest.json'),
        }),
    ],
};
