const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');

// Function to register a new user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    // Check if all required fields are present
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Check if the user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user entry
        const user = new User({ name, email, password });
        await user.save();  // Save the user entry to the database

        res.status(201).json({ message: 'User registered successfully' });  // Respond with success message
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Server error', error });  // Respond with server error
    }
};

// Function to log in a user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Check if all required fields are present
    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check if the password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '1h' });
        res.json({ token });  // Respond with the token
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Server error', error });  // Respond with server error
    }
};

module.exports = { registerUser, loginUser };
