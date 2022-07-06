import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import HomePage from '../pages/HomePage'
export default function index() {
  return (
   <Router>
    <Navbar/>
    <Routes>
        <Route element={<HomePage/>}/>
    </Routes>
   </Router>
  )
}
