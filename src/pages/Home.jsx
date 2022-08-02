import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Brownies from "../components/Brownies";
import SayHello from "../components/SayHello";
import Triptych from "../components/Triptych";

//Landing page. Displays components
function Home() {
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

export default Home;
