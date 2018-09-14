import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import App from '../components/App/App'
import { IInfo } from '../components/Layout/Sidebar/Sidebar'
import { REQUEST_ARTICLES, REQUEST_INFO } from '../constants'
import { IPayload } from '../types'
interface IInfoInterface {
  info: IInfo
}
const mapStateToProps = ({ info }: IInfoInterface) => {
  return { info }
}

export const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: dispatch({ type: REQUEST_INFO }),
    fetchArticle: (payload: IPayload) => {
      dispatch({
        payload,
        type: REQUEST_ARTICLES
      })
    }
  }
}
const AppMap: any = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
export default withRouter(AppMap)
