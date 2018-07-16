import {
  collectAction,
  RECEIVE_COLLECT,
  REQUEST_COLLECT
} from '../actions/collect'

const collect = (state: object = {}, action: collectAction): object => {
  switch (action.type) {
    case REQUEST_COLLECT:
      return { payload: action.payload }
    case RECEIVE_COLLECT:
      console.log(state)
      return {
        ...state,
        collect: action.collect,
        total: action.total
      }
    default:
      return state
  }
}
export default collect
