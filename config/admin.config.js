const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    resolvePath,
    adminHtml
} = require('./setting')

const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

const adminEntrys = {
    school: resolvePath('src/entry/school.js'),
    speaker: resolvePath('src/entry/speaker.js'),
    admin: resolvePath('src/entry/admin.js'),
}

const adminWebpackPlugins = []

for (let name in adminEntrys) {

    // 将 vendor_admin.dll.js 插入HTML里
    const vendorPlugins = new HtmlWebpackIncludeAssetsPlugin({
        assets: ["assets/vendor/vendor_admin.dll.js"],
        files: `${name}.html`,
        append: false
    });

    const plugins = new HtmlWebpackPlugin({
        chunks: [name],
        template: resolvePath(adminHtml),
        filename: `${name}.html`,
        favicon: resolvePath('src/assets/favicon.png'),
        inject: "body",
    })

    adminWebpackPlugins.push(plugins, vendorPlugins)
}

module.exports = {
    adminWebpackPlugins,
    adminEntrys
}
