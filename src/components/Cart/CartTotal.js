import React from 'react'
import { useSelector } from 'react-redux'

export default function CartTotal() {

    const cartProducts = useSelector((state) => state.cart)

    const totalProducts = cartProducts.reduce((total, product) => total = total + product.quantity, 0)
    console.log(totalProducts)

    return (
        <span id="lws-totalCart">{totalProducts}</span>
    )
}
