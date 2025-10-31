// App.jsx - gestione routing per Login, ContactUs, ecc.

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import AboutPage, { ChiSiamoSection } from "./components/About";
import EventsPage, { EventsSection } from "./components/Events";
import GalleryPage, { GallerySection } from "./components/Gallery";
import "./style1.css";

const Home = () => (
  <main className="home-container">
    <section className="home-section hero-section" id="hero">
      <h1 className="hero-title">
        DigiTwin Monitoring
        <span className="hero-highlight">Construction from Future</span>
      </h1>
      <p className="hero-subtitle">
        Innovazione, sostenibilità e digitalizzazione al servizio del monitoraggio strutturale.
      </p>
      <p className="section-text">
        DigiTwin Monitoring è un team multidisciplinare del Politecnico di Torino che integra tecnologie di
        monitoraggio strutturale e modellazione digitale BIM per creare veri e propri gemelli digitali delle
        strutture reali.
      </p>
      <p className="section-text">
        L’obiettivo è migliorare la sicurezza, ottimizzare la gestione e ridurre i costi di manutenzione degli
        edifici e delle infrastrutture, grazie all’utilizzo di sensori IoT, analisi dati e visualizzazioni in tempo
        reale.
      </p>
      <div className="cta-buttons">
        <a href="#chi-siamo" className="cta-button primary">
          Scopri di più
        </a>
        <Link to="/register" className="cta-button secondary">
          Unisciti a noi
        </Link>
      </div>
    </section>

    <ChiSiamoSection />

    <section className="home-section" id="progetto-tecnico">
      <h2 className="section-title">Progetto tecnico</h2>
      <p className="section-text">
        Il cuore del nostro lavoro è lo sviluppo di un’interfaccia digitale user-friendly in grado di rappresentare in
        tempo reale lo stato di salute di una struttura.
      </p>
      <p className="section-text">
        Grazie a una rete di sensori IoT, i dati raccolti (vibrazioni, deformazioni, temperatura, umidità, ecc.)
        vengono integrati all’interno di un modello 3D BIM, che funge da “gemello digitale” della struttura reale.
      </p>
      <p className="section-text">Questo sistema permette di:</p>
      <ul className="bullet-list">
        <li>monitorare costantemente lo stato strutturale;</li>
        <li>rilevare anomalie e variazioni significative;</li>
        <li>migliorare la gestione e la sicurezza nel tempo.</li>
      </ul>
      <p className="section-text">
        L’approccio DigiTwin coniuga ricerca e applicazione pratica, aprendo la strada alla manutenzione predittiva e
        alla digitalizzazione intelligente dell’ambiente costruito.
      </p>
    </section>

    <section className="home-section" id="applicazioni">
      <h2 className="section-title">Applicazioni e casi studio</h2>
      <p className="section-text">
        Le soluzioni di DigiTwin Monitoring vengono sperimentate su edifici storici e infrastrutture moderne, in
        collaborazione con enti e docenti del Politecnico.
      </p>
      <p className="section-text">Alcuni esempi di applicazione:</p>
      <div className="highlight-card">
        <h3>Ponte di Corso Luigi Einaudi</h3>
        <p>
          Implementazione di sensori IoT e digital twin per il monitoraggio dinamico. Questo progetto pilota
          rappresenta un laboratorio reale dove sperimentare tecnologie innovative per la sicurezza e la
          sostenibilità.
        </p>
      </div>
    </section>

    <EventsSection />

    <GallerySection />
  </main>
);

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chi-siamo" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
