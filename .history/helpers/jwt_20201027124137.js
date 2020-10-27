const jwt = require("jsonwebtoken");

const generateJWT = (uid) => {
  const payload = {
    //Defines want yo wanna save
    uid,
  };

  jwt.sign(payload,)
};

module.exports = {
  generateJWT,
};
