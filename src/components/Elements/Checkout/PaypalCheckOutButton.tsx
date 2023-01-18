import { PayPalButtons } from "@paypal/react-paypal-js";
type CheckoutButtonProps = {
  totalPrice: number;
};
export default function PaypalCheckOutButton({
  totalPrice,
}: CheckoutButtonProps) {
  return (
    <PayPalButtons
      style={{
        shape: "rect",
        color: "gold",
        layout: "vertical",
        height: 55,
      }}
      /*function that creates an order gicen the toal price of the sale. */
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: "product.description",
              amount: {
                value: totalPrice.toString(),
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions!.order!.capture();
        console.log("order", order);
        // handleApprove(data.orderID);
      }}
    />
  );
}
