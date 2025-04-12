const DigitalWill = require('../models/DigitalWill');

exports.createWill = async (req, res) => {
  try {
    const will = await DigitalWill.findOneAndUpdate(
      { userId: req.user.id },
      { ...req.body, userId: req.user.id },
      { upsert: true, new: true }
    );
    res.status(200).json(will);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create digital will.' });
  }
};

exports.getMyWill = async (req, res) => {
  try {
    const will = await DigitalWill.findOne({ userId: req.user.id });
    res.status(200).json(will);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch will.' });
  }
};