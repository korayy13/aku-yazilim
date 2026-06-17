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
      {/* Hizmetler */}
      <section className="home-section">
        <h2>Hizmetlerimiz</h2>

        <div className="grid">
          <div className="card">
            <h3>🌐 Web Geliştirme</h3>
            <p>
              Modern, hızlı ve SEO uyumlu kurumsal web siteleri geliştiriyoruz.
            </p>
          </div>

          <div className="card">
            <h3>📱 Mobil Uygulama</h3>
            <p>
              Android ve iOS için kullanıcı dostu mobil uygulamalar geliştiriyoruz.
            </p>
          </div>

          <div className="card">
            <h3>🎮 Oyun Geliştirme</h3>
            <p>
              Unity ve Unreal Engine ile oyun projeleri üretiyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Neden Biz */}
      <section className="home-section">
        <h2>Neden AKU YAZILIM?</h2>

        <div className="grid">
          <div className="card">
            <h3>⚡ Hızlı Geliştirme</h3>
            <p>Projeleri gereksiz süreçlere boğmadan hızlı ilerletiyoruz.</p>
          </div>

          <div className="card">
            <h3>💡 Modern Teknolojiler</h3>
            <p>React, Node.js, Unity ve güncel teknolojiler kullanıyoruz.</p>
          </div>

          <div className="card">
            <h3>🤝 Uzun Vadeli Destek</h3>
            <p>Proje tesliminden sonra da destek vermeye devam ediyoruz.</p>
          </div>
        </div>
      </section>
      {/* İstatistikler */}
<section className="stats-section">
  <div className="stat-card">
    <h2>10+</h2>
    <p>Tamamlanan Proje</p>
  </div>

  <div className="stat-card">
    <h2>3+</h2>
    <p>Farklı Platform</p>
  </div>

  <div className="stat-card">
    <h2>100%</h2>
    <p>Tutku ve Özveri</p>
  </div>
</section>
{/* Hakkımızda */}
<section className="about-section">
  <div className="about-content">
    <h2>Biz Kimiz?</h2>

    <p>
      AKU YAZILIM, modern web siteleri, mobil uygulamalar ve oyun
      projeleri geliştirmek amacıyla kurulmuş bağımsız bir yazılım
      stüdyosudur.
    </p>

    <p>
      Amacımız; performanslı, kullanıcı dostu ve uzun ömürlü dijital
      ürünler geliştirerek fikirleri gerçeğe dönüştürmektir.
    </p>

    <p>
      Her projeye sadece bir iş olarak değil, birlikte büyüyeceğimiz
      bir ortaklık olarak bakıyoruz.
    </p>
  </div>
</section>
{/* Çalışma Süreci */}
<section className="process-section">
  <h2>Nasıl Çalışıyoruz?</h2>

  <div className="grid">
    <div className="card">
      <h3>💡 Fikir</h3>
      <p>
        Projenizi dinliyor, ihtiyaçlarınızı analiz ediyoruz.
      </p>
    </div>

    <div className="card">
      <h3>🎨 Tasarım</h3>
      <p>
        Modern ve kullanıcı odaklı arayüzler tasarlıyoruz.
      </p>
    </div>

    <div className="card">
      <h3>⚙️ Geliştirme</h3>
      <p>
        Güçlü ve ölçeklenebilir yazılım altyapısı oluşturuyoruz.
      </p>
    </div>

    <div className="card">
      <h3>🚀 Yayınlama</h3>
      <p>
        Projenizi yayına alıyor ve destek vermeye devam ediyoruz.
      </p>
    </div>
  </div>
  {/* Teknolojiler */}
<section className="tech-section">
  <h2>Kullandığımız Teknolojiler</h2>

  <div className="tech-grid">
    <div className="tech-card">React</div>
    <div className="tech-card">Node.js</div>
    <div className="tech-card">Firebase</div>
    <div className="tech-card">Unity</div>
    <div className="tech-card">Unreal Engine</div>
    <div className="tech-card">Figma</div>
  </div>
</section>
</section>
    </motion.div>

  );
}

/* ================= PROJECTS ================= */
function Projects() {
  const projects = [
    {
      title: "Project NIGHTFALL",
      desc: "Psikolojik korku oyunu.",
      img: "https://images.unsplash.com/photo-1604079628040-94301bb21b91"
    },
    {
      title: "Corporate Website",
      desc: "Kurumsal modern web sitesi.",
      img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d"
    },
    {
      title: "Mobile App",
      desc: "React Native uygulama.",
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
    }
  ];

  return (
    <div className="page">
      <h1 className="title">Projeler</h1>

      <div className="grid">
        {projects.map((p, i) => (
          <motion.div key={i} className="card">
            <img src={p.img} alt="" className="project-img" />
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
      <footer className="footer">
  <h3>AKU YAZILIM</h3>

  <p>
    Modern web, mobil uygulama ve oyun geliştirme çözümleri üretiyoruz.
  </p>

  <div className="footer-links">
    <a href="#">Instagram</a>
    <a href="#">GitHub</a>
    <a href="#">LinkedIn</a>
  </div>

  <small>
    © 2024 AKU YAZILIM - Tüm Hakları Saklıdır.
  </small>
</footer>

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