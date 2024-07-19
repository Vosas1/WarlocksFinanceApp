const mongoose = require('mongoose');

// Define the schema for an expense entry
const expenseSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Reference to the User model
    type: { type: String, required: true },  // Type of the entry (Credit, Loan, Expense)
    amount: { type: Number, required: true },  // Amount of the expense
    description: { type: String, required: true },  // Description of the expense
    date: { type: Date, default: Date.now },  // Date of the expense entry
});

// Create the Expense model using the schema
const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;  // Export the Expense model
