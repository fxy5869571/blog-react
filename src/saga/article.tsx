import { call, takeEvery, put } from "redux-saga/effects";
import { RECEIVE_ARTICLE, REQUEST_ARTICLE } from "../constants";
import { fetchArticle } from "../services";

function* yieldArticle() {
  const article = yield call(fetchArticle);
  yield put({ type: RECEIVE_ARTICLE, article });
}
export function* watchYieldArticle() {
  yield takeEvery(REQUEST_ARTICLE, yieldArticle);
}
