const Joi = require('joi');
// documentação Joi: https://joi.dev/api

const loginSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.min': '"password" length must be 6 characters long',
    }),
});

const validationLogin = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) throw error;
  next();
};

module.exports = validationLogin;