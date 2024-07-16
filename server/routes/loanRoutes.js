const express = require('express');
const { addLoan, getLoans } = require('../controllers/loanController');
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/add', auth, addLoan);
router.get('/', auth, getLoans);

module.exports = router;
