import React from 'react'
import CartItems from './CartItems'
import Billing from './Billing'
import { useSelector } from 'react-redux'

export default function Cart() {

    const cartProducts = useSelector((state) => state.cart)
    //console.log(cartProducts)

  return (
    <main class="py-16">
    <div class="container 2xl:px-8 px-2 mx-auto">
      <h2 class="mb-8 text-xl font-bold">Shopping Cart</h2>
      <div class="cartListContainer">
        <div class="space-y-6">
            {cartProducts.map((product) => <CartItems product ={product} _id={product.id}></CartItems> )}
        </div>

        <Billing></Billing>

      </div>
    </div>
  </main>
  )
}
