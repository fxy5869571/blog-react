import { combineReducers } from 'redux'
import article from './article'
import articles from './articles'
import info from './info'
const reducer = combineReducers({
  article,
  articles,
  info
})
export default reducer
