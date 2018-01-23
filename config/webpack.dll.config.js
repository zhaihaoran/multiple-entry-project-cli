const webpack = require('webpack');
const {
    resolvePath,
    CommonChunks
} = require('./setting');

module.exports = {
    output: {
        filename: 'js/[name].js',
        path: resolvePath('build'),
        library: '[name]',
    },
    entry: CommonChunks,
    plugins: [
        new webpack.DllPlugin({
            path: resolvePath('build/manifest.json'),
            name: '[name]',
            context: __dirname,
        }),
        new webpack.ProgressPlugin()
    ],
};
