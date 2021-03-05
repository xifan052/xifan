const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.ts', // 指定入口文件

  // 指定打包文件所在目录
  output: {
    path: path.resolve(__dirname, 'dist'), // 指定打包文件的目录
    filename: 'bundle.js', // 打包后的文件名称
    environment: {
      arrowFunction: false,
    },
  },
  devServer: {
    // clientLogLevel: 'warning',
    // historyApiFallback: {
    //   rewrites: [
    //     { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
    //   ],
    // },
    // hot: true,
    // contentBase: false, // since we use CopyWebpackPlugin.
    // compress: true,
    // host: HOST || config.dev.host,
    port: 9522,
    // open: config.dev.autoOpenBrowser,
    // overlay: config.dev.errorOverlay
    //   ? { warnings: false, errors: true }
    //   : false,
    // publicPath: config.dev.assetsPublicPath,
    // proxy: config.dev.proxyTable,
    // quiet: true, // necessary for FriendlyErrorsPlugin
    // watchOptions: {
    //   poll: config.dev.poll,
    // }
  },
  // 指定webpack打包时要使用的模块
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            // 配置babel
            loader: 'babel-loader', // 指定加载器
            options: {
              // 设置babel
              presets: [
                // 设置预定义的环境
                [
                  '@babel/preset-env', // 指定环境的插件
                  {
                    // 配置信息
                    targets: {
                      // 指定兼容的浏览器版本
                      chrome: '58',
                      ie: '8',
                    },
                    corejs: '3', // 指定corejs版本
                    useBuiltIns: 'usage', // 使用corejs的方式 usage：表示按需加载
                  },
                ],
              ],
            },
          },
          'ts-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // title: '标题',
      template: './src/index.html',
    }),
  ],
  // 设置引用模块
  resolve: {
    extensions: ['.ts', '.js'], // 指定ts和js文件都可以作为模块引入
  },
}
