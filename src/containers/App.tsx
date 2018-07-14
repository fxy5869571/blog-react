import { connect, Dispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import App from '../components/App/App'
import { REQUEST_INFO } from '../constants'

interface IInfo {
  info: object
}
const mapStateToProps = ({ info }: IInfo) => {
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
