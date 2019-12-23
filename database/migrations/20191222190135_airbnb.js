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
        .onDelete("CASCADE");
      tbl
        .text("listing_url")
        .notNullable()
        .unique();
      tbl.text("city").notNullable();
      tbl.text("room_type").notNullable();
      tbl.integer("minimum_nights").notNullable();
      tbl.float("prediction", { precision: 2 });
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("listing")
    .dropTableIfExists("user");
};
