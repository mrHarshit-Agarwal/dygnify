const Business = require("../models/business.model");
//responses
const responses = require("../utils/responses");

//validation
const businessValidation = require("../validations/business.validation");

exports.addBusinessDetails = async (req, res) => {
  try {
    try {
      await businessValidation(req.body);
    } catch (error) {
      return responses.badRequestResponse(res, error, error.message);
    }

    const new_business = await Business.create(req.body);
    return responses.successfullyCreatedResponse(res, new_business);
  } catch (error) {
    responses.serverErrorResponse(res);
  }
};
