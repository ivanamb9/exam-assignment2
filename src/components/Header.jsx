import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/my-plants" className="nav-link">My Plants</Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>
    </header>
  );
}

export default Header;