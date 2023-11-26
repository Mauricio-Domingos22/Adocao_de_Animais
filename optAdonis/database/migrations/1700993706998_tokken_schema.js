'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TokkenSchema extends Schema {
  up () {
    this.create('tokkens', (table) => {
      table.increments()
      table.integer('adopter_id').unsigned().references('id').inTable('adopters')
      table.string('token', 255).notNullable().unique().index()
      table.string('type', 80).notNullable()
      table.boolean('is_revoked').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('tokkens')
  }
}

module.exports = TokkenSchema
