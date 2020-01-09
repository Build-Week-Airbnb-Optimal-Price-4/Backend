const bcrypt = require("bcryptjs");

const Users = require("./auth-model.js");

const router = require("express").Router();

router.post("/register", (req, res) => {
  const creds = req.body;

  if (creds.email && creds.password) {
    const hash = bcrypt.hashSync(creds.password, 14);
    creds.password = hash;

    Users.addUser(creds)
      .then(yes => res.status(201).json({msg: "user successfully registered"}))
      .catch(err => res.status(500).json({ errMsg: "error registering user" }));
  } else {
    res.status(404).json({ errMsg: "email and password are required" });
  }
});

router.post("/login", (req, res) => {
  const creds = req.body;

  Users.checkCreds(creds)
  .then(user => {
    if (user && bcrypt.compareSync(creds.password, user.password)) {
      req.session.name = user.id;
      res
        .status(200)
        .json({ msg: "Login successful", user_id: user.id });
    } else {
      res.status(401).json({ msg: "Invalid credentials" });
    }
  })
  .catch(err => {
    res.status(500).json({ errMsg: "error validating user" });
  });


  
});

router.get("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.json({ errMsg: "error logging out" });
    } else {
      res.send({ msg: "user logged out" });
    }
  }); 
});

module.exports = router;
