//////////////////////////////////////////Main file code///////////////////////////////////
const express = require('express');
const app = express();

require('./config');
const Product = require('./product');
app.listen(5000);
app.use(express.json());



//POST API -- ADD DATA
app.post("/create", async(req,resp)=>{


    let data = new Product(req.body);
    let result = await data.save();
     console.log(result)
    resp.send(result);
    
    })


//GET API--VIEW DATA
app.get("/list", async(req,resp)=>{

let data = await Product.find(); 
resp.send(data)

})



//DELETE API -- Delete Data
app.delete("/delete/:_id", async(req,resp)=>{

    let data = await Product.deleteOne(req.params)
   console.log(data);
    resp.send(data)
    })


//PUT API -- Update Data
app.put("/update/:_id", async(req,resp)=>{

    let data = await Product.updateOne(req.params,
        {$set: req.body}
    );
     resp.send("OK" )
    console.log(req.body)

    })



//PUT API ---Search Data
app.put("/search/:key",async(req,resp)=>{

    let data = await Product.find(
    {
        "$or":[//add as many as fields as you want if you want to include the search
            {"Brand":{$regex:req.params.key}},
            {"Color":{$regex:req.params.key}}
        ]
    }
)
resp.send(data)
console.log(req.params.key)
})

///////////////////////////PRODUCT FILE CODE///////////////////
const mongoose = require ('mongoose');



const ProductSchema = new mongoose.Schema({
    //Only the following mentioned 'Brand' fields will be allowed to enter, rest will be discarded
        Brand:String,
        Price:Number,
        Color:String,
    });


module.exports =  mongoose.model('cells',ProductSchema);



////////////////////CONFIG FILE CODE////////////////////////////////////////
const mongoose = require ('mongoose');
mongoose.connect("mongodb://localhost:27017/jerry");

