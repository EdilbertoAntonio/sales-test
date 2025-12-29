import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Folios from "./pages/Folios";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Login"/>} />
        <Route path="/Login" element={<Login />} /> 
        <Route path="/Folios" element={<Folios />} /> 
      </Routes>
    </Router>
  )
}

export default App
