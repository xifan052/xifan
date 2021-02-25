# vue的项目优化

* [webpack优化](https://segmentfault.com/a/1190000016816813)

* ① hard-source-webpack-plugin(为模块提供中间缓存步骤)

  ```js
    /**
     * 简介
     * HardSourceWebpackPlugin是webpack的插件，为模块提供中间缓存步骤。为了查看结果，您需要使用此插件运行webpack两次：第一次构建将花费正常的时间。第二次构建将显着加快（大概提升90%的构建速度）。
     * 安装
     * 使用npm install --save-dev hard-source-webpack-plugin或安装yarn add --dev hard-source-webpack-plugin。
     * 配置
     * 在vue.config.js里面添加代码
    */
    const HardSourceWebpackPlugin = require('hard-source-webpack-plugin') // 引入包
    // 添加配置
    module.exports = {
        configureWebpack: config => {
            if (process.env.NODE_ENV !== 'production') {
                config.plugins.push(
                    new HardSourceWebpackPlugin(),
                )
            }
        }
    }
    // vue-cli 4.x 配置
    const HardSourceWebpackPlugin = require("hard-source-webpack-plugin")
    module.exports = {
        configureWebpack: {
          // 缓存dll,优化编译速度
          plugins: [new HardSourceWebpackPlugin()]
        },
    }
  
  ```

## 1.均衡页面加载文件的大小和数量

* ① 项目中小图片图片转base64，通过工具如webpack进行图片压缩，文件进行压缩混淆等

* ② 路由懒加载，异步路由

* ③ 第三方依赖按需加载，比如使用element-ui框架，但是里面的组件只用到了其中一部分，可以单独建一个引入element组件的文件，在里面引入我们项目中需要的组件，然后vue.use它

* ④ 通过webpack进行处理，有一个externals属性，可以在里面设置不需要打包的文件，比如可以设置将vue、vue-router、element-ui等等设置进去，打包的时候就不会打包他们，然后将vue、vue-router、element-ui等资源在html中引入

* ⑤ 可以借助开启gzip压缩文件，减小文件大小

* ⑥ build关闭sourceMap减小包体积

## 2.数据请求优化

* ① 减少请求数量，增加已请求的数据不再重新请求的判断

* ② 尽可能的使用前端功能完成如排序、筛选之类的功能

## 3.交互视觉提升

* ① 使用loading动画

* ② 详情-列表场景可以详情操作列表页面提前完成数据更新

* ③ 资源加载前后使用骨架屏、占位符的方式，优先加载可视区域数据

## 4.善用vue的一些属性

* ① v-if和v-show的合理使用

* ② keep-live

## 4.代码优化

* ① 提取公共组件，进行组件拆分

* ② 减少watch的数据量

* ③ 访问次数多的data属性在方法中使用变量存储

* ④ 使用频率较少的组件使用局部引入，减小verdor.js体积

* ⑤ 避免template中使用复杂的表达式，尽可能的写到methonds和computed 中

* ⑥ 可以通过[Object.freeze()](https://www.jianshu.com/p/56168a779849) 阻止Vue对这些数据添加双向数据绑定来提高一些性能

* ⑦ 避免持久化 Store 数据带来的性能问题，localstorage 写入是同步的，而且存在不小的性能开销，如果你想打造 60fps 的应用，就必须避免频繁写入持久化数据

## 使用插件

* ① 对于渲染大量数据可以使用虚拟滚动，使用第三方提供的库vue-virtual-scroller

## 参考

* [Vue 应用性能优化指南](https://juejin.im/post/5b960fcae51d450e9d645c5f)

* [vue页面性能优化方案](https://www.cnblogs.com/xsilence/p/10916845.html)
