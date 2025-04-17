// createUser.js - Script per inserire manualmente un utente nel database SQLite con password hashata

// Importa il modulo bcryptjs per l'hash della password e il modulo sqlite3 per l'accesso al database
const bcrypt = require('bcryptjs');
const sqlite3 = require('sqlite3').verbose();

// Dati dell'utente da inserire
const name = 'Antonino';
const surname = 'Blancato';
const username = 'AntoninoBlancato';
const email = 's347975@studenti.polito.it';
const password = 'Antonino';  // password in chiaro da hashare

// Genera l'hash della password usando 10 salt
const saltRounds = 10;
const hashedPassword = bcrypt.hashSync(password, saltRounds);

// Collega al database SQLite esistente "users.db"
const db = new sqlite3.Database('users.db', (err) => {
  if (err) {
    console.error("Errore di connessione al database:", err.message);
    return;
  }

  // Prepara la query SQL per inserire un nuovo utente nella tabella "users"
  const sql = `INSERT INTO users (name,surname,username, email, password) VALUES (?,?,?, ?, ?)`;

  // Esegui l'inserimento dei dati dell'utente nel database
  db.run(sql, [name,surname,username, email, hashedPassword], function(err) {
    if (err) {
      console.error("Errore durante l'inserimento:", err.message);
    } else {
      console.log("Utente inserito");
    }

    // Chiude la connessione al database
    db.close();
  });
});
