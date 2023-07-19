const express =  require('express');
const router = express.Router();
const userController = require('../controller/userController');


router.post('/register', userController.registerNewuser);
router.post('/login', userController.loginNewUser);

module.exports = router;