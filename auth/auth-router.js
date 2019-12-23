const bcrypt = require("bcryptjs");

const router = require("express").Router();

router.post("/register", (req, res) => {
  res.status(200).send("register");
});

router.post("/login", (req, res) => {
  res.status(200).send("login");
});

router.get("/logout", (req, res) => {
  res.status(200).send("logout");
});

module.exports = router;
