import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">AKU YAZILIM</div>

      <nav>
        <Link to="/">Ana Sayfa</Link>
        <Link to="/projeler">Projeler</Link>
        <Link to="/hizmetler">Hizmetler</Link>
        <Link to="/iletisim">İletişim</Link>
      </nav>
    </header>
  );
}