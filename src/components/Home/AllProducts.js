import { useSelector } from 'react-redux'
import Product from './Product'

export default function AllProducts() {
    const products = useSelector((state) => state.products)
    return (
    <div class="productContainer" id="lws-productContainer">
        {
            products.map((product => <Product product={product} _id={product.id}></Product> ))
        }
        
    </div>
  )
}
