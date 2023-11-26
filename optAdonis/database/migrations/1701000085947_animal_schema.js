'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnimalSchema extends Schema {
  up () {
    this.create('animals', (table) => {
      table.increments()
      table.string("name", 50).notNullable();
      table
        .integer("sex")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("sexes");
      table.date("age");
      table.float("height");
      table.float("weight").notNullable();
      table
        .integer("race")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("races");
      table
        .integer("type_animal")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("type_animals");
      table
        .integer("color")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("colors");
      table.text("about_animal");
      table.string("Photograph");
      table.enum("status", ["disponivel", "adotado"]).defaultTo("disponivel");

      table.timestamps()
    })
  }

  down () {
    this.drop('animals')
  }
}

module.exports = AnimalSchema
