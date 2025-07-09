const port = process.env.PORT || 3000;

const db = require("./src/database/db");

const app = require("./src/app");

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
