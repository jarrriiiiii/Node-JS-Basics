////HIDE THE PAGE EXTENSION

const express = require('express')
const path = require('path')



const app = express();
const myPath = path.join(__dirname, 'manjan')

////DO NOT USE THIS!
/////app.use(express.static(myPath))

////USE THIS
app.get('', (_,res)=>{
    res.sendFile(`${myPath}/home.html`)
})

app.get('/about', (_,res)=>{
    res.sendFile(`${myPath}/about.html`)
})


//ERROR PAGE
app.get('*', (_,res)=>{
    res.sendFile(`${myPath}/error.html`)
})

/////interviewQuestion
// How to load a file in GET method?
// -app.sendFile


app.listen(4000);


console.log("All ok");