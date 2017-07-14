var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'


module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction,
  }),
  // 可以加载视频连接
  transformToRequire: {
    video: 'src',
    source: 'src'
  }
}
