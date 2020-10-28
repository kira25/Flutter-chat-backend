/* PATH: /api/users  */

const { Router } = require("express");
const { validateJWT } = require("../middlewares/validate-jwt");

const router = Router();


);

//Validate token to avoid Authentication or Token expired and leave the platform
router.get("/", validateJWT, get);

module.exports = router;
