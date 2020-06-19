
## 概述

> 使用飞冰ICE.js构建的PC端网站模板

## 使用

```bash
# 安装依赖
$ npm install 
$ yarn install

# 启动服务
$ npm start  # visit http://localhost:3333
$ yarn run start  # visit http://localhost:3333
```

[更多](https://ice.work/docs/guide/about).

## 目录

```md
├── .ice/                          # 运行时生成的临时目录
├── build/                         # 构建产物目录
├── mock/                          # 本地模拟数据
│   ├── index.js
├── public/
│   ├── index.html                 # 应用入口 HTML
│   └── favicon.png                # Favicon
├── src/                           # 源码
│   ├── components/                # 自定义业务组件
│   ├── layouts/                   # 布局组件
│   ├── pages/                     # 页面
│   ├── models/                    # 应用级数据状态 这里储存全局状态数据
│   ├── global.scss                # 全局样式
│   ├── config.ts                  # 环境配置
│   ├── routes.ts                  # 路由配置
│   └── app.ts                     # 应用入口
│
├── build.json
├── package.json
└── tsconfig.json
```
