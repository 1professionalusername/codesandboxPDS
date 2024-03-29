import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Gallery from "./pages/Gallery";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="order" element={<Order />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}
