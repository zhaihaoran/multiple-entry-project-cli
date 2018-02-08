const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    resolvePath,
    adminHtml
} = require('./setting')

const adminEntrys = {
    school: resolvePath('src/entry/school.js'),
    speaker: resolvePath('src/entry/speaker.js'),
    admin: resolvePath('src/entry/admin.js'),
}

const adminWebpackPlugins = []

for (let name in adminEntrys) {

    const plugins = new HtmlWebpackPlugin({
        chunks: [name],
        template: resolvePath(adminHtml),
        filename: `${name}.html`,
        favicon: resolvePath('src/assets/favicon.png'),
        inject: "body",
    })

    adminWebpackPlugins.push(plugins)
}

module.exports = {
    adminWebpackPlugins,
    adminEntrys
}
