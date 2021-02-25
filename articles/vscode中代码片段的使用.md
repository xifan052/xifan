# vscode

当我们开始一个新项目开发时，对于

## 使用场景

懒人必备初始化 vue 文件

## 使用步骤

1. 点击左下角设置，选择用户代码片段。
2. 输入代码片段名称回车。
3. 复制以下代码保存。

```js
{
"Print to console": {
  // prefix: 触发的代码，随意设置，例如输入sc就会提示下面body中的代码块
  "prefix": "sc",
  // body: 设置的代码块内容
  "body": [
    "<template>",
    " <div>\n",
    " </div>",
    "</template>\n",
    "<script>",
    " export default {",
    "   name:'',",
    "   data () {",
    "     return {\n",
    "     }",
    "   },",
    "   components: {\n",
    "   }",
    " }",
    "</script>\n",
    "<style scpoed>\n",
    " ",
    "</style>",
    "$2"
  ],
}
}
```
