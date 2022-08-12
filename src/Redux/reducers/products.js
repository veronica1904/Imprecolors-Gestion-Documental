import { 
    REGISTER_PRODUCT,
    REGISTER_PRODUCT_ERROR,
    REGISTER_PRODUCT_SUCESS,
    REQUEST_PRODUCTS,
    LIST_PRODUCTS
} from "../constants/products.js";
import { initialState } from "../states/user";


export default function registerProduct(state = initialState, action) {
    switch (action.type) {
  
        case REGISTER_PRODUCT: {
            return {
                ...state,
                loading: true,
                error: null,
                message: null
            };
        }
        case REGISTER_PRODUCT_SUCESS: {
            console.log('action >>> ', action)
            return {
                ...state,
                loading: false,
                error: null,
                product: "producto creado"
            };
        }
        case REGISTER_PRODUCT_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
                message: action.payload.message
                
            };
        }
        case REQUEST_PRODUCTS: {
            return {
                ...state,
                loading: false,
                error: null,
            };
        }
        case LIST_PRODUCTS: {
            return {
                loading: false,
                error: null,
                listProducts: action.listProducts
            };
        }

        default: {
            return state;
        }
    }
}