const Joi = require("joi");

module.exports = (body) => {
  const businessValidation = Joi.object({
    name: Joi.string().required().min(10).max(100),
    gst_no: Joi.string().required(),
    address: Joi.string().required(),
    contact: Joi.number()
      .integer()
      .min(10 ** 9)
      .max(10 ** 10 - 1)
      .required()
      .messages({
        "number.min": "Mobile number should be 10 digit.",
        "number.max": "Mobile number should be 10 digit",
      }),
    annual_income: Joi.number().required(),
    user_id: Joi.string().required(),
  }).options({ abortEarly: true });
  return businessValidation.validateAsync(body);
};
