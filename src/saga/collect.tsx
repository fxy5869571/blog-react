import { all, call, put, takeEvery } from 'redux-saga/effects'
import {
  collectAction,
  RECEIVE_COLLECT,
  REQUEST_COLLECT
} from '../actions/collect'
import { fetchCollect } from '../services'
function* yieldCollect(action: collectAction) {
  const { total, collect } = yield call(fetchCollect, action.payload)
  yield put({ type: RECEIVE_COLLECT, total, collect })
}

export function* watchYieldCollect() {
  yield all([takeEvery(REQUEST_COLLECT, yieldCollect)])
}
