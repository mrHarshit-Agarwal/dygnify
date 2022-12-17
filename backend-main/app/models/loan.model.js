const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
  loan_amount: {
    type: Number,
    required: true,
  },
  interest_rate: {
    type: Number,
    required: true,
  },
  loan_tenure: {
    type: Number,
    required: true,
  },
  aadhar_number: {
    type: Number,
    required: true,
  },
  use_of_loan: {
    type: String,
    required: true,
  },
  business_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model("Loan", loanSchema);
