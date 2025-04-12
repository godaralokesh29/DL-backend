const express = require('express');
const router = express.Router();
const { verifyDeath } = require('../controllers/deathController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/verify', authMiddleware, verifyDeath);
module.exports = router;