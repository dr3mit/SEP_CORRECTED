const { db } = require("./server/index");
const { Student } = require("./models/students");
const { Campus } = require("./models/campuses");
const { app, PORT } = require("./server/server");
const chalk = require("chalk");

console.log(
  chalk.green("---_______ATTEMPTING TO START SERVER AND APP_______---")
);

db.authenticate()
  .then(() => {
    console.log(chalk.green("connected to database"));
  })
  .catch(e =>
    console.error(
      chalk.yellow("-----____failed to connect to database_____----"),
      e
    )
  );

Campus.hasMany(Student);
Student.belongsTo(Campus);

db.sync({ force: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(chalk.green(`App is listening on port ${PORT}`));
    });
  })
  .then(() => {
    Student.create({
      firstName: "drew",
      lastName: "mitchell",
      email: "dr3mit@gmail.com",
      imageUrl:
        "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiwpoCBjpfjAhWom-AKHe1UDkUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.techspot.com%2Fnews%2F76272-google-engineers-working-replacement-url.html&psig=AOvVaw3NUA6jZi_kCqtDHy7dEItE&ust=1562186944475906",
      gpa: 3.9
    }).catch(e => console.error(e));

    Student.create({
      firstName: "dexter",
      lastName: "vonMitchell",
      email: "derslowhammer@gmail.com",
      imageUrl:
        "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiwpoCBjpfjAhWom-AKHe1UDkUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.techspot.com%2Fnews%2F76272-google-engineers-working-replacement-url.html&psig=AOvVaw3NUA6jZi_kCqtDHy7dEItE&ust=1562186944475906",
      gpa: 4.0
    }).catch(e => console.error(e));

    Student.create({
      firstName: "nick",
      lastName: "marton",
      email: "nickmartonthedestroyer@gmail.com",
      imageUrl:
        "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiwpoCBjpfjAhWom-AKHe1UDkUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.techspot.com%2Fnews%2F76272-google-engineers-working-replacement-url.html&psig=AOvVaw3NUA6jZi_kCqtDHy7dEItE&ust=1562186944475906",
      gpa: 3.9
    }).catch(e => console.error(e));

    Student.create({
      firstName: "john",
      lastName: "mazza",
      email: "angryInterveiwerFromFrat@gmail.com",
      imageUrl:
        "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiwpoCBjpfjAhWom-AKHe1UDkUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.techspot.com%2Fnews%2F76272-google-engineers-working-replacement-url.html&psig=AOvVaw3NUA6jZi_kCqtDHy7dEItE&ust=1562186944475906",
      gpa: 3.9
    }).catch(e => console.error(e));

    Campus.create({
      name: "RPI",
      imageUrl:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1488922212%2Fvirginia-university-of-virginia-PRETTYCAMPUS0317.jpg%3Fitok%3DHx55kW2P&imgrefurl=https%3A%2F%2Fwww.travelandleisure.com%2Fattractions%2Fcolleges-universities%2Fmost-beautiful-colleges-every-state&docid=MctECUBYP40LFM&tbnid=hR1fAh16w-kFjM%3A&vet=10ahUKEwiw2ZC8kZfjAhVDc98KHQvCAfcQMwh-KAAwAA..i&w=1600&h=1000&bih=696&biw=1200&q=college%20campus&ved=0ahUKEwiw2ZC8kZfjAhVDc98KHQvCAfcQMwh-KAAwAA&iact=mrc&uact=8",
      address: "troy, ny",
      description: "second mit"
    }).catch(e => console.error(e));

    Campus.create({
      name: "RIT",
      imageUrl:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1488922212%2Fvirginia-university-of-virginia-PRETTYCAMPUS0317.jpg%3Fitok%3DHx55kW2P&imgrefurl=https%3A%2F%2Fwww.travelandleisure.com%2Fattractions%2Fcolleges-universities%2Fmost-beautiful-colleges-every-state&docid=MctECUBYP40LFM&tbnid=hR1fAh16w-kFjM%3A&vet=10ahUKEwiw2ZC8kZfjAhVDc98KHQvCAfcQMwh-KAAwAA..i&w=1600&h=1000&bih=696&biw=1200&q=college%20campus&ved=0ahUKEwiw2ZC8kZfjAhVDc98KHQvCAfcQMwh-KAAwAA&iact=mrc&uact=8",
      address: "rochester, ny",
      description: "sister alda mater"
    }).catch(e => console.error(e));
  })
  .catch(e =>
    console.error(chalk.yellow("-----____db failed to sync____------"), e)
  );
