const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// Import route
const testRoutes = require('./routes/testRoutes');

app.use(cors());
app.use(express.json());

//Route test
app.use('/api', testRoutes);

//Route test
app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from The backend World !' });
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});