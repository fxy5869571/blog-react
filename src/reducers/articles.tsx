import { ArticlesAction } from '../actions'
import { RECEIVE_ARTICLES, REQUEST_ARTICLES } from '../constants'
const articles = (state: object[] = [], action: ArticlesAction): object => {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return state
    case RECEIVE_ARTICLES:
      return { articles: action.articles, total: action.total }
    default:
      return state
  }
}
export default articles
