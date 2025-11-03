import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <footer className={`footer${isHome ? " home-footer" : ""}`}>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contacts</h4>
          <p>Email: @digitwinmonitoring</p>
          <p>Address: Corso Duca degli Abruzzi 24, Torino TO, Italia</p>
        </div>

        <div className="footer-section">
          <h4>Social</h4>
          <p>
            <a href="#">Instagram: @digitwinmonitoring</a> | <a href="#">LinkedIn: DigiTwin Monitoring - PoliTo</a> 
          </p>
        </div>
      </div>

      <hr />
      <p className="footer-bottom">&copy; DigiTwin Monitoring PoliTo {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
