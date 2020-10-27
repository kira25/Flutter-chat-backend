const { response } = require("express");
const { validationResult } = require("express-validator");

const createUser = (req, res = response) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({
        ok : false,
        errors : error.mapped()
    });
  }

  res.json({ ok: true, msg: "Creating user" });
};

module.exports = { createUser };
