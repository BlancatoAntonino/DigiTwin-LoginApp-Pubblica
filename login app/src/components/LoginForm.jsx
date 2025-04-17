import { useState } from "react";
import { Link } from "react-router-dom";


const LoginForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "", remember: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: formData.username, password: formData.password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login riuscito:", data);
        localStorage.setItem("token", data.token);
        alert("Login effettuato con successo!");
      } else {
        alert(data.message || "Errore di login");
      }
    } catch (error) {
      console.error("Errore di rete:", error);
      alert("Errore di connessione al server");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-header">
          <h1>DigiTwin Monitoring Team</h1>
          <p>Inserire email o username e password forniti dal team per continuare.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Nome utente</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />

          <div className="checkbox">
            <input type="checkbox" id="remember" name="remember" checked={formData.remember} onChange={handleChange} />
            <label htmlFor="remember">Non ricordare l'accesso</label>
          </div>

          <button type="submit">Accedi</button>
        </form>

        <div className="login-options">
          <a href="#">Password dimenticata?</a>
          <Link to="/register">Registrati</Link>
          <Link to="/contact">Serve aiuto?</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;