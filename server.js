'use strict'

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 3000;

// middleware 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//set end point 

app.get('/', (req, res) =>{
    res.send("Hello world")
});

app.listen(port, () =>{
    console.log(`Server running at http://localhost:${port}`)
})