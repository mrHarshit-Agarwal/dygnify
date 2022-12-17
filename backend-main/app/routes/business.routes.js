const express = require("express");

const router = express.Router();

//controller
const controller = require("../controllers/business.controller");

router.post("/business_detail", controller.addBusinessDetails);

module.exports = router;
