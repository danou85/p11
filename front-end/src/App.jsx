import React from "react";
// Importe BrowserRouter, Routes, et Route depuis 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";

import Login from "./pages/connexion";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;