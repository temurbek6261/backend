const Joi = require("joi");

const validateCustomerCard = (customerCard) => {
  const schema = Joi.object({
    customer_id: Joi.number().integer().required(),
    name: Joi.string().min(2).required(),
    phone: Joi.string().pattern(/^\+998\d{9}$/).required(), 
    number: Joi.string().pattern(/^\d{4}-\d{4}-\d{4}-\d{4}$/).required(), 
    year: Joi.string().length(4).pattern(/^\d{4}$/).required(),
    month: Joi.string().length(2).pattern(/^(0[1-9]|1[0-2])$/).required(),
    is_active: Joi.boolean(),
    is_main: Joi.boolean(),
  });


  return schema.validate(customerCard);
};

module.exports = { validateCustomerCard };