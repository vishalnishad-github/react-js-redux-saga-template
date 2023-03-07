import { call, put, takeEvery } from "redux-saga/effects";
import { USERS } from "../constants";

async function getAPI() {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

function* fetchUsers() {
  try {
    const users = yield call(getAPI);
    yield put({ type: USERS.GET_USERS_SUCCESS, users });
  } catch (error) {
    yield put({
      type: USERS.GET_USERS_ERROR,
      message: error.message,
    });
  }
}

function* usersSaga() {
  yield takeEvery(USERS.GET_USERS_REQUESTED, fetchUsers);
}

export default usersSaga;
