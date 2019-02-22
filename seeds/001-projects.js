exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'stuff', description: 'please work', completed: false},
        {name: 'adfasdfasdfadsf', description: 'adfasdf', completed: false},
        {name: 'adfasdfadsf', description: 'adfasdfasdfasdfasdfadsfasdfasdf', completed: false}
      ]);
    });
};