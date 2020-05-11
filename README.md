# Template-Electron-Angular

---

## 简介

跨平台PC客户端项目开发模板。

主要技术依赖: Electron(native api) + Angular(web)

本项目主要解决的问题：
- 省去项目框架搭建步骤
- 解决Electron + Angular 兼容问题
- 解决Electron Typescript代码支持、编译问题
- 解决Angular 调用native api 问题(ngx-electron)


---

## Quick Start

### Dependencies 

Node.js `^12.16.2`

Angular `^9.1.6`

electron `^8.2.5`

Install
```bash
npm i 
# or
npm install
```

### dev 

```bash
npm run start:ng
# start ng-dev-server 
# url = http://localhost:4200

npm run start:electron
# start dev-electron-window
# link to http://localhost:4200 (ng-dev-server)

npm run build:ng-prod
# build ng static files.(production mode)

npm run generate-res
# generate electron app resources.(eg. app icons...)

```

### release

```bash
npm run build:electron
# release electron app.
# default target: MacOS, Windows-64.
# output dir: out

```



