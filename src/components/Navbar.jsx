import { Link } from "react-router-dom";
import "./Navbar.css";
import LocationPicker from "./LocationPicker";

const Navbar = ({ cartCount }) => {

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">

      {/* LEFT LOGO */}
      <div className="nav-left">
        🍔 FoodWeb
      </div>

      {/* CENTER MENU */}
      <ul className="nav-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* LOCATION */}
      <LocationPicker />

      {/* RIGHT SIDE */}
      <div className="nav-right">

        <Link to="/cart">
          🛒 Cart ({cartCount})
        </Link>

        {user && (
          <button
            onClick={handleLogout}
            className="logout-btn"
          >
            Logout
          </button>
        )}

      </div>

    </nav>
  );
};

export default Navbar;