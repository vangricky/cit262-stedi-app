const express = require('express');
const app = express();

app.get("/ricky", (req, res)=> {
    res.send("Hello Ricky!");
})

app.get("/", (req, res)=> {
    
    res.send("Welcome to my backend API!");
})

app.listen(3000, ()=> {

    console.log("Listening");
})