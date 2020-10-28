const { response } = require("express");

const users = require("../models/users");

const bcrypt = require("bcryptjs");
const { generateJWT } = require("../helpers/jwt");

//REGISTER
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
//LOGIN
const login = async (req, res = response) => {
  const { email, password } = req.body;
  //VERIFY USER
  try {
    const userDb = await users.findOne({ email });
    if (!userDb) {
      return res.status(404).json({
        ok: false,
        msg: "Email no encontrado",
      });
    }
    //VERIFY PASSWORD
    const verifyPassword = bcrypt.compareSync(password, userDb.password);
    if (!verifyPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Password not valid",
      });
    }

    const token = await generateJWT(userDb.id);

    //Send json response
    res.json({ ok: true, user: userDb, token });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      ok: false,
      msg: "Talk to administrator",
    });
  }
};

//RENEW TOKEN

const renewToken = async (req, res = response) => {
  try {
    //UID del usuario
    const uid = req.uid;
    //generate JWT
    const token = await generateJWT(uid);
    // obtener el user by id
    const userbyToken = await users.findById(uid);

    res.json({
      ok: true,
      user: userbyToken,
      token,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createUser, login, renewToken };
