const express = require('express')
const router = express.Router()
const db = require('../db/users')

router.get('/', (req, res) => {
    db.getUsers(req.body)
    .then(users => {
        res.json(users)
    })
})

router.post('/', (req, res) => {
    let username = req.body.username
    db.createUser(username)
    .then(owners => {
        res.json(owners)
    })

})

module.exports = router