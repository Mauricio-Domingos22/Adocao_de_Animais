'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CorSchema extends Schema {
  up () {
    this.create('cors', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('cors')
  }
}

module.exports = CorSchema
