import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
export default function PaypalCheckOutButton({ product }) {
    const [paidFor, setPaidFor] = useState(false)

    const handleApprove = (orderID) => {
        setPaidFor(true)
    }

    if(paidFor){
        alert("Paid!")
    }
  return (
    <PayPalButtons
    
      style={{
        shape: "pill",
        color: "silver",
        tagline: "false",
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                     
                }
            ]
        })
      }}



      onApprove={async(data, actions) => {
        const order = await actions.order.capture();
        console.log("order", order)

        handleApprove(data.orderID)
      }}

      onError={(err) => {
        alert(err)
      }}

      onCancel={() => {
        console.log("cancelled")
      }}
    />
  );
}
