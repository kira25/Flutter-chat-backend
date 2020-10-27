/* PATH: /api/login  */

const { Router } = require("express");
const { createUser } = require("../controllers/auth");
const { check } = require("express-validator");
const validateFields = require("../middlewares/validate-fields");

const router = Router();

router.post(
  "/new",
  [check("name", "Name is required").not().isEmpty(), validateFields],
  createUser
);

module.exports = router;
