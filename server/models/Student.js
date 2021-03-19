const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
 studentName : {
     type : String,
     required : true,
 },
  rollNumber : {
      type : Number,
      required : true,

  },
 
});

const Student = mongoose.model("student",studentSchema);
module.exports= Student; 
