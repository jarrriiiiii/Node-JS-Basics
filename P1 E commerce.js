//////////////////////////////////////////////////////////
////////External folder 'DB' ---> config.js///////////////
//////////////////////////////////////////////////////////
//Database Connection file





//importing Mongoose
const mongoose = require('mongoose');

//Making connection
mongoose.connect("mongodb://localhost:27017/e-commerce");









//////////////////////////////////////////////////////////
////////External folder 'DB' ---> product.js///////////////
//////////////////////////////////////////////////////////
//Product Schema File



//importing Mongoose
const mongoose = require('mongoose');


//Making Schema
const userSchema = new mongoose.Schema({
    name:String,
    price:String,
    category:String,
    userId:String,
    company:String
});

//Linking Schema and DB Collection and exporting
module.exports = mongoose.model("products", userSchema); //"Users" is a collection name, "userSchema" is above schema







//////////////////////////////////////////////////////////
////////External folder 'DB' ---> user.js///////////////
//////////////////////////////////////////////////////////
//User Schema File


//importing Mongoose
const mongoose = require('mongoose');


//Making Schema
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

//Linking Schema and DB Collection and exporting
module.exports = mongoose.model("users", userSchema); //"Users" is a collection name, "userSchema" is above schema


//////////////////////////////////////////////////////////
////////Mainfile ---> x.js///////////////
//////////////////////////////////////////////////////////



///////////////////////////////////////////EXPRESS JS////////////////////////////////////////////////////
const express = require("express");
const app = express();
app.listen(1000);


////////////////////////////////////////////MONGODB CODES////////////////////////////////////////////////
//Linking DB Configuration File
require("./DB/config");

//Importing Schema File
const User = require("./DB/user"); //For User's Record
const productx = require("./DB/product"); //For Product's Record

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

///////////////////////////////////////////Other codes////////////////////////////////////////////////////

//Importing CORS to prevent CORS error after adding the CORS module
const cors = require("cors");
    //Apply the CORS
    app.use(cors());


//To make JSON Readable
app.use(express.json());


///////////////////////////////////////////////APIs////////////////////////////////////////////////

// //1 Login Page - POST API - WITHOUT TOKEN
// app.post('/login',async (req,res)=>{

//     //To make sure EMAIL and PASSWORD both are entered, we will use this condition
//     if (req.body.email && req.body.password){
//     //This will fetch the result except for the PASSWORD
//     let user = await User.findOne(req.body).select("-password");

//     //If no user match is found, then we will get informed by this condition
//     if (user){
//     res.send(user)
//     }
//     else{
//     res.send("No Match Found!")
//     }
// }

// else{
//     res.send("Email or Password is missing. Enter Both!")
// }

// })

//1 Login Page - POST API - WITH TOKEN GENERATOR <TOKEN GENERATOR ARE ALWAYS SET ON LOGGIN APIS>
app.post("/login", async (req, res) => {
  //To make sure EMAIL and PASSWORD both are entered, we will use this condition
  if (req.body.email && req.body.password) {
    //This will fetch the result except for the PASSWORD
    let user = await User.findOne(req.body).select("-password");

    //If no user match is found, then we will get informed by this condition
    if (user) {
      //Implementing the JSON WEB TOKEN GENERATOR
      Jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        //user->above varaible
        if (err) {
          res.send({ result: "TRY AGAIN/JWT ERROR" });
        }
        res.send({ user, auth: token }); //'user' is above variable, 'auth' is just a variable name of the token number, 'token'
        console.log(token);
      });
    } else {
      res.send("No Match Found!");
    }
  } else {
    res.send("Email or Password is missing. Enter Both!");
  }
});

//2 Create User - POST API
app.post("/register",verifyToken, async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();

  //In result, we are getting passsword shown on screen, to remove the password:
  //Split result into objects
  result = result.toObject();

  //Delete the password object
  delete result.password;
  res.send(result)
});

//3 Add Product - POST API
app.post("/add-product", async (req, res) => {
  let product = new productx(req.body); //here productx is the name of collection
  let result = await product.save();

  res.send(result);
});

//4 List of ALL Products - GET API
app.get("/product", async (req, res) => {
  let products = await productx.find();

  //Applying this check if no products are available, then user will be awared
  if (products.length) {
    res.send(products);
  } else {
    res.send("0 Products Available");
  }
});

//5 Update Products - PUT API
app.put("/product/:_id", async (req, res) => {
  let result = await productx.updateOne(
    { id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
  console.log(result);
  console.log(req.body);
  console.log(req.params._id);
});

//6 Delete Products - DELETE API
app.delete("/delete/:id", async (req, resp) => {
  let data = await productx.deleteOne({ _id: req.params.id });

  resp.send(data);
});

//7 Display Single Product For Prefill Purpose - GET API
app.get("/product/:id", async (req, res) => {
  let result = await productx.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send("NO SINGLE PRODUCT");
    console.log("LOL");
  }
});

//8 Update Data - PUT API
app.put("/product/:id", async (req, resp) => {
  let data = await productx.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  resp.send("OK");
  console.log(req.body);
});

//9 Search Data - PUT API
app.put("/search/:key", verifyToken, async (req, resp) => {
  let data = await productx.find({
    $or: [
      //add as many as fields as you want if you want to include the search
      { name: { $regex: req.params.key } },
      { price: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ],
  });
  resp.send(data);
  console.log(req.params.key);
});
