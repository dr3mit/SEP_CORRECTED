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

router.post("/campuses", (req, res) => {
  return Campus.create({
    name: req.body.name,
    imageUrl: "https://ibb.co/rHJK7xz",
    address: "test",
    description: req.body.description
  })
    .then(campus => res.send(campus))
    .catch(e => console.error(e));
});

router.post("/students", (req, res) => {
  return Student.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    imageUrl: "https://ibb.co/rHJK7xz", //req.body.imageUrl
    email: req.body.email,
    gpa: 4.0
  })
    .then(student => res.send(student))
    .catch(e => console.error(e));
});

router.delete("/campus/:id", (req, res) => {
  return Campus.destroy({ where: { id: req.params.id } })
    .then(res => res.data)
    .then(campus => console.log(campus))
    .catch(e => console.error(e));
});

router.delete("/student/:id", (req, res) => {
  return Student.destroy({ where: { id: req.params.id } })
    .then(res => res.data)
    .then(student => console.log(student))
    .catch(e => console.error(e));
});

router.put("campus/:id", (req, res) => {
  return Campus.update(
    { name: req.body.name, address: req.body.address },
    { where: { id: req.params.id } }
  )
    .then(res => res.data)
    .then(campus => {
      console.log(campus);
    })
    .catch(e => console.error(e));
});

router.put("student/:id", (req, res) => {
  return Student.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    },
    { where: { id: req.params.id } }
  )
    .then(res => res.data)
    .then(student => {
      console.log(student);
    })
    .catch(e => console.error(e));
});

module.exports = router;
