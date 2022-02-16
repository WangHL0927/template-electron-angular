# Template-Electron-Angular

[![CircleCI](https://circleci.com/gh/WangHL0927/template-electron-angular.svg?style=svg)](https://circleci.com/gh/WangHL0927/template-electron-angular)

## 简介

跨平台PC客户端项目开发模板。

主要技术依赖: Electron(native api) + Angular(web)

---

## Quick Start

### Dependencies 

Node.js `^16.14.0`

Angular `^13.1.0`

electron `^17.0.0`

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



