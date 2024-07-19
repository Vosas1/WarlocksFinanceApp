const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the schema for a user
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },  // User's name
    email: { type: String, required: true, unique: true },  // User's email, must be unique
    password: { type: String, required: true },  // User's password
});

// Middleware to hash the password before saving the user
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();  // If the password is not modified, move to the next middleware
    const salt = await bcrypt.genSalt(10);  // Generate a salt
    this.password = await bcrypt.hash(this.password, salt);  // Hash the password with the salt
    next();  // Move to the next middleware
});

// Create the User model using the schema
const User = mongoose.model('User', userSchema);

module.exports = User;  // Export the User model
