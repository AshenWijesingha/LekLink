const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recordingSchema = new Schema({
   recordingName : {
       type : String,
       required: true
   },
   moduleName : {
       type : String,
       required: true
   },
   moduleCode : {
       type : String,
       required: true
   },
   lecturerName : {
       type : String,
       required: true
   },
   category : {
       type : String,
       required: true
   },
   date : {
       type : String,
       required: true
   },
   video : {
       type : String,
       required: true
}
})

const Recording = mongoose.model("Recording",recordingSchema);

module.exports = Recording;