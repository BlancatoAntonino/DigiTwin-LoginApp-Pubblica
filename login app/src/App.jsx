// App.jsx - gestione routing per Login, ContactUs, ecc.

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import "./style1.css";

const Home = () => (
  <main style={{ padding: "100px 20px" }}>
    <h1>Benvenuto nella Home Page!</h1>
    <p>Questa è la pagina iniziale della tua app React con stile DigiTwin.</p>
  </main>
);

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/register" element={<RegisterForm/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
