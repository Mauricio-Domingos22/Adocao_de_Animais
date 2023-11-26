'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RaceSchema extends Schema {
  up () {
    this.create('races', (table) => {
      table.increments()
      table.string("description", 100).notNullable().unique();
      table
        .integer("type_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("type_animals");
      table.timestamps()
    })
  }

  down () {
    this.drop('races')
  }
}

module.exports = RaceSchema
