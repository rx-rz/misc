import React from "react";
import { StateContextProvider } from "src/context/countContext";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "src/components";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AVK0UYz2rvbeLW2w9LdWYip6pQkSg-3SjNgR-l14IUJuXW7oeD1ZYkaguJCKllxe7sBhEYaP-biBoTwQ",
      }}
    >
      <StateContextProvider>
        <Router>
          <>{children}</>
          <Footer />
        </Router>
      </StateContextProvider>
    </PayPalScriptProvider>
  );
};
