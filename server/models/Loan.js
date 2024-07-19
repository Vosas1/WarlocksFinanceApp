const mongoose = require('mongoose');

// Define the schema for a loan entry
const loanSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Reference to the User model
    amount: { type: Number, required: true },  // Amount of the loan
    description: { type: String, required: true },  // Description of the loan
    date: { type: Date, default: Date.now },  // Date of the loan entry
});

// Create the Loan model using the schema
const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;  // Export the Loan model
