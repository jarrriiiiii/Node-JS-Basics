const mongoose = require ('mongoose');
mongoose.connect("mongodb://localhost:27017/jerry");


//Making Schema: Which means following field will be entered, rest will be discarded
const ProductSchema = new mongoose.Schema({
//Only the following mentioned 'Brand' fields will be allowed to enter, rest will be discarded
    Brand:String,
    Price:Number,
    Color:String,
});


///////////////////////////////ADD/////////////////////////////
const AddProduct = async() =>{
const productsModel = mongoose.model('cells',ProductSchema)
    //Only the fields mentioned above will be considered, rest will be discarded
    let data = new productsModel({Brand:"XXX", Price:390, Color:"Blue"});
    let result = await data.save();
    console.log(result);
}

AddProduct();


///////////////////////////////UPDATE/////////////////////////////
const UpdateProduct = async() =>{
    const productsModel = mongoose.model('cells',ProductSchema)
        //Only the fields mentioned above will be considered, rest will be discarded
        let data = await productsModel.updateOne( 
            {Brand:"Glass Cleaner"},
            {
                $set:{Price:90, Color:"FUCKKKK"}
            }
        )

        console.log(data);
    }
    
    UpdateProduct();

///////////////////////////////DELETE/////////////////////////////

const DeleteProduct = async() =>{
    const productsModel = mongoose.model('cells',ProductSchema)
        //Only the fields mentioned above will be considered, rest will be discarded
        let data = await productsModel.deleteOne({Brand:'XXX'})

        console.log(data);
    }

DeleteProduct();


///////////////////////////////FIND/////////////////////////////

const FindProduct = async() =>{
    const productsModel = mongoose.model('cells',ProductSchema)
        //Only the fields mentioned above will be considered, rest will be discarded
        let data = await productsModel.findOne({Brand:'XXX'})

        console.log(data);
    }

    FindProduct();