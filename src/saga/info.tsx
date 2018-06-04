import { call, put, takeEvery } from 'redux-saga/effects'
import { RECEIVE_INFO, REQUEST_INFO } from '../constants'
import { fetchInfo } from '../services'

function* yieldInfo() {
  const info = yield call(fetchInfo)
  yield put({ type: RECEIVE_INFO, info })
}
export function* watchYieldInfo() {
  yield takeEvery(REQUEST_INFO, yieldInfo)
}
