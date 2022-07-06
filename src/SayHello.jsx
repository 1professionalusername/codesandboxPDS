import React from "react";

export default function SayHello() {
  return (
    <div className="say_hello">
      <div className="text">
        <h3>Say Hello</h3>
        <h5>
          Primrose would love to be at your next event. Our baked goods are the
          perfect treats for birthdays, anniversaries, or any occasion. Get in
          touch today!
          <div className="button_div">
            <input type="button" class="button-72" value="GET IN TOUCH" />
          </div>
        </h5>
      </div>
      <div className="cupcake">
        <img src="cupcake2.jpg" alt="pastry" />
      </div>
    </div>
  );
}