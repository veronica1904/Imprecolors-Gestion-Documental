import { 
    DATA_BILL
} from "../constants/bill.js";
import { initialState } from "../states/bill";


export default function registerDataBill(state = initialState, action) {
    switch (action.type) {
  
        case DATA_BILL: {
            console.log('actionbill>>> ', action)
            return {
                ...state,
                loading: true,
                error: null,
                message: null,
                billData: action.payload
            };
        }
  
        default: {
            return state;
        }
    }
}