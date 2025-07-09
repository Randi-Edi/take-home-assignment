const sqllite = require("sqlite3").verbose();
const path = require("path");

const db = new sqllite.Database(path.resolve(__dirname, "posts.db"), (err) => {
  if (err) {
    console.error("Could not connect to database");
  } else {
    console.log("Connected to SQlite database");
  }
});

db.serialize(() => {
  db.run(`
      CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY,
        userId INTEGER,
        title TEXT,
        body TEXT
      )
    `);
});

module.exports = db;
