# 同时提交多个 git 源

在进行平时撸代码的时候就想同时提交到 github 和码云里面去，虽然码云里面可以直接导入已有仓库，但还是太麻烦了，就想着可以同时提交 git 和码云，最终还是度娘出来了两套方案；

## 通过添加 SSH 公钥访问仓库

需要仓库地址为 ssh

- 1.使用如下命令分别生成 github 和 gitee 的 SSH-Key。

```js

// "~/" 代表根路径 C:\Users\Administrator，校验时会默认搜索此路径
ssh-keygen -t rsa -C "xxxxx@xxxxx.com"

```

- 2.按照提示完成三次回车，即可生成 ssh key。可以通过查看根路径`.ssh/id_rsa.pub` 文件内容，或者在右键 git 终端中输入 `cat ~/.ssh/id_rsa.pub`;获取到你的 public key。

```bash

cat ~/.ssh/id_rsa.pub

```

- 3.复制生成后的 ssh key，通过 github 和 gitee 中的 ssh 设置将生成的 public key 添加到账户中。

- 4.可以通过在终端输入`ssh -T git@gitee.com`来验证是否添加成功，首次使用需要确认并添加主机到本机 SSH 可信列表。若返回 `Hi XXX! You've successfully authenticated, but Gitee.com does not provide shell access.` 内容，则证明添加成功。

## 在本地增加远程地址

每次 push 操作需要输入密码

- 1.给 origin 增加一个可以 push 的地址。

```js

 // 添加地址
 git remote set-url --add origin git仓库地址

 // 如果添加地址有问题，可以使用如下命令删除
 git remote set-url --delete origin git仓库地址

```

- 2.通过`git remote -v`查看是否添加成功，如果有刚添加的地址也就证明添加成功。

- 3.然后就可以正常推送代码了，如果推送不上去，则使用`git push origin master -f` 强推。

## 参考链接

- [同时使用：gitlab & github](https://segmentfault.com/a/1190000011810785)
- [一个项目设置两个 git 地址](https://www.cnblogs.com/teamemory/p/11607613.html)
- [生成/添加 SSH 公钥](https://gitee.com/help/articles/4181#article-header0)

## PS

1. 本文是从以上文章总结并且加入自己部分理解以及注意点，有问题请及时联系。
2. 由于实现的环境问题，可能会存在问题，欢迎一起讨论。
