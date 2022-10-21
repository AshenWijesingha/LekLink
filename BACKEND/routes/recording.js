const router = require("express").Router();
let Recording = require("../models/recording");

router.route("/addRECORDING").post((req,res)=>{

    const recordingName = req.body.recordingName;
    const moduleName = req.body.moduleName;
    const moduleCode = req.body.moduleCode;
    const lecturerName = req.body.lecturerName;
    const category = req.body.category;
    const date = req.body.date;
    const video = req.body.video;

    const newRecording = new Recording({
      recordingName,
      moduleName,
      moduleCode,
      lecturerName,
      category,
      date,
      video  
    })

    newRecording.save().then(()=>{
        res.json("Recording Added") 
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{
    Recording.find().then((recordings)=>{
        res.json(recordings)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route("/updateRECORDING/:id").put(async (req,res)=>{
    let userID = req.params.id;
    const {recordingName,moduleName,moduleCode,lecturerName,category,date,video}= req.body;

    const updateRecording = {

      recordingName,
      moduleName,
      moduleCode,
      lecturerName,
      category,
      date,
      video 
    }
    const update = await Recording.findByIdAndUpdate(userID, updateRecording)
    .then(()=>{
        res.status(200).send({status:"recording updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data" , error: err.message});
         
    })
        
})

router.route("/delete/:id").delete(async (req, res)=>{
    let userID = req.params.id;

    await Recording.findByIdAndDelete(userID)
    .then(() => {
        res.status(200).send({status: "recording deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res)=>{
    let userID = req.params.id;

    const user = await Recording.findById(userID)
    .then((recording) => {
        res.status(200).send({status: "Recording fetched",recording});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with fetche recording", error: err.message});
    })
})

module.exports = router;
