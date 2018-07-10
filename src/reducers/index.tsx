import { combineReducers } from 'redux'
import article from './article'
import articles from './articles'
import info from './info'
import resume from './resume'
import say from './say'
const reducer = combineReducers({
  article,
  articles,
  info,
  resume,
  say
})
export default reducer
