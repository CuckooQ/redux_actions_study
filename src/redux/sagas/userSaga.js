import { put, call, takeEvery } from "redux-saga/effects";
import { getUsers } from "../../services/user";
import {
  getUsersSuccess,
  getUsersFail,
  GET_USERS_START,
  ACTION_TYPE_PREFIX,
} from "../modules/user";

export function* getUsersSaga(action) {
  try {
    const data = yield call(getUsers);
    yield put(getUsersSuccess(data));
  } catch (error) {
    yield put(getUsersFail(error));
  }
}

function* userSaga() {
  yield takeEvery(`${ACTION_TYPE_PREFIX}/${GET_USERS_START}`, getUsersSaga);
}

export default userSaga;
