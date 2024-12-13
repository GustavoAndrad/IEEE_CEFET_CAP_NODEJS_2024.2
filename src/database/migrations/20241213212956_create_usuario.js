/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("usuario", (table) => {
    table.increments("id").primary().unique();
    table.string("nome").notNullable();
    table.integer("idade").notNullable();
    table.string("email").notNullable().unique();
    table.string("senha").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("usuario");
};
