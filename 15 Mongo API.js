///////////////////////////////////////////////////////GET//////////////////////////////////////////////////////////////////

// GET API use:
// When we want to READ data in DBs via API


////////GET API, Data from DB is retrieved and sent to the POSTMAN



const dbConnect = require('./mongodb');
const express = require('express');

const app = express();



//Here, database data is retrieved and sent to the POSTMAN
app.get('/',async(req,res)=>{
    let result = await dbConnect();
    result = await result.find().toArray();
    res.send(result)
})


app.listen(2000);
//Check this with POSTMAN app


//Can we pass BODY in GET method.
//NO!





///////////////////////////////////////////////////////POST//////////////////////////////////////////////////////////////////
////////POST API, Data is retrieved from POSTMAN and sent to the POSTMAN

// POST API use:
// When we want to store new data in DBs via API


//imports
const dbConnect = require('./mongodb');
const express = require('express');
const app = express();

//JSON Data Receiver
app.use(express.json());


//POST API (Without DB association)
app.post('/',(req,resp)=>{
    resp.send("Data sent from VS CODE")
    console.log(req.body) //data received from POSTMAN
})

//POST API (Storing data in DB)
app.post('/',async(req,resp)=>{
    let data = await dbConnect();
    // let result = await data.insert(req.body)
  data = await data.insert(req.body)
    resp.send(data) 
})

app.listen(5000);




///////////////////////////////////////////////////////PUT//////////////////////////////////////////////////////////////////
// PUT API use:
// When we want to update data in DBs via API
//Here we will update our data by sending JSON file from POSTMAN


const dbConnect = require('./mongodb');
const express = require('express');
const { json } = require('express');
const app = express();


//JSON Data Receiver
app.use(express.json());


//PUT API
app.put("/",async(req,resp)=>{

    let data = await dbConnect();
    let result = data.updateOne({Brand: req.body.Brand},
        {$set:req.body})
    resp.send(result);

})

// PUT API with the PARAM Concept

app.put("/:variableparam",async(req,resp)=>{

console.log(req.params.variableparam)
resp.send("Ok")

})


app.listen(5000);

///////////////////////////////////////////////////////DELETE//////////////////////////////////////////////////////////////////
// DELETE API use:
// When we want to delete data in DBs via API

const dbConnect = require ('./mongodb');
const express = require('express')
const app = express();
app.listen(5000);

//To delete any entry from id, we must have the mongoDB object, 
//MongoDB object for deletion
const mongodb = require('mongodb')

//Delete API
app.delete("/:id",async(req,resp)=>{
    console.log(req.params.id);
    const data = await dbConnect();
    //We are using the MongoDB object which we imported above
    const result = await data.deleteOne({_id:new mongodb.ObjectID (req.params.id)})
    resp.send(result);
})

