import { ADDPRODUCT, ADDTOCART } from "./actionTypes"

export const addProduct = (productData) => {

    return {
        type: ADDPRODUCT,
        payload: productData
    }

}

export const addToCart = (productId) => {
    return {
        type: ADDTOCART,
        payload: productId
    }
}