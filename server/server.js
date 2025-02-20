const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

const restaurantRoutes = require('./routes/restaurantsRoutes');


app.use(cors());
app.use(express.json());
app.use('/api', restaurantRoutes);

app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from The backend World !' });
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});