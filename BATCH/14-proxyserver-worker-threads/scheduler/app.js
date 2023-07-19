const schedule = require('node-schedule');


function start(){
    try{
      schedule.scheduleJob('*/5 * * * * *',()=>{
        console.log("Calling every 5 seconds");
      })
    }catch(err){
        console.log("error occured",err);
    }
}
start();

function apiCall(){
    
}