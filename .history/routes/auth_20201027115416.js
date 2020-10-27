/* PATH: /api/login  */

const { Router } = require("express");
const { createUser } = require("../controllers/auth");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validate-fields");

const router = Router();

router.post(
  "/new",
  [
    check("name")
      .not()
      .isEmpty()
      .withMessage("Password is required")
      .isLength({ min: 3 })
      .withMessage("Name too short"),
    check("email")
      .not()
      .isEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Bad email"),
    check("password")
      .not()
      .isEmpty()
      .withMessage("Password is required")
      .isLength({ min: 5 })
      .withMessage("Password too short")
      .not()
      .isEmpty()
      .isLength({ min: 3 }),
    validateFields,
  ],
  createUser
);

module.exports = router;
