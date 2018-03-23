const fs = require('fs');
const {
    resolvePath,
    HtmlDirectory,
    JsDirectory,
    tplSuffix,
    rootDir
} = require('./setting')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

/**
 * 扫描入口文件
 *
 * @param {String} htmlDir 入口html文件
 * @param {String} jsDir    入口js文件
 * @returns {Object} Webpack Entry
 */
function Scan(htmlDir, jsDir, tplSuffix) {
    const dirs = fs.readdirSync(resolvePath(htmlDir));
    const entrys = {};
    const webpackPlugins = [];
    dirs.forEach(file => {
        // 去除模板后缀
        const entry = file.replace(/\.(tpl|html|ejs)$/, '');

        // 如果404 则不加vendor
        const assets = entry.indexOf('404') > -1 ? [] : ["static/vendor/jquery.min.js", "static/vendor/vendor.dll.js"];
        // 如果404 则不加chunks
        const chunks = entry.indexOf('404') > -1 ? [] : [entry]
        entrys[entry] = resolvePath(`${jsDir}${entry}.js`);

        // 将 vendor.dll.js 插入HTML里
        const vendorPlugins = new HtmlWebpackIncludeAssetsPlugin({
            assets,
            files: `html/${entry}.html`,
            append: false
        });

        const newPlugins = new HtmlWebpackPlugin({
            chunks,
            template: resolvePath(`${htmlDir}${entry}.${tplSuffix}`),
            filename: `html/${entry}.html`,
            favicon: resolvePath('static/favicon.png'),
            inject: "body",
            publicPath: rootDir,
            minify: {
                removeComments: true // 是否去掉注释
            },
        });
        webpackPlugins.push(newPlugins, vendorPlugins);
    });
    return {
        entrys,
        webpackPlugins
    };
}

const {
    entrys,
    webpackPlugins
} = Scan(HtmlDirectory, JsDirectory, tplSuffix);

module.exports = {
    resolvePath,
    entrys,
    webpackPlugins,
};
