const path = require('path');
const fs = require('fs');
const {
    CommonChunks,
    HtmlDirectory,
    JsDirectory
} = require('./setting')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appDirectory = fs.realpathSync(process.cwd());
const resolvePath = relativePath => path.resolve(appDirectory, relativePath);

/**
 * 扫描入口文件
 *
 * @param {String} entryDir 入口html文件
 * @param {String} jsDir    入口js文件
 * @returns {Object} Webpack Entry
 */
function Scan(entryDir, jsDir, CommonChunks) {
    const dirs = fs.readdirSync(resolvePath(entryDir));
    const entrys = Object.assign({}, CommonChunks);
    const webpackPlugins = [];
    dirs.forEach(file => {
        const entry = file.replace(/\.(js|ts|tsx|jsx|html)$/, '');
        entrys[entry] = resolvePath(`${jsDir}${entry}.js`);
        const newPlugins = new HtmlWebpackPlugin({
            chunks: ['mainfest', ...Object.keys(CommonChunks), entry],
            template: resolvePath(`${entryDir}${entry}.html`),
            filename: `${entry}.html`,
            favicon: resolvePath('assets/favicon.png'),
            inject: "body",
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
} = Scan(HtmlDirectory, JsDirectory, CommonChunks);

module.exports = {
    resolvePath,
    entrys,
    webpackPlugins,
    CommonChunkNames: Object.keys(CommonChunks),
};
