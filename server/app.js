const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const { User } = require("./services/database");
const bcrypt = require("bcrypt");
const dotenv = require('dotenv').config()

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "UPDATE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/static/users", express.static(__dirname + "/static/users"));

app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/api/v1/users", (req, res) => {
  res.json({ name: "John", surname: "Doe" });
});

app.post("/api/v1/register", (req, res) => {
  const { fullname, login, email, password } = req.body;
  bcrypt.hash(password, 10, function (err, hash) {
    User.create({ fullname, login, email, password: hash });
  });
  res.json({ message: "Пользователь успешно зарегистрирован!" });
});

app.post("/api/v1/login", async (req, res) => {
  const { login, password } = req.body;
  const user = await User.findOne({ where: { login: login } });
  if (user) {
    bcrypt.compare(password, user.dataValues.password, function (err, result) {
      if(result) {
        res.json({ message: "Пользователь успешно авторизован!" });
      } else {
        res
        .status(401)
        .json({ message: "Неверный пароль!" });
      }
    });
  } else {
    res
      .status(404)
      .json({ message: "Данный пользователь не зарегистрирован!" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
