const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var Lecturer = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    Name:{
        type:String,
        required:true,
    },
    ModuleName:{
        type:String,
        required:true,
    },
    Modulecode:{
        type:String,
        required:true,
    },
    Year:{
        type:String,
        required:true,
    },
    Posission:{
        type:String,
        required:true,
    },
    ContactNo:{
        type:String,
        required:true,
    },
});

//Export the model

const Lecturers = mongoose.model("Lecturer",Lecturer);

module.exports = Lecturers;
