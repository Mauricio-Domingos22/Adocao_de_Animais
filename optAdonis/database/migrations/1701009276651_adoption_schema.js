'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdoptionSchema extends Schema {
  up () {
    this.create('adoptions', (table) => {
      table.increments()
      table.integer('adopter_id').unsigned().notNullable().references('id').inTable('adopters')
      table.integer('animal_id').unsigned().notNullable().references('id').inTable('animals')
      table.date("date_adoption").notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('adoptions')
  }
}

module.exports = AdoptionSchema
