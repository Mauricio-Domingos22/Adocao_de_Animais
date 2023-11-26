"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AdopterSchema extends Schema {
  up() {
    this.create("adopters", (table) => {
      table.increments();
      table.string("name", 50).notNullable();
      table.date("date_birth").notNullable();
      table.string("household", 200).notNullable();
      table.string("telephone", 9).notNullable();
      table
        .integer("id_gen")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("genders");
      table
        .integer("id_estad")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("statuses");
      table.text("description", 150).notNullable();
      table.string("email", 254).notNullable().unique();
      table.string("password", 60).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("adopters");
  }
}

module.exports = AdopterSchema;
