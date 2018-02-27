const {
    resolvePath
} = require('./setting');

module.exports = {
    extensions: ['.js', '.css', '.scss', '.ts', '.ejs', '.html'],
    alias: {
        "@scss": resolvePath('src/scss'),
        "@comp": resolvePath('src/components'),
        "@image": resolvePath('src/assets/image'),
        "@json": resolvePath('src/assets/json'),
        "@lib": resolvePath('src/lib'),
        "@route": resolvePath('src/components/Route'),
        "@reducer": resolvePath('src/components/Reducer'),
        "@layout": resolvePath('src/components/Layout'),
        "@view": resolvePath('src/components/View'),
    },
    modules: [resolvePath('node_modules'), 'node_modules'],
}
