const router = require("express").Router();
const { Student, Campus } = require("../models");

router.get("/students", (req, res) => {
  return Student.findAll()
    .then(students => res.send(students))
    .catch(e => res.send(e));
});

router.get("/student/:id", (req, res) => {
  return Student.findByPk(req.params.id, { include: { model: Campus } })
    .then(student => {
      //console.log(student);
      res.send(student);
    })
    .catch(e => res.send(e));
});

router.get("/campuses", (req, res) => {
  return Campus.findAll()
    .then(campuses => res.send(campuses))
    .catch(e => res.send(e));
});

router.get("/campus/:id", (req, res) => {
  return Campus.findByPk(req.params.id, { include: { model: Student } })
    .then(campus => {
      res.send(campus);
    })
    .catch(e => res.send(e));
});

router.post("/:campus", (req, res) => {
  return Campus.create({
    name: "test", //req.body.name
    imageUrl: "https://ibb.co/rHJK7xz",
    address: "test",
    description: "test"
  })
    .then(campus => res.send(campus))
    .catch(e => console.error(e));
});

router.post("/:student", (req, res) => {
  return Student.create({
    name: "test", //req.body.name
    imageUrl: "https://ibb.co/rHJK7xz", //req.body.imageUrl
    address: "test",
    description: "test"
  })
    .then(student => res.send(student))
    .catch(e => console.error(e));
});
module.exports = router;
