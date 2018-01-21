const webpack = require('webpack');
const {
    resolvePath,
    CommonChunks
} = require('./setting');

module.exports = {
    output: {
        path: resolvePath('build'),
        filename: 'js/[name].[chunkhash:5].js',
        library: '[name]_[chunkhash:5]',
    },
    entry: {
        vendor: CommonChunks.vendor,
    },
    plugins: [
        new webpack.DllPlugin({
            path: resolvePath('build/manifest.json'),
            name: '[name]_[chunkhash:5]',
            context: resolvePath('build'),
        }),
    ],
};
