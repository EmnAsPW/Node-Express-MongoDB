const express = require('express');
const app = express();
const userRouter = require("./routes/users.route");

app.use("/api/user",userRouter);

app.use("/register",(req, res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/register.html");
    // res.status(200).json({
    //     message: "I am register page",
    //     statusCode: 200,
    // });
});

app.use("/", (req, res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/index.html");
    // res.send("I am from get home route");
});

app.use((req,res)=>{
    res.send("This is wrong url");
});


module.exports = app;