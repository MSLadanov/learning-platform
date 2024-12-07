const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

module.exports = function (token) {
  const decoded = jwt.verify(token, dotenv.parsed.SECRET_KEY);
  return +decoded.id;
};
