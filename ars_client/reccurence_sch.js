var schedule = require('node-schedule');


var rule = new schedule.RecurrenceRule();
rule.minute = 1;

var j = schedule.scheduleJob(rule, function(){
  console.log('The answer to life, the universe, and everything!');
});


let startTime = new Date(Date.now() + 5000);
let endTime = new Date(now.getTime() + 5000);
var j = schedule.scheduleJob({ start: startTime, end: endTime, rule: '*/1 * * * * *' }, function(){
  console.log('Time for tea!');
});
