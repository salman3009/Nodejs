const eventEmitter = require('events');

const eventsHandler = new eventEmitter();


//event listener
eventsHandler.on('register',function(fullName){
    console.log("reading the data",fullName);
})

eventsHandler.on('read',function(){
    console.log("read function");
})



//event emitter
eventsHandler.emit('register',"akash");
eventsHandler.emit('register',"suresh");
eventsHandler.emit('read');
