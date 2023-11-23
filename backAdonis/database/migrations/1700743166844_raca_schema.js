"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RacaSchema extends Schema {
  up() {
    this.create("racas", (table) => {
      table.increments();
      table.string("descricao", 100).notNullable().unique();
      table
        .integer("tipo_animal")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("tipo_animals");
      table.timestamps();
    });
  }

  down() {
    this.drop("racas");
  }
}

module.exports = RacaSchema;
