## Apple的个人博客

### 动机
一直想学习下typescript的，趁着业余时间，于是就写了这个项目
### 技术栈
前后端都基于typescript3.0，使用tslint规范代码

后端使用 koa2 提供一个简易的 http 服务器, 并将所有路由定位到入口 router/index.ts 处理. 使用 react-router分发接口, 后端 API 采用类似 Restful 风格的接口, 数据库是 MongoDB, , 权限控制采用 jwt token 的方式.目前只有两种全职，游客只有浏览的权限，管理员可以增删改查文章

博客和管理端基于 react 框架, 使用 redux 和 redux-saga 统一处理数据, react-router 提供路由, ui 使用antd, 页面样式均使用 less 编写.

### 演示地址
__[Apple的个人博客](http://132.232.34.190/)__
[Apple的个人博客管理端](http://132.232.34.190/admin)

## Usage

### 安装
```
git clone https://github.com/fxy5869571/blog-react.git

cd blog-react

yarn install
```
###入口
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
