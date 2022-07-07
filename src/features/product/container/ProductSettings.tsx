import React from 'react'
import Button from 'src/components/Button/Button'
type ProductSettingsProps = {
    name: string | undefined,
    price: number | string | undefined
}

export default function ProductSettings({name, price}: ProductSettingsProps) {
  return (
    <div className='sm:w-1/2 text-center'>
        <h1 className='gradient text-3xl font-medium'>{name}</h1>
        <p>{price}</p>
        <Button handleClick={() => void(0)}>Add To Cart</Button>
    </div>
  )
}
