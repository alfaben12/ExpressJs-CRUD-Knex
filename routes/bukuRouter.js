const express = require("express")
const router = express.Router()

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'pulsa'
    },
    debug: true
});
const bukuModel = require("../models/buku")
const bukuController = require("../controllers/bukus")

router.get('/', bukuController.index)

router.get('/buku', async (req, res ) => {
    bukuModel.getAll().then(function (data) {
        res.json(data)
    });
})

router.get('/add', bukuController.add)

router.post('/processAdd', bukuController.processAdd)

router.get('/modify/:id', bukuController.modify)

router.put('/processModify/:id', bukuController.processModify)

router.delete('/processDelete/:id', bukuController.processDelete)

module.exports = router