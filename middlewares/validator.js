const { body, validationResult } = require("express-validator");

// Define validation rules
const taskValidationRules = () => {
  return [
    body("title").notEmpty().withMessage("Title is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("status")
      .notEmpty()
      .withMessage("Status is required")
      .isIn(["Todo", "In Progress", "Done"])
      .withMessage("Invalid status"),
  ];
};

// Middleware to handle validation results
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = {
  taskValidationRules,
  validate,
};
