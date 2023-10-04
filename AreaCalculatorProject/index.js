const express = require('express');
const app = express();
const PORT =3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// app.post("/user",(req,res)=>{
//    const name = req.body.name;
//    res.send(`welcome ${name}`)
// });
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.get("/circle",(req,res)=>{
    res.sendFile(__dirname+"/circle.html");
});

app.get("/triangle",(req,res)=>{
    res.sendFile(__dirname+"/traingle.html");
});

app.post("/triangle",(req,res)=>{
    const height = req.body.height;
    const base = req.body.base;
    const area = .5*height*base;

    res.send(`Area of triangle : ${area}`);
});
app.post("/circle",(req,res)=>{
    const radius = req.body.radius;
    
    const area = Math.PI*radius*radius;

    res.send(`Area of triangle : ${area}`);
});

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});