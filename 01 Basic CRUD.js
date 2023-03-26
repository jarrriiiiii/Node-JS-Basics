//importing
const fs = require ('fs');
const path = require('path');

//Selecting custom folder where our files will be created/deleted,etc
const DirPath = path.join(__dirname,'CRUD');

// CREATE
fs.writeFileSync(`${DirPath}/je.text`,'Helloworld')


// READ
const p = fs.readFileSync(`${DirPath}/jerry.text`,'utf8')
console.log(p)

// READ2
fs.readFile(`${DirPath}/jerry.text`,'utf-8',(err, item)=>{console.log(item)})


// UPDATE
fs.appendFile(`${DirPath}/jerry.text`,'ooo',(err)=>{
    if(!err){console.log("SUCCESS!")}
})

// RENAME
fs.rename(`${DirPath}/je.text`, `${DirPath}/abbass.txt`,(err)=>{
    if (!err){console.log("Success Rename!!")}
})

// DELETE
fs.unlinkSync(`${DirPath}/je.text`)




//----------------------------------------------
//Create a basic Server
let http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
