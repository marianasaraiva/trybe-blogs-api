const { Category } = require('../models');

const findAllCategories = async (req, res, next) => {
  try {
    const category = await Category.findAll();

    return res.status(200).json(category);
  } catch (error) {
    next(error);
  }
};

const createCategory = async (req, res, next) => {
  try {
    const category = await Category.create(req.body);

    return res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

module.exports = { findAllCategories, createCategory };