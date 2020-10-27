/* PATH: /api/login  */

const { Router } = require("express");
const { createUser, login, renewToken } = require("../controllers/auth");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validate-fields");
const { validateJWT } = require("../middlewares/validate-jwt");

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

router.post(
  "/",
  [
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
  ],
  login
);

//Validate token to avoid Authentication or Token expired and leave the platform
router.get("/renew", validateJWT, renewToken);

module.exports = router;
