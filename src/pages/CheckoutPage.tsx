import PaypalCheckOutButton from "src/components/Elements/Checkout/PaypalCheckOutButton";
import { useCartContext } from "src/context/cartContext";
import CheckoutItems from "src/features/checkout/container/CheckoutItems";

export default function CheckoutPage() {
  const { totalPrice, totalQuantities } = useCartContext()!;
  return (
    <div className="flex  justify-evenly min-h-screen">
      <div className="hidden md:w-6/12 md:block">
        <CheckoutItems />
      </div>
      <div className="w-full md:w-4/12 my-4 ">
        <div className="md:sticky top-16">
          <div
            className="bg-primary text-white  h-96 mb-4 
        text-center flex flex-col content-between "
          >
            <div className="mb-10 mt-10 md:mt-5">
              <h1 className="text-4xl ">Avatars Bought:</h1>
              <h2 className="text-8xl">{totalQuantities}</h2>
            </div>
            <div>
              <h1 className="text-4xl">Total Price:</h1>
              <h2 className="text-8xl">${totalPrice}</h2>
            </div>
          </div>
          <div className="sticky top-10">
            <PaypalCheckOutButton totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    </div>
  );
}
