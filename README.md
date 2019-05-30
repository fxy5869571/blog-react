## Apple的个人博客  <img src="https://img.shields.io/badge/link-996.icu-red.svg"  heigth="5%"/>

### 动机
一直想学习下typescript的，趁着业余时间，于是就写了这个博客0.0
### 技术栈
前后端都基于typescript3.0，使用tslint规范代码

后端使用 koa2 提供一个简易的 http 服务器, 并将所有路由定位到入口 router/index.ts 处理. 使用 react-router分发接口, 后端 API 采用类似 Restful 风格的接口, 数据库是 MongoDB, , 权限控制采用 jwt token 的方式.目前只有两种权限，游客只有浏览的权限，管理员可以增删改查文章

博客和管理端基于 react 框架, 使用 redux 和 redux-saga 统一处理数据, react-router 提供路由, ui 使用antd, 使用fetch请求后端数据.
深圳求个react坑

### 演示地址
__[Apple的个人博客](http://fxyblog.com/)__

__[Apple的个人博客管理端](http://fxyblog.com/admin)__

### 更新

1.更新typescript 到3.0。

2.解决服务器接口本地跨域的问题。
3.修改了文章只有第一段代码高亮的bug

## Usage

### 安装
```
git clone https://github.com/fxy5869571/blog-react.git

cd blog-react

yarn install

yarn start
```
### 入口
```
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import './index.less'
import reducer from './reducers'
import RouterMap from './router/RouterMap'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
ReactDOM.render(
  <LocaleProvider locale={zhCN}>
    <Provider store={store}>
      <RouterMap />
    </Provider>
  </LocaleProvider>,
  document.getElementById('root') as HTMLElement
)
```
### 目录结构
<img src="http://img.qqzi.com/Content/Upload/2018/08/02/5f2045ec-633b-4f2c-b4a7-ac06b877af0a.png"  heigth="5%"/>

### 管理端截图
<img src="http://img.qqzi.com/Content/Upload/2018/08/02/96505143-cd22-4701-8723-d745cc9ff601.png"  heigth="5%"/>

### 博客截图
<img src="http://img.qqzi.com/Content/Upload/2018/08/02/abc1ed51-16e3-410a-bad9-058310e3f553.png"  heigth="5%"/>

### 请我喝杯咖啡
 <img src="http://img.qqzi.com/Content/Upload/2019/05/30/fba890ff-57e1-4f99-9589-da23ffb16ab0.jpeg" height = "200" alt="图片名称" align=center />
  <img src="http://img.qqzi.com/Content/Upload/2019/05/30/b233949a-01c0-43b6-9136-fa55c3694435.jpeg" height = "200" alt="图片名称" align=center />

