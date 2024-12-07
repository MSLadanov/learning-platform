const Router = require("express");

const coursesController = require("../controllers/coursesController");

const router = new Router();

router.post("/course", coursesController.create);

router.get("/courses", coursesController.get);

module.exports = router;
