const { defineConfig } = require('@vue/cli-service')
const px2rem = require("postcss-px2rem");

// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 80,
});
module.exports = {
    // 公共路径
    publicPath: './',
    outputDir: './../flask-dist',
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // 服务器端口号
    devServer: {
        port: 7001,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:5000', //后端运行端口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/api': ''
                }
            }
        }
    }
}
