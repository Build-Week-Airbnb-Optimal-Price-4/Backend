const bcrypt = require("bcryptjs");

const pass = bcrypt.hashSync("password", 8);

exports.seed = function(knex, Promise) {
  return knex("user").insert([{ email: "testuser@test.com", password: pass }]);
};
