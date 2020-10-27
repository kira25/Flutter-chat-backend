const { response } = require("express");

const createUser = (req,res = response) => {
  res.json({ ok: true, msg: "Creating user" });
};



module.exports = {createUser};