import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="home-header">
      <div className="logo">
        {/* Se hai un'immagine logo, puoi sostituire <span> con <img src="logo.png" alt="logo" /> */}
        <span>DigiTwin Monitoring</span>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/chi-siamo">Chi siamo</Link>
        <Link to="/events">Events</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
