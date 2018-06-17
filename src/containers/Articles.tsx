import { connect, Dispatch } from 'react-redux'
import Articles from '../components/Articles/Articles'
import { REQUEST_ARTICLES } from '../constants'
import { IPayload } from '../types'

interface IState {
  articles: IArticles
}
interface IArticles {
  articles: object[]
  total: number
}
const mapStateToProps = (state: IState): object => ({
  articles: state.articles.articles,
  total: state.articles.total
})

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchArticle: (payload: IPayload) => {
    dispatch({
      payload,
      type: REQUEST_ARTICLES
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles)
