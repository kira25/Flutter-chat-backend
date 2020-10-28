const jwt = require("jsonwebtoken");

const generateJWT = (uid) => {
  return new Promise((resolve, reject) => {
    const payload = {
      //Defines want yo wanna save
      uid,
    };

    jwt.sign(
      payload,
      process.env.JWT_KEY,
      {
        expiresIn: "24h",
      },
      (err, token) => {
        if (err) {
          reject("Token no se pudo crear");
          //token no created
        } else {
          resolve(token);
        }
      }
    );
  });
};

const ensureJWT = (token = "") => {
  try {
    //obtenemos el uid
    const { uid } = jwt.verify(token, process.env.JWT_KEY);
    req.uid = uid;
    return [true, uid];
  } catch (error) {
    return [false, null];
  }
};

module.exports = {
  generateJWT,
  ensureJWT
};
