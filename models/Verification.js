const VerificationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    submittedBy: String,
    documentUrl: String,
    verified: Boolean,
    verifiedAt: Date
  });
  module.exports = mongoose.model('Verification', VerificationSchema);