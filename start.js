const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./todos.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the todos database.');
});

db.run(`CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT 0
);`, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Todos table created or already exists.');
});

require('./server.js');