import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">AKU YAZILIM</div>

      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/projeler">Projeler</NavLink>
        <NavLink to="/hizmetler">Hizmetler</NavLink>
        <NavLink to="/iletisim">İletişim</NavLink>
      </div>
    </div>
  );
}