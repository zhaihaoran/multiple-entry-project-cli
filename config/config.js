const fs = require('fs');
const {
    resolvePath,
    CommonChunks,
    HtmlDirectory,
    JsDirectory,
    tplSuffix
} = require('./setting')
const HtmlWebpackPlugin = require('html-webpack-plugin');


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
    dirs.forEach(file => {
        // 去除模板后缀
        const entry = file.replace(/\.(tpl|html|ejs)$/, '');
        entrys[entry] = resolvePath(`${jsDir}${entry}.js`);
        const newPlugins = new HtmlWebpackPlugin({
            chunks: ['mainfest', ...Object.keys(CommonChunks), entry],
            template: resolvePath(`${htmlDir}${entry}.${tplSuffix}`),
            filename: `${entry}.html`,
            favicon: resolvePath('src/assets/favicon.png'),
            inject: "body",
            // minify 现在没有默认值了，需要指定
            minify: {
                // removeAttributeQuotes: true,  // 移除属性引号
                collapseWhitespace: true, // 是否去除空格
                removeComments: true // 是否去掉注释

            },
        });

        webpackPlugins.push(newPlugins);
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
