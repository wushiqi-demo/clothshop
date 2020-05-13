const autoprefixer = require('autoprefixer');
const pxtoviewport = require('postcss-px-to-viewport');
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'common': '@/common',
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            unitToConvert: 'px',
            viewportWidth: 375,
            unitPrecision: 5,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: undefined,
            include: undefined,
            landscape: false,
            landscapeUnit: 'vw',
            landscapeWidth: 568
        
          })
        ]
      }
    }
  }
}