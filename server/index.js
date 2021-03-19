const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const { findOneAndRemove } = require("./models/Student");
const Student = require("./models/Student");
const app = express();

const StudentModel = require("./models/Student");
const RegisterModel = require("./models/Register");



app.use(express.json());
app.use(cors());


mongoose.connect(
    "mongodb+srv://syed:syed123@crud.tme0m.mongodb.net/student?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

app.post("/insert", async (req, res) => {
    const studentName = req.body.studentName;
    const rollNumber = req.body.rollNumber;
    const student = new StudentModel({ studentName: studentName, rollNumber: rollNumber });

    try {
        await student.save();
        res.send("inserted data");
    } catch (err) {
        console.log(err);
    }
});


app.post("/register", async (req, res) => {
  try {  const fullName = req.body.fullName;
    const email = req.body.email;
    const password = req.body.password;
    const register = new RegisterModel({ fullName: fullName,email:email,password: password});
       
     const ff=await register.save();
     if(ff.email===email){
        
       
      return  res.status(201).json({ status: true, msg: 'Registered'});
       
    }else{
        return res.status(200).json({status : false , msg :'Try more'});
    }
    } catch (err) {
        console.log(err);
        return res.status(200).json({status : false , msg : err.message});

    }
});




app.post("/login", async (req, res) => {
   try { 
    const email = req.body.email;
    const password = req.body.password;
    const userEmail = await RegisterModel.findOne({email:email})
      if(userEmail && userEmail.password===password){
          console.log(userEmail);
         
        return  res.status(201).json({ status: true, msg: 'User Logged in'});
         
      }else{
          return res.status(200).json({status : false , msg :'No User or wrong password'});
      }
    } catch (err) {
        return res.status(200).json({status : false , msg : err.message});
       
    
        
    }
});







app.get("/read", async (req, res) => {
    StudentModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);
    })
}
);


app.put("/update", async (req, res) => {
    const newstudentName = req.body.newstudentName;
    const id = req.body.id;

    try {
        await StudentModel.findById(id, (err, updatestudent) => {
            updatestudent.studentName = newstudentName;
            updatestudent.save();
            res.send("update");
        })
    } catch (err) {
        console.log(err);
    }
});
app.delete("/delete/:id", async (req, res) => {

    const id = req.params.id;
    await StudentModel.findByIdAndRemove(id).exec();
    res.send('deleted');
});
app.listen(3001, () => {
    console.log("server running on port 3001...");
});