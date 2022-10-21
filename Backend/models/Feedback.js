const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    
    id: {
        type : String,
        required: true
    },
    name : {
        type: String,
    },
    feedback : {
        type: String,
    },
     
})

const Feedback = mongoose.model("Feedback",feedbackSchema);

module.exports = Feedback;