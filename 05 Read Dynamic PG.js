/////Making a dynamic page using template engine

//importing Express JS
const { response } = require('express');
const express = require('express');


// Making express an executable form 
const app = express();

//setting EJS Template
app.set('view engine','ejs')

//GET Method to send webpage, by using RES.RENDER
app.get('/profile',(req,res)=>{
const user = {name:'jari', gender:'female', age:22}
res.render('hello',{user})
})


app.listen(2000);





// ////CODE FOR EJS FILE
<h1>Hello World</h1>
<h2>Your name is:  <%=user.name%>  </h2>
<h2>Your gender is: <%=user.gender%>     </h2>








console.log("All ok")
//what is template engine?
///-We need to install them. It helps to run the dynamic page

///what is dynamic page?
///a page that gets updated coninously from DBs....static pages are opposite of this



///////////////////////////////////EXAMPLE 2////////////////////////////////////

const { response } = require('express');
const express = require('express');

const app = express();


app.set('view engine','ejs')


app.get('/profile',(req,res)=>{
const user = {name:'Syed Jari', gender:'Male', age:22, 
skills: ['Node','PHP','React']}
res.render('xx',{user})})

app.listen(2000);



//Code for ejs file

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>Hello World</h1>
<h2>Your name is:  <%=user.name%>  </h2>
<h2>Your gender is: <%=user.gender%>     </h2>
    
<ul>
    <% user.skills.forEach((items)=>{ %>
        <li> <%=items%></li>
    <% }) %>
</ul>

</body>
</html>