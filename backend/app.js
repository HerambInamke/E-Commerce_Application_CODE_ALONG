const express = require("express");
const app = express();

if(process.env.NODE_EMV !== "PRODUCTION"){
    require("dotenv").config({
        path: "backend/config/.env",
    })
}

app.get('/', (req, res)=>{
    return res.send("Welcome to backend");
})

module.exports = app;

//AvK2HJ5CO74se77C