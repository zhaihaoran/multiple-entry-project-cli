const fs = require('fs');
const {
    resolvePath,
    CommonChunks,
    HtmlDirectory,
    JsDirectory,
    tplSuffix,
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
function Scan(htmlDir, jsDir, CommonChunks, tplSuffix) {
    const dirs = fs.readdirSync(resolvePath(htmlDir));
    const entrys = Object.assign({}, CommonChunks);
    const webpackPlugins = [];
    // commonchunks
    const vendorPluginsAssets = Object.keys(CommonChunks).map(v => `assets/vendor/${v}.dll.js`)
    dirs.forEach(file => {
        // 去除模板后缀
        const entry = file.replace(/\.(tpl|html|ejs)$/, '');
        entrys[entry] = resolvePath(`${jsDir}${entry}.js`);

        // 将 vendor.dll.js 插入HTML里
        const vendorPlugins = new HtmlWebpackIncludeAssetsPlugin({
            assets: ["assets/vendor/jquery.min.js", ...vendorPluginsAssets],
            files: `${entry}.html`,
            append: false
        });

        const newPlugins = new HtmlWebpackPlugin({
            chunks: [entry],
            template: resolvePath(`${htmlDir}${entry}.${tplSuffix}`),
            filename: `${entry}.html`,
            favicon: resolvePath('src/assets/favicon.png'),
            inject: "body",
            // minify: {
            //     collapseWhitespace: true, // 是否去除空格
            //     removeComments: true // 是否去掉注释
            // },
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
} = Scan(HtmlDirectory, JsDirectory, CommonChunks, tplSuffix);

module.exports = {
    resolvePath,
    entrys,
    webpackPlugins,
    CommonChunkNames: Object.keys(CommonChunks),
};
