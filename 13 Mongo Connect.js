////Export file code

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


////Primary file code
const dbConnect = require('./x file')
dbConnect();



///////////////////////////////////////////////////////ALL IN ONE FILE//////////////DONT USE/////////////////

//Connecting MONGO with NODE
//importing module
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
//Selecting DB
const database = 'jerry'


async function getData (){

    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('x')
    let response = await collection.find({}).toArray();
    console.log(response)}

getData();


// Can we connect 2 DBs in one file?
// YES WE CAN!

