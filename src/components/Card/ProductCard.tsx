import React from 'react'
type CardProps = {
    name?: string,
    price?: number,

    imageUrl: string
}
export default function ProductCard({name, price, imageUrl}: CardProps) {
  return (
    <div className='w-32 sm:w-22 md:w-44 lg:w-80 transition-all duration-300 hover:translate-x-3 hover:-translate-y-3  hover:shadow-xl shadow-black'>
        <img className='w-fit transition-shadow duration-300 hover:shadow-secondary ' alt={name} src={imageUrl}/>
        <div className="text-white bottom-0 sm:flex sm:items-center sm:justify-between font-AlbertSans p-2 border-2">
            <p className='dark:text-white text-black font-extrabold text-xl'>{name}</p>
            {price && <p className='text-primary font-extrabold'>${price}</p> }
        </div>
    </div>
  )
}
