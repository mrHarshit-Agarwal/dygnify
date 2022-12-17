const express = require("express");

const router = express.Router();

//controller
const controller = require("../controllers/user.controller");

router.post("/person_detail", controller.addPersonalDetails);

module.exports = router;
