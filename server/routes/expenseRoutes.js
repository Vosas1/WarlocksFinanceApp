const express = require('express');
const { addExpense, getExpenses, deleteExpense, updateExpense } = require('../controllers/expenseController');
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/add', auth, addExpense);
router.get('/', auth, getExpenses);
router.delete('/:id', auth, deleteExpense);
router.put('/:id', auth, updateExpense);

module.exports = router;
