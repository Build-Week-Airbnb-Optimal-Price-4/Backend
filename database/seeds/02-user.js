const bcrypt = require('bcryptjs')

const pass = bcrypt.hashSync("password", 8)

exports.seed = function(knex, Promise) {
  return knex('user').truncate()
    .then(function () {
      return knex('user').insert([
        { email: 'testuser2@test.com', password: pass }
      ]);
    });
};