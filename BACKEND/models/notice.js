const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noticeSchema = new Schema({
    lName : {
        type : String,
        required: true
    },
    mName : {
     type : String,
     required: true
    },
    mNo : {
        type : String,
        required: true
    },
    date : {
        type : String,
        required: true
    },
    message : {
        type : String,
        required: true
    }
})

const Notice = mongoose.model("Notice",noticeSchema);

module.exports = Notice;