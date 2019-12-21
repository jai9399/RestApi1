const express = require('express')
const mongoose = require('mongoose')
const mongodb = require('mongodb')
const app = express();
app.use(express.static('C:/Users/Jai Kathuria/Desktop/FirstApi'))
const User1 = require('./user');
require('./databaselog.js');
console.log(User1);
app.use(express.json());
app.use(express.urlencoded())
const port = 3000;
app.listen(port,function(){
    console.log('Sever Running!'+port);
})
app.get('/',function(req,res){
    res.sendFile('C:/Users/Jai Kathuria/Desktop/FirstApi/try.html')
})
app.post('/users',function(req,res){
    const user = new User1(req.body);
    user.save().then(()=>{
        console.log('Saved');
        res.send(user)
    }).catch((error)=>{
      console.log(error)  
    })   
})