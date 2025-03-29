const Joi = require("joi");

const validateCountry = (country) => {
  const schema = Joi.object({

    country: Joi.string().min(2).max(255).required().messages(),
  });

  return schema.validate(country);
};

module.exports = { validateCountry };
