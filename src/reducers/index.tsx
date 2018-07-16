import { combineReducers } from 'redux'
import article from './article'
import articles from './articles'
import collect from './collect'
import info from './info'
import say from './say'
const reducer = combineReducers({
  article,
  articles,
  collect,
  info,
  say
})
export default reducer
