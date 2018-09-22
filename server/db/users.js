const connection = require('knex')(config)

function createUser(username) {
const conn = connection
return conn('users')
    .insert({username})
}

module.exports = {createUser}