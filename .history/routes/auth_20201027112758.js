/* PATH: /api/login  */

const { Router, response } = require("express");

const router = Router();

router.post("/new", (req, res = response) => {
  res.json({ ok: true, msg: "Creating user" });
});

module.exports = router;
