//HOW TO SHOW HTML AND JSON DATA ON WEBPAGE
const express = require("express");
const app = express();

//MAIN PAGE, contains the link to the page 2
app.get("", (req, resp) => {
  resp.send(`<h1>LOCAL PAYMENT GATEWAY</h1
     <br> 
     <a href="/send">Pay Now</a>`);
});

//PAGE 2, contains the link to the page 1 (mainpage)
app.get("/send", (req, resp) => {
  //add query --> ?name=jerry
  const q = req.query.name;
  resp.send(`<input type=text placeholder=${q}>  
    <button>Send Funds</button>
     <br>
     <a href="/">Exit</a> `);
});

//Simply sending a JSON data to the browser
app.get("/json", (req, resp) => {
  resp.send(
    [
    {
      name: "Syed",
      age: 22,
      University: "BUKC",
    },

    { name: "Sajid", 
    age: 19,
    University: "BUKC" 
},
  
]);
});


//Live Server Port
app.listen(3000);

