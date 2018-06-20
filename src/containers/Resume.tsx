import { connect, Dispatch } from 'react-redux'
import Resume from '../components/Resume/Resume'
import { REQUEST_RESUME } from '../constants'

interface IResume {
  resume: object
}
const mapStateToProps = ({ resume }: IResume): object => ({ resume })
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchResume: dispatch({ type: REQUEST_RESUME })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Resume)
