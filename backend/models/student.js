const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
    },
    password : {
        type: String,
    },
    cpassword : {
        type: String,
    },
    contact : {
        type: String,
    },
    year : {
        type: String,
    },
    semester : {
        type: String,
    },
    batch : {
        type: String,
    },
    nic : {
        type: String,
    }
})

const Student = mongoose.model("Student",StudentSchema);

module.exports = Student;