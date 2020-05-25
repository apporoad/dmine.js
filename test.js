var knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'docker.apporoad.site',
    user : 'postgres',
    password : 'save11',
    database : 'postgres'
  }
})


// knex.schema.createTable('users', function (table) {
//   table.increments();
//   table.string('name');
//   table.timestamps();
// })

// knex.schema.withSchema('public').createTable('users', function (table) {
//   table.increments();
// })

knex.withSchema('test').select('*').from('test').then(da =>{
    console.log(da)

})

