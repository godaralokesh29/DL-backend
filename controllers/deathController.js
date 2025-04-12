import {User} from '../models/user';
import{Verification} from '../models/Verification';

exports.verifyDeath = async (req, res) => {
  const { documentUrl } = req.body;
  const verification = await Verification.create({
    userId: req.user.id,
    submittedBy: req.user.email,
    documentUrl,
    verified: false,
  });
  res.status(200).json(verification);
};
