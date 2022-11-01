//This file contains routes related to Signup page

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.get("/", (req, res)=>{
    res.send("HELLO WORLD")
  })
  
app.get("/signup", (req, res) =>{
    res.sendFile(__dirname + '/index.html')
  })

