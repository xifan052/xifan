
## 背景

正好最近碰到了这种需求，记录下来，方便以后查看。

后端返回的文件流数据如下图所示：

![ ](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a1c18952d3ee4cf48edd16221ae5a650~tplv-k3u1fbpfcp-watermark.image?imageView2/2/w/480/h/480/q/85/interlace/1)

<center>后台返回数据.png</center>

## pdf 的预览

一开始的时候百度了很多方法，有建议用 pdfJs 插件的，有 iframe 嵌套实现的，最后发现了一种及其简便的实现方法：

```js
pdfPreview(url){
    this.$http({
        url: `account/registerOpen/${url}`,
        method: 'get',
        responseType: 'arraybuffer',   //一定要设置响应类型，否则页面会是空白pdf
        params: { accountId: id, lang: 'en_US' }
      }).then(res => {
          const elink = document.createElement('a')
          const blob = new Blob([res], { type: 'application/pdf' })
          elink.target = '_blank'
          elink.style.display = 'none'
          elink.href = URL.createObjectURL(blob)
          document.body.appendChild(elink)
          elink.click()
          URL.revokeObjectURL(elink.href)
          document.body.removeChild(elink)
        }
      });
    }
}
```

## pdf 的下载

下载也挺简单的，代码如下：

```js
pdfDownload(url){
      const id = sessionStorage.getItem('idPdf').replace(/"/g, '');
      this.$http({
        url: `account/registerOpen/${url}`,
        method: 'get',
        responseType: 'arraybuffer',
        params: { accountId: id, lang: 'en_US' }
      }).then(res => {
        // 下载pdf
        if (url === 'PerPdf/download' || url === 'PerCrsPdf/download' || url === 'PerWbenContractPdf/download') {
          //type类型可以设置为文本类型，这里是pdf类型
          this.pdfUrl = window.URL.createObjectURL(new Blob([res], { type: `application/pdf` }));
          const fname = `个人开户资料`; // 下载文件的名字
          const link = document.createElement('a');
          link.href = this.pdfUrl;
          link.setAttribute('download', fname);
          document.body.appendChild(link);
          link.click();
        }
      });
}
```

作者：刘昊然的弟弟
链接：https://www.jianshu.com/p/950cb898c978
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
