import React, { useRef } from "react";
import Button from "src/components/Button/Button";
import CartItem from "src/components/CartItem/CartItem";
import { useStateContext } from "src/context/count-context";
import { ProductProps } from "src/types/Product";
export default function CartList() {
  const { cartItems } = useStateContext();
  const cartRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col align-middle w-smallWidth md:w-mediumWidth lg:w-96 h-maximalHeight overflow-y-scroll" ref={cartRef}>

      <div>
        {cartItems.map((cartItem: ProductProps) => (
          <CartItem name={cartItem.name} price={cartItem.price} />
        ))}
      </div>
      <Button
        handleClick={() => console.log("sup")}
        className={
          "bg-secondary text-lg w-11/12 m-auto mt-4 mb-2 text-white font-bold py-1 transition-colors duration-300 hover:bg-primary hover:text-black"
        }
        text="Proceed To Checkout"
      />
    </div>
  );
}
