import { combineReducers } from 'redux';
import userReducer from './user';
import appReducer from './app';
import registerProduct from './products';
import registerDataBill from './bill';

const rootReducer = combineReducers({
    user: userReducer,
    app: appReducer,
    product: registerProduct,
    bill: registerDataBill
});

export default rootReducer;