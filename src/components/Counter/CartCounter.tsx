import React from 'react'
import { useStateContext } from 'src/context/count-context'
export default function Counter() {

  const {quantity, decreaseQuantity, increaseQuantity} = useStateContext()
  return (
    <div>

      <div className='flex mb-1'>
        <button onClick={decreaseQuantity} className='border-2 px-2 border-black font-extrabold dark:text-white dark:border-primary sm:px-3 sm:py-1'>-</button>
        <p className='border-2 px-2 border-black border-l-0 border-r-0 font-medium dark:text-white dark:border-primary sm:px-3 sm:py-1'>{quantity}</p>
        <button onClick={increaseQuantity} className='border-2 px-2 border-black font-extrabold dark:text-white dark:border-primary sm:px-3 sm:py-1'>+</button>
      </div>
    </div>
  )
}
