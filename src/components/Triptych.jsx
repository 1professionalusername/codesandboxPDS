import React from "react";

//Renders the three images near the bottom of the page
export default function Triptych() {
  return (
    <div className="triptych">
      <img src="primrose_beignet.jpg" className="beignets" alt="beignets" />
      <img src="cake_slice.jpg" className="cake_slice" alt="slice of cake" />
      <img src="primrose_doughnuts.jpg" className="doughnuts" alt="doughnuts" />
    </div>
  );
}
