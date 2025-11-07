import { useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <footer className={`footer${isHome ? " home-footer" : ""}`}>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contacts</h4>
          <p>Email: digitwin.monitoring@gmail.com </p>
          <p>Address: Corso Duca degli Abruzzi 24, Torino TO, Italia</p>
        </div>

        <div className="footer-section">
          <h4>Social</h4>
          <p>
            Instagram:{" "}
            <a
              href="https://www.instagram.com/digitwin.monitoring/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @digitwinmonitoring
            </a>
            <br />
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/company/digitwinmonitoring/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @digitwinmonitoring
            </a>
          </p>
        </div>
      </div>

      <hr />
      <p className="footer-bottom">&copy; DigiTwin Monitoring PoliTo {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
