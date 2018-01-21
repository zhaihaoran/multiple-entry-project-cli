const webpack = require('webpack');
const {
    resolvePath,
    CommonChunks
} = require('./setting');

module.exports = {
    output: {
        path: resolvePath('build'),
        filename: 'js/[name].js',
        library: '[name]',
    },
    entry: {
        vendor: CommonChunks.vendor,
    },
    plugins: [
        new webpack.DllPlugin({
            path: resolvePath('build/manifest.json'),
            name: '[name]',
            context: resolvePath('build'),
        }),
    ],
};
