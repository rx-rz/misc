import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StateContextProvider } from "src/context/count-context.js";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Checkout from "./features/checkout/Checkout";

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`dark:bg-gray-900 font-Poppins dark:text-white m-0 bg-slate-100 ${theme}`}
    >
      <PayPalScriptProvider options={{"client-id": "AVK0UYz2rvbeLW2w9LdWYip6pQkSg-3SjNgR-l14IUJuXW7oeD1ZYkaguJCKllxe7sBhEYaP-biBoTwQ", }}>
        <StateContextProvider>
          <Router>
            <Layout handleChange={toggleTheme} theme={theme}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:name/:price" element={<ProductPage />} />
                <Route path="/checkout" element={<Checkout/>}/>
              </Routes>
              <Footer />
            </Layout>
          </Router>
        </StateContextProvider>
      </PayPalScriptProvider>
    </div>
  );
}
