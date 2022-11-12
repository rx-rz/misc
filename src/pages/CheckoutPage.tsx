import PaypalCheckOutButton from "src/components/Elements/Checkout/PaypalCheckOutButton";
import { useCartContext } from "src/context/cartContext";
import { CheckoutItems } from "src/features";

export default function CheckoutPage() {
  document.title = "Misc Avatars: Checkout Page";
  const { totalPrice, totalQuantities } = useCartContext()!;
  return (
    <section className="flex  justify-evenly min-h-screen">
      <main className="hidden md:w-6/12 md:block">
        <CheckoutItems />
      </main>
      <aside className="w-full md:w-4/12 my-4 ">
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
      </aside>
    </section>
  );
}
