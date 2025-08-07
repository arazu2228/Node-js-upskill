import { EventEmitter } from 'events'

const events = new EventEmitter()

events.on('event1', (event1)=>{
  console.log("== EVent 1 : ", event1)
})

events.emit('event1', { id : 1 , name : "shree" })