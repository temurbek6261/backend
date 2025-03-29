const Joi = require('joi');

const createTicketValidation = Joi.object({
  event_id: Joi.number().integer().required(),
  seat_id: Joi.number().integer().required(),
  quantity: Joi.number().positive().required(),
});

const updateTicketValidation = Joi.object({
  event_id: Joi.number().integer().optional(),
  seat_id: Joi.number().integer().optional(),
  quantity: Joi.number().positive().optional(),
});

module.exports = {
  createTicketValidation,
  updateTicketValidation,
};
