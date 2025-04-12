
import {AICompanion} from '../models/AIcompanion';
exports.shutdownAI = async (req, res) => {
  const ai = await AICompanion.findOneAndUpdate(
    { userId: req.user.id },
    { shutdownStatus: true, shutdownDate: new Date() },
    { new: true }
  );
  res.status(200).json(ai);
};
