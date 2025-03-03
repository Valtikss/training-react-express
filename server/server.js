// server/server.js
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Route API
app.use('/api', routes);

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

