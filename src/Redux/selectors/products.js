export const productState = state => state.product;
export const getListProducts = state   => {
    return productState(state).listProducts
};