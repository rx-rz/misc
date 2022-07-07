import React from 'react'
import { useStateContext } from 'src/context/count-context.js'
export default function Counter() {

  const {quantity, decreaseQuantity, increaseQuantity} = useStateContext()
  return (
    <div className='flex'>
      <p>Quantity: </p>
      <div>
        {quantity}
        <button onClick={decreaseQuantity}>-</button>
        <p>0</p>
        <button onClick={increaseQuantity}>+</button>
      </div>
    </div>
  )
}
