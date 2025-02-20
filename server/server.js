const express = require('express');
const cors = require('cors');
const testRoutes = require('./routes/test');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', testRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something broke!' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});