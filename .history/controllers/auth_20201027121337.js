const { response } = require("express");

const users = require("../models/users");

const createUser = async (req, res = response) => {
  const { email } = req.body;

  try {

    const isEmailExist = await users.findOne({email: email});
    if( isEmailExist){
        return res.status(400).json({
            ok : false,
            msg: "Email already exist"
        })
    }

    const user = new users(req.body);
    await user.save();

    res.json({ ok: true, body: req.body });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Talk to administrator",
    });
  }
};

module.exports = { createUser };
