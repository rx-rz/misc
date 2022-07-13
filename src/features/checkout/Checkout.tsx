import React from "react";
import PaypalCheckOutButton from "src/components/Checkout/PaypalCheckOutButton";
import { useStateContext } from "src/context/count-context";
import { ProductProps } from "src/types/Product";
import CartItem from "src/components/CartItem/CartItem";
export default function Checkout() {
  const { cartItems, totalPrice } = useStateContext();
  return (
    <div className="w-full md:w-9/12 lg:w-7/12  mx-auto mt-12 md:min-h-screen">
      <p className="text-4xl font-bold dark:text-primary ml-4 mt-4 mb-8">Cart Items</p>
      <div className="md:flex">
        <aside className="md:w-1/2 md:block ">
          {cartItems.map((cartItem: ProductProps) => (
            <div key={cartItem.name}>
              <CartItem
                name={cartItem.name}
                price={cartItem.price}
                quantity={cartItem.quantity}
              />
            </div>
          ))}
          <h1 className="text-center text-2xl font-medium dark:text-white">
            Total Price: <span className="text-primary font-extrabold">${totalPrice}</span>
          </h1>
        </aside>
        <div className="md:w-1/2 w-11/12 mx-auto my-3  h-fit dark:bg-white p-2 rounded-md border-2 border-primary">
          <PaypalCheckOutButton />
        </div>
      </div>
    </div>
  );
}
