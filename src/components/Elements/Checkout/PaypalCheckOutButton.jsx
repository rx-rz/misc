import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
export default function PaypalCheckOutButton({totalPrice}) {
    const handleApprove = (orderID) => {
      
    }
  return (
    <PayPalButtons
      style={{
        shape: "rect",
        color: "gold",
        tagline: "false",
        layout: "vertical",
        height: 55,
        size: ""
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: "product.description",
                    amount: {
                        value: totalPrice
                    }
                }
            ]
        })
      }}
      onApprove={async(data, actions) => {
        const order = await actions.order.capture();
        console.log("order", order)

        handleApprove(data.orderID)
      }}
    />
  );
}