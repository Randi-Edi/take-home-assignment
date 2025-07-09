const express = require("express");
const app = express();
const port = 3000;

const db = require("./src/database/db");

app.get("/", (req, res) => {
  res.send("Hello from Node.js server!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
