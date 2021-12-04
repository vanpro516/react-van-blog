const { override, addLessLoader, fixBabelImports } = require('customize-cra')

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      localIdentName: '[local]--[hash:base64:5]',
      modifyVars: {
        'primary-color': 'orange' //全局主色
      }
    }
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  })
)
