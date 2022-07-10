import React from "react";
import Button from "src/components/Button/Button";
import CartItem from "src/components/CartItem/CartItem";
import { useStateContext } from "src/context/count-context";
import { ProductProps } from "src/types/Product";
export default function CartList() {
  const { cartItems } = useStateContext();
  return (
    <div className="flex flex-col align-middle">
      <Button
        handleClick={() => console.log("")}
        text="CLOSE CART"
        className=" w-4/12 ml-1 mt-2 font-bold "
      />
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
