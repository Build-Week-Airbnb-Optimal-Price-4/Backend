const db = require("../database/dbconfig.js");

function addUser(creds) {
  return db("user").insert(creds);
}

function checkCreds(creds) {
  return db("user")
    .where({ email: creds.email })
    .first();
}

module.exports = {
  addUser,
  checkCreds
};
