const app = require('./app');
const mongoose = require('mongoose');
const env = require('dotenv');
env.config();


mongoose.connect(process.env.MONGO_DB).then(()=> {
    console.log('DB is connected succcessfully');
}).catch((error)=> {
    console.log('error is'+ error);
});

app.listen(process.env.PORT, ()=> {
    console.log('SERVER IS RUNNING AT '+ process.env.PORT);
});