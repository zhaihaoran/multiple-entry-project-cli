const {
    resolvePath
} = require('./setting');

module.exports = {
    extensions: ['.js', '.css', '.scss', '.ts', '.ejs', '.html'],
    alias: {
        "@scss": resolvePath('src/scss'),
        "@comp": resolvePath('src/components'),
        "@image": resolvePath('src/assets/image'),
        "@lib": resolvePath('src/lib'),
        "@route": resolvePath('src/components/route'),
        "@layout": resolvePath('src/components/layout'),
        "@view": resolvePath('src/components/view'),
        "@store": resolvePath('src/components/store'),
    },
    modules: [resolvePath('node_modules'), 'node_modules'],
}
