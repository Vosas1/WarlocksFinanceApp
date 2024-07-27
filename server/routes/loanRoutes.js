const express = require('express');
const { addLoan, getLoans, deleteLoan, updateLoan } = require('../controllers/loanController');
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/add', auth, addLoan);
router.get('/', auth, getLoans);
router.delete('/:id', auth, deleteLoan);
router.put('/:id', auth, updateLoan);

module.exports = router;
