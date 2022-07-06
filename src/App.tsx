import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";

import HomePage from "./pages/HomePage";

export default function index() {
  return (
    <div className="bg-gray-900 font-Poppins text-white">
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}
