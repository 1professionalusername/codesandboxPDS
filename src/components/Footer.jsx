import React from "react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer" alt="contact">
      <h1 className="footer_text">Follow Us</h1>
      <div className="social">
        <a href="https://www.instagram.com/gleauxsweetshop/">
          <FaInstagram />{" "}
        </a>
      </div>
    </div>
  );
}
