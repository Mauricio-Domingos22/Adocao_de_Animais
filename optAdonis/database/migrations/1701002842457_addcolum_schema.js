'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddcolumSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.string('name').notNullable();
    })
  }

  down () {
    this.table('users', (table) => {
      table.dropColumn('name');
    });
  }
}

module.exports = AddcolumSchema
