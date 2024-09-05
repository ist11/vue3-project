# vue3-project

自用的vue3初始化项目框架

## ide套件

[VSCode](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## 初始化

```sh
npm install
```

## 开发环境运行

```sh
npm run dev
```

## 打包项目

```sh
npm run build
```

## 语法检查 [ESLint](https://eslint.org/)

```sh
npm run lint
```



## 额外安装的插件

1.@types/node

`@types/node` 是一个 TypeScript 类型定义包，为 Node.js 的核心模块提供 TypeScript 类型声明。它让 TypeScript 编译器了解 Node.js 的 API 及其类型，从而提供类型检查和自动补全功能。

> vscode要求加的,加了就不报错

```bash
npm install -D @types/node
```

2.eslint-import-resolver-alias

设置eslint允许路径别名

```bash
npm i eslint-import-resolver-alias -D
```





## 参考

[vite+vue3实现低版本浏览器兼容的解决方案](https://juejin.cn/post/7356889912127864832) 

vue3向下只能支持到ES6（ECMAScript 2015）,有支持es6的需求可以参考

如果需要支持es5及更早的规范(ie7-11)只能使用vue2.x

[npm查看已安装的包](https://blog.csdn.net/jiaoqi6132/article/details/130146145)

参考了黑马的人力资源项目创建的目录:

```bash
├── src                        # 源代码目录
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── icons                  # 项目所有 svg icons
│   ├── layout                 # 全局 layout
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   └── permission.js          # 权限管理
│   └── settings.js            # 配置文件

```

> settings.js导出网站基础配置，包括：网站标题、固定header、显示logo
> permission.js(权限)，主要负责路由导航守卫
>
> 这里只提供空文件,根据实际情况编写内容

## 说明

可能需要根据情况添加内容,创建项目的时候没有添加ts支持和jsx支持
