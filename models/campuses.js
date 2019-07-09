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
    defaultValue:
      "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiwpoCBjpfjAhWom-AKHe1UDkUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.techspot.com%2Fnews%2F76272-google-engineers-working-replacement-url.html&psig=AOvVaw3NUA6jZi_kCqtDHy7dEItE&ust=1562186944475906",
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
    defaultValue:
      "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiwpoCBjpfjAhWom-AKHe1UDkUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.techspot.com%2Fnews%2F76272-google-engineers-working-replacement-url.html&psig=AOvVaw3NUA6jZi_kCqtDHy7dEItE&ust=1562186944475906"
  }
});

module.exports = { Campus };
