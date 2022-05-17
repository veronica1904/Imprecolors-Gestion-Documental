import { call, put, takeEvery } from "redux-saga/effects";
import {LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR} from "../constants/user";
import axios from "axios";
import Api from "../Api";

// action the backend
function postApi(action) {
  console.log('mi data >>> ', action)
    return axios({
      method: "POST",
      url: `${Api}/login/auth`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: JSON.stringify(action),
    })
      .then((response) => response.data)
      .catch((error) => {
        throw error.response?.data;
      });
  }


function* axiosLogin(action) {
    try {
        const user = yield call(postApi, action.payload)
        yield put({type: LOGIN_USER_SUCCESS, user: user})
      } catch (error) {
        yield put({ type: LOGIN_USER_ERROR, message: error ? String(error.error) : "Error de conexión" });
      }
}

export default function* userSaga() {
    yield takeEvery(LOGIN_USER_REQUEST, axiosLogin);
}