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

    // 自定义出题
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
        'utils': path.resolve(__dirname, '@/utils'),
        'views': path.resolve(__dirname, '@/views'),
        'api': path.resolve(__dirname, '@/api'),
        'store': path.resolve(__dirname, '@/store'),
        'styles': path.resolve(__dirname, '@/styles')
    }),

    rewiredMap(),
    //ES7 装饰器
    addDecoratorsLegacy()
)
