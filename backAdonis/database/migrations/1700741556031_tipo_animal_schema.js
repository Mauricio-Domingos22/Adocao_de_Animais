'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TipoAnimalSchema extends Schema {
  up () {
    this.create('tipo_animals', (table) => {
      table.increments()
      table.string('animal',100).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('tipo_animals')
  }
}

module.exports = TipoAnimalSchema
