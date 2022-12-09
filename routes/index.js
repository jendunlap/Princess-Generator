const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('Root!!'))

router.get('/princesses', controllers.getAllPrincesses)

router.get('/princesses/:id', controllers.getPrincessById)

router.put('/princesses/:id', controllers.updatePrincess)

router.delete('/princesses/:id', controllers.deletePrincess)

router.post('/princesses', controllers.createPrincess)

router.get('/users', controllers.getAllUsers)

router.get('/users/:id', controllers.getUserById)

router.put('/users/:id', controllers.updateUser)

router.delete('/users/:id', controllers.deleteUser)

router.post('/users', controllers.createUser)

module.exports = router
