import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useStateContext } from "src/context/count-context";
export default function PaypalCheckOutButton() {
  const { totalPrice } = useStateContext();
  const [paidFor, setPaidFor] = useState(false);

  const handleApprove = (orderID) => {
    setPaidFor(true);
  };

  if (paidFor) {
    alert("Paid!");
  }
  return (
    <div>
      <PayPalButtons
        style={{
          shape: "rect",
          color: "blue",
          tagline: "false",
          layout: "vertical",
          label: "buynow",
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: totalPrice,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          console.log("order", order);

          handleApprove(data.orderID);
        }}
        onError={(err) => {
          alert(err);
        }}

        //   onCancel=(())
      />
    </div>
  );
}
