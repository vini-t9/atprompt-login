import React from "react";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Forget from "./components/forget/forget";
import {
  Routes,
  Route
} from "react-router-dom";
import { useEffect } from 'react';



function App() {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault()
    }
    document.addEventListener("contextmenu", handleContextMenu)
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
    }
  }, [])
  return (
    <div>
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/forget" element={<Forget/>} />
      </Routes>
    </div>

  );
}

export default App;