const path = require('path')
const {
    override,
    fixBabelImports,
    addLessLoader,
    addWebpackAlias,
    addDecoratorsLegacy
} = require('customize-cra')

const rewiredMap = () => config => {
    config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false
    return config
}

module.exports = override(

    // 按需加载
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),

    // 自定义主题
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            // 主题色
            '@primary-color': '#6EBCA2',
            // input
            '@input-border-color': '#eaeaea',
            '@input-hover-border-color': '#eaeaea'
        }
    }),

    // 目录别名
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
        'components': path.resolve(__dirname, 'src/components'),
        'utils': path.resolve(__dirname, 'src/utils'),
        'views': path.resolve(__dirname, 'src/views'),
        'api': path.resolve(__dirname, 'src/api'),
        'store': path.resolve(__dirname, 'src/store'),
        'styles': path.resolve(__dirname, 'src/styles'),
        'static': path.resolve(__dirname, 'src/static')
    }),

    rewiredMap(),
    //ES7 装饰器
    addDecoratorsLegacy()
)
