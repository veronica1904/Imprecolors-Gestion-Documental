import { call, put, takeEvery } from "redux-saga/effects";
import {LOGIN_USER_REQUEST,
   LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR, 
    REGISTER_USER_SUCESS, 
    REGISTER_USER_ERROR,
    REGISTER_USER,
    LIST_USERS_SUCESS,
    LIST_USERS_ERROR,
    LIST_USERS} from "../constants/user";
import axios from "axios";
import Api from "../Api";

// action the backend
function postApi(action) {
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

//regitser user 

// action the backend
function postRegisterUser(action) {

  const route = action.type === "client" ? "/client/client": "/register/user"
    return axios({
      method: "POST",
      url: `${Api}${route}`,
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


function* axiosRegisterUser(action) {
    try {
        const user = yield call(postRegisterUser, action.payload)
        yield put({type: REGISTER_USER_SUCESS, user: user})
      } catch (error) {
        yield put({ type: REGISTER_USER_ERROR, message: error ? String(error.error) : "Error de conexión" });
      }
}

// get loist users 

function listUsers(action) {
  const route = action === "client" ? "/client/client": "/register/user"
    return axios({
      method: "GET",
      url: `${Api}${route}`,
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


function* axiosListUsers(action) {
    try {
        const users = yield call(listUsers, action.payload)
        yield put({type: LIST_USERS_SUCESS, listUsers: users})
      } catch (error) {
        yield put({ type: LIST_USERS_ERROR, message: error ? String(error.error) : "Error de conexión" });
      }
}


export default function* userSaga() {
    yield takeEvery(LOGIN_USER_REQUEST, axiosLogin);
    yield takeEvery(REGISTER_USER, axiosRegisterUser);
    yield takeEvery(LIST_USERS, axiosListUsers);
}