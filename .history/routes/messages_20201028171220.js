/* PATH :/api/messages*/


const { Router } = require("express");
const { validateJWT } = require("../middlewares/validate-jwt");

const router = Router();

//Validate token to avoid Authentication or Token expired and leave the platform
router.get("/:de", validateJWT);

module.exports = router;
