// server/server.js
const express = require('express');
const cors = require('cors');
const restaurantsRoutes = require('./routes/restaurantsRoutes'); 

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Route test
app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.use('/api', restaurantsRoutes);

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

