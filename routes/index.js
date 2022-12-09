const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('Root!!'))

router.get('/princesses', controllers.getAllPrincesses)

module.exports = router
