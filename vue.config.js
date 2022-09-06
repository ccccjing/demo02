module.exports = {
  devServer: {
    port: '',
    open: false,
    before: require('./mock/mock-server.js')
  },
  publicPath: "./",
  outputDir: 'dist',
  assetsDir: 'static',
}