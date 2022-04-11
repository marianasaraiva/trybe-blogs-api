const jwt = require('jsonwebtoken');

const { User } = require('../../models');

const secret = 'palavraSecretaToken';

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  
  try {
    const decoded = jwt.verify(token, secret);

    const user = await User.findOne({ where: { email: decoded.data } });
    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};