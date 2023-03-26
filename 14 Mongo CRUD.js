////MONGODB CONNECTION - EXTERNAL FILE CODE

const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'jerry'


async function dbConnect (){

    let result = await client.connect();
    let db = result.db(database);
    return db.collection('x')
}


module.exports = dbConnect;


//MAINFILE CODE

const dbConnect = require('./x file')
dbConnect();

//Above one is PENDING PROMISE
//We can use Promise or ASYNC AWAIT method to deal with the above PENDING PROMISE

//PROMISE method is old and hard method


//ASYNC WAIT is modern method and easy method
const main = async ()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}

main();



/////////////////////////////////////////////////////////////////////////////////////////


/////ALL IN FILE CODE TO READ DATA FROM MONGODB





//Reading data
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'jerry'


// Above one is PENDING PROMISE
// We can use Promise or ASYNC AWAIT method to deal with the above PENDING PROMISE
// PROMISE method is old and hard method

// ASYNC WAIT is modern method and easy method
async function getData (){

    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('x')
    let response = await collection.find({}).toArray();
    console.log(response)}

getData();








/////////////////////////////////////////MONGO CRUD////////////////////////////////////////////////////////////


//////////////////MongoConnection File Code////////////////////////////


// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'jerry';

async function dbConnect() {
  // Use connect method to connect to the server
  let result = await client.connect();
  const db = result.db(dbName);
  return db.collection('phone');} //collection name is 'phone'

module.exports = dbConnect;


/////////CREATE////////////
const dbConnect = require('./mongodb');

const insert = async ()=>{
    const db = await dbConnect();
    const result = db.insert(
        [
            {Brand:'Apple',Model:'iPhone 13 Pro',Price:5000,Color:'Gold'},
            {Brand:'Samsung',Model:'Note 10',Price:4700,Color:'White'},
            {Brand:'Oppo',Model:'A32',Price:2200,Color:'Gold'},
            {Brand:'RealMe',Model:'C9',Price:1000,Color:'Yellow'},
            {Brand:'Infinix',Model:'X7',Price:1200,Color:'Red'},
            {Brand:'LG',Model:'G4843',Price:500,Color:'Pink'},
        ]
        )
    console.log("ok");
}

insert();


////////////READ////////////
const dbConnect = require('./mongodb');


const fetchData = async ()=>{
    let data = await dbConnect();
    data = await data.find().toArray();     //find(Name:'iPhone')
    console.log(data);
}


fetchData();



////////////UPDATE////////////
const dbConnect = require('./mongodb')

const updateData = async ()=>{
    let result = await dbConnect();
    let output = result.updateOne(

        { "Brand" : "Pana" },
        { $set: { "Brand" : "Qmobile", "Model":"IPAD" } })
}
    updateData();
    console.log("Ok")

    //if there are 3 records of same name, for eg:Pana, then the first one 
    //will be updated immediately




////////////DELETE///////////
    const dbConnect = require('./mongodb')

    const Mydelete = async()=>{
        const result = await dbConnect();
        let data = await result.deleteOne({"Brand":"Oppo"})
        // let data = await result.deleteMany({"Brand":"Oppo"})
        console.log(data)
        
        
        if (data.acknowledged){
            console.log("Delete Success!")
        }
    }
    
    Mydelete();
    //Check delete count, if its zero then it means no items were deleted

    