"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AdministradorSchema extends Schema {
  up() {
    this.create("administradors", (table) => {
      table.increments();
      table.string("nome", 50).notNullable();
      table.timestamps();
    });

    this.table('administradors', (table) => {
      table.foreign('id').references('id').inTable('users'); 
    });
  }

  down() {
    this.drop("administradors");
  }
}

module.exports = AdministradorSchema;
