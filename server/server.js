const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const userRoutes = require('./routes/userRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const loanRoutes = require('./routes/loanRoutes');
const creditRoutes = require('./routes/creditRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Use environment variable for MongoDB connection string
const dbURI = process.env.MONGODB_URI;
mongoose.connect(dbURI, {}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});

// Middleware or any other place where the JWT secret is used
const jwtSecret = process.env.JWT_SECRET;

app.use('/api/users', userRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/loans', loanRoutes);
app.use('/api/credits', creditRoutes);
app.use('/api/contact', contactRoutes);

// Use environment variable for PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
