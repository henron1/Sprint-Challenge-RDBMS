
exports.seed = function(knex, Promise) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        {name: 'adfasdfasdf', description: 'asdfasdfasdf', completed: false},
        {name: 'adfasdfasdf', description: 'asdfasdfasdf', completed: false},
        {name: 'asdfasdfasdf', description: 'asdfasdfasdfasdfasdfasdf', completed: false}
      ]);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
