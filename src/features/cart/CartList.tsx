import React, { useRef } from "react";
import PaypalCheckOutButton from "src/components/Checkout/PaypalCheckOutButton";
import CartItem from "src/components/CartItem/CartItem";
import { useStateContext } from "src/context/count-context";
import { ProductProps } from "src/types/Product";
export default function CartList() {

  const { cartItems, totalPrice } = useStateContext();
  const cartRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="flex flex-col align-middle w-smallWidth md:w-mediumWidth lg:w-96"
      ref={cartRef}
    >
      <div>
        {cartItems.map((cartItem: ProductProps) => (
          <div key={cartItem.name}>
            <CartItem name={cartItem.name} price={cartItem.price} quantity={cartItem.quantity}/>
          </div>
        ))}
      </div>
      <h1 className="dark:text-slate-100 font-extrabold text-2xl w-fit mx-auto mt-4 font-AlbertSans">
        Total Price:<span className="text-primary"> ${totalPrice}</span>
        
      </h1>
      {/* <Button
        handleClick={() => console.log("sup")}
        className={
          "bg-primary text-lg w-11/12 m-auto mt-4 mb-2 font-AlbertSans text-black font-bold py-1 transition-colors duration-300  hover:text-white"
        }
        text="Proceed To Checkout"
      /> */}
    </div>
  );
}
