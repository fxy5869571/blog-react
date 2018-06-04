import { ArticleAction } from '../actions'
import { RECEIVE_ARTICLE, REQUEST_ARTICLE } from '../constants'
const article = (state: object = {}, action: ArticleAction): object => {
  switch (action.type) {
    case REQUEST_ARTICLE:
      return state
    case RECEIVE_ARTICLE:
      return action.article
    default:
      return state
  }
}
export default article
