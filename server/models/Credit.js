const mongoose = require('mongoose');

const creditSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

const Credit = mongoose.model('Credit', creditSchema);
module.exports = Credit;
