
import { DATA_BILL } from '../constants/bill';


export const actionDataBill= (data) => {
    return {
        type: DATA_BILL,
        payload: data
    }
}
