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
const { body, validationResult } = require("express-validator");

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

app.post(
  "/api/v1/register",
  [
    body("fullname").notEmpty().withMessage("Полное имя обязательно."),
    body("login").notEmpty().withMessage("Логин обязателен."),
    body("email").isEmail().withMessage("Некорректный формат email."),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Пароль должен содержать минимум 6 символов."),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, login, email, password } = req.body;

    try {
      const existingUser = await User.findOne({
        where: { login: login, email: email },
      });

      if (existingUser) {
        return res.status(400).json({
          error: "Пользователь с таким логином или email уже существует.",
        });
      }

      const hash = await bcrypt.hash(password, 10);
      const user = await User.create({
        fullname,
        login,
        email,
        password: hash,
      });
      const { id } = user.dataValues;

      res.status(201).json({ id, fullname, email });
    } catch (error) {
      console.error("Ошибка регистрации:", error);
      res.status(500).json({ error: "Ошибка сервера." });
    }
  }
);

app.post("/api/v1/login", async (req, res) => {
  const { login, password } = req.body;
  if (!login || !password) {
    return res.status(400).json({ error: "Логин и пароль обязательны!" });
  }
  try {
    const user = await User.findOne({ where: { login } });
    if (!user) {
      return res
        .status(404)
        .json({ message: "Пользователь не зарегистрирован!" });
    }
    const isPasswordValid = await bcrypt.compare(
      password,
      user.dataValues.password
    );
    if (isPasswordValid) {
      const token = createUserToken(user.dataValues);
      res.cookie("authToken", token, {
        // httpOnly: true,
        // secure: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      const { id, fullname, email } = user.dataValues;
      return res.status(200).json({ id, fullname, email });
    } else {
      return res.status(401).json({ error: "Неверный пароль!" });
    }
  } catch (error) {
    console.error("Ошибка входа:", error);
    return res.status(500).json({ error: "Внутренняя ошибка сервера" });
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
