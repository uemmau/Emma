import { Component } from "react";
import { AuthProvider } from "./context/AuthContext";
import Home from "./Home";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";

function App() {
  return (
    <AuthProvider>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
</BrowserRouter>
    </AuthProvider>
  );
}

export default App; 