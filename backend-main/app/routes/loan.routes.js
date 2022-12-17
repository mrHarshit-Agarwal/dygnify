const express = require("express");

const router = express.Router();

//controller
const controller = require("../controllers/loan.controller");

router.post("/loan_detail", controller.addLoanDetails);

module.exports = router;
