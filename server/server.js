const path = require('path')
const express = require('express')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use('/api/users', require('./routes/routes'))

module.exports = server
