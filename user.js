

const mongoose = require('mongoose');
const validator = require('validator');

require('./databaselog.js')
const User =mongoose.model('User',{
  name:{
      type: String,
      required :true
  },
  email:{
     type:String,
        validate(value){
            if(!validator.isEmail(value)){
                 throw new Error("Incorrect Email");
             }
              
        }
 },
 age:{
      type:String,
         validate(value){
             if(value<0 || value >150){
                  throw new Error('Incorrect Age')
              }
        
         }
  }
})

 module.exports = User;