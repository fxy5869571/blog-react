import { connect } from 'react-redux'
import Article from '../components/Article/Article'
import { REQUEST_ARTICLE } from '../constants'

interface IArticle {
  article: object
}
const mapStateToProps = (state: IArticle): object => {
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
