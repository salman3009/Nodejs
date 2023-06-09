
const Schedule = require('node-schedule');

function start () {
         console.log("schedulerConfiguration: Entering the sendmail scheduler");
        try {
            var j = Schedule.scheduleJob('*/5 * * * * *', function () {
               console.log("it is calling")
            });
        } catch (e) {
            console.log("schedulerConfiguration :Exception in sendmail scheduler ", e);
        }
}
start();


