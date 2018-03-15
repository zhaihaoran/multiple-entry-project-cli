const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolvePath = relativePath => path.resolve(appDirectory, relativePath);

console.log(process.env.NODE_ENV);

module.exports = {
    resolvePath,
    // 公共模块抽取
    CommonChunks: {
        "vendor": ['popper.js', 'bootstrap','video.js'],
    },
    // 模板后缀
    tplSuffix: 'html',
    // html 入口目录
    HtmlDirectory: 'src/view/',
    // html js 入口目录
    JsDirectory: 'src/entry/',
    // 后台 html 入口
    adminHtml: 'src/assets/admin.html',
    // cdn or not
    rootDir:  process.env.NODE_ENV === "development" ? "" : "/static/site/",
    // outputDir
    outputDir: process.env.NODE_ENV === "development" ? "docs" : "build",
    // dev
    dev: process.env.NODE_ENV === "development"

}
