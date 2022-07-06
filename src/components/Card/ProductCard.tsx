import React from 'react'
type CardProps = {
    name: string,
    price: string,
    imageUrl: string
}
export default function ProductCard({name, price, imageUrl}: CardProps) {
  return (
    <div className='w-1/2'>
        <img className='w-fit max-w-full relative' alt={name} src={imageUrl}/>
        <div className='flex absolute text-white'>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    </div>
  )
}
