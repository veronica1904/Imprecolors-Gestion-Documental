
import { 
    REQUEST_PRODUCTS,
    REGISTER_PRODUCT
} from "../constants/products"

export const actionRegitsrProduct= (product) => {
    return {
        type: REGISTER_PRODUCT,
        payload: product
    }
}
export const listProduct= () => {
    return {
        type: REQUEST_PRODUCTS,
       
    }
}