const { response } = require("express");
const User = require("../models/users");

const getUsers = async (req, res = response) => {
  const users = await User.find({ _id: { $ne: req.uid } }).sort("-online");

  res.json({
    ok: true,
    msg: users,
  });
};

module.exports = {
  getUsers,
};
