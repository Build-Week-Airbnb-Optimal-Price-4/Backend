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
      tbl.text("title").notNullable();
      tbl.text("image");
      tbl
        .integer("accommodates")
        .notNullable()
        .unsigned();
      tbl
        .integer("bathrooms")
        .notNullable()
        .unsigned();
      tbl
        .integer("bedrooms")
        .notNullable()
        .unsigned();
      tbl
        .integer("size")
        .notNullable()
        .unsigned();
      tbl.text("room_type").notNullable();
      tbl.text("bed_type");
      tbl.integer("minimum_nights").unsigned();
      tbl.integer("instant_bookable").unsigned();
      tbl.text("cancellation_policy");
      tbl.text("bad_of_words");
      tbl.float("price", { precision: 2 });
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("listing").dropTableIfExists("user");
};
