require('dotenv').config()   // env file import
const express = require("express");  /// express import 

const app = express(); // express object
const mongoose = require('mongoose')   // require mongoose as mongoose 

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});//  connection to database
const db = mongoose.connection   

// error and success message
db.on('error',(error)=>console.error(error))
db.once('open',()=>console.log("connected database"));

// server setup to accept json
app.use(express.json())
 
// routes setup
const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers', subscribersRouter)
// 'localhost:3001/subscribers'


// connecting to database
app.listen(3001, ()=>{
    console.log("Server started on 3001");
})

// create routes for or server and accept json
