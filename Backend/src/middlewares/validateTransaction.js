const { body, validationResult } = require("express-validator");

const validateTransaction = [
  body("amount")
    .notEmpty()
    .withMessage("Amount is required")
    .isFloat({ gt: 0 })
    .withMessage("Amount must be greater than 0"),

  body("type")
    .notEmpty()
    .withMessage("Type is required")
    .isIn(["income", "expense"])
    .withMessage("Invalid type"),

  body("accountId")
    .notEmpty()
    .withMessage("AccountId is required")
    .isMongoId()
    .withMessage("Invalid accountId"),

  body("categoryId")
    .notEmpty()
    .withMessage("CategoryId is required")
    .isMongoId()
    .withMessage("Invalid categoryId"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).send({
        error: errors.array()[0].msg,
      });
    }

    next();
  },
];

module.exports = validateTransaction;
