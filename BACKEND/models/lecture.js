const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const lectureSchema = new Schema({
   lName : {
       type : String,
       required: true
   },
   year : {
    type : Number,
    required: true
   },
   semester : {
       type : Number,
       required: true
   },
   module : {
       type : String,
       required: true
   },
   moduleN : {
    type : String,
    required: true
   },
   date : {
    type : Date,
    required: true
   },
   time : {
       type : String,
       required: true
   },
   mType : {
    type : String,
    required: true
   },
   mLink : {
       type : String,
       required: true
   }
})

const Lecture = mongoose.model("Lecture",lectureSchema);

module.exports = Lecture;