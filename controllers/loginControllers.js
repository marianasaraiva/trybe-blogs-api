const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = 'palavraSecretaToken';

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: user.email }, secret, jwtConfig);

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = { login };