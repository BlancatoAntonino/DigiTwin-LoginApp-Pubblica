const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contacts</h4>
          <p>Email: xxx@xxx.xx</p>
          <p>Address: Via xx xx, Torino TO</p>
        </div>

        <div className="footer-section">
          <h4>Social</h4>
          <p>
            <a href="#">Instagram</a> | <a href="#">LinkedIn</a> | <a href="#">YouTube</a>
          </p>
        </div>
      </div>

      <hr />
      <p className="footer-bottom">&copy; DigiTwin Monitoring PoliTo {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;