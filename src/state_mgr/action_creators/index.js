import { ADD_PRODUCT, EDIT_PRODUCT, LOAD_PRODUCTS, REMOVE_PRODUCT } from "./actions";

export const loadProducts = (products) => {
    return (dispatch) => {
        dispatch({
            type: LOAD_PRODUCTS,
            payload: products
        })
    }
}

export const removeProduct = (product_id) => {
    return (dispatch ) => {
        dispatch({
            type: REMOVE_PRODUCT,
            payload: product_id
        });
    }
}

export const addProduct = (product) => {
    return (dispatch ) => {
        dispatch({
            type: ADD_PRODUCT,
            payload: product
        });
    }
}

export const editProduct = (product) => {
    return (dispatch) => {
        dispatch({
            type: EDIT_PRODUCT,
            payload: product
        });
    }
}