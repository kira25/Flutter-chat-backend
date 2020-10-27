const { response } = require("express");

const users = require("../models/users");

const bcrypt = require("bcryptjs");

const createUser = async (req, res = response) => {
  const { email,password } = req.body;

  try {
    const isEmailExist = await users.findOne({ email: email });
    //Indicar al usuario que los datos son invalidos ( en lugar de decir que no existe)
    if (isEmailExist) {
      return res.status(400).json({
        ok: false,
        msg: "Email already exist",
      });
    }

    const user = new users(req.body);
    //Encrypt
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    //Send json response
    res.json({ ok: true, body: user });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Talk to administrator",
    });
  }
};

module.exports = { createUser };
