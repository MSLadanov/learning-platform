const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

module.exports = function (req, res, next) {
  const { authToken } = req.cookies;
  if (authToken) {
    jwt.verify(authToken, dotenv.parsed.SECRET_KEY, function (error) {
      if (error) {
        res.status(401).json({ message: "Ошибка токена!" });
      } else {
        next();
      }
    });
  } else {
    res.status(401).json({ message: "Пользователь не авторизован!" });
  }
};
