import React from 'react'
type ProductCardProps = {
    productName: string,
    productPrice: string,
    productImageUrl: string
}
export default function ProductCard({productImageUrl, productName, productPrice}: ProductCardProps) {
  return (
    <div>ProductCard</div>
  )
}
