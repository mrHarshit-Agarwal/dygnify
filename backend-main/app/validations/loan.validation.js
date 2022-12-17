const Joi = require("joi");

module.exports = (body) => {
  const loanValidation = Joi.object({
    loan_amount: Joi.number().required(),
    interest_rate: Joi.number().required(),
    loan_tenure: Joi.number().required(),
    aadhar_number: Joi.number().required(),
    use_of_loan: Joi.string().required(),
    business_id: Joi.string().required(),
  }).options({ abortEarly: true });
  return loanValidation.validateAsync(body);
};
