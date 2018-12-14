module.exports = {
  outputDir: process.env.outputDir,
  assetsDir: "static",
  lintOnSave:false,
  devServer: {
    host: "localhost",
    port: 8082, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // proxy: process.env.API_ROOT // 配置跨域处理,只有一个代理
    // 配置接口代理,如果只有一个接口，就 "/"
    // 如果多个接口，接口后 "/aa,/bb"
    proxy: {
      '/mock': {
        target: process.env.API_ROOT,
        ws: false,
        changeOrigin: true
      }
    }
  }
}
