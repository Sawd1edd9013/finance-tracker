const { body } = require("express-validator");
const handleValidationErrors = require("./handleValidationErrors");

const validateAccount = [
  body("name").notEmpty().withMessage("Name is required"),
  body("type").notEmpty().withMessage("Type is required"),
  body("balance").isNumeric().withMessage("Balance must be a number"),
  handleValidationErrors,
];

module.exports = validateAccount;
