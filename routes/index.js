const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('Root!!'))

router.get('/princesses', controllers.getAllPrincesses)

router.get('/princesses/:id', controllers.getPrincessById)

router.put('/princesses/:id', controllers.updatePrincess)

router.delete('/princesses/:id', controllers.deletePrincess)

router.post('/princesses', controllers.createPrincess)

module.exports = router
