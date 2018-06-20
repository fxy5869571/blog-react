import { connect, Dispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import App from '../components/App/App'
import { REQUEST_INFO } from '../constants'
interface ITitle {
  title: string
}
interface IArticles {
  articles: ITitle[]
}
interface IInfo {
  info: object
  articles: IArticles
}

const mapStateToProps = ({ articles, info }: IInfo) => {
  if (articles.articles) {
    return {
      articleTitle: articles.articles.map(item => item.title),
      info
    }
  }
  return { info }
}

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return { actions: dispatch({ type: REQUEST_INFO }) }
}
const AppMap: any = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
export default withRouter(AppMap)
