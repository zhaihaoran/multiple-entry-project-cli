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
        path: resolvePath('src/assets/vendor'),
        filename: '[name].dll.js',
        library: "[name]"
    },
    entry: CommonChunks,
    resolve: require('./resolve.config'),
    plugins: [
        new webpack.DllPlugin({
            name: "[name]",
            path: resolvePath('src/assets/vendor/[name]-manifest.json'),
        }),
    ],
};
