const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolvePath = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    // 公共js模块抽取
    CommonChunks: {
        "vendor": ['jquery', 'moment'],
    },
    // 模板后缀
    tplSuffix: 'html',
    // html 入口目录
    HtmlDirectory: 'src/tpl/',
    // html js 入口目录
    JsDirectory: 'src/entry/',
    // alias
    alias: {
        "@scss": resolvePath('src/assets/scss'),
        "@image": resolvePath('src/assets/image'),
        "@json": resolvePath('src/assets/json'),
        "@lib": resolvePath('src/lib'),
    },
}
