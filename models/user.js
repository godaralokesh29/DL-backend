const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  passwordHash: String,
  role: { type: String, enum: ['user', 'admin', 'verifier'], default: 'user' },
  isDeceased: Boolean,
  verifiedBy: String,
  deathDate: Date,
});
module.exports = mongoose.model('User', UserSchema);