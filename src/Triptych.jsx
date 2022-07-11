import React from "react";

export default function Triptych() {
  return (
    <div className="triptych">
      <img
        src="primrose_beignet_cropped.jpg"
        className="cupcake"
        alt="cupcake"
      />
      <img
        src="primrose_cake_cropped.jpg"
        className="cheesecake"
        alt="cheesecake"
      />
      <img src="lemon_bars.jpg" className="lemon" alt="lemonbars" />

      {/* <div className="mobile_pics">
        <img src="cupcake2.jpg" alt="cheesecake" />
        <img src="cheesecake.jpg" alt="cookies" />
      </div> */}
    </div>
  );
}
