import { connect } from 'react-redux'
import { REQUEST_SAY } from '../actions/say'
import Say from '../components/Say/Say'

const mapStateToProps = ({ say }: any) => ({
  payload: say.payload || { pageIndex: 1, pageSize: 10 },
  say: say.say,
  total: say.total || 0
})
const mapDispatchToProps = (dispatch:any) => ({
  fetchSay: (payload: object = {}) => {
    dispatch({ type: REQUEST_SAY, payload })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Say)
