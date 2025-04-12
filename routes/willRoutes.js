const express = require('express');
const router = express.Router();
const { createWill, getMyWill } = require('../controllers/willController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createWill);
router.get('/', authMiddleware, getMyWill);
module.exports = router;