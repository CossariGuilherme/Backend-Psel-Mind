'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NewColumnsSchema extends Schema {
  up () {
    this.alter('users', (table) => {
      // alter table
      table.integer('acesso').notNullable()
      table.string('CPF', 14).notNullable().unique()
      table.string('imagem')
    })
  }

  down () {
    this.alter('new_columns', (table) => {
      // reverse alternations
      table.dropColumn('acesso').notNullable()
      table.dropColumn('CPF', 14).notNullable().unique()
      table.dropColumn('imagem')
    })
  }
}

module.exports = NewColumnsSchema
