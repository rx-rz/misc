import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
export default function index() {
  return (
   <Router>
    <Routes>
        <Route element={<HomePage/>}/>
    </Routes>
   </Router>
  )
}
