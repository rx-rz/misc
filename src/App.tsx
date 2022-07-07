import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Layout/Navbar";

import HomePage from "./pages/HomePage";

export default function index() {
  return (
    <div className="dark:bg-gray-900 font-Poppins dark:text-white m-0 bg-slate-100 dark">
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}
