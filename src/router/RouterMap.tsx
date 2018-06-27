import * as React from 'react'
import * as Loadable from 'react-loadable'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../containers/App'
import loading from './loading'
const RouterList: any[] = [
  {
    component: Loadable({
      loader: () => import('../containers/Articles'),
      loading
    }),
    path: '/'
  },
  {
    component: Loadable({
      loader: () => import('../containers/Article'),
      loading
    }),
    path: '/article/:Id'
  },
  {
    component: Loadable({
      loader: () => import('../containers/Resume'),
      loading
    }),
    path: '/resume'
  },
  {
    component: Loadable({
      loader: () => import('../containers/TimeFile'),
      loading
    }),
    path: '/time-file'
  }
]
const RouterMap = () => (
  <Router>
    <App>
      <Switch>
        {RouterList.map(item => (
          <Route exact={true} path={item.path} component={item.component} />
        ))}
      </Switch>
    </App>
  </Router>
)

export default RouterMap
