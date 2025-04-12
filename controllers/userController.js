const User = require('../models/user');
exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user._id).select('-passwordHash');
  res.json(user);
};
