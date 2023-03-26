// MongoDB is a NON=SQL database [StructuredQuerryLanguage]
// Data is stored in a collection (like objects) instead of tables consisting of rows and columns


//MONGO CONSOLE CODE//////////////////////////////////////////////////////


//Display all DBs
show dbs 

//  To create a new DB from terminal:
 use JerryDB

//  Create a new collection:
 db.createCollection('myCollection') 

//Delete a collection
db.myCollection.drop()

//////////////////////////////CRUD OPERATIONS///////////////////////////////

//CREATE Data
db.myCollection.insertOne({Name: 'Glass Cleaner', Brand:'Kalus',Weight:'19 gs'})

//VIEW Data
db.myCollection.find()

 //UPDATE Data
 db.mycollection.updateOne({name:'Apple'},{$set:{color:'Gold'}})

 //DELETE
 db.mycollection.deleteOne({name:'Nokia'})


 