const express = require('express');
const { addCredit, getCredits, deleteCredit, updateCredit } = require('../controllers/creditController');
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/add', auth, addCredit);
router.get('/', auth, getCredits);
router.delete('/:id', auth, deleteCredit);
router.put('/:id', auth, updateCredit);

module.exports = router;
