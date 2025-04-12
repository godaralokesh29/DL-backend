const DigitalWillSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    instructions: {
      socialAccounts: [
        { platform: String, action: { type: String, enum: ['delete', 'memorialize', 'ignore'] } }
      ],
      aiBots: [
        { botId: String, action: { type: String, enum: ['shutdown', 'keep'] } }
      ],
      cryptoAssets: [
        { walletId: String, action: String, recipientEmail: String }
      ]
    },
    finalMessage: String,
    recipients: [{ name: String, email: String }]
  }, { timestamps: true });
  module.exports = mongoose.model('DigitalWill', DigitalWillSchema);