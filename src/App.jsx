import Navbar from "./components/Navbar";
import "./index.css";
import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="hero fade show">
      <h1>AKU YAZILIM</h1>
      <p>Yazılım, oyun ve dijital ürünler geliştiriyoruz.</p>

      <div className="buttons">
        <a href="/projeler">Projeleri Gör</a>
        <a href="/iletisim" className="outline">İletişim</a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="page">
      <h1 className="title">Projeler</h1>

      <div className="grid">
        <div className="card">
          <h3>Unity Korku Oyunu</h3>
          <p>Mobil ve PC için geliştirilmiş oyun prototipi.</p>
        </div>

        <div className="card">
          <h3>Kurumsal Web Site</h3>
          <p>AKU YAZILIM tarafından geliştirilen modern site.</p>
        </div>

        <div className="card">
          <h3>Mobil Uygulama</h3>
          <p>React Native ile geliştirme süreci.</p>
        </div>
      </div>
    </div>
  );
}

function Services() {
  return <h1 className="title">Hizmetler</h1>;
}

function Contact() {
  return <h1 className="title">İletişim</h1>;
}

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projeler" element={<Projects />} />
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>
      <a
  href="https://wa.me/905401500313"
  className="whatsapp"
  target="_blank"
>
  WhatsApp
</a>
    </>
    
  );
  
}
