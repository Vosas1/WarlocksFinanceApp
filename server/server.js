const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/user');

app.use('/api/users', userRoutes);

app.use('/api/data', (req, res) => {
  res.status(200).json({ message: 'Hello From the Backend' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
