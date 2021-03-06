'use strict'
exports.up = function(knex) {
  return knex.schema.createTable('events', (table) => {
    table.increments()
    table.integer('vehicle_id').unsigned()
    table.foreign('vehicle_id').references('events_vehicle_id_foreign')
    table.string('address').notNullable()
    table.string('lat').notNullable()
    table.string('lng').notNullable()
    table.string('description').notNullable()
    table.string('group').unsigned()
    table.foreign('group').references('users.user_id')
    table.string('date').notNullable()
    table.string('time').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('events')
}
