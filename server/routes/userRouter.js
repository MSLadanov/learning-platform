const Router = require("express");
const { body } = require("express-validator");

const userController = require("../controllers/userController");

const router = new Router();

const checkUserAuthMiddleware = require('../middleware/checkUserAuthMiddleware')

router.post(
  "/register",
  [
    body("fullname").notEmpty().withMessage("Полное имя обязательно."),
    body("login").notEmpty().withMessage("Логин обязателен."),
    body("email").isEmail().withMessage("Некорректный формат email."),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Пароль должен содержать минимум 6 символов."),
  ],
  userController.register
);

router.post("/login", userController.login);

router.get("/user", checkUserAuthMiddleware, userController.info);

module.exports = router;
