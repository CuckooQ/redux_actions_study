import { all } from "@redux-saga/core/effects";
import { usersSaga } from "./modules/user";

function* rootSaga() {
  yield all([usersSaga()]);
}

export default rootSaga;
