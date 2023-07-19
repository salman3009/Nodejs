const express =  require('express');
const app = express();
const bodyparser = require('body-parser');
const employeeRouter = require('./router/employeeRouter');
const userRouter = require('./router/userRouter');
const path = require('path');

app.use(bodyparser.json());

app.use((req,res,next)=> {
    next();
});

app.use('',express.static(path.join(__dirname, 'views')))

app.use('/api/employee',employeeRouter);
app.use('/api/user',userRouter);
module.exports = app;