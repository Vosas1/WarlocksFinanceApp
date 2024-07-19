const mongoose = require('mongoose');

// Define the schema for a credit entry
const creditSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Reference to the User model
    amount: { type: Number, required: true },  // Amount of the credit
    description: { type: String, required: true },  // Description of the credit
    date: { type: Date, default: Date.now },  // Date of the credit entry
});

// Create the Credit model using the schema
const Credit = mongoose.model('Credit', creditSchema);

module.exports = Credit;  // Export the Credit model
