const { db } = require("../server/index");
const Sequelize = require("sequelize");
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: "some url string",
    validate: {
      isUrl: true
    }
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: "NO DESCRIPTION ENTERED."
  }
});

module.exports = { Campus };
