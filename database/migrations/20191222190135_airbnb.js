exports.up = function(knex) {
  return knex.schema
    .createTable("user", tbl => {
      tbl.increments();
      tbl
        .text("email")
        .notNullable()
        .unique();
      tbl.varchar("password").notNullable();
    })
    .createTable("listing", tbl => {
      tbl.increments();
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("user")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      tbl
        .text("title")
        .notNullable()
        .unique();
      tbl.text("image");
      tbl.integer("city").notNullable();
      tbl.float("price", { precision: 2 });
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("listing")
    .dropTableIfExists("user");
};
