const Loan = require("../models/loan.model");
//responses
const responses = require("../utils/responses");

//validation
const loanValidation = require("../validations/loan.validation");
exports.addLoanDetails = async (req, res) => {
  try {
    try {
      await loanValidation(req.body);
    } catch (error) {
      return responses.badRequestResponse(res, error, error.message);
    }

    const new_loan = await Loan.create(req.body);
    return responses.successfullyCreatedResponse(res, new_loan);
  } catch (error) {
    responses.serverErrorResponse(res);
  }
};
