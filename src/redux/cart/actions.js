import { ADD_NEW_PRODUCT, DELETE_PRODUCT, MINUS_PRODUCT, PLUS_PRODUCT } from "./actionTypes"

export const addNewProduct = (product) => {
    return {
        type: ADD_NEW_PRODUCT,
        payload: product
    }

}

export const plusProduct = (id) => {

    return {
        type: PLUS_PRODUCT,
        payload: id
    }


}

export const minusProduct = (id) => {

    return {
        type: MINUS_PRODUCT,
        payload: id
    }

}

export const deleteProduct = (id) => {

    return {
        type: DELETE_PRODUCT,
        payload: id
    }

}