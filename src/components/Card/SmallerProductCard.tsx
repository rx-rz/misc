import React from 'react'
type CardProps = {
    name?: string,
    price?: number,
    imageUrl: string,
}
export default function SmallerProductCard({name, price, imageUrl}: CardProps) {
  return (
    <div className='w-14 md:w-24  lg:w-36 mt-4'>
        <img className='w-fit rounded-xl transition-shadow duration-300 hover:shadow-secondary shadow-2xl' alt={name} src={imageUrl}/>
        <div className="text-white bottom-0 sm:flex sm:items-center sm:justify-between">
            {name && <p className='dark:text-white text-black font-extrabold text-xl'>{name}</p>}
            {price && <p className='gradient font-extrabold'>${price}</p> }
        </div>
    </div>
  )
}
