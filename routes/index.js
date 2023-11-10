const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
const middleware = require('../middleware')

router.get('/', (req, res) => res.send('Root!!'))

router.get('/princesses', controllers.getAllPrincesses)

router.get('/princesses/:id', controllers.getPrincessById)

router.put('/princesses/:id', controllers.updatePrincess)

router.delete('/princesses/:id', controllers.deletePrincess)

router.post('/princesses', controllers.createPrincess)

router.get('/users', controllers.getAllUsers)

router.get('/users/:id', controllers.getUserById)

router.get('/myprincesses', controllers.getMyPrincesses)

router.put(
  '/users/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.updateUser
)

router.delete(
  '/users/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.deleteUser
)

router.post('/users', controllers.createUser)

router.get(
  '/myprincesses',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.getMyPrincesses
)
router.get(
  '/myprincesses/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.getMyPrincessById
)
router.post(
  '/myprincesses',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.createMyPrincess
)
router.put(
  '/myprincesses/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.updateMyPrincess
)
router.delete(
  '/myprincesses/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.deleteMyPrincess
)

module.exports = router
