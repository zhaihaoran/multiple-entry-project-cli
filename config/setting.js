const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolvePath = relativePath => path.resolve(appDirectory, relativePath);

console.log(process.env.NODE_ENV);

module.exports = {
    resolvePath,
    // 公共js模块抽取
    CommonChunks: {
        "vendor": ['jquery', 'materialize-css'],
    },
    // 模板后缀
    tplSuffix: 'ejs',
    // html 入口目录
    HtmlDirectory: 'src/view/',
    // html js 入口目录
    JsDirectory: 'src/entry/',
    // alias
    alias: {
        "@scss": resolvePath('src/assets/scss'),
        "@image": resolvePath('src/assets/image'),
        "@json": resolvePath('src/assets/json'),
        "@lib": resolvePath('src/lib'),
    },
    // cdn or not
    rootDir: "",
    // outputDir
    outputDir: "docs",
    // dev
    dev: process.env.NODE_ENV === "development"

}
