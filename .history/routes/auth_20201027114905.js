/* PATH: /api/login  */

const { Router } = require("express");
const { createUser } = require("../controllers/auth");
const { check } = require("express-validator");
const {validateFields} = require("../middlewares/validate-fields");

const router = Router();

router.post(
  "/new",
  [check("name", "Name is required").not().isEmpty(),
  check("email", "email is required").not().isEmpty().isEmail(),
  check("password", "password is required").not().isEmpty().isLength({min:3}), 
  validateFields],
  createUser
);

module.exports = router;
