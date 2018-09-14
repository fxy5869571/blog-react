import { connect } from 'react-redux'
import Article, { IArticle } from '../components/Article/Article'
import { REQUEST_ARTICLE } from '../constants'

interface IArticles {
  article: IArticle
}
const mapStateToProps = (state: IArticles): object => {
  return { article: state.article }
}

export const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchArticle: (Id: string) => dispatch({ type: REQUEST_ARTICLE, Id })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article)
