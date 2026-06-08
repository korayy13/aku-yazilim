import Navbar from "./components/Navbar";
import "./index.css";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";

/* ================= HOME ================= */
function Home() {
  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="hero-title">AKU YAZILIM</h1>

      <p className="hero-subtitle">
        Modern web, mobil ve oyun geliştirme stüdyosu
      </p>

      <p className="hero-text">
        Kullanıcı odaklı, hızlı ve ölçeklenebilir dijital çözümler geliştiriyoruz.
        Fikirlerinizi gerçek ürünlere dönüştürüyoruz.
      </p>

      <div className="hero-buttons">
        <Link to="/projeler" className="btn-primary">
          Projeleri Gör
        </Link>

        <Link to="/iletisim" className="btn-outline">
          İletişim
        </Link>
      </div>
    </motion.div>
  );
}

/* ================= PROJECTS ================= */
function Projects() {
  const projects = [
    {
      title: "Project NIGHTFALL (Unity Game)",
      desc: "Psikolojik korku temalı PC ve mobil oyun prototipi. Atmosfer odaklı deneyim üzerine geliştirilmiştir."
    },
    {
      title: "AKU Corporate Web System",
      desc: "SEO uyumlu, hızlı ve modern kurumsal web site altyapısı."
    },
    {
      title: "Mobile Service App",
      desc: "Kullanıcı odaklı işlem yönetimi sağlayan React Native tabanlı mobil uygulama."
    }
  ];

  return (
    <div className="page">
      <h1 className="title">Projeler</h1>

      <p style={{ marginBottom: "20px", opacity: 0.8 }}>
        Geliştirdiğimiz projeler, gerçek kullanım senaryoları için
        tasarlanmış modern yazılım çözümleridir.
      </p>

      <div className="grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ================= SERVICES ================= */
function Services() {
  return (
    <div className="page">
      <h1 className="title">Hizmetler</h1>

      <p>
        AKU Yazılım olarak uçtan uca dijital çözümler sunuyoruz.
      </p>

      <ul style={{ marginTop: "15px", opacity: 0.85 }}>
        <li>Web Site Geliştirme (Kurumsal & Startup)</li>
        <li>Mobil Uygulama Geliştirme</li>
        <li>Unity / Unreal Engine Oyun Geliştirme</li>
        <li>UI / UX Tasarım</li>
        <li>Yazılım Danışmanlığı</li>
      </ul>
    </div>
  );
}

/* ================= CONTACT ================= */
function Contact() {
  return (
    <div className="page">
      <h1 className="title">İletişim</h1>

      <p>
        Bir proje fikrin mi var? Bizimle iletişime geç, birlikte
        hayata geçirelim.
      </p>

      <div style={{ marginTop: "20px", opacity: 0.9 }}>
        <p>📞 WhatsApp: 905401500313</p>
        <p>📧 Email: info@akuyazilim.com</p>
        <p>📍 Istanbul, Türkiye</p>
      </div>
    </div>
  );
}

/* ================= APP ================= */
export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projeler" element={<Projects />} />
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>

      <a
        href="https://wa.me/905401500313"
        className="whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
    </>
  );
}