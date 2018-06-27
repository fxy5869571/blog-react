import * as React from 'react'
import * as Loadable from 'react-loadable'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../containers/App'
import loading from './loading'
const RouterList: any[] = [
  {
    component: () => import('../containers/Articles'),
    path: '/'
  },
  {
    component: () => import('../containers/Article'),
    path: '/article/:Id'
  },
  {
    component: () => import('../containers/Resume'),
    path: '/resume'
  },
  {
    component: () => import('../containers/TimeFile'),
    path: '/time-file'
  }
]
const RouterMap = () => (
  <Router>
    <App>
      <Switch>
        {RouterList.map(item => (
          <Route
            key={item.path}
            exact={true}
            path={item.path}
            component={Loadable({
              loader: item.component,
              loading
            })}
          />
        ))}
      </Switch>
    </App>
  </Router>
)

export default RouterMap
