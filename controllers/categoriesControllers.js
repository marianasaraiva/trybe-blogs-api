const { Category } = require('../models');

const createCategory = async (req, res, next) => {
  try {
    // const { name } = req.body;
    // const Register = await Category.findOne({ where: { name } });

    // if (emailRegister) {
    //   return res.status(409).json({ message: 'User already registered' });
    // }
    
    const category = await Category.create(req.body);

    return res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

module.exports = { createCategory };