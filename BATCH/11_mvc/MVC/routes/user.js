const express = require('express');
const router = express.Router();
const userController = require('../controller/user');
const userNameMiddleware = require('../middleware/userNameValidation');
const emailMiddleware = require('../middleware/emailValidation');


router.get('/userlist',userController.getUserDetails);
router.post('',userNameMiddleware,emailMiddleware,userController.postUserDetails);

module.exports = router;