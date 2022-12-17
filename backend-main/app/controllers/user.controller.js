const User = require("../models/user.model");
//responses
const responses = require("../utils/responses");

//validation
const userValidation = require("../validations/user.validation");

exports.addPersonalDetails = async (req, res) => {
  try {
    try {
      await userValidation(req.body);
    } catch (error) {
      return responses.badRequestResponse(res, error, error.message);
    }
    const new_user = await User.create(req.body);
    return responses.successfullyCreatedResponse(res, new_user);
  } catch (error) {
    console.log(error.message);
    responses.serverErrorResponse(res);
  }
};
