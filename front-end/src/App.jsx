import React from "react";
// Importe BrowserRouter, Routes, et Route depuis 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;