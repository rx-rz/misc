import React from "react";
import { StateContextProvider } from "src/context/countContext";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "src/components";
type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (

      <StateContextProvider>
        <Router>
          <>{children}</>
          <Footer />
        </Router>
      </StateContextProvider>
  );
};
