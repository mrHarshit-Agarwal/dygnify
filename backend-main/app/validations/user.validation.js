const Joi = require("joi");

module.exports = (body) => {
  const userValidation = Joi.object({
    first_name: Joi.string().required().min(3).max(50),
    last_name: Joi.string().required().min(3).max(50),
    age: Joi.number().required(),
    mobile_no: Joi.number()
      .integer()
      .min(10 ** 9)
      .max(10 ** 10 - 1)
      .required()
      .messages({
        "number.min": "Mobile number should be 10 digit.",
        "number.max": "Mobile number should be 10 digit",
      }),
  }).options({ abortEarly: true });
  return userValidation.validateAsync(body);
};
