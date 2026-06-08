import Navbar from "./components/Navbar";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* ================= HOME ================= */
function Home() {
  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>AKU YAZILIM</h1>
      <p>Yazılım, oyun ve dijital ürünler geliştiriyoruz.</p>

      <div className="buttons">
       <Link to="/projeler">Projeleri Gör</Link>
<Link to="/iletisim" className="outline">İletişim</Link>
      </div>
    </motion.div>
  );
}

/* ================= PROJECTS ================= */
function Projects() {
  return (
    <div className="page">
      <h1 className="title">Projeler</h1>

      <div className="grid">

        <motion.div
          className="card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <h3>Unity Korku Oyunu</h3>
          <p>Mobil ve PC için geliştirilmiş oyun prototipi.</p>
        </motion.div>

        <motion.div
          className="card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <h3>Kurumsal Web Site</h3>
          <p>AKU YAZILIM tarafından geliştirilen modern site.</p>
        </motion.div>

        <motion.div
          className="card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <h3>Mobil Uygulama</h3>
          <p>React Native ile geliştirme süreci.</p>
        </motion.div>

      </div>
    </div>
  );
}

/* ================= SERVICES ================= */
function Services() {
  return (
    <div className="page">
      <h1 className="title">Hizmetler</h1>
      <p>Web, mobil ve oyun geliştirme hizmetleri sunuyoruz.</p>
    </div>
  );
}

/* ================= CONTACT ================= */
function Contact() {
  return (
    <div className="page">
      <h1 className="title">İletişim</h1>
      <p>Bize ulaşmak için WhatsApp veya e-posta kullanabilirsiniz.</p>
    </div>
  );
}

/* ================= APP ================= */
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

      {/* WhatsApp Floating Button */}
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