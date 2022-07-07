import React from 'react'
import Button from 'src/components/Button/Button'
import {ProductsOne} from '../api/products'
type ProductSettingsProps = {
    name: string | undefined
}

export default function ProductSettings({name}: ProductSettingsProps) {
  return (
    <div className='sm:w-1/2 text-center'>
        <h1 className='gradient text-3xl font-medium'>{name}</h1>
        <p></p>
        <Button handleClick={() => void(0)}>Add To Cart</Button>
    </div>
  )
}
