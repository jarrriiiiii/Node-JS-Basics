////Reading HTML page from other folders while using node
//EXPRESS STATIC FUNCTION

//315


const express = require('express');
const app = express();

//IGNORE -- Auto created imports by nodes
const { userInfo } = require('os');
const { dirname } = require('path');

//Import this module to mention/specify the folder or path for any action
const path = require('path');


//Defining the path where our readymade pages are present!
const myPath = path.join(__dirname, 'manjan');


//Express Static to read the HTML pages from our defined path
app.use(express.static('manjan'));


//server port
app.listen(2000);

console.log(myPath)


// ////interview questions
// Path module: helps to gain path of any folder 
// Static method: loads static content/page 

// Can we apply CSS directly from static method?
// -No we cant!


// Why do we have remove the extention of page?
// -Because we dont want viewers to know that what technology such as html, php, etc is used by our page due to security purpose. Thats why we have to remove the extensions


// 404PAGE
// -We make this page to display when theres an error encountered by the user


