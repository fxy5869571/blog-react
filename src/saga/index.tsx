import { all } from "redux-saga/effects";

import { watchLoginRequest } from "./test";

export default function* rootSaga() {
  yield all([watchLoginRequest()]);
}
