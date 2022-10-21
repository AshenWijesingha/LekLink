const express = require('express');
const mongoose =  require ('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser'); //js middleware
require("dotenv").config();

const app = express();

const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());


const url = process.env.MONGODB_URL;

mongoose.connect(url,{
    useNewUrlParser :true,
    useUnifiedTopology :true
});



const connection = mongoose.connection;
// 

const Student = require('./routes/student.js')
app.use("/manageStudent",Student)

const Lecturer = require('./routes/lecturer.js')
app.use("/manageLecturer",Lecturer)

const Schedule = require('./routes/schedule.js')
app.use("/manageSchedule",Schedule)

connection.once("open",() =>{
    console.log("MongoDb connected!");
});

app.listen(port,()=>{
    console.log("PORT connected on "+port);
})