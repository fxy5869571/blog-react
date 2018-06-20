import { call, put, takeEvery } from 'redux-saga/effects'
import { RECEIVE_RESUME, REQUEST_RESUME } from '../constants'
import { fetchResume } from '../services'

function* yieldResume() {
  const resume = yield call(fetchResume)
  yield put({ type: RECEIVE_RESUME, resume })
}
export function* watchYieldResume() {
  yield takeEvery(REQUEST_RESUME, yieldResume)
}
