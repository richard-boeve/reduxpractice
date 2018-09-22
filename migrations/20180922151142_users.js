exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary()
        table.string('username')
    })  
};

exports.down = function(knex, Promise) {
    return knex.schema.droptable('users')
};