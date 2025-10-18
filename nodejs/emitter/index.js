const EventEmitter = require('events');

const emitter = new EventEmitter()

// listener
emitter.on('greeting', (name) => {
    console.log(`Hello ${name}`)
})

// emit event
emitter.emit("greeting", "Trung")

// --------------------------------------------------
class MyEmitter {
    constructor() {
        this.events = {}
    }

    on(eventName, listener) {
        if (!this.events[eventName]) this.events[eventName] = [];
        this.events[eventName].push(listener)
    }

    off(eventName, listener) {
        if (!this.events[eventName]) return;
        this.events[eventName] = this.events[eventName].filter(fn => fn !== listener)
    }

    once(eventName, listener) {
        const wrapper = (...args) => {
            listener(...args);
            this.off(eventName, wrapper);
        }

        this.on(eventName, wrapper)
    }

    emit(eventName, ...args) {
        if (!this.events[eventName]) return ;
        this.events[eventName].forEach(listener => listener(...args))
    }
}