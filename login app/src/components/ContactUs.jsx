// ContactUs.jsx - versione React in stile style1.css (senza Bootstrap)
import Header from "./Header";
import Footer from "./Footer";
//import "./style1.css";

const ContactUs = () => {
  return (
    <>
      <Header />
      <main className="contact-main-box">
        <div className="contact-left-rectangle">
          <h2 className="text-yellow">Contact Us!</h2>
          <p>Do you have any questions or just want to know more about the team?</p>
          <p>Contact us by sending an email by using the form below.</p>

          <form className="contact-form">
            <label>Full Name *</label>
            <input type="text" required />

            <label>Email *</label>
            <input type="email" required />

            <label>Subject *</label>
            <input type="text" required />

            <label>Message</label>
            <textarea rows="4" />

            <div className="checkbox">
              <input type="checkbox" id="terms" required />
              {/*<label>I agree to the <a href="#">Terms of Service</a></label>*/}
              <label htmlFor="terms">
                I agree to the <a href="#">Terms of Service</a>
              </label>
            </div>

            <button type="submit">Send</button>
          </form>
        </div>

        <div className="contact-right-column">
          <h4 className="text-center">Our Location</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11271.575160108112!2d7.647617861145024!3d45.06766557544601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478620b85cabc337%3A0xd97006264fbdaf1b!2sPolitecnico%20di%20Torino!5e0!3m2!1sit!2sit!4v1743024353109!5m2!1sit!2sit"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default ContactUs;