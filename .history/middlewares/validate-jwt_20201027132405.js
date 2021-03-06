const jwt = require("jsonwebtoken");

const validateJWT = (req, res, next) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "no hay token en la peticion",
    });
  }

  try {
    //obtenemos el uid
    const { uid } = jwt.verify(token, process.env.JWT_KEY);
    req.uid = uid;

    
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      ok: false,
      msg: "Token no valido",
    });
  }
  console.log(token);
  next();
};

module.exports = {
  validateJWT,
};
