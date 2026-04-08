import { Component } from "react";
import { AuthProvider } from "./context/AuthContext";
import Home from "./Home";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthProvider />} />
      </Routes>
</BrowserRouter>
    </AuthProvider>
  );
}

export default App; 