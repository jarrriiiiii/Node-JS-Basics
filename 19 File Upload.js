const express = require('express');
//This module is required for uploading
const multer = require('multer');
const app = express();
app.listen(2000)

//Upload function, we will then place this in our corresponding API
const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb)
        {
            cb(null,"jerryfolder" ) //define your folder where the uploaded media will be received
        },
        filename:function(req,file,cb)
        {
            cb(null, file.fieldname+"-"+Date.now()+".jpg") //defining the name of file
        }
    })
}).single("user_file")


//Above function is placed here as the 2nd perimeter
app.post('/upload',upload,(req,resp)=>{
    resp.send("FILE UPLOAD OK")
    console.log(resp)

})