const express = require("express");
const router = express.Router();

const userRoutes = require("./user.routes");
const businessRoutes = require("./business.routes");
const loanRoutes = require("./loan.routes");

router.use("/user", userRoutes);
router.use("/business", businessRoutes);
router.use("/loan", loanRoutes);

module.exports = router;
