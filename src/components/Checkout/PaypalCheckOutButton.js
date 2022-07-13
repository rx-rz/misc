import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
export default function PaypalCheckOutButton({ product }) {
    const handleApprove = (orderID) => {
        
    }
  return (
    <PayPalButtons
      style={{
        shape: "pill",
        color: "silver",
        tagline: "false",
        layout: "horizontal",
        height: 40,
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: product.description,
                    amount: {
                        value: product.price
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
