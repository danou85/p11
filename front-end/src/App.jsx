import React from "react";
// Importe BrowserRouter, Routes, et Route depuis 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";

import Login from "./pages/connexion";

import User from "./pages/user";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;