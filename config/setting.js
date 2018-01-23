const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolvePath = relativePath => path.resolve(appDirectory, relativePath);

console.log(process.NODE_ENV);

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
    // cdn or web root
    rootDir: process.NODE_ENV === "github" ? "https://zhaihaoran.github.io/multiple-entry-project-cli/" : "http://localhost:5000/",
    // outputDir
    outputDir: process.NODE_ENV === "github" ? "docs" : "build"

}
