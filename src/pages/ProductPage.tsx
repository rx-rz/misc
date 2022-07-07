import React, { useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import Counter from 'src/components/Counter/Counter'
import ProductDisplay from 'src/features/product/container/ProductDisplay'
import ProductSettings from 'src/features/product/container/ProductSettings'

export default function ProductPage() {
    const {name} = useParams()
    const {price} = useParams()

    useLayoutEffect(() => {
      window.scrollTo(0, 0)
    })
  return (
    <div className=' dark:bg-gray-900 h-fit md:flex'>
        <ProductDisplay name={name}/>
        <ProductSettings name={name} price={price}/>

    </div>
  )
}
