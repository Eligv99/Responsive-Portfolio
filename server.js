var express = require('express');
var app =  express();
var path = require("path");

// Setting up PORT # 
var PORT = process.env.PORT || 5000;

// Setting up static folder 
app.use(express.static(path.join(__dirname, 'public')));

// Starting off our server
app.listen(PORT, function(){
    console.log("Our server is connected thru port http://localhost:5000/index.html ")
});

