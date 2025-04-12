const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const willRoutes = require('./routes/willRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json()); 

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/will', willRoutes);

app.get('/', (req, res) => {
  res.send('Digital Will API Running');
});

module.exports = app;
