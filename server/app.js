const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const { User, Course } = require("./services/database");
const bcrypt = require("bcrypt");
const { createUserToken } = require("./services/createUserToken");
const cookieParser = require("cookie-parser");
const { checkUserToken } = require("./services/checkUserToken");

app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "UPDATE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/static/users", express.static(__dirname + "/static/users"));

app.use("/static/courses", express.static(__dirname + "/static/courses"));

app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/api/v1/user", async (req, res) => {
  const { authToken } = req.cookies;
  if (authToken) {
    const userId = checkUserToken(authToken);
    const user = await User.findOne({ where: { id: userId } });
    if (user) {
      const { id, fullname, email } = user;
      res.status(200).json({ id, fullname, email });
    } else {
      res
        .status(404)
        .json({ message: "Данный пользователь не зарегистрирован!" });
    }
  } else {
    res.status(401).json({ message: "Пользователь не авторизован!" });
  }
});

app.post("/api/v1/register", async (req, res) => {
  const { fullname, login, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ where: {login : login, email: email} });
    console.log(existingUser)
    if (existingUser) {
      return res.status(400).json({ message: "Пользователь уже существует." });
    }
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ fullname, login, email, password: hash });
    const { id } = user.dataValues;
    res.status(201).json({ id, fullname, email });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка сервера." });
  }
});

app.post("/api/v1/login", async (req, res) => {
  const { login, password } = req.body;
  const user = await User.findOne({ where: { login: login } });
  if (user) {
    bcrypt.compare(password, user.dataValues.password, function (err, result) {
      if (result) {
        const token = createUserToken(user.dataValues);
        res.cookie("authToken", token, {
          // httpOnly: true,
          // secure: true,
          maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        const { id, fullname, email } = user;
        res.status(200).json({ id, fullname, email });
      } else {
        res.status(401).json({ message: "Неверный пароль!" });
      }
    });
  } else {
    res
      .status(404)
      .json({ message: "Данный пользователь не зарегистрирован!" });
  }
});

app.post("/api/v1/course", (req, res) => {
  const { title, description, image, duration } = req.body;
  Course.create({ title, description, image, duration });
  res.status(200).json({ message: "Курс успешно создан!" });
});

app.get("/api/v1/courses", async (req, res) => {
  const courses = await Course.findAll();
  res.status(200).json({ courses: courses.map((course) => course.dataValues) });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
