import React from 'react'
import { useStateContext } from 'src/context/count-context'
export default function Counter() {

  const {quantity, decreaseQuantity, increaseQuantity} = useStateContext()
  return (
    <div className='flex'>
      <p>Quantity: </p>
      <div>
        <button onClick={decreaseQuantity}>-</button>
        <p>{quantity}</p>
        <button onClick={increaseQuantity}>+</button>
      </div>
    </div>
  )
}
