import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/products/actions"
import { addNewProduct } from "../../redux/cart/actions"

export default function Product({product}) {

    const {id, title, category, price, quantity, img} = product
    const dispatch = useDispatch()

    //console.log(product)

    const handleAddToCart = (id, product) => {
        dispatch(addToCart(id))
        dispatch(addNewProduct({...product, quantity:1}))
    }

    return (
    <div class="lws-productCard">
      <img class="lws-productImage" src={img} alt="product" />
      <div class="p-4 space-y-2">
        <h4 class="lws-productName">{title} : {id}</h4>
        <p class="lws-productCategory">{category}</p>
        <div class="flex items-center justify-between pb-2">
          <p class="productPrice">BDT <span class="lws-price">{price}</span></p>
          <p class="productQuantity">QTY <span class="lws-quantity">{quantity}</span></p>
        </div>
        <button disabled={quantity <= 0} class="lws-btnAddToCart" onClick={() => handleAddToCart(id, product)}>Add To Cart</button>
      </div>
    </div>
    
  )
}
