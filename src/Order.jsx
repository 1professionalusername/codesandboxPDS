import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="title">
          <h1>Primrose</h1>
          <h3>Dessert Studios</h3>
        </div>
        <div className="nav">
          <nav>
            <h4>Home</h4>
            <h4>Order</h4>
            <h4>Gallery</h4>
          </nav>
        </div>
      </div>
      <hr></hr>
      <div className="top_banner"></div>
    </div>
  );
}
