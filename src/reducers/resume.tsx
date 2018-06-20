import { ResumeAction } from '../actions'
import { RECEIVE_RESUME, REQUEST_RESUME } from '../constants'
const resume = (state: object = {}, action: ResumeAction) => {
  switch (action.type) {
    case REQUEST_RESUME:
      return state
    case RECEIVE_RESUME:
      return { ...state, ...action.resume }
    default:
      return state
  }
}
export default resume
