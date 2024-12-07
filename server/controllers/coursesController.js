const { Course } = require("../models/models");

class CoursesController {
  async create(req, res) {
    const { title, description, image, duration } = req.body;
    Course.create({ title, description, image, duration });
    res.status(200).json({ message: "Курс успешно создан!" });
  }
  async get(req, res) {
    const courses = await Course.findAll();
    res
      .status(200)
      .json({ courses: courses.map((course) => course.dataValues) });
  }
}

module.exports = new CoursesController();
