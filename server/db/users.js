const connection = require('./connection')

function getUsers() {
    const conn = connection
    return conn ('users')
    .select()
}

function createUser(username) {
    const conn = connection
    return conn('users')
    .insert(username)
}



module.exports = {createUser, getUsers}