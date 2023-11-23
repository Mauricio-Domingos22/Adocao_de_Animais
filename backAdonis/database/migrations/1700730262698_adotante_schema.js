"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AdotanteSchema extends Schema {
  up() {
    this.create("adotantes", (table) => {
      table.increments();
      table.string("nome", 50).notNullable();
      table.date("data_nascimento").notNullable();
      table.string("morada", 200).notNullable();
      table.string("telefone", 9).notNullable();
      table
        .integer("id_gen")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("generos");
      table
        .integer("id_estad")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("estados");
      table.string("descricao", 150).notNullable();
     
      table.timestamps();
    });

    this.table('adotantes', (table) => {
      table.foreign('id').references('id').inTable('users'); 
    });
  }

  down() {
    this.drop("adotantes");
  }
}

module.exports = AdotanteSchema;
