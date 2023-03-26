const express = require('express')
const app = express();
const path = require('path')
const myPath = path.join(__dirname, '/manjan')


app.set('view engine','ejs')


//dynamic page
app.get('/profile',(req,resp)=>{
    resp.render('profile')
})


//static page
app.get('/login',(req,resp)=>{
    resp.sendFile(`${myPath}/contact.html`)
})

app.listen(2000)
console.log("all ok")