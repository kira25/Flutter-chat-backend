const { response } = require("express");

const users = require("../models/users");

const createUser = async (req, res = response) => {
  const user = new users(req.body);
  await user.save();

  res.json({ ok: true, body: req.body });
};

module.exports = { createUser };
