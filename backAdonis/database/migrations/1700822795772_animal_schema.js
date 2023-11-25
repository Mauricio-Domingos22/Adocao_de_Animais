"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AnimalSchema extends Schema {
  up() {
    this.create("animals", (table) => {
      table.increments();
      table.string("nome", 50).notNullable().unique();
      table
        .integer("sexo")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("sexos");
      table.date("idade");
      table.float("altura");
      table.float("peso").notNullable();
      table
        .integer("raca")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("racas");
      table
        .integer("tipo_animal")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("tipo_animals");
      table
        .integer("cor")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("cors");
      table.text("sobre_animal");
      table.string("foto");
      table.enum("status", ["disponivel", "adotado"]).defaultTo("disponivel");

      table.timestamps();
    });
  }

  down() {
    this.drop("animals");
  }
}

module.exports = AnimalSchema;
