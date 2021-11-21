const eventEmitter = require('events') 
const emitter = new EventEmitter()
emitter.on("sendRequest",()=>{
    console.log("request received")
})
emitter.emit("sendRequest")