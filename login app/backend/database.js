const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./users.db", (err) => {
  if (err) console.error("Errore nella connessione al DB:", err);
  else console.log("Database SQLite connesso!");
});

// Creazione tabella utenti se non esiste
db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      surname TEXT,
      username TEXT UNIQUE,
      email TEXT UNIQUE,
      password TEXT
    )`
  );
});

module.exports = db;