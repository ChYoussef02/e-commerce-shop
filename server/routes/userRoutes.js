const router = require('express').Router()
const userController = require('../controllers/userController')
const { validationCheck } = require('../middlewares/dataCheckMiddleware')


router.post('/register',validationCheck,userController.register)
router.post('/login',validationCheck,userController.login)


module.exports = router