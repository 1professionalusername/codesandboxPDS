import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
// import Layout from "./components/Layout";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<Home />} />
        <Route path="order" element={<Order />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="events" element={<Events />} />
        <Route path="*" element={<NoPage />} />
        {/* </Route> */}
      </Routes>
    </Router>
  );
}
