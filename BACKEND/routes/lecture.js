const router = require("express").Router();

let Lecture = require("../models/lecture");

router.route("/addLECTURE").post((req,res)=>{

    const lName = req.body.lName;
    const year = Number(req.body.year);
    const semester =Number(req.body.semester);
    const module = req.body.module;
    const moduleN = req.body.moduleN;
    const date = req.body.date;
    const time =req.body.time;
    const mType = req.body.mType;
    const mLink = req.body.mLink;
   

    const newLecture = new Lecture({
      lName,
      year,
      semester,
      module,
      moduleN,
      date,
      time,
      mType,
      mLink
    })

    newLecture.save().then(()=>{
        res.json("Lecture Added") 
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{
    Lecture.find().then((lectures)=>{
        res.json(lectures)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route("/updateLECTURE/:id").put(async (req,res)=>{
    let userID = req.params.id;
    const {lName,year,semester,module,moduleN,date,time,mType,mLink}= req.body;

    const updateLecture = {

        lName,
        year,
        semester,
        module,
        moduleN,
        date,
        time,
        mType,
        mLink
    }
    const update = await Lecture.findByIdAndUpdate(userID, updateLecture)
    .then(()=>{
        res.status(200).send({status:"lecture updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data" , error: err.message});
         
    })
        
})

router.route("/delete/:id").delete(async (req, res)=>{
    let userID = req.params.id;

    await Lecture.findByIdAndDelete(userID)
    .then(() => {
        res.status(200).send({status: "lecture deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res)=>{
    let userID = req.params.id;

    const user = await Lecture.findById(userID)
    .then((lecture) => {
        res.status(200).send({status: "Lecture fetched",lecture});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with fetche lecture", error: err.message});
    })
})


module.exports = router;
