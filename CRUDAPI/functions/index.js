const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();

//Routes
app.get('hello-world',(req,res)=>{
    return res.status(200).send('Hello World!');
})
//Create
//post

//Read
//get

//Update
//put

//Delete
//delete

//Export the apu to Firebase Cloud Functions