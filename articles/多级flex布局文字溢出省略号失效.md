
### 场景描述

 商城购物车元素左右布局的内容商品描述，使用多级flex布局时，文字溢出以省略号代替会出现失效的情况

 ![使用场景](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4790b9a2d1184b7c95e89b6d8838f8cc~tplv-k3u1fbpfcp-watermark.image)

### 解决方案

在父级元素增加 overflow: hidden

```html

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <style type="text/css">
      .container {
        width: 300px;
        height: 100px;
        background: #7dc3fd;
        color: #fff;
        display: flex;
      }
      .item {
        overflow: hidden;
        flex: 1;
        border: 1px solid #fff;
      }
      .line {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="item">商品图片</div>
      <div class="item">
        <div class="line">商品描述商品描述商品描述商品描述商品描述</div>
      </div>
    </div>
  </body>
</html>
```

* tips 度娘的解决方案其实很多，但是这种实现方式相对比较简单，大佬勿喷，有问题求指正
