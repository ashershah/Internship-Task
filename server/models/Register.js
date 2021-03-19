const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
fullName : {
     type : String,
     required : true,
 },
  email : {
      type : String,
      required : true,
    
  },
 
  password : {
    type : String,
    required : true,
  
}
});


//collection

const Register = mongoose.model("Register",registerSchema);
module.exports= Register; 