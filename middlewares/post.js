const Joi = require('joi');
// documentação Joi: https://joi.dev/api

const postSchema = Joi.object({
  title: Joi.string()
    .required(),
  content: Joi.string()
    .required(),
  categoryIds: Joi.array()
    .required(),
});

const validationPost = (req, res, next) => {
  const { error } = postSchema.validate(req.body);
  if (error) throw error;
  next();
};

module.exports = validationPost;