const express = require('express');
const router = express.Router();
const { getProfile } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/me', authMiddleware, getProfile);
module.exports = router;