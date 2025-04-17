require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("./database");

const app = express();
app.use(express.json());
app.use(cors());

const SECRET_KEY = process.env.JWT_SECRET || "supersegreto";

// API DI LOGIN
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const sql = "SELECT * FROM users WHERE username = ?";
  db.get(sql, [username], async (err, user) => {
    if (err || !user) return res.status(401).json({ message: "Credenziali errate" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({ message: "Credenziali errate" });

    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
  });
});

//API DI REGISTRAZIONE
app.post("/api/register", async (req, res) => {
  const { name, surname, username, email, password } = req.body;

  if (!name||!surname||!username || !email || !password) {
    return res.status(400).json({ message: "Tutti i campi sono obbligatori" });
  }

  // Verifica se esiste già un utente con lo stesso username
  db.get("SELECT * FROM users WHERE username = ?", [username], async (err, existingUser) => {
    if (err) return res.status(500).json({ message: "Errore del server" });
    if (existingUser) return res.status(409).json({ message: "Username già in uso" });

    // Hash della password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Inserimento utente
    const sql = "INSERT INTO users (name,surname,username, email, password) VALUES ( ?, ?, ?, ?, ?)";
    db.run(sql, [name, surname, username, email, hashedPassword], function (err) {
      if (err) return res.status(500).json({ message: "Errore durante la registrazione" });

      // Restituisci un token (opzionale)
      const token = jwt.sign({ id: this.lastID, username }, SECRET_KEY, { expiresIn: "1h" });
      res.status(201).json({ message: "Registrazione avvenuta con successo", token });
    });
  });
});

//  AVVIO SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server avviato su http://localhost:${PORT}`));