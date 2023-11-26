'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SexSchema extends Schema {
  up () {
    this.create('sexes', (table) => {
      table.increments()
      table.string('description',12).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('sexes')
  }
}

module.exports = SexSchema
