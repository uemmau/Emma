import { Component } from "react";
import { AuthProvider } from "./context/AuthContext";
import Home from "./Home";
import "./index.css";
import Usuario from "./Usuario";
function App() {
  return (
    <>
    <AuthProvider>
      <Home />
    </AuthProvider>
    </>
  );
}

export default App; 