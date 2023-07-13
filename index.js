const School = require('./event')
//register a listener for bellRing

const school = new School();

school.on('bellRing', function(period){
    console.log(`shahin event k dore fel!!!, because ${period}`);
});
school.startPeriod()