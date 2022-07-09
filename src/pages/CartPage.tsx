import React from 'react'
import CartItem from 'src/components/CartItem/CartItem'
import {useStateContext} from 'src/context/count-context'
import { ProductProps } from 'src/types/Product'
export default function CartPage() {
    const {cartItems} = useStateContext()
  return (
    <div>
        {cartItems.map((cartItem: ProductProps) => (
            <CartItem name={cartItem.name} price={cartItem.price}/>
        ))}
    </div>
  )
}
