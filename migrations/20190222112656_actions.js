exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl) {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.string('description', 128).notNullable();
      tbl.text('notes').notNullable();
      tbl.boolean('completed').defaultTo(false);

      
      tbl
      .integer('project_id')
      .unsigned()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
