const { response } = require("express");
const { User } = require("../models/users");

const createUser = (req, res = response) => {
  // const user = new User(req.body);

  res.json({ ok: true, body: req.body });
};

module.exports = { createUser };
