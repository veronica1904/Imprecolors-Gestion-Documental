import { combineReducers } from 'redux';
import userReducer from './user';
import appReducer from './app';
import registerProduct from './products';

const rootReducer = combineReducers({
    user: userReducer,
    app: appReducer,
    product: registerProduct
});

export default rootReducer;