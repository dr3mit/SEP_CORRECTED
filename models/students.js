const Sequelize = require("sequelize");
const { db } = require("../server/index");
const Student = db.define("student", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: "some url string",
    validate: {
      isUrl: true
    }
  },
  gpa: {
    type: Sequelize.DECIMAL,
    defaultValue: 0.0,
    validate: {
      isDecimal: true,
      max: 4.0,
      min: 0.0,
      not: ["[a-z]", "i"]
    }
  }
});

module.exports = { Student };
