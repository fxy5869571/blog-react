import { connect } from 'react-redux'
import { DELETE_COLLECT, REQUEST_COLLECT } from '../actions/collect'
import Collect from '../components/Collect/Collect'
interface ICollect {
  collect: object[]
  payload: object
  total: number
}
interface IState {
  collect: ICollect
}
const mapStateToProps = ({ collect }: IState) => ({
  collect: collect.collect,
  payload: collect.payload || { pageIndex: 1, pageSize: 16 },
  total: collect.total || 0
})
const mapDispatchToProps = (dispatch: any) => ({
  deleteCollect: (id: string) => {
    dispatch({ type: DELETE_COLLECT, payload: { _id: id } })
  },
  fetchCollect: (payload: object = { pageIndex: 1, pageSize: 16 }) => {
    dispatch({ type: REQUEST_COLLECT, payload })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collect)
