import { applyMiddleware, createStore } from "redux";
import reducer from "./modules/index";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

const sagaMW = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMW))
);

sagaMW.run(rootSaga);

export default store;
