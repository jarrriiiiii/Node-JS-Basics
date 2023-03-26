// ////////////////////////////////METHOD 1//////////////////////////////////////////////////


// interivewQuestion!
// Difference between Route level and Application level middleware?
// AppLevel middleware is applied universally to all the routes whereas
// RouteLevel middleeware is applied specifically to one or more than one specific routes of our choice


// Route level middleware or SINGLE ROUTED MIDDLEWARE
// Works on single or group of routes or ALL ROUTES

const express = require('express')
const app = express();

//Middleware function
const reqFilter = (req,resp,next)=>{
    
    if (req.query.age == 0){
        resp.send("Fire!") }

    next();}


//This is not used to implement middleware/No universal implementation
// app.use(reqFilter);


//MiddleWare is applied on custom route manually inside
app.get('/',reqFilter,(req,resp)=>{
    resp.send("HOME")
})

//No MiddleWare is applied
app.get('/about',(req,resp)=>{
    resp.send("ABOUT")
})

app.get('/profile',(req,resp)=>{
    resp.send("PROFILE")
})


app.listen(2000);


//////////////////////////////////METHOD 2 [Using separate file]////////////////////////////////////////////

//Route level middleware or SINGLE ROUTED MIDDLEWARE 
//Works on single or group of routes or ALL ROUTES

const express = require('express')
const app = express();

//file is imported
const reqFilter = require('./routefile')

//This is not used
// app.use(reqFilter);

//ReqFilter is applied on custom route manually inside
app.get('/',reqFilter,(req,resp)=>{
    resp.send("HOME")
})

//No ReqFilter is applied
app.get('/about',(req,resp)=>{
    resp.send("ABOUT")
})

app.get('/profile',(req,resp)=>{
    resp.send("PROFILE")
})
app.listen(2000);


//////////////////////////////////////////
//separate Routefile code

module.exports = (req,resp,next)=>{
    
    if (req.query.age == 0){
        resp.send("Fire!") }

    next();}


    //////////////////////METHOD 3 [ExpressRouter Method]/////////////////////////////////////

//Route level middleware or SINGLE ROUTED MIDDLEWARE
//Works on single or group of routes or ALL ROUTES

const express = require('express')
const app = express();

//importing ExpressRouter
const route = express.Router();

//Middleware function
const reqFilter = (req,resp,next)=>{
    
    if (req.query.age == 0){
        resp.send("Route Activated!") }
next();}


//This is not used to implement middleware/No universal implementation
// app.use(reqFilter);

//ExpressRouter enabler
app.use('/',route)
route.use(reqFilter)

//MiddleWare is applied on custom route manually inside
route.get('/',reqFilter,(req,resp)=>{
    resp.send("HOME")
})

route.get('/contact',(req,resp)=>{
    resp.send("CONTACT")
})



//No MiddleWare is applied
app.get('/about',(req,resp)=>{
    resp.send("ABOUT")
})

app.get('/profile',(req,resp)=>{
    resp.send("PROFILE")
})

//server
app.listen(2000);