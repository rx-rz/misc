import { Link } from "react-router-dom";
import { CartItem } from "src/components";
import { useCartContext } from "src/context/cartContext";
import { ProductProps } from "src/types/Product";
export const  CartList = () => {
  const { cartItems, totalPrice } = useCartContext()!;

  return (
    <div className="flex flex-col align-middle h-screen">
      {cartItems.length > 0 ? (
        <div>
          <div
            className="grid xl:grid-cols-2 gap-10 
          md:grid-cols-1 mb-16 mt-10"
          >
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
          <h1
            className="dark:text-tertiary font-extrabold 
          text-2xl w-fit mx-auto mt-4 font-AlbertSans"
          >
            Total Price:<span className="text-primary dark:text-tertiary"> ${totalPrice}</span>
          </h1>
          <div className="flex justify-center">
            <Link
              to="/checkout"
              className="  bg-primary text-lg w-11/12 mx-auto
               mt-4 font-AlbertSans text-white dark:bg-tertiary dark:text-black font-bold pt-1 
               mb-8 py-2 transition-colors duration-300
               text-center  "
            >
              Proceed To Checkout
            </Link>
          </div>
        </div>
      ) : (
        <p
          className="w-5/6 mx-auto text-center
         text-2xl mt-8 dark:text-white"
        >
          You have not added any items to the cart.
        </p>
      )}
    </div>
  );
}
