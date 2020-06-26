'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('title')
      table.text('description')
      table.json('pictures')
      table.json('properties')
      table.integer('qty')
      table.decimal('price')
      table.integer('category_id').unsigned().index()
      table.foreign('category_id').references('categories.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
