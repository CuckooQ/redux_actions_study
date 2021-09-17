import { all } from "@redux-saga/core/effects";
import userSaga from "./userSaga";

function* rootSaga() {
  yield all([userSaga()]);
}

export default rootSaga;
