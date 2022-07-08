import React from "react";
import Button from "src/components/Button/Button";
import { useStateContext } from 'src/context/count-context.js'
import Counter from "src/components/Counter/Counter";
type ProductSettingsProps = {
  name: string | undefined;
  price: number | string | undefined;
};


export default function ProductSettings({ name, price }: ProductSettingsProps) {
  const {onAdd, decreaseQuantity, increaseQuantity, quantity, cartItems} = useStateContext()
  const product = {
    name: name,
    price: price
  }
  return (
    <div className="md:w-4/12 flex justify-center items-center  md:h-maximalHeight flex-col h-halfHeight">
      <div className="w-3/4">
        <h1 className="gradient text-4xl font-medium md:text-5xl lg:text-8xl mb-6">
          {name}
        </h1>
        <p className="text-3xl font-medium md:text-4xl lg:text-7xl dark:text-white mb-4">
          ${price}
        </p>
        <button className="w-full font-extrabold bg-secondary  p-2 transition duration-300 hover:bg-primary" onClick={() => onAdd(product, quantity)}>
          ADD TO CART
        </button>
      </div>
      <div className='flex'>
      <p>Quantity: </p>
      <div>
        {quantity}
        {cartItems && cartItems.map((cartItem: ProductSettingsProps) => (
          <p>{cartItem.name} {cartItem.price}</p>
        ))}
        <button onClick={decreaseQuantity}>-</button>
        <p>0</p>
        <button onClick={increaseQuantity}>+</button>
      </div>
    </div>
    </div>
  );
}
