// vue.config.js
// 内置路径包
const path = require("path");

// 定义resolve方法，获取绝对路径
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  // publicPath: process.env.NODE_ENV === "production" ? "../../" : "/",
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  outputDir: "dist",
  assetsDir: "static",
  indexPath: 'index.html',

  chainWebpack: config => {
    // svg rule loader
    // const svgRule = config.module.rule('svg') // 找到svg-loader
    // svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
    // svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
    // svgRule
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]',
    //     include: ['@/assets/svg']
    //   });
    // 配置svg默认规则排除icons目录中svg文件处理
    config.module
      .rule("svg")
      .exclude.add(resolve("src/assets/svg"))
      .end();

    // 新增icons规则，设置svg-sprite-loader处理icons目录中svg文件
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/svg"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ symbolId: "icon-[name]" })
      .end();

    config.plugin('html').tap(args => {
      args[0].title = '六合彩_MarkSix';
      return args;
    })
  },

  devServer: {
    proxy: {
      '/api': {
        target: 'https://1680660.com',
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
