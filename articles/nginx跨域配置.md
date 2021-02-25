# nginx跨域配置

## 使用场景

* 项目采用前后端分离模式，前端需单独处理跨域

## 跨域配置

1. 打开根目录下的`conf/nginx.conf`文件

2. 在server配置跨域转发处理

```bash

  location / {
      root   html;
      index  index.html index.htm;
      proxy_pass yuming.com; #需要访问的接口域名
  }
  add_header Access-Control-Allow-Origin *; #设置跨域域名
  add_header Access-Control-Allow-Credentials true; #携带cookie

  if ( $request_method = 'OPTIONS' ) { #拦截options请求
      return 200;
  }

  #使用`http://localhost/接口地址`访问

```

## nginx常用命令

* nginx启动命令 start nginx(推荐) / nginx.exe(用这个命令cmd窗口就不能结束了，只能重开)

* nginx停止命令 nginx -s stop(当使用nginx.exe命令启动时，使用这个无效)
* nginx重启命令 nginx -s reload(重载nginx命令，当你改变了nginx配置信息并需要重新载入这些配置时可以使用此命令重载nginx)
