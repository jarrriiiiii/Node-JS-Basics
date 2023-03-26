///GETTING BROWSER REQUEST

const express = require('express');
const app = express();

//for homepage
app.get('',(req,resp)=>{   
console.log("Data Sent By Browser--->", req.query)
resp.send('HOME '+(req.query.name))
}) //localhost:3000/name=jerry


//live server
app.listen(5000)
