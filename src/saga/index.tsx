import { all } from "redux-saga/effects";
import { watchYieldArticle } from "./article";
import { watchYieldInfo } from "./info";

export default function* rootSaga() {
  yield all([, watchYieldArticle(), watchYieldInfo()]);
}
