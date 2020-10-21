const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.delete("/library", function (req, res) {
    let id = req.query.id
    const result = db.remove('library', id)
    if (result) {
        res.send(result)
    }
    else {
        res.status(404).send('Not Found')
    }
})

module.exports = app