const EventEmitter = require('events');

const emitter = new EventEmitter()

// listener
emitter.on('greeting', (name) => {
    console.log(`Hello ${name}`)
})

// emit event
emitter.emit("greeting", "Trung")