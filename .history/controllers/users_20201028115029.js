const { response } = require("express");
const User = require("../models/users");

const getUsers = async (req, res = response) => {
  const since = Number(req.query.since) || 0;

  const users = await User.find({ _id: { $ne: req.uid } })
    .sort("-online")
    .skip(since)
    .limit(20);

  res.json({
    ok: true,
    users: users,
    
  });
};

module.exports = {
  getUsers,
};