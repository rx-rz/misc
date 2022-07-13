import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Button from "src/components/Button/Button";
import CartItem from "src/components/CartItem/CartItem";
import { useStateContext } from "src/context/count-context";
import { ProductProps } from "src/types/Product";
export default function CartList() {
  const { cartItems, totalPrice } = useStateContext();
  const cartRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="flex flex-col align-middle w-smallWidth md:w-mediumWidth lg:w-96 h-screen"
      ref={cartRef}
    >
      {cartItems.length > 0 ? (
        <div>
          <div>
            {cartItems.map((cartItem: ProductProps) => (
              <div key={cartItem.name}>
                <CartItem
                  name={cartItem.name}
                  price={cartItem.price}
                  quantity={cartItem.quantity}
                />
              </div>
            ))}
          </div>
          <h1 className="dark:text-slate-100 font-extrabold text-2xl w-fit mx-auto mt-4 font-AlbertSans">
            Total Price:<span className="text-primary"> ${totalPrice}</span>
          </h1>
          <div className="flex justify-center">
            <Link
              to="/checkout"
              className="bg-primary text-lg w-11/12 mx-auto mt-4 font-AlbertSans text-black font-bold pt-1 mb-4 transition-colors duration-300 text-center  hover:text-white"
            >
              Proceed To Checkout
            </Link>
          </div>
        </div>
      ) : (
        <p className="w-5/6 mx-auto text-center text-2xl mt-8">
          You have not added any items to the cart. 😶
        </p>
      )}
    </div>
  );
}
