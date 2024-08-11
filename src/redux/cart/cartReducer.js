import { ADD_NEW_PRODUCT, DELETE_PRODUCT, MINUS_PRODUCT, PLUS_PRODUCT } from "./actionTypes";

const initialState = []

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_PRODUCT:

            // Check if the product already exists in the state
            const productExists = state.find(product => product.id === action.payload.id);

            if (productExists) {
                // If the product exists, update its quantity and calculated price
                return state.map(product => {
                    if (product.id === action.payload.id) {
                        const newQuantity = product.quantity + 1;
                        return {
                            ...product,
                            quantity: newQuantity,
                            price: product.price, // Assuming the price doesn't change
                            calcPrice: product.price * newQuantity
                        };
                    }
                    return product;
                });
            } else {
                // If the product doesn't exist, add it to the state
                return [
                    ...state,
                    {
                        ...action.payload,
                        quantity: 1, // Initialize quantity as 1 for a new product
                        calcPrice: action.payload.price // Initialize calcPrice with the product price
                    }
                ];
            }



        //return [...state, action.payload]


        case PLUS_PRODUCT:
            return state.map((product) => {
                if (product.id === action.payload) {
                    const newQuantity = product.quantity + 1;
                    return {
                        ...product,
                        quantity: newQuantity,
                        price: product.price,
                        calcPrice: product.price * newQuantity
                    }
                }

                return product;
            })

        case MINUS_PRODUCT:
            return state.map((product) => {
                if (product.id === action.payload) {
                    const newQuantity = product.quantity - 1;
                    return {
                        ...product,
                        quantity: newQuantity,
                        price: product.price,
                        calcPrice: product.price * newQuantity
                    }
                }

                return product;
            })

        case DELETE_PRODUCT:

            return state.filter((product) => product.id !== action.payload)

        default:
            return state;
    }
}

export default cartReducer;