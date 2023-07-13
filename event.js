const EventEmitter = require('events');

//raise an event 
class School extends EventEmitter{
    startPeriod(){
        console.log('class started');

        setTimeout(()=>{
            this.emit('bellRing', 'second period end');
        }, 2000)
    }
}

module.exports = School;