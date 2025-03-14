const logEvents = require('./logEvents')

const EventEmitter = require('events');

class MyEmitter extends EventEmitter { };

// initial object
const myEmitter = new MyEmitter();

myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    // Emit event
    myEmitter.emit('log', 'Log event emitted!');
}, 2000);