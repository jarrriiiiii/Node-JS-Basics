////////////Schema separate file//////////////

const mongoose = require ('mongoose');

const ProductSchema = new mongoose.Schema({
    //Only the following mentioned 'Brand' fields will be allowed to enter, rest will be discarded
        Brand:String,
        Price:Number,
        Color:String,
    });


    module.exports = mongoose.model('cells',ProductSchema)



///////////Configuration separate file///////////

//importing MONGOOSE
const mongoose = require ('mongoose');
//Connect DB
mongoose.connect("mongodb://localhost:27017/jerry");


/////////////////////Main file code/////////////////

//Linking DB Configuration File
require('./config');
const Product = require('./product');




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////ALL IN ONE CODE FILE///////////////////////////////////////


//importing Mongoose
const mongoose = require ('mongoose');



//Just make a async function
const main = async() =>{

    //CONNECTING MONGOOSE
    await mongoose.connect("mongodb://localhost:27017/jerry");

    //MAKING SCHEMA
    //Only the following mentioned 'Brand' fields will be allowed to enter, rest will be discarded
    const ProductSchema = new mongoose.Schema({ Brand:String });

//APPLYING THE ABOVE SCHEMA TO THE COLLECTION OF THE DATABASE
    const productsModel = mongoose.model('phones',ProductSchema) //Here'phones' is DB Collection and ProductSchema is the above mentioned Schema
    //Only the fields mentioned above will be considered, rest will be discarded


    //Now, trying to save a new data!
    let data = new productsModel({Brand:"XHHAHdfAXX"});
    let result = await data.save();
    console.log(result);

}


//Executing the above mentioned function    
main();