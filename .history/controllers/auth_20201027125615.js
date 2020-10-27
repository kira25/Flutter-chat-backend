const { response } = require("express");

const users = require("../models/users");

const bcrypt = require("bcryptjs");
const { generateJWT } = require("../helpers/jwt");

const createUser = async (req, res = response) => {
  const { email, password } = req.body;

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
    //Generar mi JWT
    const token = await generateJWT(user.id);

    //Send json response
    res.json({ ok: true, user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Talk to administrator",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userDb = await users.findOne({ email });
    if (!userDb) {
      return res.json(404).json({
        ok: false,
        msg: "Email no encontrado",
      });
    }

    const verifyPassword = bcrypt.compareSync(password, userDb.password);
    if (!verifyPassword) {
      return res.json(400).json({
        ok: false,
        msg: "Password not valid",
      });
    }

    const token = await generateJWT(userDb.id);

    //Send json response
    res.json({ ok: true, user, token });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      ok: false,
      msg: "Talk to administrator",
    });
  }

  return res.json({
    ok: true,
    msg: "login",
  });
};

module.exports = { createUser, login };
