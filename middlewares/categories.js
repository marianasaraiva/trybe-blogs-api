const Joi = require('joi');
// documentação Joi: https://joi.dev/api

const categoriesSchema = Joi.object({
  name: Joi.string()
    .min(6)
    .required(),
});

const validationCategories = (req, res, next) => {
  const { error } = categoriesSchema.validate(req.body);
  if (error) throw error;
  next();
};

module.exports = validationCategories;