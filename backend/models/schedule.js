const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var Schedule = new mongoose.Schema({
    Topic:{
        type:String,
        required:true,
    },
    Year:{
        type:String,
        required:true,
    },
    Semester:{
        type:String,
        required:true,
    },
    Module:{
        type:String,
        required:true,
    },
    Date:{
        type:Date,
        required:true,
    },
    Time:{
        type:String,
        required:true,
    },
    MeetingType:{
        type:String,
        required:true,
    },
    MeetingLink:{
        type:String,
        required:true,
    },
});

//Export the model

const Schedules = mongoose.model("Schedule",Schedule);

module.exports = Schedules;
