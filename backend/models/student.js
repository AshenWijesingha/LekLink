const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var Student = new mongoose.Schema({
    studentID:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
    },
    Name:{
        type:String,
        required:true,
    },
    Year:{
        type:String,
        required:true,
    },
    Batch:{
        type:String,
        required:true,
    },
    Day:{
        type:String,
        required:true,
    },
    Specialization:{
        type:String,
        required:true,
    },
});

//Export the model

const Students = mongoose.model("Student",Student);

module.exports = Students;
