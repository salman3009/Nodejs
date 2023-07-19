const express =  require('express');
const router = express.Router();
const employeeController =  require('../controller/employeeController');
const authorizeTokenMiddleware = require('../middleware/authorizationMiddleware');

router.get('/employeeList/fetch', authorizeTokenMiddleware, employeeController.getEmployeeList);
router.post('/createEmployee', authorizeTokenMiddleware, employeeController.createNewEmployee);
router.post('/deleteEmployee/:id', authorizeTokenMiddleware, employeeController.deleteEmployee);
router.post('/updateName/:userName', authorizeTokenMiddleware, employeeController.updateName);

module.exports = router;