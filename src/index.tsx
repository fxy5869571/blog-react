import * as React from "react";
import * as ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import RoterDom from "./router/RouterDom";
import rootSaga from "./saga";
import "./index.css";
const sagaMiddleware = createSagaMiddleware();
const defaultState = { article: [] };
const store = createStore(
  reducer,
  defaultState,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <RoterDom />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
