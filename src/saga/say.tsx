import { all, call, put, takeLatest } from 'redux-saga/effects'
import { RECEIVE_SAY, REQUEST_SAY, SAYAction } from '../actions/say'

import { getSay } from '../services'
function* yieldSay(action: SAYAction) {
  const response = yield call(getSay, action.payload)
  yield put({ type: RECEIVE_SAY, ...response, payload: action.payload })
}

export function* watchYieldSay() {
  yield all([takeLatest(REQUEST_SAY, yieldSay)])
}
