import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StateContextProvider } from "./context/countContext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Layout from "./components/Layout/Layout";
import { Footer } from "./components/Footer";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const ProductPage = React.lazy(() => import("./pages/ProductPage"));
const Checkout = React.lazy(() => import("./features/checkout/Checkout"));

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`dark:bg-gray-900 font-Poppins dark:text-white m-0 bg-slate-100 ${theme}`}
    >
      <PayPalScriptProvider
        options={{
          "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID!,
        }}
      >
        <StateContextProvider>
          <Router>
            <Layout handleChange={toggleTheme} theme={theme}>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/:name/:price" element={<ProductPage />} />

                  <Route path="/checkout" element={<Checkout />} />
                </Routes>
              </Suspense>
              <Footer />
            </Layout>
          </Router>
        </StateContextProvider>
      </PayPalScriptProvider>
    </div>
  );
}
