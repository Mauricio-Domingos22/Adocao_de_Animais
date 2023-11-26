'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GenderSchema extends Schema {
  up () {
    this.create('genders', (table) => {
      table.increments()
      table.string("description", 14).notNullable().unique();
      table.timestamps()
    })
  }

  down () {
    this.drop('genders')
  }
}

module.exports = GenderSchema
