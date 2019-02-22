
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {name: 'adsfadfadsf', project_id: 1},
        {name: 'asdfasdfasdf', project_id: 1},
        {name: 'asdfasdfafd', project_id: 3},
      ]);
    });
};