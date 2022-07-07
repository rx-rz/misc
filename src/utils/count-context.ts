import { createContext } from "react"
export type CartItemsProps = {
    name: string,
    price: number,
    quantity: number
}[]

const CartItems: CartItemsProps = [{name: '', price: 0, quantity: 0}]
const CartItemsContext = createContext(CartItems)

