const express = require('express');
const router = express.Router();
const { shutdownAI } = require('../controllers/aiController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/shutdown', authMiddleware, shutdownAI);
module.exports = router;