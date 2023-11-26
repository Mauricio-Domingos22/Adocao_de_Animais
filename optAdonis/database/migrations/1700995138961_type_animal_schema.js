'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypeAnimalSchema extends Schema {
  up () {
    this.create('type_animals', (table) => {
      table.increments()
      table.string('animal',100).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('type_animals')
  }
}

module.exports = TypeAnimalSchema
