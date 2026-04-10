const { body, validationResult } = require("express-validator");

const validateAccount = [
  body("name").notEmpty().withMessage("Name is required"),

  body("type").notEmpty().withMessage("Type is required"),

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

module.exports = validateAccount;
