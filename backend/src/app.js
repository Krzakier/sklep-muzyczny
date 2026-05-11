const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Sklep Muzyczny API' });
});

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Gitara Akustyczna', price: 499 },
    { id: 2, name: 'Klawisze Yamaha', price: 799 },
    { id: 3, name: 'Perkusja', price: 1299 }
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server uruchomiony na porcie ${PORT}`);
});
