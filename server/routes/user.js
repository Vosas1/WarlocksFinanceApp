const express = require('express');
const router = express.Router();
const User = require('../models/User');

// User registration
router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// User login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
      throw new Error('Invalid credentials');
    }
    res.status(200).json({ token: 'dummy-token', username: user.email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;