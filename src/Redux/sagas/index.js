import { all } from 'redux-saga/effects';
import productSaga from './products';
import userSaga from './user';

export default function* rootSaga(){
    yield all([
        userSaga(),
        productSaga()
    ])
}