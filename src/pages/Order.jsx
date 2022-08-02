import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Order() {
  const [name, setName] = useState("");

  return (
    <div className="body">
      <Header />
      <Nav />
      <form>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
      <Footer />
    </div>
  );
}
