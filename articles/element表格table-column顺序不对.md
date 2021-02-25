## 问题

封装表格时表头出现了顺序错乱的情况

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7d524a320ceb492387289e5458076dcd~tplv-k3u1fbpfcp-watermark.image)

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4af5b3512a4148b09b293a7b8e84d191~tplv-k3u1fbpfcp-watermark.image)

我这样写的，因为需要自定义列隐藏，所以加了一层div包裹

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/22305e4c47344f9e83dac2d7a91969a5~tplv-k3u1fbpfcp-watermark.image)

## 最开始的解决方案

过程中发现在最前面加一列就可以解决顺序错乱问题，所以就用了下面图片中的方式来解决

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6828a390a68841148aa72bf426094a76~tplv-k3u1fbpfcp-watermark.image)

用了一段时间后，还是觉得不太舒服，毕竟莫名奇妙多了一行代码

## 后来

找度娘看了下

* el-table-column加key

先看到了这个，尝试了一下没啥效果
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/954dc30a6e4d4571a65675c64fbc9e32~tplv-k3u1fbpfcp-watermark.image)

* 官方issues

后面看到[官方issues](https://github.com/ElemeFE/element/issues/1638)里面，惊喜的发现下面的解决方案里居然有说用**表格增加个宽度为1的列**来解决的，感觉离大佬们又近一步，果断一个赞

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/884946b843aa4e8aac0cf280c8526df2~tplv-k3u1fbpfcp-watermark.image)
但是也说了这个方案毕竟不太好

后来就看到了这个
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/55a58b375f5c4ca9901b57712c7bcf7a~tplv-k3u1fbpfcp-watermark.image)

翻译过来就是这样子，说el-table不能嵌套el-table-column以外的元素

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8c09d96f8c894c6f9a2d389d4cf1c510~tplv-k3u1fbpfcp-watermark.image)

## 最后

简单而不失优雅的把包裹的div标签改为template，搞完收工

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/06a12e68732b4d8f8f474c1f7b1b840d~tplv-k3u1fbpfcp-watermark.image)
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a700e0e10eec44e0aa1d374d5733dc71~tplv-k3u1fbpfcp-watermark.image)
