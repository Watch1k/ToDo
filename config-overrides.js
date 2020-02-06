const {
  override,
  fixBabelImports,
  addBundleVisualizer,
} = require('customize-cra')
const path = require('path')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  function(config) {
    const alias = config.resolve.alias || {}
    alias['@ant-design/icons/lib/dist$'] = path.resolve(
      __dirname,
      './src/icons.ts'
    )
    config.resolve.alias = alias
    return config
  },
  config =>
    process.env.BUNDLE_VISUALIZE === 1
      ? addBundleVisualizer({
          analyzerMode: 'static',
          reportFilename: 'report.html',
        })
      : config
)
