import React, { Suspense } from "react";
import { CartContextProvider } from "src/context/cartContext";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer, SuspenseFallback } from "src/components";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <PayPalScriptProvider
        options={{
          "client-id": `${process.env.REACT_APP_PAYPAL_CLIENT_ID}`,
        }}
      >
        <CartContextProvider>
          <Router>
            <>{children}</>
            <Footer />
          </Router>
        </CartContextProvider>
      </PayPalScriptProvider>
    </Suspense>
  );
};
