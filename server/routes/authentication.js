const express = require('express')
const router= express.Router()
const userController= require('../app/Controller/UserController')



router.post('/login',userController.loginSubmit)
router.post('/register',userController.register)
router.get('/',userController.loginForm)

module.exports = router;