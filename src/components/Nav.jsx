import { Outlet, Link } from "react-router-dom";

//Renders Navigation links
export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <h4>HOME</h4>
      </Link>
      <Link to="/gallery">
        <h4>GALLERY</h4>
      </Link>
      <Link to="/order">
        <h4>ORDER</h4>
      </Link>
      <Outlet />
    </nav>
  );
}
