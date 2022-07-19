import { Outlet, Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <h4>HOME</h4>
      </Link>
      <Link to="/order">
        <h4>ORDER</h4>
      </Link>
      <Link to="/gallery">
        <h4>GALLERY</h4>
      </Link>
      <Link to="/events">
        <h4>EVENTS</h4>
      </Link>
      <Outlet />
    </nav>
  );
}
