const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

class User extends Model {}
User.init(
  {
    fullname: DataTypes.STRING,
    login: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
    courses: DataTypes.STRING,
  },
  { sequelize, modelName: "user" }
);

class Course extends Model {}
Course.init(
  {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    duration: DataTypes.STRING
  },
  { sequelize, modelName: "course" }
);

sequelize.sync();

module.exports = {
  User,
};
