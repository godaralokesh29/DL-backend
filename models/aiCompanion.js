const AICompanionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    modelInfo: {
      openAiModelId: String,
      personalityPrompt: String,
      createdAt: Date
    },
    shutdownStatus: Boolean,
    shutdownDate: Date
  });
  module.exports = mongoose.model('AICompanion', AICompanionSchema);