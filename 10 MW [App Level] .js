// Middleware
// Middlewares are applied on routes
// They are the functions which help to
// Modify and edit and access the request and response
// To check user's authencity
// To cause some changes in the response and requests


// interivewQuestion!
// Difference between Route level and Application level middleware?
// AppLevel middleware is applied universally to all the routes whereas
// RouteLevel middleeware is applied specifically to one or more than one specific routes of our choice



const express = require('express')
const app = express();


//Middleware
const reqFilter = (req,res,next)=>{
    console.log("Middleware: Activated")

    if(req.query.age>18 && req.query.age<45){
    res.send("AGE is Okay")
    }

    else if(!req.query.age>45){
        res.send("Age is missing")
    }

else{
    res.send("Pls Enter Age ")
}
    
}

//Using Middleware
app.use(reqFilter);





app.get('/',(req,res)=>{
    res.send("<h1></h1>")
})

app.get('/users',(req,res)=>{
    res.send("<h1>This is Users Page! </h1>")
})


app.listen(2000);
console.log("All ok!")









