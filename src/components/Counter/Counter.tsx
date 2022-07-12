import React from 'react'
import { useStateContext } from 'src/context/count-context'
export default function Counter() {

  const {quantity, decreaseQuantity, increaseQuantity} = useStateContext()
  return (
    <div>
      <p className='dark:text-white mb-1 sm:text-xl sm:mb-3'>quantity: </p>
      <div className='flex mb-4'>
        <button onClick={decreaseQuantity} className='border-2 px-2 border-black font-extrabold dark:text-white dark:border-primary sm:px-3 sm:py-1 transition-colors duration-300 hover:bg-primary hover:text-white' >-</button>
        <p className='border-2 px-2 border-black border-l-0 border-r-0 font-medium dark:text-white dark:border-primary sm:px-3 sm:py-1'>{quantity}</p>
        <button onClick={increaseQuantity} className='border-2 px-2 border-black font-extrabold dark:text-white dark:border-primary sm:px-3 sm:py-1 transition-colors duration-300 hover:bg-primary hover:text-white'>+</button>
      </div>
    </div>
  )
}
