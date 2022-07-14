import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useStateContext } from "src/context/count-context";
import toast from "react-hot-toast";
export default function PaypalCheckOutButton() {
  const { totalPrice, setCartItems } = useStateContext();
  const [paidFor, setPaidFor] = useState(false);

  const handleApprove = (orderID) => {
    setPaidFor(true);
  };

  const successToast = () =>
    toast.success("Purchase made!", {
      style: { borderRadius: 0, color: "#725BFF", backgroundColor: "#ffffff" },
      duration: 1500,
    });
  const errorToast = () =>
    toast.error("An error occured! ❌", {
      style: { borderRadius: 0, color: "#725BFF", backgroundColor: "#ffffff" },
      duration: 1500,
    });

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
          successToast();
          localStorage.clear();
          setCartItems([]);
        }}
        onError={(err) => {
          errorToast();
        }}

        //   onCancel=(())
      />
    </div>
  );
}
