import { connect, Dispatch } from 'react-redux'
import Articles from '../components/Articles/Articles'
import { REQUEST_ARTICLES } from '../constants'
interface IState {
  articles: IArticles
}
interface IArticles {
  articles: object[]
  total: number
}
const mapStateToProps = (state: IState): object => {
  return {
    articles: state.articles.articles,
    total: state.articles.total
  }
}

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchArticle: (pageIndex: number, pageSize: number) => {
      dispatch({
        pageIndex,
        pageSize,
        type: REQUEST_ARTICLES
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles)
