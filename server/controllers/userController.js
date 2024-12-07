const { User } = require("../models/models");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const { createUserToken } = require("../services/createUserToken");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");

class UserController {
  async register(req, res) {
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
  async login(req, res) {
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
  }
  async info(req, res) {
    const { authToken } = req.cookies;
    const { id } = jwt.verify(authToken, dotenv.parsed.SECRET_KEY);
    const user = await User.findOne({ where: { id: +id } });
    if (user) {
      const { id, fullname, email } = user;
      res.status(200).json({ id, fullname, email });
    } else {
      res
        .status(404)
        .json({ message: "Данный пользователь не зарегистрирован!" });
    }
  }
}

module.exports = new UserController();
