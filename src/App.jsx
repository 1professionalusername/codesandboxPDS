import React from "react";
import "./styles.css";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import Brownies from "./Brownies";
import SayHello from "./SayHello";
import Triptych from "./Triptych";

export default function App() {
  return (
    <div className="body">
      <Header />
      <Nav />
      <Brownies />
      <SayHello />
      <Triptych />
      <Footer />
    </div>
  );
}
