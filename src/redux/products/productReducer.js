import { ADDPRODUCT, ADDTOCART } from "./actionTypes";

const initialState = [
]
const productReducer = (state=initialState, action) => {

    const nextProductId = (todos) => {

        const maxId = todos.reduce((maxId, product) => Math.max(maxId, product.id), -1)

        return maxId + 1;

    } 

    switch (action.type) {
        case ADDPRODUCT:
            return [
                ...state,
                {
                    id:nextProductId(state),
                    title:action.payload.title,
                    category: action.payload.category,
                    img:action.payload.img,
                    price:action.payload.price,
                    quantity: action.payload.quantity,
                }
            ]
        case ADDTOCART:

            const products = state.map((product) => {
                if(product.id === action.payload){
                    return {
                        ...product,
                        quantity: product.quantity - 1
                    }
                }
                return product
            })

            return products
    
        default:
            return state;
    }

}

export default productReducer;