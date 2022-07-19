import React from "react";
import Layout from "../pages/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Brownies from "../components/Brownies";
import SayHello from "../components/SayHello";
import Triptych from "../components/Triptych";

function Home() {
  return (
    <div className="body">
      <Header />
      {/* <Layout /> */}
      <Brownies />
      <SayHello />
      <Triptych />
      <Footer />
    </div>
  );
}

export default Home;
