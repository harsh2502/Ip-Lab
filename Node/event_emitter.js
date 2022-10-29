const Eventemitter= require('events')
const myEmitter= new Eventemitter()
myEmitter.on('Test',()=>{
console.log("Test was fired")
})
myEmitter.on('Test',()=>{
console.log("Test was fired")
})
myEmitter.on('Test',()=>{
console.log("Test was fired")
})
myEmitter.emit('Test')