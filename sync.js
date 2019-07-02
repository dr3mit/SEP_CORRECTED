const { db } = require("./server/index");
const { Student } = require("./models/students");
const { Campus } = require("./models/campuses");
const { app, PORT } = require("./server/server");

Campus.hasMany(Student);
Student.belongsTo(Campus);

db.authenticate()
  .then(() => {
    console.log("connected to database");
  })
  .catch(e =>
    console.error("-----____failed to connect to database_____----", e)
  );

db.sync({ force: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  })
  .catch(e => console.error("-----____db failed to sync____------", e));
