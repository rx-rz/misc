import { ProductProps } from "src/types/Product"
import { getImage } from "src/features/home/api/getImage"

export default function CartItem({name, price}: ProductProps) {
  return (
    <div>
        <h1>{name}</h1>
        <h2>{price}</h2>
        <img src={getImage(name)} alt={name} />
    </div>
  )
}
