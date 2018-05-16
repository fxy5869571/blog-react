import { call, takeEvery } from "redux-saga/effects";
import { DECREMENT_ENTHUSIASM } from "../constants";

export function* loginRequestSaga() {
  yield call(test);
}
export function* watchLoginRequest() {
  yield takeEvery(DECREMENT_ENTHUSIASM, loginRequestSaga);
}
function test(): void {
  console.log(54444);
}
