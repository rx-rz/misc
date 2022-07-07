import React from 'react'
import { useParams } from 'react-router-dom'
import ProductDisplay from 'src/features/product/container/ProductDisplay'
import ProductSettings from 'src/features/product/container/ProductSettings'

export default function ProductPage() {
    const {name} = useParams()
    const {price} = useParams()
  return (
    <div className='sm:flex items-center justify-evenly m-auto  dark:bg-gray-900'>
        <ProductDisplay name={name}/>
        <ProductSettings name={name} price={price}/>
    </div>
  )
}
