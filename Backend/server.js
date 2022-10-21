const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URI;


mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongodb connection success!");
})

const userRouter = require("./routes/User-routes");
const feedbackRouter = require("./routes/feedback.js");


app.use("/user",userRouter);
app.use("/feedback",feedbackRouter);


app.listen(PORT, () => {
console.log(`Server is up and running on port number: ${PORT}`);
});