const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/User");
users.use(cors());

process.env.SECRET_KEY = "secret";

users.post("/register", (req, res) => {
  const today = new Date();

  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.first_password, 10, (err, hash) => {
          const userData = {
            username: req.body.username,
            hash: hash,
            created: today
          };
          User.create(userData)
            .then(user => {
              res.send(getToken(user.id));
            })
            .catch(err => {
              res.send("err" + err);
            });
        });
      } else {
        res.json({ error: "Пользователь уже существует" });
      }
    })
    .catch(err => {
      res.send("error" + err);
    });
});

function getToken(id) {
  return jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: 1400
  });
}

users.post("/login", (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.first_password, user.hash)) {
          console.log(user.id);
          const token = getToken(user.id);
          console.log(token, user.id);
          res.send(token);
        }
      } else {
        res.status(400).json({ error: "Пользователь не найден" });
      }
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
});

users.get("/admin", (req, res) => {
  let decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );

  User.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.send("Пользователь не найден");
      }
    })
    .catch(err => {
      res.send("error:" + err);
    });
});

module.exports = users;
