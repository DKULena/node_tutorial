const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = require('./logEvents')
const EventEmitter = require('events');
class Emitter extends EventEmitter { };

const myEmitter = new Emitter();


// setTimeout(() => {
//     myEmitter.emit('log', 'Log event emitted!');
// }, 2000);