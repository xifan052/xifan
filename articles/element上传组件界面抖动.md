# element 上传组件界面晃动

## 场景描述

在使用 element ui 的上传组件时，会出现一个上传进度的 loading 元素，导致形成一个图片被挤到后面，上传完成之后又回来的效果

![ ](https://img-blog.csdnimg.cn/20200709180127788.gif)

经过尝试，主要由于在上传完成之后 push 操作了 upload 组件的 fileList 数组；

```js
this.fileList.push({
  name: this.data.key,
  url: imgUrl + this.data.key,
})
```

## 解决实现

### 1.避免 push,而是直接赋值

```js
// 看项目场景影响
this.fileList = [
  {
    name: this.data.key,
    url: imgUrl + this.data.key,
  },
]
```

### 2. 隐藏 loading 元素

```css
/* 推荐，实现简单 */
.el-upload-list__item.is-ready,
.el-upload-list__item.is-uploading {
  display: none !important;
}
```

## 参考

- [涳涳嘚慌](https://blog.csdn.net/oschina_41767564/article/details/107615022)

- [mister_snail](https://blog.csdn.net/mister_snail/article/details/108374211)
