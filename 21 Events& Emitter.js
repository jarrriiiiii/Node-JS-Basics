// If somebody says to make a button in NODEJS, say no to him because its
// freaking nodejs and not some stupid html,css

// But theres a way to make a button like thing which can be executed through APIs
// We use event emitter

const express = require('express');
const app = express();

//Event Emitter module, needs to be imported to work with this
const EventEmitter = require('events');
//An object will be made of this EventEmitter
const event = new EventEmitter();


let countt = 0;

//Creating a event, which will be executed by any of the below APIs
event.on("CountAPI",()=>{
    countt++;
    console.log("Event Called: ", countt)
})



//Making random APIs to execute the above event
app.get('/',(req,res)=>{
    res.send("HOME OK")
    event.emit("CountAPI"); //Above event is placed here, and will be executed when this API will be executed!
})


app.get('/search',(req,res)=>{
    res.send("Search OK")
    event.emit("CountAPI"); //Above event is placed here, and will be executed when this API will be executed!
})


app.listen(2000);