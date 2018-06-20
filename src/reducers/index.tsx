import { combineReducers } from 'redux'
import article from './article'
import articles from './articles'
import info from './info'
import resume from './resume'
const reducer = combineReducers({
  article,
  articles,
  info,
  resume
})
export default reducer
