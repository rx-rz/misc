import { ProductProps } from "src/types/Product"

export default function CartItem(product: ProductProps) {
  return (
    <div>
        <h1>{product.name}</h1>
        <h2>{product.price}</h2>
        
    </div>
  )
}
