const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        
        trim: true
    },
    idnumber: {
        type: String,
        
        trim: true
    },
    nic: {
        type: String,
        
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: function(){return !this.isUpdate }
    },
    position: {
        type: String,
        
    },
    department: {
        type: String,
        
    },
    image: {
        type: String,
        
    },
    userType:{
        type: String,
    },
    isUpdate: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema)