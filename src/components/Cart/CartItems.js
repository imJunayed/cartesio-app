import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct, minusProduct, plusProduct } from '../../redux/cart/actions';

export default function CartItems({product}) {
    const dispatch = useDispatch()

    const {id, title, category, price, quantity, img, calcPrice} = product;

    const handleIncrement = (id) => {
        dispatch(plusProduct(id))
    }

    const handleDecrement = (id) => {
        dispatch(minusProduct(id))
    }

    const handleDelete = (id) => {
        dispatch(deleteProduct(id))
    }

  return (
    // <!-- Cart Items -->
    <div class="cartCard">
      <div class="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img class="lws-cartImage" src={img} alt="product" />
        {/* <!-- cart item info --> */}
        <div class="space-y-2">
          <h4 class="lws-cartName">{title}</h4>
          <p class="lws-cartCategory">{category}</p>
          <p>BDT <span class="lws-cartPrice">{price}</span></p>
        </div>
      </div>
      <div class="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div class="flex items-center space-x-4">
          <button class="lws-incrementQuantity" onClick={() => handleIncrement(id)}>
            <i class="text-lg fa-solid fa-plus"></i>
          </button>
          <span class="lws-cartQuantity">{quantity}</span>
          <button class="lws-decrementQuantity" onClick={() => handleDecrement(id)}>
            <i class="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        {/* <!-- price --> */}
        <p class="text-lg font-bold">BDT <span class="lws-calculatedPrice">{calcPrice}</span></p>
      </div>
      {/* <!-- delete button --> */}
      <div class="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button class="lws-removeFromCart" onClick={() => handleDelete(id)}>
          <i class="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
    // <!-- Cart Items Ends -->

  )
}
