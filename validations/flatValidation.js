const Joi = require('joi');

const validateFlat = (event) => {
  const schema = Joi.object({
    etaj: Joi.number().integer().min(1).required(),
    condition: Joi.string().valid.required()
  });

  return schema.validate(event);
};

module.exports = { validateFlat };
