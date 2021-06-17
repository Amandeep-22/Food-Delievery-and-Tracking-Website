const express = require("express");
const app= express();
const port=80;
const path= require("path");

//EXPRESS STUFF
app.use('/static',express.static('static'));

//PUG STUFF

app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'views'));

//ENDPOINTS

app.get("/", (req,res)=>{
    res.status(200).render('index.pug');
});

app.listen(port ,()=>{
    console.log("successful");
});