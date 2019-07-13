const router = require("express").Router();
const { Student, Campus } = require("../seed");

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
module.exports = router;
