import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name:"",
    surname:"",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Le password non corrispondono.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          surname: formData.surname,
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Registrazione riuscita:", data);
        alert("Registrazione completata con successo!");
      } else {
        alert(data.message || "Errore durante la registrazione.");
      }
    } catch (error) {
      console.error("Errore di rete:", error);
      alert("Errore di connessione al server.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-header">
          <h1>Registrazione</h1>
          <p>Crea un account per accedere al sistema DigiTwin Monitoring.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="surname">Cognome</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
          />

          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label htmlFor="confirmPassword">Conferma Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit">Registrati</button>
        </form>

        <div className="login-options">
          {/*<a href="#">Hai già un account?</a>*/}
          <Link to="/login">Hai già un account?</Link>
          {/*<a href="#">Serve aiuto?</a>*/}
          <Link to="/contact">Serve aiuto?</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
