
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {name: 'adsfadfadsf', description:'adslkfjas;dlkfj', notes:'adlkfjas;df',completed:'false', project_id: 1},
        {name: 'asdfasdfasdf', description:'adslkfjas;dlkfj', notes:'adlkfjas;df',completed:'false', project_id: 1},
        {name: 'asdfasdfafd', description:'adslkfjas;dlkfj', notes:'adlkfjas;df', completed:'false', project_id: 3},
      ]);
    });
};