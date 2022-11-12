import { useCartContext } from "src/context/cartContext";
import { CartItem } from "src/components";
export const  CheckoutItems = () => {
  const { cartItems } = useCartContext()!;
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-20 my-[15px]">
      {cartItems.map((cartItem) => (
        <CartItem
          key={cartItem.name}
          name={cartItem.name}
          price={cartItem.price}
          quantity={cartItem.quantity}
        />
      ))}
    </div>
  );
}
