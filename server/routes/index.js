const Router = require("express");

const router = new Router();

const userRouter = require("./userRouter");

const coursesRouter = require("./coursesRouter");

router.use(userRouter);

router.use(coursesRouter);

module.exports = router;
