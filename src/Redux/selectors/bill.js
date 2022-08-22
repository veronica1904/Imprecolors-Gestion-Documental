export const billState = state => state.bill;


export const getbill = state   => {
    return billState(state).billData
};