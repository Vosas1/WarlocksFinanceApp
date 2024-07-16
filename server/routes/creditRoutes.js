const express = require('express');
const { addCredit, getCredits } = require('../controllers/creditController');
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/add', auth, addCredit);
router.get('/', auth, getCredits);

module.exports = router;
