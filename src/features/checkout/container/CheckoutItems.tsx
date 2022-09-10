import { useCartContext } from "src/context/cartContext";
import { CartItem } from "src/components/Elements/CartItem";
export default function CheckoutItems() {
  const { cartItems } = useCartContext()!;
  return (
    <div>
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
