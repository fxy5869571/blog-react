import { RECEIVE_SAY, REQUEST_SAY, SAYAction } from '../actions/say'

const say = (state = { say: [] }, action: SAYAction) => {
  switch (action.type) {
    case REQUEST_SAY:
      return { payload: action.payload }
    case RECEIVE_SAY:
      return {
        payload: action.payload,
        say: action.say,
        total: action.total
      }
    default:
      return state
  }
}
export default say
