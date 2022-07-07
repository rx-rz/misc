import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Layout/Navbar";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";


export default function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => curr === "light" ? "dark" : "light")
  }


  return (
      <div className={`dark:bg-gray-900 font-Poppins dark:text-white m-0 bg-slate-100 ${theme}`}>
        <Router>
          <Navbar handleChange={toggleTheme} theme={theme}/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:name/:price" element={<ProductPage />} />

          </Routes>
          <Footer />
        </Router>
      </div>

  );
}
