///////////////////////////////////////////EXPRESS JS////////////////////////////////////////////////////
const express = require("express");
const app = express();
app.listen(1000);

//////////////////////////////////////////////JSON WEB TOKEN AUTHENTICATION////////////////////////////////////////////

//Importing JSON WEB Token Module to prevent any unauthorise access to our API
const Jwt = require("jsonwebtoken");

//Defining the secret key
const jwtKey = "e-comm";

//Making Middleware - To verify and authenticate the token
function verifyToken(req, resp, next) {
  //Acquiring the token that was sent from the POSTMAN
  let token = req.headers["authorization"];

  if (token) {
    //if token is sent

    token = token.split(" ")[1]; //We wrote [1] to select the 2nd index of array, [0] contains 'bearer'
    console.log("MIDDLE WARE CALLED", token); //Token[1] will be printed

    //Function to verify the token
    Jwt.verify(token, jwtKey, (err, valid) => { //'token' is the above defined variable, 'jwtkey' is the secret key defined above.
      if (err) {
        resp.status(404).send({ result: "Pls send valid token" }); //Adding Status just to let the client know about the error
      } else {
        next();
      }
    });
  } else {
    //if no token is sent:
    console.log("Please send token with header!");
    resp.send({ result: "Please send token with header!" });
  }
}



/////////////////////////////////////////////////API/////////////////////////


//LOGIN API - Generating the Token
app.post('/login',(req,res)=>{
  
  const user = {
    name:"Ali",
    email:"xxx@xxx.com"
  }

   //JSON WEB TOKEN GENERATOR
   Jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
    //user->above varaible
    if (err) {
      res.send({ result: "TRY AGAIN/JWT ERROR" });
    }
    res.send({ user, auth: token }); //'user' is above variable, 'auth' is just a variable name of the token number, 'token'
    console.log(token);
  });
})


//TESTING THE TOKEN From other apis
app.get('/',verifyToken,(req,res)=>{
  res.send("Hello")
})


