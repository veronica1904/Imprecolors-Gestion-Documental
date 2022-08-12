import { call, put, takeEvery } from "redux-saga/effects";
import {
    REGISTER_PRODUCT,
    REGISTER_PRODUCT_SUCESS,
    REGISTER_PRODUCT_ERROR,
    REQUEST_PRODUCTS,
    LIST_PRODUCTS
} from "../constants/products";
import axios from "axios";
import Api from "../Api";

//register products
function postRegisterProduct(action) {
  console.log('mi data >>> ', action)
    return axios({
      method: "POST",
      url: `${Api}/product/product`,
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


function* axiosRegisterProduct(action) {
    try {
        const product = yield call(postRegisterProduct, action.payload)
        yield put({type: REGISTER_PRODUCT_SUCESS, product: product})
      } catch (error) {
        yield put({ type: REGISTER_PRODUCT_ERROR, message: error ? String(error.error) : "Error de conexión" });
      }
}

function listProducts() {

      return axios({
        method: "GET",
        url: `${Api}/product/product`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => response.data)
        .catch((error) => {
          throw error.response?.data;
        });
    }
  
  
  function* axiosListProducts() {
      try {
          const products = yield call(listProducts)
          console.log('products >>> ', products)
          yield put({type: LIST_PRODUCTS, listProducts: products})
        } catch (error) {
          yield put({ type: REGISTER_PRODUCT_ERROR, message: error ? String(error.error) : "Error de conexión" });
        }
  }
  




export default function* productSaga() {
  
    yield takeEvery(REGISTER_PRODUCT, axiosRegisterProduct);
    yield takeEvery(REQUEST_PRODUCTS, axiosListProducts)
  
}