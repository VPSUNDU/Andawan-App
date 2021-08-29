var express = require('express');
var router = express.Router();
const db = require("../model/helper");


router.get("/", (req, res) => {
  res.send("Welcome to the Andawan page");
});

// GET native list
router.get("/natives", (req, res, next) => {
  console.log("hereiam")
  db("SELECT * FROM native;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.get("/natives/:id", (req, res, next) => {
  db(`SELECT * from native where id =${req.params.id};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

const getAllNative = (req, res) => {
  db("SELECT * FROM native ORDER BY id ASC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
};

// INSERT a new native into the DB
router.post("/natives", (req, res, next) => {
  db(
    `INSERT INTO native(name,location,contact,question)VALUES ("${req.body.name}","${req.body.location}","${req.body.contact}","${req.body.question}")`
  )
    .then(results => {
      getAllNative(req, res);
    })
    .catch(err => res.status(404).send(err));
  //your code here
});

// DELETE a native from the DB
router.delete("/natives/:id", (req, res, next) => {
  db(`DELETE FROM native WHERE id = '${req.params.id}';`)
    .then(results => {
      getAllNative(req, res);
    })
    .catch(err => res.status(404).send(err));
});


module.exports = router;
