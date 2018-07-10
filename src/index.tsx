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
