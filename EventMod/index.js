const EventEmitter = require("events");


const event = new EventEmitter();

// event.on('sayMyName', ()=>{
//     console.log("my name is krishna");
// })
// event.on('sayMyName', ()=>{
//     console.log("my name is ichika");
// })
// event.on('sayMyName', ()=>{
//     console.log("my name is nitin");
// })

// event.emit('sayMyName');

event.on("checkPage", (sc, msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
})


event.emit('checkPage', 200, "ok");
